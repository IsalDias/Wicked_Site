"use client";

// Home1.jsx
import { useEffect, useRef } from "react";
import Image from "next/image";
import latest3 from "../../public/images/backgroun-wicked-1.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home1 = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !bgRef.current ||
      !contentRef.current ||
      !titleRef.current ||
      !subTitleRef.current ||
      !textRef.current ||
      !buttonRef.current
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, subTitleRef.current, textRef.current, buttonRef.current], {
        opacity: 0,
        y: 40,
      });

      gsap.set(bgRef.current, {
        scale: 1.12,
      });

      const tl = gsap.timeline();

      tl.to(bgRef.current, {
        scale: 1,
        duration: 1.8,
        ease: "power3.out",
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=1.1"
        )
        .to(
          subTitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.45"
        );

      gsap.to(bgRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(bgRef.current, {
        scale: 1.06,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      if (glowRef.current) {
        gsap.to(glowRef.current, {
          opacity: 0.9,
          scale: 1.08,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Background image */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src={latest3}
          alt="Wicked Revelations Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/80" />

      {/* Red glow accents */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/8 blur-[120px]"
      />
      <div className="pointer-events-none absolute left-[10%] top-[18%] h-40 w-40 rounded-full bg-red-600/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[10%] right-[8%] h-56 w-56 rounded-full bg-red-600/8 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
        <div ref={contentRef} className="mx-auto max-w-5xl text-white">
          <p
            ref={subTitleRef}
            className="mb-4 text-xs uppercase tracking-[0.45em] text-white/70 md:text-sm"
          >
            The No. 1 Event Planner in Australia
          </p>

          <h1
            ref={titleRef}
            className="text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl"
          >
            Wicked
            <span className="block text-white">Revelations</span>
          </h1>

          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-red-600 shadow-[0_0_24px_rgba(220,38,38,0.8)]" />

          <p
            ref={textRef}
            className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/75 md:text-lg"
          >
            Your all-in-one solution for event management, music production,
            branding, and graphic designing. We turn ideas into unforgettable
            experiences with bold creativity and seamless execution.
          </p>

          <div ref={buttonRef} className="mt-8 flex items-center justify-center">
            <button
              className="rounded-full border border-white/25 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-red-500 hover:bg-red-600 hover:text-white hover:shadow-[0_0_30px_rgba(220,38,38,0.45)] md:px-10 md:py-4"
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home1;