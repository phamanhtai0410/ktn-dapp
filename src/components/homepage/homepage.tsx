import React from 'react'
import './index.scss'
import head_homepage from "../../assets/homepage/head_homepage.jpg"
const Homepage = () => {
    return (
        <div>
            <div className="ralative">
                <div className="absolute flex justify-center z-[0] w-full">
                    <div className="flex flex-col metaverse justify-center w-[80%]">
                        <a className="font-bold w-fit metaverse-text text-white tracking-widest">METAVERSE
                            <p className="metaverse-subtext font-light text-white tracking-widest uppercase text-center">Buy Arena Genesis NFTs now</p>
                            <div className="flex justify-center mt-4 gap-4">
                                <button className="home-btn px-5 py-2 rounded-lg font-bold">
                                    BUY ARENA NFTs
                                </button>
                                <button className="home-btn px-5 py-2 rounded-lg font-bold">
                                    PLAY TRAILER
                                </button>
                            </div>
                        </a>

                    </div>
                </div>
                <img className="w-full z-[-1]" src={head_homepage} />

            </div>
        </div>
    )
}

export default Homepage