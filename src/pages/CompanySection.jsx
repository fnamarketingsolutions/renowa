import React from 'react';

const CompanySection = () => {
  const details = [
    { label: '会社名', value: '株式会社リノワ (RENOWA, Inc.)' },
    { label: '設立年月日', value: '2019年4月1日 (2020年6月1日業務及び社名変更)' },
    { label: '所在地', value: '〒101-0047 東京都千代田区内神田1-15-2 神田オーシャンビル' },
    { label: '主な対応エリア', value: '大阪を中心とした京都府・奈良県・兵庫県\n(その他、ご要望に応じて全国各地対応可)' },
    { label: 'TEL', value: '03-5555-4881' },
    { 
      label: '所属資格', 
      value: '第二種電気工事士\n給水装置工事主任技術者\nガス機器設置スペシャリスト\n小型車両系建設機械（整地・運搬・積込み用及び掘削用）運転特別教育' 
    },
  ];

  return (
    <div className="w-full bg-[#fcfcfc] font-sans antialiased">
      {/* Hero Header Area */}
      <div 
        className="w-full h-64 sm:h-80 bg-cover bg-center relative flex flex-col items-center justify-center"
        style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80')` }}
      >
        <h2 className="text-3xl font-light tracking-widest text-[#7fbba2] bg-white/40 px-6 py-2 rounded-md backdrop-blur-xs">COMPANY</h2>
        <p className="text-xs sm:text-sm tracking-wider text-gray-600 mt-1">会社概要</p>
      </div>

      {/* Profile Card Container (Overlaps the image block above) */}
      <div className="max-w-4xl mx-auto px-4 pb-16 -mt-12 sm:-mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-10 lg:p-14">
          <div className="divide-y divide-gray-100">
            {details.map((item, index) => (
              <div key={index} className="py-4 sm:py-6 flex flex-col sm:flex-row items-start text-sm">
                <span className="w-full sm:w-1/4 font-medium text-gray-500 tracking-wide mb-1 sm:mb-0 shrink-0">
                  {item.label}
                </span>
                <span className="w-full sm:w-3/4 text-gray-700 whitespace-pre-line leading-relaxed tracking-wide">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySection;