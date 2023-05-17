import { fetchLeaderBoard, fetchListCHAINS } from "@/actions/nftActions"
import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./rootReducer"


const initialState = {
    loading: false,
    items: [],

    num_of_page: 0,
    page_size: 15,
    page: 1
}

const boardSlice = createSlice({
  name: "leaderboard",
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
      .addCase(fetchLeaderBoard.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchLeaderBoard.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload.data.items
        state.num_of_page = action.payload.data.num_of_page
        state.page = action.payload.data.page
        state.page_size = action.payload.page_size
      })
      .addCase(fetchLeaderBoard.rejected, (state, action) => {
        state.loading = false
      })
  }
})

export default boardSlice.reducer

// export const {} = videoSlice.actions

export const selectLeaderBoard = (state: RootState) => state.board.items || [];
export const selectNumOfPageBoard = (state: RootState) => state.board.num_of_page || [];
export const selectPageBoard = (state: RootState) => state.board.page || [];


