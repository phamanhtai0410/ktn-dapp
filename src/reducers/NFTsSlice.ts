import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { NFTArrayModel,NFTModel } from "@/models/redux-models";
import { RootState } from "@/app/store";
import { fetchListNFTs } from "@/actions/nftActions";

const initialState:NFTArrayModel={
    items: [],
    loading: false,
    pagination: undefined
}

const NFTsSlice =createSlice({
    name:'nfts',
    initialState:initialState,
    reducers:{
        setListNFTs(state,action:PayloadAction<NFTModel[]>){
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

export const { setListNFTs  } = NFTsSlice.actions;
export default NFTsSlice.reducer;

// create and export the selector
export const selectNFTs = (state: RootState) => state.nfts.items;