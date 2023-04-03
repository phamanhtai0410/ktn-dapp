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
      const timeCurrent = moment().valueOf() /1000

      // console.log("timeCurrent",timeCurrent);
      // console.log("startTime",eventWhiteList.start_time);
      // console.log("endTime",eventWhiteList.end_time);

      if(eventWhiteList.start_time < eventWhiteList.start_time){
        return <Countdown eventTime={eventWhiteList.start_time} interval={0} />
      }

      if(eventWhiteList.start_time < timeCurrent && timeCurrent < eventWhiteList.end_time){
        return <Countdown eventTime={eventWhiteList.end_time} interval={0} />
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
