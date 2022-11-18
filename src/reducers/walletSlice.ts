import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { IChainList, IWalletModel } from "@/models/redux-models";
import { RootState } from "@/app/store";
import { fetchChainList } from "@/actions/walletActions";

const initialState:IWalletModel={
    address: "",
    balance: "0",
    chainId: null,
    chainList:[],
    network:null,
    easyWeb3: null
}

const walletSlice = createSlice({
    name:'wallet',
    initialState:initialState,
    reducers:{

        setReducerEasyWeb3(state,action:PayloadAction<any>){
            state.easyWeb3 = action.payload;
        },
        
        setReducerWalletInfo(state,action:PayloadAction<any|IWalletModel>){
            state.address  = action.payload.address;
            state.chainId  = action.payload.chainId;
            state.network  = action.payload.network;
            state.easyWeb3 = action.payload.easyWeb3;
        },

        setReducerChain(state,action:PayloadAction<number>){
            state.chainId  = action.payload;
        },

        // setChainList(state,action:PayloadAction<IChainList[]>){
        //     state.chainList  = action.payload.assets;
        // }
    },
    extraReducers: (builder) => {

         // Add reducers for additional action types here, and handle loading state as needed
         builder.addCase(fetchChainList.fulfilled, (state, action) => {
            // Add user to the state array
            state.chainList  = action.payload.assets;
        })

    },
    
})

export const { setReducerEasyWeb3 , setReducerWalletInfo , setReducerChain } = walletSlice.actions;
export default walletSlice.reducer;

// create and export the selector
export const selectWalletAccount = (state: RootState) => state.wallet.address;
export const selectEasyWeb3 = (state: RootState) => state.wallet.easyWeb3;
export const selectChain = (state: RootState) => state.wallet.chainId;
export const selectNetwork = (state: RootState) => state.wallet.network;
export const selectChains = (state: RootState) => state.wallet.chainList;

export const selectGetByChainID = (state: RootState) => state.wallet.chainList.find(e=>e.chain_id ===  state.wallet.chainId);