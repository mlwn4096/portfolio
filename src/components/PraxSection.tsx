import React from 'react';
import { CommunityIcon, StarGeometricIcon } from './Icons';

export const PraxSection: React.FC = () => {
  const corePillars = [
    { title: 'PRACTICAL EXPERIENCE', desc: 'Prioritizing hands-on engineering and tangible execution over passive coursework.' },
    { title: 'CONTINUOUS LEARNING', desc: 'Mentors and members learn together in an active, non-hierarchical learning loop.' },
    { title: 'COLLABORATION & FEEDBACK', desc: 'Rigorous peer reviews, collaborative hacking, and actionable feedback cycles.' },
    { title: 'REAL-WORLD EXPOSURE', desc: 'Engaging directly with industry workflows, open problems, and technical challenges.' },
    { title: 'BUILDING & EXPERIMENTATION', desc: 'Creating prototypes, testing hypotheses, and exploring modern toolchains.' },
    { title: 'DOCUMENTATION & OPPORTUNITY', desc: 'Writing clear docs, capturing insights, and unlocking technical opportunities.' },
  ];

  const workflowSteps = [
    { step: '01', title: 'LEARN', color: 'bg-white' },
    { step: '02', title: 'BUILD', color: 'bg-neo-secondary' },
    { step: '03', title: 'COLLABORATE', color: 'bg-neo-accent text-white' },
    { step: '04', title: 'DOCUMENT', color: 'bg-neo-muted' },
  ];

  return (
    <section id="prax" className="py-16 md:py-24 border-b-4 border-black bg-neo-bg bg-graph-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Poster Header Card */}
        <div className="relative border-4 border-black bg-[#000000] text-white p-6 sm:p-10 md:p-12 shadow-neo-lg mb-12">
          
          {/* Top Row Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b-2 border-white/20 pb-4">
            <div className="flex items-center gap-2">
              <CommunityIcon className="w-6 h-6 text-neo-secondary" />
              <span className="font-display font-extrabold text-sm uppercase tracking-widest text-neo-secondary">
                INVITE-ONLY PROFESSIONAL COMMUNITY
              </span>
            </div>
            <span className="border-2 border-black bg-neo-accent text-white px-3 py-1 font-display font-black text-xs uppercase tracking-wider shadow-neo-sm rotate-2">
              LEADERSHIP SPOTLIGHT
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-baseline gap-4">
                <h2 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-white">
                  PRAX
                </h2>
              </div>
              <div className="inline-block border-3 border-black bg-neo-secondary text-black px-4 py-1.5 shadow-neo-sm -rotate-1">
                <span className="font-display font-black text-base sm:text-lg uppercase tracking-wider">
                  HEAD OF PRAX: MELWIN SANTHOSH
                </span>
              </div>
              <p className="font-body text-base sm:text-lg font-bold text-white/90 leading-relaxed max-w-2xl pt-2">
                An invite-only professional community dedicated to practical experience, continuous learning, collaboration, real-world exposure, building, experimentation, documentation, feedback, and opportunities.
              </p>
            </div>

            {/* Right Poster Callout */}
            <div className="lg:col-span-4 border-3 border-black bg-white text-black p-5 shadow-neo rotate-1">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-neo-accent mb-2">
                <StarGeometricIcon className="w-4 h-4 fill-neo-accent" />
                <span>COMMUNITY CULTURE</span>
              </div>
              <h3 className="font-display font-extrabold text-lg uppercase tracking-tight mb-2">
                NON-HIERARCHICAL LEARNING
              </h3>
              <p className="font-body text-xs font-bold leading-relaxed text-black/80">
                PRAX does not follow a rigid traditional teacher or student hierarchy. Mentors and guides are also continuous learners. While experience allows members to guide others, learning and building remain ongoing for everyone involved.
              </p>
            </div>

          </div>

          {/* Workflow Sequence Strip: LEARN → BUILD → COLLABORATE → DOCUMENT */}
          <div className="mt-8 pt-6 border-t-2 border-white/20">
            <span className="text-xs font-extrabold uppercase tracking-widest text-neo-secondary block mb-3">
              THE CORE ITERATION CYCLE
            </span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {workflowSteps.map((item, idx) => (
                <div
                  key={idx}
                  className={`border-3 border-black ${item.color} p-3 shadow-neo-sm flex items-center justify-between neo-press`}
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

        {/* Community Pillars Grid (2x3 format, avoiding 3-feature row cliches) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {corePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="border-4 border-black bg-white p-6 shadow-neo neo-lift flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 border-b-2 border-black/10 pb-2">
                  <span className="font-display font-black text-xs uppercase tracking-widest text-neo-accent">
                    PILLAR #{idx + 1}
                  </span>
                  <span className="w-2 h-2 bg-black rotate-45 inline-block" />
                </div>
                <h4 className="font-display font-extrabold text-xl uppercase tracking-tight text-black mb-2">
                  {pillar.title}
                </h4>
                <p className="font-body text-sm font-bold text-black/75 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Melwin's Leadership Role Summary */}
        <div className="mt-8 border-4 border-black bg-neo-muted p-6 shadow-neo flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-display font-black text-xs uppercase tracking-widest text-black">
              LEADERSHIP INITIATIVE
            </span>
            <h4 className="font-display font-extrabold text-xl uppercase text-black">
              Helping Shape Direction, Culture, and Initiatives
            </h4>
            <p className="font-body text-sm font-bold text-black/80 max-w-3xl">
              As Head of PRAX, Melwin is directly involved in helping lead the community, shaping its collaborative ethos, organizing technical sessions, and fostering an environment where practical building is the primary driver of skill growth.
            </p>
          </div>
          <span className="border-3 border-black bg-black text-white font-display font-black text-xs uppercase px-4 py-2 shadow-neo-sm shrink-0">
            HEAD OF PRAX
          </span>
        </div>

      </div>
    </section>
  );
};
