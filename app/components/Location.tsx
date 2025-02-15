import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const Location = () => {
  return (
    <Grid container spacing={3} sx={{ marginTop: "20px", width: "80%" }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <img
          src="mall.png"
          alt="map"
          width="80%"
          style={{
            border: "1px solid #cc55cc",
            borderRadius: "10px",
          }}
        />
      </Grid>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant="body1" sx={{ textAlign: "justify" }}>
          Visítanos en la Galería San José de Flores, entrada por la calle
          Membrillar.
        </Typography>
      </Grid>
    </Grid>
  );
};
