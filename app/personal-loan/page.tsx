import React from "react";
import type { Metadata } from "next";
import FintechLoanPage from "@/components/FintechLoanPage";

export const metadata: Metadata = {
  title: "Personal Loan | Transparent Online Personal Loans for Salaried | LoanCentral",
  description:
    "Apply online for transparent personal loans from ₹5,000 to ₹60,000 for salaried employees in India. Real-time EMI calculator, 100% paperless digital e-KYC, and instant disbursal via Credit 91.",
  keywords: [
    "personal loan",
    "personal loans for salaried",
    "instant personal loan",
    "online personal loan India",
    "salaried employee loan",
    "EMI calculator personal loan",
    "LoanCentral personal loan",
    "low interest personal loan"
  ],
  alternates: {
    canonical: "https://loancentral.in/personal-loan/",
  },
  openGraph: {
    title: "Personal Loan | Transparent Online Personal Loans for Salaried | LoanCentral",
    description:
      "Access transparent personal loans from ₹5,000 to ₹60,000. 100% digital verification, real-time EMI estimation, and zero advance fees via regulated lending partner Credit 91.",
    url: "https://loancentral.in/personal-loan/",
    siteName: "LoanCentral",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://loancentral.in/images/personal-loan-hero.jpg",
        width: 1200,
        height: 800,
        alt: "Personal Loans for Salaried Professionals - LoanCentral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loan | Transparent Online Personal Loans for Salaried | LoanCentral",
    description:
      "Instant paperless personal loans for salaried employees in India with real-time EMI calculation and direct bank transfer.",
    images: ["https://loancentral.in/images/personal-loan-hero.jpg"],
  },
};

export default function PersonalLoanHubPage() {
  const jsonLdFinancialProduct = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Personal Loan for Salaried Professionals",
    description:
      "Digital personal credit from ₹5,000 to ₹60,000 for salaried employees across India with flexible repayment tenures from 3 to 36 months or salary-cycle bullet repayments via regulated lending partner Credit 91.",
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
      minValue: 5000,
      maxValue: 60000,
    },
    feesAndCommissionsSpecification:
      "Transparent annual percentage rate (APR) typically ranging from 18% to 36% per annum disclosed in Key Fact Statement. Zero upfront fees.",
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
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is eligible for a personal loan on LoanCentral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Indian citizens aged 21 to 58 years with full-time salaried employment and a minimum net monthly salary of ₹25,000 credited directly into their bank account are eligible.",
        },
      },
      {
        "@type": "Question",
        name: "What is the maximum personal loan amount available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Salaried borrowers can apply for loan amounts ranging between ₹5,000 and ₹60,000 based on their monthly salary and credit profile.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly are funds disbursed into the bank account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Following automated paperless Aadhaar KYC and bank statement verification, funds are disbursed directly into your bank account in 10 to 30 minutes by our regulated lending partner Credit 91.",
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
        pageType="general-hub"
        title="Personal Loans for Salaried Professionals in India"
        subtitle="Transparent personal credit designed around your monthly cash flow. Enjoy real-time EMI calculation, 100% digital KYC, and zero advance fees through our RBI-regulated NBFC partner."
        badgeText="Verified Salaried Personal Loan"
        heroImageSrc="/images/personal-loan-hero.webp"
        heroImageAlt="Confident Indian salaried professional holding smartphone with verified digital personal loan status"
        minSalary="₹25,000"
      />
    </>
  );
}
