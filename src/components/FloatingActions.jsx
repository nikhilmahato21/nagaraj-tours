import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { CALL_URL, WHATSAPP_URL } from '../data/constants';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-2xl shadow-[#25D366]/40"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      </motion.a>
      <motion.a
        href={CALL_URL}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.7, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 rounded-full bg-forest text-white grid place-items-center shadow-2xl shadow-forest/40"
        aria-label="Call now"
      >
        <FiPhone size={22} />
      </motion.a>
    </div>
  );
}
