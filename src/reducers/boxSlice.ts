import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { IPromotionCart, IBoxModel, IBoxAccountModel, IBoxInfoModel, IBoxRoundModel, NFTModel} from "@/models/redux-models";
import { RootState } from "@/app/store";

const initialState:IBoxModel = {
    items:[],
    boxInfo: null,
    account: null,
    round: null,
    promotion: null,
    _ref_p_code: ""
}

const boxSlice = createSlice({
    name:'box',
    initialState:initialState,
    reducers:{

        setOwnerBoxItems(state,action:PayloadAction<NFTModel[]>){
            state.items=action.payload;
        },
        
        setBoxAccount(state,action:PayloadAction<IBoxAccountModel>){
            state.account = action.payload;
        },

        setBoxInfo(state,action:PayloadAction<IBoxInfoModel>){
            state.boxInfo = action.payload;
        },

        setBoxRound(state,action:PayloadAction<IBoxRoundModel>){
            state.round = action.payload;
        },

        applyCode(state, action: PayloadAction<IPromotionCart>){
            state.promotion = action.payload;
        },

        setPromotionRefCode(state, action: PayloadAction<string>) {
            state._ref_p_code = action.payload;
        },
        
    },

})

export const { setOwnerBoxItems ,setBoxAccount  ,setBoxInfo ,applyCode , setPromotionRefCode } = boxSlice.actions;
export default boxSlice.reducer;

// create and export the selector
export const selectBoxOwnerItems = (state: RootState) => state.box.items || [];
export const selectPromotion = (state: RootState) => state.box.promotion
export const selectRefPromotionCode = (state: RootState) => state.box._ref_p_code

export const selectBoxAccount = (state: RootState) => state.box.account
export const selectBoxInfo = (state: RootState) => state.box.boxInfo
export const selectBoxRound = (state: RootState) => state.box.round