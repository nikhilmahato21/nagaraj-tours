import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Destinations from './components/Destinations';
import Stats from './components/Stats';
import VehiclePricing from './components/VehiclePricing';
import AirportPickup from './components/AirportPickup';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="bg-white text-ink font-body">
      <Navbar />
      <Hero />
      <About />
      <Destinations />
      <Stats />
      <VehiclePricing />
      <AirportPickup />
      <WhyUs />
      <Testimonials />
      {/* <Gallery /> */}
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  );
}
