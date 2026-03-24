"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alexandra Vance',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&h=600&auto=format&fit=crop',
    phone: '+94 77 123 4567'
  },
  {
    name: 'Marcus Thorne',
    role: 'Typographer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&h=600&auto=format&fit=crop',
    phone: '+94 71 234 5678'
  },
  {
    name: 'Elena Rossi',
    role: 'Identity Lead',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop',
    phone: '+94 72 345 6789'
  },
  {
    name: 'Julian Vane',
    role: 'Motion Arts',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&h=600&auto=format&fit=crop',
    phone: '+94 75 456 7890'
  }
];

export function TeamSection() {
  const [index, setIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isAutoPlay || isHovered) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % teamMembers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlay, isHovered]);

  const next = () => setIndex((prev) => (prev + 1) % teamMembers.length);
  const prev = () => setIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

  return (
    <section id="team" className="py-24 md:py-32 bg-canvas-bg overflow-hidden relative border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 relative z-20">
        
        {/* Header - Contained */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
           <div className="text-left">
              <p className="font-manrope text-[10px] md:text-xs font-black text-art-blue tracking-[0.4em] uppercase mb-4">THE COUNCIL</p>
              <h2 className="font-manrope text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
                CONTACT <span className="text-art-blue not-italic underline decoration-art-blue/30 underline-offset-8">US</span>
              </h2>
           </div>
           
           <div className="flex gap-4">
              <button 
                onClick={() => { prev(); setIsAutoPlay(false); }}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-art-blue hover:border-art-blue transition-all group"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => { next(); setIsAutoPlay(false); }}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-art-blue hover:border-art-blue transition-all group"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </div>

        {/* 🚀 MODERN DEPTH SLIDER (RESIZED FOR UX) */}
        <div className="relative h-[480px] md:h-[500px] flex items-center justify-center">
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
                        >
                            <div 
                                className="group relative aspect-[3/4] rounded-[40px] overflow-hidden border-2 border-white/5 bg-card-bg shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
                                onMouseEnter={() => isActive && setIsHovered(true)}
                                onMouseLeave={() => isActive && setIsHovered(false)}
                            >
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                                />
                                
                                {/* Details */}
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-linear-to-t from-black via-black/60 to-transparent">
                                    <p className="font-manrope text-art-blue text-[10px] font-black uppercase tracking-[0.4em] mb-1">{member.role}</p>
                                    <h3 className="font-manrope text-3xl font-black text-white mb-6 uppercase italic leading-none">{member.name}</h3>
                                    
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-3 text-white/80 group-hover:text-white transition-colors">
                                            <div className="w-8 h-8 rounded-xl bg-art-blue flex items-center justify-center text-white shadow-blue-glow">
                                                <Phone className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="font-manrope font-bold text-xs tracking-widest">{member.phone}</span>
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
