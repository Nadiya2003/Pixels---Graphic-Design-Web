"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function HeaderSection() {
  const { scrollY } = useScroll();

  // Create an opacity transform based on scroll
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const pointerEvents = useTransform(scrollY, [0, 100], ["auto", "none"]);

  return (
    <motion.header
      style={{ opacity, scale, pointerEvents }}
      // Moved up by reducing p-6 to p-4 and top positioning
      className="fixed top-2 left-0 right-0 z-50 p-4 md:p-8 pointer-events-none"
    >
      <div className="max-w-[1600px] mx-auto flex justify-between items-center">

        {/* 🏢 LEFT LOGO - PXELS */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
          className="pointer-events-auto"
        >
          <div className="w-20 md:w-40 h-auto group cursor-pointer transition-all duration-500 hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <img
              src="/Images/Pxels Logo.png"
              alt="Pxels Logo"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* 🏢 RIGHT LOGO - ROTARACT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
          className="pointer-events-auto"
        >
          <div className="w-20 md:w-40 h-auto group cursor-pointer transition-all duration-500 hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <img
              src="/Images/Rotaract Logo.png"
              alt="Rotaract Logo"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

      </div>
    </motion.header>
  );
}