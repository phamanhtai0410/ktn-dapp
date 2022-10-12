import React from 'react'
import './index.scss'
import Homepage_carousel from "./homepage_carousel"
import head_homepage from "../../assets/images/homepage/head_homepage.jpg"

import Nft_1 from "../../assets/images/homepage/Nft_1.png"
import Nft_2 from "../../assets/images/homepage/Nft_2.png"
import Nft_3 from "../../assets/images/homepage/Nft_3.png"
import Nft_4 from "../../assets/images/homepage/Nft_4.png"

import buy_option_1 from "../../assets/images/homepage/buy_option_1.png"
import buy_option_2 from "../../assets/images/homepage/buy_option_2.png"

import gate from "../../assets/images/homepage/gate.png"
import pancake from "../../assets/images/homepage/pancake.png"

import bundle_1 from "../../assets/images/homepage/bundle_1.png"
import bundle_2 from "../../assets/images/homepage/bundle_2.png"
import bundle_3 from "../../assets/images/homepage/bundle_3.png"
import bundle_4 from "../../assets/images/homepage/bundle_4.png"

const Homepage = () => {
    const listNft = [Nft_1, Nft_2, Nft_3, Nft_4]
    const listBundle = [
        { img: bundle_1, text: "A Body team can be highly", title: "BODY", subtext: " effective against Soul Wizards.", rare: "Rare", price: "$ 231.00" },
        { img: bundle_2, text: "A Body team can be highly", title: "HEALING", subtext: " effective against Soul Wizards.", rare: "Rare", price: "$ 2321.00" },
        { img: bundle_3, text: "A Body team can be highly", title: "BALANCED", subtext: " effective against Soul Wizards.", rare: "Epic", price: "$ 2321.00" },
        { img: bundle_4, text: "A Body team can be highly", title: "FIGHTER", subtext: " effective against Soul Wizards.", rare: "Legendary", price: "$ 232.00" }
    ]
    return (
        <div>
            <div className="ralative">
                <div className="absolute flex flex-col items-center z-[0] w-full">
                    <div className="flex flex-col metaverse justify-center w-[80%]">
                        <a className="font-bold w-fit text-white ">
                            <p className="tracking-[1vw] metaverse-text">METAVERSE</p>
                            <p className="metaverse-subtitle font-medium tracking-widest uppercase text-center font-blome">GAME WITH MAGIC REWARDS</p>

                            <p className="metaverse-dis font-medium text-light tracking-widest !text-[1vw] uppercase text-center mt-[2vw]">Buy Arena Genesis NFTs now</p>
                            <div className="flex justify-center mt-[2vw] gap-[1vw]">
                                <div className="home-btn !text-[1vw] px-[1.5vw] py-[0.8vw] rounded-[1vw] font-bold cursor-pointer">
                                    BUY ARENA NFTs
                                </div>
                                <div className="home-btn !text-[1vw] px-[1.5vw] py-[0.8vw] rounded-[1vw] font-bold cursor-pointer">
                                    PLAY TRAILER
                                </div>
                            </div>
                        </a>

                    </div>
                    <div className="z-[0] my-[4vw] flex flex-col items-center">
                        <div className="text-center uppercase">
                            <p className="slash-title font-jost_medium">READY TO SLASH</p>
                            <p className="text-[2.5vw] text-white font-blome">katana inu NFTS TOKENS</p>
                        </div>
                        <div className="grid grid-cols-4 gap-[4vw] w-[70%] mt-[3vw]">
                            {listNft.map((e, i) =>
                                <div key={i}>
                                    <img className="h-full" src={e} />
                                </div>
                            )}
                        </div>
                        {/* <div className="md:hidden block mt-[3vw]">
                                <Homepage_carousel  val={listNft}/>
                        </div> */}
                    </div>
                    <div className="z-[0] mt-[20vw] flex flex-col items-center w-full">
                        <div className="text-center uppercase">
                            <p className="text-[2.5vw] text-white font-blome">buy katana inu NFTS TOKENS</p>
                        </div>
                        <div className="grid grid-cols-2 w-[70%] gap-[4vw] mt-[3vw]">
                            <div className="w-full relative flex justify-center items-start">
                                <img className="w-full" src={buy_option_1} />
                                <div className="absolute text-white w-[80%] mt-[4vw]">
                                    <p className="text-[1.3vw] font-jost_medium">ARENA GENESIS NFTS</p>
                                    <p className="text-gray text-[0.8vw] w-[52%] font-jost">Earn automatic staking rewards before the Arena launch. Earn passive royalties from every battle transation after the Arena launch.</p>
                                </div>
                                <div className="absolute bottom-[6vw] text-white w-[70%] mt-[4vw] font-jost_medium">
                                    <p className="text-[0.9vw] font-medium">$300/NFT</p>
                                    <p className="!text-[1.1vw] font-medium slash-title">6th Only 560 left</p>

                                </div>
                                <div className="absolute bottom-[1.5vw] right-[5.5vw] text-white w-[30%] mt-[4vw] font-jost_medium">
                                    <div className="addbtn px-[1.5vw] !text-[0.7vw] py-[0.6vw] rounded-[32px] font-bold cursor-pointer m-[1vw] font-jost_medium">
                                        LEARN MORE
                                    </div>
                                </div>
                            </div>
                            <div className="w-full relative flex justify-end items-start">
                                <img className="w-full" src={buy_option_2} />
                                <div className="absolute text-white w-[60%] mt-[4vw]">
                                    <p className="text-[1.3vw] font-jost_medium">UP TO
                                        <a className="slash-title"> 114% </a>
                                        APY STAKING REWARDS</p>
                                    <p className="text-gray text-[0.8vw] w-[80%] font-jost">Secure your $WZRD tokens now and stake with us. Staking pools are strictly limited, so don't miss out.</p>
                                    <div className="swap-page w-fit flex px-[1vw] py-[0.5vw] gap-[2vw] mt-[2vw]">
                                        <img className="w-[4vw] cursor-pointer" src={gate} />
                                        <img className="w-[6vw] cursor-pointer" src={pancake} />
                                    </div>
                                </div>
                                <div className="absolute bottom-[2vw] right-[2.5vw] text-white w-[70%] mt-[4vw]">
                                    <p className="!text-[1.1vw] float-right font-medium slash-title font-jost_medium">Staking is over</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="z-[0] mt-[20vw] flex flex-col items-center w-full">
                        <div className="text-center uppercase flex flex-col items-center" >
                            <div className="text-[2.5vw] text-white flex gap-[1vw]">
                                <span className="font-blome">Get </span> <span className="font-semibold"> 4 </span> <span className="font-blome"> wizards to battle with</span>
                            </div>
                            <p className="text-[0.9vw] mt-[2vw] w-[65%] text-[#B19667] font-jost">For the best Tournament experience it is best to assemble a team of Wizards with different affinities: Body, Mind and Soul. Choose a bundle of Wizards or build a team of your own choice.</p>
                        </div>
                        <div className="grid grid-cols-4 gap-[2vw] w-[70%] mt-[3vw]">
                            {listBundle.map((e, i) =>
                                <div className=" border border-[#584733] bg-black rounded-[0.5vw]" key={i}>
                                    <div className="relative flex flex-col">
                                        <div className="absolute z-[1] bottom-[7.5vw] w-full text-center text-white text-[0.8vw]">
                                            <p className="text-[1.5vw] mb-[0.5vw] font-blome">{e.title}</p>
                                            <p className="font-jost">{e.text}</p>
                                            <p >{e.subtext}</p>
                                        </div>
                                        <img className="h-full z-[0] mt-[1vw]" src={e.img} />
                                        <div className={`${e.rare} z-[1] text-[1vw] px-[1vw]`}>
                                            <div className="borderrare font-jost_medium">
                                                <div className="flex pb-[0.4vw] h-[3vw] items-end">
                                                    <p className="rate-text align-bottom text-[0.8vw]">{e.rare}</p>
                                                    <p className="text-white w-full text-right text-[0.8vw] align-bottom">{e.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a  href='/cart' className="addbtn text-[1vw] px-[1.5vw] py-[0.8vw] rounded-[32px] font-bold cursor-pointer m-[1vw] font-jost_medium">
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <img className="w-full z-[-1]" src={head_homepage} />
            </div>
        </div>
    )
}

export default Homepage