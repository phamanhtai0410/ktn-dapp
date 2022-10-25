import React from 'react'
import IcArrow from '../../assets/images/partials/arrow_bot.svg'
import IcChain from '../../assets/images/partials/ic_chain_bsc.svg'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { selectNetwork } from '@/reducers/walletSlice';

const SelectTokensSymbol = () => {

  // const [chain, setChain] = React.useState('');
  const network = useSelector(selectNetwork);

  // const handleChange = (event) => {
  //   setChain(event.target.value);
  // };

  return (
    <div className="relative w-[286px] px-8 py-3 rounded-[32px] flex flex-col border border-white border-opacity-[0.4]">
      <select
        className="flex flex-row items-center cursor-pointer appearance-none focus:outline-none bg-transparent text-[#a2a09e] uppercase"
        // value={chain}
        // onChange={e=>{handleChange(e)}}
        >
        <option value={network?.name}>
          <div className='re'>
            <img src={IcArrow} className="w-10 h-10" alt='icon chain' />
            <span>Chain {network?.name}</span>
          </div>
        </option>
      </select>
      {/* <img src={IcArrow} alt="rinz" className="absolute top-[40%] right-8" /> */}
    </div>
  )
}

export default SelectTokensSymbol
