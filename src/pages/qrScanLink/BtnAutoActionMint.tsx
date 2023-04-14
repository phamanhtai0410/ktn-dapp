
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


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const BtnAutoActionMint = ({ easyWeb3 ,dataAction }) => {

    const [isPending, setIsPending] = useState(false);
    const [step, setStep] = useState(null);
    
    const listItems = useSelector(selectCartItems);
    const dispatch = useAppDispatch();

    const mintNftHandler = async () => {

        if (isPending) { return ; }
        setIsPending(true);

        const accountAddress =  easyWeb3.walletInfo?.address;

        try {

            const { ethereum } = window;

            if (ethereum && accountAddress && listItems && listItems.length > 0) {

                let amount = ( dataAction?.refCode ? sumCartDiscountTotal(listItems) : sumCartTotal(listItems));
                if(dataAction && dataAction?.promotionDiscount){
                    amount = percentToPrice(amount,dataAction?.promotionDiscount);
                }

                //STEP 1: create metadata NFT1
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
                    items: listItems.map(item => item?.nft_id.toString())
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

                setStep(null);
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
            const accountAddress =  easyWeb3.walletInfo?.address;

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

    // const checkChainNetwork = async () => {

    //     const chainId =  easyWeb3.walletInfo?.chainId;
    //     if(chainId === 97){
    //         mintNftHandler();
    //     }else if(chainId === 5){
    //         createOrderAndMint()
    //     }else{
    //        mintNftHandler();
    //     }

    // }


     useEffect( ()  => {

        const { chainId } = easyWeb3?.walletInfo;

        if(step === null && chainId && chainId !== dataAction.chainId){
            easyWeb3.switchEthereumChain(CHAIN_ID_BSC)
            setStep("0")
            // mintNftHandler();
        }

        if(step === null && chainId && chainId == dataAction.chainId){
            setStep("0")
            // mintNftHandler();
        }

    },[easyWeb3,dataAction])


    useEffect( ()  => {
        if(step == "0" && isPending === false && listItems && listItems.length > 0 ) {
            mintNftHandler();
        }
    },[step,listItems])

    return (
        <>
            {isPending ? <Beforeunload onBeforeunload={(event) => event.preventDefault()} /> : ""}
        </>
    )

}

export default BtnAutoActionMint;