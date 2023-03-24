import { createAsyncThunk } from '@reduxjs/toolkit'
import { NFTService } from "@/service/nft.service"

export const fetchListNFTsDashboard = createAsyncThunk(
    'nfts/fetchListNFTsDashboard',
    async (params:any, { dispatch, getState }) => {
        const response = await NFTService.getListNFTsDashboard(params)
        return response.data
    }
)

export const fetchListNFTs = createAsyncThunk(
    'nfts/fetchListNFTs',
    async (params:any, { dispatch, getState }) => {
        const response = await NFTService.getListNFTs(params)
        return response.data
    }
)

export const fetchListNFTsByCollection = createAsyncThunk(
    'nfts/fetchListNFTsByCollection',
    async (params:any, { dispatch, getState }) => {
        const response = await NFTService.getListNFTsByCollection(params)
        return response.data
    }
)

export const fetchListMintNFT = createAsyncThunk(
    'nfts/fetchListMintNFT',
    async (params:any, { dispatch, getState }) => {
        const response = await NFTService.getListMints(params)
        return response.data
    }
)
