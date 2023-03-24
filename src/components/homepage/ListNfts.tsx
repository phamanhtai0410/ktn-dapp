
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectNFTsSliceDashboard } from "@/reducers/NFTsSliteDashBoard";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { getLinkRefCode } from "@/_helpers/utils/lib";
import { selectRefCode } from "@/reducers/cartSlice";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const SlideNFTs = ({ item  ,refCode }) => (

  <div className="bg-NFTs rounded-[0.5vw] pb-6" >
    <p className="text-NFT-price font-jost font-base w-fit float-right mt-[10px] mx-[20px]">FROM ${item.price}</p>
      <NavLink to={ getLinkRefCode(`/mint/${item.nft_id}`,refCode) } >
        <div className="relative flex flex-col w-full items-center justify-center h-[400px] px-4">
          <img className="img-NFT h-auto p-4 z-[0] w-[90%] object-scale-down object-center" src={`${item.image}`} />
          <div className="border-1-NFT flex justify-center h-[10px] w-full">
            <div className="border-2-NFT h-[10px] w-[60%] flex justify-center">
              <div className="soul-NFT flex justify-center items-center mt-[-25px]">
                <p>SOUL</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-white text-center font-blome text-[30px]">{item.name}</p>
      </NavLink>
  </div>
)

export default function ListNfts() {
  const data = useSelector(selectNFTsSliceDashboard);
  const refCode = useSelector(selectRefCode);
  return (
    <div className="container mt-[3vw]">
       <Swiper
      effect={"fade"}
      grabCursor={true}
      direction="horizontal"     
      loop={data.length > 4 ? true : false}
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
        {(data[0]?.items)?.map((val, index) => {
          return (
            <SwiperSlide key={index} className="w-[25%]">
              <SlideNFTs item={val} refCode={refCode} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}