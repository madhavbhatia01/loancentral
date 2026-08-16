import React from "react";
import { Fingerprint, FileCheck2, Calculator, Banknote, ArrowRight } from "lucide-react";

interface ProcessSectionProps {
  onApplyClick?: () => void;
}

export default function ProcessSection({ onApplyClick }: ProcessSectionProps) {
  const steps = [
    {
      num: "01",
      title: "Verify Mobile",
      subtitle: "Consent-First OTP",
      desc: "Instant mobile verification with no bureau pull without explicit approval.",
      icon: Fingerprint,
    },
    {
      num: "02",
      title: "Share Basics",
      subtitle: "Digital Onboarding",
      desc: "Income, city, PAN, and Aadhaar e-KYC verified in context.",
      icon: FileCheck2,
    },
    {
      num: "03",
      title: "Review Offer",
      subtitle: "Cost Transparency",
      desc: "Principal, monthly EMI, APR, processing fee, and due dates displayed upfront.",
      icon: Calculator,
    },
    {
      num: "04",
      title: "Direct Disbursal",
      subtitle: "Secure Sign-Off",
      desc: "Sign e-mandate and receive funds directly into your bank account.",
      icon: Banknote,
    },
  ];

  return (
    <section id="process" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00C9A7]">
            Application Flow
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C]">
            One transparent journey from request to decision.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            No endless paperwork. No hidden subscription traps. Just a clean 4-step path.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <a
                key={idx}
                href="https://apply.credit91.com"
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#00C9A7] hover:shadow-lg transition-all duration-300 group cursor-pointer space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 group-hover:bg-[#00C9A7] group-hover:text-slate-950 transition-colors">
                      STEP {step.num}
                    </span>
                    <Icon className="w-5 h-5 text-[#00C9A7]" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#0B192C] group-hover:text-[#00C9A7] transition-colors">
                      {step.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-slate-400 block mt-0.5">
                      {step.subtitle}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#00C9A7] gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Start Step {step.num}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
