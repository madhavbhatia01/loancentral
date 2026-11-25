const sharp = require('sharp');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const LOGO_PATH = path.join(__dirname, '..', 'public', 'logo.png');

const mapping = [
  { src: 'C:/Users/Deepanshu Thakur/.gemini/antigravity/brain/a69563aa-6f7d-49ee-9e41-a33647480f79/women_hero_hub_1795592427209.jpg', out: 'women-hero-hub' },
  { src: 'C:/Users/Deepanshu Thakur/.gemini/antigravity/brain/a69563aa-6f7d-49ee-9e41-a33647480f79/women_delhi_hero_1795592439288.jpg', out: 'women-delhi-hero' },
  { src: 'C:/Users/Deepanshu Thakur/.gemini/antigravity/brain/a69563aa-6f7d-49ee-9e41-a33647480f79/women_mumbai_hero_1795592451774.jpg', out: 'women-mumbai-hero' },
  { src: 'C:/Users/Deepanshu Thakur/.gemini/antigravity/brain/a69563aa-6f7d-49ee-9e41-a33647480f79/women_bangalore_hero_1795592439209.jpg', out: 'women-bangalore-hero' },
  { src: 'C:/Users/Deepanshu Thakur/.gemini/antigravity/brain/a69563aa-6f7d-49ee-9e41-a33647480f79/women_hyderabad_hero_1795592455653.jpg', out: 'women-hyderabad-hero' },
  { src: 'C:/Users/Deepanshu Thakur/.gemini/antigravity/brain/a69563aa-6f7d-49ee-9e41-a33647480f79/women_pune_hero_1795592468918.jpg', out: 'women-pune-hero' },
];

(async () => {
  const resized = await sharp(LOGO_PATH)
    .resize({ width: 200, withoutEnlargement: true })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 3; i < resized.data.length; i += 4) {
    resized.data[i] = Math.round(resized.data[i] * 0.22);
  }

  const wm = await sharp(resized.data, {
    raw: { width: resized.info.width, height: resized.info.height, channels: 4 },
  })
    .png()
    .toBuffer();

  for (const item of mapping) {
    const pipeline = sharp(item.src)
      .resize(1200, 800, { fit: 'cover', position: 'north' })
      .composite([{ input: wm, gravity: 'southwest' }]);
    await pipeline.clone().webp({ quality: 90 }).toFile(path.join(IMAGES_DIR, `${item.out}.webp`));
    await pipeline.clone().jpeg({ quality: 90 }).toFile(path.join(IMAGES_DIR, `${item.out}.jpg`));
    console.log('Saved', item.out);
  }
})();
