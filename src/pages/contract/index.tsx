


import './index.scss'

import BtnConnectWithMint from '@/components/mint/BtnConnectWithMint'
import ItemDetailNFT from '@/components/mint/ItemDetailNFT'
import BannerDetailMint from '@/components/mintdetail/BannerDetailMint'


import ForgingCollection from '@/components/mint/ForgingCollection'
import NFTsInfo from '@/components/nfts/NFTsInfo'
import ImageContractDetail from '@/components/contract/ImageContractDetail'
import InfoContractDetail from '@/components/contract/InfoContractDetail'

const Contract = () => {
  
  return (
    <div className="h-fit">
      <div className="banner-wrapper flex flex-col items-center z-[0] w-full overflow-hidden">
        <BannerDetailMint />
      </div>

      <div className="w-full bg-[#11151B]">
        <div className="pb-[64px] md:pb-[0]">

          <div className="bg-minttab w-full flex h-[36px] md:h-[66px] items-center justify-center">
            <p className="text-[#FFFFFF] uppercase text-[11px] md:text-[24px]">
              Minting <span className="text-[#F9C306]">shiba Inu</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row max-w-[1900px] mx-auto bg-[#11151B] md:pt-[113px] pb-[64px] md:pb-[121px] justify-center">
            <ImageContractDetail />

            <div className="md:w-[636px] px-[59px] md:px-0">
              <InfoContractDetail />

              <div className="flex flex-row md:justify-normal justify-between px-[13px] md:px-0 mt-[22px]">
                <ItemDetailNFT />
                <BtnConnectWithMint  />
              </div>
              
            </div>
          </div>
          <ForgingCollection />
          
          <div className='bg-minttab lg:mt-[171px]'>
            <div className="w-full h-auto flex mx-auto max-w-[1900px]">
              <NFTsInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contract
