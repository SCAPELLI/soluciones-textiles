import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const Location = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        marginTop: "20px",
        width: "80%",
        justifyContent: "center",
        display: "flex",
        marginBottom: "30px",
      }}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <img
          src="mall.png"
          alt="map"
          width="90%"
          style={{
            border: "1px solid #cc55cc",
            borderRadius: "10px",
            justifySelf: "center",
          }}
        />
      </Grid>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant="h6">
          Visítanos en la{" "}
          <span style={{ color: "#cc55cc", fontWeight: "bold" }}>
            Galería San José de Flores.
          </span>{" "}
          <br /> Entrada por la calle Membrillar.
        </Typography>
      </Grid>
    </Grid>
  );
};
