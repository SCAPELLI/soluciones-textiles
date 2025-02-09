import { Typography, Link } from "@mui/material";
import StyledBox from "./StyledBox";
import { Sections } from "../Constants/Sections";

export function Footer() {
  return (
    <StyledBox
      sx={{
        color: "white",
        padding: "20px",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#333",
        width: "100%",
        display: "flex",
        flexDirection: "row",
      }}
      id={Sections.CONTACT}
    >
      <img
        src="/datafiscal.png"
        alt="Data Fiscal"
        style={{
          width: "40px",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      />
      <Typography variant="caption" sx={{ color: "white" }}>
        Copyright © 2025 | Soluciones Textiles La Modista | Todos los Derechos
        Reservados.
      </Typography>
      <div style={{ display: "flex", flexGrow: 1 }} />

      <Typography variant="caption" sx={{ color: "white" }}>
        Sitio web creado por{" "}
        <Typography variant="caption" sx={{ fontWeight: "bold" }}>
          {" "}
          Sebastián Capelli{" "}
        </Typography>
      </Typography>
      <Link href="https://www.scapelli.ar" target="_blank" rel="noopener">
        <img
          src="/avatar.png"
          alt="Sebastián Capelli"
          style={{ width: "40px", marginLeft: "10px", marginRight: "80px" }}
        />
      </Link>
    </StyledBox>
  );
}
