/* Progressive motion: readable by default, scroll-driven, and reduced-motion aware. */
(() => {
  if (!['/', '/index.html'].includes(location.pathname)) return;
  const root = document.getElementById('root');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = value => Math.max(0, Math.min(1, value));
  const smooth = value => value * value * (3 - 2 * value);
  let heading, portrait;
  let lastY = scrollY, direction = 'down', queued = false, started = false;
  const reveals = new Set();
  const animations = new Map();

  const revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting || reduced.matches || direction !== 'down' || entry.boundingClientRect.top < 80) continue;
      animations.get(entry.target)?.cancel();
      const animation = entry.target.animate([
        { opacity: 0, transform: 'translateY(16px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 650, easing: 'cubic-bezier(.16, 1, .3, 1)' });
      animations.set(entry.target, animation);
      animation.onfinish = () => animations.delete(entry.target);
    }
  }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });

  function registerReveals() {
    const selector = '.lt-bio, .lt-actions, .lt-socials, #about > div > div:first-child, .lt-about-main > div, .lt-dispatch > div, #prax > div > div > div, #experience .lg\\:col-span-4 > *, .lt-timeline > div, #projects > div > div:first-child, .lt-featured, .lt-projects > div, #contact .lg\\:col-span-6 > *';
    root.querySelectorAll(selector).forEach(element => {
      if (!reveals.has(element)) {
        reveals.add(element);
        revealObserver.observe(element);
      }
    });
    reveals.forEach(element => {
      if (!element.isConnected) {
        revealObserver.unobserve(element);
        reveals.delete(element);
        animations.get(element)?.cancel();
        animations.delete(element);
      }
    });
  }

  function start() {
    if (started || !root.querySelector('.lt-intro h1')) return;
    started = true;
    heading = root.querySelector('.lt-intro h1');
    portrait = root.querySelector('.lt-photo-frame img, [alt*="Melwin"], [alt*="melwin"]');

    // Title case and equal presentation for Melwin Santhosh
    heading.firstChild.nodeValue = 'Melwin ';
    heading.querySelector('span').textContent = 'Santhosh';

    registerReveals();
    requestTick();
    document.fonts.ready.then(requestTick);
  }

  function update() {
    queued = false;
    const delta = scrollY - lastY;
    if (Math.abs(delta) > .5) direction = delta > 0 ? 'down' : 'up';
    lastY = scrollY;

    if (direction === 'up' || reduced.matches) {
      animations.forEach(animation => animation.cancel());
      animations.clear();
    }

    if (portrait && !reduced.matches) {
      const rect = portrait.getBoundingClientRect();
      const visible = Math.max(0, Math.min(rect.bottom, innerHeight) - Math.max(rect.top, 90));
      const ratio = visible / Math.min(rect.height, innerHeight - 90);
      portrait.style.setProperty('--photo-presence', smooth(clamp((ratio - .12) / .73)).toFixed(3));
    }

  }

  function requestTick() {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', requestTick, {passive: true});
  window.addEventListener('resize', requestTick, {passive: true});

  document.addEventListener('focusin', event => {
    animations.forEach((animation, element) => {
      if (element.contains(event.target)) {
        animation.cancel();
        animations.delete(element);
      }
    });
  });

  reduced.addEventListener('change', () => {
    if (reduced.matches) {
      portrait?.style.removeProperty('--photo-presence');
    }
    requestTick();
  });

  const contentObserver = new MutationObserver(() => {
    start();
    if (started) registerReveals();
  });
  contentObserver.observe(root, {childList: true, subtree: true});
  start();
})();
