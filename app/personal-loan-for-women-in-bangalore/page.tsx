import React from "react";
import type { Metadata } from "next";
import WomenLoanPage from "@/components/WomenLoanPage";

export const metadata: Metadata = {
  title: "Personal Loan for Women in Bangalore | Salaried Women | LoanCentral",
  description:
    "Apply for personal loans for salaried women in Bangalore from ₹10,000 to ₹60,000 (min. ₹30,000 monthly income). Single bullet repayment in 7 to 50 days through lending partner Credit 91.",
  keywords: [
    "personal loan for women in bangalore",
    "women personal loan bangalore",
    "salaried women loan bangalore",
    "inr 30000 loan in bangalore",
    "inr 35000 loan in bangalore",
    "working women loan whitefield electronic city",
    "loancentral bangalore women"
  ],
  alternates: {
    canonical: "https://loancentral.in/personal-loan-for-women-in-bangalore/",
  },
  openGraph: {
    title: "Personal Loan for Women in Bangalore | Salaried Women | LoanCentral",
    description:
      "Apply for personal loans for salaried women in Bangalore from ₹10,000 to ₹60,000. Single bullet repayment in 7 to 50 days through lending partner Credit 91.",
    url: "https://loancentral.in/personal-loan-for-women-in-bangalore/",
    siteName: "LoanCentral",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://loancentral.in/images/women-bangalore-hero.jpg",
        width: 1200,
        height: 675,
        alt: "Personal Loan for Women in Bangalore - LoanCentral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loan for Women in Bangalore | Salaried Women | LoanCentral",
    description:
      "Personal credit for salaried women in Bangalore from ₹10,000 to ₹60,000 with single bullet repayment.",
    images: ["https://loancentral.in/images/women-bangalore-hero.jpg"],
  },
};

export default function WomenBangaloreLoanPage() {
  const jsonLdFinancialProduct = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Personal Loan for Salaried Women in Bangalore",
    description:
      "Personal credit from ₹10,000 to ₹60,000 for salaried women in Bangalore (min. ₹30,000 salary) with single bullet repayment across 7 to 50 days via Credit 91.",
    provider: {
      "@type": "Organization",
      name: "LoanCentral Technologies",
      url: "https://loancentral.in",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Karnataka",
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
        name: "Bangalore",
        item: "https://loancentral.in/personal-loan-for-women-in-bangalore/",
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can women software engineers and IT professionals in Bangalore apply?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Salaried women working in tech corridors like Whitefield, Electronic City, Bellandur, and Outer Ring Road with minimum net monthly pay of ₹30,000 are eligible.",
        },
      },
      {
        "@type": "Question",
        name: "How is repayment handled on salary date?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Repayment is executed via automated e-mandate on your chosen salary credit date in 7 to 50 days as a transparent single bullet settlement.",
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
        cityName="Bangalore"
        stateName="Karnataka"
        landmark="Vidhana Soudha"
        heroImageSrc="/images/women-bangalore-hero.webp"
        highlights={[
          "Salaried women in Whitefield, Outer Ring Road, Bellandur & Manyata",
          "Credit limits from ₹10,000 to ₹60,000 (minimum ₹30,000 net monthly salary)",
          "Single bullet settlement in 7 to 50 days aligned with your salary schedule",
          "Direct bank disbursal via lending partner Credit 91 with zero advance fees",
          "Fast paperless DigiLocker e-KYC without invasive phone permissions",
        ]}
        popularSectors={[
          "Outer Ring Road (ORR) & Bellandur Tech Hub",
          "Whitefield & ITPL Software Corridors",
          "Electronic City & Hosur Road Tech Parks",
          "Manyata Embassy Business Park (Hebbal)",
          "E-Commerce, Product SaaS & Biotech Centers",
        ]}
      />
    </>
  );
}
