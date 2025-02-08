import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import StyledBox from "./StyledBox";
import { Sections } from "../Constants/Sections";

export function AboutMe() {
  return (
    <StyledBox
      sx={{
        color: "white",
        flexDirection: "column",
        padding: "20px",
        textAlign: "center",
      }}
      id={Sections.ABOUT_ME}
    >
      <Typography variant="h3">Quiénes Somos</Typography>

      <Grid container spacing={3} sx={{ marginTop: "20px", width: "50%" }}>
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
      </Grid>
    </StyledBox>
  );
}
