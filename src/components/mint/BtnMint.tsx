
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Beforeunload } from 'react-beforeunload';
import { CircularProgress } from '@mui/material'

import { useAppDispatch } from '@/app/hooks';

import { approveMint, createMetaDataNFT, createOrder, mintNftWithBSC, sendTxPaymentOrder, transferWalletDev } from '@/actions/paymentActions';
import { selectCartItems, selectPromotion, selectRefCode, selectUserCartByNFT } from '@/reducers/cartSlice';
import { selectEasyWeb3, selectWalletAccount } from '@/reducers/walletSlice';
import { addAlert } from '@/reducers/alert';
import { useSearchParams } from 'react-router-dom';
import {  percentToPrice, sumCartDiscountTotal, sumCartTotal } from '@/_helpers/utils/lib';
import { openModalAwaiting, updateSuccessAwaiting } from '@/reducers/modalAwaitingSlice';
import { CHAIN_ID_BSC, chainNetworks } from '@/service/web3/constants/config';
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const BtnMint = () => {

    const [searchParams] = useSearchParams();

    const [isPending, setIsPending] = useState(false);
    const [step, setStep] = useState("");

    const accountAddress = useSelector(selectWalletAccount);
    const easyWeb3 = useSelector(selectEasyWeb3);

    const refCode = useSelector(selectRefCode);
    const listItems = useSelector(selectCartItems);
    const promotion = useSelector(selectPromotion);
    // const userNFT = useSelector(selectUserCartByNFT);

    const dispatch = useAppDispatch();

    const mintNftHandler = async () => {

        if (isPending) { return ; }
        setIsPending(true);

        try {

            const { ethereum } = window;

            if (ethereum && accountAddress) {

                let amount = ( refCode ? sumCartDiscountTotal(listItems) : sumCartTotal(listItems));
                if(promotion && promotion?.discount){
                    amount = percentToPrice(amount,promotion?.discount);
                }

                //STEP 1: create metadata NFT
                setStep("Pending...")
                dispatch(openModalAwaiting({ 
                    isOpen: true,
                    message:"Pending..."
                }))
                const metaData = await dispatch(createMetaDataNFT({
                    chain_id: listItems[0]?.chain_id,
                    collection_address: listItems[0]?.address,
                    promotion_code: promotion?.code || null,
                    ref_code: refCode || null,
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

                setStep("")
                setIsPending(false)
               
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

                let amount = ( refCode ? sumCartDiscountTotal(listItems) : sumCartTotal(listItems));
                if(promotion && promotion?.discount){
                    amount = percentToPrice(amount,promotion?.discount);
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
                    ref_code: refCode || null,
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

        // if(userNFT.user_whitelist_amount > 0){
        //     dispatch(
        //         addAlert({
        //             type: 'error',
        //             key: "ALERT_MINT_INVALID",
        //             message: {
        //                 status: 'warning',
        //                 title: "User not in  whitelist",
        //             },
        //         }),
        //     )
        //     return;
        // }

        // if(userNFT.user_whitelist_amount < userNFT.total_user_minted){
        //     dispatch(
        //         addAlert({
        //             type: 'error',
        //             key: "E_USER_MINT_LIMIT_AMOUNT_EX",
        //             message: {
        //                 status: 'warning',
        //                 title: "User Mint Limit Amount",
        //             },
        //         }),
        //     )
        //     return;
        // }

        const{ chain_id } = listItems[0];

        if(chain_id !== chainId ){
            await easyWeb3.switchEthereumChain(chain_id)
            await sleep(1000)
        }

        if(!chainNetworks.includes(chain_id.toString())){
            alert("List of local network channel is not supported.")
            return;
        }

        mintNftHandler();

    }

    return (
        <>
            {isPending ? <Beforeunload onBeforeunload={(event) => event.preventDefault()} /> : ""}
            { listItems && listItems[0]?.total_minted < listItems[0]?.total_supply &&
                <div 
                onClick={e=>{checkChainNetwork()}}
                className="flex items-center ml-[10px] justify-center w-[210px] text-[24px] text-[#11151B] font-extrabold h-[43px] bg-[#F9C306] rounded-[5px] uppercase cursor-pointer"
                >
                    { isPending ? <CircularProgress color="info" size="1.2rem" /> : "MINT NOw" }
                    { isPending ? <span className='ml-2'>{step}</span> :"" }  
                </div>  
            }
        </>
    )

}

export default BtnMint;