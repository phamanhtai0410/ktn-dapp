import character from '../../assets/images/landingpage/character.png'

const characterList = [
  {
    title: 'characters',
    price: '150 usd',
    total: '10000',
    image: character,
  },
  {
    title: 'characters',
    price: '150 usd',
    total: '10000',
    image: character,
  },
  {
    title: 'characters',
    price: '150 usd',
    total: '10000',
    image: character,
  },
]
function NFTCharacter() {
  return (
    <div className="w-full bg-[#13121F] pb-[71px]">
      <div className="h-[66px] flex items-center justify-center uppercase text-center font-bold text-[32px] text-[#FFFFFF] bg-[rgba(16,17,36,0.1)] border-y-[3px] border-solid border-slate-900">
        <span className="text-[#F9C306]">CHOOSE your NFTs</span>
        <span className="ml-[10px]">on katana inu game</span>
      </div>
      <div className="w-full gap-x-[34px] px-[30px] justify-between grid md:grid-cols-3">
        {characterList.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full max-w-[485px] flex-col justify-center items-center text-center text-[#FFFFFF]"
            >
              <div className="w-[485px] h-[419px]">
                <img src={item.image} alt="choose character" />
              </div>
              <div className="mt-[21px] text-[32px] font-bold text-[#F9C306] uppercase">
                {item.title}
              </div>
              <div className="w-full h-[1px] mt-[14px] bgline"></div>
              <div className="mt-[20px] flex justify-between w-full max-w-[397px] mx-auto px-[62px]">
                <div>
                  <div className="text-[16px] font-medium">Min Price:</div>
                  <div className="font-normal text-[24px] text-[#F9C306] mt-1 uppercase">
                    {item.price}
                  </div>
                </div>
                <div>
                  <div className="text-[16px] font-medium">Total Supply</div>
                  <div className="mt-1 text-[24px] font-bold">{item.total}</div>
                </div>
              </div>
              <div className="mt-[23px]">
                <button className="w-[202px] h-[33px] bg-[#F9C306] uppercase font-extrabold text-[16px] text-[#11151B] rounded-[5px]">
                  Go to Characters
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NFTCharacter
