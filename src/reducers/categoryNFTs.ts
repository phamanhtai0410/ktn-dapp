
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { NFTArrayModel,NFTModel } from "@/models/redux-models";
import { RootState } from "@/app/store";

import { fetchListCategoryNFTs } from '../actions/nftActions';

const initialState:NFTArrayModel={
    items: [],
    loading: false,
    pagination: undefined
}

const categoryNFTsSlice =createSlice({
    name:'categoryNFTs',
    initialState:initialState,
    reducers:{
        setListCategoryNFTs(state,action:PayloadAction<NFTModel[]>){
            state.items=action.payload;
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchListCategoryNFTs.fulfilled, (state, action) => {
          // Add user to the state array
          state.items = action.payload.categories
        })
    },
})

export const { setListCategoryNFTs  } = categoryNFTsSlice.actions;
export default categoryNFTsSlice.reducer;

// create and export the selector
export const selectCategoryNFTs : (RootState) => any[] = (state) => state.categoryNFTs.items;