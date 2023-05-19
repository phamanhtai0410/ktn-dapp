import BannerAffiliate from "@/components/AffiliateComponent/BannerAffiliate"
import Earnings from "@/components/AffiliateComponent/Earnings"
import Ranking from "@/components/AffiliateComponent/Ranking"
import './index.scss'
import NFTsInfo from "@/components/nfts/NFTsInfo"
import { useAppDispatch } from "@/app/hooks"
import { useEffect } from "react"
import { fetchLeaderBoard } from "@/actions/nftActions"
import { useSelector } from "react-redux"
import { selectLeaderBoard, selectLeaderBoardTop3 } from "@/reducers/BoardSlice"
import { selectWalletAccount } from "@/reducers/walletSlice"
import { fetchReferralAddress, fetchUserRank } from "@/actions/affiliateActions"
import { selectReferralAddress, selectReferralRefCode } from "@/reducers/referralSlice"
import { fetchReferralCode } from "@/actions/userActions"

const filter = {
    page_size: 15,
    page: 1
}

const Affiliate = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        fetchBoard()
    }, [])

    const fetchBoard = async () => {
      await dispatch(fetchLeaderBoard(filter))
    }

    // const listBoardTrend = useSelector(selectLeaderBoard)
    const topAddress = useSelector(selectLeaderBoardTop3)

    const walletAccount = useSelector(selectWalletAccount);

    useEffect(() => {
        if (walletAccount) {
            fetchReferralAddress(walletAccount)
        }
    }, [walletAccount])

    const fetchReferralAddress = (address) => {
        if (address) {
          dispatch(fetchReferralCode({ address }))
        }
    }

    const referralData = useSelector(selectReferralAddress)

    useEffect(() => {
        if (walletAccount) {
          dispatch(fetchUserRank({ event: 'top_referral', search: walletAccount }))
        }
    }, [walletAccount])

    return (
        <div className="h-fit">
            <div className="banner-wrapper flex flex-col items-center z-[0] w-full overflow-hidden">
                <BannerAffiliate />
            </div>
            <div className="w-full bg-[#11151B]">
                <div className="">

                    <div className="bg-minttab w-full flex h-[36px] md:h-[66px] items-center justify-center">
                        <p className="text-[#F9C306] uppercase font-extrabold text-[11px] md:text-[24px]">
                            Affiliate Dashboard
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full bg-[#11151B]">
                <div className="flex mx-auto justify-center flex-col lg:flex-row w-auto gap-x-[32px] bg-[#11151B] pt-[90px] pb-[150px]">
                    <Earnings referralData={referralData} />
                    <Ranking topAddress = {topAddress} />
                </div>
                
            </div>
            

            <div className='bg-minttab'>
            <div className="w-full h-auto flex mx-auto max-w-[1900px]">
              <NFTsInfo />
            </div>
          </div>

        </div>
    )
}

export default Affiliate