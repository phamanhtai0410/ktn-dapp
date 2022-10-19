import { createAsyncThunk } from '@reduxjs/toolkit'
import { NFTService } from "@/service/nft.service"
import { RootState } from '@/reducers/rootReducer'
import { ethers } from 'ethers'
import web3 from 'web3'
import ABI_NFT from '@/_contract/ABI_NFT_V1.json';

const ADDRESS_NFT = "0x3E9DFe8715d4034AF6F3A070F0C07Ff2B1bc2fCB";

export const fetchListNFTs = createAsyncThunk(
    'nfts/fetchListNFTs',
    async (params:any, { dispatch, getState }) => {
        const response = await NFTService.getListNFTs(params)
        return response.data
    }
)

export const fetchDetailNFTs = createAsyncThunk(
    'nfts/fetchListNFTs',
    async (params, { dispatch, getState }) => {
        const response = await NFTService.getListNFTs(params)
        return response.data
    }
)

export const createMetaDataNFT = createAsyncThunk(
    'nfts/createMetaDataNFT',
    async (params:any, { dispatch, getState ,rejectWithValue}) => {
        try {
            const response = await NFTService.createMetaData(params)
            return response.data
        } catch (err) {
            if (!err.error_code) {
                throw err
            }
            return rejectWithValue(err)
        }
    }
)

export const createOrder = createAsyncThunk(
    'nfts/createOrder',
    async (params:any, { dispatch, getState ,rejectWithValue}) => {
        try {
            const response = await NFTService.createOrder(params)
            return response.data
        } catch (err) {
            if (!err.error_code) {
                throw err
            }
            return rejectWithValue(err)
        }
    }
)

export const mintNftWithBSC = createAsyncThunk(
    'nfts/mintNftWithBSC',
    async (params:any, { dispatch, getState ,rejectWithValue}) => {

        const rootState = getState() as RootState;
        const  { easyWeb3 ,address} = rootState.wallet;

        const signer = easyWeb3.getSigner();

        console.log("------mintNftWithBSC-------params",params);
        const { data , signature } = params;

        try {

            if(signer && signature && data && data.cids){

                const contractNFT = new ethers.Contract(
                    ADDRESS_NFT,
                    ABI_NFT,
                    signer,
                )

                const dataMint = data.cids.map( (cid, index) => {
                    return {
                        cid: cid,
                        rarity: data.rarities[index],
                        nftType: data.types[index],
                    }
                })

                console.log("signature",{
                    ...signature,
                    r: web3.utils.toHex(signature.r),
                    s: web3.utils.toHex(signature.s),
                    deadline: data.deadline
                });
                
                // console.log("0----------",web3.utils.toHex(signature.r));

                let nftTxn = await contractNFT.makeMintingAction(
                    dataMint,
                    data.discount,
                    {
                        ...signature,
                        r: web3.utils.toHex(signature.r),
                        s: web3.utils.toHex(signature.s),
                        deadline: data.deadline
                    }
                    // , { value: ethers.utils.parseEther("0.01") }
                    );
        
                console.log("Mining... please wait");
                await nftTxn.wait();
        
                console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);

            }
            
            
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)