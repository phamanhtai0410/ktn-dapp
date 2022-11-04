
import axiosClient from "./axiosClient"

import {  CHAIN_LIST, PAYMENT_CREATE_META, PAYMENT_CREATE_ORDER, PAYMENT_CHECK_CODE_PROMOTION, PAYMENT_CHECK_REF_CODE } from "./endpoint"

export const PaymentService = {

  getChainListPayment: () => {
    return axiosClient.get(CHAIN_LIST)
  },

  checkCodePromotion: (params) => {
    return axiosClient.get(PAYMENT_CHECK_CODE_PROMOTION, { params })
  },

  checkRefCode: (params) => {
    return axiosClient.get(PAYMENT_CHECK_REF_CODE, { params })
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





