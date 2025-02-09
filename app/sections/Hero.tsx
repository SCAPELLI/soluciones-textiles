"use client";
import StyledBox from "./StyledBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Sections } from "../Constants/Sections";

export function Hero() {
  return (
    <StyledBox id={Sections.HOME}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <SwiperSlide>
          <img
            src="/logo_con_datos_sin_lado.png"
            alt="Soluciones Textiles La Modista"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/photos/hero1_formatted.png"
            alt="Soluciones Textiles La Modista"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/photos/hero2_formatted.png"
            alt="Soluciones Textiles La Modista"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/photos/hero3_formatted.png"
            alt="Soluciones Textiles La Modista"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
      </Swiper>
    </StyledBox>
  );
}
