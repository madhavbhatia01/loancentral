"use client";

import React, { useState } from "react";
import CityLoanPage from "@/components/CityLoanPage";
import ApplyNowModal from "@/components/ApplyNowModal";

export default function DelhiPageContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const delhiHighlights = [
    "Loan options from ₹10,000 to ₹60,000 for salaried employees with ₹30,000+ monthly income.",
    "Repayment structured as a single bullet settlement with flexible tenures from 7 days up to 40 to 50 days on your scheduled salary credit date.",
    "Paperless digital e-KYC using Aadhaar DigiLocker and digital salary account statements.",
    "Zero upfront registration, processing, or subscription charges ever charged.",
    "Credit evaluation and disbursals handled exclusively by lending partner Credit 91."
  ];

  const delhiSectors = [
    "Central Government & PSU Ministries",
    "IT & Tech Hubs (Nehru Place, Okhla, Saket)",
    "Corporate & Financial Centers (Connaught Place, Barakhamba)",
    "Aerocity Hospitality & Aviation Professionals",
    "Healthcare & Education Specialists",
    "NCR Regional Corporate Commuters"
  ];

  const delhiFaqs = [
    {
      question: "Can salaried professionals residing across Delhi NCR (including Noida and Gurgaon) apply?",
      answer: "Yes. Salaried employees residing in Delhi or commuting across Delhi NCR are eligible to apply, provided they receive regular monthly salary credits into an active Indian bank account."
    },
    {
      question: "What is the minimum monthly salary requirement for Delhi applicants?",
      answer: "Applicants require a minimum net monthly salary of ₹30,000 (strictly mandatory requirement) credited directly by their employer via bank transfer. Cash salaries or incomes below ₹30,000 are not eligible."
    },
    {
      question: "Does LoanCentral guarantee loan approval for Delhi applicants?",
      answer: "No. Approval is never guaranteed. LoanCentral operates as a digital Lending Service Provider (LSP). All underwriting, risk scoring, credit limits, and final loan approvals are decided independently by lending partner Credit 91."
    },
    {
      question: "How is the loan repaid, and is there an ongoing monthly deduction?",
      answer: "Repayment is structured as a single bullet settlement scheduled on or after your salary date with flexible tenures from 7 days up to 40 to 50 days. There are no ongoing multi-month deductions or compounding multi-year locks."
    },
    {
      question: "Who disburses the approved funds into my account?",
      answer: "All loan funds are disbursed directly into your verified salary account by lending partner Credit 91 (apply.credit91.com)."
    }
  ];

  return (
    <>
      <CityLoanPage
        cityName="Delhi NCR"
        stateName="Delhi"
        landmark="India Gate"
        heroImageSrc="/images/cities/delhi-hero.webp"
        highlights={delhiHighlights}
        popularSectors={delhiSectors}
        faqs={delhiFaqs}
        onApplyClick={() => setIsModalOpen(true)}
      />
      <ApplyNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
