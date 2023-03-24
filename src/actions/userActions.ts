import { createAsyncThunk } from '@reduxjs/toolkit'
import { userService } from "@/service/user.service"

export const fetchGetMessage = createAsyncThunk(
    'user/getMessage',
    async (params:any, { dispatch, getState }) => {
        const response = await userService.getMessage(params)
        return response.data
    }
)

export const verifySign = createAsyncThunk(
    'user/verifySign',
    async (params:any, { dispatch, getState }) => {
        const response = await userService.verifySign(params)
        return response.data
    }
)

export const fetchReferralCode = createAsyncThunk(
    'referral/fetchReferralCode',
    async (params:{address:string}, { dispatch, getState }) => {
        const response = await userService.getReferralCode(params)
        return response.data
    }
)

export const fetchReferralCookies = createAsyncThunk(
    'user/fetchReferralCookies',
    async (params, { dispatch, getState }) => {
        const response = await userService.getReferralCookies(params)
        return response.data
    }
)