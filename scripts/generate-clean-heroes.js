const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const imgDir = path.join(publicDir, 'images');

// Read cropped logo and convert to base64
const logoPath = path.join(publicDir, 'logo-cropped.png');
const logoBase64 = fs.existsSync(logoPath) ? fs.readFileSync(logoPath).toString('base64') : '';

/**
 * Creates ultra high-resolution phone screen SVG with modern smartphone bezel
 * STRICT NEGATIVE CONSTRAINT: ZERO numbers, ZERO digits, ZERO currency symbols anywhere.
 */
function createPhoneScreenSvg(w, h, options = {}) {
  const {
    headline = 'LOAN APPROVED',
    subheadline = 'DOCUMENTS VERIFIED',
    badgeText = 'DIGITALLY VERIFIED',
    accentColor = '#10B981',
    accentBg = '#ECFDF5'
  } = options;

  return Buffer.from(`
    <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="screenBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="60%" stop-color="#F8FAFC" />
          <stop offset="100%" stop-color="#F1F5F9" />
        </linearGradient>

        <linearGradient id="tickGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${accentColor}" />
          <stop offset="100%" stop-color="#059669" />
        </linearGradient>

        <linearGradient id="cardBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#F8FAFC" />
        </linearGradient>

        <filter id="phoneShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#0F172A" flood-opacity="0.25" />
        </filter>
      </defs>

      <!-- Smartphone Outer Bezel (Dark Titanium Frame) -->
      <rect x="2" y="2" width="${w - 4}" height="${h - 4}" rx="24" fill="#0F172A" stroke="#334155" stroke-width="2" filter="url(#phoneShadow)" />

      <!-- Inner Screen Glass -->
      <rect x="5" y="5" width="${w - 10}" height="${h - 10}" rx="20" fill="url(#screenBg)" />

      <!-- Dynamic Island / Camera Notch (Text-free) -->
      <rect x="${w / 2 - 26}" y="10" width="52" height="12" rx="6" fill="#0F172A" />

      <!-- Brand Logo Header: Embedded LoanCentral Logo -->
      <g transform="translate(${w / 2 - 58}, 32)">
        ${logoBase64 ? `<image href="data:image/png;base64,${logoBase64}" width="116" height="32" preserveAspectRatio="xMidYMid meet" />` : `
          <text x="18" y="16" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#0F172A">Loan<tspan fill="#2563EB">Central</tspan></text>
        `}
      </g>

      <!-- Divider line -->
      <line x1="16" y1="72" x2="${w - 16}" y2="72" stroke="#E2E8F0" stroke-width="1" />

      <!-- Verification Badge Circle (Large Glowing Emerald Checkmark) -->
      <g transform="translate(${w / 2}, 132)">
        <circle cx="0" cy="0" r="36" fill="${accentBg}" />
        <circle cx="0" cy="0" r="28" fill="#D1FAE5" />
        <circle cx="0" cy="0" r="22" fill="url(#tickGradient)" filter="drop-shadow(0px 3px 6px rgba(16, 185, 129, 0.4))" />
        <!-- White Checkmark -->
        <path d="M-8 0 L-2 6 L9 -5" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
      </g>

      <!-- Status Headline: Pure Text Only (NO NUMBERS) -->
      <text x="${w / 2}" y="196" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="900" fill="#065F46" letter-spacing="0.5">
        ${headline}
      </text>

      <text x="${w / 2}" y="215" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="9.5" font-weight="800" fill="#059669" letter-spacing="0.6">
        ${subheadline}
      </text>

      <!-- Status Card inside phone: Text-only status indicators -->
      <g transform="translate(16, 238)">
        <rect x="0" y="0" width="${w - 32}" height="106" rx="12" fill="url(#cardBg)" stroke="#E2E8F0" stroke-width="1" />

        <!-- Row 1: Borrower Verification -->
        <g transform="translate(12, 26)">
          <circle cx="6" cy="-3" r="3" fill="#10B981" />
          <text x="16" y="0" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#64748B">BORROWER STATUS</text>
          <text x="${w - 56}" y="0" text-anchor="end" font-family="system-ui, sans-serif" font-size="8.5" font-weight="800" fill="#0F172A">Salaried Verified</text>
        </g>

        <line x1="12" y1="36" x2="${w - 44}" y2="36" stroke="#E2E8F0" stroke-width="0.7" stroke-dasharray="2 2" />

        <!-- Row 2: Repayment Mode -->
        <g transform="translate(12, 54)">
          <circle cx="6" cy="-3" r="3" fill="#2563EB" />
          <text x="16" y="0" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#64748B">REPAYMENT MODE</text>
          <text x="${w - 56}" y="0" text-anchor="end" font-family="system-ui, sans-serif" font-size="8.5" font-weight="800" fill="#2563EB">Single Bullet</text>
        </g>

        <line x1="12" y1="64" x2="${w - 44}" y2="64" stroke="#E2E8F0" stroke-width="0.7" stroke-dasharray="2 2" />

        <!-- Row 3: Security & Collateral -->
        <g transform="translate(12, 82)">
          <circle cx="6" cy="-3" r="3" fill="#059669" />
          <text x="16" y="0" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#64748B">COLLATERAL</text>
          <text x="${w - 56}" y="0" text-anchor="end" font-family="system-ui, sans-serif" font-size="8.5" font-weight="800" fill="#059669">Unsecured Loan</text>
        </g>
      </g>

      <!-- Bottom Verified Badge Pill inside Phone -->
      <g transform="translate(${w / 2}, 374)">
        <rect x="-70" y="-11" width="140" height="22" rx="11" fill="${accentColor}" />
        <circle cx="-54" cy="0" r="4.5" fill="#FFFFFF" />
        <path d="M-56 -0.5 L-54.5 1.5 L-52 -2" fill="none" stroke="${accentColor}" stroke-width="1.3" stroke-linecap="round" />
        <text x="-43" y="3.5" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#FFFFFF" letter-spacing="0.5">
          ${badgeText}
        </text>
      </g>

      <!-- Bottom Home Bar Indicator -->
      <rect x="${w / 2 - 24}" y="${h - 12}" width="48" height="3" rx="1.5" fill="#94A3B8" />
    </svg>
  `);
}

