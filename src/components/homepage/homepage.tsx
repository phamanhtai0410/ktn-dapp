import React from 'react'
import './index.scss'
import head_homepage from "../../assets/images/homepage/head_homepage.jpg"

import Nft_1 from "../../assets/images/homepage/Nft_1.png"
import Nft_2 from "../../assets/images/homepage/Nft_2.png"
import Nft_3 from "../../assets/images/homepage/Nft_3.png"
import Nft_4 from "../../assets/images/homepage/Nft_4.png"

const Homepage = () => {
    const listNft = [
        Nft_1,
        Nft_2,
        Nft_3,
        Nft_4
    ]
    return (
        <div>
            <div className="ralative">
                <div className="absolute flex flex-col items-center z-[0] w-full">
                    <div className="flex flex-col metaverse justify-center w-[80%]">
                        <a className="font-bold w-fit text-white ">
                            <p className="tracking-[1vw] metaverse-text">METAVERSE</p>
                            <p className="metaverse-subtitle font-medium tracking-widest uppercase text-center">GAME WITH MAGIC REWARDS</p>

                            <p className="metaverse-dis font-medium text-light tracking-widest uppercase text-center mt-[2vw]">Buy Arena Genesis NFTs now</p>
                            <div className="flex justify-center mt-[2vw] gap-[1vw]">
                                <div className="home-btn px-[1.5vw] py-[0.8vw] rounded-[1vw] font-bold cursor-pointer">
                                    BUY ARENA NFTs
                                </div>
                                <div className="home-btn px-[1.5vw] py-[0.8vw] rounded-[1vw] font-bold cursor-pointer">
                                    PLAY TRAILER
                                </div>
                            </div>
                        </a>

                    </div>
                    <div className="z-[0] my-[4vw] flex flex-col items-center">
                        <div className="text-center uppercase">
                            <p className="font-semibold slash-title">READY TO SLASH</p>
                            <p className="text-[2.5vw] text-white ">katana inu NFTS TOKENS</p>
                        </div>
                        <div className="grid grid-cols-4 gap-[4vw] w-[70%] mt-[3vw]">
                            {listNft.map((e,i) =>
                                <div key={i}>
                                    <img className="h-full" src={e}/>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="z-[0] mt-[11vw] flex flex-col items-center">
                        <div className="text-center uppercase">
                            <p className="text-[2.5vw] text-white ">buy katana inu NFTS TOKENS</p>
                        </div>
                     
                    </div>
                </div>
                <img className="w-full z-[-1]" src={head_homepage} />
            </div>
        </div>
    )
}

export default Homepage