"use client";

import React from "react";
import SalaryLoanPage from "@/components/SalaryLoanPage";

export default function LoanFor25kSalary() {
  return (
    <SalaryLoanPage
      salaryAmount={25000}
      salaryFormatted="₹25,000"
      maxLoanAmount={50000}
      maxLoanFormatted="₹50,000"
      imagePath="/images/happy-family-loan.jpg"
      imageAlt="Happy Indian salaried family celebrating loan approval on phone screen"
      heroHeadline="Instant Personal Loans for ₹25,000 Salary"
      heroSubtitle="Apply for ₹10,000 to ₹50,000 on your ₹25,000 monthly salary. Transparent costs, 30 to 50 days repayment, and instant paperless approval."
      keyHighlights={[
        "Accessible personal credit specifically designed for ₹25,000 salary tier.",
        "Single bullet repayment on salary schedule—no confusing monthly schedules.",
        "Zero hidden subscriptions or surprise platform fees.",
        "Consent-first verification: your credit score is safeguarded until explicit OTP.",
      ]}
      eligibilityNotes={[
        "Minimum net monthly salary of ₹25,000 credited to bank account.",
        "Age 21–55 with valid Aadhaar linked to mobile number.",
        "3 months salary bank statement verified via account aggregator.",
      ]}
      faqs={[
        {
          q: "Can I get a loan if my salary is ₹25,000?",
          a: "Yes! ₹25,000 exceeds our minimum requirement of ₹20,000, making you fully eligible to apply for ₹10,000 up to ₹50,000.",
        },
        {
          q: "What is the tenure available for ₹25k salary loans?",
          a: "You can choose exactly 30, 40, or 50 days depending on when your next salary cycle falls.",
        },
      ]}
    />
  );
}
