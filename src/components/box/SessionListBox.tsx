import * as React from 'react'
import './index.scss'
import icHr from '@/assets/images/footer/f_hr_shadow.png'
import { useSelector } from 'react-redux'
import { selectBoxOwnerItems } from '@/reducers/boxSlice'
import ItemNftBox from './ItemNftBox'

const Sessiondata = () => {
  const boxOwnerItems = useSelector(selectBoxOwnerItems)
  React.useEffect(() => {}, [boxOwnerItems])



  return (
    <div className="container mx-auto my-20 relative">
      <div className="flex items-center justify-center absolute w-full top-[-40px] ">
        <img className="w-full h-16" src={icHr} />
        <hr className="" />
      </div>
      <div className="grid grid-cols-3 gap-20 pt-14">
        {boxOwnerItems?.map((item, index) => (
          <ItemNftBox key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Sessiondata
