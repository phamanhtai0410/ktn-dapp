import React from 'react'
import { Beforeunload } from 'react-beforeunload'
import { CircularProgress } from '@mui/material'
import imgBanner from '@/assets/images/mint/mint_banner.jpg'
import character from '@/assets/images/mint/mint_character.png'
import sparks from '@/assets/images/mint/mint_sparks.png'
import mint_mask_dark from '@/assets/images/mint/mint_mask_dark.png'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const NFTsBanner = () => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => {
        navigate(`/nfts?category=character&page=1&page_size=8&chain=BSC`)
      }}
      className="relative w-full flex items-center justify-center bg-no-repeat lg:bg-[length:100%_100%] bg-cover bg-[url('../../assets/images/mint/mint_banner.jpg')] bg-[#13121F]"
    >
      <img src={imgBanner} alt="" />
      <img
        src={character}
        alt=""
        className="absolute bottom-0 max-w-[600px] 2xl:w-[36%] w-[37%] ml-0"
      />
      <img src={sparks} alt="" className="absolute top-0 left-0" />
      <img src={mint_mask_dark} alt="" className="absolute top-0 left-0 z-10" />
      <div className="absolute left-[15%] top-[14%] w-2/3 h-full flex flex-row items-center justify-center space-x-80 2xl:space-x-[440px]">
        <div className="flex flex-col">
          <h1 className="text-white text-6xl font-bold whitespace-nowrap uppercase">
            Katana INU
          </h1>
          <p className="text-[#B4B4B4] text-4xl font-normal uppercase">
            Minting NFT Items
          </p>
          <button className="mt-8 w-fit flex items-center justify-center px-4 py-2.5 text-white font-normal text-base border border-[#F9C30633] rounded-xl bg-[rgba(26,25,25,0.5)] backdrop-blur-[10px] uppercase">
            Mint &nbsp;
            <span className="text-[#F9C306] font-bold uppercase">
              Arena NFts
            </span>
          </button>
        </div>

        <h1 className="text-white text-2xl font-normal uppercase whitespace-pre-line">
          Game with{'\r\n'}
          <span className="text-5xl font-extrabold text-[#F9C306]">
            {'magic\nrewards'}
          </span>
        </h1>
      </div>
    </div>
  )
}

export default NFTsBanner
