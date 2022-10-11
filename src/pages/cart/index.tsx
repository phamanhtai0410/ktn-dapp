import Button from '@/components/Partials/Button'
import SelectTokensSymbol from '@/components/Partials/SelectTokensSymbol'
import { useTranslation } from 'react-i18next'
import bg from '../../assets/images/cart/bg.jpg'
import bg_char from '../../assets/images/cart/bg_char.png'
import layer from '../../assets/images/cart/layer.png'
import layer2 from '../../assets/images/cart/layer2.png'
import light from '../../assets/images/cart/light.png'
import light2 from '../../assets/images/cart/light2.png'

import './index.scss'

const Cart = () => {
  const { t } = useTranslation()
  return (
    <section className="cart relative text-center whitespace-pre-line bg-black h-[2200px] px-[200px]">
      <div className="relative flex flex-col items-center">
        <img src={bg} alt="cart" />
        <div className="absolute top-0 flex flex-col items-center justify-center">
          <img src={bg_char} alt="cart" className="w-3/5 h-3/5" />
          <div className="absolute w-[80%] top-[60%] border border-[#79480b] border-opacity-[0.45] rounded-[32px]">
            <div className="cart__layer cart__layer2 relative flex flex-col items-start p-16">
              <span className="text-[32px] text-white uppercase text-left">
                Check out
              </span>
              <div className="flex flex-col mt-8 w-full space-y-4">
                <div className="flex flex-col space-y-6">
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-[18px] text-[#a2a09e] text-left">
                      S, the unrestrained (epic) x1
                    </span>
                    <span className="text-[18px] text-[#a2a09e] text-left">
                      $ 777
                    </span>
                  </div>
                  <div className="w-full h-[1px] bg-[#463113]"></div>
                </div>
                <div className="flex flex-col w-full space-y-6">
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-[18px] text-[#a2a09e] text-left">
                      Total sum to pay
                    </span>
                    <span className="text-[18px] text-white text-left">
                      2.7649 BNB
                    </span>
                  </div>
                  <div className="w-full h-[1px] bg-[#463113]"></div>
                </div>
                <div className="flex flex-col w-full space-y-3">
                  <span className="text-[18px] text-[#a2a09e] text-left">
                    Payment options
                  </span>
                  <div className="flex flex-row items-center justify-between space-x-6">
                    <SelectTokensSymbol />
                    <Button
                      className={
                        'button w-full text-white p-4 flex items-center justify-center rounded-[32px] cursor-pointer'
                      }
                      title={'Pay with BNB'}
                    />
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="w-full h-[1px] bg-[#463113]"></div>
                    <span className="text-[18px] text-white px-4">Or</span>
                    <div className="w-full h-[1px] bg-[#463113]"></div>
                  </div>
                </div>
                <div className="flex flex-col w-full space-y-8">
                  <Button
                    className={
                      'button w-full text-[#cbac9c] p-4 flex items-center justify-center rounded-[32px] cursor-pointer'
                    }
                    title={'Direct transfer to katana inu wallet'}
                  />
                  <div className="w-full h-[1px] bg-[#463113]"></div>
                </div>
                <div className="flex flex-row pt-4 items-center justify-between">
                  <span className="text-[18px] text-[#f3a511] px-4">
                    Apply discount
                  </span>
                  <span className="text-[18px] text-[#f3a511] px-4">
                    How to buy?
                  </span>
                </div>
              </div>
              <img
                src={layer2}
                alt="cart"
                className="absolute left-0 -top-[160px] z-[-1]"
              />
              <img
                src={light}
                alt="cart"
                className="absolute -top-28 -right-28"
              />
              <img
                src={light2}
                alt="cart"
                className="absolute -bottom-[64px] -left-[64px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Cart
