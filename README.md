# Nagaraj Tours & Travels

A premium, modern, high-end travel website for **Nagaraj Tours & Travels**, Chikkamagalure, Karnataka. Built with React + Vite + Tailwind + Framer Motion.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) after running `npm run dev`.

## 📁 Project Structure

```
nagaraj-tours/
├── index.html                  # SEO meta tags + JSON-LD structured data
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx                 # Composes all sections
│   ├── main.jsx                # React entry
│   ├── index.css               # Tailwind + custom utilities
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky transparent → blurred nav, mobile menu
│   │   ├── Hero.jsx            # Cinematic parallax hero
│   │   ├── About.jsx           # Story + stats + highlight cards
│   │   ├── Destinations.jsx    # Day 1–4 tabbed itinerary
│   │   ├── Stats.jsx           # Animated counters strip
│   │   ├── VehiclePricing.jsx  # Fleet with ₹/km pricing
│   │   ├── AirportPickup.jsx   # BLR / IXE / RQY transfer cards
│   │   ├── WhyUs.jsx           # 6 feature cards
│   │   ├── Testimonials.jsx    # 6 reviewer cards
│   │   ├── Gallery.jsx         # Masonry hover-zoom gallery
│   │   ├── Contact.jsx         # Booking form + contact + Map
│   │   ├── Footer.jsx          # Multi-column footer
│   │   ├── FloatingActions.jsx # Pulsing WhatsApp + Call FABs
│   │   ├── FadeUp.jsx          # Reusable scroll-reveal primitive
│   │   ├── SectionLabel.jsx    # Gold accent label
│   │   └── Counter.jsx         # Animated number counter
│   └── data/
│       ├── constants.js        # Phone, email, URLs, nav links
│       ├── destinations.js     # Day-wise tour spots
│       └── site.js             # Vehicles, airports, testimonials, gallery
├── tailwind.config.js          # Custom colors + fonts
├── postcss.config.js
└── vite.config.js
```

## 🎨 Design System

**Colors**
- Forest Green `#166534` — primary brand
- Forest Dark `#0d3d1f` — dark backgrounds
- Gold `#D4AF37` — accent
- Cream `#fafaf7` — soft background
- Ink `#111827` — text

**Fonts**
- **Playfair Display** — display / headings
- **Cormorant Garamond Italic** — script accents
- **Inter** — body

## 📞 Contact Configuration

All contact info lives in **`src/data/constants.js`**. Edit a single file to update phone, email, and WhatsApp messages everywhere.

```js
export const PHONE = '9141682366';
export const EMAIL = 'Nagrajc3541@gmail.com';
```

## ✨ Features

- Cinematic parallax hero with floating glass credibility cards
- Sticky navbar (transparent → blurred white on scroll)
- Animated mobile menu (full-screen drawer)
- Tabbed Day 1–4 destination itineraries with hover-zoom cards
- 5 premium vehicle cards with prominent ₹/km pricing
- 3 airport transfer cards (Bangalore, Mangalore, Shivamogga)
- Animated counters (5K+ travellers, 50+ destinations, etc.)
- Booking form that opens a pre-filled WhatsApp message
- Embedded Google Map at the office coordinates
- Floating WhatsApp + Call FABs with pulsing ring
- Full SEO meta tags + JSON-LD `TravelAgency` schema
- Fully responsive (mobile-first)
- Framer Motion scroll-reveal animations throughout

## 🛠 Customisation

- **Change tour spots** → edit `src/data/destinations.js`
- **Change vehicles / prices** → edit `src/data/site.js` (`vehicles` array)
- **Change testimonials** → edit `src/data/site.js` (`testimonials` array)
- **Change gallery images** → edit `src/data/site.js` (`gallery` array)
- **Change brand colors** → edit `tailwind.config.js`

## 📦 Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion 11
- React Icons 5

---

Crafted with care for Nagaraj Tours & Travels · Chikkamagalure, India.
