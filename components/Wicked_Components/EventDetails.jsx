'use client';

import { useState } from 'react';
import Image from 'next/image';

import latest1 from '../../public/images/wicked-01-01.png';
import latest2 from '../../public/images/wicked-01-02.png';

export default function EventDetails({ event, onBack }) {
  const albumImages =
    event?.images && event.images.length > 0
      ? event.images
      : [latest1, latest2, latest1, latest2, latest1, latest2];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white pt-32 pb-20">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_35%)]" />
      <div className="absolute left-0 bottom-0 h-[65%] w-[45%] bg-[url('/images/wicked-01-01.png')] bg-contain bg-left-bottom bg-no-repeat opacity-10 grayscale" />
      <div className="absolute right-0 bottom-0 h-[55%] w-[50%] bg-[url('/images/wicked-01-02.png')] bg-contain bg-right-bottom bg-no-repeat opacity-10 grayscale" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <button
          onClick={onBack}
          className="mb-12 text-xs font-bold uppercase tracking-[0.35em] text-white/50 hover:text-white transition"
        >
          ← Back to Events
        </button>

        <div className="text-center mb-16">
          <p className="text-xs md:text-sm uppercase tracking-[0.55em] text-white/45 mb-6">
            Wicked Revelations
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9]">
            {event?.title}
          </h1>

          <div className="mx-auto mt-8 h-[3px] w-24 bg-white" />

          <p className="mx-auto mt-8 max-w-2xl text-white/60 text-lg leading-relaxed">
            {event?.description}
          </p>
        </div>

        {/* Gallery Album */}
        <div className="mb-20">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-white/40">
                Event Album
              </p>
              <h2 className="text-3xl md:text-5xl font-black uppercase">
                Gallery
              </h2>
            </div>

            <p className="hidden md:block max-w-sm text-right text-white/45 text-sm leading-relaxed">
              A clean black and white collection from this Wicked event.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {albumImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`group relative h-44 md:h-56 overflow-hidden rounded-2xl border bg-white/[0.03] transition-all ${
                  selectedImageIndex === index
                    ? 'border-white opacity-100'
                    : 'border-white/10 opacity-60 hover:opacity-100'
                }`}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="relative h-96 md:h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl">
              <Image
                src={albumImages[selectedImageIndex]}
                alt={event?.title || 'Event image'}
                fill
                className="object-cover grayscale contrast-125"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            <button className="mt-8 w-full rounded-full border border-white/30 bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.3em] text-black hover:bg-black hover:text-white transition">
              Register Now
            </button>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-white/40">
                  Category
                </p>
                <h2 className="text-3xl font-black uppercase">
                  {event?.category}
                </h2>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-white/40">
                  Event Info
                </p>

                <div className="space-y-6 text-white/75">
                  <p>
                    <span className="block text-white/35 text-sm mb-1">Date</span>
                    {event?.date}
                  </p>

                  <p>
                    <span className="block text-white/35 text-sm mb-1">Location</span>
                    {event?.location}
                  </p>

                  <p>
                    <span className="block text-white/35 text-sm mb-1">Attendees</span>
                    {event?.attendees} Expected Attendees
                  </p>

                  <p>
                    <span className="block text-white/35 text-sm mb-1">Images</span>
                    {albumImages.length}
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-white bg-white p-7 text-black">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-black/45">
                  Share Event
                </p>

                <div className="flex gap-3">
                  <button className="flex-1 rounded-full bg-black py-3 text-sm font-bold text-white">
                    Share
                  </button>
                  <button className="flex-1 rounded-full border border-black/20 py-3 text-sm font-bold hover:bg-black hover:text-white transition">
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}