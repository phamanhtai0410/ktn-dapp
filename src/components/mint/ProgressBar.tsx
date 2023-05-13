import { selectCartItems } from "@/reducers/cartSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProgressBar = () => {

  const listItems = useSelector(selectCartItems)
  const [percent, setPercent] = useState(0);

  useEffect(()=>{
    setPercent((listItems[0]?.total_minted *100) /listItems[0]?.total_supply);
  },[listItems[0]])

  return (

    <div className="py-[36px] ">
      <p className="text-[#A4A4A4] text-center md:text-left">Total Available (Sold/Total)</p>
      <div className="flex flex-col md:flex-row items-center mt-[16px]">
          <p className="text-[#FFFFFF] mr-0 md:mr-[36px] text-[32px] font-extrabold">
              <span className="text-[#F9C306]">{listItems[0]?.total_minted}</span>/{listItems[0]?.total_supply}
          </p>
          <div className="w-[235px] md:w-[392px] mt-[60px] md:mt-[0] h-[10px] rounded-[10px] bg-[#2A3343]">

              <div 
                style={{ width: `${percent}%` }}
                className="relative bg-[#F9C306] h-full rounded-[10px]"
                >
                  <div className="absolute top-[-5px] right-[-5px] w-[20px] h-[20px] p-[4px] bg-[#F9C306] rounded-full">
                      <div className="w-full h-full bg-[#2A3343] rounded-full"></div>
                  </div>
                  <div className="flex absolute top-[-32px] right-[-12px] items-center justify-center px-2 h-[23px] bg-[#354762] rounded-[4px] text-[12px] font-semibold text-[#FFFFFF]">
                      {percent}%
                  </div>
              </div>
              
              {/* <div className="relative flex flex-col h-[20px] bg-[#2A3343] rounded-[10px]">
                <div
                  className="percent-dot mint__progress-bar absolute w-[20px] h-[20px] p-[4px] bg-[#F9C306] rounded-full"
                  style={{ width: `${percent}%` }}
                >
                </div>
                <div className="absolute w-full text-center font-jost font-semibold italic text-xs text-[#23134a]">
                  {percent}%
                </div>
              </div> */}

          </div>
      </div>
  </div>


  )
}

export default ProgressBar
