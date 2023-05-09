
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import pose_viewport from '@/assets/images/mintpage/pose_viewport.svg'
import pose_viewport_mobile from '@/assets/images/mintpage/pose_viewport_mobile.png'
import arrow_up_right_small from '@/assets/images/mintpage/arrow_up_right_small.svg'
import arrow_up_right_hover from '@/assets/images/mintpage/arrow_up_right_hover.svg'


import doge_footer from '@/assets/images/mintpage/doge_footer.png'
import FormSubscribe from '../footer/FormSubscribe'
import { BtnModalBuyToken } from './modalBuyToken/BtnModalBuyToken'
import { useEffect } from 'react'
import bg_info_mobile from '@/assets/images/mintpage/bg_info_mobile.png'


const variantBox = {
  visible: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 2 }
  },
  hidden: { opacity: 0}
}

const NFTsInfo = () => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div className="w-full bg-[#13121F]">
      <div className="line-color"></div>
      <div className="bg-no-repeat lg:bg-[length:100%_100%] bg-cover lg:bg-[url('../../assets/images/mintpage/layer_bg.png')]">
        
        <div className="relative bg-[url('../../assets/images/mintpage/layer_bg.png')] bg-cover lg:bg-transparent flex flex-row h-[69px] lg:h-[221px] w-full mx-auto max-w-[1900px]">
          <motion.div
            ref={ref}
            variants={variantBox}
            initial="hidden"
            animate={control}
            transition={{ ease: "easeOut", duration: 2 }}
          >
          <img
              src={pose_viewport}
              alt="pose_viewport"
              className="w-[498px] h-[321px] absolute lg:flex hidden lg:top-[-100px] lg:left-[5%]"
            />

          <img
              src={pose_viewport_mobile}
              alt="pose_viewport"
              className="w-[151px] h-[97px] absolute left-0 bottom-0 flex lg:hidden"
            />
        </motion.div>

          <div className="absolute flex flex-col px-[16px] lg:px-0 lg:top-[52px] top-[10px] right-[35px] lg:left-[40%]">
            <p className="mb-[7px] lg:mb-[16px] text-[#D0D4EA] font-semibold text-[9px] lg:text-[20px]">
              Don’t miss our latest News
            </p>
            <div className="relative z-10 text-[#D0D4EA] w-[181px] lg:w-[424px]">
              <FormSubscribe />
            </div>
          </div>
        </div>

        <div className=" bg-no-repeat lg:bg-[length:100%_100%] bg-cover bg-[url('../../assets/images/mintpage/layout_bg_footer.jpg')]">
          <div className='relative flex py-0 px-0 mx-auto h-auto lg:h-[440px] w-full max-w-[1900px]'>

            <img src={bg_info_mobile} alt="" className="flex lg:hidden w-full" />
            <div className="flex flex-col items-center lg:items-start w-[351px] lg:w-auto absolute lg:left-[35%] lg:top-[32%] nfts-info-abs">
              <div className="flex flex-col max-w-[735px]">
                <h3 className="text-[19px] lg:text-[30px] font-semibold text-[#FFFFFF]">
                  Katana Inu is a
                  <span className="text-[#F9C306]"> MMO NFT PC Game</span>
                </h3>
                <p className="text-[#D0D4EA] text-[12px] lg:text-[20px]">
                  with focus on free2play and play2earn to attract web2 gamers.{' '}
                </p>
              </div>
              <div className="flex max-w-[530px] mt-[11px] lg:mt-[28px] mb-[9px] lg:mb-[39px]">
                <p className="text-[#D0D4EA] text-[7px] lg:text-[16px]">
                  Check for Katana Inu Ecosystem for Renting, Staking, our
                  Marketplace or for purchasing our $Kata Token:
                </p>
              </div>
              <div className="flex flex-row lg:gap-x-[24px] gap-x-[10px] gap-y-[24px] lg:gap-y-0">

                <button className="btn flex items-center justify-between text-[7px] lg:text-[16px] h-[25px] lg:h-[56px] pl-[4px] lg:pl-[24px] pr-[4px] lg:pr-[12px] rounded-[100px] group">
                  <span className="ld:mr-[10px] text-[7px] lg:text-[16px]">NFT Staking</span>
                  <div className="flex items-center justify-center bg-[#15103C] rounded-full w-[18px] lg:w-[40px] h-[18px] lg:h-[40px]">

                    <div className="relative">
                      <img
                        src={arrow_up_right_hover}
                        alt="arrow_up_right_small"
                        className="w-[17px] lg:w-[40px] h-[17px] lg:h-[40px] group-hover:opacity-0"
                      />
                      <img 
                        src={arrow_up_right_small}
                        className="w-[17px] lg:w-[40px] h-[17px] lg:h-[40px] opacity-0 group-hover:opacity-100 duration-700 delay-200 absolute top-0 left-0"
                      />
                    </div>

                  </div>
                </button>

                <BtnModalBuyToken />

                <button className="btn flex items-center justify-between h-[25px] lg:h-[56px] pl-[4px] lg:pl-[24px] pr-[4px] lg:pr-[12px] rounded-[100px] group">
                  <span className="ld:mr-[10px] text-[7px] lg:text-[16px]">
                    Go to Kainu.io Marketplace{' '}
                  </span>
                  <div className="flex items-center justify-center bg-[#15103C] rounded-full w-[18px] lg:w-[40px] h-[18px] lg:h-[40px]">
                   
                  <div className="relative">
                    <img
                      src={arrow_up_right_hover}
                      alt="arrow_up_right_small"
                      className="w-[17px] lg:w-[40px] h-[17px] lg:h-[40px] group-hover:opacity-0"
                    />
                    <img 
                      src={arrow_up_right_small}
                      className="w-[17px] lg:w-[40px] h-[17px] lg:h-[40px] opacity-0 group-hover:opacity-100 duration-700 delay-200 absolute top-0 left-0"
                    />
                  </div>
                  </div>
                </button>

              </div>
            </div>

            <img
              src={doge_footer}
              alt="doge_footer"
              className="alltuchtopdown lg:absolute lg:flex hidden w-[700px] h-[700px] lg:bottom-0 lg:left-[49%]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTsInfo
