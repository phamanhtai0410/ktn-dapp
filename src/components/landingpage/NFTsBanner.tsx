import React from 'react'
import { Beforeunload } from 'react-beforeunload'
import { CircularProgress } from '@mui/material'
import imgBanner from '@/assets/images/mint/mint_banner.jpg'
import imgBannerMobile from '@/assets/images/mint/mint_banner_mobile.png'
import character from '@/assets/images/mint/mint_character.png'
import sparks from '@/assets/images/mint/mint_sparks.png'
import mint_mask_dark from '@/assets/images/mint/mint_mask_dark.png'
import icon_media_play from '@/assets/images/mint/icon_media_play.svg'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const NFTsBanner = () => {
  const navigate = useNavigate()
  return (
    <div
      className="relative w-full flex items-center justify-center bg-no-repeat md:h-auto lg:bg-[length:100%_100%] 
        bg-cover md:bg-[url('../../assets/images/mint/mint_banner.jpg')] bg-[url('../../assets/images/mint/mint_banner_mobile.png')] bg-[#13121F]"
    >
      <img src={imgBanner} alt="" className='md:flex hidden' />
      <img src={imgBannerMobile} alt="" className='md:hidden flex'/>
      <img
        src={character}
        alt=""
        className="absolute md:flex hidden bottom-0 max-w-[600px] 2xl:w-[36%] w-[37%] ml-0 animate one fadeInUp"
      />
      <img src={sparks} alt="" className="absolute top-0 left-0 md:flex hidden" />
      <img src={mint_mask_dark} alt="" className="absolute top-0 left-0 z-1 md:flex hidden" />

      <div className="absolute md:left-[12%] md:top-[14%] top-[2%] left-[50%] z-10 md:w-2/3 w-[144px] h-full flex flex-row items-center justify-center md:space-x-80 2xl:space-x-[440px]">
        <div className="flex flex-col w-full">
          <h1 className="text-white md:text-[70px] text-[20px] font-bold whitespace-nowrap uppercase">
            Katana INU
          </h1>
          <p className="text-[#B4B4B4] md:text-4xl text-[12px] font-normal uppercase ">
            Minting NFT Items
          </p>
          <div className='flex flex-col md:flex-row md:items-center'>
            <button
              onClick={() => {
                navigate(`/nfts?category=character&page=1&page_size=8&chain=ETHEREUM`)
              }}
            className="animate two fadeInLeft md:mt-8 mt-[4px] w-fit flex items-center justify-center md:px-4 md:py-2.5 py-[8px] px-[8px]  text-white font-normal md:text-base text-[8px] border border-[#F9C30633] rounded-xl bg-[rgba(26,25,25,0.5)] backdrop-blur-[10px] uppercase">
              Mint &nbsp;
              <span className="text-[#F9C306] font-bold uppercase">
                Arena NFts
              </span>
            </button>
            <div className='animate two fadeInLeft cursor-pointer md:w-[171px] w-[87px] ml-0 md:ml-[17px]  md:text-base text-[8px] md:mt-8 mt-[4px] md:px-4 md:py-2.5 py-[8px] px-[8px] flex relative items-center justify-center border border-[#F9C30633] rounded-xl'>
              <span className="text-[#FFFFFF] font-bold uppercase">
                Play Trailer
              </span>
              <div className='absolute flex md:w-[50px] md:h-[50px] w-[25px] h-[25px] md:right-[-25px] right-[-12px] rounded-full bg-[#100F12] items-center justify-center border border-[#F9C306]'>
                <img src={icon_media_play} alt="icon_media_play" className='w-[12px] h-[13px]' />
              </div>
            </div>
          </div>
          
        </div>

        <h1 className="text-white text-2xl md:flex flex-col hidden font-normal uppercase whitespace-pre-line">
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
