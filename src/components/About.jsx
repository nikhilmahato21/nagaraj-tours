import React from 'react';
import { motion } from 'framer-motion';
import {
  FiStar, FiUsers, FiAward, FiTruck, FiShield, FiNavigation, FiHeart,
} from 'react-icons/fi';
import SectionLabel from './SectionLabel';
import FadeUp from './FadeUp';

const highlights = [
  { icon: FiUsers, t: 'Local Experts' },
  { icon: FiAward, t: 'Affordable Rates' },
  { icon: FiTruck, t: 'Comfortable Vehicles' },
  { icon: FiShield, t: 'Safe Travel' },
  { icon: FiNavigation, t: 'Airport Transfers' },
  { icon: FiHeart, t: 'Family Friendly' },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-40 bg-cream overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-forest/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 relative">
        <div className="lg:col-span-5">
          <FadeUp>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Your trusted <em className="font-script text-forest">travel partner</em> in Chikkamagalure.
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-slate-600 text-lg leading-relaxed mt-8 font-light">
              Nagaraj Tours & Travels has been guiding travellers through the Western Ghats for years. From cinematic sunrises at Mullayanagiri to thundering waterfalls and Hoysala temples, we craft journeys that feel less like trips and more like stories.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mt-4 font-light">
              Premium cabs, experienced local drivers, transparent pricing, and the warmth of a family-run business — all wrapped into one.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex gap-10 mt-12 pt-8 border-t border-black/10">
              <div>
                <div className="font-display text-4xl font-bold text-forest">
                  10<span className="text-gold">+</span>
                </div>
                <div className="text-xs tracking-[0.2em] uppercase text-slate-600 mt-1">Years of journeys</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-forest">
                  5K<span className="text-gold">+</span>
                </div>
                <div className="text-xs tracking-[0.2em] uppercase text-slate-600 mt-1">Happy travellers</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-forest">
                  4.9<span className="text-gold">★</span>
                </div>
                <div className="text-xs tracking-[0.2em] uppercase text-slate-600 mt-1">Average rating</div>
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="lg:col-span-7 relative">
          <FadeUp delay={0.2}>
            <div className="relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden ring-glow">
              <img
                src="https://images.pexels.com/photos/5540015/pexels-photo-5540015.jpeg"
                alt="Coffee plantation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="font-script text-2xl text-gold italic">Coffee country</div>
                <div className="font-display text-2xl">Chikkamagalure, Karnataka</div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="absolute -bottom-8 -left-4 md:-left-12 bg-white rounded-2xl shadow-2xl p-5 max-w-[260px] hidden md:block">
              <div className="flex items-center gap-1 text-gold mb-2">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} fill="#D4AF37" />
                ))}
              </div>
              <div className="text-xs text-slate-600 italic">
                "Best decision of our holiday. Felt like locals showing us their home."
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-10 mt-24 lg:mt-32">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {highlights.map((it, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl p-6 text-center border border-black/5 hover:border-gold/40 hover:shadow-xl transition-all duration-500 h-full"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-forest/10 grid place-items-center text-forest mb-4 group-hover:bg-forest group-hover:text-gold transition-all duration-500">
                  <it.icon size={20} />
                </div>
                <div className="font-display text-base font-semibold">{it.t}</div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
