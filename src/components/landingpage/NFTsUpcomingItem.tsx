import { useNavigate } from 'react-router-dom'
import bnb_icon from '@/assets/images/mintpage/bnb_icon.svg'
import cart from '@/assets/images/mintpage/cart.svg'
import characters_icon from '@/assets/images/mintpage/characters_icon.svg'
import NFTsTime from '../nfts/NFTsTime'
import { NavLink } from "react-router-dom";
import { selectItemChainNFTKeys } from '@/reducers/chainSlice'
import { useSelector, useDispatch } from 'react-redux'

const NFTsUpcomingItem = ({ data }) => {
  const navigate = useNavigate()

  const listItemsKeys = useSelector(selectItemChainNFTKeys)
  return (
    // <div
    //   className="mint_item cursor-pointer mb-[32px] md:mb-0"
    //   onClick={() => {
    //     navigate(`/mint/${data.address}/${data.nft_id}`)
    //   }}
    // >
      <NavLink 
        to={`/mint/${data.address}/${data.nft_id}`} 
        className="mint_item cursor-pointer mb-[32px] md:mb-0"
      >
      
      <div className="mint_item_img w-auto rounded-[10px] relative bg-[#0D0F14]">
        <div className="h-[181px] md:h-[290px] w-full min-w-[167px] md:min-w-[268px]">
          <img
            src={data?.image}
            className="h-full w-full rounded-[10px] object-contain"
          />
        </div>
        <div className="absolute top-[12px] left-[12px] flex flex-row items-center">
        <img src={listItemsKeys[data.chain]?.image_url} alt="btn icon" className="h-[25px] w-[30px]" />
          <p className={`ml-[4px] text-[12px] text-[#FFFFFF] font-bold`}>
            {data.chain}
          </p>
        </div>
        <div className="mint_cart hidden flex-row absolute bg-[#F9C306] w-full max-w-[143px] h-[24px] rounded-[5px] items-center justify-center bottom-[27px] left-[50%] translate-x-[-50%]">
          <p className="text-[#0B0B13] uppercase text-[15px] font-extrabold mr-1 inline-block">
            Mint Now
          </p>
          <img src={cart} alt="cart icon" />
        </div>
      </div>
      <div className="px-[12px]">
        <div className="flex flex-row items-center justify-between text-[12px] text-[#A4A4A4] md:mt-[12px] text-left">
          <p className="font-medium text-[12px] text-[#A4A4A4]">
            <NFTsTime
              timeStart={data.whitelist.start_time}
              timeEnd={data.whitelist.end_time}
            />
          </p>
          <img src={listItemsKeys[data.chain]?.image_url} alt="btn icon" className="h-[15px] md:h-[25px] w-[18px] md:w-[30px]" />
        </div>
        <div className="flex flex-row items-start mt-3">
          <div className="w-[25px] h-full pt-[6px] mr-[4px]">
            <img src={characters_icon} alt="icon" width={17} height={14} />
          </div>
          <h3 className="font-extrabold text-[#FFFFFF] text-[12px] md:text-[20px]">
            {data?.name}
          </h3>
        </div>
        <div className="flex flex-row justify-between mt-[10px] md:mt-[16px]">
          <div className="text-[#FFFFFF]">
            <p className="text-[8px] md:text-[12px]">Price:</p>
            <p className="text-[8px] md:text-[16px] text-[#F9C306]">
              <span className="font-bold">{data?.price} </span>USD
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
              <span className="text-[#F9C306]">{data?.total_minted}</span>/
              {data?.total_supply}
            </p>
          </div>
          <div className="text-[#FFFFFF] text-[8px] md:text-[12px] mt-[2px] min-w-[77px] text-left">
            <p>Rarity:</p>
            <p className="uppercase mt-[6px] font-bold text-[12px]">
              {data?.rarity}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default NFTsUpcomingItem
