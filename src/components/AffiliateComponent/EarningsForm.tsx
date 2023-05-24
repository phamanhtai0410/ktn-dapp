import bg_form from '@/assets/images/affiliate/bg_form_aerning.png'
import character_form from '@/assets/images/affiliate/character_form.png'
import coppy_icon from '@/assets/images/affiliate/coppy_icon.svg'
import { toast } from 'react-toastify'

const EarningsForm = ({referralData}) => {

    const notify = () => toast('Copy Successfully')
    const copy = async (address) => {
        const hostname = import.meta.env.VITE_APP_HOSTNAME.toString() || ''
        let url = hostname + '?r=' + address
        await navigator.clipboard.writeText(url)
        notify()
    }
    // lg:pl-[27px] lg:pr-[40px]
    return (
        <div className="relative order-1 bg-[url('../../assets/images/affiliate/bg_form_aerning.png')] h-[345px] mt-0 pt-[110px] w-full lg:w-[45%] px-[20px]">
            <div className='absolute z-[9]'>
                <p className='text-[#FF8966] text-[12px] lg:text-[16px]'>Your Referral Code:</p>

                {
                    referralData?.code && (
                        <div 
                            className='flex flex-row items-center cursor-pointer'
                            onClick={() => copy(referralData?.code)}
                        >
                            <p className='text-[#FFFFFF] text-[31px]'>{referralData?.code}</p>
                            <img src={coppy_icon} alt="" className='w-[24px] h-[29px] ml-[8px]' />
                        </div>
                    )
                }
                
                
                <p className='text-[#FFFFFF] font-bold text-[15px] lg:text-[21px] mt-[40px] mb-[15px]'>Been referred by a friend?</p>
                <div className='flex flex-row'>
                    
                    <input type="text" 
                        className='rounded-[11px] lg:w-[240px] bg-[#0A0A0A] text-[13px] lg:text-[18px] text-[#444444] border-[0.6px] px-[23px] py-[16px] border-[#F9C306]' 
                        placeholder='Enter code here' 
                    />
                    <button className='rounded-[11px] ml-[17px] lg:w-[98px] bg-[#F9C306] text-[#000000] text-[12px] px-[16px] lg:text-[16px] font-bold'>Submit</button>
                </div>
            </div>

            <img src={character_form} className='absolute lg:h-[390px] right-0 top-[-37px] bottom-0 z-[1]' alt="" />
        </div>
    )
}
export default EarningsForm
