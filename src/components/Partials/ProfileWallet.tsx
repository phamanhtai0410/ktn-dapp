import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { fetchReferralCode, fetchReferralCookies } from '@/actions/userActions'
import { useAppDispatch } from '@/app/hooks'
import { selectWalletAccount } from '@/reducers/walletSlice'
import { useSearchParams } from 'react-router-dom'
import { fetchCheckRefCode } from '@/actions/paymentActions'
import { setPromotionRefCode, setRefCodeCart } from '@/reducers/cartSlice'
import { selectReferralRefCode } from '@/reducers/referralSlice'
import { selectReferralCookies } from '@/reducers/settingSlice'

const ProfileWallet = () => {
  
  const dispatch = useAppDispatch()
  const address = useSelector(selectWalletAccount)
  const codelinked = useSelector(selectReferralRefCode)
  const referralCookies = useSelector(selectReferralCookies)

  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    dispatch(fetchReferralCookies())
  }, [])

  useEffect(() => {

    if(searchParams && searchParams.get('p')){
      checkPromotionRefCode()
    }

    if(searchParams && searchParams.get('r')){
      checkRefCode()
    }

    if(!searchParams.get('r') && localStorage.getItem('_refCode')){
      setSearchParams({ r: localStorage.getItem('_refCode') });
    }

  }, [searchParams])

  useEffect(() => {
    if (address) {
      fetchReferralAddress(address)
    }
  }, [address])

  useEffect(() => {
    const refCode = searchParams.get('r')
    if (codelinked && !refCode) {
      dispatch(setRefCodeCart(codelinked))
    }
  }, [codelinked])

  // Set new ref_code
  const checkRefCode = async () => {

    const refCode = searchParams.get('r')

    if (refCode) {
      const refData = await dispatch(fetchCheckRefCode({ code: refCode }))
      if (refData.meta.requestStatus === 'fulfilled') {
        checkExpireState(true, refCode)
        localStorage.setItem('_refCode', refCode)
        dispatch(setRefCodeCart(refCode))
      }

      //clear ref_code invalidation
      if (refCode && refData.meta.requestStatus === 'rejected') {

        checkExpireState(false, refCode)
        searchParams.delete('r')

        if(localStorage.getItem('_refCode')) {
          setSearchParams({ r: localStorage.getItem('_refCode') });
        }
        
        setSearchParams(searchParams.toString())

      }
    }

  }

  const checkPromotionRefCode = () => {
    const refCode = searchParams.get('p')
    if (refCode) {
      dispatch(setPromotionRefCode(refCode))
    }
  }

  const fetchReferralAddress = (address) => {
    if (address) {
      dispatch(fetchReferralCode({ address }))
    }
  }

  const checkExpireState = (isValidRef, localRef) => {
    const refCode = searchParams.get('r')
    const localExpireTime = localStorage.getItem('_expireTime')
    if (refCode && referralCookies) {
      const currentDate = new Date()
      const nextDayOfMonth = currentDate.getDate() + referralCookies
      currentDate.setDate(nextDayOfMonth)
      if (
        (refCode !== localRef && isValidRef) ||
        (refCode === localRef && !localExpireTime)
      ) {
        localStorage.setItem('_expireTime', currentDate.toString())
      } else if (new Date() > new Date(localExpireTime)) {
        localStorage.removeItem('_expireTime')
      }
    }
  }

  return <></>
}
export default ProfileWallet
