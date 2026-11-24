import React from "react";
import type { Metadata } from "next";
import FintechLoanPage from "@/components/FintechLoanPage";

export const metadata: Metadata = {
  title: "Personal Loan for Women in Delhi NCR | Instant Salaried Credit | LoanCentral",
  description:
    "Apply for personal loans for salaried women in Delhi NCR from ₹10,000 to ₹60,000 (min. ₹30,000 net monthly salary). 100% digital KYC, zero co-signer, fast disbursal via Credit 91.",
  keywords: [
    "personal loan for women in delhi",
    "women personal loan delhi ncr",
    "delhi salaried women loan",
    "cyber city women loan",
    "noida women personal loan",
    "gurgaon salaried loan for women",
    "LoanCentral delhi women loan"
  ],
  alternates: {
    canonical: "https://loancentral.in/personal-loan-for-women/delhi/",
  },
  openGraph: {
    title: "Personal Loan for Women in Delhi NCR | LoanCentral",
    description:
      "Instant paperless personal credit for salaried women professionals in Delhi, Gurgaon, and Noida. Real-time EMI calculation and direct bank transfer.",
    url: "https://loancentral.in/personal-loan-for-women/delhi/",
    siteName: "LoanCentral",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://loancentral.in/images/women-delhi-hero.jpg",
        width: 1200,
        height: 800,
        alt: "Personal Loan for Women in Delhi NCR - India Gate - LoanCentral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loan for Women in Delhi NCR | LoanCentral",
    description:
      "Salaried women personal loans in Delhi NCR with zero collateral, no co-signer, and transparent pricing via Credit 91.",
    images: ["https://loancentral.in/images/women-delhi-hero.jpg"],
  },
};

export default function WomenLoanDelhiPage() {
  const jsonLdFinancialProduct = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Personal Loan for Women in Delhi NCR",
    description:
      "Paperless personal loans from ₹10,000 to ₹60,000 for salaried women professionals in Delhi NCR (min. ₹30,000 net salary) with instant digital approval via Credit 91.",
    provider: {
      "@type": "Organization",
      name: "LoanCentral Technologies",
      url: "https://loancentral.in",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Delhi National Capital Region",
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
        name: "Delhi NCR",
        item: "https://loancentral.in/personal-loan-for-women/delhi/",
      },
    ],
  };

  const hubs = [
    { name: "DLF Cyber City & Cyber Hub", type: "IT & Fortune 500", description: "Seamless approval for women working across top tech & consulting MNCs in Gurgaon." },
    { name: "Aerocity Hospitality District", type: "Corporate HQ", description: "Fast digital credit for aviation, luxury hospitality, and corporate headquarters." },
    { name: "Connaught Place & Barakhamba", type: "BFSI & Law", description: "Tailored personal loans for women in banking, legal chambers, and financial services." },
    { name: "Noida Sector 62 & 128", type: "Tech & Media Hub", description: "Express paperless e-KYC for software engineers, IT executives, and media personnel." },
    { name: "Okhla Industrial Area Phase 1-3", type: "Tech & Startups", description: "Hassle-free credit for modern e-commerce, design, and manufacturing professionals." },
    { name: "Saket & Nehru Place", type: "Financial & Tech Hub", description: "Direct bank transfer within 30 minutes for South Delhi salaried employees." },
  ];

  const localities = [
    "Connaught Place", "Aerocity", "Saket", "Vasant Kunj", "Hauz Khas",
    "Dwarka", "Rohini", "Cyber City", "Golf Course Road", "Sohna Road",
    "Noida Sector 15-50", "Noida Sector 62", "Greater Noida", "Nehru Place"
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
        title="Personal Loan for Women in Delhi NCR"
        subtitle="Dedicated personal credit from ₹10,000 to ₹60,000 for salaried women across Delhi, Gurgaon, and Noida. Zero collateral, no co-signer required, and 100% digital KYC via Credit 91."
        badgeText="Delhi NCR Salaried Women Special"
        cityName="Delhi NCR"
        stateName="National Capital Region"
        landmark="India Gate"
        heroImageSrc="/images/women-delhi-hero.webp"
        heroImageAlt="Salaried woman professional in Delhi near India Gate holding smartphone with verified digital personal loan status"
        minSalary="₹30,000"
        localHubs={hubs}
        localAreas={localities}
      />
    </>
  );
}
