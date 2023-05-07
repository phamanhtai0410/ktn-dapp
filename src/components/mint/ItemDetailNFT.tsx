import circle1 from '../../assets/images/mint/circle1.png'
import circle2 from '../../assets/images/mint/circle2.png'
import char from '../../assets/images/mint/char.png'
import arrow_left from '../../assets/images/mint/arrow_left.png'
import arrow_right from '../../assets/images/mint/arrow_right.png'
import { useEffect, useState } from 'react'
import {
  selectCartItems,
  selectMaxMintInOrder,
  setItemNFTs,
} from '@/reducers/cartSlice'
import { useSelector } from 'react-redux'
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

    { listItems && listItems[0]?.total_minted < listItems[0]?.total_supply &&
      <div className="flex justify-around items-center px-[24px] h-[44px] text-[#FFFFFF] rounded-[5px] border border-[#F9C306]">
        <div className="w-7 md:w-14 flex justify-center cursor-pointer justify-items-center text-4xl" onClick={() => onChangeInput('minus')} >-</div>
        <input
            className="w-8 md:w-16 leading-4 font-bold text-[#F9C306] bg-transparent rounded-[5px] focus:outline-none text-center"
            value={inputValue}
            onChange={(e) => onChangeInput(e.target.value)}
          />
        <div className="w-7 md:w-14 flex justify-center cursor-pointer justify-items-center text-2xl" onClick={() => onChangeInput('plus')} >+</div>
      </div>
    }
    </>
  )
}

export default ItemDetailNFT
