import box from '../../assets/images/mint/box-img.png'
import './index.scss'

const SessionListBox = () => {
    const Listbox = [
        { img: box, id: 123456 },
        { img: box, id: 123456 },
        { img: box, id: 123456 }
    ]
    return (
        <div className='container mx-auto'>
            <div className='line'></div>
            <div className='grid grid-cols-3 gap-20'>
                {Listbox.map((item, index) => (
                    <div key={index} className="box px-[24px] flex flex-col items-center text-[#C8A5DD]">
                        <div className='mt-[24px] pb-[17px] font-poppins w-full font-semibold border-b border-[#3E0B4C]'>
                            <p>ID: {item.id}</p>
                        </div>
                        <div className='mt-[30px]'>
                            <img src={item.img} className="w-full" />
                        </div>
                        <button className={`w-2/3 mb-[32px] mx-auto mt-[46px] py-3 cursor-pointer font-jost font-medium hover:font-jost hover:font-bold text-base text-[#C690F1] border border-[#661DA0] rounded-[42px] shadow-[inset_0px_0px_16px_0.99px_rgba(102,29,160,0.75)] hover:shadow-[inset_0px_0px_32px_4.99px_rgba(255,187,66,0.95)]`}>
                            Open Box
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SessionListBox