/**
 * Creates subtle LoanCentral watermark pill (NO numbers)
 */
function getWatermarkSvg(imgWidth, imgHeight, label = 'VERIFIED SALARIED') {
  const pillW = Math.max(170, Math.min(260, Math.round(imgWidth * 0.19)));
  const pillH = Math.round(pillW * 0.22);
  const fontSize = Math.round(pillW * 0.082);
  const subFontSize = Math.round(pillW * 0.044);
  const iconSize = Math.round(pillH * 0.55);

  return Buffer.from(`
    <svg width="${pillW}" height="${pillH}" viewBox="0 0 ${pillW} ${pillH}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="1.5" width="${pillW - 3}" height="${pillH - 3}" rx="${Math.round(pillH / 2.5)}" fill="rgba(255, 255, 255, 0.94)" stroke="rgba(255, 255, 255, 0.98)" stroke-width="1.5" />
      <g transform="translate(${Math.round(pillW * 0.08)}, ${Math.round((pillH - iconSize) / 2)})">
        <path d="M${iconSize/2} 0 C${iconSize/2} ${iconSize*0.35} ${iconSize*0.35} ${iconSize/2} 0 ${iconSize/2} C${iconSize*0.35} ${iconSize/2} ${iconSize/2} ${iconSize*0.65} ${iconSize/2} ${iconSize} C${iconSize/2} ${iconSize*0.65} ${iconSize*0.65} ${iconSize/2} ${iconSize} ${iconSize/2} C${iconSize*0.65} ${iconSize/2} ${iconSize/2} ${iconSize*0.35} ${iconSize/2} 0 Z" fill="#2563EB" opacity="0.9" />
      </g>
      <text x="${Math.round(pillW * 0.25)}" y="${Math.round(pillH * 0.52)}" font-family="system-ui, sans-serif" font-size="${fontSize}" font-weight="900" fill="#0F172A" opacity="0.9" letter-spacing="-0.3">
        Loan<tspan fill="#2563EB">Central</tspan>
      </text>
      <text x="${Math.round(pillW * 0.25)}" y="${Math.round(pillH * 0.80)}" font-family="system-ui, sans-serif" font-size="${subFontSize}" font-weight="700" fill="#0D9488" opacity="0.9" letter-spacing="1.2">
        ${label}
      </text>
    </svg>
  `);
}

/**
 * Builds a 1200x800 (3:2 ratio) hero image with strict ZERO NUMBERS constraint.
 */
