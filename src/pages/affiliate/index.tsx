import BannerAffiliate from "@/components/AffiliateComponent/BannerAffiliate"
import Earnings from "@/components/AffiliateComponent/Earnings"
import Ranking from "@/components/AffiliateComponent/Ranking"
import './index.scss'
import NFTsInfo from "@/components/nfts/NFTsInfo"
import { useAppDispatch } from "@/app/hooks"
import { useEffect } from "react"
import { fetchLeaderBoard } from "@/actions/nftActions"
import { useSelector } from "react-redux"
import { selectLeaderBoard } from "@/reducers/BoardSlice"

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

    const listBoardTrend = useSelector(selectLeaderBoard)
    const topAddress = listBoardTrend.slice(0, 3);

    return (
        <div className="h-fit">
            <div className="banner-wrapper flex flex-col items-center z-[0] w-full overflow-hidden">
                <BannerAffiliate />
            </div>
            <div className="w-full bg-[#11151B]">
                <div className="pb-[64px] md:pb-[0]">

                <div className="bg-minttab w-full flex h-[36px] md:h-[66px] items-center justify-center">
                    <p className="text-[#F9C306] uppercase font-extrabold text-[11px] md:text-[24px]">
                        Affiliate Dashboard
                    </p>
                </div>
                </div>
            </div>

            <div className="w-full bg-[#11151B]">
                <div className="flex mx-auto justify-center flex-row w-auto gap-x-[32px] bg-[#11151B] pt-[90px] pb-[150px]">
                    <Earnings />
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