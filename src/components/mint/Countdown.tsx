import { useCallback, useEffect, useRef, useState } from 'react'
import moment from 'moment'

const calculateDuration = (eventTime) =>
  moment.duration(
    Math.max(eventTime - Math.floor(Date.now() / 1000), 0),
    'seconds',
  )

const Countdown = ({ eventTime, interval }) => {
  const [duration, setDuration] = useState<any>(calculateDuration(eventTime))

  const timerRef = useRef<any>(0)

  const timerCallback = useCallback(() => {
    setDuration(calculateDuration(eventTime))
  }, [eventTime])

  useEffect(() => {
    if (eventTime) {
      timerRef.current = setInterval(timerCallback, interval)
      return () => {
        clearInterval(timerRef.current)
      }
    }
  }, [eventTime])

  const pad = (n) => (n < 10 ? `0${n}` : n)

  if (eventTime && duration._milliseconds === 0) {
  //  window.location.reload()
  }

  return (
    <>
      <div className="flex items-center bg-countdown w-[425px] py-4 px-6 rounded-xl gap-[60px]">
        <div className="flex flex-col items-center ">
          <span id="day" className="font-jost text-[#F9C306] text-[36px]">
            {eventTime ? pad(duration.days()) : '00'}
          </span>
          <span className="font-jost font-light text-[#F9C306] text-[14px] leading-[16px]">
            DAYS
          </span>
     
        </div>

        <div className="flex flex-col items-center">
          <span id="hour" className="font-jost text-[#F9C306] text-[36px]">
              {eventTime ? pad(duration.hours()) : '00'}
          </span>
          <span className="font-jost font-light text-[#F9C306] text-[14px] leading-[16px]">
            HOURS
          </span>
          
        </div>

        <div className="flex flex-col items-center">
          <span
              id="minute"
              className="font-jost text-[#F9C306] text-[36px]"
            >
            {eventTime ? pad(duration.minutes()) : '00'}
          </span>
          <span className="font-jost font-light text-[#F9C306] text-[14px] leading-[16px]">
            MINUTES
          </span>
          
        </div>

        <div className="flex flex-col items-center">
          <span
              id="second"
              className="font-jost text-[#f8a511] text-[36px]"
            >
              {eventTime ? pad(duration.seconds()) : '00'}
            </span>
            <span className="font-jost font-light text-[#bfaca5] text-xs leading-[16px]">
              SECONDS
            </span>
        </div>
      </div>
    </>
  )
}

export default Countdown
