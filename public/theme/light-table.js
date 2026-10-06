/* Presentation hooks only. The original React bundle owns all content and state. */
(() => {
  const root = document.getElementById('root');
  let activeDialog = null;
  let returnFocus = null;
  const mark = (selector, name) => root.querySelector(selector)?.classList.add(name);
  function prepare() {
    const main = root.querySelector('main');
    if (main) { main.id = 'portfolio-main'; main.tabIndex = -1; }
    root.querySelectorAll('div:has(> .animate-marquee)').forEach((strip, i) => {
      strip.tabIndex = 0;
      strip.setAttribute('role', 'region');
      strip.setAttribute('aria-label', i === 0 ? 'Portfolio highlights' : 'Experience highlights');
    });
    if (!root.querySelector('main > section')) return false;
    mark('main > section:first-child', 'lt-hero');
    mark('.lt-hero > .max-w-7xl > .grid', 'lt-hero-grid');
    mark('.lt-hero-grid > div:first-child', 'lt-intro');
    mark('.lt-hero-grid > div:last-child', 'lt-portrait');
    mark('.lt-intro > div:first-child', 'lt-identifiers');
    mark('.lt-intro > div:nth-child(3)', 'lt-bio');
    mark('.lt-intro > div:nth-child(4)', 'lt-actions');
    mark('.lt-intro > div:nth-child(5)', 'lt-socials');
    mark('.lt-portrait > div', 'lt-photo-sheet');
    mark('.lt-photo-sheet > div:nth-child(2)', 'lt-photo-frame');
    mark('#about > div > .grid > div:first-child', 'lt-about-main');
    mark('#about > div > .grid > div:last-child', 'lt-dispatch');
    mark('#experience > div > .grid > div:last-child > div', 'lt-timeline');
    mark('#projects > div > .space-y-12 > div:first-child', 'lt-featured');
    mark('#projects > div > .space-y-12 > .grid', 'lt-projects');
    root.querySelectorAll('section[id]').forEach((section, i) => {
      section.dataset.index = String(i + 1).padStart(2, '0');
    });
    if (!document.querySelector('.lt-ruler')) {
      const ruler = document.createElement('nav');
      ruler.className = 'lt-ruler';
      ruler.setAttribute('aria-label', 'Section ruler');
      root.querySelectorAll('header nav a').forEach((original, i) => {
        const link = document.createElement('a');
        link.href = original.hash;
        link.dataset.index = String(i + 1).padStart(2, '0');
        link.setAttribute('aria-label', original.textContent);
        link.title = original.textContent;
        const tooltip = document.createElement('span');
        tooltip.className = 'lt-ruler-label';
        tooltip.textContent = original.textContent;
        tooltip.setAttribute('aria-hidden', 'true');
        link.append(tooltip);
        ruler.append(link);
      });
      document.body.append(ruler);
    }
    root.querySelectorAll('#contact form input, #contact form textarea').forEach((input, i) => {
      input.id = `contact-field-${i}`;
      const label = input.parentElement.querySelector('label');
      if (label) label.htmlFor = input.id;
    });
    const hero = root.querySelector('.lt-hero');
    if (hero && !hero.querySelector('.lt-aperture')) {
      const art = document.createElement('div');
      art.className = 'lt-aperture';
      art.setAttribute('aria-hidden', 'true');
      art.innerHTML = `<svg viewBox="0 0 1000 700" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width=".7"><path d="M10 590H525C765 590 960 395 960 155"/><path d="M10 578H525C758 578 948 389 948 155"/><path d="M10 566H525C752 566 936 382 936 155"/><path d="M10 554H525C745 554 924 375 924 155"/><path d="M10 542H525C738 542 912 369 912 155"/><path d="M10 530H525C732 530 900 362 900 155"/><path d="M10 518H525C725 518 888 355 888 155"/><path d="M10 506H525C718 506 876 349 876 155"/><circle cx="685" cy="295" r="206"/><path d="M460 295h450M685 70v450" stroke-dasharray="2 8"/></g><g fill="currentColor"><circle cx="685" cy="89" r="3"/><circle cx="479" cy="295" r="3"/><circle cx="685" cy="501" r="3"/></g></svg>`;
      hero.prepend(art);
    }
    return true;
  }
  function syncDialog() {
    const dialog = root.querySelector('[role="dialog"]');
    if (dialog === activeDialog) return;
    if (dialog) {
      returnFocus = document.activeElement;
      dialog.querySelector('button')?.focus();
    }
    root.querySelectorAll('main, header, footer').forEach(el => { el.inert = !!dialog; });
    const ruler = document.querySelector('.lt-ruler');
    if (ruler) ruler.inert = !!dialog;
    document.body.style.overflow = dialog ? 'hidden' : '';
    if (!dialog && returnFocus?.isConnected) returnFocus.focus({preventScroll: true});
    activeDialog = dialog;
  }
  const observer = new MutationObserver(() => {
    observer.disconnect();
    prepare();
    syncDialog();
    observer.observe(root, {childList: true, subtree: true});
  });
  prepare();
  const skip = document.createElement('a');
  skip.href = '#portfolio-main';
  skip.className = 'lt-skip';
  skip.textContent = 'Skip to content';
  document.body.prepend(skip);
  observer.observe(root, {childList: true, subtree: true});

  // Navigation remains native anchors; this only indicates the visible section.
  let queued = false;
  function updatePosition() {
    queued = false;
    const sections = [...root.querySelectorAll('section[id]')];
    const active = sections.filter(section => section.getBoundingClientRect().top <= 160).at(-1);
    document.querySelectorAll('header nav a, .lt-ruler a').forEach(link => {
      if (active && link.hash === `#${active.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', () => {
    if (!queued) { queued = true; requestAnimationFrame(updatePosition); }
  }, {passive: true});
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') root.querySelector('header button[aria-expanded="true"]')?.click();
    if (event.key === 'Tab' && activeDialog) {
      const focusable = [...activeDialog.querySelectorAll('button,a[href],input,textarea,[tabindex="0"]')];
      const first = focusable[0], last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }
  });
})();
