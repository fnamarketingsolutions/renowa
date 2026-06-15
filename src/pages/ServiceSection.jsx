import React from 'react';
import serviceImage1 from "../assets/homePage/service1.jpg";
import serviceImage2 from "../assets/homePage/service2.jpg";
import serviceImage3 from "../assets/homePage/service3.jpg";
import serviceImage4 from "../assets/homePage/service4.jpg";
import serviceImage5 from "../assets/homePage/service5.jpg";
import serviceImage6 from "../assets/homePage/service6.jpg";
import voiceImage from "../assets/homePage/voice-image.jpg";

import worksImage1 from "../assets/homePage/work1.jpg";
import worksImage2 from "../assets/homePage/work2.jpg";

export default function ServiceVoiceWorks() {
  const services = [
    { id: 1, title: 'エアコン取り外し/設置', img: serviceImage1 },
    { id: 2, title: 'キッチン各種リフォーム/修理', img: serviceImage2 },
    { id: 3, title: 'お風呂のリフォーム', img: serviceImage3 },
    { id: 4, title: 'トイレのリフォーム', img: serviceImage4 },
    { id: 5, title: 'エコキュート/給湯器工事', img: serviceImage5 },
    { id: 6, title: '外装（サイディング）工事', img: serviceImage6 }
  ];

  const works = [
    {
      id: 1,
      title: '介護施設のカーテンレール取り替え工事',
      img: worksImage1,
      borderColor: 'border-cyan-400'
    },
    {
      id: 2,
      title: '玄関ドアドアクローザー取り替え工事',
      img: worksImage2,
      borderColor: 'border-amber-400'
    }
  ];

  return (
    <div id="service" className="w-full text-[#333333] font-sans antialiased">
      
      {/* ================= SERVICE SECTION ================= */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="w-full max-w-5xl mx-auto mt-4">
          <svg viewBox="0 0 1000 130" className="w-full h-auto font-sans font-extrabold tracking-[0.22em]">
            <defs>
              <linearGradient id="serviceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22a4dd" />
                <stop offset="50%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#A3E635" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="65%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="none"
              stroke="url(#serviceGradient)"
              strokeWidth="1.2"
              className="text-[90px]"
            >
              SERVICE
            </text>
          </svg>
        </h2> 
        <p className="text-sm tracking-wider text-gray-500 mt-1 mb-12">サービス例</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 max-w-4xl mx-auto">
          {services.map((item) => (
            <div key={item.id} className="flex flex-col-reverse justify-end w-full">
              {/* Image Container sits below in DOM but maps visual stack via column-reverse layout order */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-gray-100 mt-3">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              
              {/* Title Header: Shows clean and direct at the top side of every item image card */}
              <div className="flex items-center gap-2 text-left w-full px-1">
                <span className="w-2 h-2 rounded-full bg-[#a8d3cc] shrink-0" />
                <p className="text-sm font-semibold tracking-wide text-gray-700">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-xs sm:text-sm text-gray-500 mt-12 tracking-wide">
          その他、住まいのお困りごとがあればお気軽にご相談ください！
        </p>
      </section>

      {/* ================= VOICE SECTION ================= */}
      <section className="w-full bg-[#e0f2fe]/50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          
          <h2 className="w-full max-w-6xl mx-auto mt-4">
            <svg viewBox="0 0 1100 140" className="w-full h-auto font-sans font-black tracking-[0.24em]">
              <defs>
                <linearGradient id="voiceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
                fill="none"
                stroke="url(#voiceGradient)"
                strokeWidth="1.1"
                className="text-[105px]"
              >
                VOICE
              </text>
            </svg>
          </h2>
          
          <p className="text-sm tracking-wider text-gray-500 mt-2 mb-10">お客様の声</p>

          {/* Card Frame: Width scale handles full responsive translation safely */}
          <div className="w-full md:w-[85%] lg:w-[70%] bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm flex flex-col md:flex-row gap-8 lg:gap-12 items-center md:items-start text-left mx-auto">
            
            {/* Left Column Profile Block - Significantly enhanced size framework for clear visibility */}
            <div className="w-full max-w-[280px] sm:max-w-[320px] md:w-64 lg:w-72 shrink-0 text-center flex flex-col items-center">
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-200 mb-4 shadow-sm">
                <img 
                  src={voiceImage} 
                  alt="Client Profile" 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              <p className="text-xs sm:text-sm md:text-xs text-gray-500 font-medium leading-relaxed tracking-wide">
                社会福祉法人 イースト・ロード福祉会<br />
                <span className="text-gray-700 font-semibold block mt-1">業務統括 / 志村 恭弘 様</span>
              </p>
            </div>

            {/* Right Column Core Text */}
            <div className="flex-1 text-sm sm:text-base md:text-sm lg:text-base leading-relaxed text-gray-600 space-y-4 pt-2">
              <p>
                リノワさんには、蛇口の付け替えのような軽微なことから施設全体の給湯器の入れ替えまで、幅広い工事をお願いしています。
              </p>
              <p>
                小さな仕事でも誠実に向き合ってくれるところや、何か困ったことがあれば必ず解決方法を提示してくれるので、弊施設にはなくてはならない存在です。
              </p>
              <p>
                これからも、良きパートナーとしてお付き合いしていきたいです。
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WORKS SECTION ================= */}
      <section id="works" className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="w-full max-w-5xl mx-auto mt-4">
          <svg viewBox="0 0 1000 130" className="w-full h-auto font-sans font-extrabold tracking-[0.22em]">
            <defs>
              <linearGradient id="worksGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22a4dd" />
                <stop offset="50%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#A3E635" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="65%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="none"
              stroke="url(#worksGradient)"
              strokeWidth="1.2"
              className="text-[90px]"
            >
              WORKS
            </text>
          </svg>
        </h2>
        <p className="text-sm tracking-wider text-gray-500 mt-1 mb-12">施工実績</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-3xl mx-auto">
          {works.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-gray-100">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="w-32 mt-4 border-b-2 border-dashed border-gray-200" />
              <p className="text-xs sm:text-sm font-medium tracking-wide text-gray-700 mt-3 max-w-[240px] leading-relaxed">
                {item.title}
              </p>
              <div className={`w-16 border-b-2 ${item.borderColor} mt-2`} />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}