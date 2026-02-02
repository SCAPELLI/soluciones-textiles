// app/page.tsx
"use client";

import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { APIProvider } from "@vis.gl/react-google-maps";
import { useEffect, useRef, useState } from "react";

import { Services } from "./sections/Services";
import { AboutMe } from "./sections/AboutMe";
import { Hero } from "./sections/Hero";
import { Footer } from "./sections/Footer";
import { Contact } from "./sections/Contact";
import { FloatingIcon } from "./components/FloatingIcon";
import { Slogan } from "./sections/Slogan";
import { useStore } from "./store/store";
import { RelocationModal } from "./components/MoveNoticeModal";

import {
  shouldShowRelocationModal,
  markRelocationModalShown,
} from "./helpers/modal_control";

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const heroRef = useRef<HTMLDivElement>(null);
  const setHeroIsVisible = useStore((state) => state.setHeroIsVisible);

  const [relocationOpen, setRelocationOpen] = useState(false);

  if (!apiKey) {
    throw new Error(
      "Missing API key: Please define NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in your .env file."
    );
  }

  useEffect(() => {
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroIsVisible(entry.isIntersecting);
      },
      { threshold: 0.7 }
    );

    observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, [setHeroIsVisible]);

  // ✅ Modal: máximo 2 veces por día y no aparece desde junio 2026
  useEffect(() => {
    if (shouldShowRelocationModal()) {
      setRelocationOpen(true);
      markRelocationModalShown();
    }
  }, []);

  const closeRelocationModal = () => {
    setRelocationOpen(false);
  };

  return (
    <APIProvider apiKey={apiKey}>
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#010206",
          backgroundImage:
            "url(/ai_side_image_seamless_right_updated.png), url(/ai_side_image_seamless_left_updated.png)",
          backgroundRepeat: "repeat-y, repeat-y",
          backgroundPosition: "right, left",
          backgroundSize: "15% auto, 15% auto",
          "@supports (background-image: image-set(url('/x.webp') type('image/webp')))":
            {
              backgroundImage: `
                image-set(
                  url(/ai_side_image_seamless_right_updated.webp) type('image/webp'),
                  url(/ai_side_image_seamless_right_updated.png) type('image/png')
                ),
                image-set(
                  url(/ai_side_image_seamless_left_updated.webp) type('image/webp'),
                  url(/ai_side_image_seamless_left_updated.png) type('image/png')
                )
              `,
            },
        }}
      >
        <RelocationModal open={relocationOpen} onClose={closeRelocationModal} />

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
