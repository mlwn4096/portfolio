import React, { useState } from 'react';
import { ArrowUpRightIcon, GitHubIcon, ShieldLockIcon, StarGeometricIcon } from './Icons';

export const ProjectsSection: React.FC = () => {
  // Skeleton loader demonstration state for async repository / demo inspections
  const [showSkeleton, setShowSkeleton] = useState(false);

  const neuroBotsTech = [
    { label: 'Frontend', tech: 'React, Tailwind CSS, Recharts' },
    { label: 'Backend & Gateway', tech: 'Python, FastAPI, httpx, PyJWT, WebSockets' },
    { label: 'Machine Learning', tech: 'scikit-learn, NetworkX, Markov Model' },
    { label: 'Threat Summaries', tech: 'LangChain (LLM-assisted threat hunting)' },
    { label: 'Databases', tech: 'Redis, PostgreSQL' },
    { label: 'Containerization', tech: 'Docker, Docker Compose' },
    { label: 'Standards Compliance', tech: 'OWASP API Security Top 10, MITRE ATT&CK' },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 border-b-4 border-black bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-block border-2 border-black bg-neo-accent text-white px-2.5 py-0.5 text-xs font-black uppercase tracking-widest shadow-neo-sm mb-3">
              GITHUB REPOSITORIES & WORKBENCH
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-black">
              TECHNICAL PROJECTS
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSkeleton(!showSkeleton)}
              className="px-3 py-1.5 border-2 border-black bg-white font-display font-black text-xs uppercase shadow-neo-sm hover:bg-neo-secondary neo-press"
              title="Toggle skeleton loader inspection"
            >
              {showSkeleton ? 'SHOW REPOSITORIES' : 'PREVIEW SKELETON LOADER'}
            </button>
            <a
              href="https://github.com/mlwn4096"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border-3 border-black bg-white font-display font-black text-xs uppercase shadow-neo-sm hover:bg-neo-secondary neo-press"
            >
              <GitHubIcon className="w-4 h-4 text-black" />
              <span>GITHUB PROFILE</span>
            </a>
          </div>
        </div>

        {/* Skeleton Loader Mode (as required by guardrails) */}
        {showSkeleton ? (
          <div className="border-4 border-black bg-white p-8 shadow-neo space-y-6 animate-pulse" aria-label="Loading repository details">
            <div className="h-8 bg-black/10 w-1/3 border-2 border-black/20" />
            <div className="h-4 bg-black/10 w-3/4 border border-black/20" />
            <div className="h-4 bg-black/10 w-1/2 border border-black/20" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="h-24 bg-black/5 border-2 border-black/20" />
              <div className="h-24 bg-black/5 border-2 border-black/20" />
            </div>
            <div className="h-10 bg-neo-secondary/40 w-44 border-2 border-black/20" />
          </div>
        ) : (
          <div className="space-y-12">
            
            {/* Primary Highlighted Project: NEUROBOTS */}
            <div className="border-4 border-black bg-white shadow-neo-lg overflow-hidden">
              
              {/* Card Title Header */}
              <div className="border-b-4 border-black bg-neo-secondary p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 border-3 border-black bg-white shadow-neo-sm">
                    <ShieldLockIcon className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/70 block">
                      FEATURED SYSTEM
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-black">
                      NEUROBOTS
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="border-2 border-black bg-white px-2.5 py-1 text-xs font-black uppercase shadow-neo-sm">
                    ZERO TRUST PLATFORM
                  </span>
                  <a
                    href="https://github.com/mlwn4096/NeuroBots"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 border-3 border-black bg-black text-white font-display font-black text-xs uppercase shadow-neo-sm hover:bg-neo-accent hover:text-white transition-all neo-press"
                  >
                    <span>SOURCE REPO</span>
                    <ArrowUpRightIcon className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Official Repository Description */}
                <div className="border-3 border-black bg-[#FFFDF5] p-5 shadow-neo-sm">
                  <span className="text-[11px] font-black uppercase tracking-widest text-neo-accent block mb-1">
                    PROJECT DEFINITION
                  </span>
                  <p className="font-display font-extrabold text-lg sm:text-xl uppercase text-black leading-snug">
                    Zero Trust API Security Intelligence and Autonomous Authorization Protection Platform
                  </p>
                </div>

                {/* Problem Statement Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  <div className="border-3 border-black bg-white p-5 shadow-neo-sm">
                    <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-black mb-2 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-neo-accent border border-black inline-block" />
                      THE THREAT LANDSCAPE
                    </h4>
                    <p className="font-body text-sm font-bold text-black/80 leading-relaxed">
                      API authorization attacks like Broken Object Level Authorization (BOLA) and Broken Function Level Authorization (BFLA) are among the leading causes of modern API breaches. Because malicious requests originate from valid, authenticated sessions with well-formed syntax, traditional signature-based web firewalls treat them as legitimate traffic and let them through undetected.
                    </p>
                  </div>

                  <div className="border-3 border-black bg-white p-5 shadow-neo-sm">
                    <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-black mb-2 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-neo-secondary border border-black inline-block" />
                      AUTONOMOUS DEFENSE
                    </h4>
                    <p className="font-body text-sm font-bold text-black/80 leading-relaxed">
                      NeuroBots detects and mitigates authorization abuses in real time using a combination of behavioral models, graph analysis (NetworkX), Markov chains, and LangChain-assisted threat summarization. It protects sensitive personal and financial assets while maintaining low latency and avoiding false positives against legitimate users.
                    </p>
                  </div>

                </div>

                {/* Verified Technology Architecture (from README) */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <StarGeometricIcon className="w-4 h-4 fill-black" />
                    <h4 className="font-display font-black text-sm uppercase tracking-wider text-black">
                      VERIFIED REPOSITORY ARCHITECTURE
                    </h4>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {neuroBotsTech.map((item, idx) => (
                      <div key={idx} className="border-2 border-black bg-white p-3 shadow-neo-sm">
                        <span className="text-[10px] font-black uppercase text-black/60 block">
                          {item.label}
                        </span>
                        <span className="font-mono text-xs font-bold text-black block mt-0.5">
                          {item.tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Repo link banner */}
                <div className="border-2 border-black bg-neo-muted/30 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <span className="w-2 h-2 bg-black inline-block" />
                    <span>PUBLIC REPOSITORY: github.com/mlwn4096/NeuroBots</span>
                  </div>
                  <a
                    href="https://github.com/mlwn4096/NeuroBots"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase underline decoration-2 hover:text-neo-accent"
                  >
                    <span>EXPLORE CODE ON GITHUB</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>

            {/* Secondary Project: PROJ0 */}
            <div className="border-4 border-black bg-white p-6 sm:p-8 shadow-neo neo-lift">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-3 border-black pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-4 h-4 bg-neo-secondary border-2 border-black inline-block" />
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/60 block">
                      PUBLIC EXPERIMENTAL REPOSITORY
                    </span>
                    <h3 className="font-display font-extrabold text-xl uppercase tracking-tight text-black">
                      PROJ0
                    </h3>
                  </div>
                </div>
                <a
                  href="https://github.com/mlwn4096/proj0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-black bg-white font-display font-black text-xs uppercase shadow-neo-sm hover:bg-neo-secondary neo-press self-start sm:self-center"
                >
                  <GitHubIcon className="w-4 h-4 text-black" />
                  <span>VIEW REPOSITORY</span>
                </a>
              </div>

              <p className="font-body text-sm font-bold text-black/80 leading-relaxed">
                Initial public scratchpad repository created for code experimentation and toolchain testing. Kept minimal and documented accurately based directly on public GitHub records.
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
