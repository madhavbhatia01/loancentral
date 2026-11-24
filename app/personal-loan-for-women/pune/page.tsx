import React from "react";
import type { Metadata } from "next";
import FintechLoanPage from "@/components/FintechLoanPage";

export const metadata: Metadata = {
  title: "Personal Loan for Women in Pune | IT & Auto Hub Salaried Credit | LoanCentral",
  description:
    "Apply for personal loans for salaried women in Pune from ₹10,000 to ₹60,000 (min. ₹30,000 net monthly salary). 100% digital KYC, zero co-signer, fast disbursal via Credit 91.",
  keywords: [
    "personal loan for women in pune",
    "women personal loan pune",
    "pune salaried women loan",
    "hinjewadi women personal loan",
    "kharadi personal loan women",
    "magarpatta women loan",
    "LoanCentral pune women loan"
  ],
  alternates: {
    canonical: "https://loancentral.in/personal-loan-for-women/pune/",
  },
  openGraph: {
    title: "Personal Loan for Women in Pune | LoanCentral",
    description:
      "Instant paperless personal credit for salaried women professionals in Pune Hinjewadi and Kharadi. Real-time EMI calculation and direct bank transfer.",
    url: "https://loancentral.in/personal-loan-for-women/pune/",
    siteName: "LoanCentral",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://loancentral.in/images/women-pune-hero.jpg",
        width: 1200,
        height: 800,
        alt: "Personal Loan for Women in Pune - Shaniwar Wada - LoanCentral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loan for Women in Pune | LoanCentral",
    description:
      "Salaried women personal loans in Pune with zero collateral, no co-signer, and transparent pricing via Credit 91.",
    images: ["https://loancentral.in/images/women-pune-hero.jpg"],
  },
};

export default function WomenLoanPunePage() {
  const jsonLdFinancialProduct = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Personal Loan for Women in Pune",
    description:
      "Paperless personal loans from ₹10,000 to ₹60,000 for salaried women professionals in Pune (min. ₹30,000 net salary) with instant digital approval via Credit 91.",
    provider: {
      "@type": "Organization",
      name: "LoanCentral Technologies",
      url: "https://loancentral.in",
    },
    areaServed: {
      "@type": "City",
      name: "Pune",
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
        name: "Pune",
        item: "https://loancentral.in/personal-loan-for-women/pune/",
      },
    ],
  };

  const hubs = [
    { name: "Hinjewadi Infotech Park (Phases 1-3)", type: "IT & Software Corridor", description: "Quick salary-cycle loans for women in software development, cloud computing, and DevOps." },
    { name: "Magarpatta Cybercity (Hadapsar)", type: "Integrated IT Township", description: "Hassle-free approvals for women working in multinational BPOs, analytics, and software hubs." },
    { name: "Kharadi EON Free Zone & WTC", type: "FinTech & IT SEZ", description: "Fast digital verification for women professionals in global banks and enterprise software firms." },
    { name: "Kalyani Nagar & Cerebrum IT Park", type: "Consulting & Digital Media", description: "Specialized credit for marketing managers, legal associates, and consulting leads." },
    { name: "Baner & Balewadi Commercial Hub", type: "Product Firms & Startups", description: "Direct bank transfer within 30 minutes for product managers and engineering specialists." },
    { name: "Viman Nagar & Yerwada", type: "Corporate Campuses", description: "Paperless personal loans for employees across commercial towers and enterprise parks." },
  ];

  const localities = [
    "Hinjewadi", "Wakad", "Baner", "Aundh", "Viman Nagar",
    "Kharadi", "Magarpatta", "Kalyani Nagar", "Kothrud", "Shivaji Nagar",
    "Pimple Saudagar", "Bavdhan", "Hadapsar", "Ravet"
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
        title="Personal Loan for Women in Pune"
        subtitle="Specialized personal credit from ₹10,000 to ₹60,000 for salaried women across Pune, Hinjewadi, and Kharadi. Zero collateral, no co-signer required, and 100% digital KYC via Credit 91."
        badgeText="Pune IT & Auto Salaried Women Special"
        cityName="Pune"
        stateName="Maharashtra"
        landmark="Shaniwar Wada"
        heroImageSrc="/images/women-pune-hero.webp"
        heroImageAlt="Salaried woman professional in Pune near Shaniwar Wada holding smartphone with verified digital personal loan status"
        minSalary="₹30,000"
        localHubs={hubs}
        localAreas={localities}
      />
    </>
  );
}
