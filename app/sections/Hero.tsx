"use client";
import StyledBox from "./StyledBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export function Hero() {
  return (
    <StyledBox>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          width: "60%",
          overflow: "hidden",
        }}
      >
        <SwiperSlide>
          <img
            src="/logo_con_datos_sin_lado.png"
            alt="slide 1"
            style={{ width: "100%", height: "auto", backgroundColor: "blue" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/logo_con_datos_sin_lado.png"
            alt="slide 1"
            style={{ width: "100%", height: "auto", backgroundColor: "blue" }}
          />
        </SwiperSlide>
      </Swiper>
    </StyledBox>
  );
}
