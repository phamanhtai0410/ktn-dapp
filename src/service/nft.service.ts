
import axiosClient from "./axiosClient"

import { NFT_DASHBOARD,NFT_LIST_ITEMS, NFT_LIST_COLLECTIONS, BOX_DETAIL } from "./endpoint"

export const NFTService = {

  getListNFTsDashboard: (params) => {
    return axiosClient.get(NFT_DASHBOARD, {params})
  },

  getListNFTs: (params) => {
    return axiosClient.get(NFT_LIST_ITEMS, { params })
  },
  
  getListNFTsByCollection: (params) => {
    return axiosClient.get(NFT_LIST_COLLECTIONS, { params })
  },

  getListCollections: (params) => {
    return axiosClient.get(NFT_LIST_COLLECTIONS, {params})
  },

  getDetailBox: (params) => {
    return axiosClient.get(BOX_DETAIL, { params })
  },
  
}





