import NFTsUpcomingItem from './NFTsUpcomingItem'

const NFTsUpcomingList = ({ data, showMore, setShowMore }) => {
  return (
    <div className="w-full">
      {showMore ? (
        <div className="grid w-full px-[16px] md:px-[39px] gap-x-[34px] gap-y-[56px] md:grid-cols-4 h-auto ">
          {data?.map((item, index) => {
            return <NFTsUpcomingItem data={item} key={index} />
          })}
        </div>
      ) : (
        <div className="grid w-full px-[16px] md:px-[39px] gap-x-[34px] gap-y-[56px] md:grid-cols-4 h-auto ">
          {data?.slice(0, 4).map((item, index) => {
            return <NFTsUpcomingItem data={item} key={index} />
          })}
        </div>
      )}
    </div>
  )
}

export default NFTsUpcomingList
