import React from "react";
import { FileText, ShieldCheck, Scale, AlertCircle } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="py-12 md:py-20 hm-bg-paper-soft">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Title */}
        <div className="space-y-3 text-center sm:text-left">
          <span className="px-3.5 py-1 rounded-full hm-bg-mint-soft border hm-border-mint hm-text-mint text-xs font-bold ">
            Terms of Service
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold hm-text-ink">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs hm-text-muted">
            Last Updated: August 2026 | Digital Lending Service Provider (LSP) Agreement
          </p>
        </div>

        {/* Content Card */}
        <div className="hm-bg-card p-8 sm:p-12 rounded-3xl border hm-border-rule shadow-sm space-y-8 hm-text-ink-soft text-xs sm:text-sm leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-lg font-bold hm-text-ink flex items-center gap-2">
              <Scale className="w-5 h-5 hm-text-blue" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or using the LoanCentral web platform or mobile application, you agree to be bound by these Terms and Conditions. LoanCentral operates as a technology Lending Service Provider (LSP) facilitating loan applications between individual borrowers and RBI-regulated Non-Banking Financial Companies (NBFCs).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold hm-text-ink flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 hm-text-blue" />
              2. Role as Lending Service Provider (LSP)
            </h2>
            <p>
              LoanCentral is not a Bank or Non-Banking Financial Company (NBFC) and does not directly issue loans or hold deposit accounts. All loan underwriting, interest rate determinations, credit approvals, and monetary disbursals are conducted solely by our partner RBI-registered NBFC lenders in accordance with RBI Digital Lending Directions.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold hm-text-ink flex items-center gap-2">
              <FileText className="w-5 h-5 hm-text-blue" />
              3. Borrower Eligibility Criteria
            </h2>
            <p>
              To apply for a personal loan through the LoanCentral interface, applicants must fulfill the following criteria:
            </p>
            <ul className="list-disc pl-5 space-y-2 hm-text-ink-soft">
              <li>Must be a citizen of India residing within serviceable pin codes.</li>
              <li>Must be at least 21 years of age and hold a valid PAN card.</li>
              <li>Must demonstrate regular monthly income (Salaried or Self-Employed).</li>
              <li>Must provide accurate bank account credentials for e-mandate setup and disbursal.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold hm-text-ink flex items-center gap-2">
              <AlertCircle className="w-5 h-5 hm-text-blue" />
              4. Cost Transparency &amp; Repayment Responsibilities
            </h2>
            <p>
              LoanCentral ensures that all annual percentage rates (APR), monthly EMI amounts, processing fees, documentation charges, and penal interest terms are fully displayed prior to loan contract acceptance. Borrowers are legally obligated to satisfy monthly EMI payments on or before scheduled due dates as specified in their lender sanction letter.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
