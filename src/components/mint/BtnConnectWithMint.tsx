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
import { selectAddressNFT, selectCartItems } from '@/reducers/cartSlice'
import { useSelector } from 'react-redux'
  
const BtnConnectWithMint = () => {
  
    const addressNFT = useSelector(selectAddressNFT)
    const listItems = useSelector(selectCartItems)

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
      if(easyWeb3.connectState == ConnectState.Connected && addressNFT){
        fetchMaxInOrder(addressNFT);
      }
    }, [easyWeb3.connectState,addressNFT])

    const fetchMaxInOrder = async (addressNFT) => {
      await dispatch(getMAX_TOKENS_IN_ORDER({addressNFT}))
    }
  
    return (
      <>
      { listItems && listItems[0]?.total_minted < listItems[0]?.total_supply &&
          <>
            {(connectState == ConnectState.Disconnected) && (
                  <div 
                    onClick={onConnect}
                    className="flex items-center ml-[7px] md:ml-[10px] md:mt-0 justify-center md:w-[210px] w-[131px] text-[15px] md:text-[24px] text-[#11151B] font-extrabold h-[43px] bg-[#F9C306] rounded-[5px] uppercase cursor-pointer">
                        MINT NOw
                  </div>   
              )}

              {connectState == ConnectState.Connecting && (
                // <CircularProgress color="secondary" size="1.2rem" />
                <div 
                    onClick={onConnect}
                    className="flex items-center ml-[7px] md:ml-[10px] md:mt-0 justify-center md:w-[210px] w-[131px] text-[15px] md:text-[24px] text-[#11151B] font-extrabold h-[43px] bg-[#F9C306] rounded-[5px] uppercase cursor-pointer">
                        MINT NOw 
                        <CircularProgress color="secondary" size="1.2rem" />
                  </div>   
              )}

              {connectState == ConnectState.Connected && (
                  <BtnMint />
              )}
              
          </>
        }
      </>
    )
  }
  
  export default BtnConnectWithMint
  