import { fetchListNFTs } from '@/actions/nftActions'
import { useAppDispatch } from '@/app/hooks'
import BtnConnectPay from '@/components/cart/BtnConnectPay'
import FrmPromotionCode from '@/components/cart/FrmPromotionCode'
import ListItemsCart from '@/components/cart/ListItemsCart'
import Button from '@/components/Partials/Button'
import SelectTokensSymbol from '@/components/Partials/SelectTokensSymbol'
import { removeItemNFT, setItemNFTs } from '@/reducers/cartSlice'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import bg from '../../assets/images/cart/bg.jpg'
import bg_char from '../../assets/images/cart/bg_char.png'
import layer2 from '../../assets/images/cart/layer2.png'
import light from '../../assets/images/cart/light.png'
import light2 from '../../assets/images/cart/light2.png'

import './index.scss'

const Cart = () => {

  const { id } = useParams();
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(id){
      fetchCartItems(id);
    }
  }, [])

  const fetchCartItems = async (collection_id) => {

    const itemsCart = await dispatch(fetchListNFTs({
       type: collection_id
    }))

    if(itemsCart){
        dispatch(setItemNFTs(itemsCart.payload.items))
    }

  }

  const removeCartItem = async (id) =>{
    dispatch(removeItemNFT(Number(id)))
  }

  return (
    <section className="cart relative text-center bg-black md:px-40 px-4 pb-12">
      <div className="relative pt-36 flex flex-col lg:items-center items-start lg:min-h-[1100px] md:min-h-[900px]">
        <img
          src={bg}
          alt="cart"
          className="md:min-h-[1100px] sm:min-h-[870px] min-h-[800px]"
        />
        <div className="absolute flex flex-col items-center justify-center">
          <img src={bg_char} alt="cart" className="lg:w-3/5 w-4/5 lg:h-3/5" />
          <div className="absolute lg:w-[80%] w-full top-[60%] border border-[#79480b] border-opacity-[0.45] rounded-[32px]">
            <div className="cart__layer cart__layer2 relative flex flex-col items-start lg:p-16 sm:p-8 p-6 lg:overflow-visible overflow-hidden">
              <span className="font-jost_medium text-[32px] text-white uppercase text-left">
                Check out
              </span>
              <div className="flex flex-col mt-8 w-full space-y-4">
                <ListItemsCart removeCartItem={removeCartItem} />
                <div className="flex flex-col w-full space-y-3">
                  <span className="font-jost_medium text-[18px] text-[#a2a09e] text-left">
                    Payment options
                  </span>
                  <div className="flex flex-row items-center justify-between space-x-6">
                    <SelectTokensSymbol />
                    <BtnConnectPay />
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="w-full h-[.5px] bg-[#463113]"></div>
                    <span className="font-jost text-[18px] text-white px-4">
                      Or
                    </span>
                    <div className="w-full h-[.5px] bg-[#463113]"></div>
                  </div>
                </div>
                <div className="flex flex-col w-full space-y-8">
                  <Button
                    className={
                      'button font-jost_medium w-full text-[#cbac9c] p-3 flex items-center justify-center rounded-[32px] cursor-pointer'
                    }
                    title={'Direct transfer to katana inu wallet'}
                  />
                  <div className="w-full h-[.5px] bg-[#463113]"></div>
                </div>
                <FrmPromotionCode />
              </div>
              <img
                src={layer2}
                alt="cart"
                className="absolute left-0 -top-[160px] z-[-1]"
              />
              <img
                src={light}
                alt="cart"
                className="hidden lg:block absolute -top-28 -right-28"
              />
              <img
                src={light2}
                alt="cart"
                className="hidden lg:block absolute -bottom-[64px] -left-[64px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Cart
