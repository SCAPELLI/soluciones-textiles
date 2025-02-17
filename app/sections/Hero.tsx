"use client";
import { useTheme, useMediaQuery } from "@mui/material";
import StyledBox from "./StyledBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Sections } from "../Constants/Sections";

export function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledBox
      id={Sections.HOME}
      sx={{
        width: isMobile ? "100%" : "70%",
        margin: "auto",
      }}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={8}
        slidesPerView={1}
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      >
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
            src="/photos/hero4_formatted.png"
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
        <SwiperSlide>
          <img
            src="/logo_con_datos_sin_lado.png"
            alt="Soluciones Textiles La Modista"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
      </Swiper>
    </StyledBox>
  );
}
