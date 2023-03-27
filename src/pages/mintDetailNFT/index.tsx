import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import bg from '../../assets/images/mint/bg.png'
import layer_circle from '../../assets/images/mint/layer_circle.png'
import './index.scss'

import { fetchDetailNFTs, fetchListNFTs } from '@/actions/nftActions'
import { useAppDispatch } from '@/app/hooks'
import { useParams } from 'react-router'
import { setItemNFTs } from '@/reducers/cartSlice'

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

const MintDetail = () => {

  const { address , id } = useParams()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (address &&  id) {
      fetchCartItems(address,id)
    }
  }, [])

  const fetchCartItems = async (address, nft_id) => {
    const itemsCart = await dispatch(fetchDetailNFTs({ address, nft_id }))
    if (itemsCart) {
      dispatch(setItemNFTs(itemsCart.payload.items))
    }
  }

  return (
    <div className='min-h-screen'>

      <div className="banner-wrapper lg:flex hidden flex-col items-center z-[0] w-full">
          <BannerDetailMint />
      </div>

    <div className="max-w-[1900px] mx-auto bg-[#11151B]">

        <div className="bg-minttab w-full h-[66px] flex items-center justify-center">
            <p className="text-[#FFFFFF] uppercase text-[24px]">Minting <span className="text-[#F9C306]">shiba Inu</span></p>
        </div>

        <div className="flex flex-col md:flex-row bg-[#11151B] md:pt-[113px] pb-[64px] md:pb-[315px] justify-center">
            
            <ImageNFTDetail />

            <div className="md:w-[636px] px-[16px] md:px-0">

                <InfoNFTDetail />
                  
                {<Countdown eventTime={1669789211} interval={0} />}

                <ProgressBar percent={70} />

                <SummaryItemsCart />

                <FrmPromotionCodeMint />

                <div className="flex flex-row mt-[22px]">
                  
                    <ItemDetailNFT />

                    <BtnConnectWithMint />

                </div>

            </div>
            
        </div>
    </div>
    
</div>
  )
}
export default MintDetail
