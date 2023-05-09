import { useState } from 'react';
import Modal from 'react-modal'
import arrow_up_right_small from '@/assets/images/mintpage/arrow_up_right_small.svg'
import arrow_up_right_hover from '@/assets/images/mintpage/arrow_up_right_hover.svg'
import './index.scss'


const customStyles = {
    content: {
        display:'flex',
        flexDirection: 'column',
        border: '1px solid rgba(0,0,0,.2)',
        borderRadius: '16px',
        backdropFilter: 'blur(25px)',
        backgroundColor: '#0c0b0bc4',
        backgroundClip:'padding-box',
        padding:"3rem",
        width: '490px',
        height:'fit-content',
        transition: 'transform 0.8s ease-in-out',
    },
}

export const BtnModalBuyToken = () => {

    const [show, setShow] = useState(false) ;
    console.log(show);

    const showModal = (status:boolean) => {
        setShow(status)
      }

    return (
        <>
            <button onClick={()=>setShow(true)} className="btn flex items-center justify-between h-[25px] lg:h-[56px] bg-[#F9C306] pl-[4px] lg:pl-[24px] pr-[4px] lg:pr-[12px] rounded-[100px] cursor-pointer group">
                <span className="lg:mr-[10px] mr-[4px] text-[7px] lg:text-[16px]">Buy $Kata Token</span>
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

            <Modal
             isOpen={show}
             ariaHideApp={true}
             onRequestClose={()=>{showModal(false)}}
             style={customStyles}
             className="katana-modal lg:p-8 p-6 flex flex-col rounded-2xl sm:w-[460px] w-[340px]"
             overlayClassName="katana-modal-overlay"
             aria-labelledby="contained-modal-title-vcenter"
             aria-describedby="modal-modal-description"
            >
                <div className='modal-content'>
                    <div className='modal-body-ktn'>
                        <p><a className='btn d-block bg-amin py-[10px] px-[33px]' href='https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15&chain=mainnet' rel='noreferrer' target='_blank'>Uniswap</a></p>
                        <p><a className='btn d-block bg-juicy-grass py-[10px] px-[33px]' href='https://pancakeswap.finance/swap?outputCurrency=0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205' rel='noreferrer' target='_blank'>Pancake Swap</a></p>
                        <p><a className='btn d-block bg-yellow-mango py-[10px] px-[33px]' href='https://www.bitmart.com/trade/en?symbol=KATA_USDT' rel='noreferrer' target='_blank'>Bitmart</a></p>
                        <p><a className='btn d-block bg-ohhappiness py-[10px] px-[33px]' href='https://www.hotbit.io/exchange?symbol=KATA_USDT' rel='noreferrer' target='_blank'>Hotbit</a></p>
                        <p><a className='btn d-block bg-sea-lord py-[10px] px-[33px]' href='https://www.probit.com/app/exchange/KATA-USDT' rel='noreferrer' target='_blank'>Probit</a></p>
                        <p><a className='btn d-block bg-crystalline py-[10px] px-[33px]' href='https://www.digifinex.com/en-ww/trade/USDT/KATA' rel='noreferrer' target='_blank'>DIGIFINEX</a></p>
                        <p><a className='btn d-block bg-cherry-blossom py-[10px] px-[33px]' href='https://www.mexc.com/de-DE/exchange/KATA_USDT' rel='noreferrer' target='_blank'>MEXC</a></p>
                    </div>
                </div>
            
            </Modal>
        </>
    )
}
