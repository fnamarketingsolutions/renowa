import React, { useState } from 'react';
import { Mail, Phone, Menu, X } from 'lucide-react';
// IMPORT BOTH OF YOUR LOGOS HERE
import desktopLogo from '../assets/homePage/renowa-logo1.png';
import mobileLogo from '../assets/homePage/renowa-logo.png'; // Path to your mobile logo

export default function Navbar() {
  // Mobile Dropdown Animation Expansion Menu State Tracker
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { en: "TOP", jp: "トップ" },
    { en: "ABOUT US", jp: "私たち" },
    { en: "SERVICE", jp: "サービス例" },
    { en: "WORKS", jp: "施工実績" },
    { en: "COMPANY", jp: "会社概要" }
  ];

  // Smooth scroll handler targeting matching lowercase IDs
  const handleScrollToSection = (sectionId) => {
    // Standardize IDs (e.g., 'ABOUT US' -> 'about us', 'TOP' -> 'top')
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Automatically close the mobile layout drawer after click
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white z-50">
      {/* CENTRAL NAVIGATION WORKSPACE DESKTOP PANEL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logomark Identity Block */}
        <div 
          onClick={() => handleScrollToSection('top')}
          className="flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center">
            {/* DESKTOP LOGO: Visible only from 1024px (lg) and up */}
            <img 
              src={desktopLogo} 
              alt="Renowa Corporate Desktop Logo" 
              className="w-30 h-18 hidden lg:block select-none" 
            />

            {/* MOBILE LOGO: Enforced with exact height and width variables matching your setup */}
            <img 
              src={mobileLogo} 
              alt="Renowa Corporate Mobile Logo" 
              className="h-8 w-35 block lg:hidden select-none object-contain" 
            />
          </div>
        
        </div>

        {/* DESKTOP LINKS (Hidden below 1024px) */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center text-center">
            {navLinks.map((link, idx) => (
              <React.Fragment key={idx}>
                <button 
                  onClick={() => handleScrollToSection(link.en)}
                  className="group flex flex-col items-center justify-center min-w-[85px] px-5 focus:outline-none cursor-pointer"
                >
                  {/* English sub-label */}
                  <span className="text-lg text-gray-600 tracking-tight transform scale-90 group-hover:text-black transition-colors">
                    {link.en}
                  </span>
                  {/* Main label set to text-gray-500 with a text-sm sizing profile */}
                  <span className="text-sm text-gray-400 font-bold mt-0.5 group-hover:text-black transition-colors">
                    {link.jp}
                  </span>
                </button>

                {/* Vertical Divider Line System: Updated to solid black background */}
                {idx !== navLinks.length - 1 && (
                  <div className="h-10 w-[0.1px] bg-black self-center opacity-80" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center gap-3 pl-2">
            <button 
              onClick={() => handleScrollToSection('contact')}
              className="h-11 bg-[#22a4dd] text-white px-5 rounded-sm text-xs font-bold flex items-center gap-2 hover:bg-sky-600 transition-colors shadow-xs cursor-pointer"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span>メールで問い合わせる</span>
            </button>
            
            <a 
              href="tel:0000000000" 
              className="h-11 bg-white text-slate-600 border border-slate-300 px-5 rounded-sm text-xs font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-xs no-underline"
            >
              <Phone className="w-4 h-4 text-slate-400 shrink-0" />
              <span>電話で問い合わせる</span>
            </a>
          </div>
        </div>

        {/* HAMBURGER TRIGGER CONTROLLER */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-slate-500 hover:bg-slate-50 focus:outline-none transition-colors z-50 relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              /* Thin Close X Layout built using CSS transitions */
              <div className="w-6 h-6 relative flex items-center justify-center">
                <span className="absolute w-6 h-[1.5px] bg-current rotate-45 rounded-sm" />
                <span className="absolute w-6 h-[1.5px] bg-current -rotate-45 rounded-sm" />
              </div>
            ) : (
              /* Thin Hamburger Menu Lines Layout built using spacing */
              <div className="w-6 h-4 relative flex flex-col justify-between items-center">
                <span className="w-6 h-[1.5px] bg-current rounded-sm" />
                <span className="w-6 h-[1.5px] bg-current rounded-sm" />
                <span className="w-6 h-[1.5px] bg-current rounded-sm" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE FULL-SCREEN EXPAND OVERLAY ================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 w-full h-screen bg-white/95 backdrop-blur-md lg:hidden z-40 flex flex-col items-center justify-between pt-6 pb-8 px-4 animate-in fade-in duration-150">
          
          {/* Top Logo Watermark Row */}
          <div className="w-full flex justify-start pl-2">
            <div className="flex items-center gap-1.5 opacity-30 origin-left">
              <img 
                src={mobileLogo} 
                alt="Watermark Logo" 
                className="h-8 w-35 object-contain select-none"
              />
            </div>
          </div>

          {/* Core Central Identity Header */}
          <div className="flex flex-col items-center my-1 animate-in zoom-in-95 duration-200">
            <img 
              src={mobileLogo} 
              alt="Renowa Central Brand Mark" 
              className="h-8 w-35 object-contain mb-2 select-none"
            />
          </div>

          {/* Full-Width Navigation Link Matrix */}
          <div className="w-full max-w-sm flex flex-col items-center justify-center flex-1 my-2">
            {navLinks.map((link, idx) => (
              <button 
                key={idx} 
                onClick={() => handleScrollToSection(link.en)}
                className="w-full py-3 sm:py-4 flex flex-col items-center justify-center text-center cursor-pointer border-b border-slate-200/70 last:border-0 active:bg-slate-100/40 transition-colors"
              >
                <span className="text-md text-slate-600 font-semibold tracking-widest uppercase">{link.en}</span>
                <span className="text-md text-slate-400 font-semibold tracking-wider mt-0.5">{link.jp}</span>
              </button>
            ))}
          </div>

          {/* Fixed Screen-Bottom Contact CTA Actions Block */}
          <div className="w-full max-w-sm flex flex-col gap-2.5 px-1 mt-auto">
            {/* Email Action Bar */}
            <button 
              onClick={() => handleScrollToSection('contact')}
              className="w-full h-13 bg-[#2da6de] text-white rounded-md text-sm font-bold flex items-center justify-center gap-3 active:scale-[0.99] transition-all shadow-xs cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span className="tracking-wide">メールで問い合わせる</span>
            </button>
            
            {/* Phone Action Bar */}
            <a 
              href="tel:0000000000" 
              className="w-full h-13 bg-white text-slate-600 border border-slate-300 rounded-md text-sm font-bold flex items-center justify-center gap-3 active:scale-[0.99] transition-all shadow-xs no-underline"
            >
              <Phone className="w-4 h-4 text-slate-400" />
              <span className="tracking-wide">電話で問い合わせる</span>
            </a>
          </div>

        </div>
      )}
    </nav>
  );
}