import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import { useAppDispatch } from '@/app/hooks'
import { Registry } from './helper/event-bus'
import {
  ConnectState,
  IWeb3Event,
  Web3Callback,
  DEFAULT_WALLET_INFO,
  EasyWeb3,
} from './'
import { setReducerWalletInfo } from '@/reducers/walletSlice'
import { fetchReferralCode } from '@/actions/userActions';

export const useEasyWeb3 = (cb?: Web3Callback) => {

  let location = useLocation();

  const [connectState, setConnectState] = useState(ConnectState.Disconnected)
  const [walletInfo, setWalletInfo] = useState(DEFAULT_WALLET_INFO)

  const dispatch = useAppDispatch();
  const easyWeb3 = EasyWeb3.getInstance()
  let registry: Registry
  const web3Callback: Web3Callback = (e: IWeb3Event) => {
    setConnectState(easyWeb3.getConnectState())
    setWalletInfo({ ...easyWeb3.getWalletInfo()})
    cb && cb(e)
  }

  useEffect(() => {
    console.log("------useEffect",easyWeb3);
    registry = easyWeb3.registerEvent(web3Callback)
    easyWeb3.connectWalletIfCached()
    return () => {
      easyWeb3.unregisterEvent(registry)
    }
  }, [location.pathname])

  useEffect(() => {

    console.log("------useEffect connectState",connectState);

    if(ConnectState.Disconnected === connectState){

      if(localStorage.getItem("_acc") === null){
        dispatch(setReducerWalletInfo({ 
          ...DEFAULT_WALLET_INFO,
          ...{
            easyWeb3:null,
            address:null,
            chainId:null,
            balance:"0"
        }}))
      }

    }else if(ConnectState.Connected === connectState){
      dispatch(setReducerWalletInfo({ 
        ...easyWeb3.getWalletInfo(),
        ...{
          easyWeb3
      }}))
      fetchReferralAddress(easyWeb3.getWalletInfo())
    }

    if(easyWeb3.connectState !==connectState ){
      setConnectState(easyWeb3.connectState)
    }

  }, [connectState])

  useEffect(() => {

    const wallet = easyWeb3.getWalletInfo();
    if(wallet.chainId !== walletInfo.chainId){
      dispatch(setReducerWalletInfo({ 
        ...easyWeb3.getWalletInfo(),
        ...{
          easyWeb3
      }}))
    }
    
  }, [easyWeb3])

  const fetchReferralAddress = ({address}) => {
    if(address){
      dispatch(fetchReferralCode({ address }))
    }
  }

  return { easyWeb3, connectState, walletInfo }
  
}
