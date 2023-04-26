import { fetchListMintNFT } from "@/actions/nftActions"
import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./rootReducer"

const initialState = {
    loading: false,
    items: [],
    num_of_page: 0
}

const mintSlice = createSlice({
  name: "mint",
  initialState,
  reducers: {
    save(state, action) {
      const { value, key } = action.payload
      state[key] = value
    }
  },
  extraReducers: (builder) => {
    builder
      /**
       * * fetchReviewVideo
       */
      .addCase(fetchListMintNFT.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchListMintNFT.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload.items
        state.num_of_page = action.payload.num_of_page
      })
      .addCase(fetchListMintNFT.rejected, (state, action) => {
        state.loading = false
      })
  }
})

export default mintSlice.reducer

// export const {} = videoSlice.actions

export const selectListMintNFT = (state: RootState) => state.mint.items || [];
export const selectNumOfPage = (state: RootState) => state.mint.num_of_page || 0;
export const selectLoadingNFTS = (state: RootState) => state.mint.loading;