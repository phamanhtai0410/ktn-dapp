import React from 'react'
import { Beforeunload } from 'react-beforeunload'
import { CircularProgress } from '@mui/material'
import imgDetailMint from '@/assets/images/mintdetail/imgDetailMint.png'
import character from '@/assets/images/mint/mint_character.png'
import sparks from '@/assets/images/mint/mint_sparks.png'
import mint_mask_dark from '@/assets/images/mint/mint_mask_dark.png'

import imgBanner from '@/assets/images/mintdetail/img_banner_detail.jpg'

const BannerDetailMint = () => {
  return (
    <div className="relative w-full flex items-center justify-center bg-no-repeat">
      <img src={imgBanner} alt="" className='w-full object-cover lg:max-h-[420px] xl:max-h-[470px]'/>
      <div>
      <div className="absolute right-[6%] top-[14%] h-full flex flex-row items-center justify-center space-x-80 2xl:space-x-[440px]">
        <h1 className="text-white text-2xl font-normal uppercase whitespace-pre-line">
          Lest Start{'\r\n'}
          <span className="text-5xl font-extrabold text-[#F9C306]">
            Minting
          </span>
        </h1>
      </div>
      </div>
    </div>
  )
}

export default BannerDetailMint
