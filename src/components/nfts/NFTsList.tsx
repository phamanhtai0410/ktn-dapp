import bnb_icon from '@/assets/images/mintpage/bnb_icon.svg'
import cart from '@/assets/images/mintpage/cart.svg'
import characters_icon from '@/assets/images/mintpage/characters_icon.svg'
import { useNavigate } from 'react-router-dom'
import Pagination from '../pagination/Pagination'

import { selectListMintNFT, selectLoadingNFTS, selectNumOfPage } from '@/reducers/mintSlice'
import { useSelector, useDispatch } from 'react-redux'
import NFTsTime from './NFTsTime'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { getLinkRefCode } from '@/_helpers/utils/lib'
import { selectItemChainNFTKeys } from '@/reducers/chainSlice'

const NFTsList = ({ search, onChangeSearch }) => {
  
  const navigate = useNavigate()

  const [isPending, setIsPending] = useState(false);

  const listItems = useSelector(selectListMintNFT)
  const num_of_page = useSelector(selectNumOfPage)
  
  const loading = useSelector(selectLoadingNFTS)

  const listItemsKeys = useSelector(selectItemChainNFTKeys)

  useEffect(() => {
    if(isPending !== loading){
      setIsPending(loading)
    }
    
  }, [loading])

  if(isPending){
    return (
      <div className='flex justify-center items-center w-full min-h-[450px]'>
        <div className="loader loader3"></div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col pb-[63px] md:pb-[292px] bg-[#11141b] ">
      <div className="grid w-full px-[16px] md:px-[39px] py-[50px] gap-x-[34px] gap-y-[56px] grid-cols-2 md:grid-cols-4 h-auto ">
        { !isPending && listItems.map((item, index) => (
          
          <Link to={`/mint/${item.address}/${item.nft_id}`} 
            className="mint_item cursor-pointer mb-[32px] md:mb-0" 
            key={index}
          >
          
            <div className="mint_item_img w-auto rounded-[10px] relative bg-[#0D0F14]">
              <div className="h-[181px] md:h-[290px] w-full min-w-[168px] md:min-w-[268px]">
                <img
                  src={item?.image}
                  className="h-full w-full rounded-[10px] object-contain"
                />
              </div>
              <div className="absolute top-[12px] left-[12px] flex flex-row items-center">
                <img src={listItemsKeys[item.chain]?.image_url} alt="btn icon" className="h-[25px] w-[30px]" />
                <p className={`ml-[4px] text-[12px] text-[#FFFFFF] font-bold`}>
                  {item?.chain}
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
                <NFTsTime
                  timeStart={item.whitelist.start_time}
                  timeEnd={item.whitelist.end_time}
                />
                <img src={listItemsKeys[item.chain]?.image_url} alt="btn icon" className="h-[16px] md:h-[25px] w-[19px] md:w-[30px]" />
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
                <h3 className="font-extrabold text-[#FFFFFF] text-[12px] md:text-[20px]">
                  {item?.name}
                  {/* <span className='text-[#F9C306]'>Inu</span> */}
                </h3>
              </div>
              <div className="flex flex-row justify-between mt-[10px] md:mt-[16px]">
                <div className="text-[#FFFFFF]">
                  <p className="text-[8px] md:text-[12px]">Price:</p>
                  <p className="text-[8px] md:text-[16px] text-[#F9C306]">
                    <span className="font-bold">{item?.price} </span> <span>{item?.pay_token_symbol}</span>
                  </p>
                  {/* <p className="text-[12px]">(2.2 BNB)</p> */}
                </div>
                <div className="text-[#FFFFFF] text-[8px] md:text-[12px] min-w-[77px] text-left">
                  <p>Type:</p>
                  <p className="uppercase">Character</p>
                </div>
              </div>
              <div className="flex flex-row justify-between mt-[10px] md:mt-[18px]">
                <div className="text-[#FFFFFF]">
                  <p className="text-[8px] md:text-[12px]">Sold/total:</p>
                  <p className="text-[9px] md:text-[15px] md:mt-[7px]">
                    <span className="text-[#F9C306]">{item?.total_minted}</span>
                    /<span className="text-[#F9C306]">{item?.total_supply}</span>
                  </p>
                </div>
                <div className="text-[#FFFFFF] text-[8px] md:text-[12px] mt-[2px] min-w-[77px] text-left">
                  <p>Rarity:</p>
                  <p className="uppercase mt-[6px] font-bold text-[12px]">
                    {item?.rarity}
                  </p>
                </div>
              </div>
            </div>
          </Link>
          

        ))}
      </div>
      <div className="flex justify-center">
        {num_of_page > 1 && (
          <Pagination
            className="pagination-bar"
            currentPage={Number(search.page)}
            totalCount={num_of_page}
            pageSize={search.page_size}
            onPageChange={(currentPage) => {
              onChangeSearch({page:currentPage})
            }}
          />
        )}
      </div>
    </div>
  )
}

export default NFTsList
