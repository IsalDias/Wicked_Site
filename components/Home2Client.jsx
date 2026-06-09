"use client";

import dynamic from "next/dynamic";

// Load Home2 only on the client to avoid SSR hydration mismatches caused by MUI emotion styles.
// This keeps the rest of the page server-rendered while deferring this component to the client.
const Home2 = dynamic(() => import("@/components/Wicked_Components/Home2"), {
  ssr: false,
});

export default function Home2Client() {
  return <Home2 />;
}
