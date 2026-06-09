'use client';

import { useState } from 'react';
import Image from 'next/image';

import latest1 from '../../public/images/wicked-01-01.png';
import latest2 from '../../public/images/wicked-01-02.png';

import img01 from '../../public/images/CultureMadd/01.jpg';
import img02 from '../../public/images/CultureMadd/02.jpg';
import img03 from '../../public/images/CultureMadd/03.jpg';
import img04 from '../../public/images/CultureMadd/04.jpg';
import img06 from '../../public/images/CultureMadd/06.jpg';
import img07 from '../../public/images/CultureMadd/07.jpg';
import img08 from '../../public/images/CultureMadd/08.jpg';
import img09 from '../../public/images/CultureMadd/09.jpg';
import img10 from '../../public/images/CultureMadd/10.jpg';
import img11 from '../../public/images/CultureMadd/11.jpg';
import img12 from '../../public/images/CultureMadd/12.jpg';
import img13 from '../../public/images/CultureMadd/13.jpg';
import img14 from '../../public/images/CultureMadd/14.jpg';
import img15 from '../../public/images/CultureMadd/15.jpg';
import img16 from '../../public/images/CultureMadd/16.jpg';
import img17 from '../../public/images/CultureMadd/17.jpg';
import img18 from '../../public/images/CultureMadd/18.jpg';

const ALBUM_DESCRIPTION =
  'Highlights from Culture Madness featuring live performances, audience moments, stage productions, and unforgettable experiences from the event.';

const EVENT_GALLERY = [
  img16,
  img18,
  img17,
  img14,
  img15,
  img13,
  img12,
  img11,
  img10,
  img09,
  img08,
  img07,
  img06,
  img04,
  img03,
  img02,
  img01,
];

export default function EventDetails({ event, onBack }) {
  const albumImages =
    event?.images && event.images.length > 0 ? event.images : [latest1, latest2];

  const galleryItems =
    event?.gallery && event.gallery.length > 0 ? event.gallery : EVENT_GALLERY;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const selectedImage = galleryItems[selectedImageIndex];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white pt-42 pb-20">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_35%)]" />

      <div className="absolute left-0 bottom-0 h-[65%] w-[45%] opacity-10 grayscale">
        <Image src={albumImages[0] || latest1} alt="" fill className="object-contain" />
      </div>

      <div className="absolute right-0 bottom-0 h-[55%] w-[50%] opacity-10 grayscale">
        <Image src={albumImages[1] || latest2} alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <button
          onClick={onBack}
          className="mb-12 text-xs font-bold uppercase tracking-[0.35em] text-white/50 hover:text-white transition"
        >
          ← Back to Events
        </button>

        <div className="text-center mb-16">
          {/* <p className="text-xs md:text-sm uppercase tracking-[0.55em] text-white/45 mb-6">
            Wicked Revelations
          </p> */}

          <h1 className="text-5xl md:text-7xl lg:text-5xl font-black uppercase leading-[0.9]">
            {event?.title}
          </h1>

          <div className="mx-auto mt-8 h-[3px] w-24 bg-white" />

          <p className="mx-auto mt-8 max-w-2xl text-white/60 text-lg leading-relaxed">
            {event?.description}
          </p>
        </div>

        {/* Gallery Album */}
        <div className="mb-20">
          <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              {/* <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-white/40">
                Event Album
              </p>
              <h2 className="text-3xl md:text-5xl font-black uppercase">
                Gallery
              </h2> */}
            </div>

            <p className="max-w-md md:text-right text-white/45 text-sm leading-relaxed">
              {/* {ALBUM_DESCRIPTION} */}
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryItems.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className="group mb-4 block w-full overflow-hidden rounded-2xl bg-white/[0.03] transition-opacity hover:opacity-80"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {/* <div className="relative h-96 md:h-[520px] overflow-hidden rounded-3xl bg-white/[0.03] shadow-2xl">
              <Image
                src={selectedImage || albumImages[0]}
                alt={event?.title || 'Event image'}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-contain bg-black"
                priority
              />
            </div> */}

            {/* <button className="mt-8 w-full rounded-full border border-white/30 bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.3em] text-black hover:bg-black hover:text-white transition">
              Register Now
            </button> */}
          </div>

          <aside className="lg:col-span-1">
            {/* <div className="sticky top-32 space-y-6">
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
                    {galleryItems.length}
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
            </div> */}
          </aside>
        </div>
      </div>
    </section>
  );
}