const ProgressBar = (Props) => {
  const { percent } = Props
  return (

    <div className="py-[36px] border-b-[0.5px] border-[#C7C7C7]">
      <p className="text-[#A4A4A4]">Total Available (Sold/Total)</p>
      <div className="flex flex-row items-center mt-[16px]">
          <p className="text-[#FFFFFF] mr-[36px] text-[32px] font-extrabold">
              <span className="text-[#F9C306]">0000</span>/6000
          </p>
          <div className="w-[392px] h-[10px] rounded-[10px] bg-[#2A3343]">
              {/* <div className="relative w-[50%] bg-[#F9C306] h-full rounded-[10px]">
                  <div className="absolute top-[-5px] right-[-5px] w-[20px] h-[20px] p-[4px] bg-[#F9C306] rounded-full">
                      <div className="w-full h-full bg-[#2A3343] rounded-full"></div>
                  </div>
                  <div className="flex absolute top-[-32px] right-[-12px] items-center justify-center w-[34px] h-[23px] bg-[#354762] rounded-[4px] text-[12px] font-semibold text-[#FFFFFF]">
                      50%
                  </div>
              </div> */}
              <div className="relative flex flex-col h-4 border border-[#fca500] rounded-[50px]">
                <div
                  className="percent-dot mint__progress-bar absolute flex items-center justify-end top-0 left-0 h-full rounded-[50px]"
                  style={{ width: `${percent}%` }}
                ></div>
                <div className="absolute w-full text-center font-jost font-semibold italic text-xs text-[#23134a]">
                  {percent}%
                </div>
              </div>
          </div>
      </div>
  </div>


  )
}

export default ProgressBar
