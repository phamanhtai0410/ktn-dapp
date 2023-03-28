
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Beforeunload } from 'react-beforeunload';
import { CircularProgress } from '@mui/material'

import queryString from 'query-string';

import { useAppDispatch } from '@/app/hooks';

import { approveMint, createMetaDataNFT, createOrder, mintNftWithBSC, sendTxPaymentOrder, transferWalletDev } from '@/actions/paymentActions';
import { selectCartItems, selectPromotion, selectRefCode, setItemNFTs } from '@/reducers/cartSlice';
import { selectEasyWeb3, selectWalletAccount } from '@/reducers/walletSlice';
import { addAlert } from '@/reducers/alert';
import { useLocation, useSearchParams } from 'react-router-dom';
import {  percentToPrice, sumCartDiscountTotal, sumCartTotal } from '@/_helpers/utils/lib';
import { openModalAwaiting, updateSuccessAwaiting } from '@/reducers/modalAwaitingSlice';
import { CHAIN_ID_BSC } from '@/service/web3/constants/config';
import { fetchDetailNFTs } from '@/actions/nftActions';
import QrCode from '@/components/mint/QrCode';

interface IQueryQR {
    refCode: string & any,
    nft_id : string & any,
    collectionAddress:string & any,
    promotionCode:string & any,
    promotionDiscount:string & any
  }

