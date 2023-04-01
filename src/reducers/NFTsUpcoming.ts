import { fetchListNFTsUpcoming } from './../actions/nftActions';
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { NFTArrayModel,NFTModel } from "@/models/redux-models";
import { RootState } from "@/app/store";
import { fetchListNFTsDashboard } from "@/actions/nftActions";

const initialState:NFTArrayModel={
    items: [],
    loading: false,
    pagination: undefined
}

const NFTsUpcomingSlice =createSlice({
    name:'nftsUpcoming',
    initialState:initialState,
    reducers:{
        setListNFTsUpcoming(state,action:PayloadAction<NFTModel[]>){
            state.items=action.payload;
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchListNFTsUpcoming.fulfilled, (state, action) => {
          // Add user to the state array
          state.items.push(action.payload)
        })
    },
})

export const { setListNFTsUpcoming  } = NFTsUpcomingSlice.actions;
export default NFTsUpcomingSlice.reducer;

// create and export the selector
export const selectNFTsUpcoming : (RootState) => any[] = (state) => state.NFTsUpcomingSlice.items;