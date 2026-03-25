"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Crown } from 'lucide-react';

const prizesData = [
  {
    rank: 'The Grand Champion',
    amount: '15,000',
    color: 'from-art-blue to-art-blue-light',
    icon: Gem,
    perks: ['Exclusive Elite Masterpiece Badge', 'Premium Industry Internship', 'Featured Artist Profile']
  },
  {
    rank: (
      <>
        1<sup className="text-[10px] ml-0.5">st</sup> Runner Up
      </>
    ),
    amount: '10,000',
    color: 'from-gray-300 to-gray-500',
    icon: Crown,
    perks: ['Professional Creative Toolkit', 'Digital Distinction Award', 'Exclusive Community Access']
  }
];

export function PrizesSection() {
  return (
    <section id="prizes" className="py-32 bg-canvas-bg overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 z-10 relative">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-24"
        >
          <p className="font-manrope text-xs font-bold text-art-blue tracking-widest uppercase mb-4">THE REWARDS OF EXCELLENCE</p>
          <h2 className="font-manrope text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase">
            THE GRAND <br />
            <span className="text-art-blue italic">REWARDS</span>
          </h2>
          <div className="h-1.5 w-24 bg-art-blue mx-auto mt-8 rounded-full shadow-[0_0_20px_rgba(0,112,243,0.8)]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {prizesData.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative minimal-card p-1 pb-16 rounded-[40px] group overflow-hidden border-white/5 hover:border-art-blue/30"
            >
              <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${prize.color} opacity-30 group-hover:opacity-100 transition-opacity duration-500 shadow-blue-glow`} />
              
              <div className="p-8 pb-0 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-[30px] bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-art-blue/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                  <prize.icon className="w-10 h-10 text-art-blue" />
                </div>
                
                <h3 className="font-manrope text-2xl font-black text-white mb-6 uppercase tracking-tight italic flex items-start justify-center">
                   {prize.rank}
                </h3>
                <div className="flex flex-col items-center mb-10">
                  <span className="text-xs font-manrope font-bold text-art-gray/40 uppercase tracking-[0.4em] mb-2">Cash Prize of</span>
                  <div className="text-5xl md:text-6xl font-black text-white flex items-center gap-3">
                    <span className="text-xl text-art-blue">LKR</span>
                    {prize.amount}
                  </div>
                </div>

                <div className="w-full space-y-5 text-left px-8">
                  {prize.perks.map((perk, i) => (
                    <div key={i} className="flex items-center gap-4 text-art-gray group-hover:text-white/80 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-art-blue shadow-blue-glow" />
                      <span className="text-sm font-manrope font-bold uppercase tracking-widest">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
