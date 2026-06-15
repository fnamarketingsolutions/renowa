import React from 'react';
import { motion } from 'framer-motion';

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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full py-12 sm:py-16 md:py-24 overflow-hidden relative z-10 select-none bg-slate-50/30"
    >
      {/* DECORATIVE LINING BACKGROUND LAYER */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-full min-w-[1200px]" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Top Blue Wave Line */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M-50,80 C300,120 450,400 700,500 C950,600 1100,750 1500,780"
            stroke="#22a4dd"
            strokeWidth="1.5"
          />
          {/* Bottom Lime-Green Wave Line */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            d="M-50,95 C310,135 440,415 690,510 C940,605 1110,760 1500,795"
            stroke="#A3E635"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* CORE CONTENT LAYOUT MATRIX CONTAINER */}
      <motion.div
        layout
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start relative z-10"
      >

        {/* LEFT/BOTTOM CARD: THE CENTRALIZED TEXT CONTENT CARD CONTAINER */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}

          className="w-full lg:w-[65%] order-2 lg:order-1 relative z-10 mt-6 lg:mt-32"
        >
          <motion.div className="bg-white p-6 sm:p-10 lg:p-12 rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-slate-100">

            {/* Heading Typography Area */}
            <motion.div className="mb-6 sm:mb-8">
            <motion.h2 
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.3 }}
  className="w-full max-w-4xl mx-auto"
>
  <svg viewBox="0 0 800 120" className="w-full h-auto font-sans font-black tracking-[0.15em]">
    <defs>
      <linearGradient id="outlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#22a4dd" />
        <stop offset="50%" stopColor="#4ade80" />
        <stop offset="100%" stopColor="#A3E635" />
      </linearGradient>
    </defs>
    
    <text
      x="0"
      y="65%"
      textAnchor="start"
      dominantBaseline="middle"
      fill="none"
      stroke="url(#outlineGradient)"
      strokeWidth="1.2"
      className="text-[75px]"
    >
      ABOUT US
    </text>
  </svg>
</motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="text-sm sm:text-base font-bold text-slate-700 tracking-wider mt-3 pl-1"
              >
                私たちについて
              </motion.p>
            </motion.div>

            {/* Authentic Japanese Narrative Descriptions */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-5 text-sm sm:text-[14px] text-slate-500 leading-relaxed font-normal tracking-wide pl-1"
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

        {/* RIGHT/TOP LAYER: TEAM PHOTO IMAGE OVERLAPPING THE TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[50%] order-1 lg:order-2 relative z-20 flex justify-end lg:-ml-[15%] lg:-mt-32 self-start"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden p-0"
          >
            <motion.div className="w-full h-full overflow-hidden relative aspect-[4/3] lg:aspect-[1.4/1]">
              <motion.img
                initial={{ scale: 1.05, filter: "blur(4px)" }}
                animate={{ scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8 }}
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=85"
                alt="Renowa Corporate Professional Engineering Group Portrait"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutUs;