"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';

const teamMembers = [
  {
    name: 'Rtr. Nadeesha Nilupul',
    role: 'Co-Director of Digital Media Avenue',
    image: '/images/nadeesha.webp',
    phone: '076-8224295'
  },
  {
    name: 'Rtr. Sithika Himandith',
    role: 'Co-Director of Digital Media Avenue',
    image: '/images/sithika.webp',
    phone: '071-8788420'
  },
  {
    name: 'Rtr. Gangani Yashodara',
    role: 'Co-Director of Digital Media Avenue',
    image: '/images/yashodara.webp',
    phone: '070-3647088'
  },
  {
    name: 'Rtr. Kareema Quadri',
    role: 'Ex-Co Member',
    image: '/images/kareema.webp',
    phone: '076-2385425'
  }
];

export function TeamSection() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % teamMembers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, index]);

  const next = () => setIndex((prev) => (prev + 1) % teamMembers.length);
  const prev = () => setIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

  return (
    <section id="team" className="py-24 md:py-32 bg-canvas-bg overflow-hidden relative border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 relative z-20">

        {/* Header - Contained */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center gap-8 mb-16">
          <div>
            <p className="font-manrope text-[10px] md:text-xs font-black text-art-blue tracking-[0.4em] uppercase mb-4">THE COUNCIL</p>
            <h2 className="font-manrope text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
              CONTACT <span className="text-art-blue not-italic underline decoration-art-blue/30 underline-offset-8">US</span>
            </h2>
          </div>
        </div>

        {/* 🚀 MODERN DEPTH SLIDER (RESIZED FOR UX) */}
        <div className="relative h-[480px] md:h-[500px] flex items-center justify-center w-full">
          <button
            onClick={prev}
            className="absolute left-0 md:left-8 z-30 w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-art-blue hover:border-art-blue transition-all group shadow-[0_0_30px_rgba(0,0,0,0.5)] cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 md:right-8 z-30 w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-art-blue hover:border-art-blue transition-all group shadow-[0_0_30px_rgba(0,0,0,0.5)] cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <AnimatePresence mode="popLayout">
            {teamMembers.map((member, i) => {
              const isActive = i === index;
              const isNext = i === (index + 1) % teamMembers.length;
              const isPrev = i === (index - 1 + teamMembers.length) % teamMembers.length;

              if (!isActive && !isNext && !isPrev) return null;

              return (
                <motion.div
                  key={i}
                  layout
                  initial={{ opacity: 0, scale: 0.8, x: isActive ? 0 : isNext ? 200 : -200 }}
                  animate={{
                    opacity: isActive ? 1 : 0.4,
                    scale: isActive ? 1 : 0.85,
                    x: isActive ? 0 : isNext ? 300 : -300,
                    zIndex: isActive ? 20 : 10,
                    filter: isActive ? "blur(0px)" : "blur(4px)"
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute w-full max-w-[320px]"
                  onMouseEnter={() => { if (isActive) setIsHovered(true); }}
                  onMouseLeave={() => setIsHovered(false)}
                  onTouchStart={() => { if (isActive) setIsHovered(true); }}
                  onTouchEnd={() => setIsHovered(false)}
                >
                  <div
                    className="group relative aspect-[3/4] rounded-[40px] overflow-hidden border-2 border-white/5 bg-card-bg shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Details */}
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-black/80 backdrop-blur-md border-t border-white/10 group-hover:bg-black/90 transition-colors">
                      <p className="font-manrope text-art-blue text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-2">{member.role}</p>
                      <h3 className="font-manrope text-2xl font-black text-white mb-6 uppercase italic leading-tight">{member.name}</h3>

                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-4 text-white/90 group-hover:text-white transition-colors">
                          <div className="w-10 h-10 shrink-0 rounded-xl bg-art-blue flex items-center justify-center text-white shadow-blue-glow group-hover:scale-110 transition-transform">
                            <Phone className="w-4 h-4" />
                          </div>
                          <span className="font-manrope font-black text-[13px] tracking-widest">{member.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative Blur Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-art-blue/10 blur-[150px] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-art-blue/10 blur-[150px] -translate-y-1/2 translate-x-1/2" />
    </section>
  );
}
