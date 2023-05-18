
import { LEADER_BOARD, REFERRAL } from "./endpoint"
import axios from "axios";

export const AffiliateService = {

    getReferralAddress: (params) => {
        return axios.get(`https://api-stag-ktn.esollabs.com/v1/${REFERRAL}`, {params})
    },

    getListLeaderBoard: (params) => {
        return axios.get(`https://api-stag-ktn.esollabs.com/v1/${LEADER_BOARD}`, {params})
    },
}