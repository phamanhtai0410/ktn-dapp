import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import NFTsBanner from './NFTsBanner'
import NFTsTabs from './NFTsTabs'
import './index.scss'
import NFTsFilter from './NFTsFilter'
import NFTsList from './NFTsList'
import NFTsInfo from './NFTsInfo'

const page_size = 4

const NFTsPage = () => {

  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(1)
  const [category, setCategory] = useState('Character')
  const [chain, setChain] = useState('BSC')
  
  const onChangePage = (page) => {
    setCurrentPage(page)
    navigate(`/nfts?category=${category}&page=${page}&page_size=${page_size}&chain=${chain}`)
  }

  const onChangeTab = (tab) => {
    setCurrentPage(1)
    setCategory(tab.category)
    navigate(`/nfts?category=${tab.category}&page=1&page_size=${page_size}&chain=${chain}`)
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
            <NFTsFilter
              onChangePage={onChangePage}
              category={category}
              chain={chain}
              setChain={setChain}
              page_size={page_size}
            />
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
