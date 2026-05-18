import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FiArrowRight, FiPhone, FiShield, FiNavigation, FiAward,
} from 'react-icons/fi';
import { FaWhatsapp, FaRoute } from 'react-icons/fa';
import SectionLabel from './SectionLabel';
import { CALL_URL, WHATSAPP_URL, HERO_IMG } from '../data/constants';

export default function Hero() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  const cards = [
    { icon: FiShield, t: 'Trusted Local Partner' },
    { icon: FiNavigation, t: 'Airport Pickup & Drop' },
    { icon: FaRoute, t: 'Custom Tour Packages' },
    { icon: FiAward, t: 'Affordable Pricing' },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black">
      <motion.div style={{ y: heroY }} className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Chikkamagalure mountains shrouded in mist"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 min-h-screen flex flex-col justify-center px-5 lg:px-16 pt-28 pb-20 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <SectionLabel>Chikkamagalure · Karnataka</SectionLabel>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-white text-5xl sm:text-6xl md:text-7xl lg:text-[100px] leading-[1.02] font-bold max-w-5xl"
        >
          Explore{' '}
          <span className="font-script text-gold-grad font-normal italic">Chikkamagalure</span>
          <br />
          With Nagaraj <br className="hidden md:block" />
          Tours & Travels
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-white/80 text-lg md:text-xl mt-8 max-w-2xl font-light leading-relaxed"
        >
          Premium cab services, hand-crafted tour packages and airport transfers across Karnataka — driven by locals who love this land.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <a
            href="#contact"
            className="group relative bg-gold text-ink px-8 py-4 rounded-full font-semibold text-sm tracking-wide flex items-center gap-3 overflow-hidden"
          >
            <span className="relative z-10">Book Your Trip</span>
            <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition" />
            <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
          </a>
          <a
            href={CALL_URL}
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide flex items-center gap-3 hover:bg-white/20 transition"
          >
            <FiPhone /> Call Now
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-forest text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide flex items-center gap-3 hover:bg-forest-dark transition"
          >
            <FaWhatsapp /> WhatsApp Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-16 max-w-4xl"
        >
          {cards.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white/[0.08] backdrop-blur-xl border border-white/15 rounded-2xl p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-gold/20 grid place-items-center text-gold shrink-0">
                <c.icon size={18} />
              </div>
              <div className="text-white text-xs md:text-sm font-medium leading-snug">{c.t}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
