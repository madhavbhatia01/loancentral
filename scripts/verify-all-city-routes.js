const fs = require('fs');
const path = require('path');

const SLUGS = [
  'delhi', 'mumbai', 'bengaluru', 'hyderabad', 'chennai', 'kolkata',
  'pune', 'ahmedabad', 'jaipur', 'lucknow', 'surat', 'kanpur',
  'nagpur', 'indore', 'bhopal', 'patna', 'vadodara', 'ludhiana',
  'chandigarh', 'coimbatore', 'kochi', 'visakhapatnam', 'agra',
  'nashik', 'faridabad', 'meerut', 'rajkot', 'varanasi', 'thane', 'guwahati',
];

// 1. Update public/sitemap.xml
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
let xml = fs.readFileSync(sitemapPath, 'utf-8');
const today = new Date().toISOString().split('T')[0];
const urls = [
  'https://loancentral.in/loans-by-cities',
  ...SLUGS.map((s) => `https://loancentral.in/personal-loan-in-${s}`),
];
let added = 0;
for (const u of urls) {
  if (!xml.includes(u)) {
    const entry = `  <url>\n    <loc>${u}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    xml = xml.replace('</urlset>', entry + '</urlset>');
    added++;
  }
}
fs.writeFileSync(sitemapPath, xml);
console.log(`Added ${added} URLs to public/sitemap.xml`);

// 2. Verify all 31 routes return HTTP 200 on localhost:3000
(async () => {
  const routes = ['/loans-by-cities', ...SLUGS.map((s) => `/personal-loan-in-${s}`)];
  let failed = 0;
  for (const r of routes) {
    try {
      const res = await fetch(`http://localhost:3000${r}`);
      if (res.status !== 200) {
        console.error(`FAIL ${res.status}: ${r}`);
        failed++;
      } else {
        console.log(`200 OK: ${r}`);
      }
    } catch (err) {
      console.error(`ERR: ${r} -> ${err.message}`);
      failed++;
    }
  }
  console.log(`Checked ${routes.length} routes. Failed: ${failed}`);
  if (failed > 0) process.exit(1);
})();
