import { createAsyncThunk } from '@reduxjs/toolkit'
import { PaymentService } from "@/service/payment.service"
import { RootState } from '@/reducers/rootReducer'
import { ethers } from 'ethers'
import web3 from 'web3'
import ABI_CREATOR from '@/_contract/ABI_CREATOR_V4.json';
import ABI_ERC20 from '@/_contract/ABI-ERC20.json';

const ADDRESS_CREATOR = "0xf11B8754eE6eC19c0c5e4bC682cF5095a5A9C350";
const DECIMAL_ETHER = 18

export const checkCodePromotion = createAsyncThunk(
    'nfts/checkCodePromotion',
    async (params:any, { dispatch, getState ,rejectWithValue}) => {
        try {

            const response = await PaymentService.checkCodePromotion(params)
            return response.data

        } catch (err) {
            if (!err.error_code) {
                throw err
            }
            return rejectWithValue(err)
        }

        const response = await PaymentService.checkCodePromotion(params)
        return response.data
    }
)

export const createMetaDataNFT = createAsyncThunk(
    'nfts/createMetaDataNFT',
    async (params:any, { dispatch, getState ,rejectWithValue}) => {
        try {
            const response = await PaymentService.createMetaData(params)
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
            const response = await PaymentService.createOrder(params)
            return response.data
        } catch (err) {
            if (!err.error_code) {
                throw err
            }
            return rejectWithValue(err)
        }
    }
)

export const sendTxPaymentOrder = createAsyncThunk(
    'nfts/TxPayment',
    async (params:any, { dispatch, getState ,rejectWithValue}) => {
        try {
            const response = await PaymentService.paymentOrder(params)
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
                        rarity: data.rarities[index],
                        cid: cid,
                        nftType: data.types[index],
                    }
                })

                // console.log("dataMint",dataMint)
                const {r,s ,v} = ethers.utils.splitSignature(signature)
                const Proof = {
                    v,
                    r,
                    s,
                    deadline: data.deadline
                }

                console.log("Mining... please wait", Proof);
                let nftTxn = await contractNFT.makeMintingAction(
                    dataMint,
                    data.discount,
                    Proof
                );

                console.log(`Mined, see transaction: https://testnet.bscscan.com/tx/${nftTxn.hash}`);
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

                if(accountBalance){
                    accountBalance = ethers.utils.formatEther(accountBalance);
                }
                
                if(accountBalance < amount){
                    throw ("You not enough money")
                }

                console.log("approveMint... please wait");
                let approveTxn = await contractApprove.approve(
                    ADDRESS_CREATOR,
                    web3.utils.toWei(amount.toString())
                );
    
                console.log(`approveMint, see transaction: https://testnet.bscscan.com/tx/${approveTxn.hash}`);
                return  await approveTxn.wait();
    
            }
            
            
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const transferWalletDev = createAsyncThunk(
    'nfts/transferWalletDev',
    async (params:any, { dispatch, getState ,rejectWithValue}) => {

        const rootState = getState() as RootState;
        const  { easyWeb3 ,address} = rootState.wallet;

        const signer = easyWeb3.getSigner();
        const { amount , address_of_counter} = params;
        
        console.log("address_of_counter",address_of_counter)

        try {

            if(signer && ADDRESS_CREATOR  && amount && address_of_counter ){


                const contractTransfer = new ethers.Contract(
                    "0xD9FfF9Ca72e2F4C3e613c770528198AFf2C6AC4B",
                    ABI_ERC20,
                    signer,
                )

                let accountBalance = await contractTransfer.balanceOf(address);
                accountBalance = ethers.utils.formatEther(accountBalance);

                console.log("accountBalance",accountBalance)
                if(accountBalance < amount){
                    throw ("You not enough money")
                }

                console.log("transfer... please wait");
                let approveTxn = await contractTransfer.transfer(
                    address_of_counter,
                    web3.utils.toWei(amount.toString())
                );
    
                console.log(`transfer, see transaction: https://testnet.bscscan.com/tx/${approveTxn.hash}`);
                return  await approveTxn.wait();
    
            }
            
            
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)