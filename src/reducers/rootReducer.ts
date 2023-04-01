
import { combineReducers } from '@reduxjs/toolkit'

import wallet from "./walletSlice"
import nfts from "./NFTsSlice"
import collections from "./collectionsSlice"
import cart from "./cartSlice"
import box from "./boxSlice"


import categoryNFTs from "./categoryNFTs"
import NFTsUpcoming from "./NFTsUpcoming"
import NFTsSliceDashboard from "./NFTsSliteDashBoard"
import referral from './referralSlice'
import alert from './alert'
import modalAwaiting from './modalAwaitingSlice'
import setting from './settingSlice'
import mint from './mintSlice'

const rootReducer = combineReducers({
    alert,
    wallet,
    referral,
    nfts,
    collections,
    cart,
    box,
    NFTsSliceDashboard,
    categoryNFTs,
    NFTsUpcoming,
    modalAwaiting,
    setting,
    mint
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;

