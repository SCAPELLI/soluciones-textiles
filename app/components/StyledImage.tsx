"use client";

import { Box, Typography } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useState } from "react";

interface StyledImageProps {
  src: string;
}

const StyledImage: React.FC<StyledImageProps> = ({ src }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4">Sastreria</Typography>
      <Box
        sx={{
          position: "relative", // Contenedor relativo para posicionar elementos hijos
          display: "inline-block", // Para que se ajuste al tamaño de la imagen
        }}
        onMouseEnter={() => setIsCollapsed(true)} // Llama a setIsCollapsed cuando el mouse entra
        onMouseLeave={() => setIsCollapsed(false)} // Restaura el estado cuando el mouse sale
      >
        <img
          src={src}
          alt={src}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px 10px 0 0",
            border: "2px solid #fae25c",
          }}
        />
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
          }}
        >
          <KeyboardDoubleArrowDownIcon />
        </Box>
      </Box>
      <Box
        sx={{
          borderRadius: "0 0 10px 10px",
          backgroundColor: "rgba(235, 52, 204, 0.5)",
          border: "2px solid #fae25c",
          height: isCollapsed ? "200px" : 0,
          overflow: "hidden",
          transition: "max-height 0.5s ease-in-out, height 0.3s ease",
        }}
      >
        <Typography variant="h5" sx={{ color: "white" }}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
        </Typography>
      </Box>
    </Box>
  );
};

export default StyledImage;
