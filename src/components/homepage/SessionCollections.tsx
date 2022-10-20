import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './index.scss'
import bundle_1 from "../../assets/images/homepage/bundle_1.png"
import bundle_2 from "../../assets/images/homepage/bundle_2.png"
import bundle_3 from "../../assets/images/homepage/bundle_3.png"
import bundle_4 from "../../assets/images/homepage/bundle_4.png"
import Carousel from './Carousel'

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

    const listBundle = [
        { img: bundle_1, text: "A Body team can be highly", title: "BODY", subtext: " effective against Soul Wizards.", rare: "Rare", price: "$ 231.00" },
        { img: bundle_2, text: "A Body team can be highly", title: "HEALING", subtext: " effective against Soul Wizards.", rare: "Rare", price: "$ 2321.00" },
        { img: bundle_3, text: "A Body team can be highly", title: "BALANCED", subtext: " effective against Soul Wizards.", rare: "Epic", price: "$ 2321.00" },
        { img: bundle_4, text: "A Body team can be highly", title: "FIGHTER", subtext: " effective against Soul Wizards.", rare: "Legendary", price: "$ 232.00" }
    ]

    return (
        <div className="z-[0] mt-[12vw] flex flex-col items-center w-full mb-[16vw]">

            <div className="text-center uppercase flex flex-col items-center" >
                <div className="text-xl lg:text-3xl text-white flex gap-[1vw]">
                    <span className="font-blome">Get</span> <span className="font-semibold">4</span> <span className="font-blome"> wizards to battle with</span>
                </div>
                <p className="text-sm lg:text-base mt-8 w-full lg:w-[65%] text-[#B19667] font-jost">For the best Tournament experience it is best to assemble a team of Wizards with different affinities: Body, Mind and Soul. Choose a bundle of Wizards or build a team of your own choice.</p>
            </div>
            
            <ListCollection />

            {/* <div className="block lg:hidden w-[90%] mt-6">
                <Carousel type={"colection"} options={listBundle} />
            </div> */}

        </div>
    )
}

export default SessionCollections