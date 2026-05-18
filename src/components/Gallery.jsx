import React from 'react';
import SectionLabel from './SectionLabel';
import FadeUp from './FadeUp';
import { gallery } from '../data/site';

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-28 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp>
            <SectionLabel>Moments Captured</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Postcards from <em className="font-script text-forest">Chikkamagalure.</em>
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {gallery.map((g, i) => (
            <FadeUp key={i} delay={i * 0.05} className={g.span}>
              <div className="group relative h-full w-full overflow-hidden rounded-2xl cursor-pointer">
                <img
                  src={g.src}
                  alt={g.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="absolute bottom-4 left-4 text-white font-display text-lg opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                  {g.label}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
