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

      <Typography variant="body1" marginTop={2}>
        En La Modista, ofrecemos una amplia variedad de servicios que reflejan
        nuestro compromiso con la calidad y el cumplimiento
      </Typography>

      <Grid container spacing={3} sx={{ width: "80%" }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <StyledImage
            src="/sastreria_formatted.jpeg"
            title="Sastrería y Reparaciones"
            body="Ofrecemos servicios de sastrería, reparaciones y entallados a medida, asegurando que tus prendas se ajusten perfectamente a tu estilo."
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <StyledImage
            src="/merceria_formatted.jpg"
            title="Mercería"
            body="Disponemos de insumos y materiales de alta calidad para satisfacer todas tus necesidades textiles."
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <StyledImage
            src="/confecciones_formatted.jpg"
            title="Confecciones y Disfraces"
            body="Confeccionamos ropa y disfraces a medida, siempre adaptados a las solicitudes particulares de nuestros clientes, con atención a cada detalle."
          />
        </Grid>
      </Grid>
    </StyledBox>
  );
}
