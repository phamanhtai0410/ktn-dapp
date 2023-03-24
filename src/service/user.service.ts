
import axiosClient from "./axiosClient"

import { GET_MESSAGE ,SETTING,USER_REFERRAL_CODE,VERIFY_SIGN } from "./endpoint"

export const userService = {

  getMessage: (queryParams) => {
    return axiosClient.get(GET_MESSAGE, { 
        params: queryParams 
    })
  },

  verifySign: (bodyParams) => {
    return axiosClient.post(VERIFY_SIGN, bodyParams)
  },

  getReferralCode: (params) => {
    return axiosClient.get(USER_REFERRAL_CODE, { params })
  },

  getReferralCookies: (params) => {
    return axiosClient.get(SETTING, { params })
  },

}





