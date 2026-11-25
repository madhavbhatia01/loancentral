import React from "react";
import type { Metadata } from "next";
import MumbaiPageContent from "./MumbaiPageContent";

export const metadata: Metadata = {
  title: "Personal Loan in Mumbai for Salaried Employees | LoanCentral",
  description:
    "Apply for personal loans for salaried in Mumbai from ₹10,000 to ₹60,000 for salaried employees (min. ₹30,000 monthly income). Single bullet repayment in 7 to 50 days through lending partner Credit 91.",
  keywords: [
    "personal loan in mumbai",
    "loan in mumbai",
    "personal loan mumbai",
    "inr 30000 loan in mumbai",
    "inr 35000 loan in mumbai",
    "salaried personal loan mumbai",
    "loancentral mumbai"
  ],
  alternates: {
    canonical: "https://loancentral.in/personal-loan-in-mumbai/",
  },
  openGraph: {
    title: "Personal Loan in Mumbai for Salaried Employees | LoanCentral",
    description:
      "Apply for personal loans for salaried in Mumbai from ₹10,000 to ₹60,000. Single bullet repayment from 7 to 50 days aligned with your salary schedule through lending partner Credit 91.",
    url: "https://loancentral.in/personal-loan-in-mumbai/",
    siteName: "LoanCentral",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://loancentral.in/images/mumbai-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Personal Loan for Salaried Employees in Mumbai - LoanCentral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loan in Mumbai for Salaried Employees | LoanCentral",
    description:
      "personal credit for salaried professionals in Mumbai from ₹10,000 to ₹60,000 with transparent single bullet repayment.",
    images: ["https://loancentral.in/images/mumbai-hero.jpg"],
  },
};

export default function MumbaiLoanPage() {
  const jsonLdFinancialProduct = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "salaried Personal Loan for Salaried Employees in Mumbai",
    description:
      "personal credit from ₹10,000 to ₹60,000 for salaried professionals in Mumbai (min. ₹30,000 salary) with single bullet repayment across flexible tenures from 7 to 50 days via Credit 91.",
    provider: {
      "@type": "Organization",
      name: "LoanCentral Technologies",
      url: "https://loancentral.in",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Mumbai",
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
        name: "Personal Loan in Mumbai",
        item: "https://loancentral.in/personal-loan-in-mumbai/",
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
      <MumbaiPageContent />
    </>
  );
}
