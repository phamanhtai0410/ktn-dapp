import React from 'react'
import { Beforeunload } from 'react-beforeunload'
import { CircularProgress } from '@mui/material'
import imgDetailMint from '@/assets/images/mintdetail/imgDetailMint.png'
import character from '@/assets/images/mint/mint_character.png'
import sparks from '@/assets/images/mint/mint_sparks.png'
import mint_mask_dark from '@/assets/images/mint/mint_mask_dark.png'

import imgBanner from '@/assets/images/mintdetail/img_banner_detail.jpg'
import imgBannerMobile from '@/assets/images/mintdetail/img_banner_detail_mobile.png'

const BannerDetailMint = () => {
  return (
    <div className="relative w-full flex items-center justify-center bg-no-repeat overflow-hidden">
      <img src={imgBanner} alt="" className='w-full hidden md:flex object-cover lg:max-h-[420px] xl:max-h-[470px]'/>
      <img src={imgBannerMobile} alt="" className='w-full h-full' />
      <div>
        <div className="absolute right-[17%] md:right-[6%] top-0 md:top-[14%] h-full flex flex-row items-center justify-center space-x-80 2xl:space-x-[440px]">
          <h1 className="text-white text-[14px] md:text-2xl font-normal uppercase whitespace-pre-line">
            Lest Start{'\r\n'}
            <span className="text-[20px] md:text-5xl font-extrabold text-[#F9C306]">
              Minting
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default BannerDetailMint
