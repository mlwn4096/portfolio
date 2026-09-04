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

  const secondaryProjects = [
    {
      title: 'PRAX Web Platform',
      category: 'COMMUNITY & WORKFLOW PLATFORM',
      headerBg: 'bg-neo-muted',
      description: 'Digital platform supporting the PRAX community with member progression models, project and challenge tracks, mentorship engagement, and experience documentation.',
      tags: ['Web Platform', 'Community Architecture', 'UI/UX', 'Workflow Automation'],
      link: 'https://github.com/mlwn4096',
      linkLabel: 'CONTRIBUTION REPO',
    },
    {
      title: 'Personal Developer Hub & CLI',
      category: 'FULL-STACK NODE.JS APPLICATION',
      headerBg: 'bg-neo-secondary',
      description: 'Production portfolio web application featuring an interactive in-browser CLI console, REST JSON resume endpoints, direct ATS CV download API, and telemetry monitoring.',
      tags: ['Node.js', 'Express', 'JavaScript', 'REST API', 'Terminal Aesthetics'],
      link: 'https://github.com/mlwn4096/portfolio',
      linkLabel: 'SOURCE CODE',
    },
    {
      title: 'AI-Assisted Development Toolchains',
      category: 'AI & PRODUCTIVITY INFRASTRUCTURE',
      headerBg: 'bg-neo-accent text-white',
      description: 'Automated bash shell scripting, prompt workflows, and Linux command-line productivity pipelines designed to accelerate full-stack development and testing cycles.',
      tags: ['AI Pipelines', 'Bash Scripting', 'Linux', 'Developer Tooling'],
      link: 'https://github.com/mlwn4096',
      linkLabel: 'EXPLORE TOOLCHAINS',
    },
    {
      title: 'proj0',
      category: 'PROTOTYPING & SANDBOX',
      headerBg: 'bg-white',
      description: 'Melwin\'s initial public scratchpad repository for systems experimentation, toolchain testing, and rapid code exploration.',
      tags: ['Experimental', 'Prototyping', 'Git Workflow'],
      link: 'https://github.com/mlwn4096/proj0',
      linkLabel: 'VIEW REPO',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 border-b-4 border-black bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-block border-3 border-black bg-neo-secondary px-3 py-1 text-xs font-black uppercase tracking-widest text-black shadow-neo-sm -rotate-1 mb-4">
              ENGINEERING CATALOGUE
            </div>
            <h2 className="font-black text-6xl sm:text-7xl md:text-8xl uppercase tracking-tighter text-black leading-none">
              PROJECTS
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowSkeleton(!showSkeleton)}
              className="px-3.5 py-1.5 border-3 border-black bg-white font-black text-xs uppercase tracking-wider text-black shadow-neo-sm hover:bg-neo-secondary transition-all neo-press"
              title="Toggle skeleton loader inspection"
            >
              {showSkeleton ? 'SHOW REPOSITORIES' : 'PREVIEW SKELETON LOADER'}
            </button>
            <a
              href="https://github.com/mlwn4096"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 border-3 border-black bg-black text-white font-black text-xs uppercase tracking-wider shadow-neo-sm hover:bg-neo-accent transition-all neo-press"
            >
              <GitHubIcon className="w-4 h-4 text-white" />
              <span>GITHUB @MLWN4096</span>
            </a>
          </div>
        </div>

        {/* Skeleton Loader Mode */}
        {showSkeleton ? (
          <div className="border-4 border-black bg-white p-8 shadow-neo-xl space-y-6 animate-pulse" aria-label="Loading repository details">
            <div className="h-10 bg-neo-secondary/60 w-1/3 border-3 border-black" />
            <div className="h-5 bg-black/15 w-3/4 border-2 border-black" />
            <div className="h-5 bg-black/15 w-1/2 border-2 border-black" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="h-32 bg-black/5 border-3 border-black p-4" />
              <div className="h-32 bg-black/5 border-3 border-black p-4" />
            </div>
            <div className="h-12 bg-neo-accent/50 w-52 border-3 border-black" />
          </div>
        ) : (
          <div className="space-y-12">

            {/* Primary Project: NEUROBOTS */}
            <div className="border-4 border-black bg-white shadow-neo-xl overflow-hidden group">

              {/* Bold colored header bar */}
              <div className="border-b-4 border-black bg-neo-secondary p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 border-3 border-black bg-white shadow-neo-sm">
                    <ShieldLockIcon className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/70 block">
                      FEATURED SYSTEM • ZERO TRUST
                    </span>
                    <h3 className="font-black text-2xl sm:text-3xl uppercase tracking-tight text-black">
                      NEUROBOTS
                    </h3>
                  </div>
                </div>
                <a
                  href="https://github.com/mlwn4096/NeuroBots"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border-3 border-black bg-black text-white font-black text-xs uppercase tracking-wider shadow-neo-sm hover:bg-neo-accent transition-all neo-press self-start"
                >
                  <span>SOURCE REPO</span>
                  <ArrowUpRightIcon className="w-4 h-4 text-white" />
                </a>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 space-y-6">

                {/* Subtitle */}
                <div className="border-3 border-black bg-[#FFFDF5] p-4 shadow-neo-sm">
                  <p className="font-black text-base sm:text-lg uppercase text-black leading-snug">
                    Zero Trust API Security Intelligence and Autonomous Authorization Protection Platform
                  </p>
                </div>

                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="border-3 border-black bg-white p-5 shadow-neo-sm">
                    <h4 className="font-black text-xs uppercase tracking-widest text-neo-accent mb-2">
                      THE THREAT LANDSCAPE
                    </h4>
                    <p className="text-sm font-bold text-black/85 leading-relaxed">
                      API authorization attacks like Broken Object Level Authorization (BOLA) and Broken Function Level Authorization (BFLA) are among the leading causes of modern API breaches. Because malicious requests originate from valid, authenticated sessions with well-formed syntax, traditional signature-based web firewalls treat them as legitimate traffic and let them through undetected.
                    </p>
                  </div>

                  <div className="border-3 border-black bg-white p-5 shadow-neo-sm">
                    <h4 className="font-black text-xs uppercase tracking-widest text-black mb-2">
                      AUTONOMOUS DEFENSE MECHANISM
                    </h4>
                    <p className="text-sm font-bold text-black/85 leading-relaxed">
                      NeuroBots detects and mitigates authorization abuses in real time using behavioral modeling, graph analysis (NetworkX), Markov chains, and LangChain-assisted threat summarization. It protects sensitive assets while maintaining low latency and zero false positives against legitimate users.
                    </p>
                  </div>
                </div>

                {/* Tech stack grid */}
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest text-black/60 mb-3">
                    COMPREHENSIVE TECHNOLOGY STACK
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {neuroBotsTech.map((item, idx) => (
                      <div key={idx} className="flex gap-2 p-2 border-2 border-black bg-[#FFFDF5]">
                        <span className="font-mono text-xs font-black text-black/60 uppercase shrink-0 w-36">
                          {item.label}
                        </span>
                        <span className="font-mono text-xs font-bold text-black">
                          {item.tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Secondary Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {secondaryProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="border-4 border-black bg-white shadow-neo-lg flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-neo-xl transition-all duration-200"
                >
                  {/* Card Header Bar */}
                  <div className={`border-b-4 border-black ${project.headerBg} p-5 flex items-center justify-between`}>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest block opacity-80">
                        {project.category}
                      </span>
                      <h4 className="font-black text-xl uppercase tracking-tight">
                        {project.title}
                      </h4>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <p className="text-sm font-bold text-black/85 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-4">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="border-2 border-black bg-[#FFFDF5] px-2.5 py-0.5 text-[11px] font-black uppercase text-black"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Link */}
                      <div className="pt-2 border-t-2 border-black/10">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-between w-full p-2.5 border-3 border-black bg-black text-white font-black text-xs uppercase tracking-wider shadow-neo-sm hover:bg-neo-accent transition-all neo-press"
                        >
                          <span>{project.linkLabel}</span>
                          <ArrowUpRightIcon className="w-4 h-4 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
