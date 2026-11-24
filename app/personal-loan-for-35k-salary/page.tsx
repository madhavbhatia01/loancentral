"use client";

import React from "react";
import SalaryLoanPage from "@/components/SalaryLoanPage";

export default function LoanFor35kSalary() {
  return (
    <SalaryLoanPage
      salaryAmount={35000}
      salaryFormatted="₹35,000"
      maxLoanAmount={60000}
      maxLoanFormatted="₹60,000"
      imagePath="/images/salary-35k-approved.jpg"
      imageAlt="Happy Indian professional showing smartphone screen with approved loan"
      heroHeadline="Instant Personal Loans for ₹35,000 Salary"
      heroSubtitle="Unlock ₹10,000 to ₹60,000 personal credit tailored for ₹35,000 salary earners. Enjoy seamless paperless verification and single bullet settlement on day 30, 40, or 50."
      keyHighlights={[
        "Instant approval pathway for salaried employees earning ₹35,000/month.",
        "Choose flexible terms of 30, 40, or 50 days matching your exact salary schedule.",
        "Zero prepayment penalties—settle in a single stroke once salary deposits.",
        "Direct disbursal from RBI-regulated NBFC partners straight to your bank account.",
      ]}
      eligibilityNotes={[
        "Minimum ₹35,000 monthly take-home salary verified via digital bank statement.",
        "Applicant age between 21 and 55 years at application time.",
        "Active Indian bank account with digital mandate capability.",
        "Valid PAN & Aadhaar (OTP linked) for Paperless digital e-KYC.",
      ]}
      faqs={[
        {
          q: "What is the maximum loan limit on a ₹35,000 salary?",
          a: "Eligible borrowers earning ₹35,000 monthly can access up to ₹60,000 with tenures of 30, 40, or 50 days.",
        },
        {
          q: "Will taking this loan lock me into multi-year interest payments?",
          a: "No! LoanCentral credit is strictly single bullet repayment. You settle the borrowed sum in one bullet repayment on your selected tenure, avoiding long-term EMI obligations.",
        },
        {
          q: "What documents are required for ₹35k earners?",
          a: "Only your PAN, Aadhaar (linked to mobile for OTP), and 3 months salary bank statement via online verification.",
        },
      ]}
    />
  );
}
