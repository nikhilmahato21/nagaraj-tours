import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp, FaMountain } from 'react-icons/fa';
import {
  PHONE, EMAIL, CALL_URL, MAIL_URL, WHATSAPP_URL, navLinks,
} from '../data/constants';

const packages = [
  'Day 1 · Sightseeing Trail',
  'Day 2 · Nature & Waterfalls',
  'Day 3 · Heritage Tour',
  'Day 4 · Wildlife & Scenic',
  'Airport Pickup & Drop',
  'Custom Packages',
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-forest to-forest-dark grid place-items-center ring-2 ring-gold/50">
                <FaMountain className="text-gold" />
              </div>
              <div>
                <div className="font-display text-xl font-bold">Nagaraj</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-gold">
                  Tours & Travels
                </div>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed text-sm font-light max-w-sm">
              Premium cab services, curated tour packages, and airport transfers across Karnataka — driven by locals who love this land.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={CALL_URL}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-[#0a0f1a] grid place-items-center transition"
                aria-label="Call"
              >
                <FiPhone size={15} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-[#0a0f1a] grid place-items-center transition"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={15} />
              </a>
              <a
                href={MAIL_URL}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-[#0a0f1a] grid place-items-center transition"
                aria-label="Email"
              >
                <FiMail size={15} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-5">Explore</div>
            <ul className="space-y-3 text-sm text-white/70">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-5">
              Tour Packages
            </div>
            <ul className="space-y-3 text-sm text-white/70">
              {packages.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-5">Contact</div>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <FiPhone className="mt-0.5 text-gold" />
                <a href={CALL_URL}>{PHONE}</a>
              </li>
              <li className="flex items-start gap-2">
                <FiMail className="mt-0.5 text-gold shrink-0" />
                <a href={MAIL_URL} className="break-all">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-2">
                <FiMapPin className="mt-0.5 text-gold" />
                Chikkamagalure, Karnataka, India
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Nagaraj Tours & Travels · All rights reserved.</div>
          <div>Crafted with care · Chikkamagalure, India</div>
        </div>
      </div>
    </footer>
  );
}
