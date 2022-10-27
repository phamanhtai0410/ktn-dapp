import React from 'react'
import IcArrow from '../../assets/images/partials/arrow_bot.svg'
import IcPrev from '../../assets/images/partials/ic_prev.svg'
import IcNext from '../../assets/images/partials/ic_next.svg'
import './index.scss'

interface Props {
  index: string
  numOfPage: string
}

const Pagination = (Props) => {
  const { className, title } = Props
  return (
    <div className="flex flex-row space-x-4 items-center">
      <div className="flex flex-row items-center space-x-2 p-2 bg-[#353A4552] rounded-lg cursor-pointer">
        <img src={IcPrev} alt="staking" />
        <span className="font-poppins font-normal text-base text-[#BFBFBF]">
          Prev
        </span>
      </div>
      <div className="flex flex-row w-10 items-center justify-center space-x-2 p-2 bg-[#353A4552] rounded-lg cursor-pointer">
        <span className="font-poppins font-normal text-base text-[#FFA52C]">
          1
        </span>
      </div>
      <div className="flex flex-row w-10 items-center justify-center space-x-2 p-2 bg-[#353A4552] rounded-lg cursor-pointer">
        <span className="font-poppins font-normal text-base text-[#BFBFBF]">
          2
        </span>
      </div>
      <div className="flex flex-row w-10 items-center justify-center space-x-2 p-2 bg-[#353A4552] rounded-lg cursor-pointer">
        <span className="font-poppins font-normal text-base text-[#BFBFBF]">
          3
        </span>
      </div>
      <div className="flex flex-row w-10 items-center justify-center space-x-2 p-2 bg-[#353A4552] rounded-lg cursor-pointer">
        <span className="font-poppins font-normal text-base text-[#BFBFBF]">
          ...
        </span>
      </div>
      <div className="flex flex-row w-10 items-center justify-center space-x-2 p-2 bg-[#353A4552] rounded-lg cursor-pointer">
        <span className="font-poppins font-normal text-base text-[#BFBFBF]">
          200
        </span>
      </div>
      <div className="flex flex-row items-center space-x-2 p-2 bg-[#353A4552] rounded-lg cursor-pointer">
        <span className="font-poppins font-normal text-base text-[#BFBFBF]">
          Next
        </span>{' '}
        <img src={IcNext} alt="staking" />
      </div>
    </div>
  )
}

export default Pagination
