"use client";
import Box from "@mui/material/Box";
import { Services } from "./sections/Services";
import { AboutMe } from "./sections/AboutMe";
import { Hero } from "./sections/Hero";

import { APIProvider } from "@vis.gl/react-google-maps";
import { Contact } from "./sections/Contact";

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  if (!apiKey) {
    throw new Error(
      "Missing API key: Please define NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in your .env file."
    );
  } else {
    return (
      <APIProvider apiKey={apiKey}>
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
}
