import {
  selectCartItems, selectWhiteListNFT,
} from '@/reducers/cartSlice'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/app/hooks'

import characters_icon from '@/assets/images/mintpage/characters_icon.svg'
import NFTsTime from '../nfts/NFTsTime'
import Countdown from './Countdown'
import moment from 'moment'

const EventNFTDetail = () => {
  const eventWhiteList = useSelector(selectWhiteListNFT) 

  const checkCurrentCountdown = () => {

    if(eventWhiteList){
      const timeCurrent = moment().valueOf()
      const startTime = moment.unix(eventWhiteList.start_time).format('DD-MM-YYYY')
      const endTime = moment.unix(eventWhiteList.end_time).format('DD-MM-YYYY')

      if(Number(startTime) < timeCurrent){
        return <Countdown eventTime={startTime} interval={0} />
      }

      if(Number(startTime) > timeCurrent && timeCurrent < Number(endTime)){
        return <Countdown eventTime={endTime} interval={0} />
      }
      
      return <Countdown eventTime={0} interval={0} />

    }

  }
  return (
    <>
      { eventWhiteList && 
        <div className='my-4'>
          <NFTsTime 
            timeStart={eventWhiteList.start_time} 
            timeEnd={eventWhiteList.end_time} 
            size={20}
          />
        </div>
      }
      {checkCurrentCountdown()}
    </>
  )
}

export default EventNFTDetail
