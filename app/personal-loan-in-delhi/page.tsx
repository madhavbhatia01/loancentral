import React from "react";
import type { Metadata } from "next";
import DelhiPageContent from "./DelhiPageContent";

export const metadata: Metadata = {
  title: "Personal Loan in Delhi for Salaried Employees | LoanCentral",
  description:
    "Apply for personal loans for salaried in Delhi from ₹10,000 to ₹60,000 for salaried employees (min. ₹30,000 monthly income). Single bullet repayment in 7 to 50 days through lending partner Credit 91.",
  keywords: [
    "personal loan in delhi",
    "loan in delhi",
    "personal loan delhi",
    "inr 30000 loan in delhi",
    "inr 35000 loan in delhi",
    "salaried personal loan delhi",
    "salary loan delhi ncr",
    "loancentral delhi"
  ],
  alternates: {
    canonical: "https://loancentral.in/personal-loan-in-delhi/",
  },
  openGraph: {
    title: "Personal Loan in Delhi for Salaried Employees | LoanCentral",
    description:
      "Apply for personal loans for salaried in Delhi from ₹10,000 to ₹60,000. Single bullet repayment from 7 to 50 days aligned with your salary schedule through lending partner Credit 91.",
    url: "https://loancentral.in/personal-loan-in-delhi/",
    siteName: "LoanCentral",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://loancentral.in/images/delhi-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Personal Loan for Salaried Employees in Delhi - LoanCentral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loan in Delhi for Salaried Employees | LoanCentral",
    description:
      "personal credit for salaried professionals in Delhi from ₹10,000 to ₹60,000 with transparent single bullet repayment.",
    images: ["https://loancentral.in/images/delhi-hero.jpg"],
  },
};

export default function DelhiLoanPage() {
  const jsonLdFinancialProduct = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "salaried Personal Loan for Salaried Employees in Delhi",
    description:
      "personal credit from ₹10,000 to ₹60,000 for salaried professionals in Delhi (min. ₹30,000 salary) with single bullet repayment across flexible tenures from 7 to 50 days via Credit 91.",
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
        name: "Personal Loan in Delhi",
        item: "https://loancentral.in/personal-loan-in-delhi/",
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can salaried professionals residing across Delhi NCR apply?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Salaried employees residing in Delhi or commuting across Delhi NCR are eligible to apply, provided they receive regular monthly salary credits into an active Indian bank account.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum monthly salary requirement for Delhi applicants?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Applicants require a minimum net monthly salary of ₹30,000 (strictly mandatory requirement) credited directly by their employer via bank transfer. Incomes below ₹30,000 or cash salaries are not eligible.",
        },
      },
      {
        "@type": "Question",
        name: "Does LoanCentral guarantee loan approval for Delhi applicants?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Approval is never guaranteed. LoanCentral operates as a digital Lending Service Provider (LSP). All underwriting and loan approvals are determined independently by lending partner Credit 91.",
        },
      },
      {
        "@type": "Question",
        name: "How is the loan repaid, and is there an ongoing monthly deduction?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Repayment is structured as a single bullet settlement scheduled on or after your salary date over flexible tenures from 7 to 50 days. There are no ongoing multi-month deductions.",
        },
      },
      {
        "@type": "Question",
        name: "Who disburses the approved funds into my account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All loan funds are disbursed directly into your verified salary account by lending partner Credit 91 (apply.credit91.com).",
        },
      },
    ],
  };

  return (
    <div>
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
      <DelhiPageContent />
    </div>
  );
}
