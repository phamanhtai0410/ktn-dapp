import { selectLeaderBoard, selectNumOfPageBoard, selectPageBoard } from "@/reducers/BoardSlice"
import { addressWalletCompact } from "@/utils/util"
import { useSelector } from "react-redux"
import coppy_icon from '@/assets/images/affiliate/coppy_icon.svg'
import { toast } from 'react-toastify'
import { selectNumOfPage } from "@/reducers/mintSlice"
import Pagination from '../pagination/Pagination'
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { fetchLeaderBoard } from "@/actions/nftActions"
import { useAppDispatch } from "@/app/hooks"

const Ranking = ({topAddress}) => {
    const [ filter, setFilter ] = useState({
        num_of_page: 0,
        page_size: 15,
        page: 1
    })

    const dispatch = useAppDispatch();

    const listBoard = useSelector(selectLeaderBoard)
    const num_of_page = useSelector(selectNumOfPageBoard)
    const page = useSelector(selectPageBoard)


    const notify = () => toast('Copy Successfully')
    const copy = async (address) => {
        await navigator.clipboard.writeText(address)
        notify()
      }

    const onChangeSearch = (currentPage) => {
        setFilter({
            ...filter,
            page : currentPage.page
        })
    }

    useEffect(() => {
        
        fectData()
    },[filter])

    const fectData = () => {
        dispatch(fetchLeaderBoard(filter))
    }

    return (
        <div className="bg-[#07080B] relative pt-[46px] px-[12px] lg:w-[500px] pb-[60px] lg:pb-0">
            <span className="absolute lg:flex hidden left-[36px] top-[-40px] text-[21px] text-[#F9C306] font-bold uppercase">Ranking</span>
            <p className="text-[21px] font-bold text-[#FFFFFF]">TOp Rankings</p>
            <div className="grid grid-cols-3 gap-4 mt-[35px]">
                {
                    topAddress?.map((item, index) => (
                        <div 
                            className="flex flex-col text-center"
                            key={index}
                        >
                            <div 
                                className="relative flex flex-row items-center justify-end pr-[4px] cursor-pointer bg-[#0F1218] text-right text-[#F9F9F9] rounded-[7px] text-[9px] lg:text-[12px] h-[27px]"
                                onClick={() => copy(item.address)}
                            >
                                <span>{addressWalletCompact(item.address)}</span>
                                <img src={coppy_icon} alt="coppy_icon" className="ml-[4px]" />
                                <span className="absolute left-[-17px] top-[-15px] italic font-bold text-[50px] lg:text-[70px] leading-[70px] text-[#F9C306]">{index+1}</span>
                            </div>
                            <p className="text-[9px] lg:text-[12px] text-[#F9C306] font-bold">Point: {item.point}</p>
                        </div>
                    ))
                }
                
            </div>

            <div className="line_ranking h-[0.81px] mt-[43px] mb-[19px]"></div>

            <ul className="flex flex-col gap-y-[19px]">
                <li className="flex flex-row justify-between text-[#FFFFFF] font-bold text-[9px] lg:text-[14px]">
                    <span>Rank</span>
                    <span>Wallet Address</span>
                    <span>Points</span>
                </li>
                {
                    listBoard?.map((item) => (
                        <li 
                            className="flex flex-row justify-between text-[#FFFFFF] text-[9px] lg:text-[14px]"
                            key={item.add}
                        >
                            <span>{item.rank}</span>
                            <span>{addressWalletCompact(item.address)}</span>
                            <span>{item.point}</span>
                        </li>
                    ))
                }
            </ul>

            <div className="flex justify-center mt-[27px]">
                { Number(num_of_page) > 1 && (
                <Pagination
                    className="pagination-bar"
                    currentPage={page}
                    totalCount={num_of_page}
                    pageSize={15}
                    onPageChange={(currentPage) => {
                        onChangeSearch({page:currentPage})
                    }}
                />
                )}
            </div>
        </div>
    )
}

export default Ranking