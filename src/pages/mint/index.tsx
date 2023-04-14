import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import bg from '../../assets/images/mint/bg.png'
import layer_circle from '../../assets/images/mint/layer_circle.png'
import './index.scss'

import { fetchListNFTs } from '@/actions/nftActions'
import { useAppDispatch } from '@/app/hooks'
import { useParams } from 'react-router'
import { setItemNFTs } from '@/reducers/cartSlice'

import BtnConnectWithMint from '@/components/mint/BtnConnectWithMint'
import ItemDetailNFT from '@/components/mint/ItemDetailNFT'
import Countdown from '@/components/mint/Countdown'
import ProgressBar from '@/components/mint/ProgressBar'


const Mint = () => {

  const { id } = useParams()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (id) {
      fetchCartItems(id)
    }
  }, [])

  const fetchCartItems = async (nft_id) => {
    const itemsCart = await dispatch(fetchListNFTs({ nft_id }))
    if (itemsCart) {
      dispatch(setItemNFTs(itemsCart.payload.items))
    }
  }

  return (
    <section className="mint text-center whitespace-pre-line bg-black pb-12">
      <div className="mint__layer1 relative bg-black w-full flex flex-col items-center min-h-[1254px]">
        <img
          src={bg}
          alt="cart"
          className="w-full opacity-[0.42] object-cover object-center md:max-h-[1354px] min-h-[1054px]"
        />
        <img
          src={layer_circle}
          alt="cart"
          className="absolute top-0 opacity-[0.522] left-0 w-full md:min-h-[1354px] min-h-[1154px]"
        />
        <div className="absolute mt-36 sm:px-0 px-4 flex flex-col items-center justify-center z-[1]">
          <span className="mint__focus-in-expand-fwd font-jost font-extrabold italic text-5xl text-[#f8a511] tracking-widest">
            NFT MINTING
          </span>
          <span className="mint__text-focus-in animate-delay-400 mt-[40px] font-jost font-bold text-2xl text-white uppercase">
            katana inu takeru
          </span>
          <span className="mint__text-focus-in animate-delay-800 mt-[18px] font-jost font-medium text-lg text-[#f8a511]">
            Public sale starting soon
          </span>
          <div className="mint__slide-top animate-delay-1200 md:mx-auto w-full md:w-auto mt-[18px] font-jost font-medium px-12 pt-2.5 pb-1.5 flex items-center justify-center rounded-[50px]">
            {<Countdown eventTime={1669789211} interval={0} />}
          </div>
          <ItemDetailNFT />
          <BtnConnectWithMint />
          <div className="mt-9 w-full">
            <ProgressBar />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Mint
