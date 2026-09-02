import React from 'react';
import { CalendarIcon, MapPinIcon, TrophyIcon } from './Icons';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      year: '2026',
      date: '5 February 2026',
      title: 'INCEPTA 2026: Gnosis AI Hackathon',
      location: 'College of Engineering Trivandrum (CET), Trivandrum',
      category: 'AI HACKATHON',
      badgeColor: 'bg-neo-accent text-white',
      teammates: ['Nirmal Josekutty', 'Jeevan George', 'Gouri Sankar A'],
      summary: 'Participated in the competitive AI hackathon "Gnosis" during INCEPTA 2026 at CET Trivandrum. Worked in a collaborative squad focusing on rapid ideation, artificial intelligence workflows, iterative development, and technical problem-solving under tight hackathon timelines.',
      tags: ['Artificial Intelligence', 'Rapid Development', 'Teamwork', 'Ideation'],
    },
    {
      year: '2026',
      date: '13 January 2026',
      title: 'ICSET 9th Edition: IBM watsonx Orchestrate Workshop',
      location: 'Adlux Convention Centre, Angamaly',
      category: 'AI WORKFLOW WORKSHOP',
      badgeColor: 'bg-neo-secondary text-black',
      organizer: 'ICT Academy of Kerala',
      summary: 'Participated in an intensive hands-on IBM workshop focused on watsonx Orchestrate. Gained deep exposure to AI-powered workflow automation, coordinating multi-step agentic tasks across disconnected enterprise tools, and evaluating practical production applications of AI.',
      tags: ['IBM watsonx Orchestrate', 'Workflow Automation', 'Enterprise AI', 'Tool Integration'],
    },
    {
      year: '2025',
      date: '26 to 27 September 2025',
      title: 'HashItUp: 24-Hour National Level Hackathon',
      location: 'MBCET, Kuttikkanam, Kerala',
      category: 'FIRST HACKATHON',
      badgeColor: 'bg-neo-muted text-black',
      teamName: 'Team Interceptors',
      teammates: ['Jeevan George', 'Nirmal Josekutty', 'Gouri Sankar A'],
      summary: 'Melwin\'s milestone first hackathon experience. Competed in a rigorous 24-hour national hackathon at Mar Baselios Christian College of Engineering & Technology. Gained hands-on experience in rapid problem-solving, sprint execution, and building functional prototypes under intense time constraints.',
      tags: ['24-Hour Sprint', 'First Hackathon', 'Team Interceptors', 'National Level'],
    },
    {
      year: '2025',
      date: '2025',
      title: 'PRAYANA 2025: Entrepreneurship & Alumni Interaction',
      location: 'SJCET, Palai',
      category: 'ENTREPRENEURSHIP & STARTUPS',
      badgeColor: 'bg-white text-black',
      keyPerson: 'Inaugurated by Sri. Anoop Ambika (CEO, Kerala Startup Mission)',
      summary: 'As a first-year MCA student, attended PRAYANA 2025 to learn directly from entrepreneurial alumni and startup leaders. The event featured real-world startup case studies and an interactive interview session hosted by Nirmal Josekutty.',
      tags: ['Startup Ecosystem', 'Kerala Startup Mission', 'Alumni Mentorship', 'Ideation'],
    },
    {
      year: '2025',
      date: '2025',
      title: 'INSENDIUM 10.0: Startup Bootcamp SJCET-IEDC',
      location: 'SJCET, Palai',
      category: 'AWARD WINNING EVENT',
      badgeColor: 'bg-neo-secondary text-black',
      award: 'BEST TEAM AWARD FOR OVERALL PERFORMANCE',
      teamMembers: [
        'Dario George',
        'Anniia Jose',
        'Devika Jayan',
        'Abin Antony',
        'Joseph Roy',
        'Melwin Santhosh',
      ],
      summary: 'Melwin\'s first college event at SJCET Palai, organized by Startup Bootcamp SJCET-IEDC. The event focused on innovation, problem-solving, and team execution. Melwin\'s six-person team delivered an outstanding collaborative performance and won the prestigious Best Team Award.',
      tags: ['Best Team Award', 'First College Event', '6-Member Squad', 'Innovation Bootcamp'],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 border-b-4 border-black bg-neo-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-block border-2 border-black bg-neo-secondary px-2.5 py-0.5 text-xs font-black uppercase tracking-widest shadow-neo-sm mb-3">
              JOURNEY & MILESTONES
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-black">
              PRACTICAL EXPERIENCE
            </h2>
          </div>

          {/* Progression Indicator */}
          <div className="border-3 border-black bg-white p-3 shadow-neo-sm font-display text-xs font-black uppercase tracking-wider text-black">
            <span className="text-neo-accent">PROGRESSION:</span> First Event → First Hackathon → AI Workflows → Leadership
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative">
          
          {/* Vertical black structural guideline (desktop) */}
          <div className="hidden lg:block absolute top-4 bottom-4 left-8 w-1 bg-black" aria-hidden="true" />

          {experiences.map((item, idx) => (
            <div
              key={idx}
              className="relative lg:pl-20 group"
            >
              {/* Timeline Year Marker (desktop) */}
              <div className="hidden lg:flex absolute left-0 top-6 w-16 h-16 border-4 border-black bg-white items-center justify-center font-display font-black text-sm shadow-neo-sm group-hover:bg-neo-secondary transition-colors z-10">
                {item.year}
              </div>

              {/* Card Container */}
              <div className="border-4 border-black bg-white p-6 sm:p-8 shadow-neo neo-lift">
                
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-3 border-black/10 pb-3 mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`border-2 border-black px-2.5 py-0.5 text-xs font-black uppercase shadow-neo-sm ${item.badgeColor}`}>
                      {item.category}
                    </span>
                    {item.award && (
                      <span className="inline-flex items-center gap-1 border-2 border-black bg-neo-accent text-white px-2.5 py-0.5 text-xs font-black uppercase shadow-neo-sm">
                        <TrophyIcon className="w-3.5 h-3.5" />
                        {item.award}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs font-bold text-black/70">
                    <CalendarIcon className="w-4 h-4 text-black" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Main Content */}
                <h3 className="font-display font-extrabold text-2xl uppercase tracking-tight text-black mb-2">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-xs font-bold text-black/80 mb-4">
                  <MapPinIcon className="w-4 h-4 text-neo-accent shrink-0" />
                  <span>{item.location}</span>
                  {item.organizer && (
                    <>
                      <span className="text-black/40">•</span>
                      <span className="italic">Org: {item.organizer}</span>
                    </>
                  )}
                </div>

                <p className="font-body text-sm font-bold text-black/85 leading-relaxed mb-5">
                  {item.summary}
                </p>

                {/* Teammates Callout */}
                {item.teammates && (
                  <div className="border-2 border-black bg-[#FFFDF5] p-3 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/60 block mb-1">
                      TEAM COLLABORATORS ({item.teamName || 'SQUAD'})
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.teammates.map((mate, mIdx) => (
                        <span key={mIdx} className="border border-black bg-white px-2 py-0.5 text-xs font-bold uppercase">
                          {mate}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Insendium 6-member team list */}
                {item.teamMembers && (
                  <div className="border-2 border-black bg-neo-secondary/30 p-3 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/70 block mb-1">
                      AWARD-WINNING SQUAD (6 MEMBERS)
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.teamMembers.map((member, mIdx) => (
                        <span
                          key={mIdx}
                          className={`border border-black px-2 py-0.5 text-xs font-bold uppercase ${member === 'Melwin Santhosh' ? 'bg-neo-secondary font-black' : 'bg-white'}`}
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Special Context (PRAYANA) */}
                {item.keyPerson && (
                  <div className="border-2 border-black bg-white p-2.5 mb-4 text-xs font-bold text-black/80">
                    <span className="font-black text-neo-accent uppercase mr-1.5">SPECIAL CONTEXT:</span>
                    {item.keyPerson}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t-2 border-black/10">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-mono font-bold uppercase bg-black/5 px-2 py-0.5 border border-black/20">
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
