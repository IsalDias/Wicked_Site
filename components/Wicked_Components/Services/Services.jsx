"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Services() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const lineWrapRef = useRef(null);
  const lineRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(eyebrowRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          headingRef.current,
          {
            y: 60,
            opacity: 0,
            duration: 1,
          },
          "-=0.2"
        )
        .from(
          textRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .fromTo(
          lineWrapRef.current,
          {
            opacity: 0,
            y: 16,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.5"
        )
        .fromTo(
          lineRef.current,
          {
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.1"
        );

      gsap.to(lineRef.current, {
        boxShadow:
          "0 0 12px rgba(255,0,0,0.35), 0 0 26px rgba(255,0,0,0.18)",
        repeat: -1,
        yoyo: true,
        duration: 1.6,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        gridRef.current,
        {
          opacity: 0.12,
          y: 0,
          scale: 1,
        },
        {
          opacity: 0.2,
          y: 18,
          scale: 1.03,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-6 py-40 text-white sm:px-10 lg:px-20"
    >
      {/* Animated grid background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          ref={gridRef}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(circle at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 85%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 85%)",
          }}
        />

        {/* soft glows */}
        <div className="absolute left-[-10%] top-[-10%] h-64 w-64 rounded-full blur-3xl" />
        <div className="absolute bottom-[-15%] right-[-10%] h-72 w-72 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p
            ref={eyebrowRef}
            className="mb-6 text-sm uppercase tracking-[0.25em] text-white/60"
          >
            Our Services
          </p>

          <h2
            ref={headingRef}
            className="text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Your big idea,
            <br />
            our creativity,
            <br />
            zero stress.
          </h2>

          <div ref={lineWrapRef} className="mt-8 w-full max-w-md">
            <div
              ref={lineRef}
              className="h-[3px] w-full rounded-full bg-red-600"
            />
          </div>

          <p
            ref={textRef}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            That’s what happens when WICKED Revelations gets involved. We bring
            creative direction, sharp execution, and memorable experiences
            together so your vision stands out and actually gets noticed.
          </p>
        </div>
      </div>
    </section>
  );
}