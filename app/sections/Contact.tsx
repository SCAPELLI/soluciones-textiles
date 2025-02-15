"use client";
import { Typography } from "@mui/material";
import StyledBox from "./StyledBox";
import Grid from "@mui/material/Grid2";
import { CustomMap } from "./CustomMap";
import { Location } from "../components/Location";
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
      <Grid
        container
        spacing={3}
        sx={{ marginTop: "20px", width: "100%", marginBottom: "30px" }}
      >
        <Grid size={{ xs: 12, md: 3 }}>
          <Typography
            variant="h5"
            sx={{ color: "#cc55cc", fontWeight: "bold" }}
          >
            Dirección
          </Typography>
          <Typography variant="body2">
            Membrillar 51, Local 74 <br /> CABA, Argentina
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Typography
            variant="h5"
            sx={{ color: "#cc55cc", fontWeight: "bold" }}
          >
            Contacto
          </Typography>
          <Typography variant="body2">
            <br />
            011 2251-5703
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Typography
            variant="h5"
            sx={{ color: "#cc55cc", fontWeight: "bold" }}
          >
            Horario
          </Typography>
          <Typography variant="body2">
            Lunes a Viernes <br /> 10 a 13 hs - 14 a 19 hs <br /> Sábados 10 a
            13 hs
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Typography
            variant="h5"
            sx={{ color: "#cc55cc", fontWeight: "bold" }}
          >
            Pagos
          </Typography>
          <Typography variant="body2">
            Efectivo - Tarjetas <br /> Mercado Pago - MODO <br /> Transferencia
          </Typography>
        </Grid>
      </Grid>

      <CustomMap />
      <Location />
    </StyledBox>
  );
}
