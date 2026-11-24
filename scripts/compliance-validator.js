const fs = require('fs');
const path = require('path');

/**
 * LoanCentral City Page Compliance Validator
 * Enforces all regulatory, LSP, and brand positioning rules.
 */

// Prohibited claims that must NOT appear in visible customer copy
const PROHIBITED_PATTERNS = [
  { pattern: /\b(multi-year|long-term\s+multi-month)\s+EMIs?\b/i, reason: "Forbidden term: long-term multi-year EMI claims on bullet repayment product." },
  { pattern: /\bCIBIL\b/i, reason: "Forbidden term: 'CIBIL'. Use 'credit assessment' or 'credit bureau check'." },
  { pattern: /guaranteed\s+approval/i, reason: "Prohibited claim: 'guaranteed approval'. Approval is never guaranteed." },
  { pattern: /100%\s+approval/i, reason: "Prohibited claim: '100% approval'." },
  { pattern: /instant\s+approval/i, reason: "Prohibited claim: 'instant approval'." },
  { pattern: /no\s+rejection/i, reason: "Prohibited claim: 'no rejection'." },
  { pattern: /guaranteed\s+money/i, reason: "Prohibited claim: 'guaranteed money'." },
  { pattern: /15\s*minutes?\s*(approval|decision|disbursal)/i, reason: "Prohibited claim: unverified '15 minutes' decision time." },
  { pattern: /fake\s+money|money\s+received\b/i, reason: "Prohibited claim: fake 'money received' notification." },
  { pattern: /no\s+verification\b/i, reason: "Prohibited claim: 'no verification'." },
  { pattern: /no\s+credit\s+assessment\b/i, reason: "Prohibited claim: 'no credit assessment'." },
  { pattern: /best\s+loan\s+company/i, reason: "Unsubstantiated claim: 'best loan company'." },
  { pattern: /3,?000,?000/i, reason: "Out of range loan amount: ₹3,000,000 exceeds maximum product limit of ₹60,000." },
  { pattern: /(loans?\s+for|open\s+to|eligible\s+for|targeted\s+to)\s+self-employed/i, reason: "Product restriction: self-employed targeting not permitted on salaried city pages." },
  { pattern: /\bpay[- ]?days?\b/i, reason: "Forbidden regulatory red-flag term: 'payday'. Must use 'salary schedule', 'salary credit date', or 'single bullet settlement'." },
  { pattern: /\b(bridge\s+(your\s+)?(salary|gap|capital|funds?)|salary\s+gap\s+bridge|bridge\s+loans?)\b/i, reason: "Prohibited complex jargon: 'bridge'. Use simple, clear language like 'urgent expenses' or 'quick funds before next salary'." },
  { pattern: /\bshort[-\s]terms?\b/i, reason: "Forbidden term: 'short term'/'short-term'. Use 'personal loan for salaried', 'quick funds', or 'salary cycle loan'." }
];

