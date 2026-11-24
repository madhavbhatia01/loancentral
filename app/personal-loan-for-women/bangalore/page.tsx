import React from "react";
import type { Metadata } from "next";
import FintechLoanPage from "@/components/FintechLoanPage";

export const metadata: Metadata = {
  title: "Personal Loan for Women in Bangalore | Tech Corridor Salaried Credit | LoanCentral",
  description:
    "Apply for personal loans for salaried women in Bangalore from ₹10,000 to ₹60,000 (min. ₹30,000 net monthly salary). 100% digital KYC, zero co-signer, fast disbursal via Credit 91.",
  keywords: [
    "personal loan for women in bangalore",
    "women personal loan bangalore",
    "bangalore salaried women loan",
    "whitefield women personal loan",
    "electronic city women loan",
    "outer ring road personal loan women",
    "LoanCentral bangalore women loan"
  ],
  alternates: {
    canonical: "https://loancentral.in/personal-loan-for-women/bangalore/",
  },
  openGraph: {
    title: "Personal Loan for Women in Bangalore | LoanCentral",
    description:
      "Instant paperless personal credit for salaried women professionals in Bangalore IT corridors. Real-time EMI calculation and direct bank transfer.",
    url: "https://loancentral.in/personal-loan-for-women/bangalore/",
    siteName: "LoanCentral",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://loancentral.in/images/women-bangalore-hero.jpg",
        width: 1200,
        height: 800,
        alt: "Personal Loan for Women in Bangalore - Vidhana Soudha - LoanCentral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loan for Women in Bangalore | LoanCentral",
    description:
      "Salaried women personal loans in Bangalore with zero collateral, no co-signer, and transparent pricing via Credit 91.",
    images: ["https://loancentral.in/images/women-bangalore-hero.jpg"],
  },
};

export default function WomenLoanBangalorePage() {
  const jsonLdFinancialProduct = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Personal Loan for Women in Bangalore",
    description:
      "Paperless personal loans from ₹10,000 to ₹60,000 for salaried women professionals in Bangalore (min. ₹30,000 net salary) with instant digital approval via Credit 91.",
    provider: {
      "@type": "Organization",
      name: "LoanCentral Technologies",
      url: "https://loancentral.in",
    },
    areaServed: {
      "@type": "City",
      name: "Bangalore",
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
        name: "Bangalore",
        item: "https://loancentral.in/personal-loan-for-women/bangalore/",
      },
    ],
  };

  const hubs = [
    { name: "Whitefield & ITPB Corridor", type: "IT Park & Tech Campuses", description: "Rapid approvals for women tech professionals in international IT parks and software labs." },
    { name: "Electronic City Phase 1 & 2", type: "Electronics & Tech Giants", description: "Hassle-free salary loans for engineers and corporate staff in South Bangalore's premier IT hub." },
    { name: "Outer Ring Road (ORR) Bellandur", type: "Global Capability Centers", description: "Specialized credit for cloud architects, data scientists, and consulting managers." },
    { name: "Manyata Tech Park (Hebbal)", type: "Corporate Tech Park", description: "Express paperless verification for North Bangalore IT and enterprise professionals." },
    { name: "Bagmane Tech Park (CV Raman Nagar)", type: "Software & R&D Hub", description: "Direct bank transfer within 30 minutes for product developers and engineering leads." },
    { name: "Koramangala & HSR Layout", type: "Startups & Unicorns", description: "Instant salary-aligned credit for tech founders, growth leads, and venture team members." },
  ];

  const localities = [
    "Whitefield", "Electronic City", "Bellandur", "Marathahalli", "Koramangala",
    "Indiranagar", "HSR Layout", "JP Nagar", "Jayanagar", "Sarjapur Road",
    "Hebbal", "Manyata Tech Park", "BTM Layout", "Banashankari"
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
        title="Personal Loan for Women in Bangalore"
        subtitle="Specialized personal credit from ₹10,000 to ₹60,000 for salaried women across Bangalore IT corridors, Whitefield, and ORR. Zero collateral, no co-signer required, and 100% digital KYC via Credit 91."
        badgeText="Bangalore IT Salaried Women Special"
        cityName="Bangalore"
        stateName="Karnataka"
        landmark="Vidhana Soudha"
        heroImageSrc="/images/women-bangalore-hero.webp"
        heroImageAlt="Salaried woman professional in Bangalore near Vidhana Soudha holding smartphone with verified digital personal loan status"
        minSalary="₹30,000"
        localHubs={hubs}
        localAreas={localities}
      />
    </>
  );
}
