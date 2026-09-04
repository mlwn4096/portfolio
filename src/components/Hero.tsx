import React from 'react';
import { ArrowRightIcon, GitHubIcon, LinkedInIcon, MailIcon, StarGeometricIcon } from './Icons';
import { ProfilePhoto } from './ProfilePhoto';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b-4 border-black bg-[#FFFDF5] bg-grid-pattern py-16 md:py-24">
      {/* Decorative spinning star floater in background */}
      <div className="absolute -top-12 -right-12 w-36 h-36 opacity-10 pointer-events-none animate-spin-slow">
        <StarGeometricIcon className="w-full h-full fill-black text-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Asymmetric 60/40 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: 60% (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">

            {/* Badges Row - rotated stickers */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 border-4 border-black bg-neo-secondary px-3.5 py-1.5 text-xs font-black uppercase tracking-widest text-black shadow-neo-sm -rotate-2 hover:rotate-0 transition-transform">
                <StarGeometricIcon className="w-4 h-4 fill-black" />
                SJCET PALAI • MCA
              </span>
              <span className="inline-flex items-center border-4 border-black bg-neo-muted px-3.5 py-1.5 text-xs font-black uppercase tracking-widest text-black shadow-neo-sm rotate-2 hover:rotate-0 transition-transform">
                AI × MULTIMEDIA
              </span>
              <span className="inline-flex items-center border-4 border-black bg-neo-accent text-white px-3.5 py-1.5 text-xs font-black uppercase tracking-widest shadow-neo-sm -rotate-1 hover:rotate-0 transition-transform">
                PRAX CONTRIBUTOR
              </span>
            </div>

            {/* Massive Headline */}
            <div>
              <h1 className="font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.85] text-black">
                MELWIN
                <span className="block text-stroke-black-3 text-black">
                  SANTHOSH
                </span>
              </h1>
            </div>

            {/* Descriptive Pitch Card with hard shadow */}
            <div className="border-4 border-black bg-white p-6 sm:p-7 shadow-neo-lg max-w-2xl">
              <p className="text-base sm:text-lg font-bold text-black leading-relaxed">
                Integrated MCA student (2025–2030) at <span className="underline decoration-4 decoration-neo-secondary underline-offset-4">St Joseph's College of Engineering and Technology</span>, Palai. Core platform contributor at PRAX (Vantcrest Labs Pvt. Ltd.). Focused on Artificial Intelligence, software engineering, Linux workflows, and practical technology.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-6 py-4 border-4 border-black bg-neo-accent text-white font-black text-sm uppercase tracking-wider shadow-neo hover:-translate-y-1 hover:shadow-neo-lg transition-all neo-press"
              >
                <span>VIEW WORK</span>
                <ArrowRightIcon className="w-5 h-5 text-white" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-4 border-4 border-black bg-neo-secondary text-black font-black text-sm uppercase tracking-wider shadow-neo hover:-translate-y-1 hover:shadow-neo-lg transition-all neo-press"
              >
                <span>GET IN TOUCH</span>
              </a>

              <a
                href="/Melwin_Santhosh_CV.pdf"
                download="Melwin_Santhosh_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-4 border-4 border-black bg-white text-black font-black text-sm uppercase tracking-wider shadow-neo hover:-translate-y-1 hover:shadow-neo-lg transition-all neo-press"
              >
                <span>DOWNLOAD CV [PDF]</span>
              </a>
            </div>

            {/* Social Icons - Bordered boxes with hard shadow */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href="https://github.com/mlwn4096"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub mlwn4096"
                className="p-3 border-4 border-black bg-white shadow-neo-sm hover:bg-neo-secondary hover:-translate-y-0.5 transition-all neo-press"
              >
                <GitHubIcon className="w-5 h-5 text-black" />
              </a>
              <a
                href="https://www.linkedin.com/in/melwin-santhosh-784550378"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Melwin Santhosh"
                className="p-3 border-4 border-black bg-white shadow-neo-sm hover:bg-neo-secondary hover:-translate-y-0.5 transition-all neo-press"
              >
                <LinkedInIcon className="w-5 h-5 text-black" />
              </a>
              <a
                href="mailto:melwinsanthoah4096@gmail.com"
                aria-label="Email Melwin Santhosh"
                className="p-3 border-4 border-black bg-white shadow-neo-sm hover:bg-neo-secondary hover:-translate-y-0.5 transition-all neo-press"
              >
                <MailIcon className="w-5 h-5 text-black" />
              </a>
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
