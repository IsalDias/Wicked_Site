"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CEOMessage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ceo-animate",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Title */}
        <div className="mb-16">
          <h2 className="ceo-animate text-3xl md:text-4xl font-extrabold text-white">
            CEO’s Message
          </h2>

          <p className="ceo-animate mt-2 text-white/60 text-lg">
            The why behind what we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          
          {/* Left Side */}
          <div className="ceo-animate">
            <div className="relative w-full max-w-sm h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/images/wicked-ceo-01.png"
                alt="CEO Image"
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-white">
                Senith Tharaka
              </h3>

              <p className="text-white/70">
                Founder / CEO
              </p>

              <p className="text-white/50 text-sm mt-1">
                WICKED Revelations
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="ceo-animate text-white/70 space-y-6 leading-relaxed text-lg">

            <p className="text-white">
              Welcome to Wicked Revelations!
            </p>

            <p>
              Ever since we started WICKED in 2015, we’ve been adamant in maintaining
              quality and great relationships with our patrons. With business consulting
              being our foremost service during that time, we aimed to break away from
              the traditional corporate mold and build strong, personal relationships
              both within our teams and with our clients.
            </p>

            <p>
              Even with our shift to more digital-focused services, which includes
              360 digital solutions, we have maintained these values. I believe this,
              along with our sheer focus on our patrons’ success, has resulted in a
              strongly positive outlook towards us.
            </p>

            <p>
              We are always on the lookout for new technologies and trends, and always
              up to innovate for ours and our clients’ success. Our ultimate goal is
              to develop businesses in multiple industries and aspects in Australia,
              thereby lending a hand towards local economic development.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CEOMessage;