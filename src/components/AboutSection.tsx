import React from 'react';
import { AcademicCapIcon, BrainIcon, LayersIcon, MapPinIcon } from './Icons';

export const AboutSection: React.FC = () => {
  const interests = [
    { label: 'ARTIFICIAL INTELLIGENCE', color: 'bg-neo-secondary' },
    { label: 'MULTIMEDIA SYSTEMS', color: 'bg-neo-muted' },
    { label: 'RAPID PROTOTYPING', color: 'bg-white' },
    { label: 'CREATIVE TECHNOLOGY', color: 'bg-neo-accent text-white' },
    { label: 'PRACTICAL PROBLEM-SOLVING', color: 'bg-neo-secondary' },
    { label: 'ZERO TRUST ARCHITECTURE', color: 'bg-white' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-b-4 border-black bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-block border-2 border-black bg-neo-secondary px-2.5 py-0.5 text-xs font-black uppercase tracking-widest shadow-neo-sm mb-3">
              PROFILE & CONTEXT
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-black">
              ABOUT & EDUCATION
            </h2>
          </div>
          <p className="font-display font-bold text-sm uppercase tracking-wider text-black/70 max-w-sm">
            Student builder developing hands-on technical experience through hackathons and community leadership.
          </p>
        </div>

        {/* 2-Column Asymmetric Layout (avoiding 3-card layout crutch) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education & Academic Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Education Card */}
            <div className="border-4 border-black bg-white p-6 sm:p-8 shadow-neo neo-lift">
              <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 border-2 border-black bg-neo-secondary">
                    <AcademicCapIcon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-black/60 block">
                      DEGREE PROGRAM
                    </span>
                    <h3 className="font-display font-extrabold text-2xl uppercase tracking-tight text-black">
                      INTEGRATED MCA
                    </h3>
                  </div>
                </div>
                <span className="border-2 border-black bg-neo-accent text-white px-2.5 py-1 text-xs font-black uppercase shadow-neo-sm">
                  2025 → 2030
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-display font-extrabold text-lg uppercase text-black flex items-center gap-2">
                    <MapPinIcon className="w-5 h-5 text-neo-accent" />
                    St Joseph's College of Engineering and Technology (SJCET)
                  </h4>
                  <p className="text-sm font-bold text-black/70 mt-1 pl-7">
                    Palai, Kerala, India
                  </p>
                </div>

                <div className="border-2 border-black bg-[#FFFDF5] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/60 block">
                      CURRENT ACADEMIC STATUS
                    </span>
                    <span className="font-display font-black text-lg uppercase text-black">
                      2ND YEAR / 3RD SEMESTER
                    </span>
                  </div>
                  <span className="self-start sm:self-center border-2 border-black bg-neo-secondary px-2.5 py-1 text-xs font-extrabold uppercase">
                    ACTIVE CANDIDATE
                  </span>
                </div>

                <p className="font-body text-base font-bold text-black leading-relaxed pt-2">
                  Currently studying Integrated MCA at St Joseph's College of Engineering and Technology, Palai. I am interested in Artificial Intelligence and Multimedia, and I enjoy exploring ideas by building, experimenting, and learning through practical experiences.
                </p>
              </div>
            </div>

            {/* Interest Badges Box */}
            <div className="border-4 border-black bg-white p-6 shadow-neo-sm">
              <h4 className="font-display font-extrabold text-sm uppercase tracking-widest text-black mb-4 flex items-center gap-2">
                <BrainIcon className="w-5 h-5 text-neo-accent" />
                PRIMARY FOCUS & INTERESTS
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {interests.map((item, idx) => (
                  <span
                    key={idx}
                    className={`inline-block border-2 border-black px-3 py-1.5 font-display font-black text-xs uppercase tracking-wider shadow-neo-sm hover:-translate-y-0.5 transition-transform ${item.color}`}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: "Currently" Panel & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* "Currently" Panel */}
            <div className="border-4 border-black bg-neo-secondary p-6 shadow-neo">
              <div className="flex items-center justify-between border-b-3 border-black pb-3 mb-4">
                <h3 className="font-display font-extrabold text-lg uppercase tracking-wider text-black">
                  CURRENT DISPATCH
                </h3>
                <span className="w-3 h-3 bg-neo-accent border-2 border-black animate-pulse" />
              </div>

              <div className="space-y-3 font-body text-sm font-bold text-black">
                <div className="border-2 border-black bg-white p-3 shadow-neo-sm">
                  <span className="text-[10px] font-black uppercase text-black/60 block">ROLE</span>
                  <span>Head of PRAX invite-only community</span>
                </div>

                <div className="border-2 border-black bg-white p-3 shadow-neo-sm">
                  <span className="text-[10px] font-black uppercase text-black/60 block">PROJECT SPOTLIGHT</span>
                  <span>NeuroBots — Autonomous API authorization platform</span>
                </div>

                <div className="border-2 border-black bg-white p-3 shadow-neo-sm">
                  <span className="text-[10px] font-black uppercase text-black/60 block">RECENT HACKATHON</span>
                  <span>INCEPTA 2026 Gnosis AI Hackathon (CET Trivandrum)</span>
                </div>
              </div>
            </div>

            {/* Approach Card */}
            <div className="border-4 border-black bg-[#000000] text-white p-6 shadow-neo-sm">
              <div className="flex items-center gap-2 mb-3">
                <LayersIcon className="w-5 h-5 text-neo-secondary" />
                <h4 className="font-display font-extrabold text-sm uppercase tracking-widest text-neo-secondary">
                  LEARNING PHILOSOPHY
                </h4>
              </div>
              <p className="font-body text-sm font-bold leading-relaxed text-white/90">
                I do not pretend to be an industry veteran with decades of enterprise history. I am an enthusiastic student builder who learns in public by shipping code, testing ideas against real problem statements, participating in 24-hour sprints, and collaborating with motivated peers.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
