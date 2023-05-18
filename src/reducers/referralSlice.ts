import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";
import { fetchReferralCode,  } from "@/actions/userActions";
import { IReferralCode } from "@/models/redux-models";


const initialState:IReferralCode={
    address: null,
    code: null,
    address_linked: null,
    code_linked: null,
    total_user_linked: null,
    items: {},
}


const referralSlice = createSlice({
    name:'referral',
    initialState:initialState,
    reducers:{},
    extraReducers: (builder) => {
     
        builder.addCase(fetchReferralCode.fulfilled, (state, action) => {
            state.items = action.payload
            // return action.payload
        })

    },
})

export const { } = referralSlice.actions;
export default referralSlice.reducer;

// create and export the selector
export const selectReferralRefCode = (state: RootState) => state.referral.code_linked;
export const selectReferralAddress = (state: RootState) => state.referral.items;
