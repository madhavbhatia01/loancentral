import React from "react";
import type { Metadata } from "next";
import WomenLoanPage from "@/components/WomenLoanPage";

export const metadata: Metadata = {
  title: "Personal Loan for Women in Delhi NCR | Salaried Women | LoanCentral",
  description:
    "Apply for personal loans for salaried women in Delhi NCR from ₹10,000 to ₹60,000 (min. ₹30,000 monthly income). Single bullet repayment in 7 to 50 days through lending partner Credit 91.",
  keywords: [
    "personal loan for women in delhi",
    "women personal loan delhi",
    "salaried women loan delhi ncr",
    "inr 30000 loan in delhi",
    "inr 35000 loan in delhi",
    "working women loan delhi",
    "loancentral delhi women"
  ],
  alternates: {
    canonical: "https://loancentral.in/personal-loan-for-women-in-delhi/",
  },
  openGraph: {
    title: "Personal Loan for Women in Delhi NCR | Salaried Women | LoanCentral",
    description:
      "Apply for personal loans for salaried women in Delhi NCR from ₹10,000 to ₹60,000. Single bullet repayment in 7 to 50 days through lending partner Credit 91.",
    url: "https://loancentral.in/personal-loan-for-women-in-delhi/",
    siteName: "LoanCentral",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://loancentral.in/images/women-delhi-hero.jpg",
        width: 1200,
        height: 675,
        alt: "Personal Loan for Women in Delhi - LoanCentral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loan for Women in Delhi NCR | Salaried Women | LoanCentral",
    description:
      "Personal credit for salaried women in Delhi NCR from ₹10,000 to ₹60,000 with single bullet repayment.",
    images: ["https://loancentral.in/images/women-delhi-hero.jpg"],
  },
};

export default function WomenDelhiLoanPage() {
  const jsonLdFinancialProduct = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Personal Loan for Salaried Women in Delhi",
    description:
      "Personal credit from ₹10,000 to ₹60,000 for salaried women in Delhi NCR (min. ₹30,000 salary) with single bullet repayment across 7 to 50 days via Credit 91.",
    provider: {
      "@type": "Organization",
      name: "LoanCentral Technologies",
      url: "https://loancentral.in",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Delhi",
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
        name: "Personal Loan for Women",
        item: "https://loancentral.in/personal-loan-for-women/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Delhi",
        item: "https://loancentral.in/personal-loan-for-women-in-delhi/",
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can salaried women across Delhi NCR apply?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Salaried women residing and working in Delhi, Gurgaon, Noida, and Faridabad with minimum net monthly pay of ₹30,000 are eligible to apply.",
        },
      },
      {
        "@type": "Question",
        name: "What is the repayment tenure for Delhi borrowers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Repayment ranges from 7 to 50 days structured as a single bullet settlement on your upcoming salary credit date via automated e-mandate.",
        },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <WomenLoanPage
        cityName="Delhi NCR"
        stateName="Delhi"
        landmark="India Gate"
        heroImageSrc="/images/women-delhi-hero.webp"
        highlights={[
          "Salaried women professionals in Delhi, Gurgaon, Noida & Faridabad",
          "Credit limits from ₹10,000 to ₹60,000 (minimum ₹30,000 net monthly salary)",
          "Single bullet settlement in 7 to 50 days aligned with your salary schedule",
          "Disbursal via regulated lending partner Credit 91 with zero advance fees",
          "Fast paperless DigiLocker e-KYC without invasive phone permissions",
        ]}
        popularSectors={[
          "Connaught Place & Aerocity Corporate Corridors",
          "Cyber City & Golf Course Road IT Hubs (Gurgaon)",
          "Sector 62 & Expressway Tech Parks (Noida)",
          "Banking, Consulting & Public Sector Enterprises",
          "Healthcare, Media & Educational Institutions",
        ]}
      />
    </>
  );
}
