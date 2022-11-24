import { createAsyncThunk } from '@reduxjs/toolkit'
import { PaymentService } from "@/service/payment.service"
import { RootState } from '@/reducers/rootReducer'
import { ethers } from 'ethers'
import web3 from 'web3'

import ABI_CREATOR from '@/_contract/BoxNFTCreator.json'
import ABI_BOX from '@/_contract/MysteryBoxNFT.json'
import ABI_ERC20 from '@/_contract/ABI-ERC20.json'
import {  ADDRESS_CREATOR_BOX } from '@/service/web3/constants/config'
import { setBoxAccount, setBoxInfo, setBoxRound, setOwnerBoxItems } from '@/reducers/boxSlice'
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
        const  { easyWeb3 } = rootState.wallet;
        const  { priceBox } = rootState.box;
        
        const signer = easyWeb3.getSigner();
        const { addressBox } = params;

        let boxPrice = priceBox;

        try {

            if(addressBox && signer){
             
                const contractBOX = new ethers.Contract(
                    addressBox,
                    ABI_BOX,
                    signer
                )

                // max mint of address wallet
                let boxLimit = await contractBOX.boxLimit()
                console.log("-------boxLimit",boxLimit)
                boxLimit = Number(boxLimit)

                const contractCreator = new ethers.Contract(
                    ADDRESS_CREATOR_BOX,
                    ABI_CREATOR,
                    signer,
                )

                //priceBox
                // const priceBoxBigN = await contractCreator.boxPrice()
                // console.log("-------boxPrice",boxPrice)
                // boxPrice = ethers.utils.formatEther(priceBoxBigN)
                // boxPrice = Math.round(boxPrice * 100) / 100

                // pay address
                const payToken = await contractCreator.payToken()
                console.log("payToken",payToken)
                await dispatch(setBoxInfo({
                    boxPrice,
                    boxLimit,
                    payToken
                }))

                return contractCreator;

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
        const  { easyWeb3 ,address} = rootState.wallet

        const signer = easyWeb3.getSigner()
        const { addressBox } = params;

        try {

            if(addressBox && signer){

                const contractBOX = new ethers.Contract(
                    addressBox,
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
        const { addressBox } = params;

        try {

            if(signer && addressBox){

                const contractBOX = new ethers.Contract(
                    addressBox,
                    ABI_BOX,
                    signer
                )

                // total target
                let TOTAL_BOX = await contractBOX.TOTAL_BOX()
                TOTAL_BOX = Number(TOTAL_BOX)

                // total đã mint
                let tokenIdCounter = await contractBOX.tokenIdCounter()
                tokenIdCounter = Number(tokenIdCounter)
                
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
        const { addressBox } = params;

        try {

            if(signer && addressBox && address){

                const contractBOX = new ethers.Contract(
                    addressBox,
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
        const  { easyWeb3 } = rootState.wallet;
        const addressBox = rootState.box?.addressBox

        const signer = easyWeb3.getSigner()
        const { data , signature, callback , amount } = params

        try {

            if(signer && signature && data && amount && ADDRESS_CREATOR_BOX){

                const contractBOX = new ethers.Contract(
                    ADDRESS_CREATOR_BOX,
                    ABI_CREATOR,
                    signer
                )

                const {r,s ,v} = ethers.utils.splitSignature(signature)
                const Proof = {
                    v,
                    r,
                    s,
                    deadline: data.deadline
                }

                console.log("Mining... please wait", Proof)
                let nftTxn = await contractBOX.makeMintingAction(
                    addressBox,
                    amount.toString(),
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

        const signer = easyWeb3.getSigner()
        const { amount } = params

        try {

            if(signer && amount && ADDRESS_CREATOR_BOX && payToken){

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
                    ADDRESS_CREATOR_BOX,
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

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const openBox = createAsyncThunk(
    'box/openBox',
    async (params:any, { dispatch, getState ,rejectWithValue}) => {

        const rootState = getState() as RootState;
        const  { easyWeb3, address } = rootState.wallet
        const  { addressBox } = rootState.box

        const signer = easyWeb3.getSigner()
        const { id } = params

        try {

            if(signer && id && addressBox){

                const contractBoxNFT = new ethers.Contract(
                    addressBox,
                    ABI_BOX,
                    signer
                )

                let nftTxn = await contractBoxNFT.openBoxes([id])

                console.log(`Mined, see transaction: https://testnet.bscscan.com/tx/${nftTxn.hash}`)
                await nftTxn.wait();

                // let dataProcess = await contractBoxNFT.getProcessableTokens(addressBox)
                // console.log("dataProcess",Number(dataProcess))

                if(nftTxn){

                    const getTokenIDEvents = (dataEvents) => {
                        let ids =[]
                        let contractAddress=null
                        for (const i of dataEvents) {
                            if(i.args?.tokenId){
                                ids.push(Number(i.args?.tokenId))
                                contractAddress =  i.address
                            }
                        }
                        return {
                            contractAddress,
                            ids
                        };
                    }
                    const getLoopProcessBox = async (timeOut) => {

                        return new Promise( async (resolve ,rejected) => {

                            let dataOpenTxn
                            let pendingNfts
                            let counter = 1
                            try {

                                while ( counter <= timeOut || !Number(pendingNfts)) {

                                    await delay(2000)
                                    pendingNfts = await contractBoxNFT.getPendingNfts(address)
                                    console.log("pendingNfts",Number(pendingNfts))

                                    // dataProcess = await contractBoxNFT.getProcessableTokens(addressBox)
                                    // console.log("dataProcess",dataProcess)
                                    // await dataOpen.wait()
                                    counter++

                                }
    
                                if(Number(pendingNfts) > 0){

                                    dataOpenTxn = await contractBoxNFT.processBoxOpeningRequests()
                                    console.log("------dataOpenTxn",dataOpenTxn)

                                    const receiptTx =    await dataOpenTxn.wait()
                                    console.log("----receiptTx",receiptTx)
                                    resolve(getTokenIDEvents(receiptTx.events))

                                }

                                if(counter === timeOut && Number(pendingNfts) === 0){
                                    getLoopProcessBox(10)
                                }
                                
                            } catch (error) {
                                rejected(error)
                            }

                        })

                    }
    
                    return await getLoopProcessBox(10)

                }

            }
            
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
