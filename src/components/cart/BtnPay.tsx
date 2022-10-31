
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Beforeunload } from 'react-beforeunload';
import { CircularProgress } from '@mui/material'

import { useAppDispatch } from '@/app/hooks';

import { approveMint, createMetaDataNFT, createOrder, mintNftWithBSC, sendTxPaymentOrder, transferWalletDev } from '@/actions/paymentActions';
import { applyCode, selectCartItems, selectPromotion } from '@/reducers/cartSlice';
import { selectChain, selectEasyWeb3, selectGetByChainID, selectWalletAccount } from '@/reducers/walletSlice';
import { getUserRefcode, percentToPrice, sumCartDiscountTotal, sumCartTotal} from '@/_helpers/utils/lib';
import { useSearchParams } from 'react-router-dom';
import { openModalAwaiting, updateSuccessAwaiting } from '@/reducers/modalAwaitingSlice';

const BtnPay = () => {

    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const accountAddress = useSelector(selectWalletAccount);
    const easyWeb3 = useSelector(selectEasyWeb3);

    const listItems = useSelector(selectCartItems);
    const promotion = useSelector(selectPromotion);

    const chainPayment = useSelector(selectGetByChainID)

    const [isPending, setIsPending] = useState(false);
    const [step, setStep] = useState("");

    const refCode = searchParams.get('r') || getUserRefcode();

    const mintNftHandler = async () => {

        if (isPending) { return; }
        setIsPending(true);

        try {

            const { ethereum } = window;
            
            if (ethereum && accountAddress) {

                let amount = ( refCode ? sumCartDiscountTotal(listItems) : sumCartTotal(listItems));
                if(promotion && promotion?.discount){
                    amount = percentToPrice(amount,promotion?.discount);
                }

                //STEP 1: create metadata NFT
                setStep("Pending...");
                dispatch(openModalAwaiting({ isOpen: true,
                    message:"Pending..."
                }))
                const metaData = await dispatch(createMetaDataNFT({
                    promotion_code: promotion?.code || null,
                    ref_code: refCode || null,
                    address: accountAddress,
                    items: listItems.map(item => item.nft_id)
                }))
                if(metaData.payload?.error_code){
                    throw (metaData.payload.msg);
                }
               

                // STEP 2: Approve mint and Check Account Balance
                setStep("Approving...");
                dispatch(openModalAwaiting({ isOpen: true,
                    message:"Minting 1/3"
                }))
                const accountApprove =  await dispatch(approveMint({
                    amount
                }))
                
                if(!accountApprove || accountApprove.meta.requestStatus === "rejected"){
                    throw (accountApprove.payload.reason || accountApprove.payload);
                }
                
                //STEP 3: mint NFT
                setStep("Mint...");
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

                    if(promotion && promotion.code){
                        dispatch(applyCode({
                            code:null,
                            discount: null
                        }))
                    }
                }

                dispatch(updateSuccessAwaiting({
                    message: "Completed!"
                }))

                setStep("");
                setIsPending(false);
               
            } else {
                console.log("Ethereum object does not exist");
            }
    
        } catch (err) {
            
            // dispatch(
            //     setAlert({
            //       type: 'error',
            //       key: 1,
            //       message: {
            //         status: 'warning',
            //         title: err,
            //       },
            //     }),
            //   )
            dispatch(openModalAwaiting({ 
                isOpen: false,
                message: null
            }))
            alert(err);
            setIsPending(false);
            console.log(err);
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
                            nft_id: item.nft_id,
                            amount :1
                        }
                    }),
                    address: accountAddress,
                    unit: "USDT", 
                    chain: "ETHEREUM_CHAIN",
                    ref_code: refCode || null,
                    promotion_code: promotion?.code || null,
                }))

                if(orderData.payload.error_code){
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
                        throw (mintRes.payload.reason || mintRes.payload);
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
                        if(promotion && promotion.code){
                            dispatch(applyCode({
                                code:null,
                                discount: null
                            }))
                        }
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
            dispatch(openModalAwaiting({ 
                isOpen: false,
                message: null
            }))
            alert(err);
            setIsPending(false);
        }
    }

    const checkChainNetwork = async () => {

        const {chainId} = easyWeb3.walletInfo;

        if(chainId === 97){
            mintNftHandler();
        }else if(chainId === 5){
            createOrderAndMint()
        }

    }

    return (
       <>
        {isPending ? <Beforeunload onBeforeunload={(event) => event.preventDefault()} /> : ""}
        <button
            onClick={e=>{checkChainNetwork()}}
            className={`button w-full font-medium text-white text-base p-3 flex items-center justify-center rounded-[32px] cursor-pointer`}>
            { chainPayment ? <img src={chainPayment.asset_logo} className="w-6 h-6 mr-2" /> :""}
            { isPending ? <CircularProgress color="info" size="1.2rem" /> :"Pay with USDT" } 
            { isPending ? <span className='ml-2'>{step}</span> :"" }  
        </button>
       </>
    )

}

export default BtnPay;