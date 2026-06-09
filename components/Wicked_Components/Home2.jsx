"use client";

import React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Stack,
  Typography,
  MobileStepper,
  IconButton,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import latest1 from "../../public/images/wicked-01-01.jpg";
import latest2 from "../../public/images/wicked-01-02.jpg";

const slides = [
  {
    kicker: "WICKED REVELATIONS",
    title: "ONE TEAM. EVERY SERVICE. BUILT FOR YOUR MOMENT",
    subtitle: "Ready to get Wicked?",
    image: latest1,
  },
  {
    kicker: "WICKED REVELATIONS",
    title: "UNVEILING YOUR WICKED DREAMS",
    subtitle:
      "Event planning, production, and unforgettable experiences, done right.",
    image: latest2,
  },
  {
    kicker: "WICKED REVELATIONS",
    title: "YOUR EVENT. OUR GOAL.",
    subtitle: "Planning the next big event in town? Let’s make it WICKED.",
    image: latest1,
  },
];

function HeroSlide({ slide, active, max, next, back }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "70vh", md: "75vh" },
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        priority
        style={{ objectFit: "cover" }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.2) 100%)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          px: { xs: 3, md: 10 },
        }}
      >
        <Box sx={{ maxWidth: 900 }}>
          <Typography
            variant="overline"
            sx={{ letterSpacing: 2, color: "rgba(255,255,255,0.8)" }}
          >
            {slide.kicker}
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontWeight: 900,
              lineHeight: 1.05,
              fontSize: { xs: 32, md: 64 },
              color: "#fff",
            }}
          >
            {slide.title}
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: 16, md: 20 },
              color: "rgba(255,255,255,0.8)",
            }}
          >
            {slide.subtitle}
          </Typography>

          <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#fff",
                color: "#000",
                px: 4,
                py: 1.5,
                "&:hover": { bgcolor: "#ddd" },
              }}
            >
              LET’S CHAT
            </Button>

            <Button
              variant="text"
              sx={{
                color: "#fff",
                fontWeight: 600,
                "&:hover": { color: "#ccc" },
              }}
            >
              VIEW HIGHLIGHTS
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* Controls ON the image */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 24,
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 4 },
        }}
      >
        <IconButton
          onClick={back}
          sx={{
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.25)",
            bgcolor: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(6px)",
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.55)",
            },
          }}
        >
          <KeyboardArrowLeft />
        </IconButton>

        <MobileStepper
          variant="dots"
          steps={max}
          position="static"
          activeStep={active}
          nextButton={null}
          backButton={null}
          sx={{
            bgcolor: "transparent",
            ".MuiMobileStepper-dot": {
              bgcolor: "rgba(255,255,255,0.35)",
            },
            ".MuiMobileStepper-dotActive": {
              bgcolor: "#fff",
            },
          }}
        />

        <IconButton
          onClick={next}
          sx={{
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.25)",
            bgcolor: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(6px)",
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.55)",
            },
          }}
        >
          <KeyboardArrowRight />
        </IconButton>
      </Box>
    </Box>
  );
}

export default function Home2() {
  const [active, setActive] = React.useState(0);
  const max = slides.length;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % max);
    }, 6000);

    return () => clearInterval(timer);
  }, [max]);

  const next = () => setActive((prev) => (prev + 1) % max);
  const back = () => setActive((prev) => (prev - 1 + max) % max);

  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <HeroSlide
        slide={slides[active]}
        active={active}
        max={max}
        next={next}
        back={back}
      />
    </Box>
  );
}