import circle1 from '../../assets/images/mint/circle1.png'
import circle2 from '../../assets/images/mint/circle2.png'
import char from '../../assets/images/mint/char.png'
import arrow_left from '../../assets/images/mint/arrow_left.png'
import arrow_right from '../../assets/images/mint/arrow_right.png'
import { useState } from 'react'
import { selectCartItems } from '@/reducers/cartSlice'
import { useSelector } from 'react-redux'

const ItemDetailNFT = () => {

  const listItems = useSelector(selectCartItems);

  const [inputValue, setInputValue] = useState(1)
  
  const onChangeInput = (value) => {
    if (value === 'plus') {
      setInputValue(Number(inputValue) + 1)
    } else if (value === 'minus') {
      if (inputValue > 1) {
        setInputValue(Number(inputValue) - 1)
      }
    } else {
      let regex = /^[0-9\b]+$/
      if (value === '' || regex.test(value)) {
        setInputValue(value)
      }
    }
  }

  return (
    <>
         <div className="relative xl:mt-[72px] mt-12 w-[363px] h-[363px] overflow-visible">
            <img
              src={circle1}
              alt="cart"
              className="mint__circle-move-reverse absolute top-[-2px] p-[1px] w-full mix-blend-screen rounded-full"
            />
            <img
              src={circle2}
              alt="cart"
              className="mint__circle-move absolute top-0 left-0 w-full mix-blend-hard-light rounded-full"
            />
            <img
              src={char}
              alt="cart"
              className="mint__bounce-in-top animate-delay-1200 absolute w-[451px] h-[369px]"
            />
            <div className="absolute opacity-[0.3] shadow-[1px_1px_100px_#fff] w-full h-full rounded-full"></div>
          </div>
          <div className="flex flex-row w-full mt-14 items-center justify-between">
            <span className="font-jost font-semibold text-lg text-white">
              Balance : 0 NFTs
            </span>
            <span className="font-jost font-semibold text-lg text-white">
              Max : 50 NFTs
            </span>
          </div>
          <div className="flex flex-row mt-6 px-5 items-center justify-center border border-[#82510a] rounded-[42px] shadow-[inset_0_0_7px_rgba(251,163,1,0.23)]">
            <img
              src={arrow_left}
              alt="cart"
              className="cursor-pointer hover:scale-125"
              onClick={() => onChangeInput('minus')}
            />
            <input
              className="sm:w-[388px] w-[230px] mx-8 bg-[#3f2d28] leading-4 font-jost font-bold text-2xl text-[#fca500] rounded-[5px] my-3 py-2 focus:outline-none text-center px-4 shadow-[inset_1.5px_2.598px_5px_0px_rgba(0,0,0,0.1)] bg-opacity-60 brightness-110"
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
          <span className="mt-6 font-jost font-semibold text-lg text-white text-center">
            Cost : {listItems && listItems.length>0 ? listItems[0].price :0} USDT
          </span>
    </>
  )
}

export default ItemDetailNFT;
