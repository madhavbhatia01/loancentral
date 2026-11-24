const http = require('http');

const urls = [
  'http://localhost:3000/',
  'http://localhost:3000/personal-loan/',
  'http://localhost:3000/medical-emergency-loan/',
  'http://localhost:3000/wedding-loan/',
  'http://localhost:3000/home-repair-loan/',
  'http://localhost:3000/education-loan/',
  'http://localhost:3000/travel-loan/',
  'http://localhost:3000/personal-loan-for-women/',
  'http://localhost:3000/personal-loan-for-women/delhi/',
  'http://localhost:3000/personal-loan-for-women/mumbai/',
  'http://localhost:3000/personal-loan-for-women/bangalore/',
  'http://localhost:3000/personal-loan-for-women/hyderabad/',
  'http://localhost:3000/personal-loan-for-women/pune/',
  'http://localhost:3000/sitemap.xml',
  'http://localhost:3000/sitemap/',
  'http://localhost:3000/images/medical-loan-hero.webp',
  'http://localhost:3000/images/wedding-loan-hero.webp',
  'http://localhost:3000/images/home-repair-loan-hero.webp',
  'http://localhost:3000/images/education-loan-hero.webp',
  'http://localhost:3000/images/travel-loan-hero.webp',
  'http://localhost:3000/images/reviewer-ananya.webp',
  'http://localhost:3000/images/reviewer-rahul.webp',
  'http://localhost:3000/images/reviewer-priya.webp',
  'http://localhost:3000/images/reviewer-vikram.webp',
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ url, status: res.statusCode, contentType: res.headers['content-type'], length: data.length });
      });
    }).on('error', (err) => {
      resolve({ url, status: 'ERROR', error: err.message });
    });
  });
}

async function run() {
  console.log('Verifying all routes & new assets on localhost:3000...');
  let failed = 0;
  for (const url of urls) {
    const result = await checkUrl(url);
    if (result.status !== 200) failed++;
    console.log(`${result.status === 200 ? '✅' : '❌'} ${result.status} [${result.contentType || 'N/A'}] - ${result.url}`);
  }
  if (failed > 0) process.exit(1);
}

run();
