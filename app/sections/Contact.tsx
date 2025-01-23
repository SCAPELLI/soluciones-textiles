import { Typography } from "@mui/material";
import StyledBox from "./StyledBox";
import { Map } from "@vis.gl/react-google-maps";

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
      <Typography variant="h3">SECCION CONTACTO</Typography>
      <Map
        style={{ width: "80vw", height: "400px" }}
        defaultCenter={{ lat: -34.62897840637906, lng: -58.46100151324344 }}
        defaultZoom={14}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />

      {/* <Grid container spacing={3} sx={{ marginTop: "20px", width: "50%" }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="body1" sx={{}}>
            En <span style={{ fontWeight: "bold" }}>Soluciones Textiles</span>{" "}
            <span style={{ color: "#cc55cc", fontWeight: "bold" }}>
              La Modista
            </span>{" "}
            , nos respaldan más de 40 años de experiencia en el rubro textil
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="body1" sx={{}}>
            {" "}
            Respetamos los tiempos de entrega acordados, entregando resultados
            que superan las expectativas
          </Typography>
        </Grid>
      </Grid> */}
    </StyledBox>
  );
}
