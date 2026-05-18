import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiCheck, FiPhone, FiAward, FiShield } from 'react-icons/fi';
import { FaWhatsapp, FaCarSide } from 'react-icons/fa';
import SectionLabel from './SectionLabel';
import FadeUp from './FadeUp';
import { vehicles } from '../data/site';
import { PHONE, WHATSAPP_URL } from '../data/constants';

const inclusions = [
  { i: FiCheck, t: 'Comfortable Seats' },
  { i: FaCarSide, t: 'AC Vehicles' },
  { i: FiAward, t: 'Experienced Drivers' },
  { i: FiShield, t: 'Clean & Sanitized' },
];

export default function VehiclePricing() {
  return (
    <section id="vehicles" className="relative py-28 lg:py-40 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp>
            <SectionLabel>Our Fleet</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Choose your <em className="font-script text-forest">perfect</em> ride.
            </h2>
            <p className="text-slate-600 text-lg mt-6 font-light">
              A curated fleet of comfortable, sanitized vehicles — driven by experienced locals. Transparent per-kilometre pricing, zero surprises.
            </p>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((v, i) => (
            <FadeUp key={v.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-black/5 hover:shadow-2xl hover:shadow-forest/10 transition-all duration-500 h-full flex flex-col"
              >
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-forest/10 to-gold/10">
                  <img
                    src={v.img}
                    alt={v.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur text-forest text-[10px] tracking-[0.25em] uppercase font-semibold px-3 py-1.5 rounded-full">
                    {v.tag}
                  </div>
                  <div className="absolute top-4 right-4 bg-forest-dark text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <FiUsers size={12} /> {v.seats}
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col">
                  <div className="font-display text-2xl font-bold mb-1">{v.name}</div>
                  <div className="flex items-baseline gap-1 mb-5">
                    <span className="font-display text-5xl md:text-6xl font-bold text-forest">
                      ₹{v.price}
                    </span>
                    <span className="text-slate-600 text-sm">/km</span>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {v.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                        <FiCheck className="text-gold" /> {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex gap-2">
                    <a
                      href={`tel:+91${PHONE}`}
                      className="flex-1 bg-forest text-white px-4 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-forest-dark transition"
                    >
                      <FiPhone size={14} /> Book
                    </a>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 grid place-items-center rounded-full border border-forest/20 text-forest hover:bg-forest hover:text-white transition"
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-14 bg-forest-dark rounded-3xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
            {inclusions.map((x, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 grid place-items-center text-gold">
                  <x.i />
                </div>
                <span className="font-medium">{x.t}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
