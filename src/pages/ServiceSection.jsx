import React from 'react';

export default function ServiceVoiceWorks() {
  const services = [
    { id: 1, title: 'エアコン取り外し/設置', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&q=80' },
    { id: 2, title: 'キッチン各種リフォーム/修理', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=400&q=80' },
    { id: 3, title: 'お風呂のリフォーム', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80' },
    { id: 4, title: 'トイレのリフォーム', img: 'https://images.unsplash.com/photo-1564540574859-0dfb63985953?auto=format&fit=crop&w=400&q=80' },
    { id: 5, title: 'エコキュート/給湯器工事', img: 'https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=400&q=80' },
    { id: 6, title: '外装（サイディング）工事', img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80' }
  ];

  const works = [
    {
      id: 1,
      title: '介護施設のカーテンレール取り替え工事',
      img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=500&q=80',
      borderColor: 'border-cyan-400'
    },
    {
      id: 2,
      title: '玄関ドアドアクローザー取り替え工事',
      img: 'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?auto=format&fit=crop&w=500&q=80',
      borderColor: 'border-amber-400'
    }
  ];

  return (
    <div id="service" className="w-full bg-[#fcfcfc] text-[#333333] font-sans antialiased">
      
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 max-w-4xl mx-auto">
          {services.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-gray-100">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-2 mt-3 text-left w-full px-1">
                <span className="w-2 h-2 rounded-full bg-[#a8d3cc] shrink-0" />
                <p className="text-sm font-medium tracking-wide text-gray-700">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs sm:text-sm text-gray-500 mt-12 tracking-wide">
          その他、住まいのお困りごとがあればお気軽にご相談ください！
        </p>
      </section>

      {/* ================= VOICE SECTION ================= */}
      <section className="w-full bg-[#e8f3f5] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="w-full max-w-5xl mx-auto mt-4">
  <svg viewBox="0 0 1000 130" className="w-full h-auto font-sans font-extrabold tracking-[0.22em]">
    <defs>
      <linearGradient id="voiceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
      stroke="url(#voiceGradient)"
      strokeWidth="1.2"
      className="text-[90px]"
    >
      VOICE
    </text>
  </svg>
</h2>          <p className="text-sm tracking-wider text-gray-500 mt-1 mb-10">お客様の声</p>

          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm flex flex-col md:flex-row gap-8 items-center text-left max-w-3xl mx-auto">
            <div className="w-48 sm:w-56 shrink-0 text-center">
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-200 mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80" 
                  alt="Client Profile" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <p className="text-xxs sm:text-xs text-gray-400 leading-tight">
                社会福祉法人 イースト・ロード福祉会<br />
                業務統括 / 志村 恭弘 様
              </p>
            </div>

            <div className="flex-1 text-sm leading-relaxed text-gray-600 space-y-4">
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
</h2>        <p className="text-sm tracking-wider text-gray-500 mt-1 mb-12">施工実績</p>

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