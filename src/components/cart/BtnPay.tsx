
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Beforeunload } from 'react-beforeunload';
import { CircularProgress } from '@mui/material'

import { useAppDispatch } from '@/app/hooks';
import { NFTModel } from '@/models/redux-models';

import { approveMint, createMetaDataNFT, createOrder, mintNftWithBSC, sendTxPaymentOrder, transferWalletDev } from '@/actions/paymentActions';
import { selectCartItems, selectPromotion } from '@/reducers/cartSlice';
import { selectEasyWeb3, selectWalletAccount } from '@/reducers/walletSlice';
import { setAlert } from '@/reducers/alert';

const sumTotal = (arr:NFTModel[]) => arr.reduce((sum:number, { price }) => sum + price , 0)

const BtnPay = () => {

    const dispatch = useAppDispatch();

    const accountAddress = useSelector(selectWalletAccount);
    const easyWeb3 = useSelector(selectEasyWeb3);

    const listItems = useSelector(selectCartItems);
    const promotion = useSelector(selectPromotion);

    const [isPending, setIsPending] = useState(false);
    const [step, setStep] = useState("");

    const mintNftHandler = async () => {

        if (isPending) { return; }
        setIsPending(true);

        try {

            const { ethereum } = window;

            if (ethereum && accountAddress) {

                //STEP 1: create metadata NFT
                setStep("Pending...");
                const metaData = await dispatch(createMetaDataNFT({
                    promotion_code: promotion?.code || null,
                    address: accountAddress,
                    items: listItems.map(item => item.nft_id)
                }))
                if(metaData.payload?.error_code){
                    throw (metaData.payload.msg);
                }

                let amount = sumTotal(listItems) - (promotion?.discount || 0);

                // STEP 2: Approve mint and Check Account Balance
                setStep("Approving...");
                const accountApprove =  await dispatch(approveMint({
                    amount
                }))
                if(!accountApprove || accountApprove.meta.requestStatus === "rejected"){
                    throw (accountApprove.payload.reason);
                    // alert(accountApprove.payload.reason);
                    // setIsPending(false);
                    // return ;
                }
                
                //STEP 3: mint NFT
                setStep("Mint...");
                if(metaData.payload.data){
                    const mintRes = await dispatch(mintNftWithBSC({
                        data:   metaData.payload.data,
                        signature :metaData.payload.signature,
                        amount: sumTotal(listItems)
                    }))
                    if(!mintRes || mintRes.meta.requestStatus === "rejected"){
                        throw (mintRes.payload.reason);
                    }
                    dispatch(
                        setAlert({
                          type: 'success',
                          key: 1,
                          message: {
                            status: 'success',
                            title: 'Successfully!',
                          },
                        }),
                      )
                     //alert("Successfully!")
                }

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

                let amount = sumTotal(listItems) - (promotion?.discount || 0);

                // STEP 1: create order NFT
                setStep("Pending...");
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
                    promotion_code: promotion?.code || null,
                }))

                if(orderData.payload.error_code){
                    throw (orderData.payload.msg);
                }

                // STEP 2 : Transfer wallet address dev
                if(orderData.payload?.order_id){
                    setStep("Transfer...");
                    const mintRes = await dispatch(transferWalletDev({
                        address_of_counter:   orderData.payload?.address_of_counter,
                        amount
                    }))

                    if(!mintRes || mintRes.meta.requestStatus === "rejected"){
                        throw (mintRes.payload.reason|| mintRes.payload.message);
                    }

                    // // STEP 3 : Send log payment
                    if(mintRes && mintRes.meta.requestStatus === "fulfilled"){
                        setStep("Transfer...");
                        await dispatch(sendTxPaymentOrder({
                            order_id : orderData.payload?.order_id,
                            tx_hash : mintRes.payload.transactionHash
                        }))
                        dispatch(
                            setAlert({
                              type: 'success',
                              key: 1,
                              message: {
                                status: 'success',
                                title: 'Successfully!',
                              },
                            }),
                          )
                        // alert("Successfully!")
                    }
                }
                setStep("");
                setIsPending(false);
               
            } else {
                console.log("Ethereum object does not exist");
            }
    
        } catch (err) {
            console.log(err);
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
            { isPending ? <CircularProgress color="info" size="1.2rem" /> :"Pay with USDT" }  
            { isPending ? <span className='ml-2'>{step}</span> :"" }  
        </button>
       </>
    )

}

export default BtnPay;