import { selectLeaderBoard } from "@/reducers/BoardSlice"
import { addressWalletCompact } from "@/utils/util"
import { useSelector } from "react-redux"

const Ranking = () => {

    const listBoard = useSelector(selectLeaderBoard)
    const topAddress = listBoard.slice(0, 3);

    return (
        <div className="bg-[#07080B] relative pt-[46px] px-[18px] w-[500px]">
            <span className="absolute left-[36px] top-[-40px] text-[21px] text-[#F9C306] font-bold uppercase">Ranking</span>
            <p className="text-[21px] font-bold text-[#FFFFFF]">TOp Rankings</p>
            <div className="flex flex-row gap-y-[8px] mt-[35px]">
                {
                    topAddress?.map((item, index) => (
                        <div 
                            className="flex flex-col text-center"
                            key={index}
                        >
                            <div className="relative bg-[#0F1218] text-right px-[7px] text-[#F9F9F9] rounded-[7px] text-[16px] w-[150px] h-[27px]">
                                <span>{addressWalletCompact(item.address)}</span>
                                <span className="absolute left-[-17px] top-[-15px] italic font-bold text-[75px] leading-[75px] text-[#F9C306]">{index+1}</span>
                            </div>
                            <p className="text-[14px] text-[#F9C306] font-bold">Point: 200</p>
                        </div>
                    ))
                }
                
            </div>

            <div className="line_ranking h-[0.81px] mt-[43px] mb-[19px]"></div>

            <ul className="flex flex-col gap-y-[19px]">
                <li className="flex flex-row justify-between text-[#FFFFFF] font-bold text-[14px]">
                    <span>Rank</span>
                    <span>Wallet Address</span>
                    <span>Points</span>
                </li>
                {
                    listBoard?.map((item) => (
                        <li 
                            className="flex flex-row justify-between text-[#FFFFFF] text-[14px]"
                            key={item.add}
                        >
                            <span>{item.rank}</span>
                            <span>{addressWalletCompact(item.address)}</span>
                            <span>{item.point}</span>
                        </li>
                    ))
                }
                
                
            </ul>
        </div>
    )
}

export default Ranking