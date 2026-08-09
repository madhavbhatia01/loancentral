"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How fast can I get a decision?",
      a: "LoanCentral is designed for a quick online decision after basic eligibility, consent-first checks, and document review. Final approval and disbursal depend on partner NBFC credit policy and completed verification.",
    },
    {
      q: "Will I see all charges before accepting?",
      a: "Yes. The journey is strictly designed to display EMI, interest rate (APR), processing fee, repayment schedule, and total payable before a customer accepts any loan offer.",
    },
    {
      q: "Does eligibility checking affect my credit score?",
      a: "Any bureau check happens only after explicit user OTP consent. The application flow clearly explains which data is requested and why.",
    },
    {
      q: "Is LoanCentral the lender?",
      a: "LoanCentral operates as a Lending Service Provider (LSP) in partnership with RBI-regulated NBFCs. The identity and regulatory details of the approved lending partner are presented clearly before offer acceptance.",
    },
    {
      q: "What documents are required for instant loan approval?",
      a: "You need basic KYC (PAN & Aadhaar verification), employment credentials (salary slip or business proof), and bank statement to verify repayment capability.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-14">
          <span className="px-3.5 py-1 rounded-full bg-teal-100/80 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            FAQ
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C]">
            Answer trust questions before they become drop-offs.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0B192C]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00C9A7] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
