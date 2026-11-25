const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const sitemapPath = path.join(root, "public", "sitemap.xml");
const manifest = JSON.parse(
  fs.readFileSync(path.join(root, "src", "data", "image-manifest.json"), "utf8")
);
const start = "  <!-- Instant city search variants -->";
const end = "  <!-- End instant city search variants -->";
const entries = manifest.flatMap(({ slug }) =>
  ["instant-personal-loan-in", "instant-loan-in"].map(
    (prefix) => `  <url>\n    <loc>https://loancentral.in/${prefix}-${slug}</loc>\n    <lastmod>2026-11-25</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`
  )
);
const salaryTiers = [30000, 35000, 40000, 45000, 50000, 60000, 70000, 80000, 90000, 100000];
const intentPrefixes = [
  "personal-loan",
  "instant-personal-loan",
  "instant-loan",
  "salary-loan",
  "urgent-loan",
  "emergency-loan",
  "quick-personal-loan",
  "online-personal-loan",
  "paperless-personal-loan",
  "digital-personal-loan",
];
const salaryEntries = manifest.flatMap(({ slug }) =>
  intentPrefixes.flatMap((prefix) => salaryTiers.map(
    (salary) => `  <url>\n    <loc>https://loancentral.in/${prefix}-in-${slug}-for-${salary}-salary</loc>\n    <lastmod>2026-11-25</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`
  ))
);

let xml = fs.readFileSync(sitemapPath, "utf8");
const block = `${start}\n${entries.join("\n")}\n${end}`;
const existing = new RegExp(`${start}[\\s\\S]*?${end}`);
xml = existing.test(xml)
  ? xml.replace(existing, block)
  : xml.replace("</urlset>", `${block}\n</urlset>`);
const salaryStart = "  <!-- City and salary search variants -->";
const salaryEnd = "  <!-- End city and salary search variants -->";
const salaryBlock = `${salaryStart}\n${salaryEntries.join("\n")}\n${salaryEnd}`;
const existingSalary = new RegExp(`${salaryStart}[\\s\\S]*?${salaryEnd}`);
xml = existingSalary.test(xml)
  ? xml.replace(existingSalary, salaryBlock)
  : xml.replace("</urlset>", `${salaryBlock}\n</urlset>`);
fs.writeFileSync(sitemapPath, xml);
console.log(`Added ${entries.length} instant and ${salaryEntries.length} salary-city URLs to sitemap.xml.`);
