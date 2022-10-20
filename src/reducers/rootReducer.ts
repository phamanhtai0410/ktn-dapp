
import { combineReducers } from '@reduxjs/toolkit'

import wallet from "./walletSlice"
import nfts from "./NFTsSlice"
import collections from "./collectionsSlice"
import cart from "./cartSlice"

const rootReducer = combineReducers({
    wallet,
    nfts,
    collections,
    cart
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;

