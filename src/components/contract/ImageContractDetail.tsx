

import shiba_inu_detail from '@/assets/images/mintdetail/shiba_inu_detail.png'

const ImageContractDetail = () => {

  return (
    <>
        <div className="relative group bg-[#0D0F14] w-[400px] h-[440px] md:border-[8px] md:border-[#242632] mr-[40px] rounded-[10px]">
            
            <div className="w-full h-full flex justify-center items-center">
            
              <div className='h-[75%]'>
              <img
                    src={shiba_inu_detail}
                    alt="cart"
                    className="mint__bounce-in-top animate-delay-1200 object-cover object-center rounded-[10px] h-full"
                  />
              </div>

            </div>
            
        </div>
    </>
  )
}

export default ImageContractDetail
