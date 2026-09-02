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
    <section id="contact" className="py-16 md:py-24 border-b-4 border-black bg-neo-secondary bg-graph-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Contact Poster Box */}
        <div className="border-4 border-black bg-[#000000] text-white p-8 sm:p-12 md:p-16 shadow-neo-xl">
          
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-block border-2 border-white bg-neo-accent text-white px-3 py-1 font-display font-black text-xs uppercase tracking-widest shadow-neo-sm">
              COLLABORATION & INQUIRIES
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-white leading-none">
              LET'S BUILD
              <span className="block text-neo-secondary">
                SOMETHING
              </span>
              <span className="block text-stroke-white-2">
                INTERESTING.
              </span>
            </h2>

            <p className="font-body text-base sm:text-xl font-bold text-white/90 leading-relaxed max-w-2xl">
              Interested in Artificial Intelligence, Multimedia systems, hackathons, open source experiments, or building practical software? Let's connect.
            </p>

            {/* Email Action Card */}
            <div className="pt-4 space-y-4">
              <div className="border-3 border-black bg-white text-black p-4 sm:p-6 shadow-neo flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 border-2 border-black bg-neo-secondary">
                    <MailIcon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-black/60 block">DIRECT INBOX</span>
                    <span className="font-mono font-black text-base sm:text-lg break-all">
                      {email}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={copyEmail}
                    className="px-4 py-2 border-2 border-black bg-neo-secondary font-display font-black text-xs uppercase shadow-neo-sm hover:bg-neo-accent hover:text-white transition-all neo-press"
                  >
                    {copied ? 'COPIED TO CLIPBOARD!' : 'COPY EMAIL'}
                  </button>
                  <a
                    href={`mailto:${email}`}
                    className="px-4 py-2 border-2 border-black bg-black text-white font-display font-black text-xs uppercase shadow-neo-sm hover:bg-neo-accent transition-all neo-press"
                  >
                    COMPOSE
                  </a>
                </div>
              </div>

              {/* Direct Profile Links Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                
                <a
                  href="https://github.com/mlwn4096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-3 border-black bg-white text-black p-4 shadow-neo flex items-center justify-between hover:bg-neo-secondary hover:-translate-y-1 transition-all neo-press group"
                >
                  <div className="flex items-center gap-2.5">
                    <GitHubIcon className="w-5 h-5 text-black" />
                    <div>
                      <span className="text-[10px] font-black uppercase text-black/60 block">GITHUB</span>
                      <span className="font-display font-black text-sm">mlwn4096</span>
                    </div>
                  </div>
                  <ArrowUpRightIcon className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://www.linkedin.com/in/melwin-santhosh-784550378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-3 border-black bg-white text-black p-4 shadow-neo flex items-center justify-between hover:bg-neo-secondary hover:-translate-y-1 transition-all neo-press group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedInIcon className="w-5 h-5 text-black" />
                    <div>
                      <span className="text-[10px] font-black uppercase text-black/60 block">LINKEDIN</span>
                      <span className="font-display font-black text-sm">melwin-santhosh</span>
                    </div>
                  </div>
                  <ArrowUpRightIcon className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://mlwn.runs-on.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-3 border-black bg-white text-black p-4 shadow-neo flex items-center justify-between hover:bg-neo-secondary hover:-translate-y-1 transition-all neo-press group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 border-2 border-black bg-neo-accent inline-flex items-center justify-center text-[10px] font-black text-white">
                      M
                    </span>
                    <div>
                      <span className="text-[10px] font-black uppercase text-black/60 block">DOMAIN</span>
                      <span className="font-display font-black text-sm">mlwn.runs-on.dev</span>
                    </div>
                  </div>
                  <ArrowUpRightIcon className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
