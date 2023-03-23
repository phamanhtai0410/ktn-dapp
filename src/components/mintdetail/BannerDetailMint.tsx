import React from 'react'
import { Beforeunload } from 'react-beforeunload'
import { CircularProgress } from '@mui/material'
import imgDetailMint from '@/assets/images/mintdetail/imgDetailMint.png'
import character from '@/assets/images/mint/mint_character.png'
import sparks from '@/assets/images/mint/mint_sparks.png'
import mint_mask_dark from '@/assets/images/mint/mint_mask_dark.png'

const BannerDetailMint = () => {
  return (
    <div className="relative w-full flex items-center justify-center bg-no-repeat lg:bg-[length:100%_100%] bg-cover bg-[url('../../assets/images/mint/mint_banner.jpg')]">
      <img src={imgDetailMint} alt="" />
      {/* <img
        src={character}
        alt=""
        className="absolute bottom-0 max-w-[600px] 2xl:w-[36%] w-[37%] ml-20"
      /> */}
      <img src={sparks} alt="" className="absolute top-0 left-0" />
      <img src={mint_mask_dark} alt="" className="absolute top-0 left-0 z-10" />
      <div className="absolute right-[6%] top-[14%] h-full flex flex-row items-center justify-center space-x-80 2xl:space-x-[440px]">

        <h1 className="text-white text-2xl font-normal uppercase whitespace-pre-line">
          Lest Start{'\r\n'}
          <span className="text-5xl font-extrabold text-[#F9C306]">
            Minting
          </span>
        </h1>
      </div>
    </div>
  )
}

export default BannerDetailMint
