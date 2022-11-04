import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { fetchReferralCode } from '@/actions/userActions'
import { useAppDispatch } from '@/app/hooks'
import { selectWalletAccount } from '@/reducers/walletSlice'
import { useSearchParams } from 'react-router-dom'
import { fetchCheckRefCode } from '@/actions/paymentActions'
import { setPromotionRefCode, setRefCodeCart } from '@/reducers/cartSlice'
import { selectReferralRefCode } from '@/reducers/referralSlice'

const ProfileWallet = () => {

  const dispatch = useAppDispatch()
  const address = useSelector(selectWalletAccount);
  const codelinked  = useSelector(selectReferralRefCode);
  
  const [searchParams,setSearchParams] = useSearchParams();

  useEffect(()=>{
    checkPromotionRefCode()
    checkRefCode()
  },[searchParams])
  
  useEffect(() => {
    const _acc  = localStorage.getItem("_acc")
    if (address || _acc) {
      fetchReferralAddress(address || _acc);
    }
  }, [address])

  useEffect(() => {
    const refCode = searchParams.get('r');
    if (codelinked && !refCode ) {
      dispatch(setRefCodeCart(codelinked))
    }
  }, [codelinked])

  // Set new ref_code 
  const checkRefCode = async () => {

    const refCode = searchParams.get('r');

    if(refCode){

      const refData = await dispatch(fetchCheckRefCode({ code: refCode }))

      if(refData.meta.requestStatus === "fulfilled"){
        localStorage.setItem("_refCode",refCode)
        dispatch(setRefCodeCart(refCode))
      }
      
      //clear ref_code invalidation
      if(refCode  && refData.meta.requestStatus ==="rejected"){
        localStorage.removeItem("_refCode")
        searchParams.delete("r")
        setSearchParams(searchParams.toString())
      }
      
    }

  }

  const checkPromotionRefCode = () => {
    const refCode = searchParams.get('p');
    if(refCode){
      dispatch(setPromotionRefCode(refCode))
    }
  }

  const fetchReferralAddress = (address) => {
    if(address){
      dispatch(fetchReferralCode({ address }))
    }
  }

  return (
   <></>
  )
}
export default ProfileWallet
