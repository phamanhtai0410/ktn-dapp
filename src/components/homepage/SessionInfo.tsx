import React from 'react'

import buy_option_1 from "../../assets/images/homepage/buy_option_1.png"
import buy_option_2 from "../../assets/images/homepage/buy_option_2.png"

import gate from "../../assets/images/homepage/gate.png"
import pancake from "../../assets/images/homepage/pancake.png"


const SessionInfo = () => {

    return (
        <div className="container mx-auto mt-[12vw] flex flex-col items-center w-full">
            <div className="text-center uppercase">
                <p className="text-[2.5vw] text-white font-blome">buy katana inu NFTS TOKENS</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-10">
                <div className="w-full relative flex justify-center items-start">
                    <img className="w-full" src={buy_option_1} />
                    <div className="absolute left-10 lg:left-20 top-10 text-white w-[80%]">
                        <p className="text-base lg:text-2xl font-jost_medium">ARENA GENESIS NFTS</p>
                        <p className="text-gray text-sm lg:text-base  w-[80%] lg:w-[52%] font-jost mt-2">Earn automatic staking rewards before the Arena launch. Earn passive royalties from every battle transation after the Arena launch.</p>
                    </div>
                    <div className="absolute left-10 lg:left-20 bottom-20 lg:bottom-1/3 text-white font-jost_medium">
                        <p className="text-sm lg:text-xl font-medium">$300/NFT</p>
                        <p className="text-base lg:text-3xl font-medium slash-title">6th Only 560 left</p>
                    </div>
                    <div className="absolute bottom-4 right-[15%] lg:right-[24%] text-white font-jost_medium">
                        <div className="addbtn px-4 lg:px-6 py-2 rounded-[32px] text-base font-bold cursor-pointer font-jost_medium">
                            LEARN MORE
                        </div>
                    </div>
                </div>
                <div className="w-full relative flex justify-end items-start">
                    <img className="w-full" src={buy_option_2} />
                    <div className="absolute text-white w-[60%] left-42 top-10">
                        <p className="text-base lg:text-2xl font-jost_medium">
                            UP TO
                            <a className="slash-title"> 114% </a>
                            APY STAKING REWARDS
                        </p>
                        <p className="text-gray text-sm lg:text-base w-[80%] font-jost mt-2">Secure your $WZRD tokens now and stake with us. Staking pools are strictly limited, so don't miss out.</p>
                        <div className="swap-page w-fit flex gap-2 lg:gap-4 mt-2 lg:mt-8 p-2 lg:p-4">
                            <img className="w-16 cursor-pointer" src={gate} />
                            <img className="w-24 cursor-pointer" src={pancake} />
                        </div>
                    </div>
                    <div className="absolute bottom-7 lg:bottom-10 right-12 lg:right-24 text-white w-36">
                        <p className="text-sm lg:text-base float-right font-medium slash-title font-jost_medium">Staking is over</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SessionInfo