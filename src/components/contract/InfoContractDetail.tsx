import {
    selectCartItems, selectWhiteListNFT,
  } from '@/reducers/cartSlice'
  import { useSelector } from 'react-redux'
  import characters_icon_new from '@/assets/images/mintpage/characters_icon_new.svg'
  
  const InfoContractDetail = () => {
  
    const listItems = useSelector(selectCartItems) 
  
    return (
      <>
        <div className="mt-[24px] lg:ml-[40px] lg:mt-0 flex flex-1  gap-2 flex-col items-start">
            <div className="mt-[24px] lg:mt-0 flex flex-1  gap-y-[12px] flex-col items-start">
                <span className="font-normal text-[24px] lg:text-[40px] leading-[40px] text-[#FFFFFF] ">
                    We deployed new contract
                    
                </span>
                <span className="font-extrabold text-[24px] lg:text-[40px] leading-[40px] text-[#F9C306]">
                    PLease Mint here:
                </span>
            </div>
            
            <a 
                href="#"
                // target='_blank'
                className='flex items-center justify-center rounded-[19px] mt-[28px] font-extrabold lg:w-[523px] w-full h-[60px] lg:h-[128px] text-[24px] lg:text-[48px] bg-[#F9C306] uppercase'
            >
                Click Here
            </a>
            
        </div>
    
      </>
    )
  }
  
  export default InfoContractDetail
  