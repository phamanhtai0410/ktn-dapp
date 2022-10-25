import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import bg from '../../assets/images/mint/bg.png'
import layer_circle from '../../assets/images/mint/layer_circle.png'

import Countdown from './Countdown'

import './index.scss'
import ProgressBar from './ProgressBar'
import { fetchListNFTs } from '@/actions/nftActions'
import { useAppDispatch } from '@/app/hooks'
import { setItemNFTs } from '@/reducers/cartSlice'
import BtnConnectWithMint from '@/components/mint/BtnConnectWithMint'
import ItemDetailNFT from './ItemDetailNFT'

const Mint = () => {

  const { id } = useParams()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(id){
      fetchCartItems(id);
    }
  }, [])

  const fetchCartItems = async (nft_id) => {

    const itemsCart = await dispatch(fetchListNFTs({
      nft_id
    }))

    if(itemsCart){
        dispatch(setItemNFTs(itemsCart.payload.items))
    }

  }

  return (
    <section className="mint text-center whitespace-pre-line bg-black pb-12">
      <div className="mint__layer1 relative bg-black w-full flex flex-col items-center min-h-[1254px]">
        <img
          src={bg}
          alt="cart"
          className="w-full opacity-[0.42] object-cover object-center md:min-h-[1354px] min-h-[1054px]"
        />
        <div className="absolute mt-40 sm:px-0 px-4 flex flex-col items-center justify-center z-[1]">
          <span className="mint__focus-in-expand-fwd font-blome font-bold text-5xl text-[#f8a511] tracking-widest">
            NFT MINtING
          </span>
          <span className="mint__text-focus-in animate-delay-400 mt-9 font-jost font-bold text-2xl text-white uppercase">
            katana inu takeru
          </span>
          <span className="mint__text-focus-in animate-delay-800 mt-3 font-jost font-medium text-lg text-[#f8a511]">
            Public sale starting soon
          </span>
          <div className="mint__slide-top animate-delay-1200 md:mx-auto w-full md:w-auto mt-4 font-jost font-medium px-12 pt-2.5 pb-1.5 flex items-center justify-center rounded-[50px]">
            {<Countdown eventTime={1669789211} interval={0} />}
          </div>
          <ItemDetailNFT />
          <BtnConnectWithMint />
          <div className="mt-[60px] w-full">
            <ProgressBar percent={70} />
          </div>
        </div>
        <img
          src={layer_circle}
          alt="cart"
          className="absolute top-0 left-0 w-full md:min-h-[1354px] min-h-[1154px]"
        />
      </div>
    </section>
  )
}
export default Mint
