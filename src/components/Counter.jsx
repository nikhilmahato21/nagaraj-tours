import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

export default function Counter({ to, suffix = '+', label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1800;
    const step = (ts, init) => {
      if (!init) init = ts;
      const p = Math.min((ts - init) / dur, 1);
      setVal(Math.floor(p * to));
      if (p < 1) requestAnimationFrame((t) => step(t, init));
    };
    requestAnimationFrame((t) => step(t));
  }, [inView, to]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl md:text-6xl font-bold text-white">
        {val}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="text-xs tracking-[0.3em] uppercase text-white/60 mt-2">{label}</div>
    </div>
  );
}
