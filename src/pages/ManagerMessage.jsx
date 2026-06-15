import React from 'react';

const ManagerMessage = () => {
  // Inline SVG background setup containing the wavy green/blue lines layout
  const backgroundWavyLines = `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <path d="M -100,700 C 300,600 400,950 1100,500" fill="none" stroke="%2394d2bd" stroke-width="1.5" opacity="0.6"/>
      <path d="M -100,720 C 280,630 420,930 1100,520" fill="none" stroke="%230a9396" stroke-width="1" opacity="0.4"/>
    </svg>
  `)}`;

  return (
    <section 
      className="w-full bg-white text-[#333333] font-sans antialiased py-16 px-4 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url('${backgroundWavyLines}')`, backgroundPosition: 'center bottom' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 lg:gap-16">
        
        {/* Left Side Portrait Block */}
        <div className="w-full sm:w-80 md:w-[400px] shrink-0 aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-sm bg-gray-100">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" 
            alt="Construction Management Specialist Portrait" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Right Side Corporate Copy Content */}
        <div className="flex-1 space-y-6 text-sm sm:text-base text-gray-600 leading-relaxed tracking-wide">
          
          {/* Accent Header Line */}
          <div className="flex items-center gap-3">
            <div className="w-1 h-7 bg-gradient-to-b from-lime-400 to-emerald-500 rounded-full" />
            <h3 className="text-xl sm:text-2xl font-medium tracking-wider text-gray-700">
              施工管理責任者メッセージ
            </h3>
          </div>

          <p className="pt-2">
            お客様にとってリフォームは、住まいをより快適にし、これからの暮らしを豊かにする大切な機会です。私たちは常にお客様の満足度を第一に考え、一人ひとりのご要望やお悩みに真摯に向き合いながら、最適なご提案を心掛けています。
          </p>

          <p>
            住まいに関するニーズはお客様ごとに異なります。そのため、しっかりとお話を伺い、それぞれのニーズに応える施工を実現することを大切にしています。また、工事中は安全管理を徹底し、細部まで妥協しない丁寧な作業を行うことで、高品質な仕上がりをお届けいたします。
          </p>

          <p>
            工事が完了したときの「ありがとう」の言葉は、私たちにとって何よりの励みです。そして、「また仕事を任せたいと思える会社だった」と感じていただけるよう、施工後のアフターフォローまで責任を持って対応いたします。
          </p>
          
          <p className="font-medium text-gray-700 pt-2">
            株式会社リノワは、これからも地域の皆様に信頼されるパートナーとして、誠実な仕事を積み重ねてまいります。
          </p>

        </div>
      </div>
    </section>
  );
};

export default ManagerMessage;