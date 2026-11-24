import React from "react";
import type { Metadata } from "next";
import FintechLoanPage from "@/components/FintechLoanPage";

export const metadata: Metadata = {
  title: "Travel Loan | Urgent Flight, Rail & Holiday Credit | LoanCentral",
  description:
    "Book urgent hometown flights, family travel tickets, or planned holiday bookings with fast, paperless personal credit for salaried professionals via Credit 91.",
  alternates: {
    canonical: "https://loancentral.in/travel-loan/",
  },
  openGraph: {
    title: "Travel Loan | Urgent Flight, Rail & Holiday Credit | LoanCentral",
    description:
      "Instant paperless travel credit with zero collateral, clear EMI calculation, and direct bank disbursal via Credit 91.",
    url: "https://loancentral.in/travel-loan/",
    siteName: "LoanCentral",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://loancentral.in/images/travel-loan-hero.webp", width: 1200, height: 800, alt: "Travel Loan - LoanCentral" }],
  },
};

export default function TravelLoanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Travel Personal Loan",
    description: "Unsecured travel credit for salaried professionals in India via Credit 91.",
    provider: { "@type": "Organization", name: "LoanCentral Technologies", url: "https://loancentral.in" },
    areaServed: { "@type": "Country", name: "India" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FintechLoanPage
        pageType="general-hub"
        title="Travel Loan for Urgent Trips & Family Visits"
        subtitle="Cover last-minute flight tickets, emergency hometown travel, or holiday bookings without straining your monthly budget. 100% digital e-KYC and transparent pricing."
        badgeText="Emergency & Planned Travel"
        heroImageSrc="/images/travel-loan-hero.webp"
        heroImageAlt="Salaried professional with verified travel loan status"
        minSalary="₹25,000"
      />
    </>
  );
}
