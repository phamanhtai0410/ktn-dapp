
import { selectCartItems } from '@/reducers/cartSlice';
import React from 'react';
import { useSelector } from 'react-redux';

function labelRarity(rarity){
    let label = ""
    switch (rarity) {
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

const sumTotal = (arr:any) => arr.reduce((sum:number, { price }) => sum + price , 0)

const ItemCart = ({item ,index})=>{
    return (
        <div className="flex flex-row items-center justify-between">
            <span className="text-[16px] text-[#a2a09e] text-left">
                {item.name} ({labelRarity(item.rarity)}) x1
            </span>
            <span className="font-semibold text-[18px] text-white text-left">
            $ {item.price}
            </span>
        </div>
    )
}

const ListItemsCart = () =>{

    const listItems = useSelector(selectCartItems);

    return (
       <>
        <div className="flex flex-col space-y-6">
            {listItems.map((item, index) => {
                return (
                <ItemCart  key={index} item={item} index={index} />
                )
            })}
            <div className="w-full h-[1px] bg-[#463113]"></div>
        </div>
        <div className="flex flex-col w-full space-y-6">
            <div className="flex flex-row items-center justify-between">
            <span className="text-[16px] text-[#a2a09e] text-left font-medium">
                Total sum to pay
            </span>
            <span className="text-[14px] text-white text-left">
                <span className='text-[20px] font-medium'>{sumTotal(listItems)}</span> <span className='font-normal'>USDT</span>
            </span>
            </div>
            <div className="w-full h-[1px] bg-[#463113]"></div>
        </div>
       </>
    )

}

export default ListItemsCart;