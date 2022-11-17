import * as React from 'react'
import box from '../../assets/images/mint/box-img.png'
import ModalBox from '@/components/box/ModalBox'

const ItemNftBox = ({ item }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <div>
      <div className="box px-[24px] flex flex-col items-center text-[#C8A5DD]">
        <div className="mt-[24px] pb-[17px] font-poppins w-full font-semibold border-b border-[#3E0B4C]">
          <p>ID: {item.id.toNumber()}</p>
        </div>
        <div className="mt-[30px]">
          <img src={box} className="w-full" />
        </div>
        <button
          disabled={item.is_opened}
          onClick={handleOpen}
          className={`btn-4 relative w-2/3 mb-[32px] mx-auto mt-[46px] py-3 cursor-pointer font-jost font-medium hover:font-jost hover:font-bold text-base text-[#C690F1] border border-[#661DA0] rounded-[42px] shadow-[inset_0px_0px_16px_0.99px_rgba(102,29,160,0.75)] hover:shadow-[inset_0px_0px_32px_4.99px_rgba(102,29,160,0.95)]`}
        >
          {item.is_opened ? 'Opened' : 'Open Box'}
        </button>
      </div>
      <ModalBox val={open} CloseModalFunction={handleClose} />
    </div>
  )
}

export default ItemNftBox
