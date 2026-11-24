const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Generate an elegant, light, semi-transparent watermark SVG
function getWatermarkSvg(imgWidth, imgHeight) {
  // Proportional width for the watermark pill: ~25% of image width, min 180, max 260
  const pillW = Math.max(180, Math.min(260, Math.round(imgWidth * 0.26)));
  const pillH = Math.round(pillW * 0.22);
  const fontSize = Math.round(pillW * 0.082);
  const subFontSize = Math.round(pillW * 0.044);
  const iconSize = Math.round(pillH * 0.55);

  return Buffer.from(`
    <svg width="${pillW}" height="${pillH}" viewBox="0 0 ${pillW} ${pillH}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Translucent light glass pill with subtle border -->
      <rect x="1.5" y="1.5" width="${pillW - 3}" height="${pillH - 3}" rx="${Math.round(pillH / 2.5)}" fill="rgba(255, 255, 255, 0.78)" stroke="rgba(255, 255, 255, 0.95)" stroke-width="1.5" />
      
      <!-- Subtle shadow layer inside -->
      <rect x="2" y="2" width="${pillW - 4}" height="${pillH - 4}" rx="${Math.round(pillH / 2.5)}" fill="rgba(15, 23, 42, 0.04)" />
      
      <!-- 4-pointed Star Sparkle Icon in Royal Blue -->
      <g transform="translate(${Math.round(pillW * 0.08)}, ${Math.round((pillH - iconSize) / 2)})">
        <path d="M${iconSize/2} 0 C${iconSize/2} ${iconSize*0.35} ${iconSize*0.35} ${iconSize/2} 0 ${iconSize/2} C${iconSize*0.35} ${iconSize/2} ${iconSize/2} ${iconSize*0.65} ${iconSize/2} ${iconSize} C${iconSize/2} ${iconSize*0.65} ${iconSize*0.65} ${iconSize/2} ${iconSize} ${iconSize/2} C${iconSize*0.65} ${iconSize/2} ${iconSize/2} ${iconSize*0.35} ${iconSize/2} 0 Z" fill="#2563EB" opacity="0.9" />
      </g>
      
      <!-- Watermark Brand Text: LoanCentral -->
      <text x="${Math.round(pillW * 0.25)}" y="${Math.round(pillH * 0.52)}" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="${fontSize}" font-weight="900" fill="#0F172A" opacity="0.88" letter-spacing="-0.3">
        Loan<tspan fill="#2563EB">Central</tspan>
      </text>
      
      <!-- LOANS FOR BHARAT subtitle -->
      <text x="${Math.round(pillW * 0.25)}" y="${Math.round(pillH * 0.80)}" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="${subFontSize}" font-weight="700" fill="#475569" opacity="0.80" letter-spacing="1.2">
        LOANS FOR BHARAT
      </text>
    </svg>
  `);
}

async function watermarkFile(filePath) {
  try {
    const inputBuffer = fs.readFileSync(filePath);
    const meta = await sharp(inputBuffer).metadata();
    
    // Don't re-watermark if image is too small (e.g. icons)
    if (meta.width < 250 || meta.height < 150) {
      console.log('Skipping small image:', path.basename(filePath));
      return;
    }

    const watermarkBuffer = getWatermarkSvg(meta.width, meta.height);
    const watermarkMeta = await sharp(watermarkBuffer).metadata();
    
    // Position at bottom-right corner with responsive margin
    const marginX = Math.round(meta.width * 0.03);
    const marginY = Math.round(meta.height * 0.04);
    const left = meta.width - watermarkMeta.width - marginX;
    const top = meta.height - watermarkMeta.height - marginY;

    const outBuffer = await sharp(inputBuffer)
      .composite([
        {
          input: watermarkBuffer,
          left: Math.max(8, left),
          top: Math.max(8, top),
        }
      ])
      .jpeg({ quality: 90 })
      .toBuffer();

    fs.writeFileSync(filePath, outBuffer);
    console.log('Successfully watermarked:', path.basename(filePath));
  } catch (err) {
    console.error('Error watermarking', filePath, err.message);
  }
}

async function main() {
  const dir = path.join(__dirname, 'public', 'images');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

  console.log(`Watermarking ${files.length} images...`);
  for (const file of files) {
    await watermarkFile(path.join(dir, file));
  }
  console.log('Done! All images watermarked with LoanCentral brand watermark.');
}

main().catch(console.error);
