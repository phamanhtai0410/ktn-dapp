import * as React from 'react'
import box from '../../assets/images/box/Box.png'
import light from '../../assets/images/box/Light.png'
import { ClipLoader } from 'react-spinners'
import { useState } from 'react';

const ItemNftBox = ({ item, openId, handleOpen }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="box px-[24px] flex flex-col items-center text-[#C8A5DD]">
        <div className="mt-[24px] pb-[17px] font-poppins w-full font-semibold border-b border-[#3E0B4C]">
          <p>ID: {item.id.toNumber()}</p>
        </div>
        <div className="mt-[30px] min-h-[192px] relative">
          <img
            src={light}
            alt="cart"
            className="z-10 mix-blend-screen"
          />
          <img
            src={box}
            alt="cart"
            className={isHovering ? 'w-full absolute box__bounce-in-top object-cover object-center z-10' : 'absolute top-0 w-full object-cover object-center z-10'}
          />
        </div>
        <button
          disabled={item.is_opened}
          onClick={() => {
            handleOpen(item.id.toString())
          }}
          className={`btn-4 relative flex flex-row justify-center items-center w-2/3 mb-[32px] mx-auto mt-[46px] py-3 cursor-pointer border border-[#661DA0] space-x-4 rounded-[42px] shadow-[inset_0px_0px_16px_0.99px_rgba(102,29,160,0.75)] hover:shadow-[inset_0px_0px_32px_4.99px_rgba(102,29,160,0.95)]`}
        >
          {
            <ClipLoader
              color="#C690F1"
              size={17}
              loading={openId === item.id.toNumber()}
            />
          }
          <span className="font-jost font-medium hover:font-jost hover:font-bold text-base text-[#C690F1] ">
            {item.is_opened && openId !== item.id.toNumber()
              ? 'Opened'
              : openId === item.id.toNumber()
                ? 'Opening...'
                : 'Open Box'}
          </span>
        </button>
      </div>
    </div>
  )
}

export default ItemNftBox
