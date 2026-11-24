"use client";

import React from "react";
import SalaryLoanPage from "@/components/SalaryLoanPage";

export default function LoanFor40kSalary() {
  return (
    <SalaryLoanPage
      salaryAmount={40000}
      salaryFormatted="₹40,000"
      maxLoanAmount={60000}
      maxLoanFormatted="₹60,000"
      imagePath="/images/salary-40k-professional.jpg"
      imageAlt="Professional woman reviewing digital finances"
      heroHeadline="Instant Personal Loans for ₹40,000 Salary"
      heroSubtitle="Access instant funds from ₹10,000 to ₹60,000 tailored for ₹40,000 salary professionals. Settle with a single bullet repayment on your chosen 30, 40, or 50 day term."
      keyHighlights={[
        "Fast-track verification for professionals earning ₹40,000 monthly.",
        "Maximum loan limit up to ₹60,000 with flexible single settlement.",
        "Paperless digital journey with direct bank transfer directly to bank account.",
        "Complete fee and APR visibility before signing.",
      ]}
      eligibilityNotes={[
        "Net take-home salary of ₹40,000+ deposited in active bank account.",
        "Aadhaar OTP-linked verification for instant e-KYC.",
        "3 months salary bank statement.",
      ]}
      faqs={[
        {
          q: "How fast is approval for ₹40k earners?",
          a: "With a consistent ₹40,000 salary, your application is processed instantly with automated bank verification and disbursed upon e-mandate sign-off.",
        },
      ]}
    />
  );
}
