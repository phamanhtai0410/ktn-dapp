
import axiosClient from "./axiosClient"

import { NFT_LIST_ITEMS, NFT_LIST_COLLECTIONS, NFT_CREATE_META, NFT_CREATE_ORDER } from "./endpoint"

export const NFTService = {

  getListNFTs: (params) => {
    return axiosClient.get(NFT_LIST_ITEMS, { params })
  },
  
  getDetailNFTs: (params) => {
    return axiosClient.get(NFT_LIST_ITEMS, { params })
  },

  getListCollections: (params) => {
    return axiosClient.get(NFT_LIST_COLLECTIONS, {params})
  },

  createMetaData: (bodyParams) => {
    return axiosClient.post(NFT_CREATE_META, bodyParams)
  },

  createOrder: (bodyParams) => {
    return axiosClient.post(NFT_CREATE_ORDER, bodyParams)
  },
  
}





