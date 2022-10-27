import React, { useEffect } from 'react'
import ListNfts from './ListNfts'
import { useAppDispatch } from '@/app/hooks'
import { fetchListNFTsDashboard } from '@/actions/nftActions'
import { useSelector } from 'react-redux'
import { selectNFTsSliceDashboard } from '@/reducers/NFTsSliteDashBoard'

const SessionNFTs = () => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        fetchCollections()
    }, [])
    
    const fetchCollections = async () => {
         await dispatch(fetchListNFTsDashboard({"is_show":1}))
    }
    return (
        <>
            <div className="animation-scroll container mx-auto mb-16 hidden lg:flex flex-col items-center">

                <div className="text-center uppercase">
                    <p className="slash-title font-jost_medium">READY TO SLASH</p>
                    <p className="text-[2.5vw] text-white font-blome">katana inu NFTS TOKENS</p>
                </div>
            </div>
            <div className="container block mt-6 bg-transparent">
                <ListNfts />
            </div>
        </>
    )
}

export default SessionNFTs