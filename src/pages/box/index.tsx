import { useEffect } from 'react'
import box from '../../assets/images/box/Box.png'
import light from '../../assets/images/box/Light.png'
import ic_copy from '../../assets/images/box/ic-copy.svg'
import intro_rate from '../../assets/images/box/intro-rate.png'

import { useAppDispatch } from '@/app/hooks'
import { selectEasyWeb3 } from '@/reducers/walletSlice'

import FrmPromotionCodeBox from '@/components/box/FrmPromotionCode'
import BtnConnectWithMint from '@/components/box/BtnConnectWithBox'
import ItemDetailBOX from '@/components/box/ItemDetailBOX'
import Countdown from '@/components/box/Countdown'
import ProgressBar from '@/components/box/ProgressBar'
import SessionListBox from '@/components/box/SessionListBox'

import './index.scss'
import {
  fetchDetailBox,
  getBoxByOwner,
  initBoxAccount,
  initLoadBoxInfo,
  loadBoxRound,
} from '@/actions/boxActions'
import { useSelector } from 'react-redux'
import { copyTextToClipboard, randomKeyUUID } from '@/_helpers/utils/lib'
import { addAlert } from '@/reducers/alert'
import {
  selectBoxAddress,
  setBoxAddress,
  setBoxPrice,
  setItemBox,
} from '@/reducers/boxSlice'

const Box = () => {

  const dispatch = useAppDispatch()
  const easyWeb3 = useSelector(selectEasyWeb3)
  const addressBox = useSelector(selectBoxAddress)

  useEffect(() => {
    if (easyWeb3 && addressBox) {
      fetchLoadBox(addressBox)
    }
  }, [easyWeb3, addressBox])

  useEffect(() => {
    fetchLoadBoxDetail()
  }, [])

  const fetchLoadBox = async (addressBox) => {
    await dispatch(initLoadBoxInfo({ addressBox }))
    await dispatch(initBoxAccount({ addressBox }))
    await dispatch(loadBoxRound({ addressBox }))
    await dispatch(getBoxByOwner({ addressBox }))
  }

  const copyAddress = (address) => {
    copyTextToClipboard(address)
    dispatch(
      addAlert({
        type: 'success',
        key: randomKeyUUID(),
        message: {
          status: 'success',
          title: 'Copied!',
        },
      }),
    )
  }

  const fetchLoadBoxDetail = async () => {
    const boxDetail = await dispatch(fetchDetailBox())
    if (boxDetail) {
      await dispatch(setBoxPrice(boxDetail.payload.price))
      await dispatch(setBoxAddress(boxDetail.payload.address))
      await dispatch(setItemBox([boxDetail.payload]))
    }
  }

  return (
    <section className="text-center whitespace-pre-line pb-12 bg-black">
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
          
          <FrmPromotionCodeBox />

          <ItemDetailBOX />

          <BtnConnectWithMint />

          <div className="mt-9 w-full">
            <ProgressBar />
            <div className="mt-9">
              <div className="flex sm:flex-row flex-col justify-center items-center font-poppins font-medium text-[#E2C1AA]">
                Collection Address:
                <p className="text-[#FFA52C] font-semibold sm:pl-4">
                  {' '}
                  {addressBox}{' '}
                </p>
                <img
                  className="pl-4 cursor-pointer"
                  src={ic_copy}
                  onClick={() => copyAddress(addressBox)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SessionListBox />
      <div className="w-full">
        <img className="sm:mx-auto px-4 mb-[100px] w-full max-w-[870px]" src={intro_rate} />
      </div>
    </section>
  )
}
export default Box
