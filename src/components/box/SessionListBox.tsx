import * as React from 'react'
import './index.scss'
import icHr from '@/assets/images/footer/f_hr_shadow.png'
import { useSelector } from 'react-redux'
import { selectBoxOwnerItems } from '@/reducers/boxSlice'
import ItemNftBox from './ItemNftBox'
import ModalBox from './ModalBox'

const Sessiondata = () => {
  
  const boxOwnerItems = useSelector(selectBoxOwnerItems)

  const [open, setOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState(null)

  const handleOpen = (id) => {
    if (id) {
      setOpen(true)
      setOpenId(id)
    }
  }

  const handleClose = () => {
    setOpen(false)
    setOpenId(null)
  }

  return (
    <div className="container mx-auto my-20 relative">
      <div className="flex items-center justify-center w-full top-[-40px] ">
        <img className="w-full h-16" src={icHr} />
        <hr className="" />
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-20 pt-14">
        {boxOwnerItems?.map((item, index) => (
          <ItemNftBox
            key={index}
            item={item}
            openId={openId}
            handleOpen={handleOpen}
          />
        ))}
      </div>
      <ModalBox val={open} id={openId} CloseModalFunction={handleClose} />
    </div>
  )
}

export default Sessiondata
