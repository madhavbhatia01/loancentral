import React from "react";
import type { Metadata } from "next";
import FintechLoanPage from "@/components/FintechLoanPage";

export const metadata: Metadata = {
  title: "Wedding Loan | Personal Credit for Marriage Expenses | LoanCentral",
  description:
    "Cover urgent wedding venue advances, catering, attire, and family celebration expenses with transparent personal credit for salaried professionals. 100% paperless via Credit 91.",
  alternates: {
    canonical: "https://loancentral.in/wedding-loan/",
  },
  openGraph: {
    title: "Wedding Loan | Personal Credit for Marriage Expenses | LoanCentral",
    description:
      "Flexible salary-aligned wedding loans with zero collateral, paperless e-KYC, and clear upfront pricing via Credit 91.",
    url: "https://loancentral.in/wedding-loan/",
    siteName: "LoanCentral",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://loancentral.in/images/wedding-loan-hero.webp", width: 1200, height: 800, alt: "Wedding Loan - LoanCentral" }],
  },
};

export default function WeddingLoanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Wedding Personal Loan",
    description: "Unsecured wedding expense loan for salaried professionals in India via Credit 91.",
    provider: { "@type": "Organization", name: "LoanCentral Technologies", url: "https://loancentral.in" },
    areaServed: { "@type": "Country", name: "India" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FintechLoanPage
        pageType="general-hub"
        title="Wedding Loan for Celebrations & Family Milestones"
        subtitle="Manage vendor bookings, jewellery deposits, guest hospitality, or last-minute wedding arrangements smoothly without exhausting your long-term savings."
        badgeText="Wedding & Family Celebrations"
        heroImageSrc="/images/wedding-loan-hero.webp"
        heroImageAlt="Happy Indian family with verified digital wedding loan status"
        minSalary="₹25,000"
      />
    </>
  );
}
