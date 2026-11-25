"use client";

import React, { useState } from "react";
import { Stethoscope, Wallet, GraduationCap, Home, Plane, Receipt, ArrowRight } from "lucide-react";

interface UseCasesProps {
  onApplyClick?: () => void;
}

export default function UseCases({ onApplyClick }: UseCasesProps) {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      title: "Urgent Month-End Expenses",
      icon: Wallet,
      tag: "Month-End Support",
      desc: "Cover unexpected mid-month expenses or delayed payments until your upcoming salary credit.",
      amountRange: "₹10,000 – ₹60,000",
      idealTenure: "30 or 40 Days",
    },
    {
      title: "Medical Emergencies",
      icon: Stethoscope,
      tag: "Healthcare",
      desc: "Immediate funds for diagnostic tests, pharmacy bills, or emergency hospital room deposits.",
      amountRange: "₹15,000 – ₹60,000",
      idealTenure: "30, 40, or 50 Days",
    },
    {
      title: "Urgent Bills & Dues",
      icon: Receipt,
      tag: "Utilities",
      desc: "Avoid late penalties on electricity, credit cards, or essential household utility bills.",
      amountRange: "₹10,000 – ₹40,000",
      idealTenure: "30 Days",
    },
    {
      title: "Education & Fees",
      icon: GraduationCap,
      tag: "Tuition / Exam",
      desc: "Pay semester fees, competitive exam application costs, or certification upskilling expenses.",
      amountRange: "₹20,000 – ₹60,000",
      idealTenure: "40 or 50 Days",
    },
    {
      title: "Home & Auto Repairs",
      icon: Home,
      tag: "Maintenance",
      desc: "Fix urgent plumbing, water seepage, or vehicle breakdown without waiting for month-end.",
      amountRange: "₹10,000 – ₹50,000",
      idealTenure: "30 or 40 Days",
    },
    {
      title: "Emergency Travel",
      icon: Plane,
      tag: "Transit",
      desc: "Book last-minute train or flight tickets to visit hometown during urgent family situations.",
      amountRange: "₹10,000 – ₹50,000",
      idealTenure: "30 or 40 Days",
    },
  ];

  return (
    <section id="loans" className="py-14 sm:py-20 hm-bg-paper-soft border-b hm-border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full hm-bg-blue-soft border hm-border-blue hm-text-blue text-xs font-bold ">
              Urgent Use Cases
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black hm-text-ink">
              Built for urgent needs. <br className="hidden sm:block" />
              <span className="hm-no-gradient hm-no-gradient hm-no-gradient hm-text-ink">Settled on your next salary.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm hm-text-muted max-w-md leading-relaxed">
            Borrow what you need to meet immediate obligations without getting locked into multi-year high-interest loans.
          </p>
        </div>

        {/* Use Case Tabs: 2 cols on smallest mobile, 3 cols on tablet, 6 cols on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTab(idx)}
                aria-pressed={isSelected}
                className={`min-h-[56px] p-3 rounded-xl border text-left transition-colors ${
                  isSelected
                    ? "hm-primary hm-border-blue hm-text-paper shadow-md ring-2 hm-focus ring-offset-1"
                    : "hm-bg-card hm-border-rule hm-text-ink-soft hm-hover-border-blue hm-hover-blue-soft active:scale-95"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <Icon className={`w-4 h-4 ${isSelected ? "hm-text-coral" : "hm-text-blue"}`} />
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${isSelected ? "hm-bg-card hm-text-paper" : "hm-bg-paper-deep hm-text-muted"}`}>
                    0{idx + 1}
                  </span>
                </div>
                <div className="text-xs font-bold line-clamp-1">{cat.title}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Use Case Details Box */}
        <div className="p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl hm-bg-card border-2 hm-border-blue hm-text-ink flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md hm-bg-blue-soft hm-text-blue text-xs font-bold border hm-border-blue">
                {categories[activeTab].tag}
              </span>
              <span className="text-xs hm-text-muted font-medium">
                100% Paperless Digital e-KYC
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black hm-text-ink">
              {categories[activeTab].title}
            </h3>

            <p className="text-xs sm:text-sm hm-text-ink-soft leading-relaxed font-normal">
              {categories[activeTab].desc}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs hm-text-ink-soft pt-1">
              <div>
                <span className="hm-text-muted block text-[10px] font-semibold">Verification</span>
                <strong className="hm-text-ink font-bold">Instant DigiLocker e-KYC</strong>
              </div>
              <div className="border-l hm-border-rule pl-4">
                <span className="hm-text-muted block text-[10px] font-semibold">Repayment Type</span>
                <strong className="hm-text-blue font-bold">Single Bullet on salary schedule</strong>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 flex-shrink-0">
            <a
              href="https://apply.credit91.com?utm_source=loancentral&utm_medium=website&utm_campaign=use_cases_cta"
              className="min-h-[48px] px-6 py-3.5 rounded-xl hm-primary hm-hover-primary active:scale-[0.99] hm-text-paper font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hm-shadow-primary transition-colors text-center"
            >
              <span>Apply for {categories[activeTab].title}</span>
              <ArrowRight className="w-4 h-4 hm-text-coral" />
            </a>
            <span className="text-[10px] text-center hm-text-muted font-medium">
              No bureau check without OTP
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
