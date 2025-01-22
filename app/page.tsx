import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Services } from "./sections/Services";
import { AboutMe } from "./sections/AboutMe";
import { Hero } from "./sections/Hero";

export default function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage:
          "url(/ai_side_image_seamless_right.jpg), url(/ai_side_image_seamless_left.jpg)",
        backgroundRepeat: "repeat-y, repeat-y",
        backgroundPosition: "right, left",
        backgroundSize: "20% auto, 20% auto",
        backgroundColor: "#010206",
      }}
    >
      <Hero />
      <Services />
      <AboutMe />

      <Typography variant="h2">Ubicacion</Typography>

      <Typography variant="h2">Contacto</Typography>
    </Box>
  );
}
