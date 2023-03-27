import circle1 from '../../assets/images/mint/circle1.png'
import circle2 from '../../assets/images/mint/circle2.png'
import char from '../../assets/images/mint/char.png'

import {
  selectCartItems,
} from '@/reducers/cartSlice'
import { useSelector } from 'react-redux'

const ImageNFTDetail = () => {

  const listItems = useSelector(selectCartItems)
 
  return (
    <>
       <div className="bg-[#0D0F14] flex justify-center items-center w-[400px] h-[440px] md:border-[8px] md:border-[#242632] mr-[40px] rounded-[10px]">
            <img
                src={listItems[0]?.image ? listItems[0]?.image : char}
                alt="cart"
                className="mint__bounce-in-top animate-delay-1200 object-cover object-center rounded-[10px] h-full"
              />
        </div>
    </>
  )
}

export default ImageNFTDetail
