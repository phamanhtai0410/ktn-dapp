
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Beforeunload } from 'react-beforeunload';
import { CircularProgress } from '@mui/material'

import { useAppDispatch } from '@/app/hooks';
import { NFTModel } from '@/models/redux-models';

import { approveMint, createMetaDataNFT, createOrder, mintNftWithBSC } from '@/actions/nftActions';
import { selectCartItems, selectCode } from '@/reducers/cartSlice';
import { selectChain, selectWalletAccount } from '@/reducers/walletSlice';

const sumTotal = (arr:NFTModel[]) => arr.reduce((sum:number, { price }) => sum + price , 0)

const BtnPay = () => {

    const [isPending, setIsPending] = useState(false);
    const [step, setStep] = useState("");

    const accountAddress = useSelector(selectWalletAccount);
    const chainId = useSelector(selectChain);

    const listItems = useSelector(selectCartItems);
    const promotion_code = useSelector(selectCode);

    const dispatch = useAppDispatch();

    const mintNftHandler = async () => {

        if (isPending) { return; }    
        setIsPending(true);

        try {

            const { ethereum } = window;

            if (ethereum && accountAddress) {

                //STEP 1: create metadata NFT
                setStep("Pending...");
                const metaData = await dispatch(createMetaDataNFT({
                    promotion_code,
                    address: accountAddress,
                    items: listItems.map(item => item.nft_id)
                }))
                if(metaData.payload?.error_code){
                    throw (metaData.payload.msg);
                }

                let amount = sumTotal(listItems);

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
                }
               
            } else {
                console.log("Ethereum object does not exist");
            }
    
        } catch (err) {
            alert(err);
            setIsPending(false);
            console.log(err);
        }
    }

    const createOrderAndMint = async () => {

        try {

            const { ethereum } = window;

            if (ethereum && accountAddress) {

                // STEP 1: create order NFT
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
                    promotion_code: ""
                }))

                if(orderData.payload.error_code){
                    alert(orderData.payload.msg);
                    return;
                }

                if(orderData.payload.data){
                    const mintRes = await dispatch(mintNftWithBSC({
                        data:   orderData.payload.data,
                        signature :orderData.payload.signature,
                    }))
                }
               
            } else {
                console.log("Ethereum object does not exist");
            }
    
        } catch (err) {
          console.log(err);
        }
    }

    return (
       <>
         {isPending ? <Beforeunload onBeforeunload={(event) => event.preventDefault()} /> : ""}
        <button
            onClick={e=>{chainId ===97 ? mintNftHandler() : createOrderAndMint()}}
            className={`button w-full font-medium text-white text-base p-3 flex items-center justify-center rounded-[32px] cursor-pointer`}>
            { isPending ? <CircularProgress color="info" size="1.2rem" /> :"Pay with USDT" }  
            { isPending ? <span className='ml-2'>{step}</span> :"" }  
        </button>
       </>
    )

}

export default BtnPay;