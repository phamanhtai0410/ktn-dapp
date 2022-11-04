import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { ICartModel,NFTModel ,IPromotionCart} from "@/models/redux-models";
import { RootState } from "@/app/store";
import { fetchListNFTs } from "@/actions/nftActions";
import { Coder } from "@ethersproject/abi/lib/coders/abstract-coder";

const initialState:ICartModel = {
    items: [],
    promotion: null,
    _refCode: null,
    _ref_p_code: null,
}

const cartSlice =createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        
        setItemNFTs(state,action:PayloadAction<NFTModel[]>){
            state.items=action.payload;
        },

        removeItemNFT(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.nft_id !== action.payload)
        },

        applyCode(state, action: PayloadAction<IPromotionCart>) {
            state.promotion = action.payload;
        },

        setPromotionRefCode(state, action: PayloadAction<string>) {
            state._ref_p_code = action.payload;
        },

        setRefCodeCart(state, action: PayloadAction<string>) {
            state._refCode = action.payload;
        },
        
    },
    
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchListNFTs.fulfilled, (state, action) => {
          // Add user to the state array
          state.items.push(action.payload)
        })

    },
})

export const { setItemNFTs  ,removeItemNFT ,applyCode , setPromotionRefCode ,setRefCodeCart} = cartSlice.actions;
export default cartSlice.reducer;

// create and export the selector
export const selectCartItems = (state: RootState) => state.cart.items || [];
export const selectPromotion = (state: RootState) => state.cart.promotion;
export const selectRefPromotionCode = (state: RootState) => state.cart._ref_p_code;
export const selectRefCode = (state: RootState) => state.cart._refCode;
