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
import NFTsInfo from './NFTsInfo'
import NFTsList from './NFTsList'
import NTFsGameUpcoming from './NFTsGameUpcoming'

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const onChangePage = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="min-h-screen">
      <div className="banner-wrapper lg:flex hidden flex-col items-center z-[0] w-full">
        <NFTsBanner />
      </div>
      <div className="w-full bg-[#13121F]">
        <div className="max-w-[1900px] mx-auto">
          <div className="bg-minttab w-full ">
            <NFTCharacter />
            <NFTsGenisis />
          </div>
          {/* <div className="bg-minttab flex w-full ">
          <NFTsTabs />
        </div> */}
          <div className="w-full h-auto ">
            <NFTsList />
            <NTFsGameUpcoming />
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
