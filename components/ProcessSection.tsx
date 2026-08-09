import React from "react";
import { Fingerprint, FileCheck2, Calculator, Banknote, ArrowRight } from "lucide-react";

interface ProcessSectionProps {
  onApplyClick: () => void;
}

export default function ProcessSection({ onApplyClick }: ProcessSectionProps) {
  const steps = [
    {
      num: "01",
      title: "Verify mobile",
      desc: "Start with one number, consent-first OTP, and a resumable application journey.",
      icon: Fingerprint,
    },
    {
      num: "02",
      title: "Share basics",
      desc: "Income, city, employment type, PAN, and bank statement uploaded in context.",
      icon: FileCheck2,
    },
    {
      num: "03",
      title: "Review costs",
      desc: "Principal, EMI, processing fee, due dates, APR, and total payable stay 100% visible.",
      icon: Calculator,
    },
    {
      num: "04",
      title: "Accept securely",
      desc: "Complete final KYC and e-mandate bank link only after approving the transparent loan offer.",
      icon: Banknote,
    },
  ];

  return (
    <section id="process" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-teal-300 text-xs font-bold uppercase tracking-wider">
            Cleaner than the category norm
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            One journey from intent to decision.
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            The interface is structured around the borrower&apos;s real questions: am I eligible, what will it cost, what documents are needed, and who helps me if something is unclear?
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                onClick={onApplyClick}
                className="relative p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-[#00C9A7] transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-slate-600 group-hover:text-[#00C9A7] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-[#00C9A7] group-hover:bg-[#00C9A7] group-hover:text-slate-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00C9A7] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-700/50 flex items-center text-xs font-semibold text-[#00C9A7] gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Start Step {step.num}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
