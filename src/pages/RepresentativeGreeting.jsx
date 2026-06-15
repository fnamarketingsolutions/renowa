import React from 'react';
import representativeGreetingImage1 from "../assets/homePage/mask-group1.png";
import representativeGreetingImage2 from "../assets/homePage/mask-group2.png";
import representativeGreetingImage3 from "../assets/homePage/mask-group3.png";
import representativeGreetingImage4 from "../assets/homePage/mask-group4.png";

const RepresentativeGreeting = () => {
  return (
    <section 
      id="representative-greeting" 
      className="w-full bg-[#fcfcfc] text-[#333333] font-sans antialiased py-12 px-4 lg:px-0 relative overflow-hidden select-none"
    >
      <div className="w-full max-w-2xl lg:max-w-7xl mx-auto relative lg:min-h-[700px] flex flex-col items-center">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center z-30 mb-12 lg:mb-8 mt-2">
          <h2 className="text-2xl font-medium tracking-[0.3em] text-[#444444]">代表挨拶</h2>
          <div className="w-20 h-[2px] mx-auto mt-3 bg-gradient-to-r from-[#22a4dd] via-[#4ade80] to-[#A3E635]" />
        </div>

        {/* ================= MOBILE & TABLET LAYOUT (Alternating Rows) ================= */}
        {/* This section only renders on Mobile/Tablet and strictly follows your layout request */}
        <div className="w-full flex flex-col gap-12 lg:hidden mt-4">
          
          {/* Line 1: Image Left, Text Right */}
          <div className="flex flex-row items-center gap-4 sm:gap-6 w-full">
            <div className="w-[40%] aspect-[4/3] rounded-xl overflow-hidden shadow-sm bg-gray-50 shrink-0">
              <img src={representativeGreetingImage1} alt="Kitchen Inspection" className="w-full h-full object-cover" />
            </div>
            <div className="w-[60%] text-xs sm:text-sm leading-relaxed text-[#4a4a4a] font-serif tracking-wide">
              <p>弊社は、住まいに関する工事を単なる「施工」ではなく、お客様の暮らしをより良くするための大切な「仕事」だと考えています。だからこそ、一件一件のご依頼に真摯に向き合い、お客様との信頼関係を何より大切にしてまいりました。</p>
            </div>
          </div>

          {/* Line 2: Text Left, Image Right */}
          <div className="flex flex-row items-center gap-4 sm:gap-6 w-full">
            <div className="w-[60%] text-xs sm:text-sm leading-relaxed text-[#4a4a4a] font-serif tracking-wide">
              <p>お客様への施工を通じて、住まいを整えるだけでなく、人と人とのつながりや地域とのご縁を広げていきたい。それが私たちの願いです。</p>
            </div>
            <div className="w-[40%] aspect-[4/3] rounded-xl overflow-hidden shadow-sm bg-gray-50 shrink-0">
              <img src={representativeGreetingImage2} alt="Bathroom Renovation" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Line 3: Image Left, Text Right */}
          <div className="flex flex-row items-center gap-4 sm:gap-6 w-full">
            <div className="w-[40%] aspect-[4/3] rounded-xl overflow-hidden shadow-sm bg-gray-50 shrink-0">
              <img src={representativeGreetingImage3} alt="Sink Installation" className="w-full h-full object-cover" />
            </div>
            <div className="w-[60%] text-xs sm:text-sm leading-relaxed text-[#4a4a4a] font-serif tracking-wide">
              <p>これからも誠実な仕事を積み重ね、お客様から選ばれ続ける会社を日々目指してまいります。</p>
            </div>
          </div>

          {/* Line 4: Signature details Left, Image Right */}
          <div className="flex flex-row items-center gap-4 sm:gap-6 w-full pt-4 border-t border-dashed border-gray-200">
            <div className="w-[60%] flex flex-col justify-center items-start gap-1 font-serif pl-2">
              <span className="text-[10px] sm:text-xs text-gray-400 tracking-[0.2em]">代表取締役</span>
              <span className="text-lg font-medium tracking-[0.25em] text-[#333333]">長田知也</span>
            </div>
            <div className="w-[40%] aspect-[4/3] rounded-xl overflow-hidden shadow-sm bg-gray-50 shrink-0">
              <img src={representativeGreetingImage4} alt="Reviewing Plans" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>

        {/* ================= DESKTOP VIEW ONLY (1024px and Up) ================= */}
        {/* Beautiful traditional Japanese vertical reading system with corner overlapping images */}
        <div className="hidden lg:block w-full h-full absolute inset-0 pointer-events-none">
          {/* Top Left Floating Image */}
          <div className="absolute top-0 left-0 w-60 aspect-[4/3] overflow-hidden opacity-90 mix-blend-multiply">
            <img src={representativeGreetingImage1} alt="Kitchen Inspection" className="w-full h-full object-cover filter contrast-95 brightness-105" />
          </div>

          {/* Top Right Floating Image */}
          <div className="absolute top-0 right-0 w-60 aspect-[4/3] overflow-hidden opacity-90 mix-blend-multiply">
            <img src={representativeGreetingImage2} alt="Bathroom Renovation" className="w-full h-full object-cover filter contrast-95 brightness-105" />
          </div>

          {/* Bottom Left Floating Image */}
          <div className="absolute bottom-0 left-[12%] w-64 aspect-[4/3] overflow-hidden mix-blend-multiply">
            <img src={representativeGreetingImage3} alt="Sink Installation" className="w-full h-full object-cover filter contrast-95 brightness-105" />
          </div>

          {/* Bottom Right Floating Image */}
          <div className="absolute bottom-4 right-[8%] w-68 aspect-[4/3] overflow-hidden mix-blend-multiply">
            <img src={representativeGreetingImage4} alt="Reviewing Plans" className="w-full h-full object-cover filter contrast-95 brightness-105" />
          </div>
        </div>

        {/* Vertical Text Grid for Desktop */}
        <div 
          className="hidden lg:flex z-10 h-[360px] justify-between max-w-xl mx-auto mt-2 px-4"
          style={{
            writingMode: 'vertical-rl',
            WebkitWritingMode: 'vertical-rl',
            msWritingMode: 'tb-rl'
          }}
        >
          <div className="text-[15px] leading-[2.7] text-[#4a4a4a] tracking-[0.15em] font-serif pl-16">
            <p className="mb-0">
              弊社は、住まいに関する工事を単なる「施工」ではなく、お客様の暮らしをより良くするための大切な「仕事」だと考えています。だからこそ、一件一件のご依頼に真摯に向き合い、お客様との信頼関係を何より大切にしてまいりました。
            </p>
            <p className="mt-0">
              お客様への施工を通じて、住まいを整えるだけでなく、人と人とのつながりや地域とのご縁を広げていきたい。それが私たちの願いです。
            </p>
            <p className="mt-0">
              これからも誠実な仕事を積み重ね、お客様から選ばれ続ける会社を日々目指してまいります。
            </p>
          </div>

          <div className="flex flex-col justify-end items-start h-full pb-2 pr-2 font-serif">
            <span className="text-[11px] text-gray-400 tracking-[0.2em] mb-4">代表取締役</span>
            <span className="text-lg font-medium tracking-[0.25em] text-[#333333]">長田知也</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RepresentativeGreeting;