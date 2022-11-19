import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { IPromotionCart, IBoxModel, IBoxAccountModel, IBoxInfoModel, IBoxRoundModel, ItemBoxModel} from "@/models/redux-models";
import { RootState } from "@/app/store";
import { openBox } from "@/actions/boxActions";

const initialState:IBoxModel = {
    addressBox:null,
    items: [],
    ownerItems: [],
    boxInfo: null,
    account: null,
    round: null,
    promotion: null,
    _ref_p_code: "",
    openBoxStatus: "",
}

const boxSlice = createSlice({
    name:'box',
    initialState:initialState,
    reducers:{

        setBoxAddress(state, action: PayloadAction<string>) {
            state.addressBox = action.payload;
        },

        setItemBox(state,action:PayloadAction<ItemBoxModel[]>){
            state.items = action.payload;
        },

        setOwnerBoxItems(state,action:PayloadAction<[]>){
            state.ownerItems = action.payload;
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
    extraReducers: (builder) => {
        builder.addCase(openBox.pending, (state, action) => {
            state.openBoxStatus= "pending";
        })
        builder.addCase(openBox.fulfilled, (state, action) => {
            state.openBoxStatus= "fulfilled";
        })
        builder.addCase(openBox.rejected, (state, action) => {
            state.openBoxStatus= "rejected";
        })
    },

})

export const { setBoxAddress, setItemBox, setOwnerBoxItems, setBoxAccount, setBoxRound, setBoxInfo, applyCode, setPromotionRefCode } = boxSlice.actions;
export default boxSlice.reducer;

// create and export the selector
export const selectBoxOwnerItems = (state: RootState) => state.box.ownerItems || []
export const selectBoxCartItems = (state: RootState) => state.box.items || []
export const selectPromotion = (state: RootState) => state.box.promotion
export const selectRefPromotionCode = (state: RootState) => state.box._ref_p_code

export const selectBoxAddress = (state: RootState) => state.box.addressBox
export const selectBoxAccount = (state: RootState) => state.box.account
export const selectBoxInfo = (state: RootState) => state.box.boxInfo
export const selectBoxRound = (state: RootState) => state.box.round
export const selectOpenBoxStatus = (state: RootState) => state.box.openBoxStatus