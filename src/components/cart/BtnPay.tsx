
import { useEasyWeb3 } from '@/service/web3';
import React from 'react';
import { ethers } from 'ethers'

import ABI_NFT from '@/_contract/ABI_NFT_V1.json';
import { createMetaDataNFT } from '@/actions/nftActions';
import { useAppDispatch } from '@/app/hooks';
const addressNFT = "0x8d10B072161C2538c452D25D44f4c344f5bDC516";

const BtnPay = () => {

    const { connectState, easyWeb3, walletInfo } = useEasyWeb3()
    const dispatch = useAppDispatch();

    const mintNftHandler = async () => {

        try {

            const { ethereum } = window;

            const metaData =  dispatch(createMetaDataNFT({
                address: addressNFT,
                promotion_code: null,
                items: []
            })) 
    
            if (ethereum && easyWeb3.isConnected()) {

                const contractNFT = new ethers.Contract(
                    addressNFT,
                    ABI_NFT,
                    easyWeb3.getSigner(),
                )

                console.log("Initialize payment");
                
                // function makeMintingAction(
                //     CharacterToken.MintingOrder[] calldata _mintingInfos,
                //     uint256 _discount,
                //     Proof memory _proof
                // )

                // {
                //     uint8 rarity;
                //     string cid;
                //     uint8 nftType;
                // }

                let nftTxn = await contractNFT.makeMintingAction(
                    [{
                        rarity:1,
                        cid:"",
                        nftType:1
                     }]
                    , { value: ethers.utils.parseEther("0.01") });
        
                console.log("Mining... please wait");
                await nftTxn.wait();
        
                console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
        
            } else {
                console.log("Ethereum object does not exist");
            }
    
        } catch (err) {
          console.log(err);
        }
    }

    return (
        <button className={`button w-full font-medium text-white text-base p-3 flex items-center justify-center rounded-[32px] cursor-pointer`}>
            Pay with USDT
        </button>
    )

}

export default BtnPay;