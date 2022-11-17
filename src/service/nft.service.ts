
import axiosClient from "./axiosClient"

import { NFT_DASHBOARD,NFT_LIST_ITEMS, NFT_LIST_COLLECTIONS, PAYMENT_CREATE_META, PAYMENT_CREATE_ORDER, PAYMENT_CHECK_CODE_PROMOTION, BOX_DETAIL } from "./endpoint"

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

  getDetailBox: (params) => {
    return axiosClient.get(BOX_DETAIL, { params })
  },
  
}





