import React, { useEffect, useState } from 'react'
import './index.scss'

import bundle_1 from "../../assets/images/homepage/bundle_1.png"
import bundle_2 from "../../assets/images/homepage/bundle_2.png"
import bundle_3 from "../../assets/images/homepage/bundle_3.png"
import bundle_4 from "../../assets/images/homepage/bundle_4.png"
import Carousel from './Carousel'
import { fetchListCollections } from '@/actions/collectionsActions'
import { useAppDispatch } from '@/app/hooks'
import { useSelector } from 'react-redux'
import { selectCollections } from '@/reducers/collectionsSlice'
const SessionCollections = () => {
    const getListCollections = useSelector(selectCollections)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchListCollections())
    }, [])
    console.log(getListCollections)
    const listBundle = [
        { img: bundle_1, text: "A Body team can be highly", title: "BODY", subtext: " effective against Soul Wizards.", rare: "Rare", price: "$ 231.00" },
        { img: bundle_2, text: "A Body team can be highly", title: "HEALING", subtext: " effective against Soul Wizards.", rare: "Rare", price: "$ 2321.00" },
        { img: bundle_3, text: "A Body team can be highly", title: "BALANCED", subtext: " effective against Soul Wizards.", rare: "Epic", price: "$ 2321.00" },
        { img: bundle_4, text: "A Body team can be highly", title: "FIGHTER", subtext: " effective against Soul Wizards.", rare: "Legendary", price: "$ 232.00" }
    ]

    return (
        <div className="z-[0] mt-[16vw] flex flex-col items-center w-full pb-32">
            <div className="text-center uppercase flex flex-col items-center" >
                <div className="text-xl lg:text-3xl text-white flex gap-[1vw]">
                    <span className="font-blome">Get</span> <span className="font-semibold">4</span> <span className="font-blome"> wizards to battle with</span>
                </div>
                <p className="text-sm lg:text-base mt-8 w-full lg:w-[65%] text-[#B19667] font-jost">For the best Tournament experience it is best to assemble a team of Wizards with different affinities: Body, Mind and Soul. Choose a bundle of Wizards or build a team of your own choice.</p>
            </div>
            <div className="hidden lg:grid grid-cols-4 gap-[2.5vw] w-[70%] mt-[3vw]">
                {getListCollections.map((e, i) => {
                    let price = 0

                    e.nfts.forEach(element => {
                        price += element.price;
                    })

                    return (<div className=" border border-[#584733] bg-black rounded-[0.5vw]" key={i}>
                        <div className="relative flex flex-col">
                            <div className="absolute z-[1] bottom-[7.5vw] w-full text-center text-white text-[0.8vw]">
                                <p className="text-[1.5vw] mb-[0.5vw] font-blome">{e.name}</p>
                                <p className="font-jost">{e.description}</p>
                            </div>
                            <img className="h-full z-[0]" src={`${e.image}?w-500`} />
                            <div className={`rare_${e.collection_id} z-[1]`}>
                                <div className="borderrar flex items-end">
                                    {e.collection_id === 1 && <span className="rate-text align-bottom text-base font-jost font-medium capitalize">Uncommon</span>}
                                    {e.collection_id === 2 && <span className="rate-text align-bottom text-base font-jost font-medium capitalize">Rare</span>}
                                    {e.collection_id === 3 && <span className="rate-text align-bottom text-base font-jost font-medium capitalize">Mythical</span>}
                                    {e.collection_id === 4 && <span className="rate-text align-bottom text-base font-jost font-medium capitalize">Legendary</span>}
                                    {e.collection_id === 5 && <span className="rate-text align-bottom text-base font-jost font-medium capitalize">Immortal</span>}
                                    <span className="text-white w-full text-right text-base align-bottom font-jost font-medium">
                                        $ {price}
                                    </span>
                                </div>
                            </div>
                            <a href={`/cart/${e.collection_id}`} className="addbtn px-[1.5vw] py-[0.6vw] rounded-[32px] font-bold cursor-pointer m-[1vw] font-jost_medium">
                                Add to Cart
                            </a>
                        </div>
                    </div>)
                }
                )}
            </div>

            <div className="block lg:hidden w-[90%] mt-6">
                <Carousel type={"colection"} options={listBundle} />
            </div>

        </div>
    )
}

export default SessionCollections