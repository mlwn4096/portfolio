import React from 'react';
import { AcademicCapIcon, MapPinIcon } from './Icons';

export const AboutSection: React.FC = () => {
  const interests = [
    'Artificial Intelligence',
    'Multimedia Systems',
    'Rapid Prototyping',
    'Creative Technology',
    'Practical Problem-Solving',
    'Zero Trust Architecture',
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b-4 border-black bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading with decorative label */}
        <div className="mb-14">
          <div className="inline-block border-3 border-black bg-neo-muted px-3 py-1 text-xs font-black uppercase tracking-widest text-black shadow-neo-sm -rotate-1 mb-4">
            DOSSIER & BIO
          </div>
          <h2 className="font-black text-6xl sm:text-7xl md:text-8xl uppercase tracking-tighter text-black">
            ABOUT
          </h2>
        </div>

        {/* 2-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Left Column: Education & Bio (7 cols) */}
          <div className="lg:col-span-7 space-y-8">

            {/* Education & Overview Card */}
            <div className="border-4 border-black bg-white p-6 sm:p-8 shadow-neo-lg space-y-5">
              <div className="flex items-center gap-3 text-black">
                <AcademicCapIcon className="w-5 h-5 text-neo-accent" />
                <MapPinIcon className="w-5 h-5 text-black" />
                <span className="text-xs font-black uppercase tracking-wider">Palai, Kerala, India</span>
              </div>

              <p className="text-lg sm:text-xl font-black text-black leading-snug">
                Integrated MCA student (2025–2030) at <span className="bg-neo-secondary px-1 border-b-3 border-black">St Joseph's College of Engineering and Technology (SJCET)</span>, Palai.
              </p>

              <p className="text-sm sm:text-base font-bold text-black/85 leading-relaxed">
                Exploring Artificial Intelligence, software development, web systems, and multimedia technologies. Passionate about learning through practical, verifiable engineering projects, active hackathons, and community-driven collaboration.
              </p>

              {/* Education Breakdown Grid */}
              <div className="pt-4 border-t-3 border-black grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="border-3 border-black bg-[#FFFDF5] p-3 shadow-neo-sm">
                  <span className="text-[10px] font-black uppercase text-black/60 block">2025–2030</span>
                  <span className="font-black text-xs uppercase block text-black">Integrated MCA</span>
                  <span className="text-[11px] font-bold text-black/75 block">SJCET Palai</span>
                </div>
                <div className="border-3 border-black bg-[#FFFDF5] p-3 shadow-neo-sm">
                  <span className="text-[10px] font-black uppercase text-black/60 block">2025</span>
                  <span className="font-black text-xs uppercase block text-black">Class XII (CBSE)</span>
                  <span className="text-[11px] font-bold text-black/75 block">SKPS Kaduthuruthy</span>
                </div>
                <div className="border-3 border-black bg-[#FFFDF5] p-3 shadow-neo-sm">
                  <span className="text-[10px] font-black uppercase text-black/60 block">2023</span>
                  <span className="font-black text-xs uppercase block text-black">Class X (CBSE)</span>
                  <span className="text-[11px] font-bold text-black/75 block">SKPS Kaduthuruthy</span>
                </div>
              </div>
            </div>

            {/* Interest tags - physical sticker buttons */}
            <div>
              <h3 className="font-black text-xs uppercase tracking-widest text-black/70 mb-3">
                FOCUS AREAS & DOMAINS
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {interests.map((item, idx) => (
                  <span
                    key={idx}
                    className="border-3 border-black bg-white px-3.5 py-1.5 font-black text-xs uppercase tracking-wider text-black shadow-neo-sm hover:bg-neo-secondary hover:-translate-y-0.5 transition-all neo-press cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Learning philosophy - standalone high-contrast quote card */}
            <div className="border-4 border-black bg-black text-white p-6 sm:p-8 shadow-neo-lg">
              <span className="text-[10px] font-black uppercase tracking-widest text-neo-secondary block mb-2">
                BUILDER ETHOS
              </span>
              <p className="text-base sm:text-lg font-bold leading-relaxed text-white/95">
                "I do not pretend to be an industry veteran with decades of enterprise history. I am an enthusiastic student builder who learns in public by shipping code, testing ideas against real problem statements, participating in 24-hour sprints, and collaborating with motivated peers."
              </p>
            </div>

          </div>

          {/* Right Column: Current Dispatch (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-4 border-black bg-neo-secondary p-6 sm:p-8 shadow-neo-lg">
              <h3 className="font-black text-lg uppercase tracking-wider text-black mb-6 pb-3 border-b-4 border-black flex items-center justify-between">
                CURRENT DISPATCH
                <span className="w-3.5 h-3.5 bg-neo-accent border-2 border-black animate-pulse" />
              </h3>

              <div className="space-y-5 text-black">
                <div className="border-3 border-black bg-white p-4 shadow-neo-sm">
                  <span className="font-black text-[10px] uppercase tracking-widest text-black/60 block">ROLE & INITIATIVE</span>
                  <p className="font-black text-sm uppercase text-black mt-0.5">Platform Contributor @ PRAX</p>
                  <p className="text-xs font-bold text-black/75 mt-0.5">Vantcrest Labs Pvt. Ltd. (2026–Present)</p>
                </div>

                <div className="border-3 border-black bg-white p-4 shadow-neo-sm">
                  <span className="font-black text-[10px] uppercase tracking-widest text-black/60 block">FEATURED SYSTEM</span>
                  <p className="font-black text-sm uppercase text-black mt-0.5">NeuroBots API Defense</p>
                  <p className="text-xs font-bold text-black/75 mt-0.5">Zero Trust BOLA/BFLA authorization platform</p>
                </div>

                <div className="border-3 border-black bg-white p-4 shadow-neo-sm">
                  <span className="font-black text-[10px] uppercase tracking-widest text-black/60 block">RECENT HACKATHON</span>
                  <p className="font-black text-sm uppercase text-black mt-0.5">INCEPTA 2026: Gnosis AI</p>
                  <p className="text-xs font-bold text-black/75 mt-0.5">CET Trivandrum (5 Feb 2026)</p>
                </div>
              </div>
            </div>

            {/* Fast Resume Action Card */}
            <div className="border-4 border-black bg-neo-accent text-white p-6 shadow-neo-lg space-y-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-black/80 block">OFFICIAL CREDENTIALS</span>
              <h4 className="font-black text-xl uppercase tracking-tight leading-none text-white">
                ATS-COMPLIANT CV PORTAL
              </h4>
              <p className="text-xs font-bold text-white/90 leading-relaxed">
                Direct PDF download containing verified academic records, hackathons, skills, and references.
              </p>
              <a
                href="/Melwin_Santhosh_CV.pdf"
                download="Melwin_Santhosh_CV.pdf"
                className="inline-flex items-center justify-center w-full py-3 border-3 border-black bg-white text-black font-black text-xs uppercase tracking-wider shadow-neo-sm hover:bg-neo-secondary transition-all neo-press"
              >
                DOWNLOAD MELWIN_SANTHOSH_CV.PDF
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
