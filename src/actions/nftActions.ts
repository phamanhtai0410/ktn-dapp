import { createAsyncThunk } from '@reduxjs/toolkit'
import { NFTService } from "@/service/nft.service"

export const fetchListNFTs = createAsyncThunk(
    'nfts/fetchListNFTs',
    async (params:any, { dispatch, getState }) => {
        const response = await NFTService.getListNFTs(params)
        return response.data
    }
)

export const fetchDetailNFTs = createAsyncThunk(
    'nfts/fetchListNFTs',
    async (params, { dispatch, getState }) => {
        const response = await NFTService.getListNFTs(params)
        return response.data
    }
)

export const createMetaDataNFT = createAsyncThunk(
    'nfts/createMetaDataNFT',
    async (params:any, { dispatch, getState }) => {
        const response = await NFTService.createMetaData(params)
        return response.data
    }
)
