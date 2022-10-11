import Button from '@/components/Partials/Button'
import SelectTokensSymbol from '@/components/Partials/SelectTokensSymbol'
import { useTranslation } from 'react-i18next'
import bg from '../../assets/images/mint/bg.png'
import layer_circle from '../../assets/images/mint/layer_circle.png'
import Countdown from './Countdown'

import './index.scss'

const Mint = () => {
  const { t } = useTranslation()
  return (
    <section className="mint relative text-center whitespace-pre-line bg-black pb-12 h-[2000px]">
      <div className="mint__layer1 relative bg-black w-full flex flex-col items-center h-[2000px]">
        <img src={bg} alt="cart" className="w-full opacity-[0.42]" />
        <div className="absolute mt-24 flex flex-col justify-center z-[1]">
          <span className="font-blome font-bold text-5xl text-[#f8a511]">
            NFT MINtING
          </span>
          <span className="mt-9 font-jost_bold text-2xl text-white">
            katana inu takeru
          </span>
          <span className="mt-3 font-jost_medium text-lg text-[#f8a511]">
            Public sale starting soon
          </span>
          <div className="button mt-4 font-jost_medium w-full px-8 pt-2 pb-1 flex items-center justify-center rounded-[50px]">
            {<Countdown eventTime={1669789211} interval={0} />}
          </div>
        </div>
        <img
          src={layer_circle}
          alt="cart"
          className="absolute top-0 left-0 w-full"
        />
      </div>
    </section>
  )
}
export default Mint
