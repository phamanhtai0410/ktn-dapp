
import { NFTModel } from '@/models/redux-models';
import { selectCartItems, selectPromotion } from '@/reducers/cartSlice';
import { getUserRefcode, percentToDiscountPrice, sumFixedDiscount } from '@/_helpers/utils/lib';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const percentToPrice = (price,discount)=>{
    return (price * (100 - discount))/100;
}

const sumTotal = (arr:NFTModel[]) => arr.reduce((sum:number, { price }) => sum + price, 0)
const sumDiscountTotal = (arr:NFTModel[]) => arr.reduce((sum:number, { price ,discount}) => sum + percentToPrice(price,discount), 0)

const SummaryItemsCart = () =>{

    const listItems = useSelector(selectCartItems);
    const promotion = useSelector(selectPromotion);

    const [searchParams] = useSearchParams();
    const refCode = searchParams.get('r') || getUserRefcode();

    const renderTotal = (refCode) => {
        return refCode ? sumDiscountTotal(listItems) : sumTotal(listItems);
    }

    const renderDiscount = (refCode) =>{
        if(!promotion?.discount){
            return 0;
        }
        return percentToDiscountPrice(renderTotal(refCode),promotion?.discount)
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

            {promotion && promotion.code ?
            <div className="mt-2 font-jost font-semibold text-lg text-white text-center">
                {`(#${promotion?.code})`}  {`Discount`}: { renderDiscount(refCode) } USDT  
            </div>:"" }
            
            <div className="mt-2 font-jost font-semibold text-lg text-white text-center">
                Cost: {sumIntoPayment(refCode)} USDT
            </div>

       </div>
    )

}

export default SummaryItemsCart;