const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const userUploadedSrc = 'C:/Users/Deepanshu Thakur/.gemini/antigravity/brain/a69563aa-6f7d-49ee-9e41-a33647480f79/.user_uploaded/media_1795461706122_b35751ac.jpg';
const outJpgPath = path.join(__dirname, 'public', 'images', 'delhi-hero.jpg');
const outWebpPath = path.join(__dirname, 'public', 'images', 'delhi-hero.webp');

// Read LoanCentral Logo image and convert to base64
const logoPath = path.join(__dirname, 'public', 'logo-cropped.png');
const logoBase64 = fs.existsSync(logoPath) ? fs.readFileSync(logoPath).toString('base64') : '';

// 2x high resolution screen: 204w x 430h, corner radius 26
function createPhoneScreenSvg(w, h) {
  return Buffer.from(`
    <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="screenBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="60%" stop-color="#F8FAFC" />
          <stop offset="100%" stop-color="#EFF6FF" />
        </linearGradient>

        <linearGradient id="tickGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10B981" />
          <stop offset="100%" stop-color="#059669" />
        </linearGradient>

        <linearGradient id="cardBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#F1F5F9" />
          <stop offset="100%" stop-color="#E2E8F0" />
        </linearGradient>
      </defs>

      <!-- Glass Screen Background -->
      <rect width="${w}" height="${h}" rx="24" fill="url(#screenBg)" />

      <!-- Screen Top Status Bar -->
      <text x="24" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#0F172A">9:41</text>
      <!-- Battery & Signal -->
      <g transform="translate(${w - 48}, 15)">
        <rect x="0" y="2" width="18" height="9" rx="2.5" fill="none" stroke="#0F172A" stroke-width="1.2" />
        <rect x="2" y="4" width="12" height="5" rx="1" fill="#0F172A" />
        <rect x="19" y="5" width="1.5" height="3" rx="0.5" fill="#0F172A" />
      </g>

      <!-- Dynamic Island / Camera Notch -->
      <rect x="${w / 2 - 28}" y="8" width="56" height="13" rx="6.5" fill="#0F172A" />

      <!-- Brand Logo Header: Embedded LoanCentral Logo -->
      <g transform="translate(${w / 2 - 62}, 38)">
        ${logoBase64 ? `<image href="data:image/png;base64,${logoBase64}" width="124" height="36" preserveAspectRatio="xMidYMid meet" />` : `
          <path d="M9 0 C9 5.5 5.5 9 0 9 C5.5 9 9 12.5 9 18 C9 12.5 12.5 9 18 9 C12.5 9 9 5.5 9 0 Z" fill="#2563EB" />
          <text x="22" y="13" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#0F172A">Loan<tspan fill="#2563EB">Central</tspan></text>
        `}
      </g>

      <!-- Subtle Divider -->
      <line x1="16" y1="80" x2="${w - 16}" y2="80" stroke="#E2E8F0" stroke-width="1" />

      <!-- Green Circular Tickbox / Verification Badge -->
      <g transform="translate(${w / 2}, 128)">
        <!-- Outer Glowing Ring -->
        <circle cx="0" cy="0" r="32" fill="#ECFDF5" />
        <circle cx="0" cy="0" r="26" fill="#D1FAE5" />
        <!-- Emerald Green Check Circle -->
        <circle cx="0" cy="0" r="21" fill="url(#tickGradient)" filter="drop-shadow(0px 3px 6px rgba(16, 185, 129, 0.35))" />
        <!-- White Checkmark (✓) -->
        <path d="M-8 0 L-2 6 L9 -5" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
      </g>

      <!-- Headline: LOAN APPROVED / DOCUMENTS VERIFIED -->
      <text x="${w / 2}" y="174" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="900" fill="#065F46" letter-spacing="-0.2">
        Loan Approved!
      </text>
      <text x="${w / 2}" y="190" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="9" font-weight="700" fill="#059669" letter-spacing="0.2">
        DOCUMENTS VERIFIED (DIGILOCKER)
      </text>

      <!-- Approved Credit Amount: Big Bold ₹50,000 -->
      <g transform="translate(${w / 2}, 232)">
        <text x="0" y="0" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="900" fill="#0F172A" letter-spacing="-0.5">
          ₹50,000
        </text>
        <text x="0" y="16" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="8.5" font-weight="700" fill="#64748B" letter-spacing="0.5">
          APPROVED CREDIT LIMIT
        </text>
      </g>

      <!-- Details Card inside phone -->
      <g transform="translate(18, 264)">
        <rect x="0" y="0" width="${w - 36}" height="106" rx="12" fill="url(#cardBg)" stroke="#CBD5E1" stroke-width="0.8" />
        
        <!-- Row 1: Single Repayment -->
        <text x="10" y="20" font-family="system-ui, sans-serif" font-size="7.5" font-weight="700" fill="#64748B">REPAYMENT</text>
        <text x="${w - 46}" y="20" text-anchor="end" font-family="system-ui, sans-serif" font-size="8.5" font-weight="800" fill="#2563EB">Single Bullet</text>

        <line x1="10" y1="28" x2="${w - 46}" y2="28" stroke="#CBD5E1" stroke-width="0.6" stroke-dasharray="2 2" />

        <!-- Row 2: Repayment Tenure -->
        <text x="10" y="44" font-family="system-ui, sans-serif" font-size="7.5" font-weight="700" fill="#64748B">TENURE</text>
        <text x="${w - 46}" y="44" text-anchor="end" font-family="system-ui, sans-serif" font-size="8.5" font-weight="800" fill="#0F172A">7 to 50 Days</text>

        <line x1="10" y1="52" x2="${w - 46}" y2="52" stroke="#CBD5E1" stroke-width="0.6" stroke-dasharray="2 2" />

        <!-- Row 3: Loan Range -->
        <text x="10" y="68" font-family="system-ui, sans-serif" font-size="7.5" font-weight="700" fill="#64748B">LOAN RANGE</text>
        <text x="${w - 46}" y="68" text-anchor="end" font-family="system-ui, sans-serif" font-size="8.5" font-weight="800" fill="#0F172A">₹10,000 – ₹60,000</text>

        <line x1="10" y1="76" x2="${w - 46}" y2="76" stroke="#CBD5E1" stroke-width="0.6" stroke-dasharray="2 2" />

        <!-- Row 4: Lending Partner Credit 91 -->
        <text x="10" y="92" font-family="system-ui, sans-serif" font-size="7.5" font-weight="700" fill="#64748B">LENDING PARTNER</text>
        <text x="${w - 46}" y="92" text-anchor="end" font-family="system-ui, sans-serif" font-size="8.5" font-weight="800" fill="#059669">Credit 91</text>
      </g>

      <!-- Bottom Verified Badge Pill inside Phone -->
      <g transform="translate(${w / 2}, 392)">
        <rect x="-70" y="-10" width="140" height="20" rx="10" fill="#10B981" />
        <circle cx="-56" cy="0" r="4.5" fill="#FFFFFF" />
        <path d="M-58 -0.5 L-56.5 1 L-54.5 -2" fill="none" stroke="#10B981" stroke-width="1.2" stroke-linecap="round" />
        <text x="-46" y="3.5" font-family="system-ui, sans-serif" font-size="7.5" font-weight="800" fill="#FFFFFF" letter-spacing="0.2">
          Disbursal via Credit 91
        </text>
      </g>

      <!-- Bottom Home Bar Indicator -->
      <rect x="${w / 2 - 25}" y="${h - 12}" width="50" height="3" rx="1.5" fill="#94A3B8" />
    </svg>
  `);
}

