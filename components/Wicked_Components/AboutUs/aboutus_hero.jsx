"use client";

import React, { useEffect, useRef } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import gsap from "gsap";

export default function AboutusHero() {
  const glow1Ref = useRef(null);
  const glow2Ref = useRef(null);
  const noiseRef = useRef(null);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) return;

    const ctx = gsap.context(() => {
      // soft drifting glows
      gsap.to(glow1Ref.current, {
        x: 120,
        y: -60,
        duration: 10,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(glow2Ref.current, {
        x: -140,
        y: 80,
        duration: 12,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // subtle noise shimmer (very light)
      gsap.to(noiseRef.current, {
        opacity: 0.12,
        duration: 2.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh", // ✅ full screen
        overflow: "hidden",
        bgcolor: "#000",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Base gradient */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(1100px 600px at 20% 20%, rgba(255,255,255,0.08), transparent 55%), radial-gradient(900px 500px at 80% 70%, rgba(255,255,255,0.06), transparent 60%), linear-gradient(180deg, #000 0%, #050505 45%, #000 100%)",
        }}
      />

      {/* Moving glow layers */}
      <Box
        ref={glow1Ref}
        sx={{
          position: "absolute",
          width: 720,
          height: 720,
          left: "-180px",
          top: "-220px",
          borderRadius: "999px",
          filter: "blur(50px)",
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.10), rgba(255,255,255,0.02) 45%, transparent 70%)",
          pointerEvents: "none",
          mixBlendMode: "screen",
          opacity: 0.9,
        }}
      />
      <Box
        ref={glow2Ref}
        sx={{
          position: "absolute",
          width: 820,
          height: 820,
          right: "-240px",
          bottom: "-280px",
          borderRadius: "999px",
          filter: "blur(60px)",
          background:
            "radial-gradient(circle at 60% 40%, rgba(255,255,255,0.09), rgba(255,255,255,0.02) 50%, transparent 72%)",
          pointerEvents: "none",
          mixBlendMode: "screen",
          opacity: 0.85,
        }}
      />

      {/* Grid overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: { xs: "36px 36px", md: "44px 44px" },
          opacity: 0.10,
          maskImage:
            "radial-gradient(closest-side at 50% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Extra thin “scanline” gradient for depth */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 18%, transparent 82%, rgba(255,255,255,0.04))",
          opacity: 0.25,
        }}
      />

      {/* Animated noise (no external image needed) */}
      <Box
        ref={noiseRef}
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.08,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
          backgroundSize: "220px 220px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          px: { xs: 3, md: 10 },
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        <Typography
          variant="overline"
          sx={{ letterSpacing: 2.5, color: "rgba(255,255,255,0.78)" }}
        >
          WICKED REVELATIONS
        </Typography>

        <Typography
          sx={{
            mt: 1.5,
            fontWeight: 900,
            lineHeight: 1.05,
            textTransform: "uppercase",
            fontSize: { xs: 34, sm: 48, md: 70 },
            color: "#fff",
            maxWidth: 980,
          }}
        >
          This is WICKED Revelations
        </Typography>

        <Typography
          sx={{
            mt: 2,
            fontSize: { xs: 16, md: 20 },
            color: "rgba(255,255,255,0.82)",
            maxWidth: 900,
          }}
        >
          We are your exclusive live entertainment partner for experiences that
          steal the spotlight. Whether it&apos;s event management, music tours,
          concert promotions, creative production, or photography, we guarantee
          an experience that you&apos;ll cherish.
        </Typography>

        <Typography
          sx={{
            mt: 2.2,
            fontWeight: 800,
            fontSize: { xs: 18, md: 22 },
            color: "rgba(255,255,255,0.92)",
          }}
        >
          This is where your story comes to life
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mt: 4, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            href="#about"
            sx={{
              bgcolor: "#fff",
              color: "#000",
              px: 3.5,
              py: 1.4,
              fontWeight: 900,
              borderRadius: 2,
              "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
            }}
          >
            Learn More
          </Button>

          <Button
            variant="outlined"
            href="#contact"
            sx={{
              borderColor: "rgba(255,255,255,0.5)",
              color: "#fff",
              px: 3.5,
              py: 1.4,
              fontWeight: 900,
              borderRadius: 2,
              "&:hover": { borderColor: "#fff" },
            }}
          >
            Contact Us
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}