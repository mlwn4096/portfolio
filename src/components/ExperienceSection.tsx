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
      date: '2026 – PRESENT',
      title: 'Platform Contributor — PRAX',
      location: 'Palai / Remote',
      organizer: 'Vantcrest Labs Pvt. Ltd.',
      description:
        'Contributing to the platform architecture, member progression systems, project challenge tracks, and mentorship frameworks for an invite-only professional builder community.',
      award: 'Core Platform Contributor',
    },
    {
      date: '5 FEBRUARY 2026',
      title: 'INCEPTA 2026: Gnosis AI Hackathon',
      location: 'College of Engineering Trivandrum (CET)',
      description:
        'Competed in the dedicated AI hackathon "Gnosis" during INCEPTA 2026 at CET Trivandrum, focusing on rapid ideation, artificial intelligence workflows, and iterative technical problem-solving.',
      team: { members: ['Nirmal Josekutty', 'Jeevan George', 'Gouri Sankar A'] },
    },
    {
      date: '13 JANUARY 2026',
      title: 'ICSET 9th Edition: IBM watsonx Orchestrate Workshop',
      location: 'Adlux Convention Centre, Angamaly',
      description:
        'Hands-on technical workshop on AI-powered workflow automation and coordinating multi-step agentic tasks across enterprise systems with IBM watsonx Orchestrate.',
      organizer: 'ICT Academy of Kerala',
    },
    {
      date: '26–27 SEPTEMBER 2025',
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
    {
      date: '2025',
      title: 'PRAYANA 2025: Entrepreneurship Summit',
      location: 'SJCET, Palai',
      description:
        'Alumni interaction and entrepreneurship event inaugurated by Sri. Anoop Ambika, CEO of Kerala Startup Mission. Featured startup case studies and an interactive interview session.',
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 border-b-4 border-black bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Context (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="inline-block border-3 border-black bg-neo-secondary px-3 py-1 text-xs font-black uppercase tracking-widest text-black shadow-neo-sm -rotate-1">
              CHRONOLOGY
            </div>
            <div>
              <h2 className="font-black text-6xl sm:text-7xl uppercase tracking-tighter text-black leading-none">
                EXPERIENCE
              </h2>
              <p className="text-base font-bold text-black/80 mt-4 leading-relaxed">
                Platform engineering, hackathons, IBM workshops, and collegiate competitions from 2025 to 2026.
              </p>
            </div>

            {/* Achievement Callout Box */}
            <div className="border-4 border-black bg-neo-secondary p-5 shadow-neo-md space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-black/70 block">
                SPECIAL HONORS
              </span>
              <p className="font-black text-sm uppercase text-black leading-snug">
                Best Team Award • INSENDIUM 10.0
              </p>
              <p className="text-xs font-bold text-black/80">
                Awarded for overall performance with a 6-member squad at Melwin's first college sprint.
              </p>
            </div>

            {/* Quick Filter / Summary Badge */}
            <div className="border-4 border-black bg-white p-4 shadow-neo-sm">
              <span className="text-[10px] font-black uppercase tracking-widest text-black/60 block">
                RECORD METRICS
              </span>
              <div className="mt-2 flex items-center justify-between text-xs font-black">
                <span>Total Milestones</span>
                <span className="bg-neo-accent text-white px-2 py-0.5 border border-black">6 Events</span>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Cards (8 cols) */}
          <div className="lg:col-span-8">
            <div className="border-l-4 border-black pl-6 sm:pl-8 space-y-8">
              {events.map((event, idx) => (
                <div key={idx} className="relative group">
                  {/* Square marker on the spine */}
                  <div
                    className="absolute -left-[calc(1.5rem+10px)] sm:-left-[calc(2rem+10px)] top-4 w-4 h-4 bg-neo-accent border-2 border-black group-hover:scale-125 transition-transform"
                    aria-hidden="true"
                  />

                  {/* Card Container with Neo-Brutalist Lift */}
                  <div className="border-4 border-black bg-white p-6 shadow-neo-md hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-150">
                    {/* Date & Location bar */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-mono font-bold text-black/70 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-black font-black bg-neo-secondary/70 border border-black px-2 py-0.5">
                        <CalendarIcon className="w-3.5 h-3.5" />
                        {event.date}
                      </span>
                      <span className="inline-flex items-center gap-1 text-black font-bold">
                        <MapPinIcon className="w-3.5 h-3.5 text-neo-accent" />
                        {event.location}
                      </span>
                      {event.organizer && (
                        <span className="text-black/60 font-bold border-l-2 border-black pl-2">
                          {event.organizer}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-black text-xl sm:text-2xl uppercase tracking-tight text-black mb-2.5">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm font-bold text-black/85 leading-relaxed mb-4">
                      {event.description}
                    </p>

                    {/* Award Callout Badge */}
                    {event.award && (
                      <div className="inline-flex items-center gap-2 border-3 border-black bg-neo-secondary px-3 py-1 text-xs font-black uppercase text-black shadow-neo-sm mb-3">
                        <TrophyIcon className="w-4 h-4 text-black shrink-0" />
                        <span>{event.award}</span>
                      </div>
                    )}

                    {/* Team Members */}
                    {event.team && (
                      <div className="text-xs font-bold text-black/80 pt-2 border-t-2 border-black/10">
                        <span className="font-black text-black uppercase tracking-wider">
                          {event.team.label ? `${event.team.label}: ` : 'Teammates: '}
                        </span>
                        <span>{event.team.members.join(', ')}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
