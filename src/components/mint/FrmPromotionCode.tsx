
import { NFTModel } from '@/models/redux-models';
import { applyCode, selectCartItems, selectPromotion, selectRefPromotionCode } from '@/reducers/cartSlice';
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
            setIsPending(false);
            console.log(err);
        }
       
    }

    return (
        <GoogleReCaptchaProvider  reCaptchaKey="6Lfj8agiAAAAAPYgBTzg1YqeTngZsF4AhTLvbwun">
            <div className="flex flex-row mt-14 px-5 items-center justify-center border border-[#fca50068] rounded-[42px] shadow-[inset_0_0_7px_rgba(251,163,1,0.23)]">
                
                <input
                    onChange={e=>{onChangeCode(e)}}
                    value={code}
                    placeholder='Add Promo Code Here'
                    className="placeholder-[#ffffff47] sm:w-[318px] w-[230px] mx-8 bg-transparent leading-4 font-jost font-bold text-xl text-[#fca500b3] rounded-[5px] my-3 py-1 focus:outline-none text-center px-4 shadow-[inset_1.5px_2.598px_5px_0px_rgba(0,0,0,0.1)] bg-opacity-60 brightness-110" 
                />

                {code ? <button 
                    onClick={e=>{onSubmit(e)}}
                    disabled={isPending}
                    className='w-[120px] py-2 h-12 leading-1 rounded-3xl font-poppins font-medium text-sm bg-[#FFA52C] text-white absolute right-2'>
                    { isPending ? "Checking..." :"Apply" }  
                </button> :""}
                
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