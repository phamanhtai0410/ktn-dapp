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
    <div className="flex flex-row items-center">
      <div className="flex flex-col items-center">
        <span className="font-jost font-light text-[#bfaca5] text-xs leading-[16px]">
          DAYS
        </span>
        <span id="day" className="font-jost font-bold text-[#f8a511] text-2xl">
          {eventTime ? pad(duration.days()) : '00'}
        </span>
      </div>

      <div className="flex flex-col items-center ml-10">
        <span className="font-jost font-light text-[#bfaca5] text-xs leading-[16px]">
          HOURS
        </span>
        <span id="hour" className="font-jost font-bold text-[#f8a511] text-2xl">
          {eventTime ? pad(duration.hours()) : '00'}
        </span>
      </div>

      <div className="flex flex-col items-center ml-8">
        <span className="font-jost font-light text-[#bfaca5] text-xs leading-[16px]">
          MINUTES
        </span>
        <span
          id="minute"
          className="font-jost font-bold text-[#f8a511] text-2xl"
        >
          {eventTime ? pad(duration.minutes()) : '00'}
        </span>
      </div>

      <div className="flex flex-col items-center ml-6">
        <span className="font-jost font-light text-[#bfaca5] text-xs leading-[16px]">
          SECONDS
        </span>
        <span
          id="second"
          className="font-jost font-bold text-[#f8a511] text-2xl"
        >
          {eventTime ? pad(duration.seconds()) : '00'}
        </span>
      </div>
    </div>
  )
}

export default Countdown
