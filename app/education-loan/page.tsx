import React from "react";
import type { Metadata } from "next";
import FintechLoanPage from "@/components/FintechLoanPage";

export const metadata: Metadata = {
  title: "Education Loan | Certification, Tuition & Upskilling Credit | LoanCentral",
  description:
    "Pay tuition fees, professional certification courses, exam registrations, and skill development programs on time with paperless personal credit for salaried professionals.",
  alternates: {
    canonical: "https://loancentral.in/education-loan/",
  },
  openGraph: {
    title: "Education Loan | Certification, Tuition & Upskilling Credit | LoanCentral",
    description:
      "Fast unsecured education & upskilling credit with 100% digital e-KYC and transparent EMI calculation via Credit 91.",
    url: "https://loancentral.in/education-loan/",
    siteName: "LoanCentral",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://loancentral.in/images/education-loan-hero.webp", width: 1200, height: 800, alt: "Education Loan - LoanCentral" }],
  },
};

export default function EducationLoanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Education & Upskilling Personal Loan",
    description: "Unsecured education and upskilling credit for salaried professionals in India via Credit 91.",
    provider: { "@type": "Organization", name: "LoanCentral Technologies", url: "https://loancentral.in" },
    areaServed: { "@type": "Country", name: "India" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FintechLoanPage
        pageType="general-hub"
        title="Education Loan for Upskilling & Tuition Deadlines"
        subtitle="Never miss a course enrollment, executive certification, school fee deadline, or competitive exam registration. Paperless verification and direct bank transfer."
        badgeText="Education & Skill Development"
        heroImageSrc="/images/education-loan-hero.webp"
        heroImageAlt="Salaried professional with approved education loan status"
        minSalary="₹25,000"
      />
    </>
  );
}
