import { openModalAwaiting, selectIMessageModalAwaiting, selectIsSuccessModalAwaiting } from '@/reducers/modalAwaitingSlice'
import Modal from 'react-modal'
import { ClockLoader } from 'react-spinners'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import {  selectIsOpenModalAwaiting } from '@/reducers/modalAwaitingSlice'

import IcClose from '../../assets/images/partials/ic_close.svg'
import IcSuccess from '../../assets/images/partials/ic_success.svg'

import { useEffect } from 'react'

const customStyles = {
  content: {
    border: '1px solid #FFA52C',
    background: 'rgba(48, 25, 8, 0.3)',
    backdropFilter: 'blur(25px)',
  },
}

const ModalAwaiting = () => {

  const dispatch = useAppDispatch()

  const isOpen = useAppSelector(selectIsOpenModalAwaiting)
  const isSuccess = useAppSelector(selectIsSuccessModalAwaiting)
  const message = useAppSelector(selectIMessageModalAwaiting)

  const closeModal = () => {
    console.log("closeModal",isSuccess);
    if(isSuccess){
      dispatch(openModalAwaiting({ 
        isOpen: false ,
        isSuccess: false,
        message: ""
      }));
    }
  }

  useEffect(()=>{

    if(isSuccess){
      setTimeout(() => {
        closeModal()
      }, 5000);
    }

  },[isSuccess])

  return (
    <div className="flex items-start relative">
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
        className="katana-modal lg:p-8 p-6 flex flex-col rounded-2xl sm:w-[460px] w-[340px]"
        overlayClassName="katana-modal-overlay"
        >
        <div className="flex flex-col">

          <div className="w-full my-4">
              <div className="flex flex-col items-center space-y-2">
                {isSuccess ? <img src={IcSuccess} className="w-12 h-12"/> : <ClockLoader color="#FFA540" loading={isOpen} size={55} />}
              </div>
              <div className="flex flex-col items-center space-y-4 mt-8">
                <div className="font-jost font-semibold w-full text-align text-center text-2xl text-[#FFF6DE] ">
                  { message }
                </div>
                <p className='text-[#E2C1AA] text-base font-poppins text-center'>Please wait a minute</p>
              </div>
          </div>
          
        </div>
      </Modal>
    </div>
  )
}

export default ModalAwaiting
