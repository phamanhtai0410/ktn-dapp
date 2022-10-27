import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { NFTArrayModel,NFTModel } from "@/models/redux-models";
import { RootState } from "@/app/store";
import { fetchListNFTsDashboard } from "@/actions/nftActions";

const initialState:NFTArrayModel={
    items: [],
    loading: false,
    pagination: undefined
}

const NFTsSliceDashboard =createSlice({
    name:'nftsDashboard',
    initialState:initialState,
    reducers:{
        setListNFTsDashboard(state,action:PayloadAction<NFTModel[]>){
            state.items=action.payload;
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchListNFTsDashboard.fulfilled, (state, action) => {
          // Add user to the state array
          state.items.push(action.payload)
        })
    },
})

export const { setListNFTsDashboard  } = NFTsSliceDashboard.actions;
export default NFTsSliceDashboard.reducer;

// create and export the selector
export const selectNFTsSliceDashboard : (RootState) => any[] = (state) => state.NFTsSliceDashboard.items;