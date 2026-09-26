# Light Table

Custom theme implemented September 26, 2026. No push or deployment performed.

The design treats the portfolio as a photographic and engineering study: cool paper, deep ink, translucent blue mounting sheets, Newsreader display type, Manrope reading text, and IBM Plex Mono annotations. A large roman first name and tracked surname establish the identity. The portrait's measurement marks continue into a functional section ruler, timeline registration crosses, section indexes, and the featured project sheet.

## Preservation and implementation

- The original React bundle and all aliases are unchanged. Text, existing links, project details, chronology, images, resume documents, and APIs remain intact.
- `public/theme/light-table.css` supplies the visual system over the deployed utilities. `light-table.js` adds presentation classes, native anchor navigation, accessible form labels, skip navigation, and legal-dialog focus handling. It does not replace React's content or state.
- Repeated ticker copies are visually suppressed; each original phrase remains available. On mobile, the strips scroll horizontally with keyboard access.
- Fonts are local WOFF2 files with redistribution licenses. There are no Google Fonts requests and no new production dependencies.
- The standalone 404 document and React fallback share the theme. Printable CV formatting is intentionally preserved.
- The original verification runner was made portable to Windows and closes its test listener before exiting.

## Internet research and five independent reviews

Initial comparison sites: [Brittany Chiang](https://brittanychiang.com/), [Bruno Simon](https://bruno-simon.com/), and [Anthony Fu](https://antfu.me/). These established contrasting approaches to information hierarchy and personality, not layouts to copy.

| Review | Comparables found | Finding and response |
| --- | --- | --- |
| 1. Editorial typography | [Mist](https://lovable.dev/en/templates/websites/portfolio/mist-atmospheric-designer-portfolio), [ASHCROFT](https://www.framer.com/marketplace/templates/ashcroft-design/) | Serif/sans/mono and slate palettes are familiar. Replaced the italic surname with a distinct roman/monospaced identity and extended registration marks below the hero. |
| 2. Available templates | [Ferreira](https://www.framer.com/marketplace/templates/ferreira/), [REC](https://www.framer.com/marketplace/templates/rec/) | Broad name-and-portrait editorial similarity, no close complete duplicate found. Added functional section navigation and project mounting details. |
| 3. Technical/archival themes | [GSAP Vault photography](https://gsapvault.com/templates/photography-portfolio-template), [Stillfilm](https://www.framer.com/marketplace/templates/stillfilm/), [Halide](https://www.framer.com/marketplace/templates/halide/) | Contact-sheet language is available elsewhere. Changed the original Bodoni direction to locally served Newsreader, changed name composition, and made the measurement motif part of navigation. |
| 4. Revised mobile design | [Infinite Timeline](https://www.framer.com/marketplace/templates/infinite-timeline/), [Impress](https://www.rocket.new/templates/impress-immersive-printmaker-landing-page-template), [Office of Otto](https://www.office-of-otto.com/) | Rulers and registration marks exist as individual motifs, but no close combined match was found. Kept the revision; improved the tiny mobile ticker and reduced hero gaps. |
| 5. Revised complete design | [Halcyon](https://code-anything.com/templates/halcyon-portfolio), [Kashan](https://itzkashan.dev/), [Safi](https://abdulkadersafi.com/), [blue editorial template](https://www.codeinfoweb.com/design-prompts/editorial-portfolio/) | Shared ingredients, materially different complete arrangements. Kept the revision; added visible ruler labels on hover/focus and enlarged metadata. |

The five searches support differentiation, not a guarantee of universal uniqueness. Some comparisons relied on indexed descriptions rather than interactive rendered access. The revised complete composition was not identified as an existing template in these searches.

## Validation

The browser suite `tests/test_light_table.cjs` checks:

- Exact original root text and existing link preservation against the committed entrypoint.
- No clipped content or document overflow at 320, 390, 768, 1024, and 1440 px.
- Local font loading and no JavaScript exceptions.
- Automated WCAG A/AA checks on desktop, mobile, and the legal dialog.
- Mobile menu opening, Escape, and anchor navigation; skeleton preview and restoration.
- Clipboard interaction, PDF content, and a **mocked** form submission (no real message sent).
- Dialog focus trapping/restoration and reduced-motion behavior.

The original `npm test` gate checks bundle integrity, original rendered sections, image assets, server responses, MIME types, and cache/CORS headers.

For browser verification, install `playwright`, `@axe-core/playwright`, and `jsdom` as local test tools, then expose that directory through `NODE_PATH`. Start the site with `npm start`. Set `BROWSER_PATH` to an installed Chrome/Edge executable, or install Playwright Chromium. Run `node tests/test_light_table.cjs` and `npm test`. No build step is required.