async function buildHero({
  landmarkFile,
  landmarkPosition = 'left',
  personFile,
  outputBaseName,
  screenOptions,
  watermarkLabel,
  personScreenBounds,
}) {
  const canvasW = 1200;
  const canvasH = 800; // Exact 3:2 ratio

  console.log(`\n--- Building 1200x800: ${outputBaseName} ---`);

  // 1. Process Landmark Background
  let bgBuffer;
  if (landmarkFile) {
    const landmarkPath = path.join(imgDir, landmarkFile);
    bgBuffer = await sharp(landmarkPath)
      .resize(canvasW, canvasH, { fit: 'cover', position: landmarkPosition })
      .modulate({ brightness: 0.97, saturation: 1.08 })
      .blur(1.2)
      .toBuffer();
  }

  // 2. Process Person Foreground
  const personPath = path.join(imgDir, personFile);
  const personResized = await sharp(personPath)
    .resize(canvasW, canvasH, { fit: 'cover', position: 'center' })
    .toBuffer();

  let baseComposite;
  if (landmarkFile) {
    const featherSvg = Buffer.from(`
      <svg width="${canvasW}" height="${canvasH}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="feather" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#000000" stop-opacity="0" />
            <stop offset="25%" stop-color="#000000" stop-opacity="0" />
            <stop offset="42%" stop-color="#FFFFFF" stop-opacity="0.92" />
            <stop offset="55%" stop-color="#FFFFFF" stop-opacity="1" />
            <stop offset="100%" stop-color="#FFFFFF" stop-opacity="1" />
          </linearGradient>
        </defs>
        <rect width="${canvasW}" height="${canvasH}" fill="url(#feather)" />
      </svg>
    `);
    const featherMask = await sharp(featherSvg).toColourspace('b-w').toBuffer();

    const personMasked = await sharp(personResized)
      .ensureAlpha()
      .composite([{ input: featherMask, blend: 'dest-in' }])
      .toBuffer();

    baseComposite = await sharp(bgBuffer)
      .composite([{ input: personMasked, left: 0, top: 0 }])
      .toBuffer();
  } else {
    baseComposite = personResized;
  }

  // 3. Render High-Resolution Phone Screen SVG (ZERO figures / ZERO currency symbols)
  const { minX, minY, w, h } = personScreenBounds;
  console.log('Compositing zero-figure phone screen at:', { minX, minY, w, h });

  const svgScreen = createPhoneScreenSvg(w * 2, h * 2, screenOptions);
  const screenRaster = await sharp(svgScreen)
    .resize(w, h)
    .png()
    .toBuffer();

  // 4. Watermark
  const watermarkBuffer = getWatermarkSvg(canvasW, canvasH, watermarkLabel);
  const wmMeta = await sharp(watermarkBuffer).metadata();
  const wmLeft = canvasW - wmMeta.width - 24;
  const wmTop = canvasH - wmMeta.height - 20;

  // 5. Final Composite
  const finalImage = sharp(baseComposite)
    .composite([
      { input: screenRaster, left: minX, top: minY },
      { input: watermarkBuffer, left: wmLeft, top: wmTop }
    ]);

  const outJpg = path.join(imgDir, `${outputBaseName}.jpg`);
  const outWebp = path.join(imgDir, `${outputBaseName}.webp`);

  await finalImage.clone().jpeg({ quality: 92, mozjpeg: true }).toFile(outJpg);
  console.log('Saved JPEG:', outJpg);

  await finalImage.clone().webp({ quality: 90 }).toFile(outWebp);
  console.log('Saved WebP:', outWebp);
}

