
import { NFTModel } from '@/models/redux-models';
import { applyCode, selectCartItems, selectPromotion } from '@/reducers/cartSlice';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/app/hooks';
import { createMetaDataNFT } from '@/actions/nftActions';
import { selectWalletAccount } from '@/reducers/walletSlice';
import { CircularProgress } from '@mui/material';


const FrmPromotionCode = () =>{

    const dispatch = useAppDispatch();
    const accountAddress = useSelector(selectWalletAccount);
    const listItems = useSelector(selectCartItems);

    const [isPending, setIsPending] = useState(false);
    const [code, setCode] = useState("")
    
    const onChangeCode = (e) => {
        e.preventDefault()
        const { value } = e.target;
        setCode(value)
    };

    const onSubmit = async (e) => {

        e.preventDefault();
        setIsPending(true)
        
        try {
            const metaData = await dispatch(createMetaDataNFT({
                promotion_code:code,
                address: accountAddress,
                items: listItems.map(item => item.nft_id)
            }))
            if(metaData.meta.requestStatus === "rejected"){
                throw (metaData.payload.msg);
            }

            if(metaData.payload.data){
                applyCode({
                    code,
                    discount: metaData.payload.data.discount
                })
            }
            setIsPending(false)

        } catch (err) {
             alert(err);
            setIsPending(false);
            console.log(err);
        }
       


      

        // applyCode({
        //     code,
        //     discount:metaData.discount
        // })

        
    }

    return (
        <div className=''>
            <div className="flex flex-row pt-4 items-center justify-between">
                  <span className="text-[16px] text-[#f3a511]">
                    Apply discount
                  </span>
                  <span className="text-[16px] text-[#f3a511]">
                    How to buy?
                  </span>
            </div>
            <div className='flex justify-between items-center gap-x-4'>
                <input 
                onChange={e=>{onChangeCode(e)}}
                className='w-full indent-4 font-jost uppercase font-bold text-base bg-[#ffffff1a] text-[#fca500] rounded-[5px] my-3 py-3 focus:outline-none text' />
                <button 
                onClick={e=>{onSubmit(e)}}
                disabled={isPending}
                className='w-[170px] px-1 py-3 h-12 leading-1 rounded-lg font-poppins font-medium text-sm bg-[#FFA52C] text-white'>
                  { isPending ? "Checking..." :"Check Code" }  
                </button>
            </div>
        </div>
    )

}

export default FrmPromotionCode;