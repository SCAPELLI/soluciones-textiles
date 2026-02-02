// app/components/StyledImage.tsx
"use client";

import { Box, Typography } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface StyledImageProps {
  sources: string[];
  title: string;
  body: string;
}

const StyledImage: React.FC<StyledImageProps> = ({ sources, title, body }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => setIsCollapsed(true)} // Llama a setIsCollapsed cuando el mouse entra
      onMouseLeave={() => setIsCollapsed(false)} // Restaura el estado cuando el mouse sale
    >
      <Box
        sx={{
          height: "80px",
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box
        sx={{
          position: "relative", // Contenedor relativo para posicionar elementos hijos
          display: "inline-block", // Para que se ajuste al tamaño de la imagen
          transition: "transform 0.3s ease", // Agrega una transición suave para el cambio de tamaño
          "&:hover": {
            transform: "scale(1.05)", // Escala un 5% al hacer hover
            cursor: "pointer",
          },
          width: "100%",
        }}
      >
        <Swiper
          modules={[Pagination, Navigation]}
          pagination
          loop
          navigation
          slidesPerView={1}
          style={{ width: "100%" }}
        >
          {sources.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={src}
                loading="lazy"
                decoding="async"
                
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  border: "2px solid #fae25c",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 50, // tamaño del círculo
            height: isCollapsed ? 0 : 50, // Se colapsa a 0 cuando el flag es true
            opacity: isCollapsed ? 0 : 1, // Hace que el círculo se desvanezca al colapsar

            overflow: "hidden", // Evita que los contenidos se vean cuando está colapsado
            transition: "height 0.3s ease, opacity 0.3s ease", // Aplica transiciones en la altura y opacidad

            borderRadius: "50%", // hace el círculo
            backgroundColor: "#fae25c", // color de fondo del círculo
            color: "black", // color del ícono
            position: "absolute",
            bottom: 0, // centrar verticalmente
            left: "50%", // centrar horizontalmente
            transform: "translateX(-50%) translateY(50%)",
            zIndex: 1, // Asegura que el círculo esté sobre la imagen
          }}
        >
          <KeyboardDoubleArrowDownIcon />
        </Box>
      </Box>
      <Box
        sx={{
          borderRadius: "0 0 10px 10px",
          backgroundColor: "rgba(235, 52, 204, 0.5)",
          border: isCollapsed ? "2px solid #fae25c" : 0,
          height: isCollapsed ? "200px" : 0,
          overflow: "hidden",
          transition: "max-height 0.5s ease-in-out, height 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" sx={{ color: "white" }}>
          {body}
        </Typography>
      </Box>
    </Box>
  );
};

export default StyledImage;
