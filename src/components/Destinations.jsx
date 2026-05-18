import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import SectionLabel from './SectionLabel';
import { destinations } from '../data/destinations';
import { WHATSAPP_URL } from '../data/constants';

export default function Destinations() {
  const [activeDay, setActiveDay] = useState('day1');
  const day = destinations[activeDay];

  return (
    <section
      id="tours"
      className="relative py-28 lg:py-40 bg-forest-dark text-white overflow-hidden grain"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <SectionLabel>Curated Itineraries</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Four <em className="font-script text-gold">unforgettable</em> days in the hills.
            </h2>
          </div>
          <p className="text-white/70 lg:max-w-md font-light">
            Each itinerary is crafted to capture a different soul of Chikkamagalure — from misty peaks to ancient temples to wild forests.
          </p>
        </div>

        <div className="flex gap-2 md:gap-3 mb-10 overflow-x-auto scrollbar-hide pb-2">
          {Object.entries(destinations).map(([key, d], i) => (
            <button
              key={key}
              onClick={() => setActiveDay(key)}
              className={`shrink-0 px-5 md:px-7 py-3 md:py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-500 ${
                activeDay === key
                  ? 'bg-gold text-forest-dark shadow-lg shadow-gold/30'
                  : 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/10'
              }`}
            >
              <span className="opacity-60 mr-2">0{i + 1}</span>
              Day {i + 1} · {d.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
              <div>
                <div className="font-script text-2xl text-gold italic">{day.subtitle}</div>
                <div className="font-display text-3xl md:text-4xl font-bold">{day.title}</div>
              </div>
              <div className="bg-gold/10 border border-gold/30 rounded-full px-5 py-2.5 text-xs md:text-sm text-gold flex items-center gap-2">
                <FiClock /> {day.note}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {day.spots.map((spot, i) => (
                <motion.div
                  key={spot.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group relative rounded-3xl overflow-hidden bg-black/30 cursor-pointer"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={spot.img}
                      alt={spot.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-gold bg-black/40 backdrop-blur px-3 py-1.5 rounded-full">
                      Stop {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <div className="font-display text-2xl font-semibold mb-2">{spot.name}</div>
                    <div className="text-white/70 text-sm leading-relaxed">{spot.desc}</div>
                    <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      Discover <FiArrowRight />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-14">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-forest-dark px-8 py-4 rounded-full font-semibold hover:bg-white transition"
          >
            <FaWhatsapp /> Customize this package
          </a>
        </div>
      </div>
    </section>
  );
}
