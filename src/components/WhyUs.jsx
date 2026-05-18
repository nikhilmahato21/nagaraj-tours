import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiAward, FiTruck, FiHeart } from 'react-icons/fi';
import { FaRoute, FaLeaf } from 'react-icons/fa';
import SectionLabel from './SectionLabel';
import FadeUp from './FadeUp';

const items = [
  { icon: FiShield, title: 'Trusted Local Drivers', desc: 'Verified, courteous drivers who know every hidden trail.' },
  { icon: FiAward, title: 'Affordable Pricing', desc: 'Transparent per-km rates with no hidden surprises.' },
  { icon: FiTruck, title: 'Comfortable Vehicles', desc: 'Sanitized, AC-equipped fleet maintained to luxury standards.' },
  { icon: FaRoute, title: 'Scenic Tour Packages', desc: 'Curated itineraries crafted by locals who love this land.' },
  { icon: FiHeart, title: 'Family Friendly', desc: 'Child seats, photo stops, patient drivers — built for memories.' },
  { icon: FaLeaf, title: 'Safe & Reliable', desc: '24/7 support, GPS tracked rides, complete peace of mind.' },
];

export default function WhyUs() {
  return (
    <section className="relative py-28 lg:py-40 bg-gradient-to-br from-cream to-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp>
            <SectionLabel>Why Travellers Choose Us</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Built on <em className="font-script text-forest">trust</em>, refined for comfort.
            </h2>
          </FadeUp>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((w, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl p-8 border border-black/5 hover:border-gold/30 hover:shadow-xl transition-all duration-500 overflow-hidden h-full"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gold/5 group-hover:bg-gold/15 transition-all duration-700" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-forest to-forest-dark grid place-items-center text-gold mb-5 group-hover:rotate-6 transition-transform duration-500">
                  <w.icon size={22} />
                </div>
                <div className="font-display text-xl font-bold mb-2">{w.title}</div>
                <div className="text-slate-600 text-sm leading-relaxed">{w.desc}</div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
