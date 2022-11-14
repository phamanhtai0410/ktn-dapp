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
import BtnMint from './BtnMint'
import { useEffect } from 'react'
import { getMAX_TOKENS_IN_ORDER } from '@/actions/paymentActions'
  
const BtnConnectWithMint = () => {
  
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
      if(easyWeb3.connectState == ConnectState.Connected ){
        fetchMaxInOrder();
      }
    }, [easyWeb3.connectState])

    const fetchMaxInOrder = async () => {
      await dispatch(getMAX_TOKENS_IN_ORDER({}))
    }
  
    return (
      <>

        {connectState == ConnectState.Disconnected && (
          <button
            className="w-3/4 mx-auto mt-9 py-4 cursor-pointer font-jost font-medium hover:font-jost hover:font-bold text-2xl text-[#fca500] border border-[#82510a] rounded-[42px] shadow-[inset_0px_0px_16px_0.99px_rgba(255,187,66,0.75)] hover:shadow-[inset_0px_0px_32px_4.99px_rgba(255,187,66,0.95)]"
            onClick={onConnect}
          >
            <span className='inline-block'>MINT</span>
          </button>
        )}

        {connectState == ConnectState.Connecting && (
          <CircularProgress color="secondary" size="1.2rem" />
        )}

        {connectState == ConnectState.Connected && (
            <BtnMint />
        )}

      </>
    )
  }
  
  export default BtnConnectWithMint
  