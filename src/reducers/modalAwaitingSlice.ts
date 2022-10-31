import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";

const initialState={
    isOpenModal: false,
    isSuccess:false,
    message: null,
}

const modalAwaitingSlice = createSlice({
    name:'staking',
    initialState:initialState,
    reducers:{
        openModalAwaiting(state,action){
            state.isSuccess = false,
            state.isOpenModal = action.payload.isOpen;
            state.message = action.payload?.message || state.message
        },
        updateSuccessAwaiting(state,action){
            state.isSuccess = true,
            state.message = action.payload?.message || state.message
        },
    },
    extraReducers: (builder) => {
     
    },
})

export const { openModalAwaiting ,updateSuccessAwaiting } = modalAwaitingSlice.actions;
export default modalAwaitingSlice.reducer;

// create and export the selector
export const selectIsOpenModalAwaiting = (state: RootState) => state.modalAwaiting.isOpenModal;
export const selectIsSuccessModalAwaiting = (state: RootState) => state.modalAwaiting.isSuccess;
export const selectIMessageModalAwaiting = (state: RootState) => state.modalAwaiting.message;