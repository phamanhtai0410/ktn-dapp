import React, {useRef} from "react";
import arrow_up_right_small from '@/assets/images/mintpage/arrow_up_right_small.svg'
import { sendSubscribe } from "@/actions/email";

const FormSubscribe = () => {
    const refForm = useRef()
    const onSubmit = async (event: any) => {
        event.preventDefault()
        try {
            const data = new FormData(event.target);
            console.log('------data-----', data)
            let jsonData = {};
            // @ts-ignore
            [...data.entries()].map(i => {
                // @ts-ignore
                jsonData[i[0]] = i[1]
            })
            console.log('-------jsonData-----', jsonData)
            await sendSubscribe(jsonData)
            if(refForm.current) {
                // @ts-ignore
                refForm.current.reset()
            }
        } catch (e: any) {
            console.log(e)
        }
    }
    return (
        <>
        <form ref={refForm} onSubmit={onSubmit}>
            <input
                placeholder='Email Address'
                name={"email"}
                type={"email"}
                className='bg-[#242731] appearance-none border border-zinc-500 rounded-3xl w-full py-2 px-4 h-14 text-gray-300 leading-relaxed focus:outline-none'
            />
            {/* <button type='submit' className='btn-footer bg-[#F9C306]'>
                Get News
            </button> */}
            <button
                    className='absolute top-[8px] right-[8px] flex items-center justify-between w-[126px] h-[40px] bg-[#F9C306] pl-[12px] pr-[8px] rounded-[20px]'
            >
                <span>Subscribe</span>
                <div className='flex items-center justify-center bg-[#15103C] rounded-full w-[36px] h-[36px]'>
                    <img src={arrow_up_right_small} alt="arrow_up_right_small" className='w-auto' />
                </div>
            </button>
        </form>
        </>
    )
}

export default FormSubscribe