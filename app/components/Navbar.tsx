"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useStore } from "../store/store";

const navItems = ["Home", "About", "Services", "Contact"];
const drawerWidth = 240;

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const heroIsVisible = useStore((state) => state.heroIsVisible);

  const drawer = (
    <Box sx={{ textAlign: "center" }} onClick={handleDrawerToggle}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Logo
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: "#333" }}>
        <Toolbar>
          {/* Icono de menú en pantallas pequeñas */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Links en pantallas grandes */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                color="inherit"
                underline="none"
                sx={{ marginLeft: "1rem" }}
              >
                {item}
              </Link>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/logo_sin_datos_sin_lado.png"
              alt="Soluciones Textiles La Modista"
              style={{
                width: "auto",
                height: "40px",
                transition:
                  "opacity 0.2s ease-in-out, transform 0.1s ease-in-out",
                opacity: heroIsVisible ? 0 : 1,
                transform: heroIsVisible ? "translateY(14px)" : "translateY(0)",
              }}
            />
          </Box>

          <Box sx={{ marginLeft: "auto" }}>
            <Link
              key={"wpp"}
              href="#"
              color="inherit"
              underline="none"
              sx={{ marginLeft: "1rem" }}
            >
              {"Whatsapp"}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer en pantallas pequeñas */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Mejora el rendimiento en móviles
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};
