import Button from '@/components/Partials/Button'
import SelectTokensSymbol from '@/components/Partials/SelectTokensSymbol'
import { useTranslation } from 'react-i18next'
import bg from '../../assets/images/mint/bg.png'
import layer_circle from '../../assets/images/mint/layer_circle.png'
import circle1 from '../../assets/images/mint/circle1.png'
import circle2 from '../../assets/images/mint/circle2.png'
import char from '../../assets/images/mint/char.png'
import arrow_left from '../../assets/images/mint/arrow_left.png'
import arrow_right from '../../assets/images/mint/arrow_right.png'

import Countdown from './Countdown'

import './index.scss'
import ProgressBar from './ProgressBar'

const Mint = () => {
  const { t } = useTranslation()
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
          <div className="mint__slide-top animate-delay-1200 md:mx-auto w-full md:w-auto mt-4 font-jost font-medium px-12 pt-2 pb-1 flex items-center justify-center rounded-[50px]">
            {<Countdown eventTime={1669789211} interval={0} />}
          </div>
          {/* <div className="relative xl:mt-[72px] mt-6 xl:w-[493px] xl:h-[493px] w-auto h-auto"> */}
          <div className="relative xl:mt-[72px] mt-12  w-[363px]  h-[363px]">
            <img
              src={circle1}
              alt="cart"
              className="mint__circle-move-reverse absolute top-[-3.5px] left-0 w-full opacity-[0.3] shadow-[1px_1px_100px_#fff] mix-blend-screen rounded-full"
            />
            <img
              src={circle2}
              alt="cart"
              className="mint__circle-move absolute top-0 left-0 w-full mix-blend-hard-light rounded-full"
            />
            <img
              src={char}
              alt="cart"
              className="mint__bounce-in-top animate-delay-1200 absolute w-[451px] h-[369px]"
            />
          </div>
          <div className="flex flex-row mt-14 items-center justify-between">
            <span className="font-jost_semibold text-lg text-white">
              Balance : 0 NFTs
            </span>
            <span className="font-jost_semibold text-lg text-white">
              Max : 50 NFTs
            </span>
          </div>
          <div className="flex flex-row mt-6 px-5 items-center justify-center border border-[#82510a] rounded-[42px] shadow-[inset_0_0_7px_rgba(251,163,1,0.23)]">
            <img
              src={arrow_left}
              alt="cart"
              className="cursor-pointer hover:scale-125"
            />
            <input className="sm:w-[388px] w-[230px] mx-8 bg-[#3f2d28] font-jost font-bold text-2xl text-[#fca500] rounded-[5px] my-3 py-3 focus:outline-none text-center px-4 shadow-[inset_1.5px_2.598px_5px_0px_rgba(0,0,0,0.1)]" />
            <img
              src={arrow_right}
              alt="cart"
              className="cursor-pointer hover:scale-125"
            />
          </div>
          <span className="mt-6 font-jost_semibold text-lg text-white text-center">
            Cost : 0.003 ETH
          </span>
          <div className="w-3/4 mx-auto mt-6 py-4 cursor-pointer font-jost font-medium hover:font-jost hover:font-bold text-2xl text-[#fca500] border border-[#82510a] rounded-[42px] shadow-[inset_0px_0px_16px_0.99px_rgba(255,187,66,0.75)] hover:shadow-[inset_0px_0px_32px_4.99px_rgba(255,187,66,0.95)]">
            MINT
          </div>
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
