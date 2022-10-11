import React from 'react'
import './index.scss'
import head_homepage from "../../assets/homepage/head_homepage.jpg"
import Button from "../button/button"
const Homepage = () => {
    return (
        <div>
            <div className="ralative">
                <div className="absolute flex justify-center z-[0] w-full">
                    <div className="flex flex-col metaverse justify-center w-[80%]">
                        <a className="font-bold w-fit metaverse-text text-white tracking-widest">METAVERSE
                            <p className="metaverse-subtext font-light text-white tracking-widest uppercase text-center">Buy Arena Genesis NFTs now</p>
                        </a>

                    </div>
                </div>
                <img className="w-full z-[-1]" src={head_homepage} />
                <div className="flex">
                    <Button color="black" text={"BUY ARENA NFTs"}/>
                </div>
            </div>
        </div>
    )
}

export default Homepage