import { useState } from 'react'
import shiba_inu from '@/assets/images/mintpage/shiba_inu.svg'
import bnb_icon from '@/assets/images/mintpage/bnb_icon.svg'
import cart from '@/assets/images/mintpage/cart.svg'
import characters_icon from '@/assets/images/mintpage/characters_icon.svg'
import { useNavigate } from "react-router-dom"
import Pagination from '../pagination/Pagination'

const MintItem = ({data}) => {
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1)

    return (
        <div className='flex flex-col pb-[292px] bg-[#11151B]'>
            <div className="grid w-full px-[16px] md:px-[82px] py-[50px] gap-x-[34px] gap-y-[56px] md:grid-cols-4 h-auto ">
                {
                    data.map((item, index) => (
                        <div 
                            key={index}
                            className='mint_item cursor-pointer mb-[32px] md:mb-0'
                            onClick={()=>{
                                navigate(`/mint/${item.address}`)
                            }}
                            >
                            <div className="mint_item_img w-auto rounded-[10px] relative bg-[#0D0F14]">
                                <div className='h-[290px]'>
                                    <img src={item?.image} className="h-full w-full rounded-[10px]" />
                                </div>
                                <div className='absolute top-[12px] left-[12px] flex flex-row items-center'>
                                    <img src={bnb_icon} alt="btn icon" />
                                    <p className='ml-[4px] text-[12px] text-[#FFFFFF]'>BNB Chain</p>
                                </div>
                                <div className='mint_cart hidden flex-row absolute bg-[#F9C306] w-[143px] rounded-[5px] items-center justify-center bottom-[24px] left-[50%] translate-x-[-50%]'>
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
                                        {item?.name}
                                        {/* <span className='text-[#F9C306]'>Inu</span> */}
                                    </h3>
                                </div>
                                <div className='flex flex-row justify-between my-[16px]'>
                                    <div className='text-[#FFFFFF]'>
                                        <p className='text-[12px]'>Price:</p>
                                        <p className='text-[16px] text-[#F9C306]'><span className='font-bold'>{item?.price} </span>USD</p>
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
                                        <p className='text-[15px]'><span className='text-[#F9C306]'>{item?.total_supply}</span>/10.000</p>
                                    </div>
                                    <div className='text-[#FFFFFF] text-[12px]'>
                                        <p>Rarity:</p>
                                        <p className='uppercase'>{item?.rarity}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-center'>
                <Pagination 
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={2}
                    pageSize={2}
                    onPageChange={(currentPage) => {
                        setCurrentPage(currentPage)
                    }} 
                />
            </div>
        </div>
    )
}

export default MintItem