function stripComments(code) {
  return code
    .replace(/\/\*[\s\S]*?\*\//g, '')    // remove multi-line comments
    .replace(/(?<!:)\/\/[^\r\n]*/g, ''); // remove single-line comments, ignoring http:// or https://
}

function validateCityRoute(slug, baseDir) {
  const routeDir = path.join(baseDir, 'app', slug);
  const pageFile = path.join(routeDir, 'page.tsx');
  const cityTemplateFile = path.join(baseDir, 'components', 'CityLoanPage.tsx');
  const womenTemplateFile = path.join(baseDir, 'components', 'WomenLoanPage.tsx');
  const fintechTemplateFile = path.join(baseDir, 'components', 'FintechLoanPage.tsx');

  const errors = [];
  const warnings = [];

  if (!fs.existsSync(pageFile)) {
    return { slug, errors: [`Route entry file missing: ${pageFile}`], warnings };
  }

  const pageRaw = fs.readFileSync(pageFile, 'utf-8');
  const pageClean = stripComments(pageRaw);

  // Read associated client content if exists
  const filesInDir = fs.readdirSync(routeDir);
  const contentFile = filesInDir.find(f => f.endsWith('Content.tsx'));
  let contentClean = "";
  if (contentFile) {
    contentClean = stripComments(fs.readFileSync(path.join(routeDir, contentFile), 'utf-8'));
  }

  const fintechClean = fs.existsSync(fintechTemplateFile)
    ? stripComments(fs.readFileSync(fintechTemplateFile, 'utf-8'))
    : "";
  const womenClean = fs.existsSync(womenTemplateFile)
    ? stripComments(fs.readFileSync(womenTemplateFile, 'utf-8'))
    : "";
  const cityClean = fs.existsSync(cityTemplateFile)
    ? stripComments(fs.readFileSync(cityTemplateFile, 'utf-8'))
    : "";

  const combinedContent = `${pageClean}\n${contentClean}\n${fintechClean}\n${womenClean}\n${cityClean}`;

  // 1. Prohibited claims audit
  for (const { pattern, reason } of PROHIBITED_PATTERNS) {
    if (pattern.test(combinedContent)) {
      errors.push(`[PROHIBITED] ${reason}`);
    }
  }

  // 2. Mandatory SEO & Metadata requirements on page.tsx
  if (!/canonical[\s\S]*?loancentral\.in/i.test(pageClean)) {
    errors.push("[MISSING MANDATORY] Missing canonical URL in page metadata.");
  }
  if (!/application\/ld\+json/i.test(pageClean)) {
    errors.push("[MISSING MANDATORY] Missing JSON-LD structured data in page.");
  }
  if (!/FinancialProduct/i.test(pageClean)) {
    errors.push("[MISSING MANDATORY] Missing FinancialProduct schema in structured data.");
  }

  // 3. Mandatory regulatory and product requirements across the route
  if (!/Lending\s+Service\s+Provider|LSP/i.test(combinedContent)) {
    errors.push("[MISSING MANDATORY] Missing LSP (Lending Service Provider) disclosure.");
  }
  if (!/Credit\s*91/i.test(combinedContent)) {
    errors.push("[MISSING MANDATORY] Missing lending partner Credit 91 identification.");
  }
  if (!/salaried/i.test(combinedContent)) {
    errors.push("[MISSING MANDATORY] Missing salaried-only eligibility focus.");
  }
  if (!/30,?000/i.test(combinedContent) || !/35,?000/i.test(combinedContent)) {
    errors.push("[MISSING MANDATORY] Missing ₹30,000 and ₹35,000 representative loan examples.");
  }
  if (!/7\s*(to|-)\s*50\s*days|7.*40.*50\s*days|minimum\s+7\s+days/i.test(combinedContent)) {
    errors.push("[MISSING MANDATORY] Missing 7 to 40-50 days repayment tenure guidance.");
  }
  if (!/single\s+bullet|bullet\s+settlement/i.test(combinedContent)) {
    errors.push("[MISSING MANDATORY] Missing single bullet settlement structure.");
  }

  // 4. Hero image check
  const match = combinedContent.match(/heroImageSrc="\/images\/([^"]+)"/) ||
                combinedContent.match(/images\/([^"]+-hero\.(webp|jpg))/);
  if (match) {
    const imgName = match[1];
    const imgPath = path.join(baseDir, 'public', 'images', imgName);
    if (!fs.existsSync(imgPath)) {
      errors.push(`[MISSING ASSET] Referenced hero image not found: public/images/${imgName}`);
    }
  }

  return { slug, errors, warnings };
}

function runAudit() {
  console.log("=== LoanCentral Compliance & Regulatory Validator ===");
  const baseDir = path.join(__dirname, '..');
  const manifestPath = path.join(baseDir, 'data', 'cities-manifest.json');

  let totalErrors = 0;

  // 1. Validate Core & 3-Tier Hierarchy Routes
  const routesToAudit = [
    'personal-loan',
    'personal-loan-for-women',
    'personal-loan-for-women/delhi',
    'personal-loan-for-women/mumbai',
    'personal-loan-for-women/bangalore',
    'personal-loan-for-women/hyderabad',
    'personal-loan-for-women/pune',
  ];

  console.log(`\nAuditing ${routesToAudit.length} Landing Page Routes...`);
  for (const slug of routesToAudit) {
    const audit = validateCityRoute(slug, baseDir);
    if (audit.errors.length === 0) {
      console.log(`  [PASS] /${slug} complies with 100% of regulatory & content rules.`);
    } else {
      console.error(`  [FAIL] /${slug} failed compliance:`);
      audit.errors.forEach(e => console.error(`     - ${e}`));
      totalErrors += audit.errors.length;
    }
  }

  // 2. Validate Image Assets
  const requiredImages = [
    'delhi-hero.webp',
    'delhi-hero.jpg',
    'women-hero-hub.webp',
    'women-hero-hub.jpg',
    'women-delhi-hero.webp',
    'women-delhi-hero.jpg',
    'women-mumbai-hero.webp',
    'women-mumbai-hero.jpg',
    'women-bangalore-hero.webp',
    'women-bangalore-hero.jpg',
    'women-hyderabad-hero.webp',
    'women-hyderabad-hero.jpg',
    'women-pune-hero.webp',
    'women-pune-hero.jpg',
  ];

  for (const img of requiredImages) {
    const p = path.join(baseDir, 'public', 'images', img);
    if (fs.existsSync(p)) {
      console.log(`  [PASS] Image asset exists: ${img}`);
    } else {
      console.error(`  [FAIL] Missing image asset: ${img}`);
      totalErrors++;
    }
  }

  // 3. Validate Manifest
  if (fs.existsSync(manifestPath)) {
    try {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
      console.log(`  [PASS] City queue manifest valid (${manifest.length} cities configured).`);
    } catch (e) {
      console.error(`  [FAIL] Corrupted cities-manifest.json: ${e.message}`);
      totalErrors++;
    }
  } else {
    console.error("  [FAIL] Missing data/cities-manifest.json.");
    totalErrors++;
  }

  console.log("\n======================================================");
  if (totalErrors === 0) {
    console.log("RESULT: ALL AUDITS PASSED. PILOT READY FOR REVIEW.");
    process.exit(0);
  } else {
    console.error(`RESULT: ${totalErrors} COMPLIANCE ISSUE(S) DETECTED. FIX REQUIRED.`);
    process.exit(1);
  }
}

if (require.main === module) {
  runAudit();
}

module.exports = { validateCityRoute, PROHIBITED_PATTERNS };
