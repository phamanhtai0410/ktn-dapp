import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { ICartModel,NFTModel } from "@/models/redux-models";
import { RootState } from "@/app/store";
import { fetchListNFTs } from "@/actions/nftActions";

const initialState:ICartModel={
    items: [],
    code: null
}

const cartSlice =createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        setItemNFTs(state,action:PayloadAction<NFTModel[]>){
            state.items=action.payload;
        },
    },
    
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchListNFTs.fulfilled, (state, action) => {
          // Add user to the state array
          state.items.push(action.payload)
        })

    },
})

export const { setItemNFTs  } = cartSlice.actions;
export default cartSlice.reducer;

// create and export the selector
export const selectCartItems = (state: RootState) => state.cart.items;