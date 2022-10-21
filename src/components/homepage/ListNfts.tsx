
import React from "react";
import { useSelector } from "react-redux";
import { selectNFTsSliceDashboard } from "@/reducers/NFTsSliteDashBoard";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const SlideNFTs = ({ item }) => (
  <div className=" border border-[#584733] bg-black rounded-[0.5vw]" >
    <div className="relative flex flex-col">
      <img className="max-h-[300px] mt-4 mx-8 z-[0]" src={`${item.image}`} />
    </div>
  </div>
)

export default function ListNfts() {
  const data = useSelector(selectNFTsSliceDashboard);
  return (
    <div className="container mt-[3vw]">
      <Swiper
        effect={"fade"}
        grabCursor={true}
        direction="horizontal"
        loop={false}
        spaceBetween={20}
        pagination={true}
        autoplay={{ delay: 2000 }}
        scrollbar={{ draggable: true }}
        mousewheel={true}
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
              <SlideNFTs item={val} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}