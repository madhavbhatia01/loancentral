"use client";

import React from "react";
import Link from "next/link";
import {
  Banknote,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Wallet,
  Clock,
  Building2,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import RepaymentEstimator from "./RepaymentEstimator";

interface SalaryLoanPageProps {
  salaryAmount: number; // e.g. 30000
  salaryFormatted: string; // e.g. "₹30,000"
  maxLoanAmount: number; // e.g. 60000
  maxLoanFormatted: string; // e.g. "₹60,000"
  imagePath?: string;
  imageAlt?: string;
  heroHeadline: string;
  heroSubtitle: string;
  keyHighlights: string[];
  eligibilityNotes: string[];
  faqs: { q: string; a: string }[];
  onApplyClick?: () => void;
}

export default function SalaryLoanPage({
  salaryAmount,
  salaryFormatted,
  maxLoanAmount,
  maxLoanFormatted,
  imagePath = "/images/salary-30k-professional.jpg",
  imageAlt = "Salaried professional receiving loan on salary",
  heroHeadline,
  heroSubtitle,
  keyHighlights,
  eligibilityNotes,
  faqs,
  onApplyClick,
}: SalaryLoanPageProps) {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const handleApply = () => {
    if (onApplyClick) {
      onApplyClick();
    } else {
      window.location.href = `https://apply.credit91.com?salary=${salaryAmount}`;
    }
  };

  return (
    <div className="py-8 sm:py-14 hm-bg-paper-soft space-y-12 sm:space-y-16 ">
      
      {/* 1. Salary Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hm-no-gradient hm-no-gradient hm-no-gradient hm-no-gradient rounded-3xl border hm-border-blue p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Salary Bracket Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full hm-bg-blue-soft border hm-border-blue hm-text-blue text-xs font-bold ">
                <Sparkles className="w-3.5 h-3.5 hm-text-coral" />
                <span>Salaried Credit · {salaryFormatted} Monthly Income</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black hm-text-ink leading-tight">
                {heroHeadline}
              </h1>

              {/* Subtitle */}
              <p className="hm-text-ink-soft text-sm sm:text-base leading-relaxed">
                {heroSubtitle}
              </p>

              {/* 4 Quick Facts for this Salary Tier */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl hm-bg-card border hm-border-rule shadow-xs">
                  <div className="text-[11px] font-bold hm-text-muted ">Max Eligible Loan</div>
                  <div className="text-lg font-black hm-text-blue mt-0.5">{maxLoanFormatted}</div>
                  <div className="text-[10px] hm-text-muted">Based on {salaryFormatted} salary</div>
                </div>

                <div className="p-3.5 rounded-2xl hm-bg-card border hm-border-rule shadow-xs">
                  <div className="text-[11px] font-bold hm-text-muted ">Tenure Options</div>
                  <div className="text-lg font-black hm-text-ink mt-0.5">30, 40, or 50 Days</div>
                  <div className="text-[10px] hm-text-muted">Single bullet settlement</div>
                </div>

                <div className="p-3.5 rounded-2xl hm-bg-card border hm-border-rule shadow-xs">
                  <div className="text-[11px] font-bold hm-text-muted ">Interest Type</div>
                  <div className="text-lg font-black hm-text-mint mt-0.5">Transparent APR</div>
                  <div className="text-[10px] hm-text-muted">0 hidden subscription fees</div>
                </div>

                <div className="p-3.5 rounded-2xl hm-bg-card border hm-border-rule shadow-xs">
                  <div className="text-[11px] font-bold hm-text-muted ">Disbursal Time</div>
                  <div className="text-lg font-black hm-text-coral mt-0.5">Under 10 Mins</div>
                  <div className="text-[10px] hm-text-muted">Direct to bank account</div>
                </div>
              </div>

              {/* Primary Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={handleApply}
                  className="min-h-[48px] px-8 py-3.5 rounded-xl hm-primary hm-hover-primary active:scale-[0.99] hm-text-paper font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hm-shadow-primary transition-colors text-center"
                >
                  <span>Apply with {salaryFormatted} Salary</span>
                  <ArrowRight className="w-4 h-4 hm-text-coral" />
                </button>

                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs hm-text-muted font-semibold">
                  <ShieldCheck className="w-4 h-4 hm-text-blue flex-shrink-0" />
                  <span>No bureau pull without explicit OTP consent</span>
                </div>
              </div>

            </div>

            {/* Right: AI-Generated / Lifestyle Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border hm-border-rule shadow-md hm-bg-paper-deep aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                <img
                  src={imagePath}
                  alt={imageAlt}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to high-contrast modern card if image is loading
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />

                {/* Floating Trust Badge on image */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl hm-bg-card backdrop-blur-md border hm-border-rule shadow-md flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl hm-primary hm-text-paper flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    ₹
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-black hm-text-ink truncate">
                      Salary Verified: {salaryFormatted}/mo
                    </div>
                    <div className="text-[11px] hm-text-muted font-medium truncate">
                      Eligible for up to {maxLoanFormatted} instant loan
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Repayment Estimator Section for this Salary */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-black hm-text-blue ">
            Loan Simulator
          </span>
          <h2 className="text-2xl sm:text-3xl font-black hm-text-ink">
            Calculate your repayment on {salaryFormatted} salary
          </h2>
          <p className="text-xs sm:text-sm hm-text-muted max-w-md mx-auto">
            Choose loan amount from ₹10,000 to {maxLoanFormatted} and pick your term to settle on your next salary.
          </p>
        </div>

        <RepaymentEstimator onApplyClick={onApplyClick} />
      </section>

      {/* 3. Salary Criteria & Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Specific Advantages for this Salary */}
          <div className="p-6 sm:p-8 rounded-3xl hm-bg-card border hm-border-rule shadow-xs space-y-4">
            <h3 className="text-lg sm:text-xl font-bold hm-text-ink flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 hm-text-blue" />
              <span>Key Advantages for {salaryFormatted} Earners</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm hm-text-ink-soft">
              {keyHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 hm-text-blue flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Eligibility Breakdown */}
          <div className="p-6 sm:p-8 rounded-3xl hm-bg-card border hm-border-rule shadow-xs space-y-4">
            <h3 className="text-lg sm:text-xl font-bold hm-text-ink flex items-center gap-2">
              <Building2 className="w-5 h-5 hm-text-coral" />
              <span>Eligibility Guidelines</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm hm-text-ink-soft">
              {eligibilityNotes.map((note, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 hm-text-mint flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{note}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 4. Salary Tier Navigation: Explore other salary brackets */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl hm-bg-blue-soft border hm-border-blue text-center space-y-4">
          <h3 className="text-base sm:text-lg font-bold hm-text-ink">
            Explore Loans for Other Monthly Salary Brackets
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              { label: "₹25,000 Salary", href: "/personal-loan-for-25k-salary" },
              { label: "₹30,000 Salary", href: "/personal-loan-for-30k-salary" },
              { label: "₹35,000 Salary", href: "/personal-loan-for-35k-salary" },
              { label: "₹40,000 Salary", href: "/personal-loan-for-40k-salary" },
              { label: "₹50,000 Salary", href: "/personal-loan-for-50k-salary" },
            ].map((tier, idx) => (
              <Link
                key={idx}
                href={tier.href}
                className="px-4 py-2 rounded-xl hm-bg-card hm-hover-primary hm-hover-text-paper border hm-border-rule font-bold text-xs hm-text-ink-soft transition-colors shadow-xs"
              >
                {tier.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs for this Salary */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-black hm-text-blue ">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl font-black hm-text-ink">
            Frequently Asked Questions for {salaryFormatted} Salary
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="hm-bg-card rounded-2xl border hm-border-rule shadow-xs overflow-hidden transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full min-h-[52px] p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold hm-text-ink">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 hm-text-blue transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm hm-text-ink-soft leading-relaxed border-t hm-border-rule pt-3 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
