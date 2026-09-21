import { ALL_INDEXABLE_ROUTES, absoluteUrl } from '../lib/site';

/** Build-time snapshot — Google gets stable 200 XML with no metadata-route quirks. */
export const dynamic = 'force-static';

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function GET() {
  const lastmod = new Date().toISOString();
  const body = ALL_INDEXABLE_ROUTES.filter((route) => route.index)
    .map((route) => {
      const loc = escapeXml(absoluteUrl(route.path));
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

  return new Response(xml, {
    headers: {
      // text/xml is the most widely accepted sitemap Content-Type for GSC
      'Content-Type': 'text/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, must-revalidate',
    },
  });
}
