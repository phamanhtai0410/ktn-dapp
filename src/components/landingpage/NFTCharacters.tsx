import { useSelector, useDispatch } from 'react-redux'
import { fetchListCategoryNFTs } from '@/actions/nftActions'
import { selectCategoryNFTs } from '@/reducers/categoryNFTs'
import { useAppDispatch } from '@/app/hooks'
import { useEffect, useState } from 'react'
import character from '../../assets/images/landingpage/character.png'
import { useNavigate } from 'react-router-dom'

function NFTCharacter() {
  const listItems = useSelector(selectCategoryNFTs)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    fetchCollections()
  }, [])
  const fetchCollections = async () => {
    await dispatch(fetchListCategoryNFTs({}))
  }
  const handleClick = (item) => {
    if (item.code === 'weapon') {
      navigate('/nfts?category=weapon&page=1&page_size=8&chain=ETHEREUM')
    } else if (item.code === 'pack') {
      navigate(`/nfts?category=pack&page=1&page_size=8&chain=ETHEREUM`)
    } else {
      navigate(`/nfts?category=character&page=1&page_size=8&chain=ETHEREUM`)
    }
  }
  return (
    <div className='relative bg-[#11151B]'>

      <div className="w-full max-w-[1900px] mx-auto pb-[71px] relative z-0">
        <div className="chooseNFTs md:h-[66px] flex md:flex-row flex-col items-center justify-center text-center text-[24px] md:text-[32px] text-[#FFFFFF]">
          <span className="text-[#F9C306] font-bold">CHOOSE YOURS NFTs</span>
          <span className="ml-[10px] uppercase">on katana inu game</span>
        </div>
        <div className='bgGradient h-[290px] w-full absolute top-0 -z-[1]'></div>
        <div className="w-full gap-x-[34px] px-[30px] justify-between grid md:grid-cols-3 mt-[26px]">
          {listItems.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full lg:max-w-[485px] flex-col justify-center items-center text-center text-[#FFFFFF]"
              >
                <div
                  className="lg:w-[485px] h-[419px] cursor-pointer"
                  onClick={() => {
                    handleClick(item)
                  }}
                >
                  <img src={character} alt="choose character" />
                </div>
                <div className="mt-[21px] text-[32px] font-bold text-[#F9C306] uppercase">
                  {item.name}
                </div>
                <div className="w-full h-[1px] mt-[14px] bgline"></div>
                <div className="mt-[20px] flex justify-between w-full max-w-[397px] mx-auto px-[62px]">
                  <div>
                    <div className="text-[16px] font-medium">Min Price:</div>
                    <div className="font-normal text-[24px] text-[#F9C306] mt-1 uppercase">
                      {item.min_price} USD
                    </div>
                  </div>
                  <div>
                    <div className="text-[16px] font-medium">Total Supply</div>
                    <div className="mt-1 text-[24px] font-bold">
                      {item.total_supply}
                    </div>
                  </div>
                </div>
                <div className="mt-[23px]">
                  <button
                    onClick={() => {
                      handleClick(item)
                    }}
                    className="w-[202px] h-[33px] bg-[#F9C306] uppercase font-extrabold text-[16px] text-[#11151B] rounded-[5px]"
                  >
                    Go to {item.name}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default NFTCharacter
