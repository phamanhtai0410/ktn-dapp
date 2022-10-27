import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { ICollectionModel,ICollectionArrayModel,IPagination } from "@/models/redux-models";
import { RootState } from "@/app/store";
import { fetchListCollections } from "@/actions/collectionsActions";

const initialState:ICollectionArrayModel={
    items: [] ,
    pagination:null,
    loading: false
}

const CollectionsSlice = createSlice({
    name:'collections',
    initialState:initialState,
    reducers:{
        setListCollections(state,action:PayloadAction<ICollectionModel[]>){
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchListCollections.fulfilled, (state, action) => {
          // Add user to the state array
          console.log("xxx", action)
        //   state.items.push(action.payload.items)
          state.items = action.payload.items
            //   state.pagination = {
            //     page: action.payload.page,
            //     num_of_page: action.payload.num_of_page
            //   }
        })
    },
})

export const { setListCollections } = CollectionsSlice.actions;
export default CollectionsSlice.reducer;

// create and export the selector
export const selectCollections: (RootState) => any[] = (state) => state.collections.items;