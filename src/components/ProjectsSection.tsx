import React, { useState } from 'react';
import { ArrowUpRightIcon, GitHubIcon, ShieldLockIcon } from './Icons';

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
    <section id="projects" className="py-20 md:py-28 border-b-4 border-black bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Clean header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight text-black">
            Projects
          </h2>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowSkeleton(!showSkeleton)}
              className="font-body text-xs font-bold text-black/50 underline hover:text-black transition-colors"
              title="Toggle skeleton loader inspection"
            >
              {showSkeleton ? 'Show repositories' : 'Preview skeleton loader'}
            </button>
            <a
              href="https://github.com/mlwn4096"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-bold text-black hover:text-neo-accent transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>mlwn4096</span>
            </a>
          </div>
        </div>

        {/* Skeleton Loader Mode */}
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
          <div className="space-y-8">

            {/* Primary Project: NEUROBOTS */}
            <div className="border-4 border-black bg-white shadow-neo overflow-hidden">

              {/* Simple header */}
              <div className="border-b-4 border-black bg-neo-secondary p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldLockIcon className="w-7 h-7 text-black" />
                  <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-black">
                    NeuroBots
                  </h3>
                </div>
                <a
                  href="https://github.com/mlwn4096/NeuroBots"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border-3 border-black bg-black text-white font-display font-black text-xs uppercase shadow-neo-sm hover:bg-neo-accent transition-all self-start"
                >
                  <span>SOURCE REPO</span>
                  <ArrowUpRightIcon className="w-4 h-4 text-white" />
                </a>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-6">

                {/* Description */}
                <p className="font-display font-extrabold text-lg sm:text-xl uppercase text-black leading-snug max-w-3xl">
                  Zero Trust API Security Intelligence and Autonomous Authorization Protection Platform
                </p>

                {/* Problem & Solution */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-black mb-2">
                      The Threat Landscape
                    </h4>
                    <p className="font-body text-sm text-black/80 leading-relaxed">
                      API authorization attacks like Broken Object Level Authorization (BOLA) and Broken Function Level Authorization (BFLA) are among the leading causes of modern API breaches. Because malicious requests originate from valid, authenticated sessions with well-formed syntax, traditional signature-based web firewalls treat them as legitimate traffic and let them through undetected.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-black mb-2">
                      Autonomous Defense
                    </h4>
                    <p className="font-body text-sm text-black/80 leading-relaxed">
                      NeuroBots detects and mitigates authorization abuses in real time using a combination of behavioral models, graph analysis (NetworkX), Markov chains, and LangChain-assisted threat summarization. It protects sensitive personal and financial assets while maintaining low latency and avoiding false positives against legitimate users.
                    </p>
                  </div>
                </div>

                {/* Tech stack - compact monospace list */}
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-black/50 mb-3">
                    Stack
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
                    {neuroBotsTech.map((item, idx) => (
                      <div key={idx} className="flex gap-2 py-1 border-b border-black/10 last:border-0">
                        <span className="font-mono text-xs font-black text-black/50 uppercase shrink-0 w-32">
                          {item.label}
                        </span>
                        <span className="font-mono text-xs text-black">
                          {item.tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Secondary Project: PROJ0 - minimal */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-4 border-b-2 border-black/20">
              <div>
                <h3 className="font-display font-extrabold text-lg uppercase tracking-tight text-black">
                  proj0
                </h3>
                <p className="font-body text-sm text-black/70 mt-0.5">
                  Initial public scratchpad repository for code experimentation and toolchain testing.
                </p>
              </div>
              <a
                href="https://github.com/mlwn4096/proj0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-sm font-bold text-black hover:text-neo-accent transition-colors shrink-0"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>View repo</span>
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
