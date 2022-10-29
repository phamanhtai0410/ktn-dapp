
import { NFTModel } from '@/models/redux-models';
import { selectCartItems, selectPromotion } from '@/reducers/cartSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

function labelRarity(rarity){
    let label = ""
    switch (Number(rarity)) {
        case 1:
            label ="Uncommon"
            break;
        case 2:
            label ="Rare"
            break;
        case 3:
            label = "Mythical"
            break;
        case 4:
            label = "Legendary"
            break;
        case 5:
            label = "Immortal"
            break;
        default:
            break;
    }
    return label;
}

const percentToPrice = (price,discount)=>{
    return (price * (100 - discount))/100;
}

const sumTotal = (arr:NFTModel[]) => arr.reduce((sum:number, { price }) => sum + price, 0)
const sumDiscountTotal = (arr:NFTModel[]) => arr.reduce((sum:number, { price ,discount}) => sum + percentToPrice(price,discount), 0)

const ItemCart = ({ item ,removeCartItem , refCode }) => {

    if(!item){  return; }

    const getItemPrice = (item) => {

        if(refCode){
            return percentToPrice(item.price,item.discount);
        }

        return item.price;

    }

    return (
        <div className="flex flex-row items-center justify-between">
            <span className="text-[16px] text-[#a2a09e] text-left">
            <span onClick={e=>{removeCartItem(item.nft_id)}} className='inline-block px-2 cursor-pointer'>x</span> {item.name} ({labelRarity(item.rarity)}) x1
            </span>
            <span className="text-[16px] text-[#a2a09e] text-left">
            $ {getItemPrice(item)}
            </span>
        </div>
    )

}

const ListItemsCart = ({removeCartItem}) =>{

    const listItems = useSelector(selectCartItems);
    const promotion = useSelector(selectPromotion);
    const [searchParams] = useSearchParams();

    const refCode =searchParams.get('r');

    const renderTotal = () => {
        const totalItems  =refCode ?  sumDiscountTotal(listItems):  sumTotal(listItems);
        if(promotion?.discount ){
            return totalItems
        }else{
            return totalItems
        }
    }

    const renderDiscount = () =>{
        if(refCode){
            return promotion?.discount ?  (promotion?.discount * sumDiscountTotal(listItems))/100 :0 
        }else{
            return promotion?.discount ?  (promotion?.discount * sumTotal(listItems))/100 :0 
        }
    }


    return (
       <>
        <div className="flex flex-col space-y-3">
            {listItems.map((item, index) => {
                return (
                    <ItemCart refCode={refCode} key={`${item.nft_id}_${index}`} item={item} removeCartItem={removeCartItem} />
                )
            })}
            <div className="w-full h-[.5px] bg-[#463113]"></div>
        </div>
        
        { promotion &&  promotion.code ? 
            <div className="flex flex-col w-full space-y-6">
                <div className="flex flex-row items-center justify-between">
                <span className="text-[14px] text-[#a2a09e] text-left font-medium">
                    {`Discount (#${promotion?.code})`}
                </span>
                <span className="text-white text-left">
                    <span className='text-[18px] font-medium'>- { renderDiscount() } $</span>
                </span>
                </div>
                <div className="w-full h-[.5px] bg-[#463113]"></div>
            </div>
        : "" }
        
        <div className="flex flex-col w-full space-y-6">
            <div className="flex flex-row items-center justify-between">
            <span className="text-[16px] text-[#a2a09e] text-left font-medium">
                Total sum to pay
            </span>
            <span className="text-white text-left pr-4">
                <span className='text-[22px] font-medium'>{renderTotal() - (renderDiscount() ? renderDiscount() :0)}</span> <span className='font-normal text-[13px]'>USDT</span>
            </span>
            </div>
            <div className="w-full h-[.5px] bg-[#463113]"></div>
        </div>

       </>
    )

}

export default ListItemsCart;