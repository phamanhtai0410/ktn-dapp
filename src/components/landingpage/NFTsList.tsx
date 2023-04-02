import { useCallback, useEffect, useMemo, useState } from 'react'
import bnb_icon from '@/assets/images/mintpage/bnb_icon.svg'
import cart from '@/assets/images/mintpage/cart.svg'
import characters_icon from '@/assets/images/mintpage/characters_icon.svg'
import { useNavigate } from 'react-router-dom'

import { fetchListMintNFT } from '@/actions/nftActions'
import { useAppDispatch } from '@/app/hooks'
import { selectListMintNFT, selectNumOfPage } from '@/reducers/mintSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

const productTitles = [
  {
    id: 1,
    title: 'Current Live',
    state: 'current_live',
  },
  {
    id: 2,
    title: 'Last Sold Out',
    state: 'last_sold_out',
  },
]

const NFTsList = () => {
  let location = useLocation()
  const navigate = useNavigate()
  const page_size = 4
  const dispatch = useAppDispatch()
  const listItems = useSelector(selectListMintNFT)
  const [state, setState] = useState('current_live')
  const [active, setActive] = useState(1)
  useEffect(() => {
    const parsed = queryString.parse(location.search)
    dispatch(
      fetchListMintNFT({
        ...{
          state: state,
          page: 1,
          page_size: page_size,
        },
        ...parsed,
      }),
    )
  }, [location.key])
  const handleClick = (item) => {
    setActive(item.id)
    setState(item.state)
  }

  return (
    <div className="flex flex-col bg-[#11151B] w-full py-[98px]">
      <div>
        <div className="font-bold text-[32px] flex ">
          {productTitles.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => handleClick(item)}
                className={`h-[55px] px-[34px] first:border-r-[1px] first:border-solid first:border-[#232428] flex items-center uppercase ${
                  active === item.id ? 'text-[#F9C306]' : 'text-[#FFFFFF]'
                }`}
              >
                {item.title}
              </button>
            )
          })}
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#232428] my-[27px]"></div>
      <div className="grid w-full px-[16px] md:px-[39px] gap-x-[34px] gap-y-[56px] md:grid-cols-4 h-auto ">
        {listItems.map((item, index) => (
          <div
            key={index}
            className="mint_item cursor-pointer mb-[32px] md:mb-0"
            onClick={() => {
              navigate(`/mint/${item.address}/${item.nft_id}`)
            }}
          >
            <div className="mint_item_img w-auto rounded-[10px] relative bg-[#0D0F14]">
              <div className="h-[290px] w-full min-w-[268px]">
                <img
                  src={item?.image}
                  className="h-full w-full rounded-[10px] object-contain"
                />
              </div>
              <div className="absolute top-[12px] left-[12px] flex flex-row items-center">
                <img src={bnb_icon} alt="btn icon" />
                <p className={`ml-[4px] text-[12px] text-[#FFFFFF] font-bold`}>
                  BNB Chain
                </p>
              </div>
              <div className="mint_cart hidden flex-row absolute bg-[#F9C306] w-full max-w-[143px] h-[24px] rounded-[5px] items-center justify-center bottom-[27px] left-[50%] translate-x-[-50%]">
                <p className="text-[#0B0B13] uppercase text-[15px] font-extrabold mr-1">
                  Mint Now
                </p>
                <img src={cart} alt="cart icon" />
              </div>
            </div>
            <div className="px-[12px]">
              <div className="flex flex-row items-center justify-between text-[12px] text-[#A4A4A4] md:mt-[12px] text-left">
                <p className="font-medium text-[12px] text-[#A4A4A4]">
                  21.10.2021 - starting at 6:00 p.m
                </p>
                <img src={bnb_icon} alt="btn icon" />
              </div>
              <div className="flex flex-row items-start mt-3">
                <div className="w-[25px] h-full pt-[6px] mr-[4px]">
                  <img
                    src={characters_icon}
                    alt="icon"
                    width={17}
                    height={14}
                  />
                </div>
                <h3 className="font-extrabold text-[#FFFFFF] text-[20px]">
                  {item?.name}
                  {/* <span className='text-[#F9C306]'>Inu</span> */}
                </h3>
              </div>
              <div className="flex flex-row justify-between mt-[16px]">
                <div className="text-[#FFFFFF]">
                  <p className="text-[12px]">Price:</p>
                  <p className="text-[16px] text-[#F9C306]">
                    <span className="font-bold">{item?.price} </span>USD
                  </p>
                  <p className="text-[12px]">(2.2 BNB)</p>
                </div>
                <div className="text-[#FFFFFF] text-[12px] min-w-[77px] text-left">
                  <p>Type:</p>
                  <p className="uppercase">Character</p>
                </div>
              </div>
              <div className="flex flex-row justify-between mt-[18px]">
                <div className="text-[#FFFFFF]">
                  <p className="text-[12px]">Sold/total:</p>
                  <p className="text-[15px] md:mt-[7px]">
                    <span className="text-[#F9C306]">{item?.total_supply}</span>
                    /10.000
                  </p>
                </div>
                <div className="text-[#FFFFFF] text-[12px] mt-[2px] min-w-[77px] text-left">
                  <p>Rarity:</p>
                  <p className="uppercase mt-[6px] font-bold text-[12px]">
                    {item?.rarity}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[67px] w-full flex justify-center">
        <button className="w-[169px] h-[47px] bg-[#202733] rounded-[32px] text-[16px] font-bold text-[#FFFFFF] uppercase">
          Show More
        </button>
      </div>
    </div>
  )
}

export default NFTsList
