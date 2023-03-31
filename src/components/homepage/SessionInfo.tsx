import React from 'react'

import buy_option_1 from '../../assets/images/homepage/buy_option_1.png'
import buy_option_2 from '../../assets/images/homepage/buy_option_2.png'

import gate from '../../assets/images/homepage/gate.png'
import pancake from '../../assets/images/homepage/pancake.png'

const SessionInfo = () => {
  return (
    <div className="marker:container mt-[18vh] flex flex-col items-center w-full mx-auto px-4">
      <div className="max-w-[1900px] mx-auto">
        <div className="text-center uppercase">
          <p className="text-[2.5vw] text-white font-blome">
            buy katana inu NFTS TOKENS
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-10">
          <div className="right-animation w-full relative flex justify-center items-start">
            <img className="w-full" src={buy_option_1} />
            <div className="infoblockwraper__1 absolute left-12 lg:left-10 xl:left-20 top-10 text-white w-[80%]">
              <p className="infoblockwraper__1__title text-3xl lg:text-base xl:text-2xl font-jost_medium">
                ARENA GENESIS NFTS
              </p>
              <p className="infoblockwraper__1__text text-gray text-lg lg:text-sm xl:text-base  w-[80%] lg:w-[52%] font-jost mt-2">
                Earn automatic staking rewards before the Arena launch. Earn
                passive royalties from every battle transation after the Arena
                launch.
              </p>
            </div>
            <div className="infoblockprice__1_price absolute left-12 lg:left-10 xl:left-20 bottom-28 sm:bottom-40 lg:bottom-20 xl:bottom-1/3 text-white font-jost_medium">
              <p className="infoblockprice__1_price text-xl lg:text-sm xl:text-xl font-medium">
                $ 300/NFT
              </p>
              <p className="infoblockprice__1_dis text-3xl lg:text-base xl:text-3xl font-medium slash-title">
                6th Only 560 left
              </p>
            </div>
            <div className="infoblockprice__1_btn absolute bottom-5 right-[15%] xl:right-[24%] text-white font-jost_medium">
              <a
                href="https://www.youtube.com/c/katanainu"
                target="_blank"
                className="learnmore px-4 xl:px-6 py-2 rounded-[32px] text-base font-medium cursor-pointer font-jost_medium"
              >
                LEARN MORE
              </a>
            </div>
          </div>
          <div className="left-animation w-full relative flex justify-end items-start">
            <img className="w-full" src={buy_option_2} />
            <div className="infoblockwraper__2 absolute text-white w-[60%] left-42 top-10">
              <p className="infoblockwraper__2__title text-3xl lg:text-base xl:text-2xl font-jost_medium">
                UP TO
                <a className="slash-title"> 114% </a>
                APY STAKING REWARDS
              </p>
              <p className="infoblockwraper__2__text text-gray text-lg lg:text-sm xl:text-base w-[80%] font-jost mt-2">
                Secure your $WZRD tokens now and stake with us. Staking pools
                are strictly limited, so don't miss out.
              </p>
              <div className="swap-page w-fit flex gap-2 md:gap-8 lg:gap-4 mt-2 lg:mt-8 p-2 lg:p-4">
                <img
                  className="swap-page-1 w-16 lg:w-10 xl:w-16 cursor-pointer"
                  src={gate}
                />
                <img
                  className="swap-page-2 w-24 lg:w-16 xl:w-24 cursor-pointer"
                  src={pancake}
                />
              </div>
            </div>
            <div className="infoblockwraper__2__staking absolute bottom-12 lg:bottom-7 xl:bottom-12 right-20 xl:right-24 text-white w-36">
              <p className="text-base lg:text-sm xl:text-base float-right font-medium slash-title font-jost_medium">
                Staking is over
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SessionInfo
