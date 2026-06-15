import React from 'react';

export default function Footer() {
  const navLinks = [
    { en: 'TOP', ja: 'トップ', href: '#top' },
    { en: 'ABOUT US', ja: '私たち', href: '#about' },
    { en: 'SERVICE', ja: 'サービス例', href: '#service' },
    { en: 'WORKS', ja: '施工実績', href: '#works' },
    { en: 'COMPANY', ja: '会社概要', href: '#company' }
  ];

  return (
    <footer className="w-full bg-[#dbe9f4] py-10 px-6 font-sans antialiased text-gray-600">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand Identity / Logo */}
        <div className="flex flex-col items-center md:items-start select-none">
          <div className="flex items-center gap-2">
            {/* Clean SVG rendition of the interlocking home & circle logo */}
            <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none">
              <path d="M8 24V14L18 6L28 14V24H8Z" stroke="#50b5e3" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="26" cy="22" r="8" stroke="#a2d683" strokeWidth="2" />
            </svg>
            <span className="text-2xl font-light tracking-[0.22em] text-[#555555] translate-y-[1px]">
              RENOWA
            </span>
          </div>
        </div>

        {/* Navigation Grid System */}
        <nav className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4 sm:gap-x-0">
          {navLinks.map((link, idx) => (
            <React.Fragment key={idx}>
              <a 
                href={link.href} 
                className="group flex flex-col items-center px-4 sm:px-6 hover:text-gray-900 transition-colors"
              >
                <span className="text-xxs tracking-widest text-gray-400 font-semibold scale-90 group-hover:text-gray-600">
                  {link.en}
                </span>
                <span className="text-xs tracking-wider font-medium mt-0.5">
                  {link.ja}
                </span>
              </a>
              
              {/* Clean Pipe Divider Separators */}
              {idx !== navLinks.length - 1 && (
                <div className="hidden sm:block h-7 w-[1px] bg-gray-300 self-center" />
              )}
            </React.Fragment>
          ))}
        </nav>

      </div>
    </footer>
  );
}