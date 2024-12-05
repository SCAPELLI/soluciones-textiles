
import Image from "next/image";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { Services } from "./sections/Services";
import { AboutMe } from "./sections/AboutMe";
import { Hero } from "./sections/Hero";

export default function Home() {
  return (
    <Box>
      <Hero />
      <AboutMe />
      <Services />

      <Typography variant="h2">Ubicacion</Typography>

      <Typography variant="h2">Contacto</Typography>
    </Box>
  );
}
