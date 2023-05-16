
import axiosClient from "./axiosClient"
import queryString from "query-string";

import { NFT_DASHBOARD,NFT_LIST_ITEMS, NFT_LIST_COLLECTIONS, BOX_DETAIL, MY_NFTS, MINT_LIST_ITEM, NFT_DETAIL_ITEMS, NFT_LIST_UPCOMING, NFT_LIST_CATEGORY, NFT_CHAINS_SUPPORT, LEADER_BOARD } from "./endpoint"
import axios from "axios";

export const NFTService = {

  getListMyNFTs: (params) => {
    return axiosClient.get(MY_NFTS, { params})
  },

  getListNFTsDashboard: (params) => {
    return axiosClient.get(NFT_DASHBOARD, {params})
  },

  getListNFTsUpcoming: (params) => {
    return axiosClient.get(NFT_LIST_UPCOMING, {params})
  },

  getListCategoryNFTs: (params) => {
    return axiosClient.get(NFT_LIST_CATEGORY, {params})
  },

  getListNFTs: (params) => {
    return axiosClient.get(MINT_LIST_ITEM, { params })
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
  
  getListMints: (params) => {
    return axiosClient.get(MINT_LIST_ITEM, {params})
  },

  getDetailNFTs: (params) => {
    return axiosClient.get(NFT_DETAIL_ITEMS, { params })
  },

  getChainSupport: (params) => {
    return axiosClient.get(NFT_CHAINS_SUPPORT, { params })
  },

  getLeaderBoardDapp: (params) => {
    // return axiosClient.get(LEADER_BOARD, {params})
    return axios.get(`https://api-stag-ktn.esollabs.com/v1/${LEADER_BOARD}`)
  }
  
}





