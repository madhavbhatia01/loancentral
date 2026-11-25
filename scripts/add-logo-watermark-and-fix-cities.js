const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');
const LOGO_PATH = path.join(PUBLIC_DIR, 'logo.png');

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

async function getWatermarkBuffer(width = 200, opacity = 0.22) {
  const resized = await sharp(LOGO_PATH)
    .resize({ width, withoutEnlargement: true })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = resized;
  for (let i = 3; i < data.length; i += 4) {
    data[i] = Math.round(data[i] * opacity);
  }

  return sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png()
    .toBuffer();
}

async function composeIndianCityHero(srcFile, outBase, statusText, watermarkBuf) {
  const srcPath = path.join(IMAGES_DIR, srcFile);
  const meta = await sharp(srcPath).metadata();
  const img = sharp(srcPath).extract({
    left: 0,
    top: 0,
    width: meta.width,
    height: Math.floor(meta.height * 0.86),
  });

  const pipeline = img
    .resize(1200, 800, { fit: 'cover', position: 'north' })
    .composite([
      { input: phoneBadgeSvg(statusText), top: 0, left: 0 },
      { input: watermarkBuf, gravity: 'southwest' },
    ]);

  await pipeline.clone().webp({ quality: 90 }).toFile(path.join(IMAGES_DIR, `${outBase}.webp`));
  await pipeline.clone().jpeg({ quality: 90 }).toFile(path.join(IMAGES_DIR, `${outBase}.jpg`));
  console.log(`Updated Indian hero + watermark: ${outBase}.webp & .jpg`);
}

async function addWatermarkToExisting(fileName, watermarkBuf) {
  const filePath = path.join(IMAGES_DIR, fileName);
  if (!fs.existsSync(filePath)) return;

  const inputBuf = fs.readFileSync(filePath);
  const meta = await sharp(inputBuf).metadata();
  const wmWidth = Math.max(120, Math.min(220, Math.round((meta.width || 1200) * 0.16)));
  const wm = await getWatermarkBuffer(wmWidth, 0.22);

  const buf = await sharp(inputBuf)
    .composite([{ input: wm, gravity: 'southwest' }])
    .toBuffer();

  fs.writeFileSync(filePath, buf);
  console.log(`Watermarked ${fileName}`);
}

async function main() {
  const watermarkBuf = await getWatermarkBuffer(200, 0.22);

  // 1. Replace Hyderabad & Pune with Indian professionals + phone badge + watermark
  await composeIndianCityHero('salary-30k-professional.jpg', 'women-hyderabad-hero', 'Loan approved', watermarkBuf);
  await composeIndianCityHero('salary-35k-professional.jpg', 'women-pune-hero', 'Documents verified', watermarkBuf);

  // 2. Add light transparent logo watermark to all other hero/city/loan-type images
  const targets = [
    'women-hero-hub.webp',
    'women-hero-hub.jpg',
    'women-delhi-hero.webp',
    'women-delhi-hero.jpg',
    'women-mumbai-hero.webp',
    'women-mumbai-hero.jpg',
    'women-bangalore-hero.webp',
    'women-bangalore-hero.jpg',
    'personal-loan-hero.webp',
    'personal-loan-hero.jpg',
    'education-loan-hero.webp',
    'education-loan-hero.jpg',
    'home-repair-loan-hero.webp',
    'home-repair-loan-hero.jpg',
    'medical-loan-hero.webp',
    'medical-loan-hero.jpg',
    'travel-loan-hero.webp',
    'travel-loan-hero.jpg',
    'wedding-loan-hero.webp',
    'wedding-loan-hero.jpg',
    'delhi-hero.webp',
    'delhi-hero.jpg',
    'hero-happy-approved.jpg',
  ];

  for (const file of targets) {
    await addWatermarkToExisting(file, watermarkBuf);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
