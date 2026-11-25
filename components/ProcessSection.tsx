"use client";

import React from "react";
import { Fingerprint, FileCheck2, Calendar, Banknote, ArrowRight } from "lucide-react";

interface ProcessSectionProps {
  onApplyClick?: () => void;
}

export default function ProcessSection({ onApplyClick }: ProcessSectionProps) {
  const steps = [
    {
      num: "01",
      title: "Verify Mobile",
      subtitle: "Consent-First OTP",
      desc: "Instant mobile verification. No credit bureau pull occurs without your explicit OTP confirmation.",
      icon: Fingerprint,
    },
    {
      num: "02",
      title: "Salary & KYC",
      subtitle: "Paperless Digital e-KYC",
      desc: "Verify your salaried status with regular monthly bank credit and complete Aadhaar e-KYC paperlessly.",
      icon: FileCheck2,
    },
    {
      num: "03",
      title: "Select Flexible Tenure",
      subtitle: "Transparent Offer",
      desc: "Choose your required loan amount and align repayment with your salary date. All charges and single settlement details shown upfront.",
      icon: Calendar,
    },
    {
      num: "04",
      title: "Direct Disbursal",
      subtitle: "Instant Bank Transfer",
      desc: "Sign your digital agreement and e-mandate. Approved loan funds are disbursed directly into your bank account.",
      icon: Banknote,
    },
  ];

  return (
    <section id="process" className="py-14 sm:py-20 hm-bg-card border-b hm-border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-14">
          <span className="px-3 py-1 rounded-full hm-bg-blue-soft border hm-border-blue hm-text-blue text-xs font-bold ">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black hm-text-ink">
            A fast, 4-step path aligned with your paycheck.
          </h2>
          <p className="text-xs sm:text-sm hm-text-ink-soft leading-relaxed">
            Zero physical paperwork. Zero subscription fees. Just a clean phone-first process.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <a
                key={idx}
                href="https://apply.credit91.com?utm_source=loancentral&utm_medium=website&utm_campaign=process_cta"
                className="p-5 sm:p-6 rounded-2xl hm-bg-paper-soft border hm-border-rule hm-hover-border-blue hm-hover-blue-soft hover:shadow-md transition-colors duration-200 group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-2.5 py-1 rounded-md hm-bg-card border hm-border-rule hm-text-ink-soft hm-group-bg-pear hm-group-text-paper hm-group-border-blue transition-colors">
                      STEP {step.num}
                    </span>
                    <Icon className="w-5 h-5 hm-text-blue" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold hm-text-ink hm-group-text-blue transition-colors">
                      {step.title}
                    </h3>
                    <span className="text-[11px] font-semibold hm-text-muted block mt-0.5">
                      {step.subtitle}
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] hm-text-ink-soft leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t hm-border-rule flex items-center text-xs font-bold hm-text-blue gap-1 group-hover:translate-x-1 transition-transform">
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
