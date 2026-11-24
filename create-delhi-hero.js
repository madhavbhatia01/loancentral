const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 1. Watermark SVG matching LoanCentral Brand
function getWatermarkSvg(imgWidth, imgHeight) {
  const pillW = Math.max(180, Math.min(260, Math.round(imgWidth * 0.22)));
  const pillH = Math.round(pillW * 0.22);
  const fontSize = Math.round(pillW * 0.082);
  const subFontSize = Math.round(pillW * 0.044);
  const iconSize = Math.round(pillH * 0.55);

  return Buffer.from(`
    <svg width="${pillW}" height="${pillH}" viewBox="0 0 ${pillW} ${pillH}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="1.5" width="${pillW - 3}" height="${pillH - 3}" rx="${Math.round(pillH / 2.5)}" fill="rgba(255, 255, 255, 0.88)" stroke="rgba(255, 255, 255, 0.95)" stroke-width="1.5" />
      <rect x="2" y="2" width="${pillW - 4}" height="${pillH - 4}" rx="${Math.round(pillH / 2.5)}" fill="rgba(15, 23, 42, 0.04)" />
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

// 2. Controlled Smartphone Mockup (STRICT COMPLIANCE: Screen is blank/dark neutral glass, NO TEXT, NO CURRENCY)
function createCleanSmartphoneSvg(w, h) {
  return Buffer.from(`
    <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="phoneShadow" x="-20%" y="-15%" width="140%" height="135%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.45" />
          <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000000" flood-opacity="0.25" />
        </filter>

        <!-- Elegant titanium dark glass finish on screen with subtle blue/teal sheen -->
        <linearGradient id="cleanScreenBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E293B" />
          <stop offset="40%" stop-color="#0F172A" />
          <stop offset="100%" stop-color="#091E3A" />
        </linearGradient>

        <linearGradient id="sheenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.12" />
          <stop offset="40%" stop-color="#FFFFFF" stop-opacity="0.04" />
          <stop offset="60%" stop-color="#FFFFFF" stop-opacity="0" />
        </linearGradient>
      </defs>

      <!-- Smartphone Hardware Frame -->
      <g filter="url(#phoneShadow)">
        <!-- Outer Bezel -->
        <rect x="6" y="6" width="${w - 12}" height="${h - 12}" rx="36" fill="#0F172A" stroke="#334155" stroke-width="3.5" />
        
        <!-- Screen Glass - Completely clean, dark titanium sheen -->
        <rect x="12" y="12" width="${w - 24}" height="${h - 24}" rx="30" fill="url(#cleanScreenBg)" />
        
        <!-- Diagonal glass reflection sheen -->
        <rect x="12" y="12" width="${w - 24}" height="${h - 24}" rx="30" fill="url(#sheenGradient)" />
      </g>

      <!-- Dynamic Island / Speaker Notch -->
      <rect x="${w / 2 - 38}" y="20" width="76" height="16" rx="8" fill="#020617" />
      <circle cx="${w / 2 + 20}" cy="28" r="2.8" fill="#0F172A" />

      <!-- Minimal neutral abstract status pill placeholder (NO TEXT) -->
      <g transform="translate(${w / 2}, ${h / 2 - 20})">
        <circle cx="0" cy="0" r="32" fill="#1E3A8A" fill-opacity="0.3" />
        <circle cx="0" cy="0" r="24" fill="#0D9488" fill-opacity="0.2" />
        <!-- Subtle abstract lock / shield outline in white -->
        <path d="M-6 4 L0 -4 L6 4" stroke="#93C5FD" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.8" />
        <rect x="-10" y="4" width="20" height="14" rx="3" fill="#3B82F6" opacity="0.75" />
      </g>

      <!-- Bottom Home Indicator Bar -->
      <rect x="${w / 2 - 36}" y="${h - 22}" width="72" height="3.5" rx="2" fill="#64748B" opacity="0.6" />
    </svg>
  `);
}

async function buildDelhiHero() {
  const rawIndiaGatePath = path.join(__dirname, 'public', 'images', 'india-gate-raw.jpg');
  const outJpgPath = path.join(__dirname, 'public', 'images', 'delhi-hero.jpg');
  const outWebpPath = path.join(__dirname, 'public', 'images', 'delhi-hero.webp');

  const canvasW = 1200;
  const canvasH = 630;

  console.log('Processing India Gate background...');
  // 1. Process background: 1200x630, gentle depth of field blur, cinematic grade
  const bgBuffer = await sharp(rawIndiaGatePath)
    .resize(canvasW, canvasH, { fit: 'cover', position: 'center' })
    .blur(1.8) // Soft bokeh / depth of field behind subject
    .toBuffer();

  // 2. Cinematic Navy, Slate, Teal gradient overlay
  const overlaySvg = Buffer.from(`
    <svg width="${canvasW}" height="${canvasH}" viewBox="0 0 ${canvasW} ${canvasH}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Brand gradient: Navy to slate to transparent teal -->
        <linearGradient id="brandOverlay" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0B192C" stop-opacity="0.75" />
          <stop offset="45%" stop-color="#0F172A" stop-opacity="0.45" />
          <stop offset="75%" stop-color="#134E4A" stop-opacity="0.30" />
          <stop offset="100%" stop-color="#0B192C" stop-opacity="0.65" />
        </linearGradient>

        <linearGradient id="bottomVignette" x1="0%" y1="65%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0B192C" stop-opacity="0" />
          <stop offset="100%" stop-color="#0B192C" stop-opacity="0.80" />
        </linearGradient>
      </defs>

      <rect width="${canvasW}" height="${canvasH}" fill="url(#brandOverlay)" />
      <rect width="${canvasW}" height="${canvasH}" fill="url(#bottomVignette)" />
    </svg>
  `);

  // 3. Create smartphone frame: width 280, height 430
  const phoneW = 270;
  const phoneH = 410;
  const phoneSvgBuffer = createCleanSmartphoneSvg(phoneW, phoneH);

  // Position phone on the right side
  const phoneLeft = canvasW - phoneW - 90;
  const phoneTop = Math.round((canvasH - phoneH) / 2) + 10;

  // 4. Watermark SVG
  const watermarkBuffer = getWatermarkSvg(canvasW, canvasH);
  const watermarkMeta = await sharp(watermarkBuffer).metadata();
  const wmLeft = canvasW - watermarkMeta.width - 24;
  const wmTop = canvasH - watermarkMeta.height - 20;

  console.log('Compositing layers into 1200x630 hero banner...');
  const composited = await sharp(bgBuffer)
    .composite([
      { input: overlaySvg, left: 0, top: 0 },
      { input: phoneSvgBuffer, left: phoneLeft, top: phoneTop },
      { input: watermarkBuffer, left: wmLeft, top: wmTop }
    ]);

  // Output JPG
  await composited.clone().jpeg({ quality: 90, mozjpeg: true }).toFile(outJpgPath);
  console.log('Saved JPEG:', outJpgPath);

  // Output WebP
  await composited.clone().webp({ quality: 88 }).toFile(outWebpPath);
  console.log('Saved WebP:', outWebpPath);

  console.log('Delhi Hero generation complete!');
}

buildDelhiHero().catch(console.error);
