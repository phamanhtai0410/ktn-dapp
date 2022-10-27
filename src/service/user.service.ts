
import axiosClient from "./axiosClient"

import { GET_MESSAGE ,VERIFY_SIGN } from "./endpoint"

export const userService = {

  getMessage: (queryParams) => {
    return axiosClient.get(GET_MESSAGE, { 
        params: queryParams 
    })
  },

  verifySign: (bodyParams) => {
    return axiosClient.post(VERIFY_SIGN, bodyParams)
  },

}





