"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaBehance, FaDribbble, FaGlobe } from 'react-icons/fa';

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: FaGlobe, href: '#', label: 'Website' }
  ];

  return (
    <footer className="bg-canvas-bg border-t border-white/5 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="space-y-8">
            <h2 className="font-manrope text-3xl font-black text-white tracking-widest uppercase">
              PIX<span className="text-art-blue">ELS</span>
            </h2>
            <p className="font-inter text-art-gray text-xs leading-relaxed max-w-xs">
              The premier graphic design competition organizing by the <span className="text-white">Rotaract Club of University of Kelaniya</span>. Cultivating the next generation of creative visionaries.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="font-manrope text-[10px] font-bold text-white uppercase tracking-[0.3em]">Explore</h3>
            <ul className="space-y-4 font-manrope text-xs text-art-gray">
              <li><a href="#timeline" className="hover:text-art-blue transition-colors uppercase tracking-widest">Odyssey</a></li>
              <li><a href="#team" className="hover:text-art-blue transition-colors uppercase tracking-widest">Curators</a></li>
              <li><a href="#prizes" className="hover:text-art-blue transition-colors uppercase tracking-widest">Awards</a></li>
              <li><a href="#register" className="hover:text-art-blue transition-colors uppercase tracking-widest">Register</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h3 className="font-manrope text-[10px] font-bold text-white uppercase tracking-[0.3em]">Contact</h3>
            <ul className="space-y-4 font-manrope text-xs text-art-gray">
              <li><a href="mailto:info@rotaractkelaniya.com" className="hover:text-art-blue transition-colors italic">info@rotaractkelaniya.com</a></li>
              <li><p className="uppercase tracking-widest">Kelaniya, Sri Lanka</p></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-8">
            <h3 className="font-manrope text-[10px] font-bold text-white uppercase tracking-[0.3em]">Stay Informed</h3>
            <div className="relative">
              <input 
                type="email" 
                placeholder="designer@pixels.com"
                className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-white font-inter text-xs focus:outline-none focus:border-art-blue focus:bg-white/10 transition-all placeholder:text-art-gray/30"
              />
              <button className="absolute right-2 top-2 bottom-2 px-6 bg-art-blue rounded-xl text-white font-manrope font-bold text-[10px] uppercase tracking-widest shadow-blue-glow">Join</button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-manrope text-[9px] text-art-gray uppercase tracking-[0.2em] leading-relaxed">
            &copy; {currentYear} PIXELS. Organized by <span className="text-white">Rotaract Club of University of Kelaniya</span>. <br />
            Powered by <span className="text-art-blue hover:text-white transition-colors cursor-pointer font-bold">RACUOCUOK DM WORKS</span>.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, color: '#0070f3' }}
                className="text-art-gray/30 transition-colors p-2"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
