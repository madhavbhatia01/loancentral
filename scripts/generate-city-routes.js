const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');
const dynamicDir = path.join(APP_DIR, 'personal-loan-in-[city]');
if (fs.existsSync(dynamicDir)) {
  fs.rmSync(dynamicDir, { recursive: true, force: true });
  console.log('Removed invalid app/personal-loan-in-[city]');
}

const SLUGS = [
  'delhi', 'mumbai', 'bengaluru', 'hyderabad', 'chennai', 'kolkata',
  'pune', 'ahmedabad', 'jaipur', 'lucknow', 'surat', 'kanpur',
  'nagpur', 'indore', 'bhopal', 'patna', 'vadodara', 'ludhiana',
  'chandigarh', 'coimbatore', 'kochi', 'visakhapatnam', 'agra',
  'nashik', 'faridabad', 'meerut', 'rajkot', 'varanasi', 'thane', 'guwahati',
];

let created = 0;
for (const slug of SLUGS) {
  const dir = path.join(APP_DIR, `personal-loan-in-${slug}`);
  const file = path.join(dir, 'page.tsx');
  if (fs.existsSync(file)) {
    continue;
  }
  fs.mkdirSync(dir, { recursive: true });
  const content = `import type { Metadata } from "next";
import { buildCityMetadata, CityGuidePage } from "@/src/lib/city-guide-page";

export const metadata: Metadata = buildCityMetadata("${slug}");

export default function Page() {
  return <CityGuidePage slug="${slug}" />;
}
`;
  fs.writeFileSync(file, content);
  created++;
}

console.log(`Created ${created} new static city route pages.`);