const BtnAutoActionMint = () => {

    const [searchParams] = useSearchParams();
    let location = useLocation();

    
    const [isPending, setIsPending] = useState(false);
    const [step, setStep] = useState("");

    const accountAddress = useSelector(selectWalletAccount);
    const easyWeb3 = useSelector(selectEasyWeb3);
    const listItems = useSelector(selectCartItems);

    const [dataAction, setDataAction] = useState<IQueryQR>({
        refCode: null,
        nft_id : null,
        collectionAddress:null,
        promotionCode:null,
        promotionDiscount:null
    });

    const dispatch = useAppDispatch();

    const mintNftHandler = async () => {

        if (isPending) { return ; }
        setIsPending(true);

        try {

            const { ethereum } = window;

            if (ethereum && accountAddress) {

                let amount = ( dataAction?.refCode ? sumCartDiscountTotal(listItems) : sumCartTotal(listItems));
                if(dataAction && dataAction?.promotionDiscount){
                    amount = percentToPrice(amount,dataAction?.promotionDiscount);
                }

                //STEP 1: create metadata NFT
                setStep("Pending...")
                dispatch(openModalAwaiting({ 
                    isOpen: true,
                    message:"Pending..."
                }))
                const metaData = await dispatch(createMetaDataNFT({
                    chain_id: listItems[0]?.chain_id,
                    collection_address: dataAction?.collectionAddress,
                    promotion_code: dataAction?.promotionCode || null,
                    ref_code: dataAction?.refCode || null,
                    address: accountAddress,
                    items: listItems.map(item => item.nft_id)
                }))
                if(metaData.meta.requestStatus === "rejected" || metaData.payload?.error_code ){
                    throw (metaData.payload.msg || metaData.payload);
                }

                // STEP 2: Approve mint and Check Account Balance
                setStep("Approving...")
                dispatch(openModalAwaiting({ 
                    isOpen: true,
                    message:"Minting 1/3"
                }))
                const accountApprove =  await dispatch(approveMint({
                    amount
                }))
                if(!accountApprove || accountApprove.meta.requestStatus === "rejected"){
                    throw (accountApprove.payload.reason || accountApprove.payload);
                }

                //STEP 3: mint NFT
                setStep("Mint...")
                if(metaData.payload.data){
                    dispatch(openModalAwaiting({ isOpen: true,
                        message:"Minting 2/3"
                    }))
                    const mintRes = await dispatch(mintNftWithBSC({
                        data:   metaData.payload.data,
                        signature :metaData.payload.signature,
                        callback: metaData.payload.callback,
                        amount
                    }))
                    if(!mintRes || mintRes.meta.requestStatus === "rejected"){
                        throw (mintRes.payload.reason || mintRes.payload);
                    }
                
                    dispatch(updateSuccessAwaiting({
                        message: "Completed!"
                    }))
                }

                setStep("");
                setIsPending(false);

               
            } else {
                console.log("Ethereum object does not exist");
            }
    
        } catch (err) {
            
            console.log(err);
            setIsPending(false);
            
            dispatch(
                addAlert({
                    type: 'error',
                    key: 1,
                    message: {
                        status: 'warning',
                        title: "Mint warning",
                        description: err
                    },
                }),
            )

            dispatch(openModalAwaiting({ 
                isOpen: false,
                message: null
            }))
            
        }
    }

    const createOrderAndMint = async () => {

        if (isPending) { return; }    
        setIsPending(true);

        try {

            const { ethereum } = window;

            if (ethereum && accountAddress) {

                let amount = ( dataAction?.refCode ? sumCartDiscountTotal(listItems) : sumCartTotal(listItems));
                if(dataAction && dataAction?.promotionDiscount){
                    amount = percentToPrice(amount,dataAction?.promotionDiscount);
                }

                // STEP 1: create order NFT
                setStep("Pending...");
                dispatch(openModalAwaiting({ isOpen: true,
                    message:"Minting 1/3"
                }))
                const orderData = await dispatch(createOrder({
                    items: listItems.map(item => {
                        return{
                            nft_id:  item.nft_id,
                            amount :1
                        }
                    }),
                    address: accountAddress,
                    unit: "USDT", 
                    chain: "ETHEREUM_CHAIN",
                    ref_code: dataAction?.refCode  || null,
                    promotion_code: ""
                }))

                if(orderData.meta.requestStatus === "rejected"  || orderData.payload.error_code){
                    throw (orderData.payload.msg);
                }

                // STEP 2 : Transfer wallet address dev
                if(orderData.payload?.order_id){
                    setStep("Transfer...");
                    setTimeout(() => {
                        dispatch(openModalAwaiting({ isOpen: true,
                            message:"Minting 2/3"
                        }))
                    }, 1000);
                    const mintRes = await dispatch(transferWalletDev({
                        address_of_counter:   orderData.payload?.address_of_counter,
                        amount
                    }))

                    if(!mintRes || mintRes.meta.requestStatus === "rejected"){
                        throw (mintRes.payload.reason || mintRes.payload.message || mintRes.payload);
                    }

                    // // STEP 3 : Send log payment
                    if(mintRes && mintRes.meta.requestStatus === "fulfilled"){
                        setStep("Transfer...");
                        dispatch(openModalAwaiting({ isOpen: true,
                            message:"Minting 3/3"
                        }))
                        await dispatch(sendTxPaymentOrder({
                            order_id : orderData.payload?.order_id,
                            tx_hash : mintRes.payload.transactionHash
                        }))
                    }

                    dispatch(updateSuccessAwaiting({
                        message: "Completed!"
                    }))

                }
                setStep("");
                setIsPending(false);
               
            } else {
                console.log("Ethereum object does not exist");
            }
    
        } catch (err) {

            console.log(err);
            setIsPending(false);
                       
            dispatch(
                addAlert({
                    type: 'error',
                    key: 1,
                    message: {
                        status: 'warning',
                        title: "Mint warning",
                        description: err
                    },
                }),
            )

            dispatch(openModalAwaiting({ 
                isOpen: false,
                message: null
            }))

        }
    }

    const checkChainNetwork = async () => {

        const {chainId} = easyWeb3.walletInfo;

        if(chainId === 97){
            mintNftHandler();
        }else if(chainId === 5){
            createOrderAndMint()
        }else{
            easyWeb3.switchEthereumChain(CHAIN_ID_BSC)
        }

    }

    useEffect(() => {
        const parsed = queryString.parse(location.search);
        if(parsed){
            setDataAction({
                refCode: parsed?.refCode,
                nft_id : parsed?.nft_id,
                collectionAddress:  parsed?.collectionAddress,
                promotionCode:  parsed?.promotionCode,
                promotionDiscount:  parsed?.promotionDiscount,
            })
        }
    },[location])

    useEffect(() => {
        // if(accountAddress){
        //     alert(accountAddress)
        // }
        if(accountAddress  && dataAction && listItems){ 
            checkChainNetwork()
        }
    },[accountAddress, dataAction,listItems ])

    useEffect(() => {
        if (dataAction.collectionAddress &&  dataAction.nft_id) {
          fetchCartItems(dataAction.collectionAddress,dataAction.nft_id)
        }
    }, [dataAction])
    
    const fetchCartItems = async (address, nft_id) => {
        const itemsCart = await dispatch(fetchDetailNFTs({ address, nft_id }))
        if (itemsCart) {
            dispatch(setItemNFTs(itemsCart.payload.items))
        }
    }

    return (
        <div className='flex bg-[#11151B] my-28 justify-center'>
            {isPending ? <Beforeunload onBeforeunload={(event) => event.preventDefault()} /> : ""}
            <QrCode data={dataAction} />
        </div>
    )

}

export default BtnAutoActionMint;