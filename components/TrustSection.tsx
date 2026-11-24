"use client";

import React from "react";
import { Check, X, ShieldCheck, Scale } from "lucide-react";

export default function TrustSection() {
  const comparison = [
    {
      feature: "Credit Score Pull",
      traditional: "Hard bureau enquiry initiated without explicit notice or explanation",
      loancentral: "Consent-first: OTP authorization required before any bureau check",
    },
    {
      feature: "Upfront Cost Breakdown",
      traditional: "Vague estimates; surprise subscription, processing, or insurance deductions",
      loancentral: "100% disclosed upfront: principal, fees, interest, and exact repayment amount",
    },
    {
      feature: "Repayment Structure",
      traditional: "Compulsory multi-month/year EMIs with steep foreclosure penalties",
      loancentral: "Single bullet repayment at 30, 40, or 50 days aligned with your salary",
    },
    {
      feature: "Regulated Lender Transparency",
      traditional: "Lending partner identity kept hidden until contract signature",
      loancentral: "RBI-regulated NBFC partner details clearly identified early in the journey",
    },
    {
      feature: "Application Experience",
      traditional: "Branch visits, physical paperwork, and aggressive sales calls",
      loancentral: "Digital paperless, phone-led flow completed directly to bank account",
    },
  ];

  return (
    <section id="trust" className="py-14 sm:py-20 hm-bg-card border-b hm-border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full hm-bg-blue-soft border hm-border-blue hm-text-blue text-xs font-bold ">
            Trust &amp; Transparency
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black hm-text-ink">
            Why salaried borrowers choose LoanCentral.
          </h2>
          <p className="text-xs sm:text-sm hm-text-ink-soft leading-relaxed">
            Built from day one around RBI digital lending guidelines and strict consent-first architecture.
          </p>
        </div>

        {/* Mobile View (<768px): Stacked Comparison Cards (No horizontal overflow!) */}
        <div className="block md:hidden space-y-4">
          {comparison.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl hm-bg-paper-soft border hm-border-rule shadow-xs space-y-3"
            >
              <div className="text-sm font-black hm-text-ink border-b hm-border-rule pb-2">
                {item.feature}
              </div>

              {/* LoanCentral Advantage */}
              <div className="p-3 rounded-xl hm-bg-blue-soft border hm-border-blue space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold hm-text-blue">
                  <Check className="w-4 h-4 hm-text-blue flex-shrink-0" />
                  <span>LoanCentral LSP</span>
                </div>
                <p className="text-xs hm-text-ink-soft font-medium leading-relaxed pl-5">
                  {item.loancentral}
                </p>
              </div>

              {/* Traditional Comparison */}
              <div className="p-2.5 rounded-xl hm-bg-card border hm-border-rule space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold hm-text-muted">
                  <X className="w-3.5 h-3.5 hm-text-coral flex-shrink-0" />
                  <span>Traditional Personal Loans</span>
                </div>
                <p className="text-[11px] hm-text-muted leading-relaxed pl-5">
                  {item.traditional}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet & Desktop View (>=768px): Clean High-Contrast Table */}
        <div className="hidden md:block max-w-4xl mx-auto hm-bg-paper-soft rounded-3xl border hm-border-rule overflow-hidden shadow-xs">
          <table className="w-full text-xs sm:text-sm text-left">
            <caption className="sr-only">LoanCentral compared to traditional lending platforms</caption>
            <thead className="hm-bg-pear-soft hm-text-ink border-b hm-border-rule">
              <tr>
                <th scope="col" className="p-4 sm:p-5 font-bold w-1/3">Standard / Feature</th>
                <th scope="col" className="p-4 sm:p-5 font-bold hm-text-muted w-1/3">Traditional Personal Loans</th>
                <th scope="col" className="p-4 sm:p-5 font-bold hm-text-blue w-1/3">LoanCentral LSP</th>
              </tr>
            </thead>
            <tbody className="divide-y hm-divide-rule hm-bg-card">
              {comparison.map((row, idx) => (
                <tr key={idx} className="hm-hover-paper-soft transition-colors">
                  <td className="p-4 sm:p-5 font-bold hm-text-ink">{row.feature}</td>
                  <td className="p-4 sm:p-5 hm-text-muted">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 hm-text-coral flex-shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 hm-text-ink font-semibold hm-bg-blue-soft">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 hm-text-blue flex-shrink-0 mt-0.5" />
                      <span>{row.loancentral}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Regulatory Banner */}
        <div className="p-4 sm:p-6 rounded-2xl hm-bg-blue-soft hm-text-ink-soft border hm-border-blue flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <Scale className="w-5 h-5 hm-text-blue flex-shrink-0" />
            <span className="leading-relaxed">
              LoanCentral operates strictly in compliance with RBI Digital Lending Directions as a Lending Service Provider (LSP).
            </span>
          </div>
          <span className="px-3.5 py-1.5 hm-bg-card hm-text-blue font-bold rounded-lg border hm-border-blue whitespace-nowrap shadow-xs">
            RBI Regulated Architecture
          </span>
        </div>

      </div>
    </section>
  );
}
