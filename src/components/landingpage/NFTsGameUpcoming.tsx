import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '@/app/hooks'
import { selectNFTsUpcoming } from '@/reducers/NFTsUpcoming'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { fetchListNFTsUpcoming } from '@/actions/nftActions'
import NFTsUpcomingItem from './NFTsUpcomingItem'

const productTitles = [
  {
    id: 1,
    title: 'Upcoming in-game Nfts',
    type: 'ingame_nfts',
  },
  {
    id: 2,
    title: 'Upcoming forging nfts',
    type: 'forging_nfts',
  },
  {
    id: 3,
    title: 'Upcoming Tickets',
    type: 'tickets',
  },
]
const NFTsGameUpcoming = () => {
  let location = useLocation()
  const [upcomingType, SetUpcommingType] = useState('ingame_nfts')
  const navigate = useNavigate()
  const listItems = useSelector(selectNFTsUpcoming)
  const [data, setData] = useState()
  const [active, setActive] = useState(1)
  const [showMore, setShowMore] = useState(false)
  const dispatch = useAppDispatch()
  useEffect(() => {
    fetchCollections()
  }, [])
  const fetchCollections = async () => {
    await dispatch(fetchListNFTsUpcoming({ type: upcomingType }))
  }
  const handleClick = (item) => {
    setActive(item.id)
    SetUpcommingType(item.type)
    setShowMore(false)
  }
  return (
    <div className="flex flex-col pb-[134px] bg-[#11151B] w-full">
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
      {showMore ? (
        <div className="grid w-full px-[16px] md:px-[39px] gap-x-[34px] gap-y-[56px] md:grid-cols-4 h-auto ">
          {listItems.map((item, index) => {
            return <NFTsUpcomingItem data={item} key={index} />
          })}
        </div>
      ) : (
        <div className="grid w-full px-[16px] md:px-[39px] gap-x-[34px] gap-y-[56px] md:grid-cols-4 h-auto ">
          {listItems.slice(0, 4).map((item, index) => {
            return <NFTsUpcomingItem data={item} key={index} />
          })}
        </div>
      )}
      <div className="mt-[67px] w-full flex justify-center mb-4">
        <button
          onClick={() => setShowMore(true)}
          className="w-[169px] h-[47px] bg-[#202733] rounded-[32px] text-[16px] font-bold text-[#FFFFFF] uppercase"
        >
          Show More
        </button>
      </div>
    </div>
  )
}

export default NFTsGameUpcoming
