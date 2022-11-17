import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import loadding from '@/assets/images/box/loadding.svg'
import box_item_bg from '@/assets/images/box/box-item-bg.png'
import box_item from '@/assets/images/box/box-item.png'


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'rgba(48, 25, 8, 0.5)',
    border: '2px solid #FFA52C',
    borderRadius: "16px",
    boxShadow: 24,
    backdropFilter: "blur(25px)"
};
const styleOpenBox = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transition: 'transform .2s',
    transform: 'translate(-50%, -50%) scale(1.2)',
    width: "40%",
    boxShadow: 24,
};

export default function ModalBox({ val, CloseModalFunction }) {
    const [openbox, setopentbox] = React.useState(false);
    const [openboxsuccess, setopentboxsuccess] = React.useState(false);

    const open = () => {
        setopentbox(true)
        setTimeout(
            function () {
                setopentboxsuccess(true)
            },
            2000
        );
    }
    const Close = () => {
        setopentbox(false)
        setopentboxsuccess(false)
        CloseModalFunction(false)
    }
    return (
        <div>
            <Modal
                open={val}
                onClose={Close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {openboxsuccess ?
                    (<Box sx={styleOpenBox}>
                        <div className='flex items-center bg-transparent object-contain'>

                            <img className='w-full absolute mix-blend-screen' src={box_item_bg} />
                            <img className='w-full z-10 ' src={box_item} />

                        </div>
                    </Box>)
                    :
                    (<Box sx={style}>

                        {openbox && !openboxsuccess &&
                            (<div className='flex flex-col justify-center items-center px-6 py-8'>
                                <img className='box__circle-move' src={loadding} />
                                <div id="modal-modal-title" className="w-full text-center pt-[34px] text-[#FFF6DE] font-poppins font-bold text-xl">
                                    Opening...
                                </div>
                                <div id="modal-modal-title" className="w-full text-center py-[18px] text-[#FFF6DE] font-poppins font-normal text-base">
                                    Please wait a minute
                                </div>
                            </div>)
                        }
                        {!openbox && !openboxsuccess &&
                            (<div className='flex flex-col justify-center items-center px-6 py-[26px]'>
                                <div id="modal-modal-title" className="w-full text-center pb-6 text-[#FFF6DE] font-poppins font-bold text-xl border-b border-[#ffa52c33]">
                                    Open Box
                                </div>
                                <div>
                                    <p className=' font-poppins font-semibold text-base pt-8 text-[#FFF6DE]'>Do you want to open box?</p>
                                </div>
                                <button onClick={open} className='w-full mt-8 py-3 bg-[#FFA52C] rounded-[32px]'>
                                    Open
                                </button>
                            </div>)}
                    </Box>)


                }
            </Modal>
        </div>
    );
}

function userState(arg0: boolean): [any, any] {
    throw new Error('Function not implemented.');
}
