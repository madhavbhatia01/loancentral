"use client";

import React from "react";
import SalaryLoanPage from "@/components/SalaryLoanPage";

export default function LoanFor30kSalary() {
  return (
    <SalaryLoanPage
      salaryAmount={30000}
      salaryFormatted="₹30,000"
      maxLoanAmount={60000}
      maxLoanFormatted="₹60,000"
      imagePath="/images/salary-30k-approved.jpg"
      imageAlt="Happy Indian professional showing phone screen with ₹30,000 loan approved"
      heroHeadline="Instant Personal Loans for ₹30,000 Salary"
      heroSubtitle="Get ₹10,000 to ₹60,000 personal credit with your monthly salary of ₹30,000. Settle comfortably in a single bullet repayment at 30, 40, or 50 days aligned with your next paycheck."
      keyHighlights={[
        "Pre-qualified loan limits up to ₹60,000 for ₹30,000 net monthly earners.",
        "Zero multi-year EMI locks—repay in 1 bullet settlement on salary day.",
        "Transparent fee breakdown shown before you sign the digital agreement.",
        "Consent-first verification: no bureau enquiry without explicit OTP.",
      ]}
      eligibilityNotes={[
        "Must be currently employed with ₹30,000 net salary credited directly to your bank account.",
        "Age between 21 and 55 years with valid PAN and Aadhaar linked to mobile.",
        "3 months salary bank statement via paperless account aggregator or netbanking.",
        "Valid savings bank account with active e-mandate / UPI autopay facility.",
      ]}
      faqs={[
        {
          q: "How much loan can I get on a ₹30,000 monthly salary?",
          a: "With a verified net take-home salary of ₹30,000, you are eligible to apply for ₹10,000 up to ₹60,000 for 30, 40, or 50 days based on partner NBFC credit policy.",
        },
        {
          q: "What is the repayment structure on a 30k salary loan?",
          a: "LoanCentral specializes in single bullet repayments. Rather than dividing your loan into 12–24 EMIs with accumulated interest, you settle the entire principal and agreed fee once your salary is credited on day 30, 40, or 50.",
        },
        {
          q: "Are cash-salaried individuals eligible?",
          a: "No. LoanCentral caters strictly to salaried applicants with verifiable digital bank salary credits.",
        },
        {
          q: "How quickly are funds disbursed into my account?",
          a: "Once you complete e-KYC and sign your e-mandate, approved funds are transferred directly into your salary bank account, typically within 10–15 minutes.",
        },
      ]}
    />
  );
}
