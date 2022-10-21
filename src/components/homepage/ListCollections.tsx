import { selectCollections } from "@/reducers/collectionsSlice";
import React from "react";
import { useSelector } from "react-redux";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const sumTotal = (arr: any) => arr.reduce((sum: number, { price }) => sum + price, 0)

const ItemCollection = ({ item }) => (
  <div className=" border border-[#584733] bg-black rounded-[0.5vw]" >
    <div className="relative flex flex-col">
      <div className="absolute bottom-[30%]  z-[1] w-full text-center text-white">
        <p className="text-[25px] mb-[0.5vw] font-blome">{item.name}</p>
        <p className="font-jost text-[16px]">{item.description}</p>
      </div>
      <img className="h-full mt-4 z-[0]" src={`${item.image}?w-500`} />
      <div className={`rare_${item.collection_id} z-[1]`}>
        <div className="borderrar flex items-end">
          {item.nfts[0]?.rarity === 1 && <span className="rate-text align-bottom text-base font-jost font-medium capitalize">Uncommon</span>}
          {item.nfts[0]?.rarity === 2 && <span className="rate-text align-bottom text-base font-jost font-medium capitalize">Rare</span>}
          {item.nfts[0]?.rarity === 3 && <span className="rate-text align-bottom text-base font-jost font-medium capitalize">Mythical</span>}
          {item.nfts[0]?.rarity === 4 && <span className="rate-text align-bottom text-base font-jost font-medium capitalize">Legendary</span>}
          {item.nfts[0]?.rarity === 5 && <span className="rate-text align-bottom text-base font-jost font-medium capitalize">Immortal</span>}
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
    <div className="container mt-[3vw]">
      <Swiper
      effect={"fade"}
      grabCursor={true}
      direction="horizontal"     
      loop={items.length > 4 ? true : false}
      spaceBetween={20}
      pagination={true}
      autoplay={{ delay: 2000 }}
      scrollbar={{ draggable: true }}
      mousewheel= {true}
      breakpoints={{
        720: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      className="mySwiper"
    >
      {items.map((val, index) => {
        return (
          <SwiperSlide key={index} className="w-[25%]">
              <ItemCollection item={val} />
          </SwiperSlide>
        );
      })}
    </Swiper>
    </div>
  );
}
