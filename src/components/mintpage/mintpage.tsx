import React, { useCallback, useEffect, useMemo, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import MintBanner from "../mint/MintBanner"
import MintTabs from "./minttabs"
import './index.scss'
import MintFilter from "./mintfilter"
import MintItem from "./mintitem"
import MintInfo from "./mintinfo"
import { fetchListMintNFT } from "@/actions/nftActions"
import { useAppDispatch } from '@/app/hooks'
import { selectListMintNFT } from "@/reducers/mintSlice"

const Mintpage = () => { 
    const default_filters = {
        page_size: 8,
        page: 0,
    }

    const [ filters, setFilters ] = useState(default_filters)
    const dispatch = useAppDispatch()
    const listItems = useSelector(selectListMintNFT) 

    useEffect(() => {
        dispatch(fetchListMintNFT(filters))
      }, [])

    return (
        <div className='min-h-screen'>
            <div className="banner-wrapper lg:flex hidden flex-col items-center z-[0] w-full">
                <MintBanner />
            </div>
            
            <div className="max-w-[1900px] mx-auto bg-[#333]">
                <div className="bg-minttab flex w-full ">
                    <MintTabs />
                </div>
                <div className="flex w-full h-auto ">
                    <MintFilter />
                    <MintItem data={listItems} />
                </div>
                <div className="flex w-full ">
                    <MintInfo />
                </div>
            </div>
            
        </div>
    ) 
}

export default Mintpage