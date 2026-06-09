"use client";

import React, { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Figures = () => {
  const sectionRef = useRef(null);

  // Store refs for each number element
  const numRefs = useRef([]);
  numRefs.current = [];

  const addNumRef = (el) => {
    if (el && !numRefs.current.includes(el)) numRefs.current.push(el);
  };

  // Stats (edit these anytime)
  const stats = useMemo(
    () => [
      { label: "Events Managed", value: 20, suffix: "+", format: "int" },
      { label: "Social Media Impressions", value: 1000000, suffix: "+", format: "comma" },
      { label: "Clients", value: 2, suffix: "", format: "int", display: "Z" }, // if you literally want "Z"
      { label: "Support", value: 24, suffix: "/7", format: "int" },
    ],
    []
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // subtle reveal for cards
      gsap.fromTo(
        ".fig-card",
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // number count-up
      numRefs.current.forEach((el) => {
        const end = Number(el.dataset.value || 0);
        const format = el.dataset.format || "int";
        const suffix = el.dataset.suffix || "";

        const obj = { val: 0 };

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              val: end,
              duration: 1.4,
              ease: "power2.out",
              onUpdate: () => {
                const v = obj.val;

                let out =
                  format === "comma"
                    ? Math.round(v).toLocaleString()
                    : Math.round(v).toString();

                el.textContent = out + suffix;
              },
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center">
          {/* Left: WE */}
          <div className="md:col-span-2">
            <div className="text-5xl md:text-6xl font-extrabold tracking-tight text-black">
              WE
            </div>
          </div>

          {/* Middle: Copy */}
          <div className="md:col-span-6 ">
            <p className="text-xl md:text-2xl font-semibold text-black leading-snug">
              Create Events that get everyone talking.
            </p>
            <p className=" text-base text-5xl text-zinc-700">
              Bring your vibe to life
            </p>

            <div className="text-sm md:text-base text-zinc-700">
              <p>are not just great</p>
              <p>are not just amazing</p>
              <p className="font-semibold text-black">are PURE MAGIC!</p>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="md:col-span-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="fig-card ">
                <div
                  ref={addNumRef}
                  data-value={stats[0].value}
                  data-format={stats[0].format}
                  data-suffix={stats[0].suffix}
                  className="text-2xl md:text-3xl font-extrabold text-black"
                >
                  0+
                </div>
                <div className="mt-1 text-xs md:text-sm text-zinc-600">
                  {stats[0].label}
                </div>
              </div>

              {/* Card 2 */}
              <div className="fig-card ">
                <div
                  ref={addNumRef}
                  data-value={stats[1].value}
                  data-format={stats[1].format}
                  data-suffix={stats[1].suffix}
                  className="text-2xl md:text-3xl font-extrabold text-black"
                >
                  0+
                </div>
                <div className="mt-1 text-xs md:text-sm text-zinc-600">
                  {stats[1].label}
                </div>
              </div>

              {/* Card 3 (Z Clients in your screenshot) */}
              <div className="fig-card ">
                <div className="text-2xl md:text-3xl font-extrabold text-black">
                  {stats[2].display ?? "0"}
                </div>
                <div className="mt-1 text-xs md:text-sm text-zinc-600">
                  {stats[2].label}
                </div>
              </div>

              {/* Card 4 */}
              <div className="fig-card ">
                <div
                  ref={addNumRef}
                  data-value={stats[3].value}
                  data-format={stats[3].format}
                  data-suffix={stats[3].suffix}
                  className="text-2xl md:text-3xl font-extrabold text-black"
                >
                  0/7
                </div>
                <div className="mt-1 text-xs md:text-sm text-zinc-600">
                  {stats[3].label}
                </div>
              </div>
            </div>

        
          </div>
        </div>
      </div>
    </section>
  );
};

export default Figures;