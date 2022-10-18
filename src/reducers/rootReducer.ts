
import { combineReducers } from '@reduxjs/toolkit'

import nfts from "./NFTsSlice"
import collections from "./collectionsSlice"
import cart from "./cartSlice"

const rootReducer = combineReducers({
    nfts,
    collections,
    cart
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;

