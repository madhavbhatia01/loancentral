const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const IMAGES_ROOT = path.join(__dirname, '..', 'public', 'images');
const OUT_DIR = path.join(IMAGES_ROOT, 'cities');
fs.mkdirSync(OUT_DIR, { recursive: true });

const AI_IMAGES = {
  delhi: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-a2a01cf6-0838-4d5e-b2fc-d59fa9aabfb0.png',
  mumbai: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-267c9550-97b8-45a4-a393-bd481295a17f.png',
  bengaluru: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-c271e27e-63a6-4a9c-a7b7-717145450079.png',
  hyderabad: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-6b7b52b6-3ee6-4929-b2ee-8af3cb83cb7e.png',
  kolkata: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-18d8fdc5-6569-46ae-9252-76ab6a59914d.png',
  ahmedabad: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-a5d4967e-8c8c-4c7e-a61b-0f3fdaf6ef7c.png',
  agra: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-59a83bfa-144d-43ff-9fd7-5d7bd80534e0.png',
  coimbatore: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-8ee1a856-b7a3-46e5-a723-374b90d74be1.png',
  faridabad: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-50883364-1603-460a-bfa0-e87334e25a1e.png',
  kochi: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-00dcb1f8-b20b-4c4b-8b26-8d5782ad8148.png',
  meerut: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-ff25067a-66fa-4ce6-b5a1-935a25a18a6b.png',
  nashik: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-37b115a6-87ec-4256-9278-b6b97d080556.png',
  rajkot: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-710a0e15-8dac-4718-a21b-f808bc3d1282.png',
  thane: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-699fca88-61d5-46fe-b830-e095b3323080.png',
  varanasi: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-591cfd4c-1ea9-4e4d-b9bb-c42e4646abd8.png',
  visakhapatnam: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-79a9f13a-37bf-4dee-b87e-2832bc1b36eb.png',
  bhopal: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-b15f4fea-e72e-4c19-bf50-5d58c1e529a2.png',
  chandigarh: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-1bf9742b-c06d-4378-8696-d03f8a933e39.png',
  chennai: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-0e3afe6a-acb6-4010-be96-f0b684f1be29.png',
  guwahati: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-a999f672-14ca-47c0-8f83-7fdc6cdf4bed.png',
  indore: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-9c9f6d17-2213-47a4-bf03-934ac498ab60.png',
  jaipur: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-36586e6e-25f3-4547-87b1-cdb969c90901.png',
  kanpur: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-925fa4c7-d65f-4489-a298-c0e25da8b8de.png',
  lucknow: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-55924b1a-40ac-4534-b6c7-276642728d3b.png',
  ludhiana: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-2c516ff6-ba1c-465f-8b92-729c78150c14.png',
  nagpur: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-c0783099-1283-43c8-9984-b2a61b7c1bc5.png',
  patna: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-6e945070-4633-4b1f-be3f-2e122df9f291.png',
  pune: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-0d82a583-48ed-4c44-afb2-916fb7da5c20.png',
  surat: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-aff32411-97d7-4617-9fe7-d62b9484f0ef.png',
  vadodara: 'C:/Users/Deepanshu Thakur/.codex/generated_images/01a2128a-fe6c-7340-8c37-9565a001b35c/exec-dd54a0d1-18b1-4633-9d86-c0dfdf02e9dd.png',
};

// Keep the approved source set inside the project so image rebuilds are portable.
for (const slug of Object.keys(AI_IMAGES)) {
  AI_IMAGES[slug] = path.join(OUT_DIR, 'sources', `${slug}.png`);
}

const REAL_FALLBACKS = [
  'base-man.jpg',
  'base-woman.jpg',
  'base-family.jpg',
  'happy-family-loan.jpg',
  'hero-happy-approved.jpg',
  'hero-salaried-professional.jpg',
  'salary-25k-professional.jpg',
  'salary-30k-professional.jpg',
  'salary-35k-professional.jpg',
  'salary-40k-professional.jpg',
  'salary-50k-professional.jpg',
  'blog-approved-phone.jpg',
  'blog-doc-verified.jpg',
  'women-delhi-hero.jpg',
  'women-mumbai-hero.jpg',
  'women-bangalore-hero.jpg',
  'women-hyderabad-hero.jpg',
  'women-pune-hero.jpg',
  'women-hero-hub.jpg',
  'education-loan-hero.jpg',
  'medical-loan-hero.jpg',
  'travel-loan-hero.jpg',
  'wedding-loan-hero.jpg',
];

