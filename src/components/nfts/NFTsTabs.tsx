import characters_icon_active from '@/assets/images/mintpage/characters_icon_active.svg'
import characters_icon from '@/assets/images/mintpage/characters_icon.svg'
import packs_icon from '@/assets/images/mintpage/packs_icon.svg'
import weapons_icon from '@/assets/images/mintpage/weapons_icon.svg'
import weapons_icon_active from '@/assets/images/mintpage/weapons_icon_active.svg'
import packs_icon_active from '@/assets/images/mintpage/packs_icon_active.svg'
import clsx from 'clsx'
import { useState } from 'react'
const NFTsTabs = ({ search, onChangeSearch }) => {
  const tabs = [
    {
      id: 0,
      name: 'Coming soon!',
      icon: "weapons_icon",
      icon_active: weapons_icon_active,
      category: 'weapon',
    },
    {
      id: 1,
      name: 'Characters',
      icon: characters_icon,
      icon_active: characters_icon_active,
      category: 'character',
    },
    {
      id: 2,
      name: 'Coming soon!',
      icon: packs_icon,
      icon_active: packs_icon_active,
      category: 'pack',
    },
  ]
  return (
    <div className="w-full h-[66px] flex px-[16px] justify-between md:justify-end bg-minttab border-y border-[#13121F] z-1">
      <ul className="flex flex-row items-center gap-x-[16px] md:gap-x-[60px] list-none text-[#FFFFFF] max-w-[533px] mx-auto">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={clsx(
              'flex h-full items-center cursor-pointer border-t-2',
              {
                'border-[#F9C306] text-[#F9C306] text-[9px] md:text-[18px]': search.category === tab.category,
                'border-transparent text-[8px] md:text-[16px]': search.category !== tab.category,
              },
            )}
            onClick={() => onChangeSearch({category : tab.category})}
          >
            <div className="flex flex-row items-center justify-center">
                {
                  search.category === tab.category
                    ? <img src={tab.icon_active} alt="icon" className={clsx( {'flex' :tab.category === 'character', 'hidden':tab.category !== 'character' })} /> 
                    : <img src={tab.icon} alt="icon" className={clsx( {'flex' :tab.category === 'character', 'hidden':tab.category !== 'character' })} />
                }
              
              <p className="font-bold text-[8px] md:text-[16px] uppercase ml-1">{tab.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default NFTsTabs
