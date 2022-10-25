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
        
        setReducerWalletInfo(state,action:PayloadAction<any|IWalletModel>){
            state.address  = action.payload.address;
            state.chainId  = action.payload.chainId;
            state.easyWeb3 = action.payload.easyWeb3;
            state.network  = action.payload.network;
        },

        setChainList(state,action:PayloadAction<IChainList[]>){
            state.chainList  = action.payload;
        }
    },
    extraReducers: (builder) => {

         // Add reducers for additional action types here, and handle loading state as needed
         builder.addCase(fetchChainList.fulfilled, (state, action) => {
            // Add user to the state array
            state.chainList.push(action.payload)
        })

    },
    
})

export const { setReducerWalletInfo  } = walletSlice.actions;
export default walletSlice.reducer;

// create and export the selector
export const selectWalletAccount = (state: RootState) => state.wallet.address;
export const selectEasyWeb3 = (state: RootState) => state.wallet.easyWeb3;
export const selectChain = (state: RootState) => state.wallet.chainId;
export const selectNetwork = (state: RootState) => state.wallet.network;

export const selectGetByChainID = (state: RootState) => state.wallet.network;