import Image from "next/image";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { Hero } from "./sections/hero";

export default function Home() {
  return (
    <Box>
      <Hero />

      <Typography variant="h2">Acerca de mi</Typography>

      <Typography variant="h2">Servicios</Typography>

      <Typography variant="h2">Ubicacion</Typography>

      <Typography variant="h2">Contacto</Typography>
    </Box>
  );
}
