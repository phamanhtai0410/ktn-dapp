
import { combineReducers } from '@reduxjs/toolkit'

import wallet from "./walletSlice"
import nfts from "./NFTsSlice"
import collections from "./collectionsSlice"
import cart from "./cartSlice"
import NFTsSliceDashboard from "./NFTsSliteDashBoard"

const rootReducer = combineReducers({
    wallet,
    nfts,
    collections,
    cart,
    NFTsSliceDashboard
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;

