import * as React from 'react';
import box from '../../assets/images/mint/box-img.png'
import './index.scss'
import icHr from '@/assets/images/footer/f_hr_shadow.png'
import ModalBox from '@/components/box/ModalBox'

const SessionListBox = () => {
    const Listbox = [
        { img: box, id: 123456 },
        { img: box, id: 123456 },
        { img: box, id: 123456 }
    ]
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className='container mx-auto my-20 relative'>
            <div className="flex items-center justify-center absolute w-full top-[-40px] ">
                <img className="w-full h-16" src={icHr} />
                <hr className="" />
            </div>
            <div className='grid grid-cols-3 gap-20 pt-14'>
                {Listbox.map((item, index) => (
                    <div key={index} className="box px-[24px] flex flex-col items-center text-[#C8A5DD]">
                        <div className='mt-[24px] pb-[17px] font-poppins w-full font-semibold border-b border-[#3E0B4C]'>
                            <p>ID: {item.id}</p>
                        </div>
                        <div className='mt-[30px]'>
                            <img src={item.img} className="w-full" />
                        </div>
                        <button onClick={handleOpen} className={`relative w-2/3 mb-[32px] mx-auto mt-[46px] py-3 cursor-pointer font-jost font-medium hover:font-jost hover:font-bold text-base text-[#C690F1] border border-[#661DA0] rounded-[42px] shadow-[inset_0px_0px_16px_0.99px_rgba(102,29,160,0.75)] hover:shadow-[inset_0px_0px_32px_4.99px_rgba(102,29,160,0.95)]`}>
                            Open Box
                        </button>
                    </div>
                ))}
            </div>
            <ModalBox val={open} CloseModalFunction={handleClose}/>
        </div>
    )
}

export default SessionListBox