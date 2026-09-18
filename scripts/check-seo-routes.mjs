import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const siteTs = readFileSync(join(root, 'app/lib/site.ts'), 'utf8');
const sitemapTs = readFileSync(join(root, 'app/sitemap.ts'), 'utf8');
const robotsTs = readFileSync(join(root, 'app/robots.ts'), 'utf8');
const llmsTxt = readFileSync(join(root, 'public/llms.txt'), 'utf8');

const required = ['/', '/about', '/contact', '/product-catalogue', '/linguistics', '/site-map'];
for (const path of required) {
  assert.ok(siteTs.includes(`path: '${path}'`), `missing route ${path} in site.ts`);
}

assert.ok(sitemapTs.includes('ALL_INDEXABLE_ROUTES'), 'sitemap must use route inventory');
assert.ok(robotsTs.includes('sitemap.xml'), 'robots must point to sitemap');
assert.ok(llmsTxt.includes('Shrim Export'), 'llms.txt must describe the business');
assert.ok(siteTs.includes('privacy-policy') || siteTs.includes('LEGAL_NAV'), 'legal routes wired');

console.log('SEO route inventory check passed');
