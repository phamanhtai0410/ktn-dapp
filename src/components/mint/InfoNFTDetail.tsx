import {
  selectCartItems, selectWhiteListNFT,
} from '@/reducers/cartSlice'
import { useSelector } from 'react-redux'
import characters_icon_new from '@/assets/images/mintpage/characters_icon_new.svg'

const InfoNFTDetail = () => {

  const listItems = useSelector(selectCartItems) 

  return (
    <>
      <div className='uppercase md:text-[20px] text-[16px] text-[#FFFFFF] mb-[24px]'>
        <p>THE MINT STARTS TODAY 4PM UTC! GOOD LUCK!</p>
        <p className='italic text-[16px]'>(NOTIZE: WE POSTPONED THE MINT 24HR LATER FROM 10TH TO 11TH OF MAY
          TODAY WHITELIST SALE STARTS)
          </p>
      </div>
      <div className="mt-[24px] md:mt-0 flex flex-row flex-1  gap-2 md:flex-row items-center">
          <img src={characters_icon_new} alt="characters_icon" />
          <p className="font-extrabold text-[24px] md:text-[40px] leading-[40px] text-[#FFFFFF] md:mx-[20px]">
              {listItems[0]?.name}
              {/* <span className="text-[#F9C306]"> Inu</span> */}
          </p>
          {
            listItems[0]?.rarity ?
              <div className="flex items-center justify-center bg-[#282D34] text-[#FFFFFF] text-[16px]  px-4 h-[29px] border-[0.2px] border-[#F9C306] rounded-[12px]">
                <p>{listItems[0]?.rarity}</p>
            </div>
            : ""
          }
          
      </div>
  
    </>
  )
}

export default InfoNFTDetail
