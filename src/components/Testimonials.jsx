import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import SectionLabel from './SectionLabel';
import FadeUp from './FadeUp';
import { testimonials } from '../data/site';

export default function Testimonials() {
  return (
    <section className="relative py-28 lg:py-40 bg-forest-dark text-white overflow-hidden grain">
      <div className="absolute top-20 -left-40 w-[400px] h-[400px] rounded-full bg-gold/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel>Travellers' Tales</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-2xl">
              Stories from the <em className="font-script text-gold">road.</em>
            </h2>
          </div>
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} size={22} fill="#D4AF37" className="text-gold" />
            ))}
            <span className="ml-3 font-semibold">4.9 / 5</span>
            <span className="text-white/60 text-sm ml-2">· 500+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-7 h-full flex flex-col hover:bg-white/10 hover:border-gold/30 transition-all duration-500"
              >
                <div className="flex items-center gap-1 text-gold mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <FiStar key={j} fill="#D4AF37" size={14} />
                  ))}
                </div>
                <p className="text-white/85 text-[15px] leading-relaxed font-light flex-1 mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-gold/40"
                  />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-white/60">{t.loc}</div>
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
