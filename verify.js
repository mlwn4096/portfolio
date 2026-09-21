/**
 * Automated Verification Gate for Melwin Santhosh Portfolio
 * Run before every commit & push to guarantee the website loads first time, every time.
 */
const path = require('path');

// Ensure modules can be resolved from tests/node_modules if present
if (!process.env.NODE_PATH) {
  process.env.NODE_PATH = path.join(__dirname, 'tests', 'node_modules');
  require('module').Module._initPaths();
}

const fs = require('fs');
const vm = require('vm');
const http = require('http');

let hasError = false;

function logPass(msg) {
  console.log(`\x1b[32m✔ [PASS]\x1b[0m ${msg}`);
}

function logFail(msg, err) {
  hasError = true;
  console.error(`\x1b[31m✖ [FAIL]\x1b[0m ${msg}`);
  if (err) console.error(err);
}

console.log("\n========================================================");
console.log("🔍 RUNNING PRE-DEPLOYMENT VERIFICATION SUITE");
console.log("========================================================\n");

// Step 1: Validate HTML exists and has proper tags
try {
  const indexHtmlPath = path.join(__dirname, 'public', 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    throw new Error("public/index.html is missing!");
  }
  const html = fs.readFileSync(indexHtmlPath, 'utf8');
  if (!html.includes('<div id="root">')) {
    throw new Error('index.html is missing <div id="root"> container!');
  }
  
  // Extract script and css sources
  const scriptMatch = html.match(/src="([^"]+\.js[^"]*)"/);
  const cssMatch = html.match(/href="([^"]+\.css[^"]*)"/);
  
  if (!scriptMatch) throw new Error("No script src found in index.html!");
  if (!cssMatch) throw new Error("No stylesheet href found in index.html!");

  const scriptPath = scriptMatch[1].split('?')[0].replace(/^\//, '');
  const cssPath = cssMatch[1].split('?')[0].replace(/^\//, '');

  if (!fs.existsSync(path.join(__dirname, 'public', scriptPath))) {
    throw new Error(`Referenced script does not exist: public/${scriptPath}`);
  }
  if (!fs.existsSync(path.join(__dirname, 'public', cssPath))) {
    throw new Error(`Referenced CSS does not exist: public/${cssPath}`);
  }

  logPass(`HTML integrity check (script: ${scriptPath}, css: ${cssPath})`);
} catch (e) {
  logFail("HTML integrity check", e.message);
}

// Step 2: Validate JavaScript syntax of all JS assets
const assetsDir = path.join(__dirname, 'public', 'assets');
const jsAssets = fs.readdirSync(assetsDir).filter(f => f.endsWith('.js'));

for (const jsFile of jsAssets) {
  const filePath = path.join(assetsDir, jsFile);
  const code = fs.readFileSync(filePath, 'utf8');
  try {
    new vm.Script(code, { filename: jsFile });
    logPass(`Syntax validation for ${jsFile} (${(code.length / 1024).toFixed(1)} KB)`);
  } catch (e) {
    logFail(`Syntax validation for ${jsFile}`, e.message);
  }
}

// Step 3: Verify all image assets exist and are non-empty
const requiredImages = [
  'mlwn.png',
  'melwin.png',
  'melwin-blue.png',
  'avatar.png',
  'mlwn.jpg',
  'melwin.jpg',
  'favicon.ico'
];

for (const img of requiredImages) {
  const p = path.join(__dirname, 'public', img);
  if (fs.existsSync(p) && fs.statSync(p).size > 0) {
    logPass(`Asset check: public/${img} (${(fs.statSync(p).size / 1024).toFixed(1)} KB)`);
  } else {
    logFail(`Asset check: public/${img} is missing or empty!`);
  }
}

// Step 4: Keep all JS and CSS bundle aliases identical to avoid version desync
try {
  const indexHtml = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf8');
  const sm = indexHtml.match(/src="([^"]+\.js[^"]*)"/);
  const activeScript = sm ? sm[1].split('?')[0].replace(/^\//, '') : 'assets/index-v9zL2PqM.js';
  const canonicalJs = path.join(__dirname, 'public', activeScript);
  const canonicalContent = fs.readFileSync(canonicalJs, 'utf8');
  
  for (const jsFile of jsAssets) {
    const p = path.join(assetsDir, jsFile);
    const content = fs.readFileSync(p, 'utf8');
    if (content !== canonicalContent) {
      fs.writeFileSync(p, canonicalContent, 'utf8');
      console.log(`🔄 Re-synced ${jsFile} to canonical bundle content`);
    }
  }
  logPass(`All JS bundle aliases synchronized to ${path.basename(canonicalJs)}`);

  const cm = indexHtml.match(/href="([^"]+\.css[^"]*)"/);
  const activeCss = cm ? cm[1].split('?')[0].replace(/^\//, '') : 'assets/index-v9zL2PqM.css';
  const canonicalCss = path.join(__dirname, 'public', activeCss);
  const canonicalCssContent = fs.readFileSync(canonicalCss, 'utf8');
  const cssAssets = fs.readdirSync(assetsDir).filter(f => f.endsWith('.css'));

  for (const cssFile of cssAssets) {
    const p = path.join(assetsDir, cssFile);
    const content = fs.readFileSync(p, 'utf8');
    if (content !== canonicalCssContent) {
      fs.writeFileSync(p, canonicalCssContent, 'utf8');
      console.log(`🔄 Re-synced ${cssFile} to canonical CSS content`);
    }
  }
  logPass(`All CSS bundle aliases synchronized to ${path.basename(canonicalCss)}`);
} catch (e) {
  logFail("Bundle alias synchronization", e.message);
}

// Step 5: Run Clean Portfolio verification suite
try {
  const { execSync } = require('child_process');
  const testScript = path.join(__dirname, 'tests', 'test_theme_and_contrast.cjs');
  if (fs.existsSync(testScript)) {
    execSync(`NODE_PATH="${path.join(__dirname, 'tests', 'node_modules')}" node "${testScript}"`, { encoding: 'utf8' });
    logPass("Clean portfolio verification suite (0 dark mode artifacts, all sections & photo intact)");
  }
} catch (e) {
  logFail("Portfolio verification suite", e.stdout || e.message);
}

// Step 6: Test live Server HTTP responses, CORS, and Cache headers
async function runServerTests() {
  const app = require('./server.js');
  const testPort = 3010;
  
  return new Promise((resolve) => {
    const server = app.listen(testPort, '127.0.0.1', async () => {
      try {
        const testEndpoints = [
          { path: '/', expectStatus: 200, expectType: 'text/html', checkNoCache: true },
          { path: '/health', expectStatus: 200, expectType: 'application/json' },
          { path: '/assets/index-v9zL2PqM.js', expectStatus: 200, expectType: 'application/javascript', checkCors: true },
          { path: '/assets/index-rMVczcx5.js', expectStatus: 200, expectType: 'application/javascript', checkCors: true },
          { path: '/assets/index-DqYhfmSF.js', expectStatus: 200, expectType: 'application/javascript' },
          { path: '/assets/index-nonexistent-fallback-test.js', expectStatus: 200, expectType: 'application/javascript' },
          { path: '/assets/index-v9zL2PqM.css', expectStatus: 200, expectType: 'text/css' },
          { path: '/assets/index-1sc7E3Jj.css', expectStatus: 200, expectType: 'text/css' },
          { path: '/assets/nonexistent-fallback-test.css', expectStatus: 200, expectType: 'text/css' },
          { path: '/melwin-blue.png', expectStatus: 200, expectType: 'image/png' },
          { path: '/mlwn.png', expectStatus: 200, expectType: 'image/png' }
        ];

        for (const ep of testEndpoints) {
          const res = await fetch(`http://127.0.0.1:${testPort}${ep.path}`);
          const ct = res.headers.get('content-type') || '';
          const cors = res.headers.get('access-control-allow-origin');
          const cc = res.headers.get('cache-control') || '';
          
          if (res.status !== ep.expectStatus) {
            logFail(`Server endpoint ${ep.path}: expected ${ep.expectStatus}, got ${res.status}`);
          } else if (ep.expectType && !ct.includes(ep.expectType)) {
            logFail(`Server endpoint ${ep.path}: expected type "${ep.expectType}", got "${ct}"`);
          } else if (ep.checkCors && cors !== '*') {
            logFail(`Server endpoint ${ep.path}: missing CORS Access-Control-Allow-Origin header (got "${cors}")`);
          } else if (ep.checkNoCache && !cc.includes('no-store') && !cc.includes('no-cache')) {
            logFail(`Server endpoint ${ep.path}: expected no-cache on HTML (got "${cc}")`);
          } else {
            logPass(`Server endpoint ${ep.path} -> ${res.status} (${ep.expectType})`);
          }
        }
      } catch (err) {
        logFail("Server integration testing failed", err.message);
      } finally {
        server.close();
        resolve();
      }
    });
  });
}

runServerTests().then(() => {
  console.log("\n========================================================");
  if (hasError) {
    console.error("❌ VERIFICATION FAILED! Do NOT deploy until errors are fixed.");
    console.log("========================================================\n");
    process.exit(1);
  } else {
    console.log("🎉 ALL VERIFICATION CHECKS PASSED! SAFE TO DEPLOY.");
    console.log("========================================================\n");
    process.exit(0);
  }
});
