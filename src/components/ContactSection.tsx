import React, { useState } from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowUpRightIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'melwinsanthosh@outlook.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b-4 border-black bg-neo-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Pitch (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-black leading-[0.95]">
              LET'S BUILD
              <br />
              SOMETHING
              <br />
              <span>INTERESTING.</span>
            </h2>

            <p className="font-body text-base sm:text-lg font-bold text-black/80 leading-relaxed max-w-xl">
              Interested in Artificial Intelligence, multimedia systems, hackathons, open source, or building practical software? Get in touch.
            </p>
          </div>

          {/* Right Column: Interactive Contact Box (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="border-4 border-black bg-white p-6 shadow-neo">
              <span className="text-[10px] font-black uppercase tracking-widest text-black/60 block mb-2">
                DIRECT INBOX
              </span>
              
              <div className="flex items-center gap-2 mb-4">
                <MailIcon className="w-5 h-5 text-black shrink-0" />
                <span className="font-mono font-black text-base sm:text-lg text-black break-all">
                  {email}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={copyEmail}
                  className="flex-1 py-2.5 px-4 border-2 border-black bg-neo-secondary font-display font-black text-xs uppercase tracking-wider text-black shadow-neo-sm hover:bg-black hover:text-white transition-all neo-press"
                >
                  {copied ? 'COPIED TO CLIPBOARD' : 'COPY EMAIL'}
                </button>
                <a
                  href={`mailto:${email}`}
                  className="py-2.5 px-4 border-2 border-black bg-black font-display font-black text-xs uppercase tracking-wider text-white shadow-neo-sm hover:bg-neo-accent transition-all neo-press"
                >
                  COMPOSE
                </a>
              </div>
            </div>

            {/* Profile Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="https://github.com/mlwn4096"
                target="_blank"
                rel="noopener noreferrer"
                className="border-3 border-black bg-white p-3 shadow-neo-sm flex items-center justify-between hover:bg-black hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <GitHubIcon className="w-4 h-4" />
                  <span className="font-display font-black text-xs uppercase">GitHub</span>
                </div>
                <ArrowUpRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://www.linkedin.com/in/melwin-santhosh-784550378"
                target="_blank"
                rel="noopener noreferrer"
                className="border-3 border-black bg-white p-3 shadow-neo-sm flex items-center justify-between hover:bg-black hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <LinkedInIcon className="w-4 h-4" />
                  <span className="font-display font-black text-xs uppercase">LinkedIn</span>
                </div>
                <ArrowUpRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://mlwn.runs-on.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="border-3 border-black bg-white p-3 shadow-neo-sm flex items-center justify-between hover:bg-black hover:text-white transition-colors group"
              >
                <span className="font-display font-black text-xs uppercase">Domain</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
