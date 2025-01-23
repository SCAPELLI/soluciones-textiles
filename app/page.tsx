"use client";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Services } from "./sections/Services";
import { AboutMe } from "./sections/AboutMe";
import { Hero } from "./sections/Hero";
import { Contact } from "./sections/Contact";
import { APIProvider } from "@vis.gl/react-google-maps";

export default function Home() {
  // const apiKey = process.env.GOOGLE_MAPS_API_KEY || "";
  // if (!apiKey) {
  //   throw new Error(
  //     "Missing API key: Please define GOOGLE_MAPS_API_KEY in your .env file."
  //   );
  // }
  return (
    <APIProvider apiKey={"AIzaSyD8bEDCidZ4VkK3oMshLD7FuQGUoUnIUAA"}>
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

        <Contact />
      </Box>
    </APIProvider>
  );
}