async function run() {
  console.log('Generating 1200x800 (3:2 ratio) realistic hero images with ZERO numbers/amounts...');

  // Bounds scaled for 1200x800:
  // hum-loan-approved: outdoor tech campus
  const phoneBoundsOutdoor = {
    minX: Math.round(376 * (1200 / 1200)), // 376
    minY: Math.round(145 * (800 / 675)),  // 172
    w: 184,
    h: Math.round(382 * (800 / 675))   // 452 -> let's make it 400 for realistic proportions
  };

  // hum-documents-verified: modern fintech office
  const phoneBoundsOffice = {
    minX: 296,
    minY: Math.round(125 * (800 / 675)),  // 148
    w: 176,
    h: 395
  };

  // 1. Level 1 Hub: /personal-loan/
  await buildHero({
    landmarkFile: null,
    personFile: 'hum-loan-approved.png',
    outputBaseName: 'personal-loan-hero',
    watermarkLabel: 'PERSONAL LOAN',
    personScreenBounds: phoneBoundsOutdoor,
    screenOptions: {
      headline: 'LOAN APPROVED',
      subheadline: 'DOCUMENTS VERIFIED',
      badgeText: 'DIGITALLY VERIFIED',
      accentColor: '#10B981',
      accentBg: '#ECFDF5'
    }
  });

  // 2. Level 2 Hub: /personal-loan-for-women/
  await buildHero({
    landmarkFile: null,
    personFile: 'hum-documents-verified.png',
    outputBaseName: 'women-hero-hub',
    watermarkLabel: 'WOMEN SALARIED',
    personScreenBounds: phoneBoundsOffice,
    screenOptions: {
      headline: 'LOAN APPROVED',
      subheadline: 'INDEPENDENT CREDIT',
      badgeText: 'DIGITALLY VERIFIED',
      accentColor: '#10B981',
      accentBg: '#ECFDF5'
    }
  });

  // 3. Level 3 Delhi: /personal-loan-for-women/delhi/
  await buildHero({
    landmarkFile: 'india-gate-golden.jpg',
    landmarkPosition: 'left',
    personFile: 'hum-loan-approved.png',
    outputBaseName: 'women-delhi-hero',
    watermarkLabel: 'DELHI NCR',
    personScreenBounds: phoneBoundsOutdoor,
    screenOptions: {
      headline: 'LOAN APPROVED',
      subheadline: 'DOCUMENTS VERIFIED',
      badgeText: 'DIGITALLY VERIFIED',
      accentColor: '#10B981',
      accentBg: '#ECFDF5'
    }
  });

  // 4. Level 3 Mumbai: /personal-loan-for-women/mumbai/
  await buildHero({
    landmarkFile: 'mumbai-gateway.jpg',
    landmarkPosition: 'left',
    personFile: 'hum-documents-verified.png',
    outputBaseName: 'women-mumbai-hero',
    watermarkLabel: 'MUMBAI MMR',
    personScreenBounds: phoneBoundsOffice,
    screenOptions: {
      headline: 'DISBURSED',
      subheadline: 'DOCUMENTS VERIFIED',
      badgeText: 'DIRECT DISBURSAL',
      accentColor: '#059669',
      accentBg: '#D1FAE5'
    }
  });

  // 5. Level 3 Bangalore: /personal-loan-for-women/bangalore/
  await buildHero({
    landmarkFile: 'bangalore-vidhana.jpg',
    landmarkPosition: 'left',
    personFile: 'hum-loan-approved.png',
    outputBaseName: 'women-bangalore-hero',
    watermarkLabel: 'BENGALURU TECH',
    personScreenBounds: phoneBoundsOutdoor,
    screenOptions: {
      headline: 'LOAN APPROVED',
      subheadline: 'DOCUMENTS VERIFIED',
      badgeText: 'DIGITALLY VERIFIED',
      accentColor: '#10B981',
      accentBg: '#ECFDF5'
    }
  });

  // 6. Level 3 Hyderabad: /personal-loan-for-women/hyderabad/
  await buildHero({
    landmarkFile: 'hyderabad-charminar.jpg',
    landmarkPosition: 'left',
    personFile: 'hum-documents-verified.png',
    outputBaseName: 'women-hyderabad-hero',
    watermarkLabel: 'HYDERABAD HITEC',
    personScreenBounds: phoneBoundsOffice,
    screenOptions: {
      headline: 'LOAN APPROVED',
      subheadline: 'DOCUMENTS VERIFIED',
      badgeText: 'DIGITALLY VERIFIED',
      accentColor: '#10B981',
      accentBg: '#ECFDF5'
    }
  });

  // 7. Level 3 Pune: /personal-loan-for-women/pune/
  await buildHero({
    landmarkFile: 'pune-shaniwar.jpg',
    landmarkPosition: 'left',
    personFile: 'hum-loan-approved.png',
    outputBaseName: 'women-pune-hero',
    watermarkLabel: 'PUNE IT PARK',
    personScreenBounds: phoneBoundsOutdoor,
    screenOptions: {
      headline: 'LOAN APPROVED',
      subheadline: 'DOCUMENTS VERIFIED',
      badgeText: 'DIGITALLY VERIFIED',
      accentColor: '#10B981',
      accentBg: '#ECFDF5'
    }
  });

  console.log('\nAll 7 clean 1200x800 zero-figure hero images generated successfully!');
}

run().catch(console.error);
