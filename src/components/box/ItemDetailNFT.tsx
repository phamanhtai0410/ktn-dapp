import box from '../../assets/images/box/Box.png'
import Light from '../../assets/images/box/Light.png'

import arrow_left from '../../assets/images/mint/arrow_left.png'
import arrow_right from '../../assets/images/mint/arrow_right.png'
import { useEffect, useState } from 'react'
import {
  selectCartItems,
  selectMaxMintInOrder,
  setItemNFTs,
} from '@/reducers/cartSlice'
import { useSelector } from 'react-redux'
import FrmPromotionCodeBox from '@/components/box/FrmPromotionCode'
import SummaryItemsCart from './SummaryItemsCart'
import { useAppDispatch } from '@/app/hooks'

const ItemDetailNFT = () => {
  const listItems = useSelector(selectCartItems)
  const maxMint = useSelector(selectMaxMintInOrder)
  const dispatch = useAppDispatch()

  const [inputValue, setInputValue] = useState(1)
  const minMint = 1

  const onChangeInput = (value) => {
    if (!listItems[0]) {
      return
    }

    let listNews = []
    if (value === 'plus' && inputValue < maxMint) {
      setInputValue(Number(inputValue) + 1)
      // SET cart items
      listNews = [...listItems, ...[listItems[0]]]
      dispatch(setItemNFTs(listNews))
    } else if (value === 'minus' && inputValue >= minMint) {
      if (inputValue > 1) {
        setInputValue(Number(inputValue) - 1)
        // SET cart items
        dispatch(setItemNFTs(listNews.concat(listItems).slice(1)))
      }
    } else {
      let regex = /^[0-9\b]+$/
      if (value === '' || regex.test(value)) {
        if (((minMint) => value) && value <= maxMint && value > 0) {
          setInputValue(value)
          for (let index = 0; index < value; index++) {
            listNews.push(listItems[0])
          }
          dispatch(setItemNFTs(listNews))
        }
      }
    }
  }

  return (
    <>


      <FrmPromotionCodeBox />

      <div className="flex flex-row w-full mt-6 items-center justify-between">
        <span className="font-jost font-semibold text-lg text-white">
          Min : {minMint} NFTs
        </span>
        <span className="font-jost font-semibold text-lg text-white">
          Max : {maxMint} NFTs
        </span>
      </div>

      <div className="flex flex-row mt-6 px-5 items-center justify-center border border-[#fca50068] rounded-[42px] shadow-[inset_0_0_7px_rgba(251,163,1,0.23)]">
        <img
          src={arrow_left}
          alt="cart"
          className="cursor-pointer hover:scale-125"
          onClick={() => onChangeInput('minus')}
        />
        <input
          className="sm:w-[388px] w-[230px] mx-8 bg-[#3f2d28] leading-4 font-jost font-bold text-2xl text-[#fca500b3] rounded-[5px] my-3 py-2 focus:outline-none text-center px-4 shadow-[inset_1.5px_2.598px_5px_0px_rgba(0,0,0,0.1)] bg-opacity-60 brightness-110"
          value={inputValue}
          onChange={(e) => onChangeInput(e.target.value)}
        />
        <img
          src={arrow_right}
          alt="cart"
          className="cursor-pointer hover:scale-125"
          onClick={() => onChangeInput('plus')}
        />
      </div>

      <SummaryItemsCart />
    </>
  )
}

export default ItemDetailNFT
