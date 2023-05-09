import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

import NFTsBanner from '../landingpage/NFTsBanner'
import NFTsTabs from './NFTsTabs'
import './index.scss'
import NFTsFilter from './NFTsFilter'
import NFTsList from './NFTsList'
import NFTsInfo from './NFTsInfo'
import { fetchListMintNFT, fetchListCHAINS } from '@/actions/nftActions'
import { useAppDispatch } from '@/app/hooks'
import NFTsFilterMobile from './NFTsFilterMobile'
import vector_up from '@/assets/images/mintpage/vector_up.svg'
import { selectListChainNFT } from '@/reducers/chainSlice'

const page_size = 4

const NFTsPage = () => {

  const [isOpen, setIsopen] = useState(false);
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  let location = useLocation()

  const [search, setSearch] = useState({
    page_size,
    page: 1,
    category: "Character",
    chain: 'ETHEREUM'
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
  }, [location])

  useEffect(() => {
    fetchChains()
  }, [])
  
  const fetchChains = async () => {
    await dispatch(fetchListCHAINS({}))
  }

  const listChains = useSelector(selectListChainNFT)

  return (
    <div className='w-full'>
      {/* <div className="banner-wrapper lg:flex hidden flex-col items-center z-[0] w-full overflow-hidden">
        <NFTsBanner />
      </div> */}
      <div className="banner-wrapper lg:flex flex-col items-center z-[0] w-full overflow-hidden">
        <NFTsBanner />
      </div>
      <div className="w-full bg-[#333]">
       
          <div className="bg-minttab flex w-full">
            <NFTsTabs search={search} onChangeSearch={onChangeSearch} />
            
          </div>

          <div className="md:hidden relative pt-[15px] justify-end w-full bg-[#11141b]">
              <button 
                className="md:hiddenb text-[10px] flex items-center justify-center md:w-0 w-[82px] mx-auto h-[22px] bg-[#202733] rounded-[16px] text-[#FFFFFF] font-bold uppercase"
                onClick={ToggleSidebar}
              >
                Filters
              </button>

              <div className={`sidebar py-[22px] px-[12px] ${isOpen == true ? 'active' : ''}`}>
                  <div className="sd-header text-[9px]">
                      <h4 className="mb-0 uppercase text-[#FFFFFF]">Filters</h4>
                      <h4 className="mb-0 text-[#F9C306]">Clear All</h4>
                  </div>
                  <div className="sd-body mt-[18px]">
                      <div className='flex flex-row items-center justify-between'>
                        <h4 className='text-[9px] text-[#FFFFFF] uppercase'>Select Chain</h4>
                        <img src={vector_up} alt="vector up" />
                      </div>
                      <ul className='mt-[15pxv]'>
                        {
                          listChains?.map((item) => (
                            <li 
                              key={item.symbol}
                              className={`text-[10px] ${ search.chain.toLowerCase() === item?.symbol?.toLowerCase()
                                ? 'text-[#FFA52C]'
                                : 'text-[#FFFFFF]'
                              }`}
                              onClick={() => {
                                onChangeSearch({
                                  chain: item?.symbol
                                })
                                ToggleSidebar()
                              }}
                            >
                              {item?.name}
                            </li>
                          ))
                        }
                      </ul>
                  </div>
              </div>
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
          <div className='bg-minttab'>
            <div className="w-full h-auto flex mx-auto max-w-[1900px]">
              <NFTsInfo />
            </div>
          </div>
          
       
      </div>
    </div>
  )
}

export default NFTsPage
// .bg-minttab {
//   background: radial-gradient(#000000, #060509);