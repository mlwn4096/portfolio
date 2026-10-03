/**
 * Light Table Advanced Features Module
 * Implements:
 * 1. Raycast / Spotlight Command Palette (Cmd+K / Ctrl+K)
 * 2. Autonomous Guided Tour Agent (MLWN-PILOT)
 * 3. Interactive Project Architecture Drawers (4-Step Telemetry State Machines)
 * 4. In-Browser Interactive CV Modal with Multi-Format Export (.md, .txt, print, pdf)
 * 5. 60-FPS Scrub & Mask Reveal Hero Persona
 * 6. Frontier Research Monograph Reader ("Deterministic Agent Workflows", Sep 2026)
 * 7. One-Click Instant Clipboard Copy with Micro-Feedback
 * 8. Hackathon & Technical Milestones Timeline
 */

(() => {
  // Utility: Show Toast Notification
  function showToast(message) {
    let toast = document.querySelector('.lt-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'lt-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 2500);
  }

  // Utility: Copy to Clipboard
  function copyEmail() {
    const email = 'melwinsanthoah4096@gmail.com';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        showToast(`✓ COPIED TO CLIPBOARD: ${email}`);
      }).catch(() => fallbackCopy(email));
    } else {
      fallbackCopy(email);
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast(`✓ COPIED TO CLIPBOARD: ${text}`);
  }

  // --- 1. MODAL MANAGER ---
  let activeModal = null;
  function openModal(id) {
    closeModal();
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add('active');
    activeModal = modal;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (activeModal) {
      activeModal.classList.remove('active');
      activeModal = null;
      document.body.style.overflow = '';
    }
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (isTourActive) {
        stopTour();
      } else {
        closeModal();
      }
    }
  });

  // --- 2. COMMAND PALETTE (CMD+K / CTRL+K) ---
  const commands = [
    // Navigation
    { category: 'NAVIGATION', title: '01. HERO // APERTURE', sub: 'Calibrated portrait frame & intro', key: '0', action: () => scrollToSection('#portfolio-main') },
    { category: 'NAVIGATION', title: '02. ABOUT // ARCHITECTURAL MANIFESTO', sub: 'SJCET Palai background & core competencies', key: '1', action: () => scrollToSection('#about') },
    { category: 'NAVIGATION', title: '03. PRAX // PLATFORM ARCHITECTURE', sub: 'Invite-only learning initiative & systems', key: '2', action: () => scrollToSection('#prax') },
    { category: 'NAVIGATION', title: '04. EXPERIENCE // TIMELINE & HACKATHONS', sub: 'Roles, CET Incepta, MBCET HashItUp, SJCET', key: '3', action: () => scrollToSection('#experience') },
    { category: 'NAVIGATION', title: '05. WORK // PRODUCTION SYSTEMS', sub: 'Engineered platforms and toolchains', key: '4', action: () => scrollToSection('#projects') },
    { category: 'NAVIGATION', title: '06. CONTACT // DIRECT SIGNAL', sub: 'Inbound message routing & communication', key: '5', action: () => scrollToSection('#contact') },

    // Architecture Drawers
    { category: 'ARCHITECTURE', title: 'PRAX WEB PLATFORM', sub: 'Multi-tenant progression engine & challenge graph', tag: 'INVITE-ONLY', key: 'P', action: () => openDrawer('prax') },
    { category: 'ARCHITECTURE', title: 'AI-ASSISTED DEVELOPMENT TOOLCHAINS', sub: 'Sub-second AST linting & deterministic execution', tag: 'SUB-SECOND', key: 'A', action: () => openDrawer('ai') },
    { category: 'ARCHITECTURE', title: 'PERSONAL DEVELOPER HUB & ENGINE', sub: 'Zero-failover Express asset routing & Light Table HUD', tag: 'LIGHT TABLE', key: 'H', action: () => openDrawer('hub') },

    // Research
    { category: 'RESEARCH', title: 'MONOGRAPH // DETERMINISTIC AGENT WORKFLOWS', sub: 'Empirical study on autonomous loops & mentorship telemetry', tag: 'SEP 2026', key: 'R', action: () => openResearchMonograph() },

    // Actions
    { category: 'ACTIONS', title: 'LAUNCH AUTONOMOUS TOUR (MLWN-PILOT)', sub: 'Simulated AI co-pilot navigates the portfolio', tag: 'AUTOPILOT', key: 'T', action: () => startTour() },
    { category: 'ACTIONS', title: 'VIEW INTERACTIVE CV MODAL', sub: 'In-browser dossier with Markdown & ASCII export', tag: 'VIEWER', key: 'C', action: () => openCVModal() },
    { category: 'ACTIONS', title: 'DOWNLOAD OFFICIAL CV [PDF]', sub: 'Direct attachment download (Melwin_Santhosh_CV.pdf)', tag: 'PDF', key: 'D', action: () => { window.location.href = '/api/cv'; } },
    { category: 'ACTIONS', title: 'COPY DIRECT SIGNAL EMAIL', sub: 'melwinsanthoah4096@gmail.com (Instant clipboard copy)', tag: 'CLIPBOARD', key: 'E', action: () => copyEmail() },
    { category: 'ACTIONS', title: 'INITIATE DIRECT SIGNAL [MAILTO]', sub: 'Pre-formatted mail client composer', tag: 'MAILTO', key: 'M', action: () => { window.location.href = 'mailto:melwinsanthoah4096@gmail.com?subject=Direct%20Signal%20-%20Engineering%20Collaboration'; } }
  ];

  function scrollToSection(selector) {
    closeModal();
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function initCommandPalette() {
    const backdrop = document.createElement('div');
    backdrop.id = 'lt-palette-modal';
    backdrop.className = 'lt-modal-backdrop';
    backdrop.onclick = (e) => { if (e.target === backdrop) closeModal(); };

    backdrop.innerHTML = `
      <div class="lt-palette" role="dialog" aria-modal="true" aria-label="Command Palette">
        <div class="lt-palette-header">
          <svg class="lt-palette-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" class="lt-palette-input" placeholder="Type a command or jump to section... (Press Esc to exit)" autocomplete="off" spellcheck="false" />
          <span class="lt-palette-badge">ESC</span>
        </div>
        <ul class="lt-palette-results"></ul>
        <div class="lt-palette-footer">
          <span>Navigation: <kbd class="lt-palette-key">↑</kbd> <kbd class="lt-palette-key">↓</kbd> to select</span>
          <span>Execute: <kbd class="lt-palette-key">↵ Enter</kbd></span>
          <span>Quick: <kbd class="lt-palette-key">T</kbd> Tour · <kbd class="lt-palette-key">C</kbd> CV · <kbd class="lt-palette-key">R</kbd> Research</span>
        </div>
      </div>
    `;
    document.body.appendChild(backdrop);

    const input = backdrop.querySelector('.lt-palette-input');
    const resultsContainer = backdrop.querySelector('.lt-palette-results');
    let selectedIdx = 0;
    let filteredCommands = [...commands];

    function renderResults() {
      resultsContainer.innerHTML = '';
      if (filteredCommands.length === 0) {
        resultsContainer.innerHTML = `<li style="padding: 1.5rem; text-align: center; color: #71717A; font-family: 'IBM Plex Mono', monospace; font-size: 0.8rem;">No matching commands found.</li>`;
        return;
      }

      let currentCat = '';
      filteredCommands.forEach((cmd, idx) => {
        if (cmd.category !== currentCat) {
          currentCat = cmd.category;
          const catHeader = document.createElement('li');
          catHeader.className = 'lt-palette-category';
          catHeader.textContent = currentCat;
          resultsContainer.appendChild(catHeader);
        }

        const item = document.createElement('li');
        item.className = `lt-palette-item ${idx === selectedIdx ? 'selected' : ''}`;
        item.innerHTML = `
          <div class="lt-palette-item-left">
            <div>
              <span class="lt-palette-item-title">${cmd.title}</span>
              <span class="lt-palette-item-sub">${cmd.sub}</span>
            </div>
          </div>
          <div class="lt-palette-item-right">
            ${cmd.tag ? `<span class="lt-palette-tag">${cmd.tag}</span>` : ''}
            ${cmd.key ? `<span class="lt-palette-key">${cmd.key}</span>` : ''}
          </div>
        `;
        item.onclick = () => { cmd.action(); closeModal(); };
        resultsContainer.appendChild(item);
      });

      const selectedEl = resultsContainer.querySelector('.lt-palette-item.selected');
      if (selectedEl) selectedEl.scrollIntoView({ block: 'nearest' });
    }

    input.addEventListener('input', () => {
      const q = input.value.toLowerCase().trim();
      filteredCommands = commands.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.sub.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        (c.key && c.key.toLowerCase() === q)
      );
      selectedIdx = 0;
      renderResults();
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIdx = (selectedIdx + 1) % Math.max(1, filteredCommands.length);
        renderResults();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIdx = (selectedIdx - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length);
        renderResults();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIdx]) {
          filteredCommands[selectedIdx].action();
          closeModal();
        }
      }
    });

    // Global Key Listener for Cmd+K / Ctrl+K
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (activeModal === backdrop) {
          closeModal();
        } else {
          openModal('lt-palette-modal');
          input.value = '';
          filteredCommands = [...commands];
          selectedIdx = 0;
          renderResults();
          setTimeout(() => input.focus(), 50);
        }
      }
    });
  }

  // --- 3. AUTONOMOUS AI GUIDED TOUR (MLWN-PILOT) ---
  let isTourActive = false;
  let currentTourStep = 0;
  let tourPaused = false;

  const tourSteps = [
    {
      target: '.lt-portrait',
      badge: '01 // APERTURE IDENTITY',
      status: 'INSPECTING PORTRAIT HUD',
      briefing: "Welcome to Melwin Santhosh's engineering space. Note the calibrated portrait frame and aperture grid — an editorial Light Table aesthetic designed for high-signal engineering communication."
    },
    {
      target: '#about',
      badge: '02 // ACADEMIC & BUILDER MANIFESTO',
      status: 'VERIFYING CREDENTIALS',
      briefing: "Integrated MCA scholar at St. Joseph's College of Engineering and Technology (SJCET), Palai (2025–2030). Exploring the frontier of deterministic automation, AI toolchains, and Linux environments."
    },
    {
      target: '#prax',
      badge: '03 // PRAX PLATFORM ARCHITECTURE',
      status: 'ANALYZING PROGRESSION DAG',
      briefing: "At PRAX (Vantcrest Labs Pvt. Ltd.), Melwin contributes to invite-only professional learning modules, challenge progression tracks, and automated mentorship workflows."
    },
    {
      target: '#projects',
      badge: '04 // PRODUCTION SYSTEMS',
      status: 'INSPECTING CODEBASES',
      briefing: "From AI-assisted shell pipelines to fail-safe Node.js web engines, his focus is reproducible, high-contrast systems with zero runtime failure modes."
    },
    {
      target: '#contact',
      badge: '05 // HANDOVER & TELEMETRY',
      status: 'DISENGAGING AUTOPILOT',
      briefing: "Tour complete! You now have full manual control. View his interactive CV, inspect project architecture drawers, or fire a direct signal to collaborate!"
    }
  ];

  function initTourComponents() {
    // Virtual Cursor
    const cursor = document.createElement('div');
    cursor.className = 'lt-agent-cursor';
    cursor.innerHTML = `
      <div class="lt-agent-ping"></div>
      <div class="lt-agent-dot"></div>
    `;
    document.body.appendChild(cursor);

    // Agent HUD
    const hud = document.createElement('div');
    hud.className = 'lt-agent-hud';
    hud.innerHTML = `
      <div class="lt-agent-hud-header">
        <span class="lt-agent-badge">
          <span class="lt-agent-badge-pulse"></span>
          MLWN-PILOT [AUTONOMOUS TOUR]
        </span>
        <span class="lt-agent-status">INSPECTING</span>
      </div>
      <div class="lt-agent-briefing"></div>
      <div class="lt-agent-controls">
        <span>Step <span class="lt-step-curr">1</span> of ${tourSteps.length} · Space to Pause</span>
        <div class="lt-agent-btn-group">
          <button class="lt-agent-btn" id="lt-tour-prev">← Prev</button>
          <button class="lt-agent-btn" id="lt-tour-next">Next →</button>
          <button class="lt-agent-btn" id="lt-tour-exit">Exit</button>
        </div>
      </div>
    `;
    document.body.appendChild(hud);

    document.getElementById('lt-tour-prev').onclick = prevTourStep;
    document.getElementById('lt-tour-next').onclick = nextTourStep;
    document.getElementById('lt-tour-exit').onclick = stopTour;

    window.addEventListener('keydown', (e) => {
      if (!isTourActive) return;
      if (e.code === 'Space') {
        e.preventDefault();
        tourPaused = !tourPaused;
        showToast(tourPaused ? '⏸ Tour Paused' : '▶ Tour Resumed');
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextTourStep();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevTourStep();
      }
    });
  }

  function startTour() {
    closeModal();
    isTourActive = true;
    currentTourStep = 0;
    tourPaused = false;
    document.querySelector('.lt-agent-cursor').classList.add('active');
    document.querySelector('.lt-agent-hud').classList.add('active');
    renderTourStep();
  }

  function stopTour() {
    isTourActive = false;
    document.querySelector('.lt-agent-cursor').classList.remove('active');
    document.querySelector('.lt-agent-hud').classList.remove('active');
    showToast('Autonomous Tour Completed. Manual control restored.');
  }

  function nextTourStep() {
    if (currentTourStep < tourSteps.length - 1) {
      currentTourStep++;
      renderTourStep();
    } else {
      stopTour();
    }
  }

  function prevTourStep() {
    if (currentTourStep > 0) {
      currentTourStep--;
      renderTourStep();
    }
  }

  function renderTourStep() {
    const step = tourSteps[currentTourStep];
    const targetEl = document.querySelector(step.target);
    const cursor = document.querySelector('.lt-agent-cursor');
    const hud = document.querySelector('.lt-agent-hud');

    hud.querySelector('.lt-agent-status').textContent = step.status;
    hud.querySelector('.lt-agent-briefing').textContent = step.briefing;
    hud.querySelector('.lt-step-curr').textContent = currentTourStep + 1;

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        const rect = targetEl.getBoundingClientRect();
        cursor.style.left = `${rect.left + rect.width / 2}px`;
        cursor.style.top = `${rect.top + rect.height / 2}px`;
      }, 350);
    }
  }

  // --- 4. PROJECT ARCHITECTURE DRAWERS ---
  const drawerData = {
    prax: {
      title: 'PRAX Web Platform',
      sub: 'Invite-Only Progression Engine & Member Architecture (Vantcrest Labs)',
      overview: 'Digital infrastructure powering continuous professional learning, verifiable project challenges, and peer mentorship networks.',
      metrics: [
        { label: 'Latency P95', val: '<120ms' },
        { label: 'Security Gate', val: 'Invite Token' },
        { label: 'Architecture', val: 'Event-Driven' }
      ],
      steps: [
        { num: '01', title: 'INGRESS & AUTH', desc: 'Validates invite-only member tokens, session integrity, and assigns permission tiers.' },
        { num: '02', title: 'PROGRESSION ENGINE', desc: 'Evaluates member task submissions against deterministic challenge rubrics and track gates.' },
        { num: '03', title: 'MENTORSHIP MATRIX', desc: 'Coordinates real-time collaborative code reviews and structured feedback telemetry.' },
        { num: '04', title: 'OPPORTUNITY PIPELINE', desc: 'Assembles verified member dossiers and routes qualified builders to enterprise tracks.' }
      ]
    },
    ai: {
      title: 'AI-Assisted Development Toolchains',
      sub: 'Sub-Second AST Linting & Deterministic Linux Productivity Pipelines',
      overview: 'High-throughput POSIX shell workflows and LLM prompt execution pipelines engineered for reproducible developer productivity.',
      metrics: [
        { label: 'Cycle Time', val: '<450ms' },
        { label: 'Guardrail', val: 'POSIX Lint' },
        { label: 'Environment', val: 'Linux / Bash' }
      ],
      steps: [
        { num: '01', title: 'PROMPT & SCRIPT INTAKE', desc: 'Captures terminal inputs, AST patterns, and file context into structured staging buffers.' },
        { num: '02', title: 'STATIC PRE-CHECKS', desc: 'Enforces deterministic syntax verification and rule checks before sending to LLMs.' },
        { num: '03', title: 'AGENT CONTEXT DISPATCH', desc: 'Dispatches bounded prompts with strict JSON schemas and system-level constraints.' },
        { num: '04', title: 'TERMINAL VERIFICATION', desc: 'Executes generated scripts in isolated sandboxes and audits exit codes in real time.' }
      ]
    },
    hub: {
      title: 'Personal Developer Hub & Engine',
      sub: 'High-Performance Node.js & Express Portfolio Architecture',
      overview: 'Zero-failover portfolio runtime serving the Light Table design system with integrated terminal simulation and REST resume APIs.',
      metrics: [
        { label: 'Uptime', val: '100%' },
        { label: 'MIME Protection', val: 'Fail-Safe' },
        { label: 'Design System', val: 'Light Table' }
      ],
      steps: [
        { num: '01', title: 'EDGE INGRESS', desc: 'Handles CORS, security headers, and enforces aggressive immutable caching for static assets.' },
        { num: '02', title: 'MIME ASSET RESOLVER', desc: 'Safeguards bundle integrity by serving canonical JS/CSS fallbacks rather than crashing on missing chunks.' },
        { num: '03', title: 'REST RESUME APIS', desc: 'Delivers structured JSON CV data (/api/info) and sends direct attachment headers for PDF downloads.' },
        { num: '04', title: 'LIGHT TABLE DOM', desc: 'Renders high-contrast typography, interactive SVG section rulers, and reactive state machine drawers.' }
      ]
    }
  };

  function initArchitectureDrawer() {
    const backdrop = document.createElement('div');
    backdrop.id = 'lt-drawer-modal';
    backdrop.className = 'lt-modal-backdrop';
    backdrop.onclick = (e) => { if (e.target === backdrop) closeModal(); };

    backdrop.innerHTML = `
      <div class="lt-drawer-content" role="dialog" aria-modal="true">
        <div class="lt-drawer-header">
          <div>
            <h2 class="lt-drawer-title"></h2>
            <div class="lt-drawer-sub"></div>
          </div>
          <button class="lt-agent-btn" onclick="document.getElementById('lt-drawer-modal').classList.remove('active')">Close (Esc)</button>
        </div>
        <p class="lt-drawer-overview" style="font-size: 0.95rem; color: #27272A; line-height: 1.6;"></p>
        <div class="lt-drawer-metrics" style="display: flex; gap: 1.5rem; margin: 1.2rem 0; padding: 0.8rem 1rem; background: #EEF1F3; border: 1px solid #18181B; font-family: 'IBM Plex Mono', monospace; font-size: 0.8rem;"></div>
        <h3 style="font-family: 'IBM Plex Mono', monospace; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; margin-top: 1.5rem; border-bottom: 1px dashed #A1A1AA; padding-bottom: 0.4rem;">Deterministic State Machine Telemetry</h3>
        <div class="lt-state-machine"></div>
      </div>
    `;
    document.body.appendChild(backdrop);
  }

  function openDrawer(key) {
    const data = drawerData[key];
    if (!data) return;
    const modal = document.getElementById('lt-drawer-modal');
    modal.querySelector('.lt-drawer-title').textContent = data.title;
    modal.querySelector('.lt-drawer-sub').textContent = data.sub;
    modal.querySelector('.lt-drawer-overview').textContent = data.overview;

    const metricsContainer = modal.querySelector('.lt-drawer-metrics');
    metricsContainer.innerHTML = data.metrics.map(m => `
      <div>
        <span style="color: #71717A; display: block; font-size: 0.7rem;">${m.label}</span>
        <strong style="color: #0284C7; font-size: 0.9rem;">${m.val}</strong>
      </div>
    `).join('');

    const stateContainer = modal.querySelector('.lt-state-machine');
    stateContainer.innerHTML = data.steps.map(s => `
      <div class="lt-state-step">
        <span class="lt-state-step-num">STAGE ${s.num}</span>
        <div class="lt-state-step-title">${s.title}</div>
        <div class="lt-state-step-desc">${s.desc}</div>
      </div>
    `).join('');

    openModal('lt-drawer-modal');
  }

  // --- 5. IN-BROWSER INTERACTIVE CV MODAL ---
  function initCVModal() {
    const backdrop = document.createElement('div');
    backdrop.id = 'lt-cv-modal';
    backdrop.className = 'lt-modal-backdrop';
    backdrop.onclick = (e) => { if (e.target === backdrop) closeModal(); };

    backdrop.innerHTML = `
      <div class="lt-cv-modal" role="dialog" aria-modal="true">
        <div class="lt-cv-toolbar">
          <span>CURRICULUM VITAE // MELWIN SANTHOSH</span>
          <div style="display: flex; gap: 0.5rem;">
            <button class="lt-agent-btn" id="lt-cv-print">Print / PDF</button>
            <button class="lt-agent-btn" id="lt-cv-md">Download .MD</button>
            <button class="lt-agent-btn" id="lt-cv-txt">Download .TXT</button>
            <button class="lt-agent-btn" id="lt-cv-pdf">Download Official PDF</button>
            <button class="lt-agent-btn" onclick="document.getElementById('lt-cv-modal').classList.remove('active')">✕</button>
          </div>
        </div>
        <div class="lt-cv-body">
          <header style="border-bottom: 2px solid #18181B; padding-bottom: 1.5rem; margin-bottom: 1.5rem;">
            <h1 style="font-family: 'Newsreader', Georgia, serif; font-size: 2.2rem; font-weight: 700; margin: 0;">MELWIN SANTHOSH</h1>
            <p style="font-family: 'IBM Plex Mono', monospace; font-size: 0.85rem; color: #0284C7; margin: 0.4rem 0;">Integrated MCA Student | AI × Systems Architecture</p>
            <div style="font-family: 'IBM Plex Mono', monospace; font-size: 0.75rem; color: #52525B;">
              Palai, Kerala, India · melwinsanthoah4096@gmail.com · github.com/mlwn4096 · linkedin.com/in/melwin-santhosh-784550378
            </div>
          </header>

          <section style="margin-bottom: 1.5rem;">
            <h3 style="font-family: 'IBM Plex Mono', monospace; font-size: 0.85rem; font-weight: 700; border-bottom: 1px solid #18181B; padding-bottom: 0.3rem;">EDUCATION</h3>
            <div style="margin-top: 0.6rem;">
              <strong>Integrated Master of Computer Applications (MCA)</strong> | 2025–2030<br/>
              <em>St. Joseph's College of Engineering and Technology (SJCET), Palai</em><br/>
              Specialization: Artificial Intelligence, Distributed Systems, Software Engineering
            </div>
            <div style="margin-top: 0.6rem;">
              <strong>Class XII (CBSE)</strong> — SKPS, Kaduthuruthy (2025)<br/>
              <strong>Class X (CBSE)</strong> — SKPS, Kaduthuruthy (2023)
            </div>
          </section>

          <section style="margin-bottom: 1.5rem;">
            <h3 style="font-family: 'IBM Plex Mono', monospace; font-size: 0.85rem; font-weight: 700; border-bottom: 1px solid #18181B; padding-bottom: 0.3rem;">EXPERIENCE</h3>
            <div style="margin-top: 0.6rem;">
              <strong>Platform Contributor</strong> — PRAX (Vantcrest Labs Pvt. Ltd.) | 2026–Present
              <ul style="margin: 0.4rem 0 0 1.2rem; font-size: 0.88rem; line-height: 1.5;">
                <li>Contributing to an invite-only professional learning and collaborative execution platform.</li>
                <li>Developing modular progression engines, challenge validation pipelines, and peer review matrices.</li>
                <li>Exploring bridges between practical project execution and enterprise opportunities.</li>
              </ul>
            </div>
          </section>

          <section style="margin-bottom: 1.5rem;">
            <h3 style="font-family: 'IBM Plex Mono', monospace; font-size: 0.85rem; font-weight: 700; border-bottom: 1px solid #18181B; padding-bottom: 0.3rem;">PROJECTS</h3>
            <div style="margin-top: 0.6rem;">
              <strong>1. PRAX Web Platform Architecture</strong><br/>
              <span style="font-size: 0.88rem;">Digital platform managing invite-only member tracks, automated challenge gates, and mentorship feedback loops.</span>
            </div>
            <div style="margin-top: 0.6rem;">
              <strong>2. Personal Developer Hub & Engine</strong><br/>
              <span style="font-size: 0.88rem;">Production Node.js web server with interactive terminal simulator and Light Table paper aesthetic.</span>
            </div>
            <div style="margin-top: 0.6rem;">
              <strong>3. AI-Assisted Development Toolchains</strong><br/>
              <span style="font-size: 0.88rem;">Reproducible POSIX shell automation pipelines with AST code linting and deterministic prompt execution.</span>
            </div>
          </section>

          <section style="margin-bottom: 1.5rem;">
            <h3 style="font-family: 'IBM Plex Mono', monospace; font-size: 0.85rem; font-weight: 700; border-bottom: 1px solid #18181B; padding-bottom: 0.3rem;">TECHNICAL SKILLS</h3>
            <div style="font-size: 0.88rem; margin-top: 0.6rem; line-height: 1.6;">
              <strong>Languages & Web:</strong> JavaScript, Node.js, Express, Python, C, HTML5, CSS3, REST APIs<br/>
              <strong>Systems & Tools:</strong> Linux (Fedora, Mint), Bash CLI, Git, GitHub, Vim, System Tuning<br/>
              <strong>AI & Automation:</strong> Agentic Workflows, Prompt Engineering, Deterministic State Machines
            </div>
          </section>
        </div>
      </div>
    `;
    document.body.appendChild(backdrop);

    document.getElementById('lt-cv-print').onclick = () => window.print();
    document.getElementById('lt-cv-pdf').onclick = () => { window.location.href = '/api/cv'; };

    document.getElementById('lt-cv-md').onclick = () => {
      fetch('/llms.txt').then(r => r.text()).then(text => {
        const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'Melwin_Santhosh_CV.md';
        a.click();
      });
    };

    document.getElementById('lt-cv-txt').onclick = () => {
      fetch('/cv.txt').then(r => r.text()).then(text => {
        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'Melwin_Santhosh_CV.txt';
        a.click();
      });
    };
  }

  function openCVModal() {
    openModal('lt-cv-modal');
  }

  // --- 6. FRONTIER RESEARCH MONOGRAPH READER ---
  function initResearchMonograph() {
    const backdrop = document.createElement('div');
    backdrop.id = 'lt-research-modal';
    backdrop.className = 'lt-modal-backdrop';
    backdrop.onclick = (e) => { if (e.target === backdrop) closeModal(); };

    backdrop.innerHTML = `
      <div class="lt-research-modal" role="dialog" aria-modal="true">
        <div class="lt-research-progress"></div>
        <div class="lt-cv-toolbar">
          <span>RESEARCH MONOGRAPH // DETERMINISTIC AGENT WORKFLOWS</span>
          <div style="display: flex; gap: 0.5rem;">
            <button class="lt-agent-btn" id="lt-research-print">Print / PDF</button>
            <button class="lt-agent-btn" id="lt-research-md">Download .MD</button>
            <button class="lt-agent-btn" id="lt-research-copy">Copy Link</button>
            <button class="lt-agent-btn" onclick="document.getElementById('lt-research-modal').classList.remove('active')">✕</button>
          </div>
        </div>
        <div class="lt-research-content">
          <aside class="lt-research-sidebar">
            <div style="font-weight: 700; margin-bottom: 0.8rem; color: #18181B;">TABLE OF CONTENTS</div>
            <ul style="list-style: none; padding: 0; margin: 0; line-height: 1.8;">
              <li><a href="#mono-1" style="color: #0284C7; text-decoration: none;">1. The Hype vs. Delivery Gap</a></li>
              <li><a href="#mono-2" style="color: #52525B; text-decoration: none;">2. Why Freeform Prompts Fail</a></li>
              <li><a href="#mono-3" style="color: #52525B; text-decoration: none;">3. Deterministic State Machines</a></li>
              <li><a href="#mono-4" style="color: #52525B; text-decoration: none;">4. Human-in-the-Loop Gates</a></li>
              <li><a href="#mono-5" style="color: #52525B; text-decoration: none;">5. AST Guardrails in CLI</a></li>
              <li><a href="#mono-6" style="color: #52525B; text-decoration: none;">6. Architecture at PRAX</a></li>
              <li><a href="#mono-7" style="color: #52525B; text-decoration: none;">7. Conclusion & Frontier</a></li>
            </ul>
          </aside>
          <main class="lt-research-main">
            <h1 style="font-size: 2.2rem; font-weight: 700; margin-top: 0;">Deterministic Agent Workflows & Human-in-the-Loop Collaboration</h1>
            <p style="font-family: 'IBM Plex Mono', monospace; font-size: 0.85rem; color: #71717A;">Melwin Santhosh · September 2026 · Vantcrest Labs / SJCET Research Note</p>
            <hr style="border: 0; border-top: 1px solid #18181B; margin: 1.5rem 0;" />

            <h2 id="mono-1">1. The Gap Between AI Hype and Production Delivery</h2>
            <p>While the AI ecosystem frequently celebrates fully autonomous, self-directing agents, production experience reveals an uncomfortable truth: unbounded non-deterministic LLM loops degrade rapidly when exposed to real-world software constraints. Hallucinated parameters, broken API contracts, and unverified file modifications inevitably cause systemic failure.</p>

            <h2 id="mono-2">2. Why Freeform Prompts Fail</h2>
            <p>Prompt engineering alone cannot guarantee system invariants. When agents are tasked with code generation or infrastructure modification without rigid state transitions, error compounding leads to combinatorial failures. The challenge is not increasing LLM reasoning parameters, but constructing deterministic harness boundaries around probabilistic execution.</p>

            <h2 id="mono-3">3. Deterministic State Machines vs. Probabilistic Drift</h2>
            <p>At PRAX, our architectural thesis enforces state transitions governed by deterministic DAGs (Directed Acyclic Graphs). An agent or pipeline never executes arbitrary commands; rather, every step requires an explicit ingress check, schema validation, and verified pre-execution guardrail.</p>

            <h2 id="mono-4">4. Human-in-the-Loop Gatekeeping & Mentorship Validation</h2>
            <p>Automated evaluation engines must not operate in isolation. By integrating human mentorship checkpoints into challenge validation pipelines, we retain high-signal review while delegating repetitive evaluation, syntax linting, and boilerplate scaffolding to automated agents.</p>

            <h2 id="mono-5">5. AST Guardrails in POSIX CLI Toolchains</h2>
            <p>Integrating sub-millisecond AST sanitization into developer shells allows developers to harness generative AI assistance without risking accidental environment destruction or security compromise.</p>

            <h2 id="mono-6">6. Architecture at PRAX: Designing for Retention</h2>
            <p>The core PRAX platform modules separate ingestion, progression evaluation, and mentorship routing into distinct decoupled micro-services, ensuring high throughput and sub-120ms response latencies.</p>

            <h2 id="mono-7">7. Conclusion & The Frontier of Agentic Engineering</h2>
            <p>The future of agentic engineering will not be defined by who builds the largest prompt wrapper, but by who engineers the most resilient deterministic runtime harnesses that empower human creators.</p>
          </main>
        </div>
      </div>
    `;
    document.body.appendChild(backdrop);

    const main = backdrop.querySelector('.lt-research-main');
    const progressBar = backdrop.querySelector('.lt-research-progress');
    main.onscroll = () => {
      const total = main.scrollHeight - main.clientHeight;
      const progress = (main.scrollTop / (total || 1)) * 100;
      progressBar.style.width = `${progress}%`;
    };

    document.getElementById('lt-research-print').onclick = () => window.print();
    document.getElementById('lt-research-copy').onclick = () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.origin + '/#research');
        showToast('✓ Research Monograph link copied to clipboard!');
      }
    };
    document.getElementById('lt-research-md').onclick = () => {
      const content = main.innerText;
      const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'Melwin_Santhosh_Deterministic_Agents_Monograph.md';
      a.click();
    };
  }

  function openResearchMonograph() {
    openModal('lt-research-modal');
  }

  // --- 7. 60-FPS SCRUB & MASK REVEAL HERO PERSONA ---
  function initScrubCanvas() {
    const portraitContainer = document.querySelector('.lt-photo-frame') || document.querySelector('.lt-portrait');
    if (!portraitContainer) return;

    portraitContainer.style.position = 'relative';
    const canvas = document.createElement('canvas');
    canvas.className = 'lt-scrub-canvas';
    portraitContainer.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = portraitContainer.clientWidth);
    let height = (canvas.height = portraitContainer.clientHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = portraitContainer.clientWidth;
      height = canvas.height = portraitContainer.clientHeight;
    });

    let isDrawing = false;
    let particles = [];

    function render() {
      ctx.clearRect(0, 0, width, height);

      // Draw faint aperture coordinate grid
      ctx.strokeStyle = 'rgba(2, 132, 199, 0.15)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Render active scrub trails
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= 0.02;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.strokeStyle = '#0284C7';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.stroke();

        // Crosshair HUD markings
        ctx.beginPath();
        ctx.moveTo(p.x - 6, p.y);
        ctx.lineTo(p.x + 6, p.y);
        ctx.moveTo(p.x, p.y - 6);
        ctx.lineTo(p.x, p.y + 6);
        ctx.stroke();

        ctx.font = '9px "IBM Plex Mono", monospace';
        ctx.fillStyle = '#0284C7';
        ctx.fillText(`X:${Math.round(p.x)} Y:${Math.round(p.y)}`, p.x + 8, p.y - 8);
        ctx.restore();
      }

      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    function addScrubPoint(clientX, clientY) {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      particles.push({ x, y, size: 22, life: 1.0 });
    }

    canvas.addEventListener('mousemove', (e) => addScrubPoint(e.clientX, e.clientY));
    canvas.addEventListener('touchmove', (e) => {
      if (e.touches[0]) addScrubPoint(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
  }

  // --- 8. INJECT UI TRIGGERS INTO DOM ---
  function injectTriggers() {
    // 1. Add "GUIDE ME ✦" and "CMD+K" triggers to header or ruler
    const header = document.querySelector('header');
    if (header && !document.getElementById('lt-agent-tour-trigger')) {
      const navGroup = header.querySelector('div:has(> nav)') || header.querySelector('nav') || header;
      const triggerBar = document.createElement('div');
      triggerBar.id = 'lt-header-triggers';
      triggerBar.style.display = 'inline-flex';
      triggerBar.style.alignItems = 'center';
      triggerBar.style.gap = '0.4rem';
      triggerBar.style.marginLeft = '0.8rem';

      triggerBar.innerHTML = `
        <button id="lt-agent-tour-trigger" class="lt-agent-btn" title="Launch Autonomous AI Agent Tour" style="color: #0284C7; font-weight: 700;">
          GUIDE ME ✦
        </button>
        <button id="lt-palette-trigger" class="lt-agent-btn" title="Open Raycast Command Palette (Cmd+K)">
          CMD+K ⌘
        </button>
        <button id="lt-copy-email-trigger" class="lt-agent-btn" title="Copy Signal Email to Clipboard">
          COPY SIGNAL ✉
        </button>
      `;
      navGroup.appendChild(triggerBar);

      document.getElementById('lt-agent-tour-trigger').onclick = startTour;
      document.getElementById('lt-palette-trigger').onclick = () => {
        openModal('lt-palette-modal');
        const input = document.querySelector('.lt-palette-input');
        if (input) setTimeout(() => input.focus(), 50);
      };
      document.getElementById('lt-copy-email-trigger').onclick = copyEmail;
    }

    // 2. Add Architecture Drawer buttons to Project Cards
    const projectCards = document.querySelectorAll('#projects .space-y-12 > div, #projects .grid > div');
    const projectKeys = ['prax', 'hub', 'ai'];
    projectCards.forEach((card, idx) => {
      if (!card.querySelector('.lt-arch-btn')) {
        const key = projectKeys[idx % projectKeys.length];
        const btn = document.createElement('button');
        btn.className = 'lt-agent-btn lt-arch-btn';
        btn.style.marginTop = '0.75rem';
        btn.style.display = 'inline-block';
        btn.textContent = 'View State Machine Telemetry ↗';
        btn.onclick = () => openDrawer(key);
        card.appendChild(btn);
      }
    });

    // 3. Inject Hackathon Milestones into Experience section
    const expContainer = document.querySelector('#experience');
    if (expContainer && !document.getElementById('lt-hackathons-timeline')) {
      const hackSec = document.createElement('div');
      hackSec.id = 'lt-hackathons-timeline';
      hackSec.style.marginTop = '2rem';
      hackSec.style.paddingTop = '1.5rem';
      hackSec.style.borderTop = '1px solid #18181B';

      hackSec.innerHTML = `
        <div style="font-family: 'IBM Plex Mono', monospace; font-size: 0.75rem; font-weight: 700; color: #0284C7; text-transform: uppercase; margin-bottom: 0.8rem;">
          // COMPETITIVE HACKATHONS & TECHNICAL WORKSHOPS
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.8rem; font-family: 'Manrope', sans-serif;">
          <div style="background: #EEF1F3; border: 1px solid #18181B; padding: 0.8rem; box-shadow: 2px 2px 0px #18181B;">
            <strong style="font-size: 0.85rem; display: block;">INCEPTA '26 — Gnosis AI Hackathon</strong>
            <span style="font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem; color: #71717A;">College of Engineering Trivandrum (CET)</span>
          </div>
          <div style="background: #EEF1F3; border: 1px solid #18181B; padding: 0.8rem; box-shadow: 2px 2px 0px #18181B;">
            <strong style="font-size: 0.85rem; display: block;">HashItUp 2026 — 24H National Hackathon</strong>
            <span style="font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem; color: #71717A;">Team Interceptors, MBCET</span>
          </div>
          <div style="background: #EEF1F3; border: 1px solid #18181B; padding: 0.8rem; box-shadow: 2px 2px 0px #18181B;">
            <strong style="font-size: 0.85rem; display: block;">IBM Enterprise Agentic Applications</strong>
            <span style="font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem; color: #71717A;">ICSET 2026 Conference Workshop</span>
          </div>
          <div style="background: #EEF1F3; border: 1px solid #18181B; padding: 0.8rem; box-shadow: 2px 2px 0px #18181B;">
            <strong style="font-size: 0.85rem; display: block;">Insendium 10.0 Startup Bootcamp</strong>
            <span style="font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem; color: #71717A;">IEDC Startup Product Acceleration</span>
          </div>
        </div>
      `;
      expContainer.querySelector('.max-w-7xl')?.appendChild(hackSec);
    }
  }

  // --- BOOTSTRAP ---
  function boot() {
    initCommandPalette();
    initTourComponents();
    initArchitectureDrawer();
    initCVModal();
    initResearchMonograph();
    initScrubCanvas();
    injectTriggers();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // Handle hash changes like #research
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#research') {
      openResearchMonograph();
    }
  });
  if (window.location.hash === '#research') {
    openResearchMonograph();
  }
})();
