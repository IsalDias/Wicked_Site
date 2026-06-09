'use client';

import { useState } from 'react';
import Image from 'next/image';
import EventDetails from './EventDetails';

import latest1 from '../../public/images/wicked-01-03.png';
import latest2 from '../../public/images/wicked-01-02.png';
import latest3 from '../../public/images/wicked-01-02_culturemadness.png';
import logo_culture from '../../public/images/WICKEDLOGO.png';

const NEW_EVENTS = [
  {
    id: 101,
    title: 'Wicked Future Forum',
    date: 'October 12, 2024',
    location: 'Colombo, Sri Lanka',
    description: 'A special event exploring the future of AI, finance, and digital innovation.',
    shortDescription: 'Future-focused AI and fintech event',
    images: [latest1, latest2],
    attendees: '300+',
    category: 'New Event',
  },
];

const PAST_EVENTS = [
  {
    id: 1,
    title: 'Tech Innovation Summit 2024',
    date: 'June 15, 2024',
    location: 'San Francisco, CA',
    description: 'Join us for an exciting discussion on AI and fintech innovation.',
    shortDescription: 'Annual tech innovation summit',
    images: [latest3],
    logo: logo_culture,
    attendees: '500+',
    category: 'Conference',
  },
  {
    id: 2,
    title: 'Financial Services Workshop',
    date: 'July 22, 2024',
    location: 'New York, NY',
    description: 'Hands-on workshop covering the latest banking technologies.',
    shortDescription: 'Banking & fintech workshop',
    images: [latest2, latest1],
    attendees: '200+',
    category: 'Workshop',
  },
];

export default function EventsClient() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % NEW_EVENTS.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + NEW_EVENTS.length) % NEW_EVENTS.length);
  };

  if (selectedEvent) {
    return <EventDetails event={selectedEvent} onBack={() => setSelectedEvent(null)} />;
  }

  const currentEvent = NEW_EVENTS[activeSlide];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white pt-42 pb-20">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_35%)]" />

      <div className="absolute left-0 bottom-0 h-[65%] w-[45%] opacity-10 grayscale">
        <Image src={latest1} alt="" fill className="object-contain" />
      </div>

      <div className="absolute right-0 bottom-0 h-[55%] w-[50%] opacity-10 grayscale">
        <Image src={latest2} alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="mb-20 text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.55em] text-white/45 mb-6">
            Wicked Revelations
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] mb-8">
            Events
          </h1>

          <div className="mx-auto mb-8 h-[3px] w-24 bg-red-600" />
        </div>

        {/* New Events Carousel */}
        <div className="mb-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/0 bg-white/[0.04]">
            <div className="relative h-[520px]">
              <Image
                src={currentEvent.images[0]}
                alt={currentEvent.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0" />
            </div>

            {NEW_EVENTS.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-black/60 border border-white/20 px-4 py-3 hover:bg-white hover:text-black transition"
                >
                  ‹
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-black/60 border border-white/20 px-4 py-3 hover:bg-white hover:text-black transition"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-3xl md:text-4xl font-black mb-8">
            Past Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PAST_EVENTS.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="group cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-sm hover:border-white/30 transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={event.images[0]}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {event.logo && (
                    <div className="absolute -bottom-8 left-6 z-20">
                      <div className="rounded-2xl border border-white/10 bg-black/80 p-3 shadow-2xl backdrop-blur-md">
                        <Image
                          src={event.logo}
                          alt={`${event.title} logo`}
                          width={90}
                          height={90}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-8 pt-12">
                  <span className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-white/40 inline-block">
                    {event.category}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-black uppercase leading-tight mb-4">
                    {event.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-white/55">
                    {event.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}