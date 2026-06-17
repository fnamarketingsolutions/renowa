import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AboutUs from './AboutUs';
import ServiceSection from './ServiceSection';
import CompanySection from './CompanySection';
import CTA from './CTA';
import RepresentativeGreeting from './RepresentativeGreeting';
import ManagerMessage from './ManagerMessage';

// Desktop View Images
import heroImage1 from "../assets/homePage/hero-section-image.jpg";
import heroImage2 from "../assets/homePage/hero-image2.jpg";
import heroImage3 from "../assets/homePage/hero-image3.jpg";

// Mobile View Images
import heroMobile2 from "../assets/homePage/hero-image2-mobile.png";
import heroMobile3 from "../assets/homePage/hero-image3-mobile.png";

export default function HeroSection() {
  // UNIFIED CAROUSEL DATA MATRIX ARRAY
  const carouselData = [
    {
      desktopImage: heroImage1,
      mobileImage: heroImage1,
      line1: "“リノ”ベーションで、",
      line2: "人の“ワ”を。",
      underlineWidth1: "100%",
      underlineWidth2: "85%"
    },
    {
      desktopImage: heroImage2, 
      mobileImage: heroMobile2,
      line1: "“リノ”ベーションで、",
      line2: "人の“ワ”を。",
      underlineWidth1: "100%",
      underlineWidth2: "90%"
    },
    {
      desktopImage: heroImage3, 
      mobileImage: heroMobile3,
      line1: "住まいと人を結ぶ、",
      line2: "暮らしを彩るパートナー。",
      underlineWidth1: "80%",
      underlineWidth2: "100%"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automated Carousel Autoplay Engine Loop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000); // 5-second automatic rotation cycle
    return () => clearInterval(timer);
  }, [carouselData.length]);

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
        <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 relative items-stretch">
          
          {/* LEFT COLUMN COMPONENT */}
          <div className="hidden lg:block lg:col-span-3 bg-transparent relative" />

          {/* RIGHT COLUMN IMAGE WRAPPER - SLIDES UP FROM THE BOTTOM ON MOUNT */}
          <motion.div 
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 lg:col-span-9 px-0 sm:px-6 lg:px-0 lg:pl-4 relative flex items-center justify-end"
          >
            <div 
              className="w-full lg:w-[100%] bg-white rounded-tl-[40px] sm:rounded-tl-[80px] rounded-bl-[4px] lg:rounded-bl-[80px] rounded-tr-[4px] rounded-br-[4px] shadow-sm overflow-hidden border border-slate-100/40 relative h-[450px] sm:min-h-[480px] md:min-h-[560px] lg:min-h-[640px] flex items-end"
            >
              {/* IMAGE PORTAL FOR MOBILE VIEWPOINTS */}
              <div className="block sm:hidden absolute inset-0 w-full h-full">
                <AnimatePresence mode="popLayout">
                  <motion.img 
                    key={`mobile-${currentIndex}`}
                    src={carouselData[currentIndex].mobileImage}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    alt={`Renova Mobile Slide - Asset ${currentIndex + 1}`} 
                    className="w-full h-full object-cover object-center pointer-events-none select-none"
                  />
                </AnimatePresence>
              </div>

              {/* IMAGE PORTAL FOR DESKTOP VIEWPOINTS */}
              <div className="hidden sm:block absolute inset-0 w-full h-full">
                <AnimatePresence mode="popLayout">
                  <motion.img 
                    key={`desktop-${currentIndex}`}
                    src={carouselData[currentIndex].desktopImage}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                    alt={`Renova Desktop Slide - Asset ${currentIndex + 1}`} 
                    className="w-full h-full object-cover object-center pointer-events-none select-none"
                  />
                </AnimatePresence>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* FLOATING TEXT PLATFORM PANEL - SLIDES IN FROM THE LEFT ON MOUNT */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-6 left-0 sm:bottom-12 sm:left-0 lg:bottom-20 lg:left-[7%] z-30 w-fit max-w-[85%] sm:w-[400px] md:w-[620px] lg:w-[680px]"
          >
            {/* MAIN TEXT CARD */}
            <div 
              className="bg-white/60 px-3 py-4 sm:px-12 sm:py-6 rounded-r-[16px] sm:rounded-[20px] shadow-xl border border-white/60 pt-6 sm:pt-12 relative"
            >
              {/* Text Transitions On Slide Change */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentIndex}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="space-y-2 sm:space-y-6"
                >
                  
                  {/* Line 1 Heading Node */}
                  <div className="relative inline-block block">
                    <h2 className="renowa-font text-lg sm:text-4xl md:text-[42px] font-black tracking-wider text-slate-800 leading-tight whitespace-nowrap">
                      {carouselData[currentIndex].line1}
                    </h2>
                    
                    {/* Underline Pipeline Strip */}
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: carouselData[currentIndex].underlineWidth1 }}
                      transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
                      className="absolute -bottom-1 left-0 h-[2px] sm:h-1 bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-300 rounded-full" 
                    />
                  </div>

                  {/* Line 2 Heading Node */}
                  <div className="relative inline-block block">
                    <h2 className="renowa-font text-lg sm:text-4xl md:text-[42px] font-black tracking-wider text-slate-800 leading-tight whitespace-nowrap">
                      {carouselData[currentIndex].line2}
                    </h2>
                    
                    {/* Underline Pipeline Strip */}
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: carouselData[currentIndex].underlineWidth2 }}
                      transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
                      className="absolute -bottom-1 left-0 h-[2px] sm:h-1 bg-gradient-to-r from-sky-400 via-emerald-400 to-transparent rounded-full" 
                    />
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* INTEGRATED CAROUSEL DOT INDICATORS */}
              <div className="flex items-center gap-1.5 mt-4 sm:mt-6 pl-1">
                {carouselData.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => setCurrentIndex(dotIndex)}
                    className="group relative focus:outline-none"
                    aria-label={`Go to slide ${dotIndex + 1}`}
                  >
                    <div 
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentIndex === dotIndex 
                          ? 'w-6 bg-slate-800' 
                          : 'w-1.5 bg-slate-400/70 hover:bg-slate-600'
                      }`} 
                    />
                  </button>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
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