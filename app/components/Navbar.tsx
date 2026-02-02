"use client";

import Image from "next/image";
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
  const heroIsVisible = useStore((state) => state.heroIsVisible);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const handleNavClick = (
    id: string,
    event?: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event?.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ block: "start" });
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

      {/* Drawer logo */}
      <Image
        src="/logo_sin_datos_sin_lado_letra_negra.png"
        alt="Soluciones Textiles La Modista"
        width={600}   // base para ratio (ajustable)
        height={200}  // base para ratio (ajustable)
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
          <Box sx={{ display: { sm: "none" }, mr: 2, width: "36%" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              width: "40%",
              justifyContent: "flex-start",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item}
                onClick={(e) => handleNavClick(item, e)}
                color="inherit"
                underline="none"
                marginLeft={1}
                sx={{ fontSize: "13px", "&:hover": { opacity: 0.7 } }}
              >
                {item}
              </Link>
            ))}
          </Box>

          {/* Logo central */}
          <Box
            sx={{
              display: "flex",
              width: "20%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Le damos una "caja" estable para evitar rarezas de layout */}
            <Box
              sx={{
                minWidth: "150px",
                maxHeight: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/logo_sin_datos_sin_lado.png"
                alt="Soluciones Textiles La Modista"
                width={800}   // base ratio (ajustable)
                height={220}  // base ratio (ajustable)
                style={{
                  width: "auto",
                  height: "40px", // clave: fijamos alto como tu diseño original
                  transition:
                    "opacity 0.1s ease-in-out, transform 0.1s ease-in-out",
                  opacity: heroIsVisible ? 0 : 1,
                  transform: heroIsVisible
                    ? "translateY(14px)"
                    : "translateY(0)",
                }}
              />
            </Box>
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
            {/* íconos chicos -> no tocamos */}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/+5491122515703/?text=${Content.whatsapp.message}`}
              underline="none"
              sx={{
                marginLeft: "1rem",
                transition: "transform 0.1s ease-in-out",
                "&:hover": { transform: "scale(1.2)", cursor: "pointer" },
              }}
            >
              <img
                src="/icons/whatsapp_small.png"
                alt="WhatsApp"
                style={{ width: "36px", height: "36px" }}
              />
            </Link>

            <Link
              href="https://www.facebook.com/stlamodista"
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                marginLeft: "1rem",
                transition: "transform 0.1s ease-in-out",
                "&:hover": { transform: "scale(1.2)", cursor: "pointer" },
              }}
            >
              <img
                src="/icons/facebook_small.png"
                alt="Facebook"
                style={{ width: "36px", height: "36px" }}
              />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
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
