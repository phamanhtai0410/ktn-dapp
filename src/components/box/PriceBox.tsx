
import { NFTModel } from '@/models/redux-models';
import { selectBoxCartItems } from '@/reducers/boxSlice';
import {  selectRefCode } from '@/reducers/cartSlice';
import {  selectPromotion } from '@/reducers/boxSlice';
import {  percentToDiscountPrice, sumCartDiscountTotal, sumCartTotal, sumFixedDiscount } from '@/_helpers/utils/lib';
import { useSelector } from 'react-redux';


const PriceBox = () =>{

    const listItems = useSelector(selectBoxCartItems)
    const promotion = useSelector(selectPromotion)
    const refCode = useSelector(selectRefCode)

    const renderTotal = (refCode) => {
        return refCode ? sumCartDiscountTotal(listItems) : sumCartTotal(listItems)
    }

    const renderDiscount = (refCode) => {
        if(!promotion?.discount){
            return 0;
        }
        return percentToDiscountPrice(renderTotal(refCode), promotion?.discount)
    }

    const sumIntoPayment = (refCode) =>{
        if(refCode){
           return sumFixedDiscount(renderTotal(refCode), renderDiscount(refCode))
        }else{
            return renderTotal(refCode)
        }
    }

    return (

       <div className='mt-4'>

            { promotion && promotion.code ?

            <div className="mt-2 font-jost font-semibold text-lg text-white text-center">
                {`(#${promotion?.code})`}  {`Discount`}: { renderDiscount(refCode) } USDT
            </div>:"" }
            
            <div className="mt-2 font-jost font-semibold text-lg text-white text-center">
                Cost: {sumIntoPayment(refCode)} USDT
            </div>

       </div>
    )

}

export default PriceBox;