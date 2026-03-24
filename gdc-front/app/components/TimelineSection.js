"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Brush, Search, Award, Gem } from 'lucide-react';

const timelineData = [
  {
    date: 'Oct 15 - Oct 25',
    title: 'THE CALL TO ART',
    description: 'Registration opens for all creative soul seeking glory in the arena.',
    icon: Palette,
    status: 'completed'
  },
  {
    date: 'Nov 01 - Nov 05',
    title: 'THE CREATIVE STROKE',
    description: 'Primary submission phase. Participants upload their flyer design concepts.',
    icon: Brush,
    status: 'active'
  },
  {
    date: 'Nov 06 - Nov 10',
    title: 'THE CURATOR REVIEW',
    description: 'Our elite panel of curators reviews all submissions and selects the finalists.',
    icon: Search,
    status: 'upcoming'
  },
  {
    date: 'Nov 12 - Nov 15',
    title: 'FINAL EXHIBITION',
    description: 'Finalists battle it out in a live design-off for the ultimate prize.',
    icon: Award,
    status: 'upcoming'
  },
  {
    date: 'Nov 18 - Nov 20',
    title: 'THE ASCENSION',
    description: 'Winners are announced and join the elite ranks of the Master Designers.',
    icon: Gem,
    status: 'upcoming'
  }
];

export function TimelineSection() {
  return (
    <section id="timeline" className="relative py-32 px-4 bg-canvas-bg overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-24"
        >
          <p className="font-manrope text-xs font-bold text-art-blue tracking-widest uppercase mb-4">The Competition Path</p>
          <h2 className="font-manrope text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase">
            THE CREATIVE <br />
            <span className="text-art-blue italic">ODYSSEY</span>
          </h2>
          <div className="h-1.5 w-24 bg-art-blue mx-auto mt-8 rounded-full shadow-[0_0_20px_rgba(0,112,243,0.8)]" />
        </motion.div>

        <div className="relative">
          {/* 📏 Dynamic & Bright Vertical Connector Line */}
          <div 
            className="absolute left-8 md:left-1/2 h-[calc(100%-14rem)] top-28 w-[2px] bg-gradient-to-b from-art-blue via-art-blue/50 to-art-blue/10 -translate-x-1/2 z-0 opacity-80" 
          />

          <div className="space-y-32">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      className={`relative flex flex-col md:flex-row items-center gap-12 group ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* 🔮 Center Timeline Point */}
      <motion.div 
        variants={{
          hidden: { scale: 0.8, opacity: 0.3, backgroundColor: "rgba(10, 10, 12, 1)", borderColor: "rgba(255, 255, 255, 0.05)" },
          visible: { 
            scale: 1.25, 
            opacity: 1, 
            backgroundColor: "rgba(0, 112, 243, 1)", 
            borderColor: "rgba(0, 112, 243, 0.5)",
            boxShadow: "0 0 40px rgba(0, 112, 243, 0.8)" 
          }
        }}
        transition={{ duration: 0.5 }}
        className="absolute left-8 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl flex items-center justify-center z-20 border"
      >
        <motion.div
           variants={{
             hidden: { color: "rgba(136, 136, 136, 0.4)" },
             visible: { color: "rgba(255, 255, 255, 1)", rotate: [0, 10, -10, 0] }
           }}
           transition={{ duration: 0.5 }}
        >
          <item.icon className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* 📄 Content Card */}
      <div className="w-full md:w-1/2 pl-24 md:pl-0">
        <motion.div 
          variants={{
            hidden: { opacity: 0.2, x: index % 2 === 0 ? -40 : 40, scale: 0.9, filter: "blur(5px)" },
            visible: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`minimal-card p-10 rounded-3xl relative overflow-hidden group border-white/5 hover:border-art-blue/40 ${
            index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
          }`}
        >
          <span className="font-manrope text-art-blue text-xs font-bold tracking-[0.3em] mb-3 block uppercase opacity-80">
            {item.date}
          </span>
          <h3 className="font-manrope text-2xl font-black text-white mb-4 uppercase transition-colors group-hover:text-art-blue tracking-tight">
            {item.title}
          </h3>
          <p className="font-inter text-art-gray text-sm leading-relaxed transition-colors group-hover:text-white/90">
            {item.description}
          </p>

          {/* Line Highlight on hover */}
          <div className="absolute bottom-0 left-0 h-1 bg-art-blue transition-all duration-500 w-0 group-hover:w-full shadow-blue-glow" />
        </motion.div>
      </div>

      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
}
