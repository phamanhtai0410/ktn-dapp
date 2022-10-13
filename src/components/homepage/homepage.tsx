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
import SessionCollections from './SessionCollections'
import SessionInfo from './SessionInfo'
import SessionNFTs from './SessionNFTs'
import SessionBanner from './SessionBanner'

const Homepage = () => {
   
    return (
        <div className='m-bg-home lg:bg-home min-h-screen'>
             <div className="flex flex-col items-center z-[0] w-full">
                    <SessionBanner />   
                    <SessionNFTs />
                    <SessionInfo />
                    <SessionCollections />
                </div>
        </div>
    )
}

export default Homepage