import pose_viewport from '@/assets/images/mintpage/pose_viewport.svg'
import arrow_up_right_small from '@/assets/images/mintpage/arrow_up_right_small.svg'
import doge_footer from '@/assets/images/mintpage/doge_footer.png'

const NFTsInfo = () => {
  return (
    <div className="w-full">
      <div className="md:relative flex flex-col md:h-[221px] w-full bg-no-repeat lg:bg-[length:100%_100%] bg-cover bg-[url('../../assets/images/mintpage/layer_bg.png')]">
        <img
          src={pose_viewport}
          alt="pose_viewport"
          className="w-[498px] h-[321px] md:absolute top-[-100px] left-[250px]"
        />

        <div className="md:absolute flex flex-col px-[16px] md:px-0 md:top-[52px] md:right-[260px]">
          <p className="mb-[16px] text-[#D0D4EA] font-semibold text-[20px]">
            Don’t miss our latest News
          </p>
          <div className="relative">
            <input
              className=" flex bg-[#242731] rounded-[28px] w-full md:w-[424px] h-[56px] p-[16px]"
              type="text"
              placeholder="Email address"
            ></input>
            <div className="absolute top-[8px] right-[8px] flex items-center justify-between w-[126px] h-[40px] bg-[#F9C306] pl-[12px] pr-[8px] rounded-[20px]">
              <span>Subscribe</span>
              <div className="flex items-center justify-center bg-[#15103C] rounded-full w-[36px] h-[36px]">
                <img
                  src={arrow_up_right_small}
                  alt="arrow_up_right_small"
                  className="w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex h-[440px] w-full bg-no-repeat lg:bg-[length:100%_100%] bg-cover bg-[url('../../assets/images/mintpage/layout_bg_footer.jpg')]">
        <div className="flex flex-col md:absolute left-[200px] top-[91px]">
          <div className="flex flex-col max-w-[735px]">
            <h3 className="text-[30px] font-semibold text-[#FFFFFF]">
              Katana Inu is a
              <span className="text-[#F9C306]"> MMO NFT PC Game</span>
            </h3>
            <p className="text-[#D0D4EA] text-[20px]">
              with focus on free2play and play2earn to attract web2 gamers.{' '}
            </p>
          </div>
          <div className="flex max-w-[530px] mt-[28px] mb-[39px]">
            <p className="text-[#D0D4EA] text-[16px]">
              Check for Katana Inu Ecosystem for Renting, Staking, our
              Marketplace or for purchasing our $Kata Token:
            </p>
          </div>
          <div className="flex md:flex-row flex-col">
            <div className="mr-[24px] flex items-center justify-between h-[56px] bg-[#F9C306] pl-[12px] pr-[8px] rounded-[100px]">
              <span className="mr-[10px] text-[16px]">NFT Staking</span>
              <div className="flex items-center justify-center bg-[#15103C] rounded-full w-[40px] h-[40px]">
                <img
                  src={arrow_up_right_small}
                  alt="arrow_up_right_small"
                  className="w-auto"
                />
              </div>
            </div>
            <div className="mr-[24px] flex items-center justify-between h-[56px] bg-[#F9C306] pl-[12px] pr-[8px] rounded-[100px]">
              <span className="mr-[10px] text-[16px]">Buy $Kata Token</span>
              <div className="flex items-center justify-center bg-[#15103C] rounded-full w-[40px] h-[40px]">
                <img
                  src={arrow_up_right_small}
                  alt="arrow_up_right_small"
                  className="w-auto"
                />
              </div>
            </div>
            <div className="mr-[24px] flex items-center justify-between h-[56px] bg-[#F9C306] pl-[12px] pr-[8px] rounded-[100px]">
              <span className="mr-[10px] text-[16px]">
                Go to Kainu.io Marketplace{' '}
              </span>
              <div className="flex items-center justify-center bg-[#15103C] rounded-full w-[40px] h-[40px]">
                <img
                  src={arrow_up_right_small}
                  alt="arrow_up_right_small"
                  className="w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <img
          src={doge_footer}
          alt="doge_footer"
          className="md:absolute flex w-[700px] h-[700px] md:bottom-0 right-[32px]"
        />
      </div>
    </div>
  )
}

export default NFTsInfo
