import React from "react";
import type { Metadata } from "next";
import FintechLoanPage from "@/components/FintechLoanPage";

export const metadata: Metadata = {
  title: "Personal Loan for Women | Specialized Credit for Working Women | LoanCentral",
  description:
    "Tailored personal loans for salaried women in India from ₹10,000 to ₹60,000 (min. ₹30,000 net monthly salary). Zero collateral, no co-signer required, 100% paperless digital verification.",
  keywords: [
    "personal loan for women",
    "women personal loan",
    "loans for salaried women",
    "working women loans",
    "independent women credit",
    "salary loan for women",
    "women loan India",
    "LoanCentral women loan"
  ],
  alternates: {
    canonical: "https://loancentral.in/personal-loan-for-women/",
  },
  openGraph: {
    title: "Personal Loan for Women | Specialized Credit for Working Women | LoanCentral",
    description:
      "Independent credit evaluation, zero collateral, no co-signer, and 100% digital KYC for working women across India. Direct disbursal via Credit 91.",
    url: "https://loancentral.in/personal-loan-for-women/",
    siteName: "LoanCentral",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://loancentral.in/images/women-hero-hub.jpg",
        width: 1200,
        height: 800,
        alt: "Personal Loan for Women - LoanCentral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loan for Women | Specialized Credit for Working Women | LoanCentral",
    description:
      "Transparent personal credit for salaried women across India from ₹10,000 to ₹60,000 with real-time EMI calculation.",
    images: ["https://loancentral.in/images/women-hero-hub.jpg"],
  },
};

export default function WomenLoanHubPage() {
  const jsonLdFinancialProduct = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Personal Loan for Salaried Women",
    description:
      "Personal credit from ₹10,000 to ₹60,000 for salaried women professionals across India (min. ₹30,000 salary) with zero collateral, no co-signer, and transparent pricing via Credit 91.",
    provider: {
      "@type": "Organization",
      name: "LoanCentral Technologies",
      url: "https://loancentral.in",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
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
        name: "Personal Loan",
        item: "https://loancentral.in/personal-loan/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Personal Loan for Women",
        item: "https://loancentral.in/personal-loan-for-women/",
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need a male co-applicant or guarantor to apply?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. LoanCentral evaluates each salaried woman applicant purely on her own professional standing and salary bank credit. Zero co-signers, guarantors, or family collateral are required.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum net monthly salary requirement for women applicants?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The minimum net monthly salary required is ₹30,000 credited directly into an active Indian commercial bank account by your corporate employer.",
        },
      },
      {
        "@type": "Question",
        name: "Which cities are included in the Women's Personal Loan program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide dedicated coverage and fast-track digital verification across 5 major metro hubs: Delhi NCR, Mumbai, Bangalore, Hyderabad, and Pune, as well as pan-India online access.",
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

      <FintechLoanPage
        pageType="women-hub"
        title="Personal Loan for Women: Financial Freedom on Your Terms"
        subtitle="Independent credit evaluation, zero collateral, no co-signer required, and 100% paperless verification. Designed specifically for salaried women professionals earning ₹30,000+ monthly."
        badgeText="Women's Specialized Credit Program"
        heroImageSrc="/images/women-hero-hub.webp"
        heroImageAlt="Confident Indian salaried woman professional holding smartphone with verified digital personal loan status"
        minSalary="₹30,000"
      />
    </>
  );
}
