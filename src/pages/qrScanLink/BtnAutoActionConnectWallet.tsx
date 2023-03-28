import {
    ConnectState,
    IWeb3Event,
    IMessageInfo,
    useEasyWeb3,
    Web3Callback,
    Web3EventType,
  } from '@/service/web3'
import { CircularProgress } from '@mui/material'
import { verifySign } from '@/actions/userActions'
import { useAppDispatch } from '@/app/hooks'

import { useEffect } from 'react'
import { getMAX_TOKENS_IN_ORDER } from '@/actions/paymentActions'
import { selectAddressNFT } from '@/reducers/cartSlice'
import { useSelector } from 'react-redux'
import BtnAutoActionMint from './BtnAutoActionMint'
  
const BtnAutoActionConnectWallet= () => {

    const dispatch = useAppDispatch();
    const web3callback: Web3Callback = (e: IWeb3Event) => {
      switch (e.type) {
        case Web3EventType.Provider_Disconnect:
          // alert(typeof e.data == 'string' ? e.data : JSON.stringify(e.data))
          break
      }
    }
  
    const { easyWeb3, connectState } = useEasyWeb3(web3callback)

    const onConnect = async () => {
      const messageSign = await easyWeb3.getMessageWallet()
      if(messageSign && messageSign.signature){
          await dispatch(verifySign(messageSign))
      }
    }
  
    const onDisconnect = () => {
      easyWeb3.disconnect()
    }

    useEffect(() => {
      if(connectState == ConnectState.Disconnected){
        onConnect()
      }
    }, [easyWeb3.connectState])

  
    return (
      <>
      
        {connectState == ConnectState.Connecting && (
          <CircularProgress color="secondary" size="1.2rem" />
        )}

        {connectState == ConnectState.Connected && (
            <BtnAutoActionMint />
        )}
        
      </>
    )
  }
  
  export default BtnAutoActionConnectWallet
  