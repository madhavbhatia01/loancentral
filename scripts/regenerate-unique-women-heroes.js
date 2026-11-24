const sharp = require('sharp');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

function buildPhoneScreenOverlay(statusTitle, subLabel) {
  return Buffer.from(`
    <svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="vignette" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#0f172a" stop-opacity="0.05"/>
          <stop offset="65%" stop-color="#0f172a" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="#0f172a" stop-opacity="0.55"/>
        </linearGradient>
        <filter id="drop" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#000000" flood-opacity="0.35"/>
        </filter>
      </defs>
      <rect width="1200" height="800" fill="url(#vignette)" />
      <!-- Smartphone Mockup Card (STRICTLY ZERO NUMBERS / ZERO CURRENCY) -->
      <g transform="translate(830, 140)" filter="url(#drop)">
        <rect x="0" y="0" width="300" height="520" rx="38" fill="#0f172a" stroke="#334155" stroke-width="4"/>
        <rect x="14" y="16" width="272" height="488" rx="28" fill="#ffffff"/>
        <!-- Dynamic Island -->
        <rect x="105" y="28" width="90" height="18" rx="9" fill="#0f172a"/>
        <!-- Circular Green Checkmark Badge -->
        <circle cx="150" cy="175" r="54" fill="#ecfdf5" stroke="#10b981" stroke-width="4"/>
        <path d="M126 175 L143 192 L176 157" fill="none" stroke="#059669" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Status Text -->
        <text x="150" y="278" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="900" fill="#0f172a">${statusTitle}</text>
        <text x="150" y="312" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="#475569">${subLabel}</text>
        <!-- Clean Verification Pill -->
        <rect x="45" y="360" width="210" height="36" rx="18" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
        <text x="150" y="383" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="#1d4ed8">DIGITAL KYC VERIFIED</text>
        <!-- Brand Footer inside phone -->
        <text x="150" y="458" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="800" fill="#0f172a">LoanCentral</text>
      </g>
    </svg>
  `);
}

async function generateCityHero(bgFile, outBase, statusTitle, subLabel) {
  const bgPath = path.join(IMAGES_DIR, bgFile);
  const overlay = buildPhoneScreenOverlay(statusTitle, subLabel);

  const pipeline = sharp(bgPath)
    .resize(1200, 800, { fit: 'cover', position: 'center' })
    .composite([{ input: overlay, top: 0, left: 0 }]);

  await pipeline.clone().webp({ quality: 88 }).toFile(path.join(IMAGES_DIR, `${outBase}.webp`));
  await pipeline.clone().jpeg({ quality: 88 }).toFile(path.join(IMAGES_DIR, `${outBase}.jpg`));
  console.log(`Generated unique 1200x800 hero: ${outBase}.webp & .jpg (from ${bgFile})`);
}

async function main() {
  await generateCityHero('base-woman.jpg', 'women-hero-hub', 'LOAN APPROVED', 'Women Salaried Program');
  await generateCityHero('india-gate-golden.jpg', 'women-delhi-hero', 'LOAN APPROVED', 'Delhi NCR · India Gate');
  await generateCityHero('mumbai-gateway.jpg', 'women-mumbai-hero', 'DOCUMENTS VERIFIED', 'Mumbai · Gateway of India');
  await generateCityHero('bangalore-vidhana.jpg', 'women-bangalore-hero', 'DISBURSED', 'Bangalore · Vidhana Soudha');
  await generateCityHero('hyderabad-charminar.jpg', 'women-hyderabad-hero', 'LOAN APPROVED', 'Hyderabad · Charminar');
  await generateCityHero('pune-shaniwar.jpg', 'women-pune-hero', 'DOCUMENTS VERIFIED', 'Pune · Shaniwar Wada');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
