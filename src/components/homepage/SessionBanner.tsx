import React from 'react'

import imgBanner from '@/assets/images/homepage/m_img_banner.jpg'

const SessionBanner = () => {

    return (
        <div className="mx-auto container flex flex-col lg:h-[40vh] min-h-[400px] pt-[4rem] lg:pt-[17rem] lg:items-start items-center w-full lg:mt-0">
            <img className='w-full lg:hidden' src={imgBanner} />
            <a className="metaverse-body font-bold w-fit text-white text-center">
                <p className="left-animation tracking-[1vw] text-5xl lg:text-[80px] lg:leading-[80px]">METAVERSE</p>
                <p className="bottom-animation metaverse-subtitle text-xl lg:text-4xl mt-4 font-medium tracking-widest uppercase text-center font-blome">GAME WITH MAGIC REWARDS</p>

                <p className="bottom-animation text-sm lg:text-base font-medium text-light tracking-widest uppercase text-center mt-[2vw]">Buy Arena Genesis NFTs now</p>
                <div className="bottom-animation flex justify-center mt-10 gap-6">
                    <div className="home-btn px-4 lg:px-6 py-3 lg:py-4 rounded-2xl font-bold cursor-pointer text-sm lg:text-xl">
                        BUY ARENA NFTs
                    </div>
                    <div className="home-btn px-4 lg:px-6 py-3 lg:py-4 rounded-2xl font-bold cursor-pointer text-sm lg:text-xl">
                        PLAY TRAILER
                    </div>
                </div>
            </a>
        </div>
    )
}

export default SessionBanner