/* Progressive motion: readable by default, scroll-driven, and reduced-motion aware. */
(() => {
  if (!['/', '/index.html'].includes(location.pathname)) return;
  const html = document.documentElement;
  const root = document.getElementById('root');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = value => Math.max(0, Math.min(1, value));
  const smooth = value => value * value * (3 - 2 * value);
  let splash, splashFrame, splashTimer, splashDone = reduced.matches || !!location.hash;
  let hero, heading, portrait, flight, cue, runway = 0;
  let lastY = scrollY, direction = 'down', queued = false, started = false;
  const reveals = new Set();
  const animations = new Map();

  function finishSplash(skip = false) {
    if (splashDone) return;
    splashDone = true;
    cancelAnimationFrame(splashFrame);
    clearTimeout(splashTimer);
    html.classList.remove('lt-splash-open');
    root.inert = false;
    document.querySelector('.lt-ruler')?.removeAttribute('inert');
    const hadFocus = splash?.contains(document.activeElement);
    if (skip) removeStage();
    if (splash) {
      const old = splash;
      old.classList.add('is-leaving');
      old.inert = true;
      setTimeout(() => old.remove(), 400);
      splash = null;
    }
    if (hadFocus) {
      const main = root.querySelector('main');
      main?.focus({preventScroll: true});
    }
    requestTick();
  }

  if (!splashDone) {
    splash = document.createElement('div');
    splash.className = 'lt-splash';
    splash.setAttribute('role', 'dialog');
    splash.setAttribute('aria-modal', 'true');
    splash.setAttribute('aria-label', 'hello :)');
    splash.innerHTML = '<div class="lt-splash-greeting" aria-hidden="true"><span class="lt-scramble"></span><i class="lt-splash-cursor"></i></div><span class="lt-splash-caption" aria-hidden="true">MLWN / WELCOME</span><button type="button" class="lt-splash-skip">Skip intro ↗</button>';
    document.body.append(splash);
    html.classList.add('lt-splash-open');
    root.inert = true;
    const text = splash.querySelector('.lt-scramble');
    const greeting = 'hello :)';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789/*_+#@!&%<>';
    const began = performance.now();
    let previousStep = -1;

    function scramble(now) {
      const elapsed = now - began;
      const step = Math.floor(elapsed / 50);
      if (step !== previousStep) {
        previousStep = step;
        const resolved = Math.floor(clamp((elapsed - 300) / 1800) * greeting.length);
        text.textContent = [...greeting].map((character, i) => character === ' ' || i < resolved ? character : alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
      }
      if (elapsed < 2100) {
        splashFrame = requestAnimationFrame(scramble);
      } else {
        text.textContent = greeting;
      }
    }
    splashFrame = requestAnimationFrame(scramble);
    splash.querySelector('button').addEventListener('click', () => finishSplash(true));
    splash.querySelector('button').focus({preventScroll: true});
    // Display splash for ~3.5 seconds before smoothly fading out
    splashTimer = setTimeout(() => finishSplash(), 3400);
  }

  function removeStage() {
    runway = 0;
    html.classList.remove('lt-name-stage', 'lt-name-settled');
    html.style.removeProperty('--lt-runway');
    flight?.remove();
    cue?.remove();
    flight = cue = null;
  }

  function createStage() {
    if (reduced.matches || location.hash || scrollY > 20 || splashDone) return;
    runway = Math.max(460, Math.round(innerHeight * .82));
    html.style.setProperty('--lt-runway', `${runway}px`);
    html.classList.add('lt-name-stage');
    flight = document.createElement('div');
    flight.className = 'lt-name-flight';
    flight.setAttribute('aria-hidden', 'true');
    flight.innerHTML = '<span>Melwin</span><span>Santhosh</span>';
    cue = document.createElement('div');
    cue.className = 'lt-name-cue';
    cue.setAttribute('aria-hidden', 'true');
    cue.textContent = 'SCROLL TO EXPLORE';
    document.body.append(flight, cue);
  }

  const revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting || reduced.matches || !splashDone || direction !== 'down' || entry.boundingClientRect.top < 80) continue;
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
    hero = root.querySelector('.lt-hero');
    heading = root.querySelector('.lt-intro h1');
    portrait = root.querySelector('.lt-photo-frame img, [alt*="Melwin"], [alt*="melwin"]');

    // Title case and equal presentation for Melwin Santhosh
    heading.firstChild.nodeValue = 'Melwin ';
    heading.querySelector('span').textContent = 'Santhosh';

    createStage();
    registerReveals();
    if (!splashDone) document.querySelector('.lt-ruler')?.setAttribute('inert', '');
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

    if (flight && heading && runway) {
      const progress = clamp(scrollY / runway), eased = smooth(progress);
      const rect = heading.getBoundingClientRect();
      const style = getComputedStyle(heading);
      const textRange = document.createRange();
      textRange.selectNodeContents(heading.querySelector('span'));
      const textWidth = textRange.getBoundingClientRect().width + 2;
      const scale = Math.max(1, Math.min((innerWidth - 48) / textWidth, innerHeight * .52 / rect.height, 2.8));
      const x = (innerWidth - textWidth * scale) / 2;
      const y = Math.max(140, (innerHeight - rect.height * scale) / 2);
      flight.style.width = `${textWidth}px`;
      flight.style.fontSize = style.fontSize;
      flight.style.transform = `translate3d(${x + (rect.left - x) * eased}px,${y + (rect.top - y) * eased}px,0) scale(${scale + (1 - scale) * eased})`;
      flight.style.visibility = progress >= 1 ? 'hidden' : 'visible';
      cue.style.opacity = String(1 - clamp(progress * 3));
      html.classList.toggle('lt-name-settled', progress >= 1);
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

  document.addEventListener('keydown', event => {
    if (!splashDone && event.key === 'Escape') finishSplash(true);
    if (!splashDone && event.key === 'Tab') {
      event.preventDefault();
      splash?.querySelector('button').focus();
    }
  });

  reduced.addEventListener('change', () => {
    if (reduced.matches) {
      const distance = runway;
      finishSplash(true);
      removeStage();
      if (distance && scrollY) window.scrollTo({top: Math.max(0, scrollY - distance), behavior: 'instant'});
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
