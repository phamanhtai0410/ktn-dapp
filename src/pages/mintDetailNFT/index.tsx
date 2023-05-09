import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import bg from '../../assets/images/mint/bg.png'
import layer_circle from '../../assets/images/mint/layer_circle.png'
import './index.scss'

import { fetchDetailNFTs, fetchListCHAINS, fetchListNFTs } from '@/actions/nftActions'
import { useAppDispatch } from '@/app/hooks'
import { useParams } from 'react-router'
import { setItemNFTs, setUserByNFT } from '@/reducers/cartSlice'

import BtnConnectWithMint from '@/components/mint/BtnConnectWithMint'
import ItemDetailNFT from '@/components/mint/ItemDetailNFT'
import Countdown from '@/components/mint/Countdown'
import ProgressBar from '@/components/mint/ProgressBar'
import BannerDetailMint from '@/components/mintdetail/BannerDetailMint'

import characters_icon from '@/assets/images/mintpage/characters_icon.svg'
import SummaryItemsCart from '@/components/mint/SummaryItemsCart'
import ImageNFTDetail from '@/components/mint/ImageNFTDetail'
import FrmPromotionCodeMint from '@/components/mint/FrmPromotionCode'
import InfoNFTDetail from '@/components/mint/InfoNFTDetail'
import { useSelector } from 'react-redux'
import { selectWalletAccount } from '@/reducers/walletSlice'
import EventNFTDetail from '@/components/mint/EventNFTDetail'
import DetailNFTSale from '@/components/mint/DetailNFTSale'
import ForgingCollection from '@/components/mint/ForgingCollection'
import NFTsInfo from '@/components/nfts/NFTsInfo'

const MintDetail = () => {
  const { address, id } = useParams()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const accountAddress = useSelector(selectWalletAccount)

  useEffect(() => {
    if (address && id) {
      fetchCartItems(address, id)
    }
  }, [])
  useEffect(() => {
    fetchChains()
  }, [])

    
  const fetchChains = async () => {
    await dispatch(fetchListCHAINS({}))
  }


  const fetchCartItems = async (address, nft_id) => {
    const itemsCart = await dispatch(fetchDetailNFTs({ address, nft_id }))
    if (itemsCart) {
      dispatch(setItemNFTs(itemsCart.payload.items))
    }
  }

  // const fetchNFTByUserCart = async (address, nft_id, user_address) => {
  //   const itemsCart = await dispatch(
  //     fetchDetailNFTs({ address, nft_id, user_address }),
  //   )
  //   if (itemsCart) {
  //     dispatch(setUserByNFT(itemsCart.payload.items))
  //   }
  // }

  return (
    <div className="h-fit">
      <div className="banner-wrapper flex flex-col items-center z-[0] w-full overflow-hidden">
        <BannerDetailMint />
      </div>

      <div className="w-full bg-[#11151B]">
        <div className="pb-[64px] md:pb-[171px]">

          <div className="bg-minttab w-full flex h-[36px] md:h-[66px] items-center justify-center">
            <p className="text-[#FFFFFF] uppercase text-[11px] md:text-[24px]">
              Minting <span className="text-[#F9C306]">shiba Inu</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row max-w-[1900px] mx-auto bg-[#11151B] md:pt-[113px] pb-[64px] md:pb-[121px] justify-center">
            <ImageNFTDetail />

            <div className="md:w-[636px] px-[59px] md:px-0">
              <InfoNFTDetail />

              <EventNFTDetail />

              <ProgressBar />

              <SummaryItemsCart />

              <FrmPromotionCodeMint />

              <div className="flex flex-row md:justify-normal justify-between px-[13px] md:px-0 mt-[22px]">
                <ItemDetailNFT />
                <BtnConnectWithMint  />
                
              </div>
              <DetailNFTSale />
              
            </div>
          </div>
          <ForgingCollection />
          
          <div className='bg-minttab lg:mt-[171px]'>
            <div className="w-full h-auto flex mx-auto max-w-[1900px]">
              <NFTsInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MintDetail
