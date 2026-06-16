import React from 'react';

export default function CTA() {
  return (
    <section id="contact" className="w-full bg-[#f6fcfb] py-20 px-4 flex justify-center items-center font-sans antialiased">
      
      {/* ================= CONTAINER MATRIX: Max-width expanded to match 80% on desktop layout matrices ================= */}
      <div className="w-full max-w-[92%] lg:max-w-[80%] relative h-auto">
        
        {/* ================= REUSABLE VECTOR MASK DEFINITION ================= */}
        <svg className="absolute w-0 h-0" width="0" height="0">
          <defs>
            <clipPath id="smoothHouseMask" clipPathUnits="objectBoundingBox">
              <path d="
                M 0.5, 0 
                L 1, 0.28 
                C 0.94, 0.5, 0.94, 0.7, 1, 1 
                L 0, 1 
                C 0.06, 0.7, 0.06, 0.5, 0, 0.28 
                Z" 
              />
            </clipPath>
          </defs>
        </svg>

        {/* ================= OUTER GRADIENT BORDER CONTAINER ================= */}
        <div 
          className="w-full bg-gradient-to-br from-cyan-200 via-emerald-100 to-amber-200 p-[2px]"
          style={{ clipPath: 'url(#smoothHouseMask)' }}
        >
          {/* ================= INNER CONTENT PANEL: Height optimized via streamlined vertical padding adjustments ================= */}
          <div 
            className="w-full bg-white px-6 pt-16 pb-12 sm:px-12 sm:pt-24 sm:pb-16 text-center flex flex-col items-center"
            style={{ clipPath: 'url(#smoothHouseMask)' }}
          >
            {/* Bold CONTACT Text with thin gradient border outline and white inner fill */}
            <h2 className="w-full max-w-5xl mx-auto mt-2">
              <svg viewBox="0 0 1100 140" className="w-full h-auto font-sans font-black tracking-[0.24em]">
                <defs>
                  <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22a4dd" />
                    <stop offset="50%" stopColor="#4ade80" />
                    <stop offset="100%" stopColor="#A3E635" />
                  </linearGradient>
                </defs>
                
                <text
                  x="50%"
                  y="62%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#ffffff"
                  stroke="url(#contactGradient)"
                  strokeWidth="1.1"
                  className="text-[105px]"
                >
                  CONTACT
                </text>
              </svg>
            </h2>

            <p className="renowa-font text-xl font-bold tracking-widest mt-1">お問い合わせ</p>

            <p className="text-xs sm:text-sm text-gray-500 tracking-wide mt-6 mb-8 max-w-md leading-relaxed">
              ご依頼・ご相談はこちらからお気軽にお問い合わせください。
            </p>

            {/* Interactive Call-To-Action Channels */}
            <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center relative z-10">
              
              {/* Email Gateway */}
              <a 
                href="mailto:info@example.com"
                className="w-full sm:w-64 h-14 rounded-md bg-[#50b5e3] hover:bg-[#43a1cb] transition-colors flex items-center justify-center gap-3 text-white shadow-sm cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="text-sm font-medium tracking-wide">メールで問い合わせる</span>
              </a>

              {/* Telephone Gateway */}
              <a 
                href="tel:0355554881"
                className="w-full sm:w-64 h-14 rounded-md border border-gray-300 bg-white hover:bg-gray-50 transition-colors flex items-center justify-center gap-3 text-gray-600 shadow-sm cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current text-gray-400" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span className="text-sm font-medium tracking-wide">電話で問い合わせる</span>
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}