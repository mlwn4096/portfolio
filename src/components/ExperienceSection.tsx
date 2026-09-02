import React from 'react';
import { CalendarIcon, MapPinIcon, TrophyIcon } from './Icons';

interface TimelineEvent {
  date: string;
  title: string;
  location: string;
  description: string;
  team?: { label?: string; members: string[] };
  award?: string;
  organizer?: string;
  highlight?: string;
}

export const ExperienceSection: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      date: '5 February 2026',
      title: 'INCEPTA 2026: Gnosis AI Hackathon',
      location: 'College of Engineering Trivandrum (CET)',
      description:
        'Competed in the dedicated AI hackathon "Gnosis" during INCEPTA 2026 at CET Trivandrum, focusing on rapid ideation, artificial intelligence workflows, and iterative technical problem-solving.',
      team: { members: ['Nirmal Josekutty', 'Jeevan George', 'Gouri Sankar A'] },
    },
    {
      date: '13 January 2026',
      title: 'ICSET 9th Edition: IBM watsonx Orchestrate Workshop',
      location: 'Adlux Convention Centre, Angamaly',
      description:
        'Hands-on technical workshop on AI-powered workflow automation and coordinating multi-step agentic tasks across enterprise systems with IBM watsonx Orchestrate.',
      organizer: 'ICT Academy of Kerala',
    },
    {
      date: '26 to 27 September 2025',
      title: 'HashItUp: 24-Hour National Hackathon',
      location: 'MBCET, Kuttikkanam',
      description:
        'Melwin\'s first hackathon. Competed in an intensive 24-hour national-level sprint at Mar Baselios Christian College, building prototypes and executing under strict time constraints.',
      team: {
        label: 'Team Interceptors',
        members: ['Jeevan George', 'Nirmal Josekutty', 'Gouri Sankar A'],
      },
    },
    {
      date: '2025',
      title: 'PRAYANA 2025: Entrepreneurship Summit',
      location: 'SJCET, Palai',
      description:
        'Alumni interaction and entrepreneurship event inaugurated by Sri. Anoop Ambika, CEO of Kerala Startup Mission. Featured startup case studies and an interactive interview session hosted by Nirmal Josekutty.',
    },
    {
      date: '2025',
      title: 'INSENDIUM 10.0: Startup Bootcamp',
      location: 'SJCET, Palai',
      description:
        'Melwin\'s first college event, organized by Startup Bootcamp SJCET-IEDC. The six-member team delivered an outstanding collaborative performance across problem-solving and innovation challenges.',
      award: 'Best Team Award for Overall Performance',
      team: {
        label: 'Squad (6 Members)',
        members: [
          'Dario George',
          'Anniia Jose',
          'Devika Jayan',
          'Abin Antony',
          'Joseph Roy',
          'Melwin Santhosh',
        ],
      },
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 border-b-4 border-black bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Context (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div>
              <h2 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight text-black">
                Experience
              </h2>
              <p className="font-body text-base font-bold text-black/70 mt-4 leading-relaxed">
                Hackathons, technical workshops, and collegiate competitions from 2025 to 2026.
              </p>
            </div>

            <div className="border-3 border-black bg-neo-secondary p-5 shadow-neo-sm space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-black/60 block">
                NOTABLE ACHIEVEMENT
              </span>
              <p className="font-display font-black text-sm uppercase text-black leading-snug">
                Best Team Award • INSENDIUM 10.0
              </p>
              <p className="text-xs font-bold text-black/75">
                Won with a 6-member squad at Melwin's first college event.
              </p>
            </div>
          </div>

          {/* Right Column: Timeline (8 cols) */}
          <div className="lg:col-span-8">
            <div className="border-l-3 border-black pl-6 sm:pl-8 space-y-12">
              {events.map((event, idx) => (
                <div key={idx} className="relative">
                  {/* Square marker on the spine */}
                  <div
                    className="absolute -left-[calc(1.5rem+6.5px)] sm:-left-[calc(2rem+6.5px)] top-1 w-3 h-3 bg-black border border-black"
                    aria-hidden="true"
                  />

                  {/* Date & Location bar */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono font-bold text-black/60 mb-2">
                    <span className="flex items-center gap-1 text-black font-black">
                      <CalendarIcon className="w-3.5 h-3.5" />
                      {event.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPinIcon className="w-3.5 h-3.5 text-neo-accent" />
                      {event.location}
                    </span>
                    {event.organizer && (
                      <>
                        <span>•</span>
                        <span className="italic">{event.organizer}</span>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl uppercase tracking-tight text-black mb-2">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm font-bold text-black/80 leading-relaxed mb-3">
                    {event.description}
                  </p>

                  {/* Award Callout */}
                  {event.award && (
                    <div className="inline-flex items-center gap-2 border-2 border-black bg-neo-secondary px-3 py-1 text-xs font-black uppercase text-black shadow-neo-sm mb-3">
                      <TrophyIcon className="w-4 h-4 text-black shrink-0" />
                      <span>{event.award}</span>
                    </div>
                  )}

                  {/* Team Members */}
                  {event.team && (
                    <div className="text-xs font-bold text-black/70 pt-1">
                      <span className="font-black text-black">
                        {event.team.label ? `${event.team.label}: ` : 'Teammates: '}
                      </span>
                      <span>{event.team.members.join(', ')}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
