import character from '../../assets/images/landingpage/character.png'
import { useNavigate } from 'react-router-dom'

function NFTsCharacterList({ data }) {
  const navigate = useNavigate()
  return (
    <div className="w-full gap-x-[34px] px-[30px] justify-between grid md:grid-cols-3">
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full lg:max-w-[485px] flex-col justify-center items-center text-center text-[#FFFFFF]"
          >
            <div className="lg:w-[485px] h-[419px]">
              <img src={character} alt="choose character" />
            </div>
            <div className="mt-[21px] text-[32px] font-bold text-[#F9C306] uppercase">
              {item.name}
            </div>
            <div className="w-full h-[1px] mt-[14px] bgline"></div>
            <div className="mt-[20px] flex justify-between w-full max-w-[397px] mx-auto px-[62px]">
              <div>
                <div className="text-[16px] font-medium">Min Price:</div>
                <div className="font-normal text-[24px] text-[#F9C306] mt-1 uppercase">
                  {item.min_price} USD
                </div>
              </div>
              <div>
                <div className="text-[16px] font-medium">Total Supply</div>
                <div className="mt-1 text-[24px] font-bold">
                  {item.total_supply}
                </div>
              </div>
            </div>
            <div className="mt-[23px]">
              <button
                onClick={() => {
                  navigate('/nfts')
                }}
                className="w-[202px] h-[33px] bg-[#F9C306] uppercase font-extrabold text-[16px] text-[#11151B] rounded-[5px]"
              >
                Go to {item.name}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default NFTsCharacterList
