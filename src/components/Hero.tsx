import React from 'react';
import { ArrowRightIcon, GitHubIcon, LinkedInIcon, MailIcon, StarGeometricIcon } from './Icons';
import { ProfilePhoto } from './ProfilePhoto';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b-4 border-black bg-[#FFFDF5] bg-graph-grid py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric 60/40 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: 60% (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Sticker Badges Row */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 border-3 border-black bg-neo-secondary px-3 py-1 text-xs font-black uppercase tracking-widest text-black shadow-neo-sm -rotate-2">
                <StarGeometricIcon className="w-3.5 h-3.5 fill-black" />
                2ND YEAR • SEM 3
              </span>
              <span className="inline-flex items-center border-3 border-black bg-neo-muted px-3 py-1 text-xs font-black uppercase tracking-widest text-black shadow-neo-sm rotate-1">
                AI × MULTIMEDIA
              </span>
              <span className="inline-flex items-center border-3 border-black bg-white px-3 py-1 text-xs font-black uppercase tracking-widest text-black shadow-neo-sm">
                SJCET PALAI
              </span>
            </div>

            {/* Massive Editorial Headline */}
            <div className="space-y-1">
              <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-8xl uppercase tracking-tighter leading-[0.9] text-black">
                MELWIN
                <span className="block text-stroke-black-3 text-white sm:text-stroke-black-3">
                  SANTHOSH
                </span>
              </h1>
            </div>

            {/* Descriptive Pitch - Student & Practical Builder */}
            <div className="border-4 border-black bg-white p-5 shadow-neo max-w-2xl">
              <p className="font-body text-base sm:text-lg font-bold text-black leading-relaxed">
                Integrated MCA student at <span className="underline decoration-4 decoration-neo-secondary">St Joseph's College of Engineering and Technology</span>, Palai. Passionate about Artificial Intelligence, Multimedia systems, rapid prototyping, and solving practical problems through experimentation.
              </p>
              
              <div className="mt-4 pt-3 border-t-2 border-black/10 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider text-black/80">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-neo-accent border border-black inline-block" />
                  Head of PRAX
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-neo-secondary border border-black inline-block" />
                  MCA 2025 → 2030
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-neo-muted border border-black inline-block" />
                  Active Hackathon Builder
                </span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-6 py-3.5 border-4 border-black bg-neo-accent text-white font-display font-black text-sm uppercase tracking-wider shadow-neo hover:-translate-y-1 hover:shadow-neo-lg transition-all neo-press"
              >
                <span>VIEW WORK</span>
                <ArrowRightIcon className="w-5 h-5 text-white" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border-4 border-black bg-neo-secondary text-black font-display font-black text-sm uppercase tracking-wider shadow-neo hover:-translate-y-1 hover:shadow-neo-lg transition-all neo-press"
              >
                <span>GET IN TOUCH</span>
              </a>

              <a
                href="#prax"
                className="inline-flex items-center gap-2 px-5 py-3.5 border-4 border-black bg-white text-black font-display font-black text-sm uppercase tracking-wider shadow-neo-sm hover:bg-neo-muted transition-all neo-press"
              >
                <span>PRAX COMMUNITY</span>
              </a>
            </div>

            {/* Social Channels Strip */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs font-black uppercase tracking-widest text-black/60">
                CONNECT:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/mlwn4096"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub mlwn4096"
                  className="p-2 border-2 border-black bg-white shadow-neo-sm hover:bg-neo-secondary hover:-translate-y-0.5 transition-all"
                >
                  <GitHubIcon className="w-4 h-4 text-black" />
                </a>
                <a
                  href="https://www.linkedin.com/in/melwin-santhosh-784550378"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Melwin Santhosh"
                  className="p-2 border-2 border-black bg-white shadow-neo-sm hover:bg-neo-secondary hover:-translate-y-0.5 transition-all"
                >
                  <LinkedInIcon className="w-4 h-4 text-black" />
                </a>
                <a
                  href="mailto:melwinsanthosh@outlook.com"
                  aria-label="Email Melwin Santhosh"
                  className="p-2 border-2 border-black bg-white shadow-neo-sm hover:bg-neo-secondary hover:-translate-y-0.5 transition-all"
                >
                  <MailIcon className="w-4 h-4 text-black" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: 40% (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ProfilePhoto />
          </div>

        </div>

      </div>
    </section>
  );
};
