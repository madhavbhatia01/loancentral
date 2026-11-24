import React from "react";
import type { Metadata } from "next";
import FintechLoanPage from "@/components/FintechLoanPage";

export const metadata: Metadata = {
  title: "Personal Loan for Women in Hyderabad | HITEC City Salaried Credit | LoanCentral",
  description:
    "Apply for personal loans for salaried women in Hyderabad from ₹10,000 to ₹60,000 (min. ₹30,000 net monthly salary). 100% digital KYC, zero co-signer, fast disbursal via Credit 91.",
  keywords: [
    "personal loan for women in hyderabad",
    "women personal loan hyderabad",
    "hyderabad salaried women loan",
    "hitec city women loan",
    "gachibowli personal loan women",
    "financial district women loan",
    "LoanCentral hyderabad women loan"
  ],
  alternates: {
    canonical: "https://loancentral.in/personal-loan-for-women/hyderabad/",
  },
  openGraph: {
    title: "Personal Loan for Women in Hyderabad | LoanCentral",
    description:
      "Instant paperless personal credit for salaried women professionals in Hyderabad Cyberabad and HITEC City. Real-time EMI calculation and direct bank transfer.",
    url: "https://loancentral.in/personal-loan-for-women/hyderabad/",
    siteName: "LoanCentral",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://loancentral.in/images/women-hyderabad-hero.jpg",
        width: 1200,
        height: 800,
        alt: "Personal Loan for Women in Hyderabad - Charminar & HITEC City - LoanCentral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loan for Women in Hyderabad | LoanCentral",
    description:
      "Salaried women personal loans in Hyderabad with zero collateral, no co-signer, and transparent pricing via Credit 91.",
    images: ["https://loancentral.in/images/women-hyderabad-hero.jpg"],
  },
};

export default function WomenLoanHyderabadPage() {
  const jsonLdFinancialProduct = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Personal Loan for Women in Hyderabad",
    description:
      "Paperless personal loans from ₹10,000 to ₹60,000 for salaried women professionals in Hyderabad (min. ₹30,000 net salary) with instant digital approval via Credit 91.",
    provider: {
      "@type": "Organization",
      name: "LoanCentral Technologies",
      url: "https://loancentral.in",
    },
    areaServed: {
      "@type": "City",
      name: "Hyderabad",
    },
    amount: {
      "@type": "MonetaryAmount",
      currency: "INR",
      minValue: 10000,
      maxValue: 60000,
    },
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
        name: "Personal Loan",
        item: "https://loancentral.in/personal-loan/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Personal Loan for Women",
        item: "https://loancentral.in/personal-loan-for-women/",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Hyderabad",
        item: "https://loancentral.in/personal-loan-for-women/hyderabad/",
      },
    ],
  };

  const hubs = [
    { name: "HITEC City & Cyber Towers", type: "IT & Global Software Hub", description: "Express paperless verification for women developers, IT managers, and digital consultants." },
    { name: "Financial District (Nanakramguda)", type: "GCC & Investment Banks", description: "Fast digital loans for women in multinational investment banking, auditing, and corporate finance." },
    { name: "Gachibowli IT Corridor", type: "Tech Campuses & Gaming", description: "Transparent personal credit for employees at major tech campuses and multinational software parks." },
    { name: "Madhapur & Kondapur", type: "Startups & FinTech Hub", description: "Hassle-free salary-aligned credit for tech leads, product designers, and growth professionals." },
    { name: "Genome Valley & Shamirpet", type: "Biotech & Pharma R&D", description: "Specialized credit for researchers, clinical scientists, and healthcare enterprise staff." },
    { name: "Begumpet & Somajiguda", type: "Central Commercial District", description: "Direct bank transfer for women in corporate administration, media, and trade." },
  ];

  const localities = [
    "HITEC City", "Gachibowli", "Madhapur", "Kondapur", "Jubilee Hills",
    "Banjara Hills", "Manikonda", "Kukatpally", "Miyapur", "Begumpet",
    "Financial District", "Tellapur", "Nallagandla", "Secunderabad"
  ];

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

      <FintechLoanPage
        pageType="women-city"
        title="Personal Loan for Women in Hyderabad"
        subtitle="Dedicated personal credit from ₹10,000 to ₹60,000 for salaried women across Hyderabad, HITEC City, and Gachibowli. Zero collateral, no co-signer required, and 100% digital KYC via Credit 91."
        badgeText="Hyderabad Cyberabad Salaried Women Special"
        cityName="Hyderabad"
        stateName="Telangana"
        landmark="Charminar & HITEC City"
        heroImageSrc="/images/women-hyderabad-hero.webp"
        heroImageAlt="Salaried woman professional in Hyderabad near Charminar holding smartphone with verified digital personal loan status"
        minSalary="₹30,000"
        localHubs={hubs}
        localAreas={localities}
      />
    </>
  );
}
