
import { NFTModel } from '@/models/redux-models';
import { applyCode, selectCartItems, selectPromotion } from '@/reducers/cartSlice';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/app/hooks';
import { checkCodePromotion } from '@/actions/paymentActions';
import { selectWalletAccount } from '@/reducers/walletSlice';

import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
  } from "react-google-recaptcha-v3";

const FrmPromotionCode = () =>{

    const dispatch = useAppDispatch();
    const accountAddress = useSelector(selectWalletAccount);
    const listItems = useSelector(selectCartItems);

    const [isPending, setIsPending] = useState(false);
    const [code, setCode] = useState("")

    const [token, setToken] = useState('')

    const onVerify = useCallback((tokenNew) => {
      setToken(tokenNew)
    },[code]);
    
    const onChangeCode = (e) => {
        e.preventDefault()
        const { value } = e.target;
        setCode(value)
    };

    const onSubmit = async (e) => {

        e.preventDefault();
        setIsPending(true)
        
        try {

            const metaData = await dispatch(checkCodePromotion({
                code,
                token
            }))

            if(metaData.meta.requestStatus === "rejected"){
                throw (metaData.payload.msg);
            }

            if(metaData.meta.requestStatus === "fulfilled"){
                dispatch(applyCode({
                    code,
                    discount: metaData.payload.discount
                }))
            }
            
            setCode("")
            setIsPending(false)

        } catch (err) {
             alert(err);
            setIsPending(false);
            console.log(err);
        }
       
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
            
            <GoogleReCaptchaProvider reCaptchaKey="6Lfj8agiAAAAAPYgBTzg1YqeTngZsF4AhTLvbwun">

                <div className='flex justify-between items-center gap-x-4'>
                    <input 
                        onChange={e=>{onChangeCode(e)}}
                        value={code}
                        className='w-full indent-4 font-jost uppercase font-bold text-base bg-[#ffffff1a] text-[#fca500] rounded-[5px] my-3 py-3 focus:outline-none text' />
                    <button 
                        onClick={e=>{onSubmit(e)}}
                        disabled={isPending}
                        className='w-[170px] px-1 py-3 h-12 leading-1 rounded-lg font-poppins font-medium text-sm bg-[#FFA52C] text-white'>
                        { isPending ? "Checking..." :"Check Code" }  
                    </button>
                </div>

                <GoogleReCaptcha 
                    action={`check_promotion_code`}
                    onVerify={onVerify} 
                />

            </GoogleReCaptchaProvider>
           
        </div>
    )

}

export default FrmPromotionCode;