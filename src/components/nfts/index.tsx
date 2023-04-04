import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

import NFTsBanner from './NFTsBanner'
import NFTsTabs from './NFTsTabs'
import './index.scss'
import NFTsFilter from './NFTsFilter'
import NFTsList from './NFTsList'
import NFTsInfo from './NFTsInfo'
import { fetchListMintNFT } from '@/actions/nftActions'
import { useAppDispatch } from '@/app/hooks'

const page_size = 4

const NFTsPage = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  let location = useLocation()

  const [search, setSearch] = useState({
    page_size,
    page: 1,
    category: "Character",
    chain: 'BSC'
  })
  
  const onChangeSearch = (query) => {
    const querySearch = {
      ...search,
      ...query
    }
    const linkQuery = queryString.stringify(querySearch)
    navigate(`/nfts?${linkQuery}`)
  }

  useEffect(() => {
    const parsed = queryString.parse(location.search)
    const querySearch = {
      ...search,
      ...parsed,
    }
    setSearch(querySearch)
    dispatch(
      fetchListMintNFT(querySearch),
    )
  }, [location.key])

  return (
    <div className="min-h-screen">
      <div className="banner-wrapper lg:flex hidden flex-col items-center z-[0] w-full">
        <NFTsBanner />
      </div>

      <div className="w-full bg-[#333]">
       
          <div className="bg-minttab flex w-full ">
            <NFTsTabs search={search} onChangeSearch={onChangeSearch} />
          </div>

          <div className="bg-minttab">
            <div className="w-full h-auto flex mx-auto max-w-[1900px]">
              <NFTsFilter
                search={search}
                onChangeSearch={onChangeSearch}
              />
              <NFTsList
                search={search}
                onChangeSearch={onChangeSearch}
              />
            </div>
          </div>

          <div className="flex w-full ">
            <NFTsInfo />
          </div>
       
      </div>
    </div>
  )
}

export default NFTsPage
