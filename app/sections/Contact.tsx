"use client";
import { Typography } from "@mui/material";
import StyledBox from "./StyledBox";
import Grid from "@mui/material/Grid2";
import { CustomMap } from "./CustomMap";
import { Sections } from "../Constants/Sections";

export function Contact() {
  return (
    <StyledBox
      sx={{
        color: "white",
        flexDirection: "column",
        padding: "20px",
        textAlign: "center",
      }}
      id={Sections.CONTACT}
    >
      <Grid container spacing={3} sx={{ marginTop: "20px", width: "60%" }}>
        <Grid size={{ xs: 12, md: 3 }}>
          <Typography
            variant="h5"
            sx={{ color: "#cc55cc", fontWeight: "bold" }}
          >
            Dirección
          </Typography>
          <Typography variant="body1">
            Membrillar 51, Local 41 <br /> Flores <br /> CABA, Argentina
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Typography
            variant="h5"
            sx={{ color: "#cc55cc", fontWeight: "bold" }}
          >
            Contacto
          </Typography>
          <Typography variant="body1">
            <br />
            011 2251-5703
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Typography
            variant="h5"
            sx={{ color: "#cc55cc", fontWeight: "bold" }}
          >
            Horario de atención
          </Typography>
          <Typography variant="body1">
            Lunes a Viernes <br /> 10 a 13 hs - 14 a 19 hs <br /> Sábados 10 a
            13 hs
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Typography
            variant="h5"
            sx={{ color: "#cc55cc", fontWeight: "bold" }}
          >
            Formas de pago
          </Typography>
          <Typography variant="body1">
            Efectivo - Tarjetas <br /> Mercado Pago <br /> Transferencia
          </Typography>
        </Grid>
      </Grid>

      <CustomMap />
    </StyledBox>
  );
}
