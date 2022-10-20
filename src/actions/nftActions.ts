import { createAsyncThunk } from '@reduxjs/toolkit'
import { NFTService } from "@/service/nft.service"
import { RootState } from '@/reducers/rootReducer'
import { ethers } from 'ethers'
import web3 from 'web3'
import ABI_CREATOR from '@/_contract/ABI_CREATOR_V1.json';
import ABI_ERC20 from '@/_contract/ABI-ERC20.json';

const ADDRESS_CREATOR = "0x3E9DFe8715d4034AF6F3A070F0C07Ff2B1bc2fCB";
const DECIMAL_ETHER = 18


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
        const { data , signature } = params;

        try {

            if(signer && signature && data && data.cids){

                const contractNFT = new ethers.Contract(
                    ADDRESS_CREATOR,
                    ABI_CREATOR,
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
                console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
                
                return await nftTxn.wait();
        
                

            }
            
            
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const approveMint = createAsyncThunk(
    'nfts/approveMint',
    async (params:any, { dispatch, getState ,rejectWithValue}) => {

        const rootState = getState() as RootState;
        const { easyWeb3 , address} = rootState.wallet;

        const signer = easyWeb3.getSigner();
        const { amount } = params;

        try {

            if(signer && amount && ADDRESS_CREATOR ){

                const contractNFT = new ethers.Contract(
                    ADDRESS_CREATOR,
                    ABI_CREATOR,
                    signer,
                )

                const payToken = await contractNFT.payToken();

                const contractApprove = new ethers.Contract(
                    payToken,
                    ABI_ERC20,
                    signer,
                )

                let accountBalance = await contractApprove.balanceOf(address);
                accountBalance = ethers.utils.formatEther(accountBalance);

                if(accountBalance < amount){
                    alert("You not enough money")
                    throw ("You not enough money")
                }

                let approveTxn = await contractApprove.approve(
                    ADDRESS_CREATOR,
                    web3.utils.toWei(amount.toString())
                );
        
                console.log("Mining... please wait");
                console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${approveTxn.hash}`);
                return  await approveTxn.wait();
    
            }
            
            
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)