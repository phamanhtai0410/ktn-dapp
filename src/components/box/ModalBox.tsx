import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

import loadding from '@/assets/images/box/loadding.svg'
import box_item_bg from '@/assets/images/box/box-item-bg.png'
import box_item from '@/assets/images/box/box-item.png'
import ic_close from '@/assets/images/box/Close_round.svg'
import { getBoxByOwner, openBox } from '@/actions/boxActions'
import { useAppDispatch } from '@/app/hooks'
import { useSelector } from 'react-redux'
import { selectBoxAddress, selectOpenBoxStatus, selectOpenNFTs } from '@/reducers/boxSlice'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgba(48, 25, 8, 0.5)',
  border: '2px solid #FFA52C',
  borderRadius: '16px',
  boxShadow: 24,
  backdropFilter: 'blur(25px)',
}
const styleOpenBox = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transition: 'transform .2s',
  transform: 'translate(-50%, -50%) scale(1.2)',
  width: '40%',
  boxShadow: 24,
}

export default function ModalBox({ val, id, CloseModalFunction }) {
  const dispatch = useAppDispatch()
  const openBoxStatus = useSelector(selectOpenBoxStatus)
  const addressBox = useSelector(selectBoxAddress)
  const openNFTs = useSelector(selectOpenNFTs)
  
  const [step, setStep] = React.useState(1)

  const open = async (id) => {
    if (id) {
      await dispatch(openBox({ id }))
      if (addressBox) {
        dispatch(getBoxByOwner({ addressBox }))
      }
    }
  }
  const Close = () => {
    setStep(1)
    CloseModalFunction(false)
  }

  React.useEffect(() => {
    switch (openBoxStatus) {
      case 'pending':
        setStep(2)
        break
      case 'fulfilled':
        setStep(3)
        break
      case 'rejected':
        Close()
        break
      default:
        setStep(1)
        break
    }
  }, [openBoxStatus])

  return (
    <Modal
      open={val}
      onClose={Close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>
        {step === 1 && (
          <Box sx={style}>
            <div className="flex flex-col justify-center items-center px-6 py-[26px]">
              <div
                id="modal-modal-title"
                className="grid grid-cols-3 items-center w-full text-center pb-6 text-[#FFF6DE] font-poppins font-bold text-xl border-b border-[#ffa52c33]"
              >
                <p></p>
                <p>Open Box</p>
                <div className="flex justify-end">
                  <img
                    onClick={Close}
                    className="cursor-pointer"
                    src={ic_close}
                  />
                </div>
              </div>
              <div>
                <p className=" font-poppins font-semibold text-base pt-8 text-[#FFF6DE]">
                  Do you want to open box?
                </p>
              </div>
              <button
                onClick={() => open(id)}
                className="w-full mt-8 py-3 bg-[#FFA52C] font-poppins font-semibold text-[#FFFFFF] rounded-[32px]"
              >
                Open
              </button>
            </div>
          </Box>
        )}
        {step === 2 && (
          <Box sx={style}>
            <div className="flex flex-col justify-center items-center px-6 py-8">
              <img className="box__circle-move" src={loadding} />
              <div
                id="modal-modal-title"
                className="w-full text-center pt-[34px] text-[#FFF6DE] font-poppins font-bold text-xl"
              >
                Opening...
              </div>
              <div
                id="modal-modal-title"
                className="w-full text-center py-[18px] text-[#FFF6DE] font-poppins font-normal text-base"
              >
                Please wait a minute
              </div>
            </div>
          </Box>
        )}

        {(step === 3 && openNFTs) &&  (

          <Box sx={styleOpenBox}>
            <div className="flex justify-center items-center bg-transparent object-contain">
              <div className='w-full'>
              <Swiper
                effect={"fade"}
                grabCursor={true}
                direction="horizontal"     
                // loop={openNFTs.length > 1 ? true : false}
                spaceBetween={20}
                pagination={true}
                autoplay={{ delay: 2000 }}
                scrollbar={{ draggable: true }}
                slidesPerView={1}
                mousewheel= {true}
                className="mySwiper"
                
              >
                  {
                    openNFTs.map(
                      (item, index) =>    
                      <SwiperSlide key={index} >
                          <div className='flex flex-col w-full items-center justify-center h-[380px]'>
                        <img 
                          className="w-[40%] object-scale-down object-center mx-auto"
                          key={item.token_id} 
                          src={item.image} alt="info"
                        />
                      </div>
                      </SwiperSlide>
                     
                    )
                  }
                  </Swiper>
              </div>
              <img className="w-full absolute mix-blend-screen z-[-1]" src={box_item_bg} />
            </div>
          </Box>

        )}
      </div>
    </Modal>
  )
}

function userState(arg0: boolean): [any, any] {
  throw new Error('Function not implemented.')
}
