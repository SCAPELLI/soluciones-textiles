// app/page.tsx
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
import { Container } from "@mui/material";
import { Slogan } from "./sections/Slogan";

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
            backgroundColor: "#010206",

            // Fallback para navegadores viejos
            backgroundImage:
              "url(/ai_side_image_seamless_right.jpg), url(/ai_side_image_seamless_left.jpg)",
            backgroundRepeat: "repeat-y, repeat-y",
            backgroundPosition: "right, left",
            backgroundSize: "15% auto, 15% auto",

            // Navegadores modernos: WebP
            "@supports (background-image: image-set(url('/x.webp') type('image/webp')))": {
              backgroundImage: `
        image-set(
          url(/ai_side_image_seamless_right.webp) type('image/webp'),
          url(/ai_side_image_seamless_right.jpg) type('image/jpeg')
        ),
        image-set(
          url(/ai_side_image_seamless_left.webp) type('image/webp'),
          url(/ai_side_image_seamless_left.jpg) type('image/jpeg')
        )
      `,
            },
          }}
        >

          <div ref={heroRef}>
            <Hero />
          </div>

          <Container
            sx={{
              width: "73%",
              display: "flow",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "transparent",
            }}
          >
            <Slogan />
            <AboutMe />
            <Services />
            <Contact />
          </Container>
          <Footer />
          <FloatingIcon />
        </Box>
      </APIProvider>
    );
  }
}
