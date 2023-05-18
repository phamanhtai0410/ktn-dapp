import { useSelector } from "react-redux"
import EarningsForm from "./EarningsForm"
import LandRarity from "./LandRarity"
import { selectReferralAddress } from "@/reducers/referralSlice"
import { selectUserRank } from "@/reducers/BoardSlice"

const Earnings = ({referralData}) => {

    const userRank = useSelector(selectUserRank)

    return (
        <div className="flex flex-col max-w-[1148px] w-[1148px]">

            <div className="flex flex-row relative bg-[#07080B] gap-x-[31px] py-[42px] px-[32px] w-full h-[437px]  mx-auto">
                <span className="absolute left-[36px] top-[-40px] text-[21px] text-[#F9C306] font-bold uppercase">Affiliate & Earnings</span>
                <div className="bg-[#11151B] rounded-[11px] py-[38px] px-[31px] w-[55%]">
                    <div>
                        <p className="text-[#FFFFFF] font-semibold text-[31px]">Total Earned</p>
                        <p className="mt-[42px] text-center text-[#F9C306] font-bold text-[37px]">
                            { referralData.total_earn ? referralData?.total_earn : '0'} $KATA
                        </p>
                        {/* <p className="text-[21px] mt-[16px] text-center text-[#FFFFFF]">$239,739</p> */}
                    </div>

                    <div className="flex flex-row gap-x-[60px] text-[#F1F1F1] pt-[16px] mt-[31px] border_earning">
                        <div className="flex flex-col gap-y-[21px]">
                            <span className="text-[18px] font-semibold">Your Rank</span>
                            <span className="text-[24px] font-bold">{userRank && userRank > 0 ? userRank : '--'}</span>
                        </div>
                        <div className="flex flex-col gap-y-[21px]">
                            <span className="text-[18px] font-semibold">Your Points</span>
                            <span className="text-[24px] font-bold">{referralData? referralData?.total_earn : '0'}th</span>
                        </div>
                        <div className="flex flex-col gap-y-[21px]">
                            <span className="text-[18px] font-semibold">Referral People</span>
                            <span className="text-[24px] font-bold">160th</span>
                        </div>
                    </div>
                </div>

                <EarningsForm referralData = {referralData} />
            </div>
            
            <div className="flex flex-row bg-[#07080B] gap-x-[31px] mt-[32px] py-[42px] px-[32px] w-full mx-auto">
                <div className="max-w-[500px] text-[#B0B0B0] text-[20px]">
                    <p className="text-[#F9C306] text-[26px] font-semibold	">Rules</p>
                    <ul className="list-disc mt-[24px]">
                        <li>Users will stake MSP Tokens in exchange for points and have a top point ranking to get the right to buy Lands.</li>
                        <li>Each 100 MSP for 1 hour get 10 points.</li>
                        <li>Top 25 will buy Lands.</li>
                        <li>Users who have more than 1000 points but are not at the top will be randomly selected 5 people to buy 1 Common Lands</li>
                        <li>After all people on the whitelist have purchased, the remaining Lands will be sold to those who come first, and will end as soon as all Lands are sold out, each person only can buy 1 Land</li>
                    </ul>
                </div>

                <LandRarity />
            </div>
        
        </div>
    )
}

export default Earnings
