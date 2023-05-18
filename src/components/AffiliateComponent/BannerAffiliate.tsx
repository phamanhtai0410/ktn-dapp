

import imgBannerMobile from '@/assets/images/mintdetail/img_banner_detail_mobile.png'
import banner_affiliate from '@/assets/images/affiliate/banner_affiliate.png'

const BannerAffiliate = () => {
  return (
    <div className="relative w-full flex items-center justify-center bg-no-repeat overflow-hidden">
      <img src={banner_affiliate} alt="" className='w-full hidden md:flex object-cover lg:max-h-[420px] xl:max-h-[470px]'/>
      <img src={imgBannerMobile} alt="" className='w-full h-full md:hidden flex' />
      <div>
        <div className="absolute right-[17%] md:right-[22%] top-0 md:top-[14%] h-full flex flex-row items-center justify-center space-x-80 2xl:space-x-[440px]">
          <h1 className="text-white text-[14px] md:text-2xl font-normal uppercase whitespace-pre-line">
            Let'<span className='normal-case'>s</span>{'\r\n'} 
            <span className='text-[20px] md:text-5xl font-extrabold text-[#F9C306]'>Share{'\r\n'}</span>
            <span className="text-[20px] md:text-4xl font-extrabold text-[#F9C306]">
              & gain more
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default BannerAffiliate
