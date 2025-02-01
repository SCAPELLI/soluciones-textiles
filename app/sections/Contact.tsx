"use client";
import { Typography } from "@mui/material";
import StyledBox from "./StyledBox";
import {
  AdvancedMarker,
  ControlPosition,
  InfoWindow,
  Map,
  MapControl,
  Pin,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { CustomMap } from "./CustomMap";

export function Contact() {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const [mark, setMark] = useState(Date.now());

  const [zoom, setZoom] = useState(15);
  const [controlPosition, setControlControlPosition] =
    useState<ControlPosition>(ControlPosition.LEFT_BOTTOM);
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

      <CustomMap />
    </StyledBox>
  );
}

const styles = {
  map: {
    height: "400px",
    width: "60vw",
    borderRadius: "10px",
    border: "3px solid #fae25c",
    overflow: "hidden",
  },
};
