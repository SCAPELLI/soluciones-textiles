// app/components/Location.tsx
"use client";

import Image from "next/image";
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
        overflow: "hidden", // 👈 asegura que la imagen respete el borde
      }}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/frente_local_falcon.jpeg"
          alt="Ubicación Local La Modista - Nuevo local a la calle"
          width={1200}   // 👈 ajustá a la resolución real si la sabés
          height={800}   // 👈 ratio importante para evitar CLS
          sizes="(max-width: 900px) 100vw, 50vw"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: isMobile
              ? "10px 10px 0 0"
              : "10px 0 0 10px",
            display: "block",
          }}
        />
      </Grid>

      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Typography variant={isMobile ? "h6" : "h5"}>
          Visítanos en nuestro{" "} <br />
          <span style={{ color: "#cc55cc", fontWeight: "bold" }}>
            nuevo local a la calle,
          </span>
          <br />
          a pocas cuadras del Subte A.
        </Typography>
      </Grid>
    </Grid>
  );
};
