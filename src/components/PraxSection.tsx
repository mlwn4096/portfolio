import React from 'react';
import { CommunityIcon } from './Icons';

export const PraxSection: React.FC = () => {

  const modules = [
    'Member Progression Systems',
    'Project & Challenge Tracks',
    'Mentorship Frameworks',
    'Experience Documentation',
    'Opportunity Pipelines',
  ];

  return (
    <section id="prax" className="py-20 md:py-28 border-b-4 border-black bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Poster Header Card with bold ink border & shadow */}
        <div className="border-4 sm:border-8 border-black bg-[#000000] text-white p-6 sm:p-10 md:p-14 shadow-neo-xl relative overflow-hidden">

          {/* Top Row: Initiative Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b-4 border-white/20">
            <div className="flex items-center gap-2.5">
              <CommunityIcon className="w-7 h-7 text-neo-secondary" />
              <span className="font-black text-xs sm:text-sm uppercase tracking-widest text-neo-secondary">
                VANTCREST LABS PVT. LTD. • PROFESSIONAL INITIATIVE
              </span>
            </div>
            <span className="border-2 border-white bg-white/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-white">
              2026 – PRESENT
            </span>
          </div>

          {/* Big heading + badge + description */}
          <div className="space-y-6 max-w-4xl">
            <h2 className="font-black text-7xl sm:text-8xl md:text-9xl uppercase tracking-tighter text-white leading-none">
              PRAX
            </h2>

            <div className="inline-block border-4 border-black bg-neo-secondary text-black px-4 py-2 shadow-neo-sm -rotate-1 hover:rotate-0 transition-transform">
              <span className="font-black text-sm sm:text-base uppercase tracking-wider">
                PLATFORM CONTRIBUTOR: MELWIN SANTHOSH
              </span>
            </div>

            <p className="text-base sm:text-lg font-bold text-white/95 leading-relaxed">
              An invite-only professional community dedicated to growing through hands-on work rather than passive learning. PRAX values practical experience, continuous learning, collaboration, real-world exposure, building and experimentation, and thorough documentation. The community follows a non-hierarchical model where mentors and guides are also continuous learners; while experience allows members to guide others, learning and building remain ongoing for everyone involved.
            </p>

            {/* Platform Modules Grid */}
            <div className="pt-2">
              <span className="text-[11px] font-black uppercase tracking-widest text-neo-secondary block mb-3">
                CONTRIBUTED PLATFORM ARCHITECTURE & MODULES
              </span>
              <div className="flex flex-wrap gap-2">
                {modules.map((mod, idx) => (
                  <span
                    key={idx}
                    className="border-2 border-white/40 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors"
                  >
                    {mod}
                  </span>
                ))}
              </div>
            </div>
          </div>


        </div>

      </div>
    </section>
  );
};
