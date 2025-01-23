import { Typography } from "@mui/material";
import StyledBox from "./StyledBox";
import { Map } from "@vis.gl/react-google-maps";
import Grid from "@mui/material/Grid2";

export function Contact() {
  return (
    <StyledBox
      sx={{
        color: "white",
        flexDirection: "column",
        padding: "20px",
        textAlign: "center",
      }}
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

      <Map
        style={{ width: "80vw", height: "400px" }}
        defaultCenter={{ lat: -34.62897840637906, lng: -58.46100151324344 }}
        defaultZoom={14}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </StyledBox>
  );
}
