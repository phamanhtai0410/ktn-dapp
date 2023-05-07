import characterIcon from '../../assets/images/landingpage/characters_icon.svg'
import character1 from '../../assets/images/landingpage/character1.png'
import character2 from '../../assets/images/landingpage/character2.png'
import characterIcon1_mobile from '../../assets/images/landingpage/characterIcon1_mobile.png'
import characterIcon2_mobile from '../../assets/images/landingpage/characterIcon2_mobile.png'
characterIcon1_mobile
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
    image_mobile: characterIcon1_mobile,
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
    image_mobile: characterIcon2_mobile,
  },
]
function NFTsGenisis() {
  return (
    <div className="w-full bg-[#090A0C] pt-[32px] pb-[36px] h-[541px] flex justify-center items-center">
      <div className="w-full max-w-[1346px] mx-auto flex md:flex-row gap-y-[112px] flex-col justify-between">
        {genisisNFTs.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-full md:h-[473px] h-[132px] px-[30px] md:px-0 relative flex items-center ${
                item.id == 1 ? 'max-w-[592px]' : 'max-w-[667px]'
              }`}
            >
              <div className="md:w-[564px] w-[266px] bgGenisis flex rounded-[8px] md:px-[48px] px-[19px] py-[17px] md:py-[35px] text-[#FFFFFF]">
                <div className="w-full flex flex-col max-w-[292px] ">
                  <div className="flex justify-between items-center">
                    <div className="w-[28px] h-[36px] flex items-start overflow-hidden">
                      <img
                        height={19}
                        src={characterIcon}
                        alt="character icon"
                        className="object-cover mt-[2px]"
                      />
                    </div>
                    <div className="font-bold text-[12px] md:text-[24px] text-[#F9C306] uppercase">
                      {item.title}
                    </div>
                  </div>
                  <div className="lineGeniss w-full h-[1px] md:my-[14px] my-[6px]">
                    
                  </div>
                  <div className="text-[6px] md:text-[12px] text-[rgba(255,255,255,0.5)] font-medium">
                    {item.content}
                  </div>
                  <div className="mt-[11px] md:mt-[25px]">
                    <div className="text-[12px] md:text-[20px] font-bold">
                      <span className="text-[#F9C306]">{item.price}</span>
                      {item.ntf}
                    </div>
                    <div className="text-[6px] md:text-[12px] font-normal">(2.2BNB)</div>
                  </div>
                  <div className="mt-[12px] md:mt-[35px]">
                    <button className="w-[77px] md:w-[168px] h-[13px] md:h-[27px] bg-[#F9C306] text-center rounded-[5px] uppercase font-bold text-[7px] md:text-[16px] text-[#000000]">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  item.id == 1 ? 'md:w-[282px] w-[133px]' : 'md:w-[337px] w-[155px]'
                } md:h-[473px] h-[224px] absolute right-0`}
              >
                <img src={item.image} alt="character" className='md:flex hidden' />
                <img src={item.image_mobile} alt="character" className='md:hidden flex' />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NFTsGenisis
