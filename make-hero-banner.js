const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 1. Generate the Smartphone SVG with LoanCentral Logo, Green Tick Mark, and "Loan Disbursed"
function createSmartphoneSvg(w, h) {
  return Buffer.from(`
    <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Outer Phone Shadow -->
        <filter id="phoneShadow" x="-20%" y="-15%" width="140%" height="135%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="16" stdDeviation="22" flood-color="#000000" flood-opacity="0.45" />
          <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000000" flood-opacity="0.25" />
        </filter>

        <!-- Subtle Inner Screen Gradient -->
        <linearGradient id="screenBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="60%" stop-color="#F8FAFC" />
          <stop offset="100%" stop-color="#EFF6FF" />
        </linearGradient>

        <!-- Tick Mark Gradient -->
        <linearGradient id="tickGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10B981" />
          <stop offset="100%" stop-color="#059669" />
        </linearGradient>

        <!-- Card Gradient -->
        <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F1F5F9" />
          <stop offset="100%" stop-color="#E2E8F0" />
        </linearGradient>
      </defs>

      <!-- Smartphone Hardware Frame -->
      <g filter="url(#phoneShadow)">
        <!-- Outer Bezel (Dark Titanium) -->
        <rect x="8" y="8" width="${w - 16}" height="${h - 16}" rx="38" fill="#0F172A" stroke="#334155" stroke-width="4" />
        
        <!-- Screen Glass -->
        <rect x="15" y="15" width="${w - 30}" height="${h - 30}" rx="32" fill="url(#screenBg)" />
      </g>

      <!-- Dynamic Island / Speaker Notch -->
      <rect x="${w / 2 - 45}" y="24" width="90" height="20" rx="10" fill="#0F172A" />
      <circle cx="${w / 2 + 25}" cy="34" r="3.5" fill="#1E293B" />

      <!-- Screen Top Status Bar -->
      <text x="35" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#0F172A">9:41</text>
      <!-- Battery & 5G Icon Indicators -->
      <g transform="translate(${w - 65}, 28)">
        <rect x="0" y="2" width="18" height="9" rx="2.5" fill="none" stroke="#0F172A" stroke-width="1.2" />
        <rect x="2" y="4" width="12" height="5" rx="1" fill="#0F172A" />
        <rect x="19" y="5" width="1.5" height="3" rx="0.5" fill="#0F172A" />
      </g>

      <!-- App Header: LoanCentral Brand with Sparkle Star Logo -->
      <g transform="translate(${w / 2 - 80}, 56)">
        <!-- Sparkle Star Icon -->
        <path d="M11 0 C11 7.2 7.2 11 0 11 C7.2 11 11 14.8 11 22 C11 14.8 14.8 11 22 11 C14.8 11 11 7.2 11 0 Z" fill="#2563EB" />
        <!-- Brand Title: LoanCentral -->
        <text x="28" y="16" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="900" fill="#0F172A" letter-spacing="-0.3">
          Loan<tspan fill="#2563EB">Central</tspan>
        </text>
        <!-- Subtitle: LOANS FOR BHARAT -->
        <text x="28" y="27" font-family="system-ui, -apple-system, sans-serif" font-size="7.5" font-weight="800" fill="#008080" letter-spacing="1">
          LOANS FOR भारत
        </text>
      </g>

      <!-- Thin App Header Divider -->
      <line x1="25" y1="92" x2="${w - 25}" y2="92" stroke="#E2E8F0" stroke-width="1" />

      <!-- Center: Big Green Success Circular Badge with Tick Mark (✓) -->
      <g transform="translate(${w / 2}, 145)">
        <!-- Outer Halo Ring -->
        <circle cx="0" cy="0" r="38" fill="#ECFDF5" />
        <circle cx="0" cy="0" r="32" fill="#D1FAE5" />
        <!-- Main Green Circle -->
        <circle cx="0" cy="0" r="26" fill="url(#tickGradient)" filter="drop-shadow(0px 4px 8px rgba(16, 185, 129, 0.40))" />
        <!-- Big Bold White Checkmark (✓) -->
        <path d="M-11 0 L-3 8 L11 -7" fill="none" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
      </g>

      <!-- Prominent Headline: LOAN DISBURSED -->
      <text x="${w / 2}" y="206" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="900" fill="#065F46" letter-spacing="-0.2">
        Loan Disbursed!
      </text>

      <!-- Subtext: Credited to Salary Account -->
      <text x="${w / 2}" y="224" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" fill="#047857">
        Successfully credited to Salary Account
      </text>

      <!-- Disbursed Amount (Big Bold ₹50,000) -->
      <g transform="translate(${w / 2}, 274)">
        <text x="0" y="0" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="#0F172A" letter-spacing="-0.5">
          ₹50,000
        </text>
        <text x="0" y="18" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="10.5" font-weight="700" fill="#64748B" letter-spacing="0.5">
          ZERO HIDDEN DEDUCTIONS
        </text>
      </g>

      <!-- Transaction Details Card inside Phone -->
      <g transform="translate(30, 310)">
        <rect x="0" y="0" width="${w - 60}" height="135" rx="16" fill="url(#cardBg)" stroke="#CBD5E1" stroke-width="1" />
        
        <!-- Row 1: Single Repayment Tenure -->
        <text x="14" y="24" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#64748B">REPAYMENT STRUCTURE</text>
        <text x="${w - 74}" y="24" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#2563EB">Single Bullet (40 Days)</text>

        <line x1="14" y1="36" x2="${w - 74}" y2="36" stroke="#CBD5E1" stroke-width="0.8" stroke-dasharray="3 3" />

        <!-- Row 2: Due Date Aligned with Salary -->
        <text x="14" y="56" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#64748B">REPAYMENT DATE</text>
        <text x="${w - 74}" y="56" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0F172A">Aligned with Next salary schedule</text>

        <line x1="14" y1="68" x2="${w - 74}" y2="68" stroke="#CBD5E1" stroke-width="0.8" stroke-dasharray="3 3" />

        <!-- Row 3: Direct Salary Bank -->
        <text x="14" y="88" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#64748B">RECEIVING BANK</text>
        <text x="${w - 74}" y="88" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0F172A">Salary Account (HDFC Bank)</text>

        <line x1="14" y1="100" x2="${w - 74}" y2="100" stroke="#CBD5E1" stroke-width="0.8" stroke-dasharray="3 3" />

        <!-- Row 4: Lending Partner -->
        <text x="14" y="120" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#64748B">LENDING PARTNER</text>
        <text x="${w - 74}" y="120" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#059669">RBI Regulated NBFC</text>
      </g>

      <!-- Bottom Verified Badge Pill inside Phone -->
      <g transform="translate(${w / 2}, 472)">
        <rect x="-105" y="-14" width="210" height="28" rx="14" fill="#10B981" />
        <circle cx="-88" cy="0" r="6" fill="#FFFFFF" />
        <path d="M-90 -1 L-88 1 L-86 -3" fill="none" stroke="#10B981" stroke-width="1.5" stroke-linecap="round" />
        <text x="-76" y="4" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#FFFFFF" letter-spacing="0.2">
          100% Instant Disbursal via IMPS
        </text>
      </g>

      <!-- Home Bar Indicator -->
      <rect x="${w / 2 - 40}" y="${h - 24}" width="80" height="4" rx="2" fill="#94A3B8" />
    </svg>
  `);
}

