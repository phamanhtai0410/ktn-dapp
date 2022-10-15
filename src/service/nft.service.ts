
import axiosClient from "./axiosClient"

import { NFT_LIST_ITEMS, NFT_LIST_COLLECTIONS } from "./endpoint"

export const NFTService = {

  getListNFTs: (params) => {
    return axiosClient.get(NFT_LIST_ITEMS, { params })
  },
  
  getDetailNFTs: (params) => {
    return axiosClient.get(NFT_LIST_ITEMS, { params })
  },

  getListCollections: (params) => {
    return axiosClient.get(NFT_LIST_COLLECTIONS, {params})
  }


  
}





