import Image from "next/image";
import { Typography, Link } from "@mui/material";
import StyledBox from "./StyledBox";
import { Sections } from "../Constants/Sections";

export function Footer() {
  return (
    <StyledBox
      sx={{
        color: "white",
        padding: "1px",
        paddingRight: "100px",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#333",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        height: "120px",
      }}
      id={Sections.CONTACT}
    >
      <Image
        src="/datafiscal.png"
        alt="Data Fiscal"
        width={40}
        height={40}
        style={{
          width: "40px",
          height: "auto",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      />

      <Typography variant="caption" sx={{ color: "white" }}>
        Copyright © 2025 | Todos los Derechos Reservados.
      </Typography>

      <div style={{ display: "flex", flexGrow: 1, minWidth: "10px" }} />

      <Typography variant="caption" sx={{ color: "white" }}>
        Sitio web creado por{" "}
        <Typography variant="caption" sx={{ fontWeight: "bold" }}>
          {" "}
          Sebastián Capelli{" "}
        </Typography>
      </Typography>

      <Link href="https://www.scapelli.ar" target="_blank" rel="noopener">
        {/* Next Image necesita un contenedor o dimensiones fijas si querés height auto */}
        <Image
          src="/avatar.png"
          alt="Sebastián Capelli"
          width={70}   // base para ratio (ajustable)
          height={70}  // si tu avatar no es cuadrado, lo cambiamos a su ratio real
          style={{
            marginLeft: "10px",
            height: "70px",
            width: "auto",
            minWidth: "50px",
            objectFit: "contain",
          }}
        />
      </Link>
    </StyledBox>
  );
}
