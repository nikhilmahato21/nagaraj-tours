import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiArrowRight } from 'react-icons/fi';
import SectionLabel from './SectionLabel';
import FadeUp from './FadeUp';
import { airports } from '../data/site';
import { WHATSAPP_URL } from '../data/constants';

export default function AirportPickup() {
  return (
    <section id="airport" className="relative py-28 lg:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <FadeUp>
              <SectionLabel>Pickup & Drop</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
                Airport transfers, <em className="font-script text-forest">on time</em>, every time.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="text-slate-600 lg:max-w-sm font-light">
              Flight-tracked pickups, meet-and-greet at arrivals, and a comfortable ride straight to your hotel — across three major airports.
            </p>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {airports.map((a, i) => (
            <FadeUp key={a.code} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden h-[440px]"
              >
                <img
                  src={a.img}
                  alt={a.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/30 to-transparent" />
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                  <span className="bg-white/15 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase font-semibold">
                    {a.code}
                  </span>
                  <span className="bg-gold text-forest-dark px-4 py-1.5 rounded-full text-xs font-bold">
                    {a.dist}
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-7 text-white">
                  <div className="font-display text-3xl font-bold">{a.name}</div>
                  <div className="flex items-center gap-2 text-white/80 text-sm mt-2">
                    <FiClock /> Approx {a.time} drive
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 bg-white text-forest-dark px-5 py-3 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500"
                  >
                    Book transfer <FiArrowRight />
                  </a>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
