import characterIcon from '../../assets/images/landingpage/characters_icon.svg'
import character1 from '../../assets/images/landingpage/character1.png'
import character2 from '../../assets/images/landingpage/character2.png'

const genisisNFTs = [
  {
    id: 1,
    title: 'Arena Genisis NFT',
    icon: characterIcon,
    content:
      'With focus on free2play and play2earn to attract web2 gamers. with focus on free2play and play2earn to attract web2 gamers.',
    price: '150 USD/',
    ntf: 'NFT',
    image: character1,
  },
  {
    id: 2,
    title: 'Arena Genisis NFT',
    icon: characterIcon,
    content:
      'With focus on free2play and play2earn to attract web2 gamers. with focus on free2play and play2earn to attract web2 gamers.',
    price: '150 USD/',
    ntf: 'NFT',
    image: character2,
  },
]
function NFTsGenisis() {
  return (
    <div className="w-full bg-[#090A0C] pt-[32px] pb-[36px] h-[541px] flex justify-center items-center">
      <div className="w-full max-w-[1346px] mx-auto flex justify-between">
        {genisisNFTs.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-full h-[473px] relative flex items-center ${
                item.id == 1 ? 'max-w-[592px]' : 'max-w-[667px]'
              }`}
            >
              <div className="w-[564px] bgGenisis px-[48px] py-[36px] text-[#FFFFFF]">
                <div className="w-full max-w-[292px]">
                  <div className="flex justify-between items-center">
                    <div className="w-[28px] h-[36px] flex items-start overflow-hidden">
                      <img
                        height={19}
                        src={characterIcon}
                        alt="character icon"
                        className="object-cover mt-[2px]"
                      />
                    </div>
                    <div className="font-bold text-[24px] text-[#F9C306] uppercase">
                      {item.title}
                    </div>
                  </div>
                  <div className="w-full h-[1px] my-[14px] bgline"></div>
                  <div className="text-[12px] text-[rgba(255,255,255,0.5)] font-medium">
                    {item.content}
                  </div>
                  <div className="mt-[25px]">
                    <div className="text-[20px] font-bold">
                      <span className="text-[#F9C306]">{item.price}</span>
                      {item.ntf}
                    </div>
                    <div className="text-[12px] font-normal">(2.2BNB)</div>
                  </div>
                  <div className="mt-[35px]">
                    <button className="w-[168px] h-[27px] bg-[#F9C306] text-center rounded-[5px] uppercase font-bold text-[16px] text-[#000000]">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  item.id == 1 ? 'w-[282px]' : 'w-[337px]'
                } h-[473px] absolute right-0`}
              >
                <img src={item.image} alt="character" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NFTsGenisis
