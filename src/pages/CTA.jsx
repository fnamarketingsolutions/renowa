import React from 'react';

const CTA = () => {
  return (
    <section id="contact" className="w-full bg-[#f4f7f6] py-16 px-4 flex justify-center items-center font-sans antialiased">
      <div className="w-full max-w-4xl relative">
        
        {/* House-shaped Gradient Border Outer Layer */}
        <div 
          className="w-full bg-gradient-to-r from-[#94d2bd] via-[#e9d8a6] to-[#ee9b00] p-[2px]"
          style={{
            clipPath: 'polygon(50% 0%, 100% 28%, 100% 100%, 0% 100%, 0% 28%)'
          }}
        >
          {/* Inner Content Card */}
          <div 
            className="w-full bg-white px-6 pt-24 pb-16 sm:px-12 sm:pt-28 sm:pb-20 text-center flex flex-col items-center"
            style={{
              clipPath: 'polygon(50% 0%, 100% 28%, 100% 100%, 0% 100%, 0% 28%)'
            }}
          >
            {/* Heading with Gradient Text Color */}
            <h2 className="text-4xl sm:text-5xl font-light tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#92cfc6] to-[#e4d18b] translate-x-[0.1em]">
              CONTACT
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 tracking-widest mt-1">お問い合わせ</p>

            <p className="text-xs sm:text-sm text-gray-500 tracking-wider mt-8 mb-10 max-w-md leading-relaxed">
              ご依頼・ご相談はこちらからお気軽にお問い合わせください。
            </p>

            {/* CTA Buttons Layout */}
            <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              
              {/* Email Button */}
              <a 
                href="mailto:contact@renowa.inc"
                className="w-full sm:w-64 h-14 rounded bg-[#50b5e3] hover:bg-[#419ec7] transition-colors flex items-center justify-center gap-3 text-white shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="text-sm font-medium tracking-wide">メールで問い合わせる</span>
              </a>

              {/* Telephone Button */}
              <a 
                href="tel:0355554881"
                className="w-full sm:w-64 h-14 rounded border border-gray-300 bg-white hover:bg-gray-50 transition-colors flex items-center justify-center gap-3 text-gray-500 shadow-sm"
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
};

export default CTA;