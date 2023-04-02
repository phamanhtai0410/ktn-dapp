import { createAsyncThunk } from '@reduxjs/toolkit'
import { NFTService } from "@/service/nft.service"

export const fetchListNFTsDashboard = createAsyncThunk(
    'nfts/fetchListNFTsDashboard',
    async (params:any, { dispatch, getState }) => {
        const response = await NFTService.getListNFTsDashboard(params)
        return response.data
    }
)

export const fetchListNFTsUpcoming = createAsyncThunk(
    'nfts/fetchListNFTsUpcoming',
    async (params:any, { dispatch, getState }) => {
        const response = await NFTService.getListNFTsUpcoming(params)
        return response.data
    }
)

export const fetchListCategoryNFTs = createAsyncThunk(
    'nfts/fetchListCategoryNFTs',
    async (params:any, { dispatch, getState }) => {
        const response = await NFTService.getListCategoryNFTs(params)
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

export const fetchDetailNFTs = createAsyncThunk(
    'nfts/fetchListNFTs',
    async (params:any, { dispatch, getState }) => {
        const response = await NFTService.getDetailNFTs(params)
        return response.data
    }
)