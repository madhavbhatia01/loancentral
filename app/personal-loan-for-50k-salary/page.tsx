"use client";

import React from "react";
import SalaryLoanPage from "@/components/SalaryLoanPage";

export default function LoanFor50kSalary() {
  return (
    <SalaryLoanPage
      salaryAmount={50000}
      salaryFormatted="₹50,000"
      maxLoanAmount={60000}
      maxLoanFormatted="₹60,000"
      imagePath="/images/salary-50k-professional.jpg"
      imageAlt="Senior corporate executive confident in modern office"
      heroHeadline="Instant Personal Loans for ₹50,000 Salary"
      heroSubtitle="Premium personal credit from ₹10,000 to ₹60,000 for ₹50,000 monthly salary earners. Zero long-term debt burden, single bullet repayment on 30, 40, or 50 days."
      keyHighlights={[
        "Highest eligibility tier with instant pre-approved limits up to ₹60,000.",
        "Single repayment on salary schedule—repay once, debt-free immediately.",
        "Zero hidden platform or subscription deductions.",
        "Priority processing and instant disbursal from RBI-regulated NBFC partners.",
      ]}
      eligibilityNotes={[
        "Monthly net salary of ₹50,000 or above credited to savings account.",
        "Age between 21 and 55 years.",
        "Online bank statement verification.",
      ]}
      faqs={[
        {
          q: "What is the maximum loan amount for ₹50,000 salary?",
          a: "You can borrow the maximum loan limit of ₹60,000 and choose a single repayment tenure of 30, 40, or 50 days.",
        },
      ]}
    />
  );
}
