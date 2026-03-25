"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const showcaseItems = [
  { id: 1, title: 'Prismatic Echo', category: 'Event Flyer', image: '/images/flyer1.png' },
  { id: 2, title: 'Golden Hour', category: 'Minimalist Poster', image: '/images/flyer2.png' },
  { id: 3, title: 'Neon Pulse', category: 'Artistic Cover', image: '/images/flyer1.png' },
  { id: 4, title: 'Silk & Sand', category: 'Branding Layout', image: '/images/flyer2.png' },
  { id: 5, title: 'Digital Ink', category: 'Creative Collage', image: '/images/flyer1.png' },
  { id: 6, title: 'Aetheria', category: 'Experimental Design', image: '/images/flyer2.png' }
];

export function ShowcaseSection() {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <section id="showcase" className="py-32 bg-canvas-bg overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center mb-24">
        <p className="font-manrope text-xs font-bold text-art-blue tracking-widest uppercase mb-4">Past Masterpieces</p>
        <h2 className="font-manrope text-5xl md:text-7xl font-black text-white leading-tight uppercase">
          HALL OF <br />
          <span className="text-art-blue italic">LEGENDS</span>
        </h2>
        <div className="h-1 w-24 bg-art-blue mx-auto mt-8 rounded-full" />
      </div>

      <motion.div
        ref={carouselRef}
        className="cursor-grab active:cursor-grabbing overflow-hidden px-10"
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag="x"
          dragConstraints={{
            right: 0,
            left: -width
          }}
          className="flex gap-10 px-4 pb-12"
        >
          {showcaseItems.map((item) => (
            <motion.div
              key={item.id}
              className="min-w-[300px] md:min-w-[450px] aspect-[3/4] rounded-[40px] relative group overflow-hidden flex-shrink-0 minimal-card p-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500" />
              <div className="absolute bottom-0 inset-x-0 p-8 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black to-transparent">
                <h3 className="font-manrope text-2xl font-bold text-white mb-1 uppercase tracking-wider">{item.title}</h3>
                <p className="font-inter text-sm text-art-gray italic">{item.category}</p>
                <button className="mt-6 px-6 py-2 rounded-full border border-white/20 text-[10px] font-bold tracking-widest text-white hover:bg-art-blue hover:text-white transition-all">VIEW GALLERY</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
