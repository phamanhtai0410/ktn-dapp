
import { combineReducers } from '@reduxjs/toolkit'

import wallet from "./walletSlice"
import nfts from "./NFTsSlice"
import collections from "./collectionsSlice"
import cart from "./cartSlice"
import NFTsSliceDashboard from "./NFTsSliteDashBoard"
import referral from './referralSlice'
import alert from './alert'
import modalAwaiting from './modalAwaitingSlice'

const rootReducer = combineReducers({
    alert,
    wallet,
    referral,
    nfts,
    collections,
    cart,
    NFTsSliceDashboard,
    modalAwaiting
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;

