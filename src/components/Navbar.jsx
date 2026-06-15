import React, { useState } from 'react';
import { Mail, Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  // Mobile Dropdown Animation Expansion Menu State Tracker
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <svg className="w-9 h-9 text-emerald-500" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 28V18C12 14.6863 14.6863 12 18 12H28V28" stroke="#A3E635" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M8 32V22C8 16.4772 12.4772 12 18 12H32V32" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-widest text-slate-700 leading-none">RENOWA</span>
          </div>
        </div>

        {/* DESKTOP LINKS (Hidden below 1024px) */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6 text-center">
            {[
              { en: "TOP", jp: "トップ" },
              { en: "ABOUT US", jp: "私たち" },
              { en: "SERVICE", jp: "サービス例" },
              { en: "WORKS", jp: "施工実績" },
              { en: "COMPANY", jp: "会社概要" }
            ].map((link, idx) => (
              <button 
                key={idx} 
                onClick={() => handleScrollToSection(link.en)}
                className="group flex flex-col items-center justify-center min-w-[70px] focus:outline-none cursor-pointer"
              >
                <span className="text-[10px] text-slate-400 font-bold tracking-tight transform scale-90 group-hover:text-sky-500 transition-colors">{link.en}</span>
                <span className="text-xs text-slate-700 font-bold tracking-wider mt-0.5 group-hover:text-sky-500 transition-colors">{link.jp}</span>
              </button>
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
            className="p-2 rounded-md text-slate-600 hover:bg-slate-50 focus:outline-none transition-colors z-50 relative"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-slate-500" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE FULL-SCREEN EXPAND OVERLAY ================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 w-full h-screen bg-white/95 backdrop-blur-md lg:hidden z-40 flex flex-col items-center justify-between pt-6 pb-8 px-4 animate-in fade-in duration-150">
          
          {/* Top Logo Watermark Row */}
          <div className="w-full flex justify-start pl-2">
            <div className="flex items-center gap-1.5 opacity-30 scale-90 origin-left">
              <svg className="w-5 h-5" viewBox="0 0 40 40" fill="none">
                <path d="M12 28V18C12 14.6863 14.6863 12 18 12H28V28" stroke="#A3E635" strokeWidth="2.5"/>
                <path d="M8 32V22C8 16.4772 12.4772 12 18 12H32V32" stroke="#0284C7" strokeWidth="2.5"/>
              </svg>
              <span className="text-xs font-bold tracking-widest text-slate-700">RENOWA</span>
            </div>
          </div>

          {/* Core Central Identity Header - Compact Spacing */}
          <div className="flex flex-col items-center my-1 animate-in zoom-in-95 duration-200">
            <svg className="w-14 h-14 text-emerald-500 mb-1" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 28V18C12 14.6863 14.6863 12 18 12H28V28" stroke="#A3E635" strokeWidth="3" strokeLinecap="round"/>
              <path d="M8 32V22C8 16.4772 12.4772 12 18 12H32V32" stroke="#0284C7" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <span className="text-xl font-bold tracking-[0.2em] text-slate-600 pl-1">RENOWA</span>
          </div>

          {/* Full-Width Navigation Link Matrix (Spans completely with tight borders) */}
          <div className="w-full max-w-sm flex flex-col items-center justify-center flex-1 my-2">
            {[
              { en: "TOP", jp: "トップ" },
              { en: "ABOUT US", jp: "私たち" },
              { en: "SERVICE", jp: "サービス例" },
              { en: "WORKS", jp: "施工実績" },
              { en: "COMPANY", jp: "会社概要" }
            ].map((link, idx) => (
              <button 
                key={idx} 
                onClick={() => handleScrollToSection(link.en)}
                className="w-full py-3 sm:py-4 flex flex-col items-center justify-center text-center cursor-pointer border-b border-slate-200/70 last:border-0 active:bg-slate-100/40 transition-colors"
              >
                <span className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">{link.en}</span>
                <span className="text-[16px] text-slate-700 font-semibold tracking-wider mt-0.5">{link.jp}</span>
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