import { fetchListMintNFT } from "@/actions/nftActions"
import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./rootReducer"

const initialState = {
    loading: false,
    items: []
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
      })
      .addCase(fetchListMintNFT.rejected, (state, action) => {
        state.loading = false
      })
  }
})

export default mintSlice.reducer

// export const {} = videoSlice.actions

export const selectListMintNFT = (state: RootState) => state.mint.items || [];
