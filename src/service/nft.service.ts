
import axiosClient from "./axiosClient"

import { NFT_DASHBOARD,NFT_LIST_ITEMS, NFT_LIST_COLLECTIONS, NFT_CREATE_META, NFT_CREATE_ORDER, NFT_CHẸCK_CODE_PROMOTION } from "./endpoint"

export const NFTService = {

  getListNFTsDashboard: (params) => {
    return axiosClient.get(NFT_DASHBOARD, {params})
  },

  getListNFTs: (params) => {
    return axiosClient.get(NFT_LIST_ITEMS, { params })
  },
  
  getDetailNFTs: (params) => {
    return axiosClient.get(NFT_LIST_ITEMS, { params })
  },

  getListCollections: (params) => {
    return axiosClient.get(NFT_LIST_COLLECTIONS, {params})
  },

  checkCodePromotion: (params) => {
    return axiosClient.get(NFT_CHẸCK_CODE_PROMOTION, { params })
  },

  createMetaData: (bodyParams) => {
    return axiosClient.post(NFT_CREATE_META, bodyParams)
  },

  createOrder: (bodyParams) => {
    return axiosClient.post(NFT_CREATE_ORDER, bodyParams)
  },

  paymentOrder: (bodyParams) => {
    return axiosClient.put(NFT_CREATE_ORDER, bodyParams)
  },
  
}





