
import { combineReducers } from '@reduxjs/toolkit'

import nfts from "./NFTsSlice"
import collections from "./CollectionsSlice"

const rootReducer = combineReducers({
    nfts,
    collections
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;

