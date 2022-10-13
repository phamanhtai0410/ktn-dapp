import React from 'react'

const SessionBanner = () => {

    return (
        <div className="flex flex-col metaverse justify-center w-full lg:w-[80%] mt-16 lg:mt-0">
            <a className="font-bold w-full lg:w-fit text-white text-center">
                <p className="tracking-[1vw] text-5xl lg:text-[6vw] lg:leading-[80px]">METAVERSE</p>
                <p className="metaverse-subtitle text-xl lg:text-[2vw] mt-4 font-medium tracking-widest uppercase text-center font-blome">GAME WITH MAGIC REWARDS</p>

                <p className="text-sm lg:text-base font-medium text-light tracking-widest uppercase text-center mt-[2vw]">Buy Arena Genesis NFTs now</p>
                <div className="flex justify-center mt-10 gap-6">
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