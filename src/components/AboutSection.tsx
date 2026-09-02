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

        {/* Simple left-aligned heading */}
        <h2 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight text-black mb-16">
          About
        </h2>

        {/* 2-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Education & Bio (7 cols) */}
          <div className="lg:col-span-7 space-y-10">

            {/* Education - presented naturally as prose */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-black/50">
                <AcademicCapIcon className="w-5 h-5" />
                <MapPinIcon className="w-5 h-5" />
                <span className="font-body text-sm font-bold">Palai, Kerala, India</span>
              </div>

              <p className="font-body text-lg sm:text-xl font-bold text-black leading-relaxed">
                Currently in my <span className="bg-neo-secondary/60 px-1">2nd year (3rd semester)</span> of the
                Integrated MCA program at <span className="underline decoration-2 decoration-neo-accent">St Joseph's College of Engineering and Technology</span>, Palai.
                The program runs from 2025 to 2030.
              </p>

              <p className="font-body text-base text-black/80 leading-relaxed">
                I am interested in Artificial Intelligence and Multimedia, and I enjoy exploring ideas by building, experimenting, and learning through practical experiences. I learn in public by shipping code, testing ideas against real problem statements, participating in 24-hour sprints, and collaborating with motivated peers.
              </p>
            </div>

            {/* Interest tags - simple highlighted text */}
            <div>
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-black/50 mb-4">
                Focus areas
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {interests.map((item, idx) => (
                  <span
                    key={idx}
                    className="font-body font-bold text-sm text-black border-b-[3px] border-neo-secondary pb-0.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Learning philosophy - standalone quote block */}
            <div className="border-4 border-black bg-black text-white p-6 sm:p-8 shadow-neo-sm">
              <p className="font-body text-base sm:text-lg font-bold leading-relaxed text-white/90">
                "I do not pretend to be an industry veteran with decades of enterprise history. I am an enthusiastic student builder who learns in public by shipping code, testing ideas against real problem statements, participating in 24-hour sprints, and collaborating with motivated peers."
              </p>
            </div>

          </div>

          {/* Right Column: Current Dispatch (5 cols) */}
          <div className="lg:col-span-5">
            <div className="border-4 border-black bg-neo-secondary p-6 sm:p-8 shadow-neo">
              <h3 className="font-display font-extrabold text-lg uppercase tracking-wider text-black mb-6 pb-3 border-b-3 border-black flex items-center justify-between">
                Current Dispatch
                <span className="w-3 h-3 bg-neo-accent border-2 border-black animate-pulse" />
              </h3>

              <div className="space-y-5 font-body text-sm text-black">
                <div>
                  <span className="font-black text-xs uppercase tracking-wider text-black/60">Role</span>
                  <p className="font-bold mt-1">Head of PRAX invite-only community</p>
                </div>

                <div>
                  <span className="font-black text-xs uppercase tracking-wider text-black/60">Project</span>
                  <p className="font-bold mt-1">NeuroBots: Autonomous API authorization platform</p>
                </div>

                <div>
                  <span className="font-black text-xs uppercase tracking-wider text-black/60">Recent Hackathon</span>
                  <p className="font-bold mt-1">INCEPTA 2026 Gnosis AI Hackathon (CET Trivandrum)</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
