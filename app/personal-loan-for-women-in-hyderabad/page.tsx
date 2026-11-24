import React from "react";
import type { Metadata } from "next";
import WomenLoanPage from "@/components/WomenLoanPage";

export const metadata: Metadata = {
  title: "Personal Loan for Women in Hyderabad | Salaried Women | LoanCentral",
  description:
    "Apply for personal loans for salaried women in Hyderabad from ₹10,000 to ₹60,000 (min. ₹30,000 monthly income). Single bullet repayment in 7 to 50 days through lending partner Credit 91.",
  keywords: [
    "personal loan for women in hyderabad",
    "women personal loan hyderabad",
    "salaried women loan hyderabad",
    "inr 30000 loan in hyderabad",
    "inr 35000 loan in hyderabad",
    "working women loan hitec city gachibowli",
    "loancentral hyderabad women"
  ],
  alternates: {
    canonical: "https://loancentral.in/personal-loan-for-women-in-hyderabad/",
  },
  openGraph: {
    title: "Personal Loan for Women in Hyderabad | Salaried Women | LoanCentral",
    description:
      "Apply for personal loans for salaried women in Hyderabad from ₹10,000 to ₹60,000. Single bullet repayment in 7 to 50 days through lending partner Credit 91.",
    url: "https://loancentral.in/personal-loan-for-women-in-hyderabad/",
    siteName: "LoanCentral",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://loancentral.in/images/women-hyderabad-hero.jpg",
        width: 1200,
        height: 675,
        alt: "Personal Loan for Women in Hyderabad - LoanCentral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loan for Women in Hyderabad | Salaried Women | LoanCentral",
    description:
      "Personal credit for salaried women in Hyderabad from ₹10,000 to ₹60,000 with single bullet repayment.",
    images: ["https://loancentral.in/images/women-hyderabad-hero.jpg"],
  },
};

export default function WomenHyderabadLoanPage() {
  const jsonLdFinancialProduct = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Personal Loan for Salaried Women in Hyderabad",
    description:
      "Personal credit from ₹10,000 to ₹60,000 for salaried women in Hyderabad (min. ₹30,000 salary) with single bullet repayment across 7 to 50 days via Credit 91.",
    provider: {
      "@type": "Organization",
      name: "LoanCentral Technologies",
      url: "https://loancentral.in",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Telangana",
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
        name: "Hyderabad",
        item: "https://loancentral.in/personal-loan-for-women-in-hyderabad/",
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can salaried women working in HITEC City and Gachibowli apply?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Salaried women across Hyderabad, Cyberabad, HITEC City, Gachibowli, and Madhapur with minimum net monthly pay of ₹30,000 are eligible.",
        },
      },
      {
        "@type": "Question",
        name: "Who provides the loan disbursal in Hyderabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Direct bank transfer is executed exclusively by regulated lending partner Credit 91. LoanCentral operates as an LSP compliant with RBI guidelines.",
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
        cityName="Hyderabad"
        stateName="Telangana"
        landmark="Charminar"
        heroImageSrc="/images/women-hyderabad-hero.webp"
        highlights={[
          "Salaried women in HITEC City, Gachibowli, Madhapur & Kondapur",
          "Credit limits from ₹10,000 to ₹60,000 (minimum ₹30,000 net monthly salary)",
          "Single bullet settlement in 7 to 50 days aligned with your salary schedule",
          "Direct bank disbursal via lending partner Credit 91 with zero advance fees",
          "Full confidentiality and privacy with DigiLocker verification",
        ]}
        popularSectors={[
          "HITEC City & Cyber Gateway Tech Corridor",
          "Gachibowli & Financial District Towers",
          "Madhapur & Kondapur Software Parks",
          "Genome Valley Biotech & Pharma Hub",
          "Aerospace, Semiconductor & IT Services",
        ]}
      />
    </>
  );
}
