
import React from 'react';
import { ethers } from 'ethers'
import {
    ConnectState,
    useEasyWeb3,
  } from '@/service/web3'
import ABI_NFT from '@/_contract/ABI_NFT_V1.json';
import { createMetaDataNFT, createOrder, mintNftWithBSC } from '@/actions/nftActions';
import { useAppDispatch } from '@/app/hooks';
import { selectCartItems, selectCode } from '@/reducers/cartSlice';
import { useSelector } from 'react-redux';
import { selectChain, selectEasyWeb3, selectWalletAccount } from '@/reducers/walletSlice';

const addressNFT = "0x1064B1b3072509283D64DdF50cc82FFec42b6180";

const BtnPay = () => {

     const accountAddress = useSelector(selectWalletAccount);
     const chainId = useSelector(selectChain);


    const listItems = useSelector(selectCartItems);
    const promotion_code = useSelector(selectCode);

    const dispatch = useAppDispatch();

    const mintNftHandler = async () => {

        try {

            const { ethereum } = window;

            if (ethereum && accountAddress) {

                // STEP 1: create metadata NFT
                const metaData = await dispatch(createMetaDataNFT({
                    promotion_code,
                    address: accountAddress,
                    items: listItems.map(item => item.nft_id)
                }))

                if(metaData.payload.error_code){
                    alert(metaData.payload.msg);
                    return;
                }

                if(metaData.payload.data){
                    const mintRes = await dispatch(mintNftWithBSC({
                        data:   metaData.payload.data,
                        signature :metaData.payload.signature,
                    }))
                }
               
            } else {
                console.log("Ethereum object does not exist");
            }
    
        } catch (err) {
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
        <button
        onClick={e=>{chainId ===97 ? mintNftHandler() : createOrderAndMint()}}
        className={`button w-full font-medium text-white text-base p-3 flex items-center justify-center rounded-[32px] cursor-pointer`}>
            Pay with USDT
        </button>
    )

}

export default BtnPay;