import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import bg from '../../assets/images/mint/bg.png'
import layer_circle_box from '../../assets/images/box/layer_circle_box.png'
import box from '../../assets/images/box/Box.png'
import light from '../../assets/images/box/Light.png'
import ic_copy from '../../assets/images/box/ic-copy.svg'
import intro_rate from '../../assets/images/box/intro-rate.png'

import { fetchListNFTs } from '@/actions/nftActions'
import { useAppDispatch } from '@/app/hooks'
import { useParams } from 'react-router'
import { setItemNFTs } from '@/reducers/cartSlice'

import { selectEasyWeb3, selectWalletAccount } from '@/reducers/walletSlice';

import BtnConnectWithMint from '@/components/box/BtnConnectWithBox'
import ItemDetailBOX from '@/components/box/ItemDetailBOX'
import Countdown from '@/components/box/Countdown'
import ProgressBar from '@/components/box/ProgressBar'
import SessionListBox from '@/components/box/SessionListBox'

import './index.scss'
import { getBoxByOwner, initBoxAccount, initLoadBoxInfo, loadBoxRound } from '@/actions/boxActions'
import { useSelector } from 'react-redux'
import { ADDRESS_BOX } from '@/service/web3/constants/config';


const Box = () => {
  const dispatch = useAppDispatch()
  const easyWeb3 = useSelector(selectEasyWeb3)
  console.log(ADDRESS_BOX)

  useEffect(() => {
    if (easyWeb3) {
      fetchLoadBox();
    }
  }, [easyWeb3])

  const fetchLoadBox = async () => {
    await dispatch(initLoadBoxInfo({}))
    await dispatch(initBoxAccount({}))
    await dispatch(loadBoxRound({}))
    await dispatch(getBoxByOwner({}))
  }

  return (
    <section className="mint text-center whitespace-pre-line pb-12 bg-black">
      <div className="box__layer1 relative w-full flex flex-col items-center min-h-[1254px]">
        <div className="mt-36 sm:px-0 px-4 flex flex-col items-center justify-center z-[1]">
          <span className="box__focus-in-expand-fwd font-jost font-extrabold italic text-5xl text-[#f8a511] tracking-widest">
            NFT MINTING
          </span>
          <span className="box__text-focus-in animate-delay-400 mt-[40px] font-jost font-bold text-2xl text-white uppercase">
            katana inu takeru
          </span>
          <span className="box__text-focus-in animate-delay-800 mt-[18px] font-jost font-medium text-lg text-[#f8a511]">
            Public sale starting soon
          </span>
          <div className="box__slide-top animate-delay-1200 md:mx-auto w-full md:w-auto mt-[18px] font-jost font-medium px-12 pt-2.5 pb-1.5 flex items-center justify-center rounded-[50px]">
            {<Countdown eventTime={1669789211} interval={0} />}
          </div>
        </div>

        {/* <div className="mt-12 flex flex-col items-center justify-center object-contain max-w-xl relative bg-box-light">
          <img
            src={box}
            alt="cart"
            className="box__bounce-in-top top-0 left-0  object-cover object-center z-10"
          />
        </div> */}

        <div className="xs:mt-24 w-full min-h-[300px] flex flex-col items-center justify-center object-contain max-w-xl relative">
          <img
            src={light}
            alt="cart"
            className="absolute z-10 mix-blend-screen"
          />
          <img
            src={box}
            alt="cart"
            className="box__bounce-in-top absolute xs:mb-9 sm:mb-0 mb-12  object-cover object-center z-10"
          />
        </div>

        <div className="sm:px-0 px-4 flex flex-col items-center justify-center z-[1]">

          <ItemDetailBOX />

          <BtnConnectWithMint />
          <div className="mt-9 w-full">
            <ProgressBar percent={70} />
            <div className='mt-9'>
              <div className="flex items-center font-poppins font-medium text-[#E2C1AA]">Collection Address:
                <p className="text-[#FFA52C] font-semibold pl-4"> {ADDRESS_BOX} </p>
                <img className="pl-4" src={ic_copy} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SessionListBox />
      <div className="w-full">
        <img className="mx-auto mb-[100px] max-w-[870px]" src={intro_rate} />

      </div>
    </section>
  )
}
export default Box
