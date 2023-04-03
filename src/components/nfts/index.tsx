import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import NFTsBanner from './NFTsBanner'
import NFTsTabs from './NFTsTabs'
import './index.scss'
import NFTsFilter from './NFTsFilter'
import NFTsList from './NFTsList'
import NFTsInfo from './NFTsInfo'

const NFTsPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate()
  const [category, setCategory] = useState('Character')
  const onChangePage = (page) => {
    setCurrentPage(page)
  }
  const onChangeTab = (tab) => {
    setCurrentPage(1)
    setCategory(tab.category)
    navigate(`/nfts?category=${tab.category}&page=1&page_size=4&chain=BSC`)
  }
  return (
    <div className="min-h-screen">
      <div className="banner-wrapper lg:flex hidden flex-col items-center z-[0] w-full">
        <NFTsBanner />
      </div>

      <div className="w-full bg-[#333]">
        <div className="max-w-[1900px] mx-auto">
          <div className="bg-minttab flex w-full ">
            <NFTsTabs category={category} onChangeTab={onChangeTab} />
          </div>
          <div className="flex w-full h-auto ">
            <NFTsFilter onChangePage={onChangePage} category={category} />
            <NFTsList
              currentPage={currentPage}
              onChangePage={onChangePage}
              category={category}
            />
          </div>
          <div className="flex w-full ">
            <NFTsInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTsPage
