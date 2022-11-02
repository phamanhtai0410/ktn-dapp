import React, { useEffect } from 'react'
import ListNfts from './ListNfts'
import { useAppDispatch } from '@/app/hooks'
import { fetchListNFTsDashboard } from '@/actions/nftActions'
import { useSelector } from 'react-redux'
import { selectNFTsSliceDashboard } from '@/reducers/NFTsSliteDashBoard'
import { ClassNames } from '@emotion/react'

const SessionNFTs = () => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        fetchCollections()
    }, [])
    
    const fetchCollections = async () => {
         await dispatch(fetchListNFTsDashboard({"is_show":1}))
    }
    return (
        <div className="flex flex-col items-center">
            <div className="container mx-auto mt-10 mb-[79px] hidden lg:flex flex-col items-center">

                <div className="text-center uppercase">
                    <p className="slash-title font-jost_medium">READY TO SLASH</p>
                    <p className="text-[2.5vw] text-white font-blome">katana inu NFTS TOKENS</p>
                </div>
            </div>
            <div className="container block bg-transparent">
                <ListNfts />
            </div>
        </div>
    )
}

export default SessionNFTs