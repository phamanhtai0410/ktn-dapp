
import { NFTModel } from '@/models/redux-models';
import { selectCartItems, selectPromotion, selectRefCode } from '@/reducers/cartSlice';
import {  percentToDiscountPrice, sumCartDiscountTotal, sumCartTotal, sumFixedDiscount } from '@/_helpers/utils/lib';
import { useSelector } from 'react-redux';

import bnb_icon from '@/assets/images/mintpage/bnb_icon.svg'
import { selectItemChainNFTKeys } from '@/reducers/chainSlice';

//const sumTotal = (arr:NFTModel[]) => arr.reduce((sum:number, { price }) => sum + price, 0)
// const sumDiscountTotal = (arr:NFTModel[]) => arr.reduce((sum:number, { price ,discount}) => sum + percentToPrice(price,discount), 0)

const SummaryItemsCart = () =>{

    const listItems = useSelector(selectCartItems);
    const promotion = useSelector(selectPromotion);
    const refCode = useSelector(selectRefCode);

    const renderTotal = (refCode) => {
        return refCode ? sumCartDiscountTotal(listItems) : sumCartTotal(listItems);
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

    const listItemsKeys = useSelector(selectItemChainNFTKeys)

    return (
        <>
            <div className="flex flex-row mt-[32px]">
                {promotion && promotion.code ?
                    <div className="mt-2 font-jost font-semibold text-lg text-white text-center">
                        {`(#${promotion?.code})`}  {`Discount`}: { renderDiscount(refCode) } USDT  
                    </div>
                :"" }
                <div className="mr-8 md:mr-[124px]">
                    <p className="text-[26px] font-bold text-[#FFFFFF]"><span className="text-[#F9C306]">Price</span>/mint:</p>
                    <div className="flex flex-row mt-[18px]">
                        <img src={listItemsKeys[listItems[0]?.chain]?.image_url} alt="" className="w-[24px] h-[20px] mr-[4px]" />
                        <div className="bg-[#282D34] flex items-center justify-center px-[9px] h-[19px] text-[#FFFFFF] font-bold text-[14px] border-[0.2px] border-[#F9C306] rounded-[12px]">
                            {listItems[0]?.chain}
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-[32px] font-bold text-[#F9C306]">{sumIntoPayment(refCode)} USDT</p>
                    {/* <p className="text-[#FFFFFF] text-[24px]">({sumIntoPayment(refCode)} BNB)</p> */}
                </div>
            </div>
        </>
    )

}

export default SummaryItemsCart;