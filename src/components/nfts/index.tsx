import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import NFTsBanner from './NFTsBanner'
import NFTsTabs from './NFTsTabs'
import './index.scss'
import NFTsFilter from './NFTsFilter'
import NFTsList from './NFTsList'
import NFTsInfo from './NFTsInfo'
import { fetchListMintNFT } from '@/actions/nftActions'
import { useAppDispatch } from '@/app/hooks'
import { selectListMintNFT } from '@/reducers/mintSlice'

const NFTsPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const onChangePage = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="min-h-screen">
      <div className="banner-wrapper lg:flex hidden flex-col items-center z-[0] w-full">
        <NFTsBanner />
      </div>

      <div className="max-w-[1900px] mx-auto bg-[#333]">
        <div className="bg-minttab flex w-full ">
          <NFTsTabs />
        </div>
        <div className="flex w-full h-auto ">
          <NFTsFilter onChangePage={onChangePage} />
          <NFTsList currentPage={currentPage} onChangePage={onChangePage} />
        </div>
        <div className="flex w-full ">
          <NFTsInfo />
        </div>
      </div>
    </div>
  )
}

export default NFTsPage
