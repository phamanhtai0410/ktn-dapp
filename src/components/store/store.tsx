import React, { useEffect, useRef } from 'react'
import './index.scss'
import Button from '@/components/Partials/Button'
import IcArrow from '../../assets/images/partials/arrow_bot.svg'

import bg_rare from '../../assets/images/store/item_bg_rare.png'
import bg_legend from '../../assets/images/store/item_bg_legend.png'
import bg_immortal from '../../assets/images/store/item_bg_immortal.png'
import char_1 from '../../assets/images/store/char_1.png'
import char_2 from '../../assets/images/store/char_2.png'
import weapon from '../../assets/images/store/weapon.png'
import dot from '../../assets/images/store/dot.png'

const store = () => {
    const listTab = [
        { title: "swords", type: true },
        { title: "skins", type: false },
        { title: "characters", type: false },
        { title: "packs", type: false }
    ]
    const listData = [
        { rare: "UNCOM", No: "#100", Type: 3, Name: "Weapon Name", image: weapon, dicription: "Weapon Description", Price: "2231.00", detail: "US$ -2231.00" },
        { rare: "UNCOM", No: "#100", Type: 1, Name: "Weapon Name", image: char_2, dicription: "Weapon Description", Price: "2231.00", detail: "US$ -2231.00" },
        { rare: "UNCOM", No: "#100", Type: 2, Name: "Weapon Name", image: char_1, dicription: "Weapon Description", Price: "2231.00", detail: "US$ -2231.00" },
        { rare: "UNCOM", No: "#100", Type: 3, Name: "Weapon Name", image: weapon, dicription: "Weapon Description", Price: "2231.00", detail: "US$ -2231.00" },
        { rare: "UNCOM", No: "#100", Type: 1, Name: "Weapon Name", image: char_2, dicription: "Weapon Description", Price: "2231.00", detail: "US$ -2231.00" },
        { rare: "UNCOM", No: "#100", Type: 2, Name: "Weapon Name", image: char_1, dicription: "Weapon Description", Price: "2231.00", detail: "US$ -2231.00" },
        { rare: "UNCOM", No: "#100", Type: 1, Name: "Weapon Name", image: char_2, dicription: "Weapon Description", Price: "2231.00", detail: "US$ -2231.00" },
        { rare: "UNCOM", No: "#100", Type: 3, Name: "Weapon Name", image: weapon, dicription: "Weapon Description", Price: "2231.00", detail: "US$ -2231.00" },

    ]
    return (
        <div className='bg-store min-h-screen'>
            <div className='container mx-auto pt-52'>
                <p className='uppercase text-[36px] font-blome text-white'>katanu inu store</p>
                <div className='pt-28 w-full flex justify-start gap-5'>
                    {listTab?.map((val, index) => {
                        return (

                            val.type ?
                                <div key={index}>
                                    <Button className='button uppercase font-jost font-medium min-w-[247px] w-full text-white p-3 flex items-center justify-center rounded-[32px] cursor-pointer'
                                        title={val.title} />
                                </div>
                                :
                                <div key={index}>
                                    <div className='disable-button bg-[#0b090c] bg-opacity-[0.227] uppercase font-jost font-medium min-w-[247px] w-full text-white p-3 flex items-center justify-center rounded-[32px] cursor-pointer'
                                        >{val.title} </div>
                                </div>
  
                        );

                    })}
                </div>
                <div className='pt-[53px] pb-52'>
                    <div className='flex justify-between items-center text-white border border-white w-fit min-w-[204px] h-[28px] rounded-3xl px-4'>
                        <p className='text-[12px] font-semibold'> Name (A-Z)</p>
                        <img src={IcArrow} />
                    </div>
                    <div className='grid grid-cols-4 gap-[18px] mt-[43px]'>
                        {listData?.map((val, index) => {
                            return (
                                <div className='w-full store-item-bg px-[12px] py-[11px]' key={index}>
                                    <div className='flex justify-between items-center'>
                                        <div className='relative'>
                                            <div className='rare-bg'></div>
                                            <div className='rare-text flex justify-center items-center rounded-[32px]'>
                                                <p>{val.rare}</p>
                                            </div>
                                        </div>
                                        <p className='text-[14.667px] font-jost font-bold text-[#ffffff]'>{val.No}</p>
                                    </div>
                                    <div className='relative flex justify-center items-center mt-[49px] mb-[57px]'>
                                        {val.Type === 1 && <img className='opacity-[0.749]' src={bg_rare} />}
                                        {val.Type === 2 && <img className='opacity-[0.749]' src={bg_legend} />}
                                        {val.Type === 3 && <img className='opacity-[0.749]' src={bg_immortal} />}
                                        <img className='absolute' src={val.image} />
                                    </div>
                                    <div className='rounded-[15px] bg-opacity-[0.102] bg-[#F3A511] p-[12px]'>
                                        <p className='text-[18px] font-jost font-bold text-white'>{val.Name}</p>
                                        <p className='text-[12px] font-jost font-bold text-[#F3A511]'>{val.dicription}</p>
                                        <div className='flex justify-between mt-[27px]'>
                                            <div className="flex gap-[14px]">
                                                <img src={dot} className="w-[27px] h-[27px]" />
                                                <div>
                                                    <p className='font-jost font-medium text-[#F3A511]'>{val.Price}</p>
                                                    <p className='text-[14px] font-jost font-medium text-white'>{val.detail}</p>
                                                </div>
                                            </div>
                                            <a className='store-add flex justify-center items-center'><p>+</p></a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default store
