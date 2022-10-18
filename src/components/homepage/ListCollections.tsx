import { selectCollections } from "@/reducers/CollectionsSlice";
import React from "react";
import { useSelector } from "react-redux";

const sumTotal = (arr:any) => arr.reduce((sum:number, { price }) => sum + price , 0)

const ItemCollection = (item) => (
    <div className=" border border-[#584733] bg-black rounded-[0.5vw]" >
        <div className="relative flex flex-col">
            <div className="absolute z-[1] bottom-[7.5vw] w-full text-center text-white text-[0.8vw]">
                <p className="text-[1.5vw] mb-[0.5vw] font-blome">{item.name}</p>
                <p className="font-jost">{item.description}</p>
            </div>
            <img className="h-full z-[0]" src={`${item.image}?w-500`} />
            <div className={`rare_${item.collection_id} z-[1]`}>
                <div className="borderrar flex items-end">
                    {item.collection_id === 1 && <span className="rate-text align-bottom text-base font-jost font-medium capitalize">Uncommon</span>}
                    {item.collection_id === 2 && <span className="rate-text align-bottom text-base font-jost font-medium capitalize">Rare</span>}
                    {item.collection_id === 3 && <span className="rate-text align-bottom text-base font-jost font-medium capitalize">Mythical</span>}
                    {item.collection_id === 4 && <span className="rate-text align-bottom text-base font-jost font-medium capitalize">Legendary</span>}
                    {item.collection_id === 5 && <span className="rate-text align-bottom text-base font-jost font-medium capitalize">Immortal</span>}
                    <span className="text-white w-full text-right text-base align-bottom font-jost font-medium">
                        $ {sumTotal(item.nfts || [])}
                    </span>
                </div>
            </div>
            <a href={`/cart/${item.collection_id}`} className="addbtn px-[1.5vw] py-[0.6vw] rounded-[32px] font-bold cursor-pointer m-[1vw] font-jost_medium">
                Add to Cart
            </a>
        </div>
    </div>
)

export default function ListCollection() {
  const items = useSelector(selectCollections);
  return (
    <div className="hidden lg:grid grid-cols-4 gap-[2.5vw] w-[70%] mt-[3vw]">
      {items.map((item, index) => {
        return (
          <ItemCollection  key={index} item={item} index={index} />
        )
      })}
    </div>
  );
}
