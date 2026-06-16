import React from 'react';
import companyImage from "../assets/homePage/company-image.jpg";

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
    <div id="company" className="w-full bg-[#fcfcfc] font-sans antialiased">
      
      {/* Hero Header Area - Height significantly increased further */}
      <div className="w-full h-[400px] sm:h-[500px] lg:h-[550px] relative flex flex-col items-center justify-center overflow-hidden">
        {/* Native Image Tag with Blend Overlay */}
        <img 
          src={companyImage} 
          alt="Company Profile Office Background" 
          className="absolute inset-0 w-full h-full object-cover-contain object-center z-0 pointer-events-none select-none"
        />
        {/* Semi-transparent white screen layer overlay */}
        <div className="absolute inset-0 z-10" />

        {/* Content Elements on Top of Image Overlay */}
        <div className="relative z-20 w-full text-center">
          {/* Enhanced Bold Company Header Graphic with Thin Outline */}
          <h2 className="w-full max-w-6xl mx-auto mt-4">
            <svg viewBox="0 0 1100 140" className="w-full h-auto font-sans font-black tracking-[0.24em]">
              <defs>
                <linearGradient id="companyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
                stroke="url(#companyGradient)"
                strokeWidth="1.1"
                className="text-[105px]"
              >
                COMPANY
              </text>
            </svg>
          </h2>
          <p className="text-sm tracking-wider text-gray-600 mb-6 font-medium">会社概要</p>
        </div>
      </div>

      {/* Profile Card Container (Adjusted negative margin to match taller height) */}
      <div className="max-w-4xl mx-auto px-4 pb-16 -mt-24 sm:-mt-32 relative z-30">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-10 lg:p-14">
          {/* Main List Shell with renowa-font Typography Mapping */}
          <div className="renowa-font">
            {details.map((item, index) => (
              <div 
                key={index} 
                className={`py-5 sm:py-6 flex flex-col sm:flex-row items-start text-sm ${
                  index !== details.length - 1 ? 'border-b border-dashed border-black/80' : ''
                }`}
              >
                <span className="w-full sm:w-1/4 font-medium text-gray-500 tracking-wide mb-1.5 sm:mb-0 shrink-0">
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