#!/usr/bin/env node
/**
 * Contrast audit: loads pages in headless Chrome and reports text whose
 * colour is too close to the background it actually sits on (walking up to
 * the first opaque ancestor). Catches navy-on-navy and white-on-white left by
 * the colour codemod.
 *
 * Usage: node scripts/contrast-audit.mjs [base-url] [path...]
 *   With no paths, audits every URL in the sitemap.
 * Needs CHROME_PATH (or an installed Chrome) and the skill's CDP helper.
 */
import { Browser } from '/Users/nadiresmail/.claude/skills/design-taste-frontend/scripts/lib/cdp.mjs';

const base = process.argv[2] ?? 'http://localhost:3000';
let paths = process.argv.slice(3);
if (!paths.length) {
  const xml = await (await fetch(`${base}/sitemap.xml`)).text();
  paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
}

const PROBE = `(() => {
  const parse = (c) => { const m = c.match(/rgba?\\(([^)]+)\\)/); if (!m) return null; const p = m[1].split(/[ ,/]+/).filter(Boolean).map(Number); return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 }; };
  const lum = ({ r, g, b }) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
  const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
  const bgOf = (el) => {
    for (let n = el; n; n = n.parentElement) {
      const cs = getComputedStyle(n);
      if (cs.backgroundImage && cs.backgroundImage !== 'none' && !cs.backgroundImage.includes('jl-monogram')) return null; // over a picture or gradient: skip
      const c = parse(cs.backgroundColor);
      if (c && c.a > 0.85) return c;
    }
    return { r: 255, g: 255, b: 255, a: 1 };
  };
  const out = [];
  const walker = document.createTreeWalker(document.querySelector('main') || document.body, NodeFilter.SHOW_TEXT);
  const seen = new Set();
  while (walker.nextNode()) {
    const t = walker.currentNode; const el = t.parentElement;
    if (!el || seen.has(el) || !t.textContent.trim()) continue;
    seen.add(el);
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none' || +cs.opacity === 0) continue;
    const r = el.getBoundingClientRect(); if (r.width === 0 || r.height === 0) continue;
    if (el.closest('.sr-only, [aria-hidden="true"], video, iframe, .maplibregl-map')) continue;
    const fg = parse(cs.color); const bg = bgOf(el); if (!fg || !bg) continue;
    const eff = { r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a) };
    const cr = ratio(eff, bg);
    const large = parseFloat(cs.fontSize) >= 24 || (parseFloat(cs.fontSize) >= 18.66 && +cs.fontWeight >= 600);
    if (cr < (large ? 3 : 4.5)) out.push({ cr: +cr.toFixed(2), text: t.textContent.trim().slice(0, 60), cls: (el.className || '').toString().slice(0, 80) });
  }
  return out;
})()`;

const browser = await Browser.launch({ width: 1280, height: 900 });
let bad = 0;
for (const p of paths) {
  const page = await browser.newPage({ width: 1280, height: 900, reducedMotion: true });
  try {
    await page.goto(base + p, { settleMs: 600 });
    const issues = await page.eval(PROBE);
    if (issues.length) {
      bad++;
      console.log(`\n${p}`);
      for (const i of issues.slice(0, 8)) console.log(`  ${i.cr}:1  "${i.text}"  [${i.cls}]`);
      if (issues.length > 8) console.log(`  ... ${issues.length - 8} more`);
    }
  } catch (e) {
    console.log(`\n${p}\n  error: ${e.message}`);
  }
  await page.close?.();
}
await browser.close();
console.log(`\n${paths.length} pages audited, ${bad} with low-contrast text`);
process.exit(bad ? 1 : 0);
