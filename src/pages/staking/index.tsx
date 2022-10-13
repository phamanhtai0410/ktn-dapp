import { useTranslation } from 'react-i18next'
import './index.scss'
import IcRank from '../../assets/images/staking/ic_rank.svg'
import IcStaked from '../../assets/images/staking/ic_staked.svg'
import IcLock from '../../assets/images/staking/ic_lock.svg'
import IcTop1 from '../../assets/images/staking/ic_top1.svg'
import IcTop2 from '../../assets/images/staking/ic_top2.svg'
import IcTop3 from '../../assets/images/staking/ic_top3.svg'
import Pagination from '@/components/Partials/Pagination'

const Staking = () => {
  const { t } = useTranslation()
  const tableData = [
    { rank: 1, address: '0x5d07...eba9', point: 3851300 },
    { rank: 1, address: '0x5d07...eba9', point: 3851300 },
    { rank: 1, address: '0x5d07...eba9', point: 3851300 },
    { rank: 1, address: '0x5d07...eba9', point: 3851300 },
    { rank: 1, address: '0x5d07...eba9', point: 3851300 },
    { rank: 1, address: '0x5d07...eba9', point: 3851300 },
    { rank: 1, address: '0x5d07...eba9', point: 3851300 },
    { rank: 1, address: '0x5d07...eba9', point: 3851300 },
    { rank: 1, address: '0x5d07...eba9', point: 3851300 },
    { rank: 1, address: '0x5d07...eba9', point: 3851300 },
  ]
  const tableHead = [
    {
      className:
        'font-poppins font-semibold text-base text-white text-center w-[10%] py-[10px]',
      name: '#',
    },
    {
      className:
        'font-poppins font-semibold text-base text-white text-center w-[20%]',
      name: 'Land Rarity',
    },
    {
      className:
        'font-poppins font-semibold text-base text-white text-center w-[50%]',
      name: 'Number of people can buy',
    },
    {
      className:
        'font-poppins font-semibold text-base text-white text-center w-[20%]',
      name: 'Total residents',
    },
  ]
  const tableBody = [
    { id: 'Tier 1', rarity: 'Epic', no: '4', total: '400' },
    { id: 'Tier 2', rarity: 'Rare', no: '6', total: '240' },
    { id: 'Tier 3', rarity: 'Common', no: '20', total: '700' },
    { id: 'Tier 4', rarity: 'Common', no: '6', total: '200' },
  ]
  return (
    <section className="staking pt-40 bg-black pb-12]">
      <div className="staking__main relative bg-black flex flex-col items-center min-h-[1254px]">
        <div className="flex flex-col w-full space-y-4 max-w-[1280px]">
          <span className="font-oxanium font-bold text-2xl text-[#FFA52C]">
            Stake
          </span>
          <div className="grid grid-cols-2 w-full items-center space-x-8">
            <div className="flex flex-col space-y-8 border border-[#FFA52C] rounded-2xl backdrop-blur-[25px] p-8 pb-12">
              <div className="flex flex-row items-center space-x-4">
                <img src={IcRank} alt="staking" />
                <span className="font-oxanium_ font-bold text-4xl text-white">
                  My Rank
                </span>
              </div>
              <div className="flex flex-row items-center justify-between">
                <span className="font-poppins font-bold text-xl text-white">
                  Rank -
                </span>
                <span className="font-poppins font-bold text-xl text-white">
                  Point: 0
                </span>
                <button className="px-4 py-3 bg-[#FFA52C] rounded-lg font-poppins font-bold text-base text-white">
                  {' '}
                  Claim
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-8 border border-[#FFA52C] rounded-2xl backdrop-blur-[25px] p-8 pb-12">
              <div className="flex flex-row space-x-4">
                <img src={IcStaked} alt="staking" />
                <span className="font-oxanium_ font-bold text-4xl text-white">
                  Total Staked
                </span>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row space-x-2">
                  <span className="font-poppins font-bold text-xl text-[#FFA52C]">
                    0
                  </span>
                  <span className="font-poppins font-bold text-xl text-white">
                    KATA
                  </span>
                </div>

                <img src={IcLock} alt="staking" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 mt-8 w-full">
          <span className="font-oxanium font-bold text-2xl text-[#FFA52C]">
            List Top
          </span>
          <div className="flex flex-col space-y-8">
            <div className="flex flex-row justify-center mt-4 space-x-12">
              <div className="staking__top relative w-[304px] flex flex-col items-center py-2 space-y-2 ">
                <span className="font-poppins font-semibold text-base text-[#FFB156]">
                  0x5d07...eba9
                </span>
                <span className="font-poppins font-semibold text-base text-white">
                  Point: 3851300
                </span>
                <img
                  src={IcTop1}
                  alt="staking"
                  className="absolute top-[-25%] left-[-12%]"
                />
              </div>
              <div className="staking__top relative w-[304px] flex flex-col items-center py-2 space-y-2 ">
                <span className="font-poppins font-semibold text-base text-[#FFB156]">
                  0x5d07...eba9
                </span>
                <span className="font-poppins font-semibold text-base text-white">
                  Point: 3851300
                </span>
                <img
                  src={IcTop2}
                  alt="staking"
                  className="absolute top-[-25%] left-[-12%]"
                />
              </div>
              <div className="staking__top relative w-[304px] flex flex-col items-center py-2 space-y-2 ">
                <span className="font-poppins font-semibold text-base text-[#FFB156]">
                  0x5d07...eba9
                </span>
                <span className="font-poppins font-semibold text-base text-white">
                  Point: 3851300
                </span>
                <img
                  src={IcTop3}
                  alt="staking"
                  className="absolute top-[-25%] left-[-12%]"
                />
              </div>
            </div>
            <div className="staking__table flex flex-col">
              <div className="grid grid-cols-3 items-center justify-between py-6 border-b border-white border-opacity-10">
                <span className="font-oxanium font-bold text-2xl text-white text-center">
                  Rank
                </span>
                <span className="font-oxanium font-bold text-2xl text-white text-center">
                  Wallet Address
                </span>
                <span className="font-oxanium font-bold text-2xl text-white text-center">
                  Point
                </span>
              </div>
              {tableData.map((item, index) => (
                <div className="grid grid-cols-3 items-center justify-between py-5 border-b border-white border-opacity-10">
                  <span className="font-poppins font-normal text-base text-white text-center">
                    {item.rank}
                  </span>
                  <span className="font-poppins font-normal text-base text-white text-center">
                    {item.address}
                  </span>
                  <span className="font-poppins font-normal text-base text-white text-center">
                    {item.point}
                  </span>
                </div>
              ))}
              <div className="flex w-full items-center justify-center pt-8">
                <Pagination index={1} numOfPage={200} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 mt-8 w-full">
          <span className="font-oxanium font-bold text-2xl text-[#FFA52C]">
            Information
          </span>
          <div className="grid grid-cols-2 w-full items-center space-x-8">
            <div className="staking__information">
              <ul>
                <li className="font-poppins font-medium text-base text-white list-disc">
                  Users will stake MSP Tokens in exchange for points and have a
                  top point ranking to get the right to buy Lands.
                </li>
                <li className="font-poppins font-medium text-base text-white list-disc">
                  Each 100 MSP for 1 hour get 10 points.
                </li>
                <li className="font-poppins font-medium text-base text-white list-disc">
                  Top 25 will buy Lands.
                </li>
                <li className="font-poppins font-medium text-base text-white list-disc">
                  Users who have more than 1000 points but are not at the top
                  will be randomly selected 5 people to buy 1 Common Lands
                </li>
                <li className="font-poppins font-medium text-base text-white list-disc">
                  After all people on the whitelist have purchased, the
                  remaining Lands will be sold to those who come first, and will
                  end as soon as all Lands are sold out, each person only can
                  buy 1 Land
                </li>
              </ul>
            </div>
            <div className="rounded-xl">
              <table className="staking__information__table w-full xl:p-4">
                <thead>
                  <tr>
                    {tableHead.map((item, index) => (
                      <th key={index} className={item.className}>
                        {item.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableBody &&
                    tableBody?.map((item, index) => (
                      <tr key={index} className="border_style">
                        <td className="font-poppins font-medium text-white text-base text-center py-[15.5px]">
                          {item.id}
                        </td>
                        <td className="font-poppins font-medium text-white text-base text-center">
                          {item.rarity}
                        </td>
                        <td className="font-poppins font-medium text-white text-base text-center">
                          {item.no}
                        </td>
                        <td className="font-poppins font-medium text-white text-base text-center">
                          {item.total}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Staking
