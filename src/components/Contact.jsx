import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiSend, FiCheck, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import SectionLabel from './SectionLabel';
import FadeUp from './FadeUp';
import { vehicles } from '../data/site';
import {
  PHONE, EMAIL, CALL_URL, MAIL_URL, WHATSAPP_URL, MAP_LAT, MAP_LNG,
} from '../data/constants';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', date: '', vehicle: 'Toyota Innova', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build a WhatsApp message from the form so users get a real response path
    const msg = encodeURIComponent(
      `New trip enquiry%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0ATravel date: ${form.date}%0AVehicle: ${form.vehicle}%0A%0ADetails: ${form.message}`
    );
    window.open(`https://wa.me/91${PHONE}?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', email: '', date: '', vehicle: 'Toyota Innova', message: '' });
  };

  return (
    <section id="contact" className="relative py-28 lg:py-40 bg-cream overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-forest/5 blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp>
            <SectionLabel>Plan Your Journey</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02]">
              Let's craft your <em className="font-script text-forest">perfect</em> trip.
            </h2>
          </FadeUp>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
          <FadeUp className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5 border border-black/5">
              <div className="font-display text-2xl md:text-3xl font-bold mb-1">Book Your Trip</div>
              <div className="text-slate-600 text-sm mb-8">
                Fill in your details — we'll call you back within minutes.
              </div>

              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-1">
                  <label className="text-[10px] tracking-[0.25em] uppercase text-slate-600 font-semibold">Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full mt-2 px-4 py-3.5 bg-cream rounded-xl border border-transparent focus:border-forest focus:bg-white outline-none transition"
                    placeholder="Your full name"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-[10px] tracking-[0.25em] uppercase text-slate-600 font-semibold">Phone</label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full mt-2 px-4 py-3.5 bg-cream rounded-xl border border-transparent focus:border-forest focus:bg-white outline-none transition"
                    placeholder="+91"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-[10px] tracking-[0.25em] uppercase text-slate-600 font-semibold">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full mt-2 px-4 py-3.5 bg-cream rounded-xl border border-transparent focus:border-forest focus:bg-white outline-none transition"
                    placeholder="you@email.com"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-[10px] tracking-[0.25em] uppercase text-slate-600 font-semibold">Travel Date</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full mt-2 px-4 py-3.5 bg-cream rounded-xl border border-transparent focus:border-forest focus:bg-white outline-none transition"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-[10px] tracking-[0.25em] uppercase text-slate-600 font-semibold">Vehicle</label>
                  <select
                    value={form.vehicle}
                    onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                    className="w-full mt-2 px-4 py-3.5 bg-cream rounded-xl border border-transparent focus:border-forest focus:bg-white outline-none transition"
                  >
                    {vehicles.map((v) => (
                      <option key={v.name}>{v.name}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-[10px] tracking-[0.25em] uppercase text-slate-600 font-semibold">
                    Tell us about your trip
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full mt-2 px-4 py-3.5 bg-cream rounded-xl border border-transparent focus:border-forest focus:bg-white outline-none transition resize-none"
                    placeholder="Destinations, group size, special requests..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-forest hover:bg-forest-dark text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition group"
                  >
                    <FiSend className="group-hover:translate-x-1 transition" /> Send Enquiry
                  </button>
                  <AnimatePresence>
                    {submitted && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-4 bg-forest/10 text-forest text-sm p-4 rounded-xl flex items-center gap-2"
                      >
                        <FiCheck /> Opening WhatsApp — we'll respond shortly.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="lg:col-span-2">
            <div className="bg-forest-dark rounded-3xl p-8 md:p-10 text-white h-full flex flex-col overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?w=900&q=80"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
                alt=""
              />
              <div className="relative">
                <div className="font-display text-2xl md:text-3xl font-bold mb-1">Get in touch</div>
                <div className="text-white/60 text-sm mb-8">
                  We're available 24/7 — by phone, WhatsApp or email.
                </div>

                <div className="space-y-5">
                  <a href={CALL_URL} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-gold/20 grid place-items-center text-gold shrink-0 group-hover:bg-gold group-hover:text-forest-dark transition">
                      <FiPhone />
                    </div>
                    <div>
                      <div className="text-xs text-white/60 tracking-[0.2em] uppercase">Call us</div>
                      <div className="font-display text-xl font-bold">{PHONE}</div>
                    </div>
                  </a>
                  <a href={MAIL_URL} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-gold/20 grid place-items-center text-gold shrink-0 group-hover:bg-gold group-hover:text-forest-dark transition">
                      <FiMail />
                    </div>
                    <div>
                      <div className="text-xs text-white/60 tracking-[0.2em] uppercase">Email</div>
                      <div className="font-medium break-all">{EMAIL}</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/20 grid place-items-center text-gold shrink-0">
                      <FiMapPin />
                    </div>
                    <div>
                      <div className="text-xs text-white/60 tracking-[0.2em] uppercase">Office</div>
                      <div className="font-medium">
                        Chikkamagalure,
                        <br />
                        Karnataka, India
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 w-full bg-gold text-forest-dark px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-white transition"
                >
                  <FaWhatsapp size={20} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-8 rounded-3xl overflow-hidden border border-black/10 h-[380px]">
            <iframe
              title="Nagaraj Tours Location"
              src={`https://maps.google.com/maps?q=${MAP_LAT},${MAP_LNG}&hl=en&z=12&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
