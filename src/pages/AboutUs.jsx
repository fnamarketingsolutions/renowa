import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from "../assets/homePage/about-image.jpg"

const AboutUs = () => {
  // Stagger variants for smooth paragraph line entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    /* MAIN WRAPPER: Spans full edge-to-edge layout width. Background color and blur apply ONLY on mobile viewports */
    <div className='w-full min-h-screen flex items-center justify-center max-sm:bg-white/50 max-sm:backdrop-blur-[2px] py-12 md:py-0 relative overflow-hidden'>
      
      {/* DECORATIVE LINING BACKGROUND LAYER - GENUINE EDGE-TO-EDGE WINDOW COVERAGE */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {/* Adjusted viewBox and setting preserveAspectRatio to none guarantees the curves stretch diagonally across the entire window */}
        <svg 
          className="w-full h-full" 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Top Blue Wave Line - Flowing top-left down to bottom-right */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.35 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M 0,10 C 30,15 40,45 65,55 C 85,63 90,80 100,90"
            stroke="#22a4dd"
            strokeWidth="0.4"
            strokeLinecap="round"
          />
          {/* Bottom Lime-Green Wave Line - Flowing parallel top-left down to bottom-right */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.35 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            d="M 0,13 C 28,19 38,48 64,59 C 84,67 89,83 100,93"
            stroke="#A3E635"
            strokeWidth="0.4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* INNER STRUCTURE: Preserves its exact responsive width matrix bounds while centered perfectly within the parent */}
      <motion.section
        id="about us"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[92%] lg:max-w-[80%] mx-auto py-12 sm:py-16 md:py-24 relative z-10 select-none rounded-[32px]"
      >
        {/* CORE CONTENT LAYOUT MATRIX CONTAINER */}
        <motion.div
          layout
          className="w-full mx-auto flex flex-col lg:flex-row items-start relative z-10 gap-8 lg:gap-0"
        >

          {/* TEXT CONTENT CARD CONTAINER */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
            className="w-full lg:w-[65%] relative z-10 mt-0 lg:mt-32"
          >
            <motion.div className="bg-white p-5 sm:p-10 lg:p-12 rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-slate-100/80">

              {/* Heading Typography Area - Optimized for Center Alignment on Mobile */}
              <motion.div className="mb-6 sm:mb-8 text-center lg:text-left">
                <motion.h2 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="w-full max-w-4xl mx-auto"
                >
                  {/* Mobile: textAnchor="middle" x="50%" | Desktop: textAnchor="start" x="0" via responsive CSS */}
                  <svg viewBox="0 0 800 120" className="w-full h-auto font-sans font-black tracking-[0.15em]">
                    <defs>
                      <linearGradient id="outlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22a4dd" />
                        <stop offset="50%" stopColor="#4ade80" />
                        <stop offset="100%" stopColor="#A3E635" />
                      </linearGradient>
                    </defs>
                    
                    {/* Standard SVG handles centering on mobile using 50% coordinate system, falls back to left for lg */}
                    <text
                      dominantBaseline="middle"
                      fill="none"
                      stroke="url(#outlineGradient)"
                      strokeWidth="1.2"
                      className="text-[75px] block lg:hidden"
                      x="50%"
                      y="65%"
                      textAnchor="middle"
                    >
                      ABOUT US
                    </text>
                    <text
                      dominantBaseline="middle"
                      fill="none"
                      stroke="url(#outlineGradient)"
                      strokeWidth="1.2"
                      className="text-[75px] hidden lg:block"
                      x="0"
                      y="65%"
                      textAnchor="start"
                    >
                      ABOUT US
                    </text>
                  </svg>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="text-sm sm:text-base font-bold text-slate-700 tracking-wider mt-3 lg:pl-1"
                >
                  私たちについて
                </motion.p>
              </motion.div>

              {/* Authentic Japanese Narrative Descriptions */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-5 text-sm sm:text-[14px] text-slate-500 leading-relaxed font-normal tracking-wide pl-1 text-left"
              >
                <motion.p variants={itemVariants}>
                  私たちは、「リノベーションで、人のワを」という想いを社名に込め、住まいに関わる幅広い工事を手掛ける地域密着型の会社です。
                </motion.p>

                <motion.p variants={itemVariants}>
                  一般住宅のリフォームをはじめ、給湯器の設置・交換、住宅設備工事、内装・外装工事など、お客様の暮らしを支えるさまざまなサービスを提供しています。
                </motion.p>

                <motion.p variants={itemVariants}>
                  私たちは、住まいづくりにおいて何よりも大切なのは「安心と信頼」だと考えています。そのため、確かな技術力による高品質な施工はもちろん、徹底した品質管理と安全管理を実践し、一つひとつの工事に責任を持って取り組んでいます。
                </motion.p>

                <motion.p variants={itemVariants}>
                  お客様とのご縁を大切にしながら、快適で安心できる住環境づくりを通じて、人と人とのつながりを広げ、地域社会に貢献してまいります。
                </motion.p>
              </motion.div>

            </motion.div>
          </motion.div>

          {/* TEAM PHOTO IMAGE LAYER */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[50%] relative z-20 flex justify-end mt-0 lg:-ml-[15%] lg:-mt-36 lg:-translate-y-6 self-start"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden p-0"
            >
              <motion.div className="w-full h-full overflow-hidden relative aspect-[4/3] lg:aspect-[1.4/1]">
                <motion.img
                  initial={{ scale: 1.05, filter: "blur(4px)" }}
                  animate={{ scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8 }}
                  src={aboutImage}
                  alt="Renowa Corporate Professional Engineering Group Portrait"
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                />
              </motion.div>
            </motion.div>
          </motion.div>

        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutUs;