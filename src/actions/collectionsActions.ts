// import {NFTsSlice} from '@/reducers/NFTsSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { NFTService } from "@/service/nft.service"

export const fetchListCollections = createAsyncThunk(
    'collections/fetchListNFTs',
    async (params:any, { dispatch, getState }) => {
        const response = await NFTService.getListCollections(params)
        return response.data
    }
)
