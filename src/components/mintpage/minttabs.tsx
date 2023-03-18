import characters_icon from '@/assets/images/mintpage/characters_icon.svg'
import packs_icon from '@/assets/images/mintpage/packs_icon.svg'
import weapons_icon from '@/assets/images/mintpage/weapons_icon.svg'

const MintTabs = () => {
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
        <div className="w-full h-[66px] flex justify-end bg-minttab border-y border-[#13121F] pr-[360px] z-10">
            <ul className="flex flex-row items-center gap-x-[60px] list-none text-[#FFFFFF]">
                <li className='flex h-full items-center cursor-pointer'>
                    <div className='flex flex-row '>
                        <img src={weapons_icon} alt='icon' />
                        <p className='text-[16px] uppercase ml-1'>Weapons</p>
                    </div>
                </li>
                <li className='flex border-t-2 border-[#F9C306] h-full items-center cursor-pointer'>
                    <div className='flex flex-row '>
                        <img src={characters_icon} alt='icon' />
                        <p className='text-[16px] uppercase ml-1'>Characters</p>
                    </div>
                </li>
                <li className='flex h-full items-center cursor-pointer'>
                    <div className='flex flex-row '>
                        <img src={packs_icon} alt='icon' />
                        <p className='text-[16px] uppercase ml-1'>Packs</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default MintTabs