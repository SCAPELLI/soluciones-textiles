import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const Location = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      sx={{
        marginTop: "20px",
        width: "80%",
        justifyContent: "space-between",
        display: "flex",
        marginBottom: "30px",
        border: "2px solid #fae25c",
        borderRadius: "10px",
      }}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <img
          src="mall.png"
          alt="map"
          width="100%"
          style={{
            borderRadius: isMobile ? "10px 10px 0 0" : "10px 0 0 10px",
            justifySelf: "center",
          }}
        />
      </Grid>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant={isMobile ? "h6" : "h5"}>
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
