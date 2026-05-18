import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiChevronRight } from 'react-icons/fi';
import { FaWhatsapp, FaMountain } from 'react-icons/fa';
import { PHONE, CALL_URL, WHATSAPP_URL, navLinks } from '../data/constants';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-forest to-forest-dark grid place-items-center ring-2 ring-gold/50">
              <FaMountain className="text-gold text-lg" />
            </div>
            <div className="leading-tight">
              <div className={`font-display text-lg font-bold ${scrolled ? 'text-ink' : 'text-white'}`}>
                Nagaraj
              </div>
              <div className={`text-[10px] tracking-[0.25em] uppercase ${scrolled ? 'text-forest' : 'text-gold'}`}>
                Tours & Travels
              </div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-sm font-medium tracking-wide transition-colors group ${
                  scrolled ? 'text-ink hover:text-forest' : 'text-white/90 hover:text-white'
                }`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href={CALL_URL} className="flex items-center gap-2 text-sm font-semibold text-forest">
              <FiPhone /> {PHONE}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-forest text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-forest-dark transition shadow-lg shadow-forest/20"
            >
              Book Now
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className={`lg:hidden ${scrolled ? 'text-ink' : 'text-white'}`}
            aria-label="Open menu"
          >
            <FiMenu size={26} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-forest-dark text-white lg:hidden"
          >
            <div className="flex justify-between items-center p-6">
              <div className="font-display text-2xl">Menu</div>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <FiX size={28} />
              </button>
            </div>
            <div className="flex flex-col px-8 mt-6 gap-1">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="font-display text-4xl py-3 border-b border-white/10 flex justify-between items-center"
                >
                  {l.label} <FiChevronRight className="text-gold" />
                </motion.a>
              ))}
              <div className="mt-10 space-y-3">
                <a href={CALL_URL} className="flex items-center gap-3 bg-white/10 px-5 py-4 rounded-xl">
                  <FiPhone className="text-gold" /> {PHONE}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-gold text-forest-dark px-5 py-4 rounded-xl font-semibold"
                >
                  <FaWhatsapp /> WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
