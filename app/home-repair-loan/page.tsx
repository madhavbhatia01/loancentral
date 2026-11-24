import React from "react";
import type { Metadata } from "next";
import FintechLoanPage from "@/components/FintechLoanPage";

export const metadata: Metadata = {
  title: "Home Repair Loan | Urgent Maintenance & Renovation Credit | LoanCentral",
  description:
    "Finance urgent home repairs, plumbing, electrical fixes, appliance replacements, and vehicle maintenance with instant paperless credit for salaried professionals.",
  alternates: {
    canonical: "https://loancentral.in/home-repair-loan/",
  },
  openGraph: {
    title: "Home Repair Loan | Urgent Maintenance & Renovation Credit | LoanCentral",
    description:
      "Fast unsecured home repair credit with paperless e-KYC and transparent EMI calculation via Credit 91.",
    url: "https://loancentral.in/home-repair-loan/",
    siteName: "LoanCentral",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://loancentral.in/images/home-repair-loan-hero.webp", width: 1200, height: 800, alt: "Home Repair Loan - LoanCentral" }],
  },
};

export default function HomeRepairLoanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Home Repair Personal Loan",
    description: "Unsecured home repair and maintenance credit for salaried professionals in India via Credit 91.",
    provider: { "@type": "Organization", name: "LoanCentral Technologies", url: "https://loancentral.in" },
    areaServed: { "@type": "Country", name: "India" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FintechLoanPage
        pageType="general-hub"
        title="Home Repair Loan for Urgent Maintenance & Fixes"
        subtitle="Fix unexpected plumbing leaks, roof waterproofing, electrical repairs, or essential home appliance breakdowns right away with paperless digital credit."
        badgeText="Home Maintenance & Renovation"
        heroImageSrc="/images/home-repair-loan-hero.webp"
        heroImageAlt="Salaried professional with disbursed home repair loan status"
        minSalary="₹25,000"
      />
    </>
  );
}
