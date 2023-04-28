import MintBanner from '../mint/MintBanner'
import './index.scss'
import shiba_inu_detail from '@/assets/images/mintdetail/shiba_inu_detail.png'
import characters_icon from '@/assets/images/mintpage/characters_icon.svg'
import bnb_icon from '@/assets/images/mintpage/bnb_icon.svg'
import BannerDetailMint from './BannerDetailMint'

const MintDetail = () => {
  return (
    <div className="min-h-screen">
      <div className="banner-wrapper lg:flex hidden flex-col items-center z-[0] w-full overflow-hidden">
        <BannerDetailMint />
      </div>
      <div className="w-full bg-[#11151B]">
        <div className="max-w-[1900px] mx-auto">
          <div className="bg-minttab w-full h-[66px] flex items-center justify-center">
            <p className="text-[#FFFFFF] uppercase text-[24px]">
              Minting <span className="text-[#F9C306]">shiba Inu</span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row bg-[#11151B] md:pt-[113px] pb-[64px] md:pb-[315px] justify-center">
            <div className="bg-[#0D0F14] w-[400px] h-[440px] md:border-[8px] md:border-[#242632] mr-[40px] rounded-[10px]">
              <img
                src={shiba_inu_detail}
                alt="shiba_inu_detail"
                className="rounded-[10px]"
              />
            </div>

            <div className="md:w-[636px] px-[16px] md:px-0">
              <div className="mt-[24px] md:mt-0 flex flex-row items-center">
                <img src={characters_icon} alt="characters_icon" />
                <p className="font-extrabold text-[40px] leading-[40px] text-[#FFFFFF] mx-[20px]">
                  Shiba<span className="text-[#F9C306]"> Inu</span>
                </p>
                <div className="flex items-center justify-center bg-[#282D34] text-[#FFFFFF] text-[16px] w-[95px] h-[29px] border-[0.2px] border-[#F9C306] rounded-[12px]">
                  <p>Lootbox</p>
                </div>
              </div>
              <p className="text-[#FFFFFF] font-medium text-[24px] py-[20px]">
                21.10.2021 - starting at 06:00 PM CET
              </p>
              <div className="py-[25px] border-y-[0.5px] border-[#C7C7C7]">
                <div className="flex w-full md:w-[70%] flex-row justify-between py-[16px] px-[46px] rounded-[12px] bg-[#142031]">
                  <div className="text-[#F9C306] flex flex-col">
                    <span className="text-[36px] font-medium">2</span>
                    <span className="text-[14px]">DAYS</span>
                  </div>
                  <div className="text-[#F9C306] flex flex-col">
                    <span className="text-[36px] font-medium">06</span>
                    <span className="text-[14px]">HOURS</span>
                  </div>
                  <div className="text-[#F9C306] flex flex-col">
                    <span className="text-[36px] font-medium">2</span>
                    <span className="text-[14px]">Mints</span>
                  </div>
                  <div className="text-[#F9C306] flex flex-col">
                    <span className="text-[36px] font-medium">06</span>
                    <span className="text-[14px]">Secs.</span>
                  </div>
                </div>
              </div>

              <div className="py-[36px] border-b-[0.5px] border-[#C7C7C7]">
                <p className="text-[#A4A4A4]">Total Available (Sold/Total)</p>
                <div className="flex flex-row items-center mt-[16px]">
                  <p className="text-[#FFFFFF] mr-[36px] text-[32px] font-extrabold">
                    <span className="text-[#F9C306]">0000</span>/6000
                  </p>
                  <div className="w-[392px] h-[10px] rounded-[10px] bg-[#2A3343]">
                    <div className="relative w-[50%] bg-[#F9C306] h-full rounded-[10px]">
                      <div className="absolute top-[-5px] right-[-5px] w-[20px] h-[20px] p-[4px] bg-[#F9C306] rounded-full">
                        <div className="w-full h-full bg-[#2A3343] rounded-full"></div>
                      </div>
                      <div className="flex absolute top-[-32px] right-[-12px] items-center justify-center w-[34px] h-[23px] bg-[#354762] rounded-[4px] text-[12px] font-semibold text-[#FFFFFF]">
                        50%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row mt-[32px]">
                <div className="mr-[124px]">
                  <p className="text-[26px] font-bold text-[#FFFFFF]">
                    <span className="text-[#F9C306]">Price</span>/mint:
                  </p>
                  <div className="flex flex-row mt-[18px]">
                    <img
                      src={bnb_icon}
                      alt=""
                      className="w-[24px] h-[20px] mr-[4px]"
                    />
                    <div className="bg-[#282D34] flex items-center justify-center px-[9px] h-[19px] text-[#FFFFFF] font-bold text-[14px] border-[0.2px] border-[#F9C306] rounded-[12px]">
                      BNB Chain
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[32px] font-bold text-[#F9C306]">
                    254 USD
                  </p>
                  {/* <p className="text-[#FFFFFF] text-[24px]">(2.2 BNB)</p> */}
                </div>
              </div>

              <div className="relative mt-[32px] md:w-[404px] h-[42px]">
                <input
                  type="text"
                  placeholder="Add promo code here"
                  className=" input-detail w-full p-[12px] h-full rounded-[5px]"
                />
                <div className="apply-button-detail absolute top-[6.5px] right-[6.5px] flex items-center justify-center w-[85px] h-[28px] text-[#FFFFFF] rounded-[5px]">
                  Apply
                </div>
              </div>
              <div className="flex flex-row mt-[22px]">
                <div className="flex flex-row justify-between items-center px-[40px] text-[24px] text-[#FFFFFF] py-[10px] w-[154px] h-[42px] rounded-[5px] border border-[#F9C306]">
                  <p className="">-</p>
                  <p className="font-bold  text-[#F9C306]">3</p>
                  <p>+</p>
                </div>
                <div className="flex items-center ml-[10px] justify-center w-[210px] text-[24px] text-[#11151B] font-extrabold h-[43px] bg-[#F9C306] rounded-[5px] uppercase cursor-pointer">
                  MINT NOw
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MintDetail
