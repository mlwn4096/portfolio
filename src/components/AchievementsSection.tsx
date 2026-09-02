import React from 'react';
import { TrophyIcon, StarGeometricIcon, CommunityIcon, ShieldLockIcon } from './Icons';

export const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      title: 'BEST TEAM AWARD',
      subtitle: 'INSENDIUM 10.0 • SJCET-IEDC',
      description: 'Awarded Best Team for overall performance across innovation, strategic problem-solving, and team execution among collegiate squads.',
      icon: <TrophyIcon className="w-8 h-8 text-black" />,
      tag: 'COLLEGIATE AWARD',
      badgeBg: 'bg-neo-secondary',
      tilt: '-rotate-1',
    },
    {
      title: 'HEAD OF PRAX',
      subtitle: 'LEADERSHIP & COMMUNITY DIRECTION',
      description: 'Appointed Head of PRAX, an invite-only professional community focused on continuous hands-on learning, real-world exposure, and experimentation.',
      icon: <CommunityIcon className="w-8 h-8 text-black" />,
      tag: 'COMMUNITY LEADERSHIP',
      badgeBg: 'bg-neo-muted',
      tilt: 'rotate-1',
    },
    {
      title: 'FIRST 24H NATIONAL HACKATHON',
      subtitle: 'HASHITUP 2025 • TEAM INTERCEPTORS',
      description: 'Completed a high-intensity 24-hour national hackathon sprint at MBCET Kuttikkanam, mastering rapid technical ideation and prototype delivery under deadlines.',
      icon: <StarGeometricIcon className="w-8 h-8 text-black fill-black" />,
      tag: 'NATIONAL COMPETITION',
      badgeBg: 'bg-neo-accent text-white',
      tilt: 'rotate-1',
    },
    {
      title: 'GNOSIS AI HACKATHON',
      subtitle: 'INCEPTA 2026 • CET TRIVANDRUM',
      description: 'Competed in the dedicated AI-based hackathon at College of Engineering Trivandrum, focusing on AI workflows, team problem solving, and rapid technical delivery.',
      icon: <ShieldLockIcon className="w-8 h-8 text-black" />,
      tag: 'AI COMPETITION',
      badgeBg: 'bg-white',
      tilt: '-rotate-1',
    },
  ];

  return (
    <section className="py-16 md:py-24 border-b-4 border-black bg-white bg-graph-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-block border-2 border-black bg-neo-accent text-white px-2.5 py-0.5 text-xs font-black uppercase tracking-widest shadow-neo-sm mb-3">
              VERIFIED HIGHLIGHTS
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-black">
              ACHIEVEMENTS & HONORS
            </h2>
          </div>
          <p className="font-display font-bold text-sm uppercase tracking-wider text-black/70 max-w-sm">
            Milestones earned through competition, teamwork, and technical leadership.
          </p>
        </div>

        {/* 2x2 Distinctive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className={`border-4 border-black bg-[#FFFDF5] p-6 sm:p-8 shadow-neo neo-lift ${item.tilt}`}
            >
              <div className="flex items-start justify-between gap-4 mb-4 border-b-3 border-black/15 pb-4">
                <div className="p-3 border-3 border-black bg-white shadow-neo-sm">
                  {item.icon}
                </div>
                <span className={`border-2 border-black px-2.5 py-1 text-xs font-black uppercase shadow-neo-sm ${item.badgeBg}`}>
                  {item.tag}
                </span>
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-wider text-black/60 block mb-1">
                {item.subtitle}
              </span>
              <h3 className="font-display font-black text-2xl uppercase tracking-tight text-black mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sm font-bold text-black/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
