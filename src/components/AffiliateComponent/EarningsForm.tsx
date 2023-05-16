import bg_form from '@/assets/images/affiliate/bg_form_aerning.png'
import character_form from '@/assets/images/affiliate/character_form.png'

const EarningsForm = () => {

    return (
        <div className="relative bg-[url('../../assets/images/affiliate/bg_form_aerning.png')] pt-[110px] w-[45%] pl-[27px] pr-[40px]">
            <div className='absolute z-[9]'>
                <p className='text-[#FF8966] text-[16px]'>Your Referral Code:</p>
                <p className='text-[#FFFFFF] text-[31px]'>d5nnm34js</p>

                <p className='text-[#FFFFFF] font-bold text-[21px] mt-[40px] mb-[15px]'>Been referred by a friend?</p>
                <div className='flex flex-row'>
                    
                    <input type="text" 
                        className='rounded-[11px] w-[240px] bg-[#0A0A0A] text-[18px] text-[#444444] border-[0.6px] px-[23px] py-[16px] border-[#F9C306]' 
                        placeholder='Enter code here' 
                    />
                    <button className='rounded-[11px] ml-[17px] w-[78px] bg-[#F9C306] text-[#000000] text-[16px] font-bold'>Submit</button>
                </div>
            </div>

            <img src={character_form} className='absolute h-[390px] right-0 top-[-37px] bottom-0 z-[1]' alt="" />
        </div>
    )
}
export default EarningsForm
