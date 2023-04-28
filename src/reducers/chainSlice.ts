import { fetchListCHAINS } from "@/actions/nftActions"
import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./rootReducer"

interface IChain {
  name: string;
  symbol: string;
  image_url: string;
}

const getItemKeys = (items: IChain[]) => {
  const listchains: any = [];
  for (const i of items) {
      // console.log(item)
      listchains[i.symbol] = i;
  }
  return listchains;
}

const initialState = {
    loading: false,
    items: [],
    itemKeyTypes: [],
    num_of_page: 0
}

const chainSlice = createSlice({
  name: "chain",
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
      .addCase(fetchListCHAINS.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchListCHAINS.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload.items
        state.itemKeyTypes = getItemKeys(action.payload.items)
      })
      .addCase(fetchListCHAINS.rejected, (state, action) => {
        state.loading = false
      })
  }
})

export default chainSlice.reducer

// export const {} = videoSlice.actions

export const selectListChainNFT = (state: RootState) => state.chain.items || [];
export const selectItemChainNFTKeys = (state: RootState) => state.chain.itemKeyTypes || [];
