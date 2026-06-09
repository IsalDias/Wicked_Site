"use client";

import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Stack,
} from "@mui/material";
import latest1 from "@/public/images/wicked-ev-1.png";
import latest2 from "@/public/images/wicked-ev-2.jpg";
import latest3 from "@/public/images/wicked-ev-3.jpg";
import latest4 from "@/public/images/wicked-ev-4.jpg";

const items = [
  {
    title: "Event Management",
    desc: "Entertainment, Production, and Post-production",
    image: latest1,
  },
  {
    title: "Music Production",
    desc: "Mix and Master, Lyrics, Recording, Composition",
    image: latest2,
  },
  {
    title: "Photography & Videography",
    desc: "A long lasting story, captured through lenses for the whole world to see",
    image: latest3,
  },
  {
    title: "Graphic Designing",
    desc: "Bold visuals built to stand out and be remembered",
    image: latest4,
  },
  {
    title: "Branding",
    desc: "A business identity that speaks volumes",
    image: latest1,
  },
];

function ServiceCard({ title, desc, image }) {
  return (
    <Card
      elevation={0}
      sx={{
        height: 420,
        borderRadius: 4,
        overflow: "hidden",
        backgroundColor: "#fff",
        transition: "transform 300ms ease, box-shadow 300ms ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.12)",
        },
      }}
    >
      <CardActionArea sx={{ height: "100%" }}>
        <Box sx={{ position: "relative", height: 220, width: "100%" }}>
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 1200px) 33vw, 33vw"
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)",
            }}
          />
        </Box>

        <CardContent
          sx={{
            p: 3,
            height: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 500, fontSize: 20, color: "#111" }}>
              {title}
            </Typography>

            <Typography
              sx={{
                mt: 1.5,
                color: "rgba(0,0,0,0.65)",
                fontSize: 15,
                lineHeight: 1.6,
              }}
            >
              {desc}
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 800,
              color: "#000",
              letterSpacing: 0.8,
              textTransform: "uppercase",
            }}
          >
            Explore →
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function WhatWeDo() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Stack spacing={1.5} sx={{ mb: 5 }}>
          <Typography
            sx={{ fontWeight: 900, fontSize: { xs: 30, md: 40 }, color: "#000" }}
          >
            What We Do?
          </Typography>
          <Typography sx={{ color: "rgba(0,0,0,0.70)", fontSize: 17 }}>
            You name it, we&apos;ll bring it to life
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gap: 4,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
          }}
        >
          {items.map((it) => (
            <ServiceCard
              key={it.title}
              title={it.title}
              desc={it.desc}
              image={it.image}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}