// Subtle LoanCentral Watermark
function getWatermarkSvg(imgWidth, imgHeight) {
  const pillW = Math.max(160, Math.min(240, Math.round(imgWidth * 0.18)));
  const pillH = Math.round(pillW * 0.22);
  const fontSize = Math.round(pillW * 0.082);
  const subFontSize = Math.round(pillW * 0.044);
  const iconSize = Math.round(pillH * 0.55);

  return Buffer.from(`
    <svg width="${pillW}" height="${pillH}" viewBox="0 0 ${pillW} ${pillH}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="1.5" width="${pillW - 3}" height="${pillH - 3}" rx="${Math.round(pillH / 2.5)}" fill="rgba(255, 255, 255, 0.88)" stroke="rgba(255, 255, 255, 0.95)" stroke-width="1.5" />
      <g transform="translate(${Math.round(pillW * 0.08)}, ${Math.round((pillH - iconSize) / 2)})">
        <path d="M${iconSize/2} 0 C${iconSize/2} ${iconSize*0.35} ${iconSize*0.35} ${iconSize/2} 0 ${iconSize/2} C${iconSize*0.35} ${iconSize/2} ${iconSize/2} ${iconSize*0.65} ${iconSize/2} ${iconSize} C${iconSize/2} ${iconSize*0.65} ${iconSize*0.65} ${iconSize/2} ${iconSize} ${iconSize/2} C${iconSize*0.65} ${iconSize/2} ${iconSize/2} ${iconSize*0.35} ${iconSize/2} 0 Z" fill="#2563EB" opacity="0.9" />
      </g>
      <text x="${Math.round(pillW * 0.25)}" y="${Math.round(pillH * 0.52)}" font-family="system-ui, sans-serif" font-size="${fontSize}" font-weight="900" fill="#0F172A" opacity="0.9" letter-spacing="-0.3">
        Loan<tspan fill="#2563EB">Central</tspan>
      </text>
      <text x="${Math.round(pillW * 0.25)}" y="${Math.round(pillH * 0.80)}" font-family="system-ui, sans-serif" font-size="${subFontSize}" font-weight="700" fill="#0D9488" opacity="0.85" letter-spacing="1.2">
        DELHI NCR
      </text>
    </svg>
  `);
}

