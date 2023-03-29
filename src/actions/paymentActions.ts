import { createAsyncThunk } from '@reduxjs/toolkit'
import { PaymentService } from "@/service/payment.service"
import { RootState } from '@/reducers/rootReducer'
import { ethers } from 'ethers'
import web3 from 'web3'

import ABI_NFT from '@/_contract/NFT_ABI_V10.json'
import ABI_CREATOR from '@/_contract/DaapNFTCreator.json'
import ABI_ERC20 from '@/_contract/ABI-ERC20.json'
import { setMAX_TOKENS_IN_ORDER } from '@/reducers/cartSlice'

import { TOKEN_USDT, ADDRESS_CREATOR } from '@/service/web3/constants/config'

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
        const  { easyWeb3 ,} = rootState.wallet;

        const  { addressNFT , addressCreator } = rootState.cart;
    
        const signer = easyWeb3.getSigner();
        const { data , signature ,callback } = params

        try {

            if(signer && addressNFT && data && data.nft_indexes){

                const _isWhitelistMint = true;

                const contractNFT = new ethers.Contract(
                    addressCreator,
                    ABI_CREATOR,
                    signer,
                )

                const dataMint = data.nft_indexes;

                // const dataMint = data.mesh_indexes.map( ( item, index) => {
                //     return {
                //         rarity: data.rarities[index],
                //         meshIndex: data.mesh_indexes[index],
                //         meshMaterial: data.mesh_materials[index]
                //     }
                // })

                const {r,s ,v} = ethers.utils.splitSignature(signature)
                const Proof = {
                    v,
                    r,
                    s,
                    deadline: data.deadline
                }

                console.debug( [
                    ["_nftCollection",addressNFT],
                    ["_nftIndexes",dataMint],
                    ["discount",data.discount?.toString()],
                    ["_isWhitelistMint",_isWhitelistMint],
                    ["Proof",Proof],
                    ["callback",callback]
                ])

                // function makeMintingAction(
                //     ICollection _nftCollection,
                //     uint256[] memory _nftIndexes,
                //     uint256 _discount,
                //     bool _isWhitelistMint,
                //     Proof memory _proof,
                //     string memory _callbackData
                // )z

                let nftTxn = await contractNFT.makeMintingAction(
                    addressNFT,
                    dataMint,
                    data.discount?.toString(),
                    _isWhitelistMint,
                    Proof,
                    callback

                    // addressNFT,
                    // dataMint,
                    // data.discount?.toString(),
                    // Proof,
                    // callback
                );

                console.log(`Mined, see transaction: https://testnet.bscscan.com/tx/${nftTxn.hash}`)
                return await nftTxn.wait()

            }
            
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getMAX_TOKENS_IN_ORDER = createAsyncThunk(
    'nfts/MAX_TOKENS_IN_ORDER',
    async (params:any, { dispatch, getState ,rejectWithValue}) => {

        const rootState = getState() as RootState;
        const { easyWeb3 , address} = rootState.wallet

        const signer = easyWeb3.getSigner();

        const { addressNFT } = params

        try {

            if(signer && addressNFT){

                const contractNFT = new ethers.Contract(
                    addressNFT,
                    ABI_NFT,
                    signer,
                )

                const maxAmount = await contractNFT.MAX_TOKENS_IN_ORDER()
                dispatch(setMAX_TOKENS_IN_ORDER(maxAmount))

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
        const  {  addressCreator } = rootState.cart;

        const signer = easyWeb3.getSigner();
        const { amount } = params;

        try {

            if(signer && amount && addressCreator ){

                const contractNFT = new ethers.Contract(
                    addressCreator,
                    ABI_CREATOR,
                    signer,
                )

                const payToken = await contractNFT.payToken();
                //console.log("payToken",payToken);

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
                    addressCreator,
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
        const  { easyWeb3 , address } = rootState.wallet

        const signer = easyWeb3.getSigner()
        const { amount , address_of_counter} = params

        try {

            if(signer && ADDRESS_CREATOR  && amount && address_of_counter ){

                const contractTransfer = new ethers.Contract(
                    TOKEN_USDT,
                    ABI_ERC20,
                    signer,
                )

                let accountBalance = await contractTransfer.balanceOf(address);
                accountBalance = ethers.utils.formatEther(accountBalance);
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

export const fetchCheckRefCode = createAsyncThunk(
    'nfts/fetchRefCode',
    async (params:any, { dispatch, getState }) => {
        const response = await PaymentService.checkRefCode(params)
        return response.data
    }
)

