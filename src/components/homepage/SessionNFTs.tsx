import React from 'react'
import Box from '@mui/material/Box'
import Zoom from '@mui/material/Zoom'

import { TransitionGroup } from 'react-transition-group';

import Nft_1 from "../../assets/images/homepage/Nft_1.png"
import Nft_2 from "../../assets/images/homepage/Nft_2.png"
import Nft_3 from "../../assets/images/homepage/Nft_3.png"
import Nft_4 from "../../assets/images/homepage/Nft_4.png"
import Carousel from './Carousel'

const SessionNFTs = () => {
    const listNft = [Nft_1, Nft_2, Nft_3, Nft_4]
    return (
        <>
            <div className="container mx-auto my-10 hidden lg:flex flex-col items-center">

                <div className="text-center uppercase">
                    <p className="slash-title font-jost_medium">READY TO SLASH</p>
                    <p className="text-[2.5vw] text-white font-blome">katana inu NFTS TOKENS</p>
                </div>

                <div className="grid grid-cols-4 gap-4 mt-10">
                    
                {listNft.map((e, i) =>
                            <div key={i} >
                                <img className="h-[500px]" src={e} />
                            </div>
                        )}
                </div>
               
            </div>
            <div className="block lg:hidden w-[90%] mt-6 bg-transparent">
                <Carousel type={"NFT"} options={listNft} />
            </div>
        </>
    )
}

export default SessionNFTs