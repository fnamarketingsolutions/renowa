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
      <div className="w-full max-w-2xl lg:max-w-7xl mx-auto relative lg:min-h-[750px] flex flex-col items-center">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center z-30 mb-12 lg:mb-8 mt-2">
          <h2 className="text-2xl font-medium tracking-[0.3em] text-[#444444]">代表挨拶</h2>
          <div className="w-20 h-[2px] mx-auto mt-3 bg-gradient-to-r from-[#22a4dd] via-[#4ade80] to-[#A3E635]" />
        </div>

        {/* ================= MOBILE & TABLET LAYOUT (Requested Alternating Flow with Vertical Text) ================= */}
        <div className="w-full flex flex-col gap-12 lg:hidden mt-4">
          
          {/* Row 1: Left Image, Right Vertical Text (Exactly 8 Lines) */}
          <div className="flex flex-row items-center justify-between gap-4 w-full h-[320px]">
            {/* Left side Image */}
            <div className="w-[40%] aspect-[4/3] rounded-xl overflow-hidden shadow-sm bg-gray-50 shrink-0">
              <img src={representativeGreetingImage1} alt="Kitchen Inspection" className="w-full h-full object-cover" />
            </div>
            {/* Right side Vertical Text */}
            <div 
              className="w-[55%] h-full text-[14px] leading-[2.2] text-[#4a4a4a] font-serif tracking-[0.1em]"
              style={{ writingMode: 'vertical-rl', WebkitWritingMode: 'vertical-rl' }}
            >
              <span className="renowa-font block">弊社は、住まいに関する工事を</span>
              <span className="renowa-font block">単なる「施工」ではなく、</span>
              <span className="renowa-font block">お客様の暮らしをより良くするための</span>
              <span className="renowa-font block">大切な「仕事」と考えています。</span>
              <span className="renowa-font block">だからこそ、一件一件のご依頼に</span>
              <span className="renowa-font block">真摯に向き合い、</span>
              <span className="renowa-font block">お客様との信頼関係を</span>
              <span className="renowa-font block">何より大切にしてまいりました。</span>
            </div>
          </div>

          {/* Row 2: Right Image, Left Vertical Text (Exactly 5 Lines) */}
          <div className="flex flex-row-reverse items-center justify-between gap-4 w-full h-[240px]">
            {/* Right side Image */}
            <div className="w-[40%] aspect-[4/3] rounded-xl overflow-hidden shadow-sm bg-gray-50 shrink-0">
              <img src={representativeGreetingImage2} alt="Bathroom Renovation" className="w-full h-full object-cover" />
            </div>
            {/* Left side Vertical Text */}
            <div 
              className="w-[55%] h-full text-[14px] leading-[2.2] text-[#4a4a4a] font-serif tracking-[0.1em]"
              style={{ writingMode: 'vertical-rl', WebkitWritingMode: 'vertical-rl' }}
            >
              <span className="renowa-font block">お客様への施工を通じて、</span>
              <span className="renowa-font block">住まいを整えるだけでなく、</span>
              <span className="renowa-font block">人と人とのつながりや</span>
              <span className="renowa-font block">地域とのご縁を広げていきたい。</span>
              <span className="renowa-font block">それが私たちの願いです。</span>
            </div>
          </div>

          {/* Row 3: Left Image, Right Vertical Text & Signature Block */}
          <div className="flex flex-row items-center justify-between gap-4 w-full h-[320px]">
            {/* Left side Image */}
            <div className="w-[40%] aspect-[4/3] rounded-xl overflow-hidden shadow-sm bg-gray-50 shrink-0">
              <img src={representativeGreetingImage3} alt="Sink Installation" className="w-full h-full object-cover" />
            </div>
            {/* Right side Vertical Content and Signature */}
            <div 
              className="w-[55%] h-full flex flex-row items-stretch text-[14px] leading-[2.2] text-[#4a4a4a] font-serif tracking-[0.1em]"
              style={{ writingMode: 'vertical-rl', WebkitWritingMode: 'vertical-rl' }}
            >
              {/* Text Paragraph */}
              <div>
                <span className="renowa-font block">これからも誠実な仕事を積み重ね、</span>
                <span className="renowa-font block">お客様から選ばれ続ける会社を</span>
                <span className="renowa-font block">日々目指してまいります。</span>
                <span className="renowa-font block mt-20">代表取 締役 長田知也</span>
              </div>

              {/* Signature Block matching layout columns perfectly */}
             
            </div>
          </div>

        </div>

        {/* ================= DESKTOP VIEW ONLY (1024px and Up) ================= */}
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

        {/* Vertical Text Grid for Desktop - AS PROVIDED IN REPLACEMENT SPEC */}
        <div 
          className="hidden lg:flex z-10 h-[500px] max-w-4xl mx-auto mt-4 px-4 justify-center items-start"
          style={{
            writingMode: 'vertical-rl',
            WebkitWritingMode: 'vertical-rl',
            msWritingMode: 'tb-rl'
          }}
        >
          {/* Main Body Text Container */}
          <div className="renowa-font text-[18px] leading-[2] text-[#4a4a4a] tracking-[0.15em] font-serif">
            
            {/* Block 1: Exactly 3 Lines with padding config */}
            <div className="mb-8 py-7">
              <span className="block">弊社は、住まいに関する工事を</span>
              <span className="block">単なる「施工」ではなく、</span>
              <span className="block">お客様の暮らしをより良くするための</span>
              <span className="block">大切な「仕事」と考えています。</span>
              <span className="block">だからこそ、一件一件のご依頼に</span>
              <span className="block">真摯に向き合い、</span>
              <span className="block">お客様との信頼関係を</span>
              <span className="block">何より大切にしてまいりました。</span>
            </div>
            
            {/* Block 2: Exactly 5 Lines with padding config */}
            <div className="mb-8 py-7">
              <span className="block">お客様への施工を通じて、</span>
              <span className="block">住まいを整えるだけでなく、</span>
              <span className="block">人と人とのつながりや</span>
              <span className="block">地域とのご縁を広げていきたい。</span>
              <span className="block">それが私たちの願いです。</span>
            </div>
            
            {/* Block 3: Final Paragraph Lines */}
            <div className="py-7">
              <span className="block">これからも誠実な仕事を積み重ね、</span>
              <span className="block">お客様から選ばれ続ける会社を</span>
              <span className="block">日々目指してまいります。</span>
            </div>

            {/* Left Column Signature - Kept intact from your layout, protected position */}
            <p className="mt-40 ml-4 border-r border-transparent">
              代表取締役 長田知也
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RepresentativeGreeting;