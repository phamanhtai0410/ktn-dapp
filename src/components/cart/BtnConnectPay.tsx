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
  import { LocalStorageService } from '@/_helpers'
import BtnPay from './BtnPay'
  
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
  
    const onDisconnect = () => {
      easyWeb3.disconnect()
    }
  
    return (
      <>

        {connectState == ConnectState.Disconnected && (
          <button
          className="button w-full font-medium text-white text-base p-3 flex items-center justify-center rounded-[32px] cursor-pointer"
           // className="text-sm bg-primary text-white px-6 py-2 btn rounded-full flex shadow shadow-gray-500/50"
            onClick={onConnect}
          >
            <span className='inline-block'>Connect with Pay</span>
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
  