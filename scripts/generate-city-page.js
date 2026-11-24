const fs = require('fs');
const path = require('path');
const { validateFile } = require('./compliance-validator');

/**
 * Automated City Page Generator
 * Creates compliant, high-converting, SEO-optimized city pages.
 */

function generateCityRoute(cityData) {
  const baseDir = path.join(__dirname, '..');
  const routeDir = path.join(baseDir, 'app', cityData.slug);

  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  // 1. Generate CityPageContent.tsx (Client component for interactivity)
  const clientContent = `"use client";

import React, { useState } from "react";
import CityLoanPage from "@/components/CityLoanPage";
import ApplyNowModal from "@/components/ApplyNowModal";

export default function ${cityData.city.replace(/[^a-zA-Z0-9]/g, '')}PageContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const highlights = ${JSON.stringify(cityData.highlights, null, 2)};
  const popularSectors = ${JSON.stringify(cityData.popularSectors, null, 2)};

  return (
    <>
      <CityLoanPage
        cityName="${cityData.city}"
        stateName="${cityData.state}"
        landmark="${cityData.landmark}"
        heroImageSrc="/images/${cityData.image}"
        highlights={highlights}
        popularSectors={popularSectors}
        onApplyClick={() => setIsModalOpen(true)}
      />
      <ApplyNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
`;

  // 2. Generate page.tsx (Server component with Next.js Metadata API and JSON-LD)
  const serverContent = `import React from "react";
import type { Metadata } from "next";
import ${cityData.city.replace(/[^a-zA-Z0-9]/g, '')}PageContent from "./${cityData.city.replace(/[^a-zA-Z0-9]/g, '')}PageContent";

export const metadata: Metadata = {
  title: "Personal Loan in ${cityData.city} for Salaried Employees | LoanCentral",
  description:
    "Apply for personal loans for salaried in ${cityData.city} from ₹10,000 to ₹60,000 for salaried employees (min. ₹30,000 monthly income). Single bullet repayment in 7 to 50 days through lending partner Credit 91.",
  keywords: [
    "personal loan in ${cityData.city.toLowerCase()}",
    "loan in ${cityData.city.toLowerCase()}",
    "personal loan ${cityData.city.toLowerCase()}",
    "inr 30000 loan in ${cityData.city.toLowerCase()}",
    "inr 35000 loan in ${cityData.city.toLowerCase()}",
    "salaried personal loan ${cityData.city.toLowerCase()}",
    "loancentral ${cityData.city.toLowerCase()}"
  ],
  alternates: {
    canonical: "https://loancentral.in/${cityData.slug}/",
  },
  openGraph: {
    title: "Personal Loan in ${cityData.city} for Salaried Employees | LoanCentral",
    description:
      "Apply for personal loans for salaried in ${cityData.city} from ₹10,000 to ₹60,000. Single bullet repayment from 7 to 50 days aligned with your salary schedule through lending partner Credit 91.",
    url: "https://loancentral.in/${cityData.slug}/",
    siteName: "LoanCentral",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://loancentral.in/images/${cityData.image.replace('.webp', '.jpg')}",
        width: 1200,
        height: 630,
        alt: "Personal Loan for Salaried Employees in ${cityData.city} - LoanCentral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loan in ${cityData.city} for Salaried Employees | LoanCentral",
    description:
      "personal credit for salaried professionals in ${cityData.city} from ₹10,000 to ₹60,000 with transparent single bullet repayment.",
    images: ["https://loancentral.in/images/${cityData.image.replace('.webp', '.jpg')}"],
  },
};

export default function ${cityData.city.replace(/[^a-zA-Z0-9]/g, '')}LoanPage() {
  const jsonLdFinancialProduct = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "salaried Personal Loan for Salaried Employees in ${cityData.city}",
    description:
      "personal credit from ₹10,000 to ₹60,000 for salaried professionals in ${cityData.city} (min. ₹30,000 salary) with single bullet repayment across flexible tenures from 7 to 50 days via Credit 91.",
    provider: {
      "@type": "Organization",
      name: "LoanCentral Technologies",
      url: "https://loancentral.in",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "${cityData.city}",
    },
    amount: {
      "@type": "MonetaryAmount",
      currency: "INR",
      minValue: 10000,
      maxValue: 60000,
    },
    feesAndCommissionsSpecification:
      "Transparent processing fees and APR typically ranging between 18% and 36% per annum disclosed in Key Fact Statement before contract signing. Zero advance fees.",
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://loancentral.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Personal Loan in ${cityData.city}",
        item: "https://loancentral.in/${cityData.slug}/",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFinancialProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
      <${cityData.city.replace(/[^a-zA-Z0-9]/g, '')}PageContent />
    </>
  );
}
`;

  const pagePath = path.join(routeDir, 'page.tsx');
  const contentPath = path.join(routeDir, `${cityData.city.replace(/[^a-zA-Z0-9]/g, '')}PageContent.tsx`);

  fs.writeFileSync(pagePath, serverContent, 'utf-8');
  fs.writeFileSync(contentPath, clientContent, 'utf-8');

  console.log(`Generated: ${path.relative(baseDir, pagePath)}`);
  console.log(`Generated: ${path.relative(baseDir, contentPath)}`);

  return { pagePath, contentPath };
}

function runGenerator() {
  const baseDir = path.join(__dirname, '..');
  const manifestPath = path.join(baseDir, 'data', 'cities-manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

  const targetSlug = process.argv.find(arg => arg.startsWith('--slug='))?.split('=')[1];

  let targetCity = null;
  if (targetSlug) {
    targetCity = manifest.find(c => c.slug === targetSlug);
  } else {
    // Next pending city
    targetCity = manifest.find(c => c.status === 'pending');
  }

  if (!targetCity) {
    console.log("No pending cities to generate.");
    return;
  }

  console.log(`Generating city page for: ${targetCity.city} (${targetCity.slug})...`);
  generateCityRoute(targetCity);
  console.log("Generation complete. Run 'node scripts/compliance-validator.js' to audit.");
}

if (require.main === module) {
  runGenerator();
}

module.exports = { generateCityRoute };
