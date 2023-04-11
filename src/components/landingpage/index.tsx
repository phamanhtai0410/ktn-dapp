import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import NFTsTabs from '../nfts/NFTsTabs'
import './index.scss'
import { fetchListMintNFT } from '@/actions/nftActions'
import { useAppDispatch } from '@/app/hooks'
import { selectListMintNFT } from '@/reducers/mintSlice'
import NFTCharacter from './NFTCharacters'
import NFTsGenisis from './NFTsGenisis'
import NFTsBanner from './NFTsBanner'
import NFTsInfo from '../nfts/NFTsInfo'
import NFTsList from './NFTsList'
import NFTsGameUpcoming from './NFTsGameUpcoming'

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <div className="banner-wrapper lg:flex hidden flex-col items-center z-[0] w-full overflow-hidden">
        <NFTsBanner />
      </div>
      <div className="w-full bg-[#13121F]">
        <div className="">
          <div className="bg-minttab w-full ">
            <NFTCharacter />
            <NFTsGenisis />
          </div>
          <div className="w-full h-auto ">
            <NFTsList />
            <NFTsGameUpcoming />
          </div>
          <div className="flex w-full ">
            <NFTsInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
