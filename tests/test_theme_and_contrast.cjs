const fs = require('fs');
const path = require('path');
const { JSDOM } = require('./node_modules/jsdom');

console.log("\n🧪 RUNNING THEME TOGGLE & BURGUNDY CONTRAST TEST SUITE\n");

const rootDir = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(rootDir, 'public', 'index.html'), 'utf8');
const jsCode = fs.readFileSync(path.join(rootDir, 'public', 'assets', 'index-v9zL2PqM.js'), 'utf8');
const cssCode = fs.readFileSync(path.join(rootDir, 'public', 'assets', 'index-v9zL2PqM.css'), 'utf8');

const dom = new JSDOM(html, { url: "https://mlwn.in/", runScripts: "dangerously" });
const win = dom.window;
const doc = win.document;

// Attach full CSS
const styleEl = doc.createElement('style');
styleEl.textContent = cssCode;
doc.head.appendChild(styleEl);

// Evaluate bundle
win.eval(jsCode);

setTimeout(() => {
  let passed = true;

  function assert(condition, message) {
    if (!condition) {
      console.error(`\x1b[31m✖ [FAIL]\x1b[0m ${message}`);
      passed = false;
    } else {
      console.log(`\x1b[32m✔ [PASS]\x1b[0m ${message}`);
    }
  }

  // 1. Verify buttons mounted
  const desktopToggle = doc.getElementById('theme-toggle-desktop');
  const mobileToggle = doc.getElementById('theme-toggle-mobile');
  assert(!!desktopToggle, "Desktop theme toggle button mounted in header");
  assert(!!mobileToggle, "Mobile theme toggle button mounted in header");

  // 2. Test initial Light Mode
  assert(!doc.documentElement.classList.contains('dark'), "Initial state is Light mode");
  assert(desktopToggle.textContent.includes("BURGUNDY"), "Desktop button invites switch to BURGUNDY");

  // 3. Toggle to Burgundy mode
  desktopToggle.click();
  assert(doc.documentElement.classList.contains('dark'), "Dark mode enabled on click");
  assert(desktopToggle.textContent.includes("LIGHT MODE"), "Desktop button text updated to LIGHT MODE");
  assert(win.localStorage.getItem('theme') === 'dark', "LocalStorage theme saved as 'dark'");

  // 4. Contrast audit in Burgundy mode
  const allTextElements = doc.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, a, button, label, input, textarea');
  const unreadable = [];

  allTextElements.forEach(el => {
    if (el.children.length > 0 && ['DIV', 'A', 'BUTTON', 'LABEL'].includes(el.tagName)) return;
    const text = (el.textContent || '').trim();
    if (!text || text.length > 80) return;

    const style = win.getComputedStyle(el);
    let parent = el;
    let bg = style.backgroundColor;
    while (parent && (!bg || bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent')) {
      parent = parent.parentElement;
      if (parent) bg = win.getComputedStyle(parent).backgroundColor;
    }

    const isBlackText = style.color === 'rgb(0, 0, 0)' || style.color === '#000000';
    const isBurgundyBg = bg && (
      bg.includes('rgb(61, 19, 36)') ||  // #3d1324
      bg.includes('rgb(36, 10, 21)') ||  // #240a15
      bg.includes('rgb(30, 8, 17)')  ||  // #1e0811
      bg.includes('rgb(43, 13, 25)')     // #2b0d19
    );

    if (isBlackText && isBurgundyBg) {
      unreadable.push({ text: text.slice(0, 30), color: style.color, bg, class: el.className });
    }
  });

  assert(unreadable.length === 0, `Contrast audit: 0 unreadable dark-on-dark elements found (actual: ${unreadable.length})`);
  if (unreadable.length > 0) {
    console.error("Unreadable elements:", unreadable);
  }

  // 5. Test contact form labels specifically
  const formLabels = doc.querySelectorAll('#contact form label');
  let labelsReadable = true;
  formLabels.forEach(lbl => {
    const col = win.getComputedStyle(lbl).color;
    if (col === 'rgb(0, 0, 0)') labelsReadable = false;
  });
  assert(labelsReadable && formLabels.length > 0, "Contact form labels have light rose matching color");

  // 6. Test mobile menu drawer toggle
  const menuBtn = doc.querySelector('header button[aria-label="Open menu"]');
  if (menuBtn) {
    menuBtn.click();
    setTimeout(() => {
      const drawerToggle = doc.getElementById('theme-toggle-drawer');
      assert(!!drawerToggle, "Drawer theme toggle button mounted upon menu opening");
      assert(drawerToggle.textContent.includes("LIGHT MODE"), "Drawer toggle shows switch to LIGHT MODE");

      // 7. Toggle back to Light mode via drawer
      drawerToggle.click();
      assert(!doc.documentElement.classList.contains('dark'), "Switched back to Light mode via drawer");
      assert(win.localStorage.getItem('theme') === 'light', "LocalStorage updated to 'light'");

      // 8. Photo check
      const photo = doc.querySelector('img[src="/melwin-blue.png"]');
      assert(!!photo, "Profile photo melwin-blue.png is preserved");

      if (!passed) {
        console.error("\n❌ TEST SUITE FAILED!\n");
        process.exit(1);
      } else {
        console.log("\n🎉 ALL THEME & CONTRAST TESTS PASSED!\n");
        process.exit(0);
      }
    }, 200);
  } else {
    if (!passed) process.exit(1);
    process.exit(0);
  }
}, 600);
