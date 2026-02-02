"use client";

import Image from "next/image";
import { useTheme, useMediaQuery } from "@mui/material";
import StyledBox from "./StyledBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import { Sections } from "../Constants/Sections";

const SLIDES = [
  "/photos/hero1_formatted_updated.png",
  "/photos/hero2_formatted_updated.png",
  "/photos/hero4_formatted_updated.png",
  "/photos/hero3_formatted.png",
  "/logo_con_datos_sin_lado.png",
];

export function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // ⚠️ Poné acá el tamaño REAL (o al menos el ratio real) de tus hero.
  // Si tus imágenes son 1920x720, por ejemplo, poné eso.
  const W = 1920;
  const H = 720;

  return (
    <StyledBox
      id={Sections.HOME}
      sx={{ width: isMobile ? "100%" : "70%", margin: "auto" }}
    >
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={8}
        slidesPerView={1}
        style={{ width: "100%", overflow: "hidden" }}
      >
        {SLIDES.map((src, idx) => (
          <SwiperSlide key={src}>
            <Image
              src={src}
              alt="Soluciones Textiles La Modista"
              width={W}
              height={H}
              sizes={isMobile ? "100vw" : "70vw"}
              style={{ width: "100%", height: "auto" }} // 👈 mismo efecto que tu <img>
              priority={idx === 0} // solo la primera
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledBox>
  );
}
