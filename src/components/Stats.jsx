import React from 'react';
import Counter from './Counter';

export default function Stats() {
  return (
    <section className="relative py-20 bg-ink text-white overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1800&q=80"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink" />
      <div className="max-w-7xl mx-auto px-5 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-10 relative">
        <Counter to={5000} suffix="+" label="Travellers" />
        <Counter to={50} suffix="+" label="Destinations" />
        <Counter to={25} suffix="+" label="Vehicles" />
        <Counter to={10} suffix="yrs" label="Experience" />
      </div>
    </section>
  );
}
