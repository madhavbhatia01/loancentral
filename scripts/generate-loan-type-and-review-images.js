const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

async function createAvatar(srcFile, outFile) {
  const srcPath = path.join(IMAGES_DIR, srcFile);
  const outPath = path.join(IMAGES_DIR, outFile);
  await sharp(srcPath)
    .resize(240, 240, { fit: 'cover', position: 'north' })
    .webp({ quality: 88 })
    .toFile(outPath);
  console.log(`Created avatar: ${outFile}`);
}

function makeBadgeSvg(titleText, subtitleText) {
  return Buffer.from(`
    <svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0f172a" stop-opacity="0.10"/>
          <stop offset="100%" stop-color="#0f172a" stop-opacity="0.45"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.28"/>
        </filter>
      </defs>
      <rect width="1200" height="800" fill="url(#bgGrad)" />
      <!-- Clean Phone / Verification Pill (STRICTLY ZERO FIGURES) -->
      <g transform="translate(820, 480)" filter="url(#shadow)">
        <rect x="0" y="0" width="330" height="260" rx="28" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
        <circle cx="165" cy="82" r="42" fill="#ecfdf5" stroke="#10b981" stroke-width="3"/>
        <path d="M147 82 L160 95 L186 67" fill="none" stroke="#059669" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="165" y="160" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="800" fill="#0f172a">${titleText}</text>
        <text x="165" y="192" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="#64748b">${subtitleText}</text>
        <rect x="75" y="214" width="180" height="24" rx="12" fill="#eff6ff"/>
        <text x="165" y="230" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#2563eb">100% PAPERLESS E-KYC</text>
      </g>
    </svg>
  `);
}

async function createHero(srcFile, outFile, titleText, subtitleText) {
  const srcPath = path.join(IMAGES_DIR, srcFile);
  const outPath = path.join(IMAGES_DIR, outFile);
  const svgOverlay = makeBadgeSvg(titleText, subtitleText);

  await sharp(srcPath)
    .resize(1200, 800, { fit: 'cover', position: 'center' })
    .composite([{ input: svgOverlay, top: 0, left: 0 }])
    .webp({ quality: 88 })
    .toFile(outPath);

  console.log(`Created hero: ${outFile} (1200x800)`);
}

async function main() {
  // 1. Create 4 Salaried Reviewer Avatars
  await createAvatar('base-woman.jpg', 'reviewer-ananya.webp');
  await createAvatar('base-man.jpg', 'reviewer-rahul.webp');
  await createAvatar('salary-25k-professional.jpg', 'reviewer-priya.webp');
  await createAvatar('salary-40k-professional.jpg', 'reviewer-vikram.webp');

  // 2. Create 5 Loan Type Hero Images (1200x800, ZERO FIGURES)
  await createHero('salary-30k-professional.jpg', 'medical-loan-hero.webp', 'LOAN APPROVED', 'Medical Emergency Disbursal');
  await createHero('happy-family-loan.jpg', 'wedding-loan-hero.webp', 'DOCUMENTS VERIFIED', 'Digital Wedding Credit');
  await createHero('salary-35k-professional.jpg', 'home-repair-loan-hero.webp', 'DISBURSED', 'Home &amp; Auto Repair Funds');
  await createHero('salary-50k-professional.jpg', 'education-loan-hero.webp', 'LOAN APPROVED', 'Education &amp; Upskilling');
  await createHero('salary-40k-professional.jpg', 'travel-loan-hero.webp', 'DOCUMENTS VERIFIED', 'Emergency Travel Support');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
