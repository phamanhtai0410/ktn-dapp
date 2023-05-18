import { createAsyncThunk } from '@reduxjs/toolkit'
import { NFTService } from "@/service/nft.service"
import { AffiliateService } from '@/service/affiliate.service'

export const fetchReferralAddress = createAsyncThunk(
    'dapp/fetchReferralAddress',
    async (params:any, { dispatch, getState }) => {
        const response = await AffiliateService.getReferralAddress(params)
        return response.data
    }
)

export const fetchUserRank = createAsyncThunk(
    'referral/fetchUserRank',
    async (params:any, { dispatch, getState }) => {
        const response = await AffiliateService.getListLeaderBoard(params)
        return response.data
    }
)
