import React from 'react';
import { CommunityIcon } from './Icons';

export const PraxSection: React.FC = () => {
  const workflowSteps = [
    { step: '01', title: 'LEARN', color: 'bg-white' },
    { step: '02', title: 'BUILD', color: 'bg-neo-secondary' },
    { step: '03', title: 'COLLABORATE', color: 'bg-neo-accent text-white' },
    { step: '04', title: 'DOCUMENT', color: 'bg-neo-muted' },
  ];

  return (
    <section id="prax" className="py-20 md:py-28 border-b-4 border-black bg-neo-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Poster Header Card */}
        <div className="border-4 border-black bg-[#000000] text-white p-6 sm:p-10 md:p-12 shadow-neo-lg">

          {/* Top Row */}
          <div className="flex flex-wrap items-center gap-2 mb-6 pb-4 border-b-2 border-white/20">
            <CommunityIcon className="w-6 h-6 text-neo-secondary" />
            <span className="font-display font-extrabold text-sm uppercase tracking-widest text-neo-secondary">
              INVITE-ONLY PROFESSIONAL COMMUNITY
            </span>
          </div>

          {/* Big heading + badge + description */}
          <div className="space-y-4 max-w-3xl">
            <h2 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-white">
              PRAX
            </h2>
            <div className="inline-block border-3 border-black bg-neo-secondary text-black px-4 py-1.5 shadow-neo-sm -rotate-1">
              <span className="font-display font-black text-base sm:text-lg uppercase tracking-wider">
                HEAD OF PRAX: MELWIN SANTHOSH
              </span>
            </div>
            <p className="font-body text-base sm:text-lg font-bold text-white/90 leading-relaxed pt-2">
              An invite-only professional community dedicated to growing through hands-on work rather than passive learning. PRAX values practical experience, continuous learning, collaboration, real-world exposure, building and experimentation, and thorough documentation. The community follows a non-hierarchical model where mentors and guides are also continuous learners; while experience allows members to guide others, learning and building remain ongoing for everyone involved.
            </p>

            {/* Values as a compact line */}
            <p className="font-mono text-xs text-white/50 pt-2">
              practical experience, continuous learning, collaboration, real-world exposure, building & experimentation, documentation
            </p>
          </div>

          {/* Workflow Sequence Strip */}
          <div className="mt-10 pt-6 border-t-2 border-white/20">
            <span className="text-xs font-extrabold uppercase tracking-widest text-neo-secondary block mb-3">
              THE CORE ITERATION CYCLE
            </span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {workflowSteps.map((item, idx) => (
                <div
                  key={idx}
                  className={`border-3 border-black ${item.color} p-3 shadow-neo-sm flex items-center justify-between`}
                >
                  <span className="font-display font-black text-sm uppercase">
                    {item.title}
                  </span>
                  <span className="font-mono text-xs font-black opacity-60">
                    {item.step}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
