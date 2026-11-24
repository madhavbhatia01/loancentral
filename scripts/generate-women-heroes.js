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
 */
function createPhoneScreenSvg(w, h, options = {}) {
  const {
    headline = 'Loan Approved!',
    subheadline = 'DOCUMENTS VERIFIED (DIGILOCKER)',
    amount = '₹50,000',
    tenure = '7 to 50 Days',
    repayment = 'Single Bullet',
    badgeText = 'Disbursal via Credit 91',
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
          <stop offset="0%" stop-color="#F8FAFC" />
          <stop offset="100%" stop-color="#EDF2F7" />
        </linearGradient>

        <filter id="phoneShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#0F172A" flood-opacity="0.25" />
        </filter>
      </defs>

      <!-- Smartphone Outer Bezel (Dark Titanium Frame) -->
      <rect x="2" y="2" width="${w - 4}" height="${h - 4}" rx="24" fill="#1E293B" stroke="#0F172A" stroke-width="2.5" filter="url(#phoneShadow)" />

      <!-- Inner Screen Glass -->
      <rect x="5" y="5" width="${w - 10}" height="${h - 10}" rx="20" fill="url(#screenBg)" />

      <!-- Screen Top Status Bar -->
      <text x="24" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#0F172A">9:41</text>
      <!-- Battery & Signal -->
      <g transform="translate(${w - 48}, 16)">
        <rect x="0" y="1" width="18" height="9" rx="2.5" fill="none" stroke="#0F172A" stroke-width="1.2" />
        <rect x="2" y="3" width="11" height="5" rx="1" fill="#0F172A" />
        <rect x="19" y="4" width="1.5" height="3" rx="0.5" fill="#0F172A" />
      </g>

      <!-- Dynamic Island / Camera Notch -->
      <rect x="${w / 2 - 28}" y="9" width="56" height="13" rx="6.5" fill="#0F172A" />

      <!-- Brand Logo Header: Embedded LoanCentral Logo -->
      <g transform="translate(${w / 2 - 62}, 36)">
        ${logoBase64 ? `<image href="data:image/png;base64,${logoBase64}" width="124" height="34" preserveAspectRatio="xMidYMid meet" />` : `
          <text x="18" y="18" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#0F172A">Loan<tspan fill="#2563EB">Central</tspan></text>
        `}
      </g>

      <!-- Divider line -->
      <line x1="16" y1="76" x2="${w - 16}" y2="76" stroke="#E2E8F0" stroke-width="1" />

      <!-- Verification Badge Circle -->
      <g transform="translate(${w / 2}, 120)">
        <circle cx="0" cy="0" r="30" fill="${accentBg}" />
        <circle cx="0" cy="0" r="24" fill="#D1FAE5" />
        <circle cx="0" cy="0" r="19" fill="url(#tickGradient)" />
        <!-- Checkmark -->
        <path d="M-7 0 L-2 5 L8 -5" fill="none" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
      </g>

      <!-- Headline -->
      <text x="${w / 2}" y="165" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="900" fill="#065F46" letter-spacing="-0.3">
        ${headline}
      </text>
      <text x="${w / 2}" y="180" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="8.5" font-weight="700" fill="#059669" letter-spacing="0.4">
        ${subheadline}
      </text>

      <!-- Approved Credit Limit -->
      <g transform="translate(${w / 2}, 222)">
        <text x="0" y="0" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="900" fill="#0F172A" letter-spacing="-0.6">
          ${amount}
        </text>
        <text x="0" y="15" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="8" font-weight="700" fill="#64748B" letter-spacing="0.5">
          APPROVED CREDIT LIMIT
        </text>
      </g>

      <!-- Details Card inside phone -->
      <g transform="translate(16, 252)">
        <rect x="0" y="0" width="${w - 32}" height="102" rx="10" fill="url(#cardBg)" stroke="#CBD5E1" stroke-width="0.8" />
        
        <!-- Row 1: Single Repayment -->
        <text x="10" y="19" font-family="system-ui, sans-serif" font-size="7.5" font-weight="700" fill="#64748B">REPAYMENT</text>
        <text x="${w - 42}" y="19" text-anchor="end" font-family="system-ui, sans-serif" font-size="8.5" font-weight="800" fill="#2563EB">${repayment}</text>

        <line x1="10" y1="27" x2="${w - 42}" y2="27" stroke="#CBD5E1" stroke-width="0.6" stroke-dasharray="2 2" />

        <!-- Row 2: Repayment Tenure -->
        <text x="10" y="43" font-family="system-ui, sans-serif" font-size="7.5" font-weight="700" fill="#64748B">TENURE</text>
        <text x="${w - 42}" y="43" text-anchor="end" font-family="system-ui, sans-serif" font-size="8.5" font-weight="800" fill="#0F172A">${tenure}</text>

        <line x1="10" y1="51" x2="${w - 42}" y2="51" stroke="#CBD5E1" stroke-width="0.6" stroke-dasharray="2 2" />

        <!-- Row 3: Loan Range -->
        <text x="10" y="67" font-family="system-ui, sans-serif" font-size="7.5" font-weight="700" fill="#64748B">LOAN RANGE</text>
        <text x="${w - 42}" y="67" text-anchor="end" font-family="system-ui, sans-serif" font-size="8.5" font-weight="800" fill="#0F172A">₹10,000 – ₹60,000</text>

        <line x1="10" y1="75" x2="${w - 42}" y2="75" stroke="#CBD5E1" stroke-width="0.6" stroke-dasharray="2 2" />

        <!-- Row 4: Lending Partner Credit 91 -->
        <text x="10" y="91" font-family="system-ui, sans-serif" font-size="7.5" font-weight="700" fill="#64748B">LENDING PARTNER</text>
        <text x="${w - 42}" y="91" text-anchor="end" font-family="system-ui, sans-serif" font-size="8.5" font-weight="800" fill="#059669">Credit 91</text>
      </g>

      <!-- Bottom Verified Badge Pill inside Phone -->
      <g transform="translate(${w / 2}, 372)">
        <rect x="-68" y="-10" width="136" height="20" rx="10" fill="${accentColor}" />
        <circle cx="-54" cy="0" r="4" fill="#FFFFFF" />
        <path d="M-56 -0.5 L-54.5 1 L-52.5 -1.8" fill="none" stroke="${accentColor}" stroke-width="1.2" stroke-linecap="round" />
        <text x="-44" y="3.5" font-family="system-ui, sans-serif" font-size="7.5" font-weight="800" fill="#FFFFFF" letter-spacing="0.2">
          ${badgeText}
        </text>
      </g>

      <!-- Bottom Home Bar Indicator -->
      <rect x="${w / 2 - 24}" y="${h - 11}" width="48" height="3" rx="1.5" fill="#94A3B8" />
    </svg>
  `);
}

/**
 * Creates subtle LoanCentral watermark pill
 */
function getWatermarkSvg(imgWidth, imgHeight, cityLabel = 'FOR WOMEN') {
  const pillW = Math.max(170, Math.min(260, Math.round(imgWidth * 0.19)));
  const pillH = Math.round(pillW * 0.22);
  const fontSize = Math.round(pillW * 0.082);
  const subFontSize = Math.round(pillW * 0.044);
  const iconSize = Math.round(pillH * 0.55);

  return Buffer.from(`
    <svg width="${pillW}" height="${pillH}" viewBox="0 0 ${pillW} ${pillH}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="1.5" width="${pillW - 3}" height="${pillH - 3}" rx="${Math.round(pillH / 2.5)}" fill="rgba(255, 255, 255, 0.92)" stroke="rgba(255, 255, 255, 0.98)" stroke-width="1.5" />
      <g transform="translate(${Math.round(pillW * 0.08)}, ${Math.round((pillH - iconSize) / 2)})">
        <path d="M${iconSize/2} 0 C${iconSize/2} ${iconSize*0.35} ${iconSize*0.35} ${iconSize/2} 0 ${iconSize/2} C${iconSize*0.35} ${iconSize/2} ${iconSize/2} ${iconSize*0.65} ${iconSize/2} ${iconSize} C${iconSize/2} ${iconSize*0.65} ${iconSize*0.65} ${iconSize/2} ${iconSize} ${iconSize/2} C${iconSize*0.65} ${iconSize/2} ${iconSize/2} ${iconSize*0.35} ${iconSize/2} 0 Z" fill="#2563EB" opacity="0.9" />
      </g>
      <text x="${Math.round(pillW * 0.25)}" y="${Math.round(pillH * 0.52)}" font-family="system-ui, sans-serif" font-size="${fontSize}" font-weight="900" fill="#0F172A" opacity="0.9" letter-spacing="-0.3">
        Loan<tspan fill="#2563EB">Central</tspan>
      </text>
      <text x="${Math.round(pillW * 0.25)}" y="${Math.round(pillH * 0.80)}" font-family="system-ui, sans-serif" font-size="${subFontSize}" font-weight="700" fill="#0D9488" opacity="0.88" letter-spacing="1.2">
        ${cityLabel}
      </text>
    </svg>
  `);
}

async function buildHero({
  landmarkFile,
  landmarkPosition = 'center',
  personFile,
  outputBaseName,
  screenOptions,
  watermarkLabel,
  personScreenBounds,
}) {
  const canvasW = 1200;
  const canvasH = 675;

  console.log(`\n--- Building ${outputBaseName} ---`);

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
            <stop offset="42%" stop-color="#FFFFFF" stop-opacity="0.90" />
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

  // 3. Render High-Resolution Phone Screen SVG
  const { minX, minY, w, h } = personScreenBounds;
  console.log('Compositing phone screen at:', { minX, minY, w, h });

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

  await finalImage.clone().jpeg({ quality: 93, mozjpeg: true }).toFile(outJpg);
  console.log('Saved JPEG:', outJpg);

  await finalImage.clone().webp({ quality: 90 }).toFile(outWebp);
  console.log('Saved WebP:', outWebp);
}

async function run() {
  console.log('Generating polished 6 Women Loan Hero Images with realistic smartphone aspect ratio...');

  // hum-loan-approved: Green check is at (468, 286). Screen top ~ 145, left ~ 376, w: 184, h: 376.
  const phoneBoundsOutdoor = {
    minX: 376,
    minY: 145,
    w: 184,
    h: 382
  };

  // hum-documents-verified: Green check is at (384, 257). Screen top ~ 125, left ~ 296, w: 176, h: 360.
  const phoneBoundsOffice = {
    minX: 296,
    minY: 125,
    w: 176,
    h: 365
  };

  // 1. Hub: /personal-loan-for-women
  await buildHero({
    landmarkFile: null,
    personFile: 'hum-loan-approved.png',
    outputBaseName: 'women-hero-hub',
    watermarkLabel: 'FOR WOMEN',
    personScreenBounds: phoneBoundsOutdoor,
    screenOptions: {
      headline: 'Loan Approved!',
      subheadline: 'DOCUMENTS VERIFIED (DIGILOCKER)',
      amount: '₹50,000',
      tenure: '7 to 50 Days',
      repayment: 'Single Bullet',
      badgeText: 'Disbursal via Credit 91',
      accentColor: '#10B981',
      accentBg: '#ECFDF5'
    }
  });

  // 2. Delhi: India Gate background
  await buildHero({
    landmarkFile: 'india-gate-golden.jpg',
    landmarkPosition: 'left',
    personFile: 'hum-loan-approved.png',
    outputBaseName: 'women-delhi-hero',
    watermarkLabel: 'DELHI NCR',
    personScreenBounds: phoneBoundsOutdoor,
    screenOptions: {
      headline: 'Loan Approved!',
      subheadline: 'DOCUMENTS VERIFIED (DELHI)',
      amount: '₹50,000',
      tenure: '7 to 50 Days',
      repayment: 'Single Bullet',
      badgeText: 'Disbursal via Credit 91',
      accentColor: '#10B981',
      accentBg: '#ECFDF5'
    }
  });

  // 3. Mumbai: Gateway of India background
  await buildHero({
    landmarkFile: 'mumbai-gateway.jpg',
    landmarkPosition: 'left',
    personFile: 'hum-documents-verified.png',
    outputBaseName: 'women-mumbai-hero',
    watermarkLabel: 'MUMBAI MMR',
    personScreenBounds: phoneBoundsOffice,
    screenOptions: {
      headline: 'Loan Disbursed!',
      subheadline: 'DOCUMENTS VERIFIED (MUMBAI)',
      amount: '₹45,000',
      tenure: '7 to 50 Days',
      repayment: 'Single Bullet',
      badgeText: 'Disbursed via Credit 91',
      accentColor: '#059669',
      accentBg: '#D1FAE5'
    }
  });

  // 4. Bangalore: Vidhana Soudha background
  await buildHero({
    landmarkFile: 'bangalore-vidhana.jpg',
    landmarkPosition: 'left',
    personFile: 'hum-loan-approved.png',
    outputBaseName: 'women-bangalore-hero',
    watermarkLabel: 'BENGALURU TECH',
    personScreenBounds: phoneBoundsOutdoor,
    screenOptions: {
      headline: 'Loan Approved!',
      subheadline: 'DOCUMENTS VERIFIED (BENGALURU)',
      amount: '₹40,000',
      tenure: '7 to 50 Days',
      repayment: 'Single Bullet',
      badgeText: 'Disbursal via Credit 91',
      accentColor: '#10B981',
      accentBg: '#ECFDF5'
    }
  });

  // 5. Hyderabad: Charminar background
  await buildHero({
    landmarkFile: 'hyderabad-charminar.jpg',
    landmarkPosition: 'left',
    personFile: 'hum-documents-verified.png',
    outputBaseName: 'women-hyderabad-hero',
    watermarkLabel: 'HYDERABAD HITEC',
    personScreenBounds: phoneBoundsOffice,
    screenOptions: {
      headline: 'Loan Approved!',
      subheadline: 'DOCUMENTS VERIFIED (HYDERABAD)',
      amount: '₹40,000',
      tenure: '7 to 50 Days',
      repayment: 'Single Bullet',
      badgeText: 'Disbursal via Credit 91',
      accentColor: '#10B981',
      accentBg: '#ECFDF5'
    }
  });

  // 6. Pune: Shaniwar Wada background
  await buildHero({
    landmarkFile: 'pune-shaniwar.jpg',
    landmarkPosition: 'left',
    personFile: 'hum-loan-approved.png',
    outputBaseName: 'women-pune-hero',
    watermarkLabel: 'PUNE IT PARK',
    personScreenBounds: phoneBoundsOutdoor,
    screenOptions: {
      headline: 'Loan Approved!',
      subheadline: 'DOCUMENTS VERIFIED (PUNE)',
      amount: '₹35,000',
      tenure: '7 to 50 Days',
      repayment: 'Single Bullet',
      badgeText: 'Disbursal via Credit 91',
      accentColor: '#10B981',
      accentBg: '#ECFDF5'
    }
  });

  console.log('\nAll 6 Women Hero images successfully regenerated!');
}

run().catch(console.error);
