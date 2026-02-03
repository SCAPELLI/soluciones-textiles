"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  open: boolean;
  onClose: () => void;
};

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/GDE5zHdNSsK6wiTy7";

export function RelocationModal({ open, onClose }: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={false} // 🔑 dejamos de depender de "md" para controlar nosotros
      PaperProps={{
        sx: {
          backgroundColor: "#000",
          borderRadius: 2,
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.75)",
          position: "relative",

          // ✅ tamaño estable por viewport (independiente del zoom en gran medida)
          width: "min(1200px, 92vw)",
          maxHeight: "86vh",

          // ✅ mata overflow horizontal
          overflow: "hidden",
        },
      }}
    >
      <IconButton
        aria-label="Cerrar"
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          zIndex: 2,
          color: "rgba(255,255,255,0.7)",
          "&:hover": { color: "white" },
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent
        sx={{
          p: 2,
          backgroundColor: "#000",

          // ✅ no scroll horizontal
          overflowX: "hidden",

          // ✅ si hace falta, scroll vertical (mejor UX que horizontal)
          overflowY: "auto",

          // ✅ usar el alto disponible del Paper (deja lugar al botón)
          maxHeight: "calc(86vh - 84px)", // ~alto de acciones (aprox)
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* AVISO */}
          <Box
            component="img"
            src="/nos_mudamos.png"
            alt="Aviso de mudanza - La Modista"
            sx={{
              flex: { md: "1 1 0" },
              minWidth: 0, // 🔑 evita overflow en flex
              width: "100%",
              maxHeight: { xs: "42vh", md: "62vh" },
              objectFit: "contain",
              display: "block",
              borderRadius: 1.5,
            }}
          />

          {/* FOTO LOCAL */}
          <Box
            component="img"
            src="/frente_local_falcon.jpeg"
            alt="Frente del nuevo local - La Modista"
            sx={{
              flex: { md: "1 1 0" },
              minWidth: 0, // 🔑 evita overflow en flex
              width: "100%",
              maxHeight: { xs: "42vh", md: "62vh" },
              objectFit: "contain",
              display: "block",
              borderRadius: 1.5,
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
        </Box>
      </DialogContent>

      {/* Tu DialogActions igual */}
      <DialogActions
        sx={{
          p: 2,
          pt: 0,
          backgroundColor: "#000",
          justifyContent: "center",
        }}
      >
        <Button
          variant="outlined"
          component="a"
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          sx={{
            px: 3,
            py: 1,
            borderRadius: 2,
            borderColor: "rgba(255,255,255,0.35)",
            color: "white",
            "&:hover": {
              borderColor: "rgba(255,255,255,0.7)",
            },
          }}
        >
          Ver en Google Maps
        </Button>
      </DialogActions>
    </Dialog>


  );
}
