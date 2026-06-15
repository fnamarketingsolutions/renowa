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
    <nav className="w-full bg-white relative z-50">
      {/* CENTRAL NAVIGATION WORKSPACE DESKTOP PANEL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logomark Identity Block */}
        <div 
          onClick={() => handleScrollToSection('top')}
          className="flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center">
            {/* Custom geometric twin arch overlay path simulation vector graphic */}
            <svg className="w-9 h-9 text-emerald-500" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 28V18C12 14.6863 14.6863 12 18 12H28V28" stroke="#A3E635" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M8 32V22C8 16.4772 12.4772 12 18 12H32V32" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-widest text-slate-700 leading-none">RENOWA</span>
          </div>
        </div>

        {/* DESKTOP MATRIX ACTION LINKS TRYS (Hidden below 1024px Grid Breakpoints) */}
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

          {/* Action Call Pipeline Buttons Block */}
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

        {/* HAMBURGER CONTROLLER FOR RESPONSIVE MEDIA SCREENS */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-slate-600 hover:bg-slate-50 focus:outline-none transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE EXPANDABLE UPPER DROPDOWN INTERFACE OVERLAY PANEL */}
      {isMenuOpen && (
        <div className="absolute top-20 inset-x-0 w-full bg-white border-t border-slate-100 shadow-xl lg:hidden z-50 animate-in slide-in-from-top duration-200">
          <div className="px-4 py-6 space-y-4 max-w-md mx-auto">
            {/* Link List Routing Matrix */}
            <div className="grid grid-cols-2 gap-3 pb-4 border-b border-slate-100">
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
                  className="flex flex-col items-start p-2.5 rounded-lg hover:bg-slate-50 text-left w-full cursor-pointer"
                >
                  <span className="text-[9px] text-slate-400 font-bold">{link.en}</span>
                  <span className="text-xs text-slate-800 font-bold mt-0.5">{link.jp}</span>
                </button>
              ))}
            </div>

            {/* Target Embedded Action Buttons Required in Mobile Expand Drawer */}
            <div className="flex flex-col gap-2.5 pt-1">
              <button 
                onClick={() => handleScrollToSection('contact')}
                className="w-full h-12 bg-[#22a4dd] text-white rounded-md text-xs font-bold flex items-center justify-center gap-2 active:bg-sky-600 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>メールで問い合わせる</span>
              </button>
              
              <a 
                href="tel:0000000000" 
                className="w-full h-12 bg-white text-slate-700 border border-slate-300 rounded-md text-xs font-bold flex items-center justify-center gap-2 active:bg-slate-50 transition-colors no-underline"
              >
                <Phone className="w-4 h-4 text-slate-400" />
                <span>電話で問い合わせる</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}