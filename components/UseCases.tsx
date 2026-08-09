"use client";

import React from "react";
import { Stethoscope, Wallet, GraduationCap, Home, Plane, Receipt, IndianRupee, CheckCircle2 } from "lucide-react";

interface UseCasesProps {
  onApplyClick: () => void;
}

export default function UseCases({ onApplyClick }: UseCasesProps) {
  const useCases = [
    { title: "Medical expenses", icon: Stethoscope, desc: "Emergency hospital bills, diagnostic tests, or prescription costs." },
    { title: "Salary gap", icon: Wallet, desc: "Bridge short-term cash flow gaps until your monthly paycheck arrives." },
    { title: "Education fees", icon: GraduationCap, desc: "School tuition, college admission fees, or certification courses." },
    { title: "Home repairs", icon: Home, desc: "Urgent plumbing, electrical repairs, or appliance maintenance." },
    { title: "Travel plans", icon: Plane, desc: "Urgent family travel, train/flight tickets, or emergency trips." },
    { title: "Urgent bills", icon: Receipt, desc: "Utility bills, credit card payment cycles, or insurance premiums." },
  ];

  return (
    <section id="loans" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-4">
            <span className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
              Loan Use Cases
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] leading-tight">
              Built for urgent expenses, <br />
              <span className="text-[#00C9A7]">designed for calm decisions.</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Most instant-loan pages sell speed first and explain terms later. LoanCentral keeps the page modern, fast, and serious: easy to scan, honest about the journey, and clear about what happens next.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onApplyClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B192C] text-white font-semibold text-sm hover:bg-slate-800 transition-colors shadow-md"
              >
                <span>Check Your Eligibility</span>
                <IndianRupee className="w-4 h-4 text-[#00C9A7]" />
              </button>
            </div>
          </div>

          {/* Right Column Use Case Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {useCases.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onClick={onApplyClick}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#00C9A7] hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 mb-2.5">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#00C9A7] group-hover:bg-[#00C9A7] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#0B192C] group-hover:text-[#00C9A7] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pl-13">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
