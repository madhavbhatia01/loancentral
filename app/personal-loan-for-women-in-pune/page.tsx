import React from "react";
import type { Metadata } from "next";
import WomenLoanPage from "@/components/WomenLoanPage";

export const metadata: Metadata = {
  title: "Personal Loan for Women in Pune | Salaried Women | LoanCentral",
  description:
    "Apply for personal loans for salaried women in Pune from ₹10,000 to ₹60,000 (min. ₹30,000 monthly income). Single bullet repayment in 7 to 50 days through lending partner Credit 91.",
  keywords: [
    "personal loan for women in pune",
    "women personal loan pune",
    "salaried women loan pune",
    "inr 30000 loan in pune",
    "inr 35000 loan in pune",
    "working women loan hinjewadi magarpatta",
    "loancentral pune women"
  ],
  alternates: {
    canonical: "https://loancentral.in/personal-loan-for-women-in-pune/",
  },
  openGraph: {
    title: "Personal Loan for Women in Pune | Salaried Women | LoanCentral",
    description:
      "Apply for personal loans for salaried women in Pune from ₹10,000 to ₹60,000. Single bullet repayment in 7 to 50 days through lending partner Credit 91.",
    url: "https://loancentral.in/personal-loan-for-women-in-pune/",
    siteName: "LoanCentral",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://loancentral.in/images/women-pune-hero.jpg",
        width: 1200,
        height: 675,
        alt: "Personal Loan for Women in Pune - LoanCentral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loan for Women in Pune | Salaried Women | LoanCentral",
    description:
      "Personal credit for salaried women in Pune from ₹10,000 to ₹60,000 with single bullet repayment.",
    images: ["https://loancentral.in/images/women-pune-hero.jpg"],
  },
};

export default function WomenPuneLoanPage() {
  const jsonLdFinancialProduct = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Personal Loan for Salaried Women in Pune",
    description:
      "Personal credit from ₹10,000 to ₹60,000 for salaried women in Pune (min. ₹30,000 salary) with single bullet repayment across 7 to 50 days via Credit 91.",
    provider: {
      "@type": "Organization",
      name: "LoanCentral Technologies",
      url: "https://loancentral.in",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Maharashtra",
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
        name: "Pune",
        item: "https://loancentral.in/personal-loan-for-women-in-pune/",
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can salaried women in Hinjewadi, Magarpatta, and Kharadi apply?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Salaried women across Pune, Hinjewadi Rajiv Gandhi IT Park, Magarpatta City, Kharadi, and Viman Nagar with minimum net monthly pay of ₹30,000 are eligible.",
        },
      },
      {
        "@type": "Question",
        name: "How does the single bullet settlement work for Pune borrowers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Repayment is scheduled in 7 to 50 days as a single bullet settlement aligned with your salary schedule, debited via e-NACH mandate.",
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
        cityName="Pune"
        stateName="Maharashtra"
        landmark="Shaniwar Wada"
        heroImageSrc="/images/women-pune-hero.webp"
        highlights={[
          "Salaried women in Hinjewadi, Magarpatta, Kharadi & Baner",
          "Credit limits from ₹10,000 to ₹60,000 (minimum ₹30,000 net monthly salary)",
          "Single bullet settlement in 7 to 50 days aligned with your salary schedule",
          "Direct bank disbursal via lending partner Credit 91 with zero advance fees",
          "Consent-first DigiLocker e-KYC without invasive phone permissions",
        ]}
        popularSectors={[
          "Hinjewadi Rajiv Gandhi Infotech Park (Phases 1, 2 & 3)",
          "Magarpatta Cybercity & Hadapsar Tech Hub",
          "EON Free Zone & Kharadi IT Corridors",
          "Viman Nagar & Yerwada Business Parks",
          "Automotive R&D, Engineering & SaaS Centers",
        ]}
      />
    </>
  );
}
