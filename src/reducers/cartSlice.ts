import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { ICartModel,NFTModel ,IPromotionCart} from "@/models/redux-models";
import { RootState } from "@/app/store";
import { fetchListNFTs } from "@/actions/nftActions";

const initialState: ICartModel = {
    items: [],
    userNFT: null,
    promotion: null,
    MAX_TOKENS_IN_ORDER: null,
    addressNFT:null,
    addressCreator: null,
    addressGateway: null,
    whiteListNFT: null,
    _refCode: null,
    _ref_p_code: null,
}

const cartSlice =createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        
        setItemNFTs(state,action:PayloadAction<NFTModel[]>){
            state.items = action.payload;
            state.addressNFT = action.payload[0]?.address || null;
            state.addressGateway = action.payload[0]?.address_gateway || null;
            state.whiteListNFT = action.payload[0]?.whitelist || null;
            state.addressCreator = action.payload[0]?.dapp_creator_address || null
        },

        setUserByNFT(state,action:PayloadAction<NFTModel>){
            state.userNFT = action.payload[0];
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

        setMAX_TOKENS_IN_ORDER(state, action: PayloadAction<number>) {
            state.MAX_TOKENS_IN_ORDER = action.payload;
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

export const { setItemNFTs , setUserByNFT ,removeItemNFT ,applyCode , setPromotionRefCode ,setRefCodeCart ,setMAX_TOKENS_IN_ORDER} = cartSlice.actions;
export default cartSlice.reducer;

// create and export the selector
export const selectAddressNFT = (state: RootState) => state.cart.addressNFT;
export const selectCartItems = (state: RootState) => state.cart.items || [];
export const selectUserCartByNFT = (state: RootState) => state.cart.userNFT || [];
export const selectPromotion = (state: RootState) => state.cart.promotion;
export const selectRefPromotionCode = (state: RootState) => state.cart._ref_p_code;
export const selectRefCode = (state: RootState) => state.cart._refCode;
export const selectMaxMintInOrder = (state: RootState) => state.cart.MAX_TOKENS_IN_ORDER || '';
export const selectWhiteListNFT  = (state: RootState) => state.cart.whiteListNFT;

