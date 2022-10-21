import React, { useEffect, useState } from 'react'
import './index.scss'

import { useAppDispatch } from '@/app/hooks'
import { fetchListCollections } from '@/actions/collectionsActions'

import ListCollection from './ListCollections'
const SessionCollections = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        fetchCollections()
    }, [])

    const fetchCollections = async () => {
         await dispatch(fetchListCollections({}))
    }

    return (
        <div className="z-[0] mt-[12vw] flex flex-col items-center w-full mb-[16vw]">

            <div className="text-center uppercase flex flex-col items-center" >
                <div className="text-xl lg:text-3xl text-white flex gap-[1vw]">
                    <span className="font-blome">Get</span> <span className="font-semibold">4</span> <span className="font-blome"> wizards to battle with</span>
                </div>
                <p className="text-sm lg:text-base mt-8 w-full lg:w-[65%] text-[#B19667] font-jost">For the best Tournament experience it is best to assemble a team of Wizards with different affinities: Body, Mind and Soul. Choose a bundle of Wizards or build a team of your own choice.</p>
            </div>
            <ListCollection />
        </div>
    )
}

export default SessionCollections