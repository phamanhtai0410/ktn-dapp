import React from 'react'
import IcArrow from '../../assets/images/partials/arrow_bot.svg'
import IcChain from '../../assets/images/partials/ic_chain_bsc.svg'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { selectChain, selectGetByChainID, selectNetwork } from '@/reducers/walletSlice';

const SelectTokensSymbol = () => {

  // const [chain, setChain] = React.useState('');
  const network = useSelector(selectNetwork);
  const chainId = useSelector(selectChain);
  const chainPayment = useSelector(selectGetByChainID)

  // const handleChange = (event) => {
  //   setChain(event.target.value);
  // };
  console.log("network",network,chainId)
  console.log("chainPayment",chainPayment)
  return (
    <div className="relative w-[320px] px-8 py-3 rounded-[32px] flex flex-col border border-white border-opacity-[0.4]">
      { chainId ? 
        <button
        className='flex flex-row items-center cursor-pointer appearance-none focus:outline-none bg-transparent text-[#a2a09e] uppercase items-center'
        >
         { chainPayment ? <img src={chainPayment?.chain_logo} className="w-6 h-6 mr-2" alt='icon chain' /> :"" }  
          <span> Chain {network?.name} </span>
        </button>
        : 
        <button
        className='flex flex-row items-center cursor-pointer appearance-none focus:outline-none bg-transparent text-[#a2a09e] uppercase items-center'
        >
          <span>Chain BNB</span>
        </button>
      }
    </div>
  )
}

export default SelectTokensSymbol
