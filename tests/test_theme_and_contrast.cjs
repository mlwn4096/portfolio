const fs = require('fs');
const path = require('path');
const { JSDOM } = require('./node_modules/jsdom');

console.log("\n🧪 RUNNING CLEAN LIGHT PORTFOLIO VERIFICATION SUITE\n");

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

  // 1. Verify dark mode is completely absent
  assert(!doc.documentElement.classList.contains('dark'), "HTML element does NOT have 'dark' class");
  assert(!doc.getElementById('theme-toggle-desktop'), "No desktop theme toggle button present");
  assert(!doc.getElementById('theme-toggle-mobile'), "No mobile theme toggle button present");
  assert(!doc.getElementById('theme-toggle-drawer'), "No drawer theme toggle button present");
  assert(!cssCode.includes('html.dark'), "Stylesheet has zero 'html.dark' rules");

  // 2. Verify all core sections render
  const sections = ['#about', '#prax', '#experience', '#projects', '#contact'];
  sections.forEach(secId => {
    const el = doc.querySelector(secId);
    assert(!!el, `Core section ${secId} rendered properly`);
  });

  // 3. Verify header and brand navigation
  const header = doc.querySelector('header');
  assert(!!header, "Header rendered");
  const logo = header ? header.querySelector('a[aria-label="Melwin Santhosh Homepage"]') : null;
  assert(!!logo, "MLWN logo link present");

  // 4. Verify CV and Contact action buttons
  const cvBtn = doc.querySelector('a[href="/Melwin_Santhosh_CV.pdf"]');
  assert(!!cvBtn, "CV [PDF] download button present");

  const getInTouchBtn = doc.querySelector('a[href="mailto:melwinsanthoah4096@gmail.com"]');
  assert(!!getInTouchBtn, "GET IN TOUCH contact button present");

  // 5. Verify profile photo
  const photo = doc.querySelector('img[src="/melwin-blue.png"]');
  assert(!!photo, "Profile photo melwin-blue.png is preserved and rendered");

  // 6. Verify contact form elements
  const contactForm = doc.querySelector('#contact form');
  assert(!!contactForm, "Contact dispatch form rendered");

  if (!passed) {
    console.error("\n❌ TEST SUITE FAILED!\n");
    process.exit(1);
  } else {
    console.log("\n🎉 CLEAN LIGHT PORTFOLIO VERIFIED SUCCESSFULLY!\n");
    process.exit(0);
  }
}, 500);
