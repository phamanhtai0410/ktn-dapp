
import axiosClient from "./axiosClient"

import {  CHAIN_LIST, PAYMENT_CREATE_META, PAYMENT_CREATE_ORDER, PAYMENT_CHECK_CODE_PROMOTION } from "./endpoint"

export const PaymentService = {

  getChainListPayment: (params) => {
    return axiosClient.get(CHAIN_LIST, {params})
  },

  checkCodePromotion: (params) => {
    return axiosClient.get(PAYMENT_CHECK_CODE_PROMOTION, { params })
  },

  createMetaData: (bodyParams) => {
    return axiosClient.post(PAYMENT_CREATE_META, bodyParams)
  },

  createOrder: (bodyParams) => {
    return axiosClient.post(PAYMENT_CREATE_ORDER, bodyParams)
  },

  paymentOrder: (bodyParams) => {
    return axiosClient.put(PAYMENT_CREATE_ORDER, bodyParams)
  },
  
}





