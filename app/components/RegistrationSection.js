"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Check, Loader2, Sparkles, Send, User, Mail, Phone, GraduationCap, Building2, IdCard, Palette, PenTool, Type, FileText, ChevronRight } from 'lucide-react';

export function RegistrationSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <section id="register" className="relative py-40 px-4 bg-canvas-bg overflow-hidden border-t border-white/10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-art-blue/10 blur-[150px] opacity-30" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-art-blue/10 border border-art-blue/30 mb-8">
            <Sparkles className="w-4 h-4 text-art-blue" />
            <span className="font-manrope text-[10px] font-black text-art-blue uppercase tracking-[0.4em]">Official Portal</span>
          </div>
          <h2 className="font-manrope text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
            THE DESIGN <br />
            <span className="text-art-blue italic">ARENA</span>
          </h2>
          <p className="font-inter text-xl text-art-gray max-w-2xl mx-auto leading-relaxed">
            Register for the <span className="text-white font-bold">PIXELS Intra-University Competition</span>. Showcase your talent and claim the grand rewards.
          </p>
        </motion.div>

        {!isExpanded ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <button
               onClick={() => setIsExpanded(true)}
               className="group relative px-20 py-8 bg-art-blue text-white rounded-[30px] font-manrope font-black text-sm uppercase tracking-[0.3em] overflow-hidden transition-all hover:scale-105 hover:shadow-blue-glow"
            >
               <span className="relative z-10 flex items-center gap-4">
                 Join Competition
                 <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </span>
               <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>
        ) : isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-20 text-center bg-card-bg border border-art-blue/30 rounded-[60px]"
          >
            <div className="w-24 h-24 bg-art-blue rounded-full flex items-center justify-center mx-auto mb-10 shadow-blue-glow">
              <Check className="w-12 h-12 text-white" />
            </div>
            <h3 className="font-manrope text-5xl font-black text-white mb-6 uppercase">SUBMISSION SUCCESS</h3>
            <p className="font-inter text-art-gray text-lg mb-12 max-w-md mx-auto">Your entry is now recorded in our archives. Expect a confirmation email shortly.</p>
            <button onClick={() => { setIsExpanded(false); setIsSuccess(false); }} className="text-art-blue font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">Return to Home</button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card-bg/80 backdrop-blur-2xl border border-white/10 rounded-[60px] p-10 md:p-20 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-16">
              
              {/* 🏛️ SECTION 1 */}
              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-2xl bg-art-blue flex items-center justify-center text-white font-black">1</span>
                  <h3 className="font-manrope text-2xl font-black text-white uppercase tracking-widest">Personal Identification</h3>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  <InputCluster label="Full Name" placeholder="e.g. Nadeesha Nilupul" icon={User} required />
                  <InputCluster label="University ID / Registration Number" placeholder="e.g. HS/2021/456" icon={IdCard} required />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputCluster label="Faculty / Department" placeholder="e.g. Computing" icon={Building2} required />
                    <SelectCluster label="Year of University" icon={GraduationCap} required options={["1st Year", "2nd Year", "3rd Year", "4th Year"]} />
                  </div>
                </div>
              </div>

              {/* 📞 SECTION 2 */}
              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-2xl bg-art-blue flex items-center justify-center text-white font-black">2</span>
                  <h3 className="font-manrope text-2xl font-black text-white uppercase tracking-widest">Contact Details</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InputCluster label="Email Address" type="email" placeholder="john@example.com" icon={Mail} required />
                  <InputCluster label="Phone Number" type="tel" placeholder="+94 77 123 4567" icon={Phone} required />
                </div>
              </div>

              {/* 🎨 SECTION 3 */}
              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-art-blue font-black border border-art-blue/50">3</span>
                  <h3 className="font-manrope text-2xl font-black text-white uppercase tracking-widest">Design Submission</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-8">
                  <InputCluster label="Design Title" placeholder="Your work's name" icon={Type} required />
                  
                  <div className="space-y-4">
                    <label className="font-manrope text-xs font-black text-white/90 uppercase tracking-widest ml-1">The Story (Short Description)</label>
                    <textarea 
                      required 
                      rows={5} 
                      className="w-full bg-white/5 border-2 border-white/5 rounded-3xl p-6 text-white font-inter text-base focus:border-art-blue transition-all outline-none placeholder:text-art-gray/20 focus:bg-white/10"
                      placeholder="Explain your concept (max 300 words)..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <SelectCluster label="Submission Category" icon={Palette} required options={["Poster Design", "Logo Design", "Social Media Art", "UI/UX Design", "Digital Illustration"]} />
                     <InputCluster label="Tools Used" placeholder="e.g. Figma, Photoshop" icon={PenTool} required />
                  </div>

                  <div className="space-y-4">
                    <label className="font-manrope text-xs font-black text-white/90 uppercase tracking-widest ml-1">Upload Design Archive (JPG / PNG / PDF)</label>
                    <div className="group relative border-2 border-dashed border-white/10 rounded-[40px] p-12 text-center hover:border-art-blue/50 hover:bg-art-blue/5 transition-all cursor-pointer">
                       <Upload className="w-12 h-12 text-art-blue mx-auto mb-4 group-hover:scale-110 transition-transform" />
                       <p className="font-manrope text-sm font-bold text-white mb-2 uppercase">Drag submission here or <span className="text-art-blue underline">Browse Files</span></p>
                       <p className="font-inter text-xs text-art-gray/40">Premium Resolution Required (Max 50MB)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-6 pt-10">
                <button 
                  type="button" 
                  onClick={() => setIsExpanded(false)}
                  className="flex-1 py-6 bg-white/5 text-art-gray rounded-3xl font-manrope font-black text-xs uppercase tracking-[0.3em] hover:bg-white/10 transition-all border border-white/5"
                >
                  Go Back
                </button>
                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="flex-[2] py-6 bg-art-blue text-white rounded-3xl font-manrope font-black text-xs uppercase tracking-[0.4em] hover:shadow-blue-glow transition-all flex items-center justify-center gap-4"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" /> : <>Finalize Registration <Send className="w-4 h-4" /></>}
                </button>
              </div>

            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// 🛡️ REUSABLE UI COMPONENTS FOR CLARITY
function InputCluster({ label, icon: Icon, ...props }) {
  return (
    <div className="space-y-4 group">
      <div className="flex items-center gap-2 text-white/90 ml-1">
         <Icon className="w-3.5 h-3.5 text-art-blue" />
         <label className="font-manrope text-xs font-black uppercase tracking-widest">{label}</label>
      </div>
      <input 
        className="w-full bg-white/5 border-2 border-white/5 rounded-2xl py-5 px-8 text-white font-inter text-base focus:border-art-blue transition-all outline-none placeholder:text-art-gray/20 focus:bg-white/10"
        {...props} 
      />
    </div>
  );
}

function SelectCluster({ label, icon: Icon, options, ...props }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-white/90 ml-1">
         <Icon className="w-3.5 h-3.5 text-art-blue" />
         <label className="font-manrope text-xs font-black uppercase tracking-widest">{label}</label>
      </div>
      <div className="relative">
        <select 
          className="w-full appearance-none bg-white/5 border-2 border-white/5 rounded-2xl py-5 px-8 text-white font-inter text-base focus:border-art-blue transition-all outline-none focus:bg-white/10"
          {...props}
        >
          {options.map((opt, i) => <option key={i} value={opt} className="bg-canvas-bg">{opt}</option>)}
        </select>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-art-gray/40">
           <ChevronRight className="w-5 h-5 rotate-90" />
        </div>
      </div>
    </div>
  );
}
