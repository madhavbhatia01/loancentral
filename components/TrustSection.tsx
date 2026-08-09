import React from "react";
import { Check, X, ShieldCheck, Scale, Zap } from "lucide-react";

export default function TrustSection() {
  const comparison = [
    { feature: "Credit Score Pull", traditional: "Hard check without clear notice", loancentral: "Consent-first (OTP authorization required)" },
    { feature: "Upfront Cost Visibility", traditional: "Hidden subscription or surprise fees", loancentral: "100% disclosed (EMI, APR & fees upfront)" },
    { feature: "Lender Disclosure", traditional: "Obscured until contract stage", loancentral: "RBI-regulated NBFC details shown early" },
    { feature: "Application Speed", traditional: "Physical paperwork & long queues", loancentral: "Fully digital phone-led flow" },
  ];

  return (
    <section id="trust" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00C9A7]">
            Trust Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C]">
            Why borrowers choose LoanCentral over traditional apps.
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead className="bg-[#0B192C] text-white">
                <tr>
                  <th className="p-4 sm:p-5 font-bold">Feature / Standard</th>
                  <th className="p-4 sm:p-5 font-bold text-slate-400">Traditional Personal Loans</th>
                  <th className="p-4 sm:p-5 font-bold text-[#00C9A7]">LoanCentral LSP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-[#0B192C]">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-slate-500 flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-900 font-semibold flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#00C9A7] flex-shrink-0 mt-0.5" />
                      <span>{row.loancentral}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Compliance Footer Banner */}
        <div className="p-5 rounded-2xl bg-slate-900 text-slate-300 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <Scale className="w-5 h-5 text-[#00C9A7] flex-shrink-0" />
            <span>LoanCentral operates strictly in compliance with RBI Digital Lending Directions as a Lending Service Provider (LSP).</span>
          </div>
          <span className="px-3 py-1 bg-slate-800 text-teal-300 font-bold rounded-lg border border-slate-700 whitespace-nowrap">
            RBI Framework Compliant
          </span>
        </div>

      </div>
    </section>
  );
}
