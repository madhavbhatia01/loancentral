const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..');
const publicDir = path.join(baseDir, 'public');
const appDir = path.join(baseDir, 'app');
const iconSrc = path.join(publicDir, 'icon-extracted.png');

/**
 * Creates an ICO binary file containing one or more PNG images
 */
function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(count, 4); // Number of images

  let offset = 6 + count * 16;
  const dirEntries = [];

  for (const { buffer, size } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // Width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // Height
    entry.writeUInt8(0, 2); // Colors
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // Size of image data
    entry.writeUInt32LE(offset, 12); // Offset of image data
    dirEntries.push(entry);
    offset += buffer.length;
  }

  return Buffer.concat([
    header,
    ...dirEntries,
    ...pngBuffers.map(p => p.buffer)
  ]);
}

async function run() {
  console.log('Generating crisp favicons from:', iconSrc);

  // Pad icon slightly (e.g. 10% transparent padding around diamond star) for beautiful balanced presentation in browser tabs
  const iconMeta = await sharp(iconSrc).metadata();
  const maxDim = Math.max(iconMeta.width, iconMeta.height);
  const canvasSize = Math.round(maxDim * 1.15);

  const squareIcon = await sharp(iconSrc)
    .resize(maxDim, maxDim, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: Math.round((canvasSize - maxDim) / 2),
      bottom: Math.round((canvasSize - maxDim) / 2),
      left: Math.round((canvasSize - maxDim) / 2),
      right: Math.round((canvasSize - maxDim) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  // Generate distinct resolutions
  const sizes = [16, 32, 48, 64, 180, 192, 512];
  const rendered = {};

  for (const s of sizes) {
    rendered[s] = await sharp(squareIcon)
      .resize(s, s, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
  }

  // Pack 16, 32, 48 into standard favicon.ico
  const icoBuffer = createIco([
    { size: 16, buffer: rendered[16] },
    { size: 32, buffer: rendered[32] },
    { size: 48, buffer: rendered[48] }
  ]);

  // Save to public/
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(publicDir, 'favicon.png'), rendered[32]);
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), rendered[16]);
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), rendered[32]);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), rendered[180]);
  fs.writeFileSync(path.join(publicDir, 'icon.png'), rendered[192]);
  fs.writeFileSync(path.join(publicDir, 'icon-512.png'), rendered[512]);

  // Also save App Router auto-discovered files to app/
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'icon.png'), rendered[192]);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), rendered[180]);

  console.log('All favicon files successfully generated in public/ and app/ !');
}

run().catch(console.error);
