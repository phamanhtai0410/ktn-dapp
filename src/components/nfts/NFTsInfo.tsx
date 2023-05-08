
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import pose_viewport from '@/assets/images/mintpage/pose_viewport.svg'
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
      <div className="bg-no-repeat lg:bg-[length:100%_100%] bg-cover bg-[url('../../assets/images/mintpage/layer_bg.png')]">
        
        <div className='md:relative flex flex-col md:h-[221px] w-full mx-auto max-w-[1900px]'>
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
              className="w-[498px] h-[321px] md:absolute top-[-100px] left-[250px]"
            />
        </motion.div>

          <div className="md:absolute flex flex-col px-[16px] md:px-0 md:top-[52px] md:right-[610px]">
            <p className="mb-[16px] text-[#D0D4EA] font-semibold text-[20px]">
              Don’t miss our latest News
            </p>
            <div className="relative z-10 text-[#D0D4EA] w-full md:w-[424px]">
              <FormSubscribe />
            </div>
          </div>
        </div>

        <div className=" bg-no-repeat lg:bg-[length:100%_100%] md:mt-0 mt-[64px]  bg-cover bg-[url('../../assets/images/mintpage/layout_bg_footer.jpg')]">
          <div className='relative flex py-0 px-0 mx-auto h-auto md:h-[440px] w-full max-w-[1900px]'>

            <img src={bg_info_mobile} alt="" className="flex md:hidden" />
            <div className="flex flex-col items-center md:items-start absolute left-[20px] md:left-[200px] top-[155px] md:top-[91px]">
              <div className="flex flex-col max-w-[735px]">
                <h3 className="text-[19px] md:text-[30px] font-semibold text-[#FFFFFF]">
                  Katana Inu is a
                  <span className="text-[#F9C306]"> MMO NFT PC Game</span>
                </h3>
                <p className="text-[#D0D4EA] text-[12px] md:text-[20px]">
                  with focus on free2play and play2earn to attract web2 gamers.{' '}
                </p>
              </div>
              <div className="flex max-w-[530px] mt-[11px] md:mt-[28px] mb-[9px] md:mb-[39px]">
                <p className="text-[#D0D4EA] text-[7px] md:text-[16px]">
                  Check for Katana Inu Ecosystem for Renting, Staking, our
                  Marketplace or for purchasing our $Kata Token:
                </p>
              </div>
              <div className="flex flex-row md:gap-x-[24px] gap-x-[10px] gap-y-[24px] md:gap-y-0">

                <button className="btn flex items-center justify-between h-[25px] md:h-[56px] pl-[4px] md:pl-[24px] pr-[4px] md:pr-[12px] rounded-[100px] group">
                  <span className="mr-[10px] text-[7px] md:text-[16px]">NFT Staking</span>
                  <div className="flex items-center justify-center bg-[#15103C] rounded-full w-[18px] md:w-[40px] h-[18px] md:h-[40px]">

                  <div className="relative">
                    <img
                      src={arrow_up_right_hover}
                      alt="arrow_up_right_small"
                      className="w-[17px] md:w-[40px] h-[17px] md:h-[40px] group-hover:opacity-0"
                    />
                    <img 
                      src={arrow_up_right_small}
                      className="w-[17px] md:w-[40px] h-[17px] md:h-[40px] opacity-0 group-hover:opacity-100 duration-700 delay-200 absolute top-0 left-0"
                    />
                  </div>

                  </div>
                </button>

                <BtnModalBuyToken />

                <button className="btn flex items-center justify-between h-[25px] md:h-[56px] pl-[4px] md:pl-[24px] pr-[4px] md:pr-[12px] rounded-[100px] group">
                  <span className="mr-[10px] text-[7px] md:text-[16px]">
                    Go to Kainu.io Marketplace{' '}
                  </span>
                  <div className="flex items-center justify-center bg-[#15103C] rounded-full w-[18px] md:w-[40px] h-[18px] md:h-[40px]">
                   
                  <div className="relative">
                    <img
                      src={arrow_up_right_hover}
                      alt="arrow_up_right_small"
                      className="w-[17px] md:w-[40px] h-[17px] md:h-[40px] group-hover:opacity-0"
                    />
                    <img 
                      src={arrow_up_right_small}
                      className="w-[17px] md:w-[40px] h-[17px] md:h-[40px] opacity-0 group-hover:opacity-100 duration-700 delay-200 absolute top-0 left-0"
                    />
                  </div>
                  </div>
                </button>

              </div>
            </div>

            <img
              src={doge_footer}
              alt="doge_footer"
              className="alltuchtopdown md:absolute md:flex hidden w-[700px] h-[700px] md:bottom-0 right-[32px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTsInfo
