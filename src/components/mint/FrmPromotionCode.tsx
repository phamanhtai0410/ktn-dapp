
import { NFTModel } from '@/models/redux-models';
import { applyCode, selectRefPromotionCode } from '@/reducers/cartSlice';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/app/hooks';
import { checkCodePromotion } from '@/actions/paymentActions';

import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
} from "react-google-recaptcha-v3";

const FrmPromotionCodeMint:FC = () =>{

    const dispatch = useAppDispatch();

    const _refProCode = useSelector(selectRefPromotionCode);
    const [isPending, setIsPending] = useState(false);
    const [code, setCode] = useState("")
    const [token, setToken] = useState('')
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

    useEffect(() => {
        if (code=== "" && _refProCode) {
            setCode(_refProCode)
        }
    }, [_refProCode])

    const onVerify = useCallback((token) => {
        setToken(token);
    },[refreshReCaptcha])
    
    const onChangeCode = (e) => {
        e.preventDefault()
        const { value } = e.target;
        setCode(value)
    };

    const onSubmit = async (e) => {

        e.preventDefault()
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

            setRefreshReCaptcha(r => !r)
            setCode("")
            setIsPending(false)

        } catch (err) {
            alert(err);
            setRefreshReCaptcha(r => !r)
            setIsPending(false)
            console.log(err)
        }
       
    }

    return (
        
        <GoogleReCaptchaProvider  reCaptchaKey="6Lfj8agiAAAAAPYgBTzg1YqeTngZsF4AhTLvbwun">

        <div className="relative mt-[32px] md:w-[404px] h-[42px]">
            
                <input
                    onChange={e=>{onChangeCode(e)}}
                    value={code}
                    placeholder='Add Promo Code Here'
                    className="box-input-promotion w-full p-[12px] h-full rounded-[5px]"
                />

                {code ? 
                <button 
                    onClick={e=>{onSubmit(e)}}
                    disabled={isPending}
                    className='bg-button-apply absolute top-[6.5px] right-[6.5px] flex items-center justify-center w-[85px] h-[28px] text-[#FFFFFF] rounded-[5px] bg-[#FFA52C]'>
                    { isPending ? "Checking..." :"Apply" }  
                </button> 
                :
                <button 
                    disabled={isPending}
                    className='bg-button-apply absolute top-[6.5px] right-[6.5px] flex items-center justify-center w-[85px] h-[28px] text-[#fca500b3] rounded-[5px] bg-[#00000014]'>
                    { isPending ? "Checking..." :"Apply" }
                </button>}
                    
            </div>
          
            <GoogleReCaptcha 
                action={`check_promotion_code`}
                onVerify={onVerify} 
                refreshReCaptcha={refreshReCaptcha}
            />

        </GoogleReCaptchaProvider>
        
    )

}

export default FrmPromotionCodeMint;