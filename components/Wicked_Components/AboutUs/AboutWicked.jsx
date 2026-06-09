"use client";

import React from "react";
import Image from "next/image";

const AboutWicked = () => {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Logo */}
        <div className="flex justify-center mb-12">
          <Image
            src="/images/WICKEDLOGO.png"
            alt="Wicked Revelations Logo"
            width={260}
            height={140}
            priority
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            Wicked Revelations is a dynamic event management and marketing
            agency based in Australia, delivering innovative, high-impact
            experiences since 2016. The company has built a strong reputation
            for planning, managing, and promoting successful events, including
            the widely recognized Machan Nights.
          </p>

          <p>
            Backed by a passionate team of creative professionals, Wicked
            Revelations offers end-to-end event solutions, including event
            consultancy, creative design, photography and videography, music
            production, live tour organization, branding, and more.
          </p>

          <p>
            Every project is driven by a commitment to quality, originality,
            and audience engagement. By staying ahead of industry trends,
            emerging technologies, and modern event strategies, Wicked
            Revelations consistently delivers memorable events and powerful
            brand experiences across Australia and international markets.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutWicked;