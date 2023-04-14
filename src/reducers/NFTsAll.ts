import { fetchListNFTs } from '../actions/nftActions'
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { NFTArrayModel,NFTModel } from "@/models/redux-models";
import { RootState } from "@/app/store";

const initialState:NFTArrayModel={
    items: [],
    loading: false,
    pagination: undefined
}

const NFTsAllSlice =createSlice({
    name:'nftsAll',
    initialState:initialState,
    reducers:{
        setListAllNFTs(state,action:PayloadAction<NFTModel[]>){
            state.items=action.payload;
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchListNFTs.fulfilled, (state, action) => {
          // Add user to the state array
        //   state.items.push(action.payload.items)
          state.items = action.payload.items
        })
    },
})

export const { setListAllNFTs  } = NFTsAllSlice.actions
export default NFTsAllSlice.reducer;

// create and export the selector
export const selectAllNFTs : (RootState) => any[] = (state) => state.NFTsAll.items;