// 2. Light Semi-Transparent LoanCentral Watermark
function getWatermarkSvg(imgWidth, imgHeight) {
  const pillW = Math.max(180, Math.min(260, Math.round(imgWidth * 0.24)));
  const pillH = Math.round(pillW * 0.22);
  const fontSize = Math.round(pillW * 0.082);
  const subFontSize = Math.round(pillW * 0.044);
  const iconSize = Math.round(pillH * 0.55);

  return Buffer.from(`
    <svg width="${pillW}" height="${pillH}" viewBox="0 0 ${pillW} ${pillH}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="1.5" width="${pillW - 3}" height="${pillH - 3}" rx="${Math.round(pillH / 2.5)}" fill="rgba(255, 255, 255, 0.85)" stroke="rgba(255, 255, 255, 0.95)" stroke-width="1.5" />
      <rect x="2" y="2" width="${pillW - 4}" height="${pillH - 4}" rx="${Math.round(pillH / 2.5)}" fill="rgba(15, 23, 42, 0.04)" />
      <g transform="translate(${Math.round(pillW * 0.08)}, ${Math.round((pillH - iconSize) / 2)})">
        <path d="M${iconSize/2} 0 C${iconSize/2} ${iconSize*0.35} ${iconSize*0.35} ${iconSize/2} 0 ${iconSize/2} C${iconSize*0.35} ${iconSize/2} ${iconSize/2} ${iconSize*0.65} ${iconSize/2} ${iconSize} C${iconSize/2} ${iconSize*0.65} ${iconSize*0.65} ${iconSize/2} ${iconSize} ${iconSize/2} C${iconSize*0.65} ${iconSize/2} ${iconSize/2} ${iconSize*0.35} ${iconSize/2} 0 Z" fill="#2563EB" opacity="0.9" />
      </g>
      <text x="${Math.round(pillW * 0.25)}" y="${Math.round(pillH * 0.52)}" font-family="system-ui, sans-serif" font-size="${fontSize}" font-weight="900" fill="#0F172A" opacity="0.9" letter-spacing="-0.3">
        Loan<tspan fill="#2563EB">Central</tspan>
      </text>
      <text x="${Math.round(pillW * 0.25)}" y="${Math.round(pillH * 0.80)}" font-family="system-ui, sans-serif" font-size="${subFontSize}" font-weight="700" fill="#008080" opacity="0.85" letter-spacing="1.2">
        LOANS FOR भारत
      </text>
    </svg>
  `);
}

