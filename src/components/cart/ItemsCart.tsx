
import { selectCartItems } from '@/reducers/cartSlice';
import React from 'react';
import { useSelector } from 'react-redux';

const ItemNFT = ({item})=>{

        return (
            <div className="flex flex-row items-center justify-between">
                <span className="font-jost_medium text-[18px] text-[#a2a09e] text-left">
                {item.name} ({item.rarity}) x1
                </span>
                <span className="font-jost_medium text-[18px] text-[#a2a09e] text-left">
                $ {item.price}
                </span>
            </div>
        )
}

const ItemsCart = () =>{

    // const listItems = useSelector(selectCartItems);

    // const listItems = items.map((i) => <ItemNFT key={i.nft_id} item={i} />);

    return (
        <div className="flex flex-row items-center justify-between">
            <span className="font-jost_medium text-[18px] text-[#a2a09e] text-left">
            S, the unrestrained (epic) x1
            </span>
            <span className="font-jost_medium text-[18px] text-[#a2a09e] text-left">
            $ 777
            </span>
        </div>
    )

}

export default ItemsCart;