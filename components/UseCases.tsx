"use client";

import React, { useState } from "react";
import { Stethoscope, Wallet, GraduationCap, Home, Plane, Receipt, ArrowRight } from "lucide-react";

interface UseCasesProps {
  onApplyClick?: () => void;
}

export default function UseCases({ onApplyClick }: UseCasesProps) {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    { title: "Medical", icon: Stethoscope, tag: "Emergency Care", desc: "Covers hospital bills, diagnostic procedures, and urgent prescriptions." },
    { title: "Salary Gap", icon: Wallet, tag: "Cash Flow Bridge", desc: "Bridge short-term expenses until monthly salary disbursal." },
    { title: "Education", icon: GraduationCap, tag: "Tuition & Skill", desc: "Course admissions, exam fees, and certification expenses." },
    { title: "Home Repair", icon: Home, tag: "Maintenance", desc: "Emergency home repairs, renovation, or appliance replacements." },
    { title: "Travel", icon: Plane, tag: "Emergency Travel", desc: "Urgent transit tickets, medical travel, or family trips." },
    { title: "Urgent Bills", icon: Receipt, tag: "Utilities & Insurance", desc: "Utility bills, insurance premiums, and recurring dues." },
  ];

  return (
    <section id="loans" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C9A7]">
              Tailored Credit Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C] mt-1">
              Built for urgent needs. Designed for clarity.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            Pick a use case to view tailored loan amounts, transparent repayment terms, and instant approval pathways.
          </p>
        </div>

        {/* Use Case Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`p-3.5 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? "bg-[#0B192C] border-[#0B192C] text-white shadow-md"
                    : "bg-slate-50 border-slate-200/80 text-slate-700 hover:border-[#00C9A7] hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-5 h-5 ${isSelected ? "text-[#00C9A7]" : "text-slate-500"}`} />
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${isSelected ? "bg-white/10 text-teal-300" : "bg-slate-200 text-slate-600"}`}>
                    0{idx + 1}
                  </span>
                </div>
                <div className="text-xs font-bold">{cat.title}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Use Case Details Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="px-2.5 py-1 rounded-md bg-[#00C9A7]/20 text-[#00C9A7] text-xs font-bold">
              {categories[activeTab].tag}
            </span>
            <h3 className="text-xl font-bold text-white">
              Personal Loan for {categories[activeTab].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {categories[activeTab].desc}
            </p>
          </div>

          <a
            href="https://apply.credit91.com"
            className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-[#00C9A7] hover:bg-[#00B4D8] text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors whitespace-nowrap shadow-md text-center"
          >
            <span>Apply for {categories[activeTab].title}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
