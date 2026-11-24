const sharp = require('sharp');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

async function copy1200x800(srcFile, outBase, position = 'center') {
  const srcPath = path.join(IMAGES_DIR, srcFile);
  const pipeline = sharp(srcPath).resize(1200, 800, { fit: 'cover', position });
  await pipeline.clone().webp({ quality: 90 }).toFile(path.join(IMAGES_DIR, `${outBase}.webp`));
  await pipeline.clone().jpeg({ quality: 90 }).toFile(path.join(IMAGES_DIR, `${outBase}.jpg`));
  console.log(`Generated ${outBase}.webp & .jpg from ${srcFile}`);
}

function phoneBadgeSvg(statusText) {
  return Buffer.from(`
    <svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.30"/>
        </filter>
      </defs>
      <g transform="translate(860, 210)" filter="url(#shadow)">
        <rect x="0" y="0" width="270" height="460" rx="34" fill="#0f172a" stroke="#334155" stroke-width="4"/>
        <rect x="12" y="14" width="246" height="432" rx="24" fill="#ffffff"/>
        <rect x="92" y="24" width="86" height="16" rx="8" fill="#0f172a"/>
        <circle cx="135" cy="175" r="46" fill="#ecfdf5" stroke="#10b981" stroke-width="4"/>
        <path d="M115 175 L129 189 L157 160" fill="none" stroke="#059669" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="135" y="268" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="900" fill="#0f172a">${statusText}</text>
        <text x="135" y="302" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#64748b">Digital KYC Complete</text>
      </g>
    </svg>
  `);
}

async function composeWithPhone(srcFile, outBase, statusText, position = 'north', cropBottomWatermark = false) {
  const srcPath = path.join(IMAGES_DIR, srcFile);
  let img = sharp(srcPath);
  if (cropBottomWatermark) {
    const meta = await img.metadata();
    // Crop bottom 14% to remove old watermark cleanly
    img = img.extract({ left: 0, top: 0, width: meta.width, height: Math.floor(meta.height * 0.86) });
  }
  const pipeline = img
    .resize(1200, 800, { fit: 'cover', position })
    .composite([{ input: phoneBadgeSvg(statusText), top: 0, left: 0 }]);

  await pipeline.clone().webp({ quality: 90 }).toFile(path.join(IMAGES_DIR, `${outBase}.webp`));
  await pipeline.clone().jpeg({ quality: 90 }).toFile(path.join(IMAGES_DIR, `${outBase}.jpg`));
  console.log(`Generated unique composite ${outBase}.webp & .jpg from ${srcFile}`);
}

async function main() {
  // 6 completely distinct images across Hub + 5 Cities
  await copy1200x800('hum-loan-approved.png', 'women-hero-hub', 'north');
  await copy1200x800('hum-documents-verified.png', 'women-delhi-hero', 'north');
  await copy1200x800('hum-hero-loan-disbursed.png', 'women-mumbai-hero', 'center');
  await copy1200x800('hum-money-received.png', 'women-bangalore-hero', 'north');
  await composeWithPhone('base-woman.jpg', 'women-hyderabad-hero', 'Loan approved', 'north', false);
  await composeWithPhone('salary-40k-professional.jpg', 'women-pune-hero', 'Documents verified', 'center', true);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
