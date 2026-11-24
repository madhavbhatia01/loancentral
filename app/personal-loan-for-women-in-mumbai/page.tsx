import React from "react";
import type { Metadata } from "next";
import WomenLoanPage from "@/components/WomenLoanPage";

export const metadata: Metadata = {
  title: "Personal Loan for Women in Mumbai MMR | Salaried Women | LoanCentral",
  description:
    "Apply for personal loans for salaried women in Mumbai MMR from ₹10,000 to ₹60,000 (min. ₹30,000 monthly income). Single bullet repayment in 7 to 50 days through lending partner Credit 91.",
  keywords: [
    "personal loan for women in mumbai",
    "women personal loan mumbai",
    "salaried women loan mumbai",
    "inr 30000 loan in mumbai",
    "inr 35000 loan in mumbai",
    "working women loan bkc andheri",
    "loancentral mumbai women"
  ],
  alternates: {
    canonical: "https://loancentral.in/personal-loan-for-women-in-mumbai/",
  },
  openGraph: {
    title: "Personal Loan for Women in Mumbai MMR | Salaried Women | LoanCentral",
    description:
      "Apply for personal loans for salaried women in Mumbai from ₹10,000 to ₹60,000. Single bullet repayment in 7 to 50 days through lending partner Credit 91.",
    url: "https://loancentral.in/personal-loan-for-women-in-mumbai/",
    siteName: "LoanCentral",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://loancentral.in/images/women-mumbai-hero.jpg",
        width: 1200,
        height: 675,
        alt: "Personal Loan for Women in Mumbai - LoanCentral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loan for Women in Mumbai MMR | Salaried Women | LoanCentral",
    description:
      "Personal credit for salaried women in Mumbai MMR from ₹10,000 to ₹60,000 with single bullet repayment.",
    images: ["https://loancentral.in/images/women-mumbai-hero.jpg"],
  },
};

export default function WomenMumbaiLoanPage() {
  const jsonLdFinancialProduct = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Personal Loan for Salaried Women in Mumbai",
    description:
      "Personal credit from ₹10,000 to ₹60,000 for salaried women in Mumbai MMR (min. ₹30,000 salary) with single bullet repayment across 7 to 50 days via Credit 91.",
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
        name: "Mumbai",
        item: "https://loancentral.in/personal-loan-for-women-in-mumbai/",
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are salaried women working in BKC, Lower Parel, and Navi Mumbai eligible?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Salaried women across Greater Mumbai, BKC, Lower Parel, Andheri, Navi Mumbai, and Thane with minimum net monthly pay of ₹30,000 credited to a bank account are eligible.",
        },
      },
      {
        "@type": "Question",
        name: "How fast is disbursal handled for Mumbai applicants?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Upon paperless DigiLocker e-KYC and digital agreement signing, lending partner Credit 91 disburses funds directly to your bank account.",
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
        cityName="Mumbai MMR"
        stateName="Maharashtra"
        landmark="Gateway of India"
        heroImageSrc="/images/women-mumbai-hero.webp"
        highlights={[
          "Salaried women in BKC, Lower Parel, Andheri, Powai & Navi Mumbai",
          "Credit limits from ₹10,000 to ₹60,000 (minimum ₹30,000 net monthly salary)",
          "Single bullet settlement in 7 to 50 days aligned with your salary schedule",
          "Direct bank disbursal via lending partner Credit 91 with zero advance fees",
          "Complete confidentiality with consent-first DigiLocker verification",
        ]}
        popularSectors={[
          "Bandra-Kurla Complex (BKC) Financial Hub",
          "Lower Parel & Worli Corporate Towers",
          "Andheri MIDC & Nesco IT Corridors",
          "Navi Mumbai (Airoli & Mahape Mindspace)",
          "Advertising, Media, Law & Consulting Firms",
        ]}
      />
    </>
  );
}