async function run() {
  console.log('Loading user image:', userUploadedSrc);

  const canvasW = 1200;
  const canvasH = 675; // 16:9 aspect ratio

  // 1. Resize base user image to 1200x675
  const baseResized = await sharp(userUploadedSrc)
    .resize(canvasW, canvasH, { fit: 'cover', position: 'center' })
    .toBuffer();

  // 2. Exact phone screen dimensions and position on the 1200x675 canvas
  // Base image (1024x576) had screen at left: 793, top: 220, w: 88, h: 178
  // Scaled by 1200/1024 = 1.171875
  const screenW = Math.round(87 * 1.171875); // ~102
  const screenH = Math.round(179 * 1.171875); // ~210
  const screenLeft = Math.round(794 * 1.171875); // ~930
  const screenTop = Math.round(220 * 1.171875); // ~258

  console.log('Compositing phone screen at:', { screenLeft, screenTop, screenW, screenH });

  // Generate 2x crisp SVG buffer and scale to exact screen size
  const svgBuffer = createPhoneScreenSvg(screenW * 2, screenH * 2);
  const screenRaster = await sharp(svgBuffer)
    .resize(screenW, screenH)
    .png()
    .toBuffer();

  // Watermark
  const watermarkBuffer = getWatermarkSvg(canvasW, canvasH);
  const wmMeta = await sharp(watermarkBuffer).metadata();
  const wmLeft = canvasW - wmMeta.width - 24;
  const wmTop = canvasH - wmMeta.height - 20;

  console.log('Compositing final hero banner...');
  const finalImage = await sharp(baseResized)
    .composite([
      { input: screenRaster, left: screenLeft, top: screenTop },
      { input: watermarkBuffer, left: wmLeft, top: wmTop }
    ]);

  await finalImage.clone().jpeg({ quality: 92, mozjpeg: true }).toFile(outJpgPath);
  console.log('Saved JPEG:', outJpgPath);

  await finalImage.clone().webp({ quality: 90 }).toFile(outWebpPath);
  console.log('Saved WebP:', outWebpPath);

  console.log('Done! Generated Delhi hero image with custom phone UI and site logo.');
}

run().catch(console.error);
