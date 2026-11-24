import React from "react";
import { Scale, ShieldCheck, AlertTriangle, Building2 } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <div className="py-12 md:py-20 hm-bg-paper-soft">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Title */}
        <div className="space-y-3 text-center sm:text-left">
          <span className="px-3.5 py-1 rounded-full hm-bg-mint-soft border hm-border-mint hm-text-mint text-xs font-bold ">
            Regulatory Disclosure
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold hm-text-ink">
            Disclaimer &amp; Regulatory Status
          </h1>
          <p className="text-xs hm-text-muted">
            Official Lending Service Provider (LSP) Notice
          </p>
        </div>

        {/* Content Card */}
        <div className="hm-bg-card p-8 sm:p-12 rounded-3xl border hm-border-rule shadow-sm space-y-8 hm-text-ink-soft text-xs sm:text-sm leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-lg font-bold hm-text-ink flex items-center gap-2">
              <Scale className="w-5 h-5 hm-text-blue" />
              1. Non-Lender Status
            </h2>
            <p>
              LoanCentral Technologies operates purely as a technology digital platform and Lending Service Provider (LSP). LoanCentral is not a Bank or Non-Banking Financial Company (NBFC) registered under Section 45-IA of the Reserve Bank of India Act, 1934. LoanCentral does not issue loans directly from its own balance sheet.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold hm-text-ink flex items-center gap-2">
              <Building2 className="w-5 h-5 hm-text-blue" />
              2. RBI-Regulated Lending Partners
            </h2>
            <p>
              All credit evaluation, underwriting, loan agreement generation, sanction letters, interest rate determination, and monetary disbursal are carried out by our partner RBI-registered NBFC lenders in accordance with RBI Digital Lending Directions.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold hm-text-ink flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 hm-text-blue" />
              3. No Upfront Fee Policy
            </h2>
            <p>
              LoanCentral does not request or collect any upfront registration, application, or processing fee directly from borrowers before loan sanction. Any processing fees associated with loan origination are deducted by partner NBFCs directly from loan disbursal proceeds as disclosed in the Key Fact Statement (KFS).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold hm-text-ink flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 hm-text-blue" />
              4. Calculation Estimates
            </h2>
            <p>
              Calculations performed on the LoanCentral EMI calculator or eligibility preview tools serve as indicative estimates based on standard reducing-balance formulas. Final loan offers, exact APR, monthly EMI schedules, and approved loan quantum are subject to verification and partner NBFC credit policy approval.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
