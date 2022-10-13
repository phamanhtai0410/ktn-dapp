import React from 'react'

const SessionBanner = () => {

    return (
        <div className="flex flex-col metaverse justify-center w-[80%]">
            <a className="font-bold w-fit text-white ">
                <p className="tracking-[1vw] metaverse-text">METAVERSE</p>
                <p className="metaverse-subtitle font-medium tracking-widest uppercase text-center font-blome">GAME WITH MAGIC REWARDS</p>

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
    )
}

export default SessionBanner