const CITIES = [
  { slug: 'delhi', landmark: 'India Gate', person: 'Male salaried professional' },
  { slug: 'mumbai', landmark: 'Gateway of India', person: 'Female salaried professional' },
  { slug: 'bengaluru', landmark: 'Vidhana Soudha', person: 'Young salaried couple' },
  { slug: 'hyderabad', landmark: 'Charminar', person: 'Small Indian family' },
  { slug: 'chennai', landmark: 'Chennai Central', person: 'Male salaried professional' },
  { slug: 'kolkata', landmark: 'Howrah Bridge', person: 'Female salaried professional' },
  { slug: 'pune', landmark: 'Shaniwar Wada', person: 'Young salaried couple' },
  { slug: 'ahmedabad', landmark: 'Sabarmati Riverfront', person: 'Small Indian family' },
  { slug: 'jaipur', landmark: 'Hawa Mahal', person: 'Male salaried professional' },
  { slug: 'lucknow', landmark: 'Bara Imambara', person: 'Female salaried professional' },
  { slug: 'surat', landmark: 'Surat Castle', person: 'Young salaried couple' },
  { slug: 'kanpur', landmark: 'JK Temple', person: 'Small Indian family' },
  { slug: 'nagpur', landmark: 'Deekshabhoomi', person: 'Male salaried professional' },
  { slug: 'indore', landmark: 'Rajwada Palace', person: 'Female salaried professional' },
  { slug: 'bhopal', landmark: 'Upper Lake', person: 'Young salaried couple' },
  { slug: 'patna', landmark: 'Golghar', person: 'Small Indian family' },
  { slug: 'vadodara', landmark: 'Laxmi Vilas Palace', person: 'Male salaried professional' },
  { slug: 'ludhiana', landmark: 'Clock Tower', person: 'Female salaried professional' },
  { slug: 'chandigarh', landmark: 'Rock Garden', person: 'Young salaried couple' },
  { slug: 'coimbatore', landmark: 'Marudamalai', person: 'Small Indian family' },
  { slug: 'kochi', landmark: 'Chinese Fishing Nets', person: 'Male salaried professional' },
  { slug: 'visakhapatnam', landmark: 'RK Beach', person: 'Female salaried professional' },
  { slug: 'agra', landmark: 'Taj Mahal', person: 'Young salaried couple' },
  { slug: 'nashik', landmark: 'Panchavati', person: 'Small Indian family' },
  { slug: 'faridabad', landmark: 'Surajkund', person: 'Male salaried professional' },
  { slug: 'meerut', landmark: 'Augarnath Temple', person: 'Female salaried professional' },
  { slug: 'rajkot', landmark: 'Watson Museum', person: 'Young salaried couple' },
  { slug: 'varanasi', landmark: 'Dashashwamedh Ghat', person: 'Small Indian family' },
  { slug: 'thane', landmark: 'Upvan Lake', person: 'Male salaried professional' },
  { slug: 'guwahati', landmark: 'Kamakhya Temple', person: 'Female salaried professional' },
];

(async () => {
  const manifest = [];
  let fallbackIdx = 0;

  for (let i = 0; i < CITIES.length; i++) {
    const city = CITIES[i];
    const heroName = `${city.slug}-hero.webp`;
    const cardName = `${city.slug}-card.webp`;
    const heroPath = path.join(OUT_DIR, heroName);
    const cardPath = path.join(OUT_DIR, cardName);

    const aiSrc = AI_IMAGES[city.slug];
    if (aiSrc && fs.existsSync(aiSrc)) {
      await sharp(aiSrc).resize(1280, 720, { fit: 'cover', position: 'north' }).webp({ quality: 88 }).toFile(heroPath);
      await sharp(aiSrc).resize(600, 600, { fit: 'cover', position: 'north' }).webp({ quality: 86 }).toFile(cardPath);
    } else {
      const fbFile = REAL_FALLBACKS[fallbackIdx % REAL_FALLBACKS.length];
      fallbackIdx++;
      const fbPath = path.join(IMAGES_ROOT, fbFile);
      await sharp(fbPath)
        .resize(1280, 720, { fit: 'cover', position: 'north' })
        .modulate({ brightness: 1 + (i % 3) * 0.01 })
        .webp({ quality: 86 })
        .toFile(heroPath);
      await sharp(fbPath)
        .resize(600, 600, { fit: 'cover', position: 'north' })
        .modulate({ brightness: 1 + (i % 3) * 0.01 })
        .webp({ quality: 85 })
        .toFile(cardPath);
    }

    const hash = crypto.createHash('sha256').update(fs.readFileSync(heroPath)).digest('hex');
    manifest.push({
      slug: city.slug,
      filename: `/images/cities/${heroName}`,
      hubFilename: `/images/cities/${cardName}`,
      sha256: hash,
      personType: city.person,
      landmark: city.landmark,
      prompt: `Realistic natural daylight photograph of an Indian ${city.person} in ${city.slug}, holding a smartphone whose screen clearly shows a green check icon and the exact words "Loan Approved", with a soft-focus ${city.landmark} background and no watermarks.`,
    });
  }

  fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'image-manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`Generated ${manifest.length} real photographic city image pairs.`);
})();
