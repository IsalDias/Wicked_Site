"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NeverGo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ng-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Red underline animation
      gsap.fromTo(
        ".ng-underline",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power3.out",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-black text-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* Small Label */}
        <p className="ng-item text-xs md:text-sm tracking-[0.25em] uppercase text-gray-500">
          Why People Love WICKED?
        </p>

        {/* Main Heading */}
        <h2 className="ng-item mt-6 text-3xl md:text-5xl font-extrabold leading-tight">
          We take the stress off your plate and handle everything for you,
          <span className="text-white"> better than you imagined.</span>
        </h2>

        {/* Subtle Divider */}
        <div className="ng-item mt-8 h-[2px] w-16 bg-white/40" />

        {/* Big Statement */}
        <h3 className="ng-item mt-10 text-2xl md:text-3xl font-bold">
          Once you got WICKED,{" "}
          <span className="relative inline-block">
            you never go back!
            <span className="ng-underline absolute left-0 -bottom-1 h-[3px] w-full bg-red-600" />
          </span>
        </h3>

        {/* Promise */}
        <p className="ng-item mt-4 text-gray-400">
          That’s our promise.
        </p>

        {/* CTA */}
        <div className="ng-item mt-10">
          <a
            href="/contact"
            className="inline-block rounded-xl bg-red-600 hover:bg-red-700 px-8 py-3 text-sm font-semibold transition-all duration-300"
          >
            Let’s Plan Something Wicked
          </a>
        </div>

      </div>
    </section>
  );
};

export default NeverGo;