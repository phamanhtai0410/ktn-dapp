import React from 'react'
import './index.scss'

import SessionCollections from './SessionCollections'
import SessionInfo from './SessionInfo'
import SessionNFTs from './SessionNFTs'
import SessionBanner from './SessionBanner'

const Homepage = () => {
   
    return (
        <div className='bg-home min-h-screen'>
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