import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import loadding from '@/assets/images/box/loadding.svg'
import box_item_bg from '@/assets/images/box/box-item-bg.png'
import box_item from '@/assets/images/box/box-item.png'
import ic_close from '@/assets/images/box/Close_round.svg'
import { openBox } from '@/actions/boxActions'
import { useAppDispatch } from '@/app/hooks'
import { useSelector } from 'react-redux'
import { selectOpenBoxStatus } from '@/reducers/boxSlice'

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

  const [step, setStep] = React.useState(1)

  const open = (id) => {
    if (id) {
      dispatch(openBox({ id }))
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
        {step === 3 && (
          <Box sx={styleOpenBox}>
            <div className="flex justify-center items-center bg-transparent object-contain">
              <img
                className="w-full absolute mix-blend-screen"
                src={box_item_bg}
              />
              <img className="w-[80%] z-10 " src={box_item} />
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
