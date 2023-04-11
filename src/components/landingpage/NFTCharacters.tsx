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
      navigate('/nfts?category=Weapon&page=1&page_size=4&chain=BSC')
    } else if (item.code === 'pack') {
      navigate(`/nfts?category=Pack&page=1&page_size=4&chain=BSC`)
    } else {
      navigate(`/nfts?category=Character&page=1&page_size=4&chain=BSC`)
    }
  }
  return (
    <div className=' bg-[#11151B]'>

      <div className="w-full max-w-[1900px] mx-auto pb-[71px]">
        <div className="h-[66px] flex items-center justify-center uppercase text-center text-[32px] text-[#FFFFFF] bg-[rgba(16,17,36,0.1)] border-y-[3px] border-solid border-slate-900">
          <span className="text-[#F9C306] font-bold">CHOOSE your NFTs</span>
          <span className="ml-[10px]">on katana inu game</span>
        </div>
        <div className="w-full gap-x-[34px] px-[30px] justify-between grid md:grid-cols-3">
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
