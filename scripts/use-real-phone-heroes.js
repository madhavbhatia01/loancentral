const sharp = require('sharp');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

async function convertTo1200x800(srcFile, outBase, position = 'center') {
  const srcPath = path.join(IMAGES_DIR, srcFile);
  const pipeline = sharp(srcPath).resize(1200, 800, { fit: 'cover', position });
  await pipeline.clone().webp({ quality: 90 }).toFile(path.join(IMAGES_DIR, `${outBase}.webp`));
  await pipeline.clone().jpeg({ quality: 90 }).toFile(path.join(IMAGES_DIR, `${outBase}.jpg`));
  console.log(`Updated ${outBase}.webp & .jpg from ${srcFile}`);
}

async function main() {
  // Use our photorealistic salaried-person-holding-phone images (ZERO figures, ZERO cropped heads)
  await convertTo1200x800('hum-hero-loan-disbursed.png', 'personal-loan-hero', 'center');
  await convertTo1200x800('hum-loan-approved.png', 'women-hero-hub', 'north');
  await convertTo1200x800('hum-documents-verified.png', 'women-delhi-hero', 'north');
  await convertTo1200x800('hum-loan-approved.png', 'women-mumbai-hero', 'north');
  await convertTo1200x800('hum-hero-loan-disbursed.png', 'women-bangalore-hero', 'north');
  await convertTo1200x800('hum-money-received.png', 'women-hyderabad-hero', 'north');
  await convertTo1200x800('hum-documents-verified.png', 'women-pune-hero', 'center');

  // Also update the 5 Loan Type hero images to clean photorealistic salaried-person-holding-phone images
  await convertTo1200x800('hum-loan-approved.png', 'medical-loan-hero', 'north');
  await convertTo1200x800('hum-money-received.png', 'wedding-loan-hero', 'north');
  await convertTo1200x800('hum-hero-loan-disbursed.png', 'home-repair-loan-hero', 'center');
  await convertTo1200x800('hum-documents-verified.png', 'education-loan-hero', 'north');
  await convertTo1200x800('hum-loan-approved.png', 'travel-loan-hero', 'center');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
