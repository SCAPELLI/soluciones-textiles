"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageSource {
  src: string;
  width: number;
  height: number;
}

interface StyledImageProps {
  sources: ImageSource[];
  title: string;
  body: string;
}

const StyledImage: React.FC<StyledImageProps> = ({ sources, title, body }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      onMouseEnter={() => setIsCollapsed(true)}
      onMouseLeave={() => setIsCollapsed(false)}
    >
      <Box sx={{ height: 80, display: "flex", alignItems: "end", mb: 1 }}>
        <Typography variant="h5">{title}</Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          transition: "transform 0.3s ease",
          zIndex: 0, // <- base
          "&:hover": { transform: "scale(1.05)", cursor: "pointer" },
        }}
      >
        <Swiper
          modules={[Pagination, Navigation]}
          pagination
          navigation
          loop
          style={{ width: "100%", position: "relative", zIndex: 0 }} // <- asegurar base
        >
          {sources.map((img) => (
            <SwiperSlide key={img.src} style={{ position: "relative", zIndex: 0 }}>
              <Image
                src={img.src}
                alt={title}
                width={img.width}
                height={img.height}
                sizes="(max-width: 900px) 100vw, 33vw"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  border: "2px solid #fae25c",
                  display: "block",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Box
          sx={{
            width: 50,
            height: isCollapsed ? 0 : 50,
            opacity: isCollapsed ? 0 : 1,
            transition: "height 0.3s, opacity 0.3s",
            borderRadius: "50%",
            backgroundColor: "#fae25c",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translate(-50%, 50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,           // <- subir por encima del Swiper
            pointerEvents: "none" // <- opcional, evita que bloquee swipe/click
          }}
        >
          <KeyboardDoubleArrowDownIcon />
        </Box>
      </Box>


      <Box
        sx={{
          backgroundColor: "rgba(235,52,204,0.5)",
          borderRadius: "0 0 10px 10px",
          border: isCollapsed ? "2px solid #fae25c" : 0,
          height: isCollapsed ? 200 : 0,
          overflow: "hidden",
          transition: "height 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography color="white">{body}</Typography>
      </Box>
    </Box>
  );
};

export default StyledImage;
