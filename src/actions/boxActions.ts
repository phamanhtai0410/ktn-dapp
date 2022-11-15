import { createAsyncThunk } from '@reduxjs/toolkit'
import { PaymentService } from "@/service/payment.service"
import { RootState } from '@/reducers/rootReducer'
import { ethers } from 'ethers'
import web3 from 'web3'

import ABI_BOX from '@/_contract/BOX.json'
import ABI_ERC20 from '@/_contract/ABI-ERC20.json'
import { ADDRESS_BOX } from '@/service/web3/constants/config'
import { setOwnerBoxItems } from '@/reducers/boxSlice'

export const checkCodePromotion = createAsyncThunk(
    'box/checkCodePromotion',
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

export const initLoadBox = createAsyncThunk(
    'box/initLoadBox',
    async (params:any, { dispatch, getState ,rejectWithValue}) => {

        const rootState = getState() as RootState;
        const  { easyWeb3 ,address} = rootState.wallet;

        const signer = easyWeb3.getSigner();

        let boxPrice;
        let countBoxIdOwner=0
        let accountQuantity=0

        try {

            if(ADDRESS_BOX){

                const contractBOX = new ethers.Contract(
                    ADDRESS_BOX,
                    ABI_BOX,
                    signer
                )

                // price box
                const priceBoxBigN = await contractBOX.methods.boxPrice().call();
                boxPrice = ethers.utils.formatEther(priceBoxBigN);
                boxPrice = Math.round(boxPrice * 100) / 100;

                if (address && contractBOX) {

                   let accountWhiteList = await contractBOX.methods.whiteList(address).call();
                   accountQuantity = Number(accountWhiteList);
        
                    // //lay tong mua cua account
                    // const balanceBigN = await contractBOX.methods.balanceOf(address).call();
                    // balance = ethers.utils.formatEther(balanceBigN);
        
                    const boxIdsOwner = await contractBOX.methods.getBoxIdsByOwner(address).call();
                    countBoxIdOwner = boxIdsOwner.length;

                }


            }
            
        } catch (err) {
            return rejectWithValue(err)
        }

    }
)

export const loadBoxRound = createAsyncThunk(
    'box/loadBoxRound',
    async (params:any, { dispatch, getState ,rejectWithValue}) => {

        const rootState = getState() as RootState;
        const { easyWeb3 , address} = rootState.wallet;

        const signer = easyWeb3.getSigner();

        try {

            if(signer && ADDRESS_BOX){

                const contractBOX = new ethers.Contract(
                    ADDRESS_BOX,
                    ABI_BOX,
                    signer
                )

                // total target
                const TOTAL_BOX = await contractBOX.TOTAL_BOX()

                // max mint of address wallet
                const boxLimit = await contractBOX.boxLimit()

                // total đã mint
                const tokenIdCounter = await contractBOX.tokenIdCounter()


            }
            
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getBoxByOwner = createAsyncThunk(
    'box/loadBoxRound',
    async (params:any, { dispatch, getState ,rejectWithValue}) => {

        const rootState = getState() as RootState;
        const { easyWeb3 , address} = rootState.wallet;

        const signer = easyWeb3.getSigner();

        try {

            if(signer && ADDRESS_BOX && address){

                const contractBOX = new ethers.Contract(
                    ADDRESS_BOX,
                    ABI_BOX,
                    signer
                )

                // get list box owner
                const listBoxOwner = await contractBOX.getBoxByOwner(address)

                // set store box owner
                dispatch(setOwnerBoxItems(listBoxOwner))

                return listBoxOwner;
            }
            
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const createSignatureBox = createAsyncThunk(
    'nfts/createSignatureBox',
    async (params:any, { dispatch, getState ,rejectWithValue}) => {
        try {
            const response = await PaymentService.createSignatureBox(params)
            return response.data
        } catch (err) {
            if (!err.error_code) {
                throw err
            }
            return rejectWithValue(err)
        }
    }
)

export const mintBox = createAsyncThunk(
    'box/mintBox',
    async (params:any, { dispatch, getState ,rejectWithValue}) => {

        const rootState = getState() as RootState;
        const  { easyWeb3 ,address} = rootState.wallet;

        const signer = easyWeb3.getSigner();
        const { data , signature ,callback } = params;

        try {

            if(signer && signature && data && data.cids){

                const contractBOX = new ethers.Contract(
                    ADDRESS_BOX,
                    ABI_BOX,
                    signer,
                )

                const dataMint = data.cids.map( (cid, index) => {
                    return {
                        rarity: data.rarities[index],
                        cid: cid,
                        nftType: data.types[index],
                    }
                })

                const {r,s ,v} = ethers.utils.splitSignature(signature)
                const Proof = {
                    v,
                    r,
                    s,
                    deadline: data.deadline
                }

                console.log("Mining... please wait", Proof);
                let nftTxn = await contractBOX.makeMintingAction(
                    dataMint,
                    data.discount?.toString(),
                    Proof,
                    callback
                );

                console.log(`Mined, see transaction: https://testnet.bscscan.com/tx/${nftTxn.hash}`);
                return await nftTxn.wait();

            }
            
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const approveBoxMint = createAsyncThunk(
    'box/approveBoxMint',
    async (params:any, { dispatch, getState ,rejectWithValue}) => {

        const rootState = getState() as RootState;
        const { easyWeb3 , address} = rootState.wallet;

        const signer = easyWeb3.getSigner();
        const { amount } = params;

        try {

            if(signer && amount && ADDRESS_BOX ){

                const contractBOX = new ethers.Contract(
                    ADDRESS_BOX,
                    ABI_BOX,
                    signer,
                )

                const payToken = await contractBOX.payToken();

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
                    ADDRESS_BOX,
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
