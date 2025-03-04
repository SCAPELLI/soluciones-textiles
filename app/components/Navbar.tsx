"use client";

import {
  AppBar,
  Toolbar,
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
import { Sections } from "../Constants/Sections";
import { Content } from "../Constants/Content";

const navItems = [
  Sections.HOME,
  Sections.ABOUT_ME,
  Sections.SERVICES,
  Sections.CONTACT,
];
const drawerWidth = 240;

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const heroIsVisible = useStore((state) => state.heroIsVisible);

  const handleNavClick = (
    id: string,
    event?: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event?.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        block: "start",
      });
      window.scrollBy(0, -60);
    }
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }} onClick={handleDrawerToggle}>
      <div style={{ height: 60 }} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "left" }}
              onClick={() => handleNavClick(item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <img
        src="/logo_sin_datos_sin_lado_letra_negra.png"
        alt="Soluciones Textiles La Modista"
        style={{
          position: "absolute",
          bottom: 8,
          right: 6,
          width: "180px",
          height: "auto",
        }}
      />
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: "#333" }}>
        <Toolbar>
          {/* Icono de menú en pantallas pequeñas */}
          <Box
            sx={{
              display: { sm: "none" },
              mr: 2,
              width: "36%",
              alignItems: "left",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          {/* Links en pantallas grandes */}
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                width: "40%",
                justifyContent: "flex-start",
                flexDirection: "row",
                cursor: "pointer",
              },
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item}
                onClick={(e) => handleNavClick(item, e)}
                color="inherit"
                underline="none"
                marginLeft={1}
                sx={{
                  fontSize: "13px",
                  cursor: "pointer",
                  "&:hover": { opacity: 0.7 },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              width: "20%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/logo_sin_datos_sin_lado.png"
              alt="Soluciones Textiles La Modista"
              style={{
                width: "auto",
                maxHeight: "40px",
                minWidth: "150px",
                transition:
                  "opacity 0.1s ease-in-out, transform 0.1s ease-in-out",
                opacity: heroIsVisible ? 0 : 1,
                transform: heroIsVisible ? "translateY(14px)" : "translateY(0)",
              }}
            />
          </Box>

          <Box
            sx={{
              marginLeft: "auto",
              width: "40%",
              justifyContent: "flex-end",
              flexDirection: "row",
              display: "flex",
            }}
          >
            <Link
              key={"wpp"}
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/+5491122515703/?text=${Content.whatsapp.message}`}
              color="inherit"
              underline="none"
              sx={{
                marginLeft: "1rem",
                transition: "transform 0.1s ease-in-out",
                "&:hover": {
                  transform: "scale(1.2)",
                  cursor: "pointer",
                },
              }}
            >
              <img
                src="icons/whatsapp.png"
                alt="WhatsApp"
                style={{
                  width: "36px",
                  height: "36px",
                }}
              />
            </Link>
            <Link
              key={"facebook"}
              href="https://www.facebook.com/stlamodista"
              color="inherit"
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                marginLeft: "1rem",
                transition: "transform 0.1s ease-in-out",
                "&:hover": {
                  transform: "scale(1.2)",
                  cursor: "pointer",
                },
              }}
            >
              <img
                src="icons/facebook.png"
                alt="Facebook"
                style={{
                  width: "36px",
                  height: "36px",
                }}
              />
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
