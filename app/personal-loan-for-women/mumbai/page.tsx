import React from "react";
import type { Metadata } from "next";
import FintechLoanPage from "@/components/FintechLoanPage";

export const metadata: Metadata = {
  title: "Personal Loan for Women in Mumbai | Salaried Women Credit | LoanCentral",
  description:
    "Apply for personal loans for salaried women in Mumbai from ₹10,000 to ₹60,000 (min. ₹30,000 net monthly salary). 100% digital KYC, zero co-signer, fast disbursal via Credit 91.",
  keywords: [
    "personal loan for women in mumbai",
    "women personal loan mumbai",
    "mumbai salaried women loan",
    "bkc women loan",
    "andheri women loan",
    "powai personal loan women",
    "LoanCentral mumbai women loan"
  ],
  alternates: {
    canonical: "https://loancentral.in/personal-loan-for-women/mumbai/",
  },
  openGraph: {
    title: "Personal Loan for Women in Mumbai | LoanCentral",
    description:
      "Instant paperless personal credit for salaried women professionals in Mumbai MMR, BKC, and Lower Parel. Real-time EMI calculation and direct bank transfer.",
    url: "https://loancentral.in/personal-loan-for-women/mumbai/",
    siteName: "LoanCentral",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://loancentral.in/images/women-mumbai-hero.jpg",
        width: 1200,
        height: 800,
        alt: "Personal Loan for Women in Mumbai - Gateway of India - LoanCentral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loan for Women in Mumbai | LoanCentral",
    description:
      "Salaried women personal loans in Mumbai with zero collateral, no co-signer, and transparent pricing via Credit 91.",
    images: ["https://loancentral.in/images/women-mumbai-hero.jpg"],
  },
};

export default function WomenLoanMumbaiPage() {
  const jsonLdFinancialProduct = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Personal Loan for Women in Mumbai",
    description:
      "Paperless personal loans from ₹10,000 to ₹60,000 for salaried women professionals in Mumbai (min. ₹30,000 net salary) with instant digital approval via Credit 91.",
    provider: {
      "@type": "Organization",
      name: "LoanCentral Technologies",
      url: "https://loancentral.in",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Mumbai Metropolitan Region",
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
        name: "Mumbai",
        item: "https://loancentral.in/personal-loan-for-women/mumbai/",
      },
    ],
  };

  const hubs = [
    { name: "Bandra Kurla Complex (BKC)", type: "BFSI & Private Equity", description: "Seamless credit for women in international banking, capital markets, and corporate advisory." },
    { name: "Lower Parel & Worli", type: "Media & FinTech District", description: "Fast digital verification for media agencies, advertising firms, and corporate conglomerates." },
    { name: "Andheri East MIDC & SEEPZ", type: "IT & Commercial Hub", description: "Paperless personal loans for IT export executives, software engineers, and airline crew." },
    { name: "Powai Hiranandani Tech Zone", type: "Startups & Analytics", description: "Instant paperless approvals for women professionals in high-growth startups and tech firms." },
    { name: "Mindspace Malad & Airoli", type: "Tech Campuses & BPO", description: "Quick credit solutions for technology park employees across western and eastern corridors." },
    { name: "Nariman Point & Fort", type: "Corporate & Law Chambers", description: "Direct bank transfer for women professionals in legal practice, maritime trade, and finance." },
  ];

  const localities = [
    "BKC", "Bandra West", "Lower Parel", "Worli", "Andheri East",
    "Andheri West", "Powai", "Goregaon", "Malad", "Borivali",
    "Thane West", "Vashi", "Navi Mumbai", "Dadar", "Chembur"
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
        title="Personal Loan for Women in Mumbai"
        subtitle="Specialized personal credit from ₹10,000 to ₹60,000 for salaried women across Mumbai MMR, BKC, and Lower Parel. Zero collateral, no co-signer required, and 100% digital KYC via Credit 91."
        badgeText="Mumbai MMR Salaried Women Special"
        cityName="Mumbai"
        stateName="Maharashtra"
        landmark="Gateway of India"
        heroImageSrc="/images/women-mumbai-hero.webp"
        heroImageAlt="Salaried woman professional in Mumbai near Gateway of India holding smartphone with verified digital personal loan status"
        minSalary="₹30,000"
        localHubs={hubs}
        localAreas={localities}
      />
    </>
  );
}
