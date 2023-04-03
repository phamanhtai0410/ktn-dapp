import vector_up from '@/assets/images/mintpage/vector_up.svg'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const NFTsFilter = ({ onChangePage, category }) => {
  const nftTitles = [
    {
      id: 1,
      title: 'BNB Smart Chain',
      link: `?category=${category}&page=1&page_size=4&chain=BSC`,
      link1: `?category=${category}&page=2&page_size=4&chain=BSC`,
    },
    {
      id: 2,
      title: 'Ethereum Chain',
      link: `?category=${category}&page=1&page_size=4&chain=ETH`,
    },
  ]
  let location = useLocation()
  const domain = location?.search
  const navigate = useNavigate()
  const handleLink = (item) => {
    navigate(`${item.link}`), onChangePage(1)
  }
  return (
    <div className="md:flex flex-col bg-mintfilter border-t-2 border-[#F9C306] md:w-[300px] hidden">
      <div className="flex flex-col ">
        <div className="flex flex-row justify-between px-[32px] py-[32px] text-[16px] border-b border-[#44425f]">
          <p className="font-bold text-[#F9C306]">Filters</p>
          <p className="font-medium text-[#FFFFFF]">Clear All</p>
        </div>
        <div className="flex flex-col py-[24px] px-[32px] border-b border-[#44425f]">
          <div className="flex flex-row justify-between text-[#FFFFFF] font-bold uppercase">
            <p className="text-[16px]">Chain</p>
            <img src={vector_up} alt="vector up" />
          </div>
          <ul className="flex flex-col list-none pl-[12px] text-[14px] md:mt-[28px]">
            {nftTitles.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`${
                    item.link === domain || item.link1 === domain
                      ? 'text-[#FFA52C]'
                      : 'text-[#FFFFFF]'
                  } last:mt-[15px]`}
                >
                  <button
                    onClick={() => {
                      handleLink(item)
                    }}
                  >
                    {item.title}
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
