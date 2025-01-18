import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import StyledBox from "./StyledBox";
import StyledImage from "../components/StyledImage";

export function Services() {
  return (
    <StyledBox
      sx={{
        color: "white",
        flexDirection: "column",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Typography variant="h3">Servicios</Typography>

      <Grid container spacing={3} sx={{ marginTop: "20px", width: "80%" }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <StyledImage src="/merceria.jpg" />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <StyledImage src="/sastreria.jpeg" />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <StyledImage src="/sastreria.jpeg" />
        </Grid>
      </Grid>
    </StyledBox>
  );
}
