import moment from 'moment'

function NFTsTime({ timeStart, timeEnd, size = 12 }) {
  const timeCurrent = moment().valueOf()
  const startTime = moment.unix(timeStart).format('DD-MM-YYYY')
  const hourStart = moment.unix(timeStart).format('h:mm a')
  const endTime = moment.unix(timeEnd).format('DD-MM-YYYY')
  const hourEnd = moment.unix(timeEnd).format('h:mm a')

  return (
    <div className={`text-[${size}px]`}>
      {timeCurrent < timeStart ? (
        <p className="font-medium text-[#A4A4A4]">
          {startTime} - Starting At
          <span className="uppercase"> {hourStart}</span>
        </p>
      ) : timeCurrent > timeStart && timeCurrent < timeEnd ? (
        <p className="font-medium text-[#A4A4A4]">
          {endTime} - Ending At<span className="uppercase"> {hourEnd}</span>
        </p>
      ) : timeCurrent > timeEnd ? (
        <p className="font-medium text-[12px] text-[#A4A4A4]">
          {endTime} - End At<span className="uppercase"> {hourEnd}</span>
        </p>
      ) : (
        ''
      )}
    </div>
  )
}

export default NFTsTime
