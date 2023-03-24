import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";
import { fetchReferralCookies } from "@/actions/userActions";

const initialState = {
    referralCookies: null,
    expireTime: null,
}

const settingSlice =createSlice({
    name:'setting',
    initialState:initialState,
    reducers:{
        setExpireTIme(state,action:PayloadAction<Date>){
            state.expireTime=action.payload;
        },
    },
    
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchReferralCookies.fulfilled, (state, action) => {
          state.referralCookies = action.payload.referral_cookies
        })

    },
})

export default settingSlice.reducer;

export const selectReferralCookies = (state: RootState) => state.setting.referralCookies;

