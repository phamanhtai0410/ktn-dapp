import vector_up from '@/assets/images/mintpage/vector_up.svg'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectItemChainNFTKeys, selectListChainNFT } from '@/reducers/chainSlice'
import { fetchListCHAINS } from '@/actions/nftActions'
import { useAppDispatch } from '@/app/hooks'

const NFTsFilter = ({ onChangeSearch, search}) => {
  const dispatch = useAppDispatch()
  // const nftTitles = [
  //   {
  //     id: 1,
  //     title: 'BNB Smart Chain',
  //     chain: 'BSC',
  //   },
  //   {
  //     id: 2,
  //     title: 'Ethereum Chain',
  //     chain: 'ETH',
  //   },
  // ]

  useEffect(() => {
    fetchChains()
  }, [])
  const fetchChains = async () => {
    await dispatch(fetchListCHAINS({}))
  }

  const listItems = useSelector(selectListChainNFT)
  const listItemsKeys = useSelector(selectItemChainNFTKeys)

  return (
    <div className="md:flex flex-col bg-mintfilter border-t-2 border-[#F9C306] w-[240px] flex-none hidden">
      <div className="flex flex-col ">
        <div className="flex flex-row justify-between px-[32px] py-[32px] text-[16px] border-b border-[#44425f]">
          <p className="font-bold text-[#F9C306]">Filters</p>
          <p className="font-medium text-[#FFFFFF]">Clear All</p>
        </div>
        <div className="flex flex-col py-[24px] px-[32px] border-b border-[#44425f]">
          <div className="flex flex-row justify-between text-[#FFFFFF] font-bold uppercase cursor-pointer">
            <p className="text-[16px]">Chain</p>
            <img src={vector_up} alt="vector up" />
          </div>
          <ul className="flex flex-col list-none pl-[12px] text-[14px] md:mt-[28px] gap-y-[15px]">
            {listItems?.map((item) => {
              return (
                <li
                  key={item.symbol}
                  className={`${ search.chain.toLowerCase() === item?.symbol?.toLowerCase()
                      ? 'text-[#FFA52C]'
                      : 'text-[#FFFFFF]'
                  }`}
                >
                  <button
                    onClick={() => {
                      onChangeSearch({
                        chain: item?.symbol
                      })
                    }}
                  >
                    {item?.name}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NFTsFilter
