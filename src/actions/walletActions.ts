import { createAsyncThunk } from '@reduxjs/toolkit'
import { PaymentService } from "@/service/payment.service"

export const fetchChainList = createAsyncThunk(
    'wallet/fetchChainList',
    async (params:any, { dispatch, getState }) => {
        const response = await PaymentService.getChainListPayment()
        return response.data
    }
)
