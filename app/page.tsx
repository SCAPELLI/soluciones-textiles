"use client";
import Box from "@mui/material/Box";
import { Services } from "./sections/Services";
import { AboutMe } from "./sections/AboutMe";
import { Hero } from "./sections/Hero";
import { Footer } from "./sections/Footer";

import { APIProvider } from "@vis.gl/react-google-maps";
import { Contact } from "./sections/Contact";
import { useEffect, useRef } from "react";
import { useStore } from "./store/store";
import { FloatingIcon } from "./components/FloatingIcon";

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const heroRef = useRef<HTMLDivElement>(null);
  const setHeroIsVisible = useStore((state) => state.setHeroIsVisible);

  if (!apiKey) {
    throw new Error(
      "Missing API key: Please define NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in your .env file."
    );
  } else {
    useEffect(() => {
      if (!heroRef.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHeroIsVisible(true);
          } else {
            setHeroIsVisible(false);
          }
        },
        { threshold: 0.7 } // Detecta cuando el Hero está menos del 10% visible
      );

      observer.observe(heroRef.current);

      return () => observer.disconnect();
    }, []);

    return (
      <APIProvider apiKey={apiKey}>
        <Box
          sx={{
            position: "relative",
            backgroundImage:
              "url(/ai_side_image_seamless_right.jpg), url(/ai_side_image_seamless_left.jpg)",
            backgroundRepeat: "repeat-y, repeat-y",
            backgroundPosition: "right, left",
            backgroundSize: "15% auto, 15% auto",
            backgroundColor: "#010206",
          }}
        >
          <div ref={heroRef}>
            <Hero />
          </div>
          <Contact />
          <AboutMe />
          <Services />
          <Footer />
          <FloatingIcon />
        </Box>
      </APIProvider>
    );
  }
}
