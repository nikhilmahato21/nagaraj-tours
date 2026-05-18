import React from 'react';

export default function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-3 mb-5">
      <span className="h-px w-10 bg-gold" />
      <span className="text-[11px] tracking-[0.35em] uppercase text-gold font-semibold">
        {children}
      </span>
    </div>
  );
}
