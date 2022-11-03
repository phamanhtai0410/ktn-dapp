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
import BtnMint from './BtnMint'
  
const BtnConnectWithMint = () => {
  
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
  