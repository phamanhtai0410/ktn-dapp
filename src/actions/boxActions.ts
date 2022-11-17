import { createAsyncThunk } from '@reduxjs/toolkit'
import { PaymentService } from "@/service/payment.service"
import { RootState } from '@/reducers/rootReducer'
import { ethers } from 'ethers'
import web3 from 'web3'

import ABI_CREATOR from '@/_contract/ABI_CREATOR_V5.json'
import ABI_BOX from '@/_contract/BOX.json'
import ABI_ERC20 from '@/_contract/ABI-ERC20.json'
import { ADDRESS_BOX, CREATER_BOX } from '@/service/web3/constants/config'
import { setBoxAccount, setBoxInfo, setBoxRound, setItemBox, setOwnerBoxItems } from '@/reducers/boxSlice'
import { NFTService } from '@/service/nft.service'


export const fetchDetailBox = createAsyncThunk(
    'box/fetchDetailBox',
    async (params, { dispatch, getState }) => {
        const response = await NFTService.getDetailBox(params)
        return response.data
    }
)

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

    }
)

export const initLoadBoxInfo = createAsyncThunk(
    'box/initLoadBox',
    async (params:any, { dispatch, getState ,rejectWithValue}) => {

        const rootState = getState() as RootState;
        const  { easyWeb3 ,address} = rootState.wallet;

        const signer = easyWeb3.getSigner();

        let boxPrice;

        try {
            if(ADDRESS_BOX && signer){

                const contractBOX = new ethers.Contract(
                    ADDRESS_BOX,
                    ABI_BOX,
                    signer
                )

                // price box
                const priceBoxBigN = await contractBOX.boxPrice()
                boxPrice = ethers.utils.formatEther(priceBoxBigN)
                boxPrice = Math.round(boxPrice * 100) / 100

                dispatch(setItemBox([{
                    discount:0,
                    price: boxPrice
                }]))
                
                // max mint of address wallet
                let boxLimit = await contractBOX.boxLimit()
                boxLimit = Number(boxLimit)


                const contractCreator = new ethers.Contract(
                    CREATER_BOX,
                    ABI_CREATOR,
                    signer,
                )

                // pay address
                const payToken = await contractCreator.payToken()
                console.log("payToken",payToken);

                dispatch(setBoxInfo({
                    boxPrice,
                    boxLimit,
                    payToken
                }))

            }
            
        } catch (err) {
            return rejectWithValue(err)
        }

    }
)

export const initBoxAccount = createAsyncThunk(
    'box/initLoadBox',
    async (params:any, { dispatch, getState ,rejectWithValue}) => {

        const rootState = getState() as RootState;
        const  { easyWeb3 ,address} = rootState.wallet;

        const signer = easyWeb3.getSigner();

        try {

            if(ADDRESS_BOX && signer){

                const contractBOX = new ethers.Contract(
                    ADDRESS_BOX,
                    ABI_BOX,
                    signer
                )

                if (address && contractBOX) {

                    // check account white list
                    const whiteList = await contractBOX.whiteList(address)
                    const boxIdsByOwner = await contractBOX.getBoxIdsByOwner(address)
 
                    dispatch(setBoxAccount({
                        whiteList,
                        boxIdsByOwner
                    }))

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

                

                // total đã mint
                const tokenIdCounter = await contractBOX.tokenIdCounter()
                
                dispatch(setBoxRound({
                    TOTAL_BOX,
                    tokenIdCounter
                }))


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

//B1: Creator box NFT
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

//B2: Mint NFT
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
                    signer
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

                console.log("Mining... please wait", Proof)
                let nftTxn = await contractBOX.makeMintingAction(
                    dataMint,
                    data.discount?.toString(),
                    Proof,
                    callback
                );

                console.log(`Mined, see transaction: https://testnet.bscscan.com/tx/${nftTxn.hash}`)
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

        const rootState = getState() as RootState
        const { easyWeb3 , address} = rootState.wallet
        const { payToken } = rootState.box?.boxInfo

        const signer = easyWeb3.getSigner();
        const { amount } = params;

        try {

            if(signer && amount && ADDRESS_BOX && payToken){

                const contractApprove = new ethers.Contract(
                    payToken,
                    ABI_ERC20,
                    signer
                )

                let accountBalance = await contractApprove.balanceOf(address)
                if(accountBalance){
                    accountBalance = ethers.utils.formatEther(accountBalance)
                }

                if(accountBalance < amount){
                    throw ("You not enough money")
                }

                console.log("approveMint... please wait")
                let approveTxn = await contractApprove.approve(
                    ADDRESS_BOX,
                    web3.utils.toWei(amount.toString())
                );
    
                console.log(`approveMint, see transaction: https://testnet.bscscan.com/tx/${approveTxn.hash}`)
                return  await approveTxn.wait();
    
            }
            
            
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
