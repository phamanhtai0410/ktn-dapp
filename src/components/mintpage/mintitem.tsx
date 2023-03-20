import shiba_inu from '@/assets/images/mintpage/shiba_inu.svg'
import bnb_icon from '@/assets/images/mintpage/bnb_icon.svg'
import cart from '@/assets/images/mintpage/cart.svg'
import characters_icon from '@/assets/images/mintpage/characters_icon.svg'

const MintItem = () => {

    return (
        <div className="grid px-[82px] py-[50px] gap-x-[34px] grid-cols-4 bg-[#11151B] h-auto pb-[292px]">
            <div className='cursor-pointer'>
                <div className="bg-mint-item w-auto rounded-[10px] relative bg-[#0D0F14]">
                    <img src={shiba_inu} className="h-full w-full rounded-[10px]" />
                    <div className='absolute top-[12px] left-[12px] flex flex-row items-center'>
                        <img src={bnb_icon} alt="btn icon" />
                        <p className='ml-[4px] text-[12px] text-[#FFFFFF]'>BNB Chain</p>
                    </div>
                    <div className='flex flex-row absolute bg-[#F9C306] w-[143px] rounded-[5px] items-center justify-center bottom-[24px] left-[40px]'>
                        <p className='text-[#0B0B13] uppercase text-[15px]'>Mint Now</p>
                        <img src={cart} alt='cart icon' />
                    </div>
                </div>
                <div className='px-[12px]'>
                    <div className='flex flex-row items-center justify-center text-[12px] text-[#A4A4A4]'>
                        <p>21.10.2021 - starting at 6:00 p.m</p>
                        <img src={bnb_icon} alt="btn icon" />
                    </div>
                    <div className='flex flex-row items-center'>
                        <img src={characters_icon} alt="icon" className='w-[17px] h-[14px] mr-[2px]' />
                        <h3 className='font-extrabold text-[#FFFFFF] text-[20px]'>
                            Shiba
                            <span className='text-[#F9C306]'>Inu</span>
                        </h3>
                    </div>
                    <div className='flex flex-row justify-between my-[16px]'>
                        <div className='text-[#FFFFFF]'>
                            <p className='text-[12px]'>Price:</p>
                            <p className='text-[16px] text-[#F9C306]'><span className='font-bold'>254 </span>USD</p>
                            <p className='text-[12px]'>(2.2 BNB)</p>
                        </div>
                        <div className='text-[#FFFFFF] text-[12px]'>
                            <p>Type:</p>
                            <p className='uppercase'>Character</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='text-[#FFFFFF]'>
                            <p className='text-[12px]'>Sold/total:</p>
                            <p className='text-[15px]'><span className='text-[#F9C306]'>200</span>/10.000</p>
                        </div>
                        <div className='text-[#FFFFFF] text-[12px]'>
                            <p>Rarity:</p>
                            <p className='uppercase'>LOOTBOX</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='cursor-pointer'>
                <div className=" w-auto rounded-[10px] relative bg-[#0D0F14]">
                    <img src={shiba_inu} className="h-full w-full rounded-[10px]" />
                    <div className='absolute top-[12px] left-[12px] flex flex-row items-center'>
                        <img src={bnb_icon} alt="btn icon" />
                        <p className='ml-[4px] text-[12px] text-[#FFFFFF]'>BNB Chain</p>
                    </div>
                    <div className='flex flex-row absolute bg-[#F9C306] w-[143px] rounded-[5px] items-center justify-center bottom-[24px] left-[40px]'>
                        <p className='text-[#0B0B13] uppercase text-[15px]'>Mint Now</p>
                        <img src={cart} alt='cart icon' />
                    </div>
                </div>
                <div className='px-[12px]'>
                    <div className='flex flex-row items-center justify-center text-[12px] text-[#A4A4A4]'>
                        <p>21.10.2021 - starting at 6:00 p.m</p>
                        <img src={bnb_icon} alt="btn icon" />
                    </div>
                    <div className='flex flex-row items-center'>
                        <img src={characters_icon} alt="icon" className='w-[17px] h-[14px] mr-[2px]' />
                        <h3 className='font-extrabold text-[#FFFFFF] text-[20px]'>
                            Shiba
                            <span className='text-[#F9C306]'>Inu</span>
                        </h3>
                    </div>
                    <div className='flex flex-row justify-between my-[16px]'>
                        <div className='text-[#FFFFFF]'>
                            <p className='text-[12px]'>Price:</p>
                            <p className='text-[16px] text-[#F9C306]'><span className='font-bold'>254 </span>USD</p>
                            <p className='text-[12px]'>(2.2 BNB)</p>
                        </div>
                        <div className='text-[#FFFFFF] text-[12px]'>
                            <p>Type:</p>
                            <p className='uppercase'>Character</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='text-[#FFFFFF]'>
                            <p className='text-[12px]'>Sold/total:</p>
                            <p className='text-[15px]'><span className='text-[#F9C306]'>200</span>/10.000</p>
                        </div>
                        <div className='text-[#FFFFFF] text-[12px]'>
                            <p>Rarity:</p>
                            <p className='uppercase'>LOOTBOX</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='cursor-pointer'>
                <div className=" w-auto rounded-[10px] relative bg-[#0D0F14]">
                    <img src={shiba_inu} className="h-full w-full rounded-[10px]" />
                    <div className='absolute top-[12px] left-[12px] flex flex-row items-center'>
                        <img src={bnb_icon} alt="btn icon" />
                        <p className='ml-[4px] text-[12px] text-[#FFFFFF]'>BNB Chain</p>
                    </div>
                    <div className='flex flex-row absolute bg-[#F9C306] w-[143px] rounded-[5px] items-center justify-center bottom-[24px] left-[40px]'>
                        <p className='text-[#0B0B13] uppercase text-[15px]'>Mint Now</p>
                        <img src={cart} alt='cart icon' />
                    </div>
                </div>
                <div className='px-[12px]'>
                    <div className='flex flex-row items-center justify-center text-[12px] text-[#A4A4A4]'>
                        <p>21.10.2021 - starting at 6:00 p.m</p>
                        <img src={bnb_icon} alt="btn icon" />
                    </div>
                    <div className='flex flex-row items-center'>
                        <img src={characters_icon} alt="icon" className='w-[17px] h-[14px] mr-[2px]' />
                        <h3 className='font-extrabold text-[#FFFFFF] text-[20px]'>
                            Shiba
                            <span className='text-[#F9C306]'>Inu</span>
                        </h3>
                    </div>
                    <div className='flex flex-row justify-between my-[16px]'>
                        <div className='text-[#FFFFFF]'>
                            <p className='text-[12px]'>Price:</p>
                            <p className='text-[16px] text-[#F9C306]'><span className='font-bold'>254 </span>USD</p>
                            <p className='text-[12px]'>(2.2 BNB)</p>
                        </div>
                        <div className='text-[#FFFFFF] text-[12px]'>
                            <p>Type:</p>
                            <p className='uppercase'>Character</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='text-[#FFFFFF]'>
                            <p className='text-[12px]'>Sold/total:</p>
                            <p className='text-[15px]'><span className='text-[#F9C306]'>200</span>/10.000</p>
                        </div>
                        <div className='text-[#FFFFFF] text-[12px]'>
                            <p>Rarity:</p>
                            <p className='uppercase'>LOOTBOX</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='cursor-pointer'>
                <div className=" w-auto rounded-[10px] relative bg-[#0D0F14]">
                    <img src={shiba_inu} className="h-full w-full rounded-[10px]" />
                    <div className='absolute top-[12px] left-[12px] flex flex-row items-center'>
                        <img src={bnb_icon} alt="btn icon" />
                        <p className='ml-[4px] text-[12px] text-[#FFFFFF]'>BNB Chain</p>
                    </div>
                    <div className='flex flex-row absolute bg-[#F9C306] w-[143px] rounded-[5px] items-center justify-center bottom-[24px] left-[40px]'>
                        <p className='text-[#0B0B13] uppercase text-[15px]'>Mint Now</p>
                        <img src={cart} alt='cart icon' />
                    </div>
                </div>
                <div className='px-[12px]'>
                    <div className='flex flex-row items-center justify-center text-[12px] text-[#A4A4A4]'>
                        <p>21.10.2021 - starting at 6:00 p.m</p>
                        <img src={bnb_icon} alt="btn icon" />
                    </div>
                    <div className='flex flex-row items-center'>
                        <img src={characters_icon} alt="icon" className='w-[17px] h-[14px] mr-[2px]' />
                        <h3 className='font-extrabold text-[#FFFFFF] text-[20px]'>
                            Shiba
                            <span className='text-[#F9C306]'>Inu</span>
                        </h3>
                    </div>
                    <div className='flex flex-row justify-between my-[16px]'>
                        <div className='text-[#FFFFFF]'>
                            <p className='text-[12px]'>Price:</p>
                            <p className='text-[16px] text-[#F9C306]'><span className='font-bold'>254 </span>USD</p>
                            <p className='text-[12px]'>(2.2 BNB)</p>
                        </div>
                        <div className='text-[#FFFFFF] text-[12px]'>
                            <p>Type:</p>
                            <p className='uppercase'>Character</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='text-[#FFFFFF]'>
                            <p className='text-[12px]'>Sold/total:</p>
                            <p className='text-[15px]'><span className='text-[#F9C306]'>200</span>/10.000</p>
                        </div>
                        <div className='text-[#FFFFFF] text-[12px]'>
                            <p>Rarity:</p>
                            <p className='uppercase'>LOOTBOX</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MintItem