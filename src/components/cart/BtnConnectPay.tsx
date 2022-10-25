import {
    ConnectState,
    IWeb3Event,
    useEasyWeb3,
    Web3Callback,
    Web3EventType,
  } from '@/service/web3'
  import { CircularProgress } from '@mui/material'
  import { verifySign } from '@/actions/userActions'
  import { useAppDispatch } from '@/app/hooks'
  import { LocalStorageService } from '@/_helpers'
import BtnPay from './BtnPay'
import { useEffect } from 'react'
import { fetchChainList } from '@/actions/walletActions'
  
const BtnConnectPay = () => {
  
    const dispatch = useAppDispatch();
    const web3callback: Web3Callback = (e: IWeb3Event) => {
      switch (e.type) {
        case Web3EventType.Provider_Disconnect:
          alert(typeof e.data == 'string' ? e.data : JSON.stringify(e.data))
          break
      }
    }
  
    const { easyWeb3, connectState } = useEasyWeb3(web3callback)
    const onConnect = async () => {
      
        const messageSign = await easyWeb3.getMessageWallet();

        if(messageSign && messageSign.signature){
            const res =  dispatch(verifySign(messageSign))
            if(res){
                await easyWeb3.connectWallet();
                LocalStorageService.setAccount(messageSign.address)
            }
        }
  
    }

    useEffect(() => {
      fetchListChains();
    }, [])

    const fetchListChains = async () =>{
      dispatch(fetchChainList({}))
    }
  
    return (
      <>

        {connectState == ConnectState.Disconnected && (
          <button
          className="button w-full font-medium text-white text-base p-3 flex items-center justify-center rounded-[32px] cursor-pointer"
            onClick={onConnect}
          >
            <span className='inline-block'>Connect Wallet to Pay</span>
          </button>
        )}

        {connectState == ConnectState.Connecting && (
          <CircularProgress color="secondary" size="1.2rem" />
        )}

        {connectState == ConnectState.Connected && (
            <BtnPay />
        )}

      </>
    )
  }
  
  export default BtnConnectPay
  