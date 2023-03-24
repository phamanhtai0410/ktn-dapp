const ProgressBar = (Props) => {
  const { percent } = Props
  return (
    <div className="relative flex flex-col h-4 border border-[#fca500] rounded-[50px]">
      <div
        className="percent-dot mint__progress-bar absolute flex items-center justify-end top-0 left-0 h-full rounded-[50px]"
        style={{ width: `${percent}%` }}
      ></div>
      <div className="absolute w-full text-center font-jost font-semibold italic text-xs text-[#23134a]">
        {percent}%
      </div>
      {/* <img src={ball} alt="cart" className="absolute top-[-32px] right-0" /> */}
    </div>
  )
}

export default ProgressBar
