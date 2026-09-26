/* Run against npm start. Install playwright and @axe-core/playwright for this browser check.
   BROWSER_PATH can select an installed Chrome/Edge; otherwise Playwright Chromium is used. */
const { chromium } = require('playwright');
const AxeBuilder = require('@axe-core/playwright').default;
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const path = require('node:path');
const project = path.resolve(__dirname, '..');
const base = process.env.TEST_URL || 'http://localhost:3000';

(async () => {
  const browser = await chromium.launch({ headless: true, ...(process.env.BROWSER_PATH ? { executablePath: process.env.BROWSER_PATH } : {}) });
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, permissions: ['clipboard-read', 'clipboard-write'] });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(base, { waitUntil: 'networkidle' });
    await page.locator('.lt-hero').waitFor();
    const skipIntro = page.getByRole('button', { name: 'Skip intro' });
    if (await skipIntro.count()) await skipIntro.click();
    await page.locator('.lt-splash').waitFor({ state: 'detached' });
    const snapshot = () => page.evaluate(() => ({
      text: document.getElementById('root').textContent.replace('MELWINSANTHOSH', 'Melwin Santhosh'),
      links: [...document.querySelectorAll('#root a')].map(a => [a.textContent, a.getAttribute('href')])
    }));
    const redesigned = await snapshot();
    assert.equal(await page.evaluate(() => [...document.fonts].every(font => font.status === 'loaded')), true, 'Local fonts load');
    for (const width of [320, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      const overflow = await page.evaluate(() => [...document.querySelectorAll('#root a, #root button, #root input, #root h1, #root h2, #root h3, #root p')].filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.width > 0 && (rect.right > innerWidth + 1 || rect.left < -1);
      }).map(el => el.textContent));
      assert.deepEqual(overflow, [], `No clipped content at ${width}px`);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    }
    let results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    assert.deepEqual(results.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })), [], 'Desktop accessibility');

    await page.getByRole('button', { name: 'PREVIEW SKELETON LOADER' }).click();
    await page.getByLabel('Loading repository details').waitFor();
    await page.getByRole('button', { name: 'SHOW REPOSITORIES' }).click();
    await page.locator('.lt-featured').waitFor();
    await page.getByRole('button', { name: 'COPY EMAIL ADDRESS' }).click();
    assert.equal(await page.evaluate(() => navigator.clipboard.readText()), 'melwinsanthoah4096@gmail.com');

    // Exercise the UI with a mocked response; do not send a message to the real endpoint.
    let submitted;
    await page.route('**/api/contact', route => {
      submitted = route.request().postDataJSON();
      return route.fulfill({ contentType: 'application/json', body: JSON.stringify({ message: 'Preview test received.' }) });
    });
    await page.getByLabel('YOUR NAME', { exact: true }).fill('UI verification');
    await page.getByLabel('YOUR EMAIL', { exact: true }).fill('preview@example.com');
    await page.getByLabel('MESSAGE OR INQUIRY', { exact: true }).fill('Local UI test only.');
    await page.getByRole('button', { name: 'TRANSMIT DISPATCH' }).click();
    await page.getByText('Preview test received.').waitFor();
    assert.equal(submitted.name, 'UI verification');
    assert.equal(await page.getByLabel('YOUR NAME', { exact: true }).inputValue(), '');

    await page.getByRole('button', { name: 'Terms', exact: true }).click();
    const dialog = page.getByRole('dialog');
    await dialog.waitFor();
    assert.equal(await page.evaluate(() => !!document.activeElement.closest('[role="dialog"]')), true);
    await page.keyboard.press('Shift+Tab');
    assert.equal(await page.evaluate(() => !!document.activeElement.closest('[role="dialog"]')), true, 'Dialog traps focus');
    await page.getByRole('button', { name: 'PRIVACY POLICY', exact: true }).click();
    await page.getByRole('heading', { name: '1. Information Collection' }).waitFor();
    results = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
    assert.deepEqual(results.violations.map(v => ({id:v.id,nodes:v.nodes.map(n=>n.target)})), [], 'Dialog accessibility');
    await page.keyboard.press('Escape');
    await dialog.waitFor({ state: 'detached' });
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Terms', 'Dialog restores focus');

    await page.setViewportSize({ width: 390, height: 844 });
    await page.getByRole('button', { name: 'Open menu' }).click();
    assert.equal(await page.getByRole('button', { name: 'Close menu' }).getAttribute('aria-expanded'), 'true');
    await page.keyboard.press('Escape');
    await page.getByRole('button', { name: 'Open menu' }).waitFor();
    await page.getByRole('button', { name: 'Open menu' }).click();
    await page.locator('header > div:nth-child(2)').getByRole('link', { name: 'PROJECTS', exact: true }).click();
    assert.equal(new URL(page.url()).hash, '#projects');
    await page.getByRole('button', { name: 'Open menu' }).waitFor();
    results = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
    assert.deepEqual(results.violations.map(v => ({id:v.id,nodes:v.nodes.map(n=>n.target)})), [], 'Mobile accessibility');

    const pdf = await context.request.get(`${base}/Melwin_Santhosh_CV.pdf`);
    assert.equal(pdf.status(), 200);
    assert.equal((await pdf.body()).subarray(0, 4).toString(), '%PDF');
    await page.emulateMedia({ reducedMotion: 'reduce' });
    assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), 'auto');
    assert.deepEqual(errors, [], 'No JavaScript errors');

    // Baseline content comparison uses the previous committed entrypoint with its unchanged bundle.
    const original = execFileSync('git', ['-c', `safe.directory=${project.replaceAll('\\','/')}`, 'show', 'HEAD:public/index.html'], { cwd: project, encoding: 'utf8' });
    await page.route(`${base}/`, route => route.fulfill({ contentType: 'text/html', body: original }));
    await page.goto(base, { waitUntil: 'networkidle' });
    await page.locator('#contact').waitFor();
    assert.deepEqual(redesigned, await snapshot(), 'All original content and links preserved exactly');
    console.log('PASS: content, links, five viewport sizes, local fonts, accessibility, mobile menu, skeleton state, copy email, mocked contact form, dialog focus, PDF, and reduced motion.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
