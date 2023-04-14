import circle1 from '../../assets/images/mint/circle1.png'
import circle2 from '../../assets/images/mint/circle2.png'
import char from '../../assets/images/mint/char.png'

import {
  selectCartItems,
} from '@/reducers/cartSlice'
import { useSelector } from 'react-redux'
import QrCode from './QrCode'
import { useState } from 'react'
import NavQrCode from './NavQrcode'

const ImageNFTDetail = () => {

  const listItems = useSelector(selectCartItems)
  const [checkQr,setCheckQr] = useState(false)
 
  return (
    <>
        <div className="relative group bg-[#0D0F14] w-[400px] h-[440px] md:border-[8px] md:border-[#242632] mr-[40px] rounded-[10px]">
            {
                !checkQr ? 
                <div className="w-full h-full flex justify-center items-center">
                  <img
                    src={listItems[0]?.image ? listItems[0]?.image : char}
                    alt="cart"
                    className="mint__bounce-in-top animate-delay-1200 object-cover object-center rounded-[10px] h-full"
                  /> 
                </div>
              : <QrCode data={listItems[0]} />
            }
            <NavQrCode checkQr={checkQr} setCheckQr={setCheckQr} />
        </div>

    </>
  )
}

export default ImageNFTDetail