async function buildHeroBanner() {
  const baseFamilyPath = path.join(__dirname, 'public', 'images', 'raw-family.jpg');
  const outPath = path.join(__dirname, 'public', 'images', 'hero-happy-approved.jpg');

  // Canvas size: 1200 x 700 (perfect aspect ratio for both mobile and desktop)
  const canvasW = 1200;
  const canvasH = 700;

  // Resize base family picture to fill left & center nicely
  const baseFamilyResized = await sharp(baseFamilyPath)
    .resize(canvasW, canvasH, { fit: 'cover', position: 'center' })
    .toBuffer();

  // Create smartphone SVG: 340 width, 520 height
  const phoneW = 340;
  const phoneH = 515;
  const phoneSvgBuffer = createSmartphoneSvg(phoneW, phoneH);

  // Position phone on the right side:
  // Family is in center/left; phone sits on right with subtle tilt/drop shadow
  const phoneLeft = canvasW - phoneW - 70;
  const phoneTop = Math.round((canvasH - phoneH) / 2) + 15;

  // Watermark SVG
  const watermarkBuffer = getWatermarkSvg(canvasW, canvasH);
  const watermarkMeta = await sharp(watermarkBuffer).metadata();
  const wmLeft = canvasW - watermarkMeta.width - 25;
  const wmTop = canvasH - watermarkMeta.height - 25;

  // Gradient vignette overlay to ensure high contrast and readability on mobile
  const overlaySvg = Buffer.from(`
    <svg width="${canvasW}" height="${canvasH}" viewBox="0 0 ${canvasW} ${canvasH}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Soft dark scrim behind phone to make it pop -->
      <radialGradient id="phoneGlow" cx="${phoneLeft + phoneW / 2}" cy="${phoneTop + phoneH / 2}" r="320" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#0F172A" stop-opacity="0.25" />
        <stop offset="70%" stop-color="#0F172A" stop-opacity="0.10" />
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0" />
      </radialGradient>
      <rect x="0" y="0" width="${canvasW}" height="${canvasH}" fill="url(#phoneGlow)" />
      
      <!-- Subtle bottom gradient -->
      <linearGradient id="bottomShadow" x1="0" y1="60%" x2="0" y2="100%">
        <stop offset="0%" stop-color="#0F172A" stop-opacity="0" />
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.30" />
      </linearGradient>
      <rect x="0" y="0" width="${canvasW}" height="${canvasH}" fill="url(#bottomShadow)" />
    </svg>
  `);

  console.log('Compositing hero banner...');
  const finalImage = await sharp(baseFamilyResized)
    .composite([
      { input: overlaySvg, left: 0, top: 0 },
      { input: phoneSvgBuffer, left: phoneLeft, top: phoneTop },
      { input: watermarkBuffer, left: wmLeft, top: wmTop }
    ])
    .jpeg({ quality: 92 })
    .toBuffer();

  fs.writeFileSync(outPath, finalImage);
  console.log('Success! Saved new hero banner to:', outPath);
}

buildHeroBanner().catch(console.error);
