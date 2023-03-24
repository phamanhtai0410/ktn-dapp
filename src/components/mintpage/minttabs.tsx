import characters_icon from '@/assets/images/mintpage/characters_icon.svg'
import packs_icon from '@/assets/images/mintpage/packs_icon.svg'
import weapons_icon from '@/assets/images/mintpage/weapons_icon.svg'
import clsx from "clsx"
import { useState } from 'react'

const MintTabs = () => {

    const [ activeTabId, setActiveTabId ] = useState(1)

    const tabs = [
        {
            id: 0,
            name: "Weapons",
            icon: weapons_icon,
        },
        {
            id: 1,
            name: "Characters",
            icon: characters_icon,
        },
        {
            id: 2,
            name: "Packs",
            icon: packs_icon,
        },
    ]

    return (
        <div className="w-full h-[66px] flex px-[16px] justify-between md:justify-end bg-minttab border-y border-[#13121F] md:pr-[360px] z-10">
            <ul className="flex flex-row items-center gap-x-[16px] md:gap-x-[60px] list-none text-[#FFFFFF]">

                {
                    tabs.map(tab => (
                        <li 
                            key={tab.id}
                            className={clsx("flex h-full items-center cursor-pointer border-t-2", {
                                "border-[#F9C306]": activeTabId === tab.id,
                                "border-transparent": activeTabId !== tab.id
                            })}
                            onClick={()=>{
                                setActiveTabId(tab.id)
                            }}
                            >
                            <div className='flex flex-row '>
                                <img src={tab.icon} alt='icon' />
                                <p className='text-[16px] uppercase ml-1'>{tab.name}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default MintTabs