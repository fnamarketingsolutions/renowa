import React from 'react';
import managerImage from "../assets/homePage/manager-image.jpg"

const ManagerMessage = () => {
  return (
    <section id="manager-message" className="w-full text-[#333333] font-sans antialiased py-20 px-4 relative overflow-hidden select-none">
      
      {/* ================= DECORATIVE BACKGROUND MORE WAVY & LIGHT LINES ================= */}
      {/* Changed to make sure it tracks perfectly from absolute top to bottom on mobile */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
  <svg 
    className="w-full h-full" 
    viewBox="0 0 1440 900" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <defs>
      {/* Sky Blue to Light Green Gradient Definition */}
      <linearGradient id="wavyLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22a4dd" />
        <stop offset="100%" stopColor="#4ade80" />
      </linearGradient>
    </defs>

    {/* Top Wavy Line - Now using the Sky Blue to Light Green Gradient */}
    <path
      d="M1520,-40 C1250,150 900,150 700,550 C500,950 250,700 -80,910"
      stroke="url(#wavyLineGradient)"
      strokeWidth="2.5"
      opacity="0.3"
    />
    
    {/* Bottom Wavy Line - Now using the Sky Blue to Light Green Gradient */}
    <path
      d="M1520,-10 C1260,180 910,180 710,570 C510,970 260,720 -80,940"
      stroke="url(#wavyLineGradient)"
      strokeWidth="2.8"
      opacity="0.25"
    />
  </svg>
</div>

      {/* ================= CORE CONTENT LAYOUT MATRIX CONTAINER ================= */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 lg:gap-16 relative z-10">
        
        {/* Left Side Portrait Block */}
        <div className="w-full sm:w-80 md:w-[400px] shrink-0 aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-sm">
          <img 
            src={managerImage} 
            alt="Construction Management Specialist Portrait" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Right Side Corporate Copy Content */}
        <div className="flex-1 space-y-6 text-sm sm:text-base text-gray-600 leading-relaxed tracking-wide">
          
          {/* Accent Header Line */}
          <div className="flex items-center gap-3">
            <div className="w-1 h-7 bg-gradient-to-b from-lime-400 to-emerald-500 rounded-full" />
            <h3 className="text-xl sm:text-2xl font-medium tracking-wider text-gray-700">
              施工管理責任者メッセージ
            </h3>
          </div>

          <p className="pt-2">
            お客様にとってリフォームは、住まいをより快適にし、これからの暮らしを豊かにする大切な機会です。私たちは常にお客様の満足度を第一に考え、一人ひとりのご要望やお悩みに真摯に向き合いながら、最適なご提案を心掛けています。
          </p>

          <p>
            住まいに関するニーズはお客様ごとに異なります。そのため、しっかりとお話を伺い、それぞれのニーズに応える施工を実現することを大切にしています。また、工事中は安全管理を徹底し、細部まで妥協しない丁寧な作業を行うことで、高品質な仕上がりをお届けいたします。
          </p>

          <p>
            工事完了したときの「ありがとう」の言葉は、私たちにとって何よりの励みです。そして、「また仕事を任せたいと思える会社だった」と感じていただけるよう、施工後のアフターフォローまで責任を持って対応いたします。
          </p>
          
          <p className="font-medium text-gray-700 pt-2">
            株式会社リノワは、これからも地域の皆様に信頼されるパートナーとして、誠実な仕事を積み重ねてまいります。
          </p>

        </div>
      </div>
    </section>
  );
};

export default ManagerMessage;