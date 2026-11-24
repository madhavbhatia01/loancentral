"use client";

import React from "react";
import { CheckCircle2, UserCheck, Banknote, Calendar, ShieldCheck, ArrowRight, AlertTriangle } from "lucide-react";

interface EligibilitySectionProps {
  onApplyClick?: () => void;
}

export default function EligibilitySection({ onApplyClick }: EligibilitySectionProps) {
  const criteria = [
    {
      title: "Salaried Professionals",
      desc: "Currently employed with verifiable monthly salary deposited directly into your bank account.",
      icon: UserCheck,
      highlight: "Direct Bank Salary",
      iconBg: "hm-bg-blue-soft hm-text-blue hm-border-blue",
    },
    {
      title: "Regular Monthly Salary",
      desc: "Verifiable monthly take-home salary deposited into your bank account to ensure comfortable single repayment.",
      icon: Banknote,
      highlight: "Monthly Bank Credit",
      iconBg: "hm-bg-pear-soft hm-text-coral hm-border-pear",
    },
    {
      title: "Working Professionals",
      desc: "Adult salaried Indian citizens actively employed at the time of loan application.",
      icon: Calendar,
      highlight: "Indian Citizens",
      iconBg: "hm-bg-blue-soft hm-text-blue hm-border-blue",
    },
    {
      title: "Essential Documents",
      desc: "Valid PAN, Aadhaar linked to mobile number for e-KYC, and recent bank statement.",
      icon: ShieldCheck,
      highlight: "Digital Paperless e-KYC",
      iconBg: "hm-bg-mint-soft hm-text-mint hm-border-mint",
    },
  ];

  return (
    <section id="eligibility" className="py-14 sm:py-20 hm-bg-paper-soft border-b hm-border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
          <span className="px-3 py-1 rounded-full hm-bg-blue-soft border hm-border-blue hm-text-blue text-xs font-bold ">
            Applicant Criteria
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black hm-text-ink leading-tight">
            Clear eligibility with <br className="hidden sm:block" />
            <span className="hm-no-gradient hm-no-gradient hm-no-gradient hm-text-ink">zero ambiguous requirements.</span>
          </h2>
          <p className="hm-text-ink-soft text-xs sm:text-sm leading-relaxed">
            LoanCentral provides salary-aligned credit exclusively to salaried applicants to ensure responsible borrowing.
          </p>
        </div>

        {/* Criteria Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {criteria.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl hm-bg-card border hm-border-rule shadow-xs hm-hover-border-blue hover:shadow-md transition-colors flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${item.iconBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md hm-bg-paper-deep hm-text-ink-soft">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-base font-bold hm-text-ink">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm hm-text-ink-soft leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold hm-text-blue">
                  <CheckCircle2 className="w-4 h-4 hm-text-blue flex-shrink-0" />
                  <span>Verified via consent-first digital onboarding</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Lending Notice & Direct CTA */}
        <div className="rounded-2xl hm-bg-card border hm-border-rule p-5 sm:p-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 shadow-xs">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 hm-text-coral flex-shrink-0 mt-0.5" />
            <div className="text-xs hm-text-ink-soft space-y-1">
              <strong className="hm-text-ink block font-bold text-sm">
                Salaried Applicants Notice
              </strong>
              <p>
                We do not cater to students, cash-salary recipients, or unorganized sector workers without verifiable bank credit history.
              </p>
            </div>
          </div>

          <a
            href="https://apply.credit91.com"
            className="min-h-[48px] px-6 py-3 rounded-xl hm-primary hm-hover-primary active:scale-[0.99] hm-text-paper font-bold text-sm flex items-center justify-center gap-2 shadow-md hm-shadow-primary transition-colors whitespace-nowrap text-center"
          >
            <span>Check My Eligibility</span>
            <ArrowRight className="w-4 h-4 hm-text-coral" />
          </a>
        </div>

      </div>
    </section>
  );
}
