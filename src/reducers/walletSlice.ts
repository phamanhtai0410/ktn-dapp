import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { IWalletModel } from "@/models/redux-models";
import { RootState } from "@/app/store";

const initialState:IWalletModel={
    address: "",
    balance:"0",
    chainId:null
}

const walletSlice =createSlice({
    name:'wallet',
    initialState:initialState,
    reducers:{
        setReducerWalletInfo(state,action:PayloadAction<IWalletModel>){
            state.address = action.payload.address;
            state.balance = action.payload.balance;
            state.chainId = action.payload.chainId;
        },
    },
    extraReducers: (builder) => {
     
    },
    
})

export const { setReducerWalletInfo  } = walletSlice.actions;
export default walletSlice.reducer;

// create and export the selector
export const selectWallet = (state: RootState) => state.wallet;