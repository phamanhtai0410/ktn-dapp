import { useTranslation } from 'react-i18next'
import './index.scss'

const Staking = () => {
  const { t } = useTranslation()
  return (
    <section className="staking text-center whitespace-pre-line bg-black pb-12">
      <div className="staking__main pt-60 relative bg-black w-full flex flex-col items-center min-h-[1254px]">
        <div className="flex flex-col space-y-4">
          <span className="font-oxanium_bold text-2xl text-[#FFA52C]">
            Stake
          </span>
        </div>
        <div className="absolute mt-40 sm:px-0 px-4 flex flex-col justify-center z-[1]"></div>
      </div>
    </section>
  )
}
export default Staking
