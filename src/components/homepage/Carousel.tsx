
import React from 'react'
import Carousel from 'react-material-ui-carousel'

import { Paper, Button } from '@mui/material'

const Item = ({ key, item }) => {
    return (
        <Paper>
            <div className="border border-[#584733] bg-black rounded" key={key}>
                <div className="relative flex flex-col">
                    <div className="absolute z-[1] bottom-28 w-full text-center text-white text-base">
                        <p className="text-2xl mb-[0.5vw] font-blome">{item.title}</p>
                        <p className="font-jost">{item.text}</p>
                        <p >{item.subtext}</p>
                    </div>
                    <div className='w-full' >
                        <img className='object-contain w-full h-auto' src={item.img} />
                    </div>
                    <div className={`${item.rare} z-[1] px-4`}>
                        <div className="borderrar font-jost_medium">
                            <div className="flex items-end">
                                <p className="rate-text align-bottom text-base">{item.rare}</p>
                                <p className="text-white w-full text-right text-base align-bottom">{item.price}</p>
                            </div>
                        </div>
                    </div>
                    <a href='/cart' className="addbtn px-[1.5vw] py-3 rounded-[32px] font-bold cursor-pointer m-4 font-jost_medium">
                        Add to Cart
                    </a>
                </div>
            </div>
        </Paper>

    )
}

const ListCollections = ({ type, options }) => {
    return (
        <>
            {
                type === "NFT" ?
                    <Carousel>
                        {
                            options.map((item, i) =>
                                <Paper className="!bg-transparent">
                                    <div key={i} className="bg-transparent flex justify-center">
                                        <img src={item}/>
                                    </div>
                                </Paper>)
                        }
                    </Carousel>
                    :
                    <Carousel>
                        {
                            options.map((item, i) => <Item key={i} item={item} />)
                        }
                    </Carousel>
            }
        </>
    )
};

export default ListCollections;