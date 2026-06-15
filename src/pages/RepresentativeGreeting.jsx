import React from 'react';

const RepresentativeGreeting = () => {
  return (
    <section className="w-full bg-[#fcfcfc] text-[#333333] font-sans antialiased py-12 px-0 relative overflow-hidden select-none">
      {/* Outer container remains wide to hold the absolute side layout items */}
      <div className="w-full mx-auto relative min-h-[700px] flex flex-col items-center">
        
        {/* ================= BACKGROUND / CORNER FLOATING IMAGES ================= */}
        
        {/* Top Left Image - Shifted to absolute left edge of the screen */}
        <div className="absolute top-0 left-0 w-36 sm:w-48 lg:w-60 aspect-[4/3] overflow-hidden opacity-90 pointer-events-none mix-blend-multiply">
          <img 
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&q=80" 
            alt="Kitchen Inspection" 
            className="w-full h-full object-cover filter contrast-95 brightness-105" 
          />
        </div>

        {/* Top Right Image - Shifted to absolute right edge of the screen */}
        <div className="absolute top-0 right-0 w-36 sm:w-48 lg:w-60 aspect-[4/3] overflow-hidden opacity-90 pointer-events-none mix-blend-multiply">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80" 
            alt="Bathroom Renovation" 
            className="w-full h-full object-cover filter contrast-95 brightness-105" 
          />
        </div>

        {/* Bottom Left Image */}
        <div className="absolute bottom-0 left-[4%] sm:left-[8%] lg:left-[12%] w-44 sm:w-56 lg:w-64 aspect-[4/3] overflow-hidden z-10 mix-blend-multiply">
          <img 
            src="https://images.unsplash.com/photo-1564540574859-0dfb63985953?auto=format&fit=crop&w=500&q=80" 
            alt="Sink Installation" 
            className="w-full h-full object-cover filter contrast-95 brightness-105" 
          />
        </div>

        {/* Bottom Right Image with Floating Badge Component */}
        <div className="absolute bottom-4 right-[2%] sm:right-[5%] lg:right-[8%] w-48 sm:w-60 lg:w-68 aspect-[4/3] overflow-hidden z-10 mix-blend-multiply">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80" 
            alt="Reviewing Plans" 
            className="w-full h-full object-cover filter contrast-95 brightness-105" 
          />
          {/* Badge Anchor Layer */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#e65c00] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md border-2 border-white">
            Y
          </div>
        </div>

        {/* ================= MAIN CONTENT BLOCK ================= */}
        
        {/* Centered Heading */}
        <div className="text-center z-10 mb-8 mt-2">
          <h2 className="text-2xl font-medium tracking-[0.3em] text-[#444444]">代表挨拶</h2>
          <div className="w-20 h-[2px] mx-auto mt-3 bg-gradient-to-r from-[#22a4dd] via-[#4ade80] to-[#A3E635]" />
        </div>

        {/* True Vertical Text Layout Block - Shifted Upwards to occupy the area between the top images */}
        <div 
          className="z-10 flex h-[360px] justify-between max-w-xl mx-auto mt-2 px-4"
          style={{
            writingMode: 'vertical-rl',
            WebkitWritingMode: 'vertical-rl',
            msWritingMode: 'tb-rl'
          }}
        >
          {/* Main Statement Text Block */}
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

          {/* Author Signature Block Left Side Alignment */}
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