import React from "react";
import type { Metadata } from "next";
import FintechLoanPage from "@/components/FintechLoanPage";

export const metadata: Metadata = {
  title: "Medical Emergency Loan | Fast Salaried Credit | LoanCentral",
  description:
    "Access urgent medical emergency funds for hospital deposits, diagnostics, and pharmacy bills. 100% paperless digital e-KYC, zero collateral, and direct bank disbursal via Credit 91.",
  alternates: {
    canonical: "https://loancentral.in/medical-emergency-loan/",
  },
  openGraph: {
    title: "Medical Emergency Loan | Fast Salaried Credit | LoanCentral",
    description:
      "Immediate paperless personal credit for medical emergencies and hospital expenses. Transparent pricing via RBI-regulated lending partner Credit 91.",
    url: "https://loancentral.in/medical-emergency-loan/",
    siteName: "LoanCentral",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://loancentral.in/images/medical-loan-hero.webp", width: 1200, height: 800, alt: "Medical Emergency Loan - LoanCentral" }],
  },
};

export default function MedicalEmergencyLoanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Medical Emergency Personal Loan",
    description: "Urgent unsecured medical emergency credit for salaried professionals in India via Credit 91.",
    provider: { "@type": "Organization", name: "LoanCentral Technologies", url: "https://loancentral.in" },
    areaServed: { "@type": "Country", name: "India" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FintechLoanPage
        pageType="general-hub"
        title="Medical Emergency Loan for Salaried Professionals"
        subtitle="Handle unexpected hospital deposits, diagnostic tests, surgical bills, or pharmacy expenses immediately without waiting for insurance reimbursements. 100% digital e-KYC and zero advance fees."
        badgeText="Healthcare & Medical Support"
        heroImageSrc="/images/medical-loan-hero.webp"
        heroImageAlt="Salaried professional with approved medical emergency loan status"
        minSalary="₹25,000"
      />
    </>
  );
}
