import React from "react";
import { ShieldCheck, Calculator, Headphones, Lock, CheckCircle, Scale } from "lucide-react";

export default function TrustSection() {
  const pillars = [
    {
      title: "Lender clarity",
      desc: "Always displays approved RBI-regulated NBFC lending partner details and LoanCentral's role as a Technology LSP upfront.",
      icon: ShieldCheck,
    },
    {
      title: "Cost transparency",
      desc: "Publishes exact APR, processing fees, late charges, cooling-off repayment terms, and full EMI schedule prior to loan acceptance.",
      icon: Calculator,
    },
    {
      title: "Support path",
      desc: "Keeps formal Grievance Redressal paths and compliance escalation contacts easy to locate and understand.",
      icon: Headphones,
    },
  ];

  return (
    <section id="trust" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            Trust architecture
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C]">
            Designed for finance, not just decoration.
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            The visual system is clean and modern, but the user experience stays disciplined: regulated fintech products need absolute transparency, visible disclosures, and zero hidden catches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#00C9A7] hover:shadow-xl transition-all duration-300 group space-y-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0B192C] text-[#00C9A7] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-[#0B192C] group-hover:text-[#00C9A7] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Regulatory Disclosure Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-slate-300 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Scale className="w-6 h-6 text-[#00C9A7] flex-shrink-0" />
            <div className="text-xs">
              <strong className="text-white block font-bold text-sm">RBI Digital Lending Guidelines Compliant</strong>
              LoanCentral operates in full compliance with the Reserve Bank of India (RBI) Digital Lending Directions as a Lending Service Provider.
            </div>
          </div>
          <span className="text-[11px] font-semibold text-teal-300 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 whitespace-nowrap">
            Consent-First Data Standard
          </span>
        </div>

      </div>
    </section>
  );
}
