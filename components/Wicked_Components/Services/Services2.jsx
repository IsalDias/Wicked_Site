"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";




import latest1 from "@/public/images/wicked-ev-1.png";
import latest2 from "@/public/images/wicked-ev-2.jpg";
import latest3 from "@/public/images/wicked-ev-3.jpg";
import latest4 from "@/public/images/wicked-ev-4.jpg";
import latest5 from "@/public/images/wicked-ev-5.jpg";
import latest6 from "@/public/images/wicked-ev-6.jpg";
import latest7 from "@/public/images/wicked-ev-7.jpg";
import latest8 from "@/public/images/wicked-ev-8.jpg";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "Event Management",
    subtitle: "Your event, But bigger.",
    image: latest1,
  },
  {
    title: "Music Production",
    subtitle: "Rhythms that are remembered",
    image: latest2,
  },
  {
    title: "Photography & Videography",
    subtitle: "Moments captured the right way.",
    image: latest3,
  },
  {
    title: "Graphic Designing",
    subtitle: "Ideas to 'Wow's.",
    image: latest4,
  },
  {
    title: "Branding",
    subtitle: "Just a Brand? Not anymore.",
    image: latest5,
  },
  {
    title: "Business Consultation",
    subtitle: "Together, Grow Stronger.",
    image: latest6,
  },
  {
    title: "Digital Solutions",
    subtitle: "Not just digital. Memorable.",
    image: latest7,
  },
  {
    title: "Printing Services",
    subtitle: "Because prints still matters.",
    image: latest8,
  },
];

export default function Services2() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            y: 40,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white  px-6 lg:px-16"
    >
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
          Our Services
        </h1>

        <p className="text-white/70 text-lg">
          Everything you need, seamlessly, under one roof!
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="group relative min-h-[280px] rounded-2xl overflow-hidden border border-white/1 bg-zinc-900 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority={index < 3}
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/20" />

            <div className="absolute inset-x-0 bottom-0 z-10 p-6">
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                {service.title}
              </h2>

              <p className="mt-2 text-sm md:text-base text-white/80">
                {service.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}