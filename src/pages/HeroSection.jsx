import React from 'react';
import { motion } from 'framer-motion';
import AboutUs from './AboutUs';
import ServiceSection from './ServiceSection';
import CompanySection from './CompanySection';
import CTA from './CTA';
import RepresentativeGreeting from './RepresentativeGreeting';
import ManagerMessage from './ManagerMessage';
import heroImage from "../assets/homePage/hero-section-image.jpg";

export default function HeroSection() {
  return (
    <>
      <motion.section 
        id="top"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-10 w-full pb-12 sm:pb-16 md:pb-20 overflow-hidden relative"
      >
        {/* BACKGROUND MATTE SIDE STRIP GRID PANEL LAYOUT */}
        <motion.div layout className="w-full max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 relative items-stretch">
          
          {/* LEFT COLUMN COMPONENT: COVERS THE LEFT L-SHAPE SPACE WITH PURE LIGHT BLUE */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="hidden lg:block lg:col-span-3 bg-transparent relative"
          />

          {/* RIGHT COLUMN IMAGE WRAPPER: FIXED FULL WIDTH ON MOBILE */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="col-span-1 lg:col-span-9 px-0 sm:px-6 lg:px-0 lg:pl-4 relative flex items-center justify-end"
          >
            {/* Added h-[450px] for a taller portrait/square presence on mobile screens */}
            <motion.div 
              className="w-full lg:w-[100%] bg-white rounded-tl-[40px] sm:rounded-tl-[80px] rounded-bl-[4px] lg:rounded-bl-[80px] rounded-tr-[4px] rounded-br-[4px] shadow-sm overflow-hidden border border-slate-100/40 relative h-[450px] sm:min-h-[480px] md:min-h-[560px] lg:min-h-[640px] flex items-end"
            >
              {/* The Main Image Asset Node */}
              <motion.img 
                initial={{ scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                src={heroImage}
                alt="Japanese Home Kitchen Family Dining Area Dynamic Mock Renovation Matrix" 
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
              />
              <motion.div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>

          {/* FLOATING TEXT PLATFORM PANEL - OVERLAYS BOTTOM LEFT STABLY */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-6 left-4 sm:bottom-12 sm:left-8 lg:bottom-20 lg:left-[12%] z-30 w-[calc(100%-2rem)] sm:w-[540px] md:w-[620px] lg:w-[680px]"
          >
            {/* MAIN SOLID/MATTE TRANSLUCENT GLASS TEXT CARD */}
            <motion.div 
              className="bg-white/95 backdrop-blur-md px-6 py-6 sm:px-12 sm:py-10 rounded-tr-[32px] rounded-bl-[32px] rounded-tl-[4px] rounded-br-[4px] shadow-xl border border-white/60 pt-9 sm:pt-12"
            >
              <motion.div className="space-y-4 sm:space-y-6">
                
                {/* Line 1 Heading Node */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="relative inline-block"
                >
                  <motion.h2 className="text-2xl sm:text-4xl md:text-[42px] font-black tracking-wider text-slate-800 leading-tight">
                    “リノ”ベーションで、
                  </motion.h2>
                  
                  {/* Underline Pipeline Strip */}
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.75, delay: 0.85, ease: "easeInOut" }}
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-300 rounded-full" 
                  />
                </motion.div>

                {/* Line 2 Heading Node */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="relative inline-block block"
                >
                  <motion.h2 className="text-2xl sm:text-4xl md:text-[42px] font-black tracking-wider text-slate-800 leading-tight">
                    人の“ワ”を。
                  </motion.h2>
                  
                  {/* Underline Pipeline Strip */}
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 0.75, delay: 1.1, ease: "easeInOut" }}
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-sky-400 via-emerald-400 to-transparent rounded-full" 
                  />
                </motion.div>

              </motion.div>
            </motion.div>
          </motion.div>

        </motion.div>
      </motion.section>
      
      <AboutUs/>
      <RepresentativeGreeting/>
      <ManagerMessage/>
      <ServiceSection/>
      <CompanySection/>
      <CTA/>
    </>
  );
}