"use client";

import React, { useState, useId } from "react";
import { Calculator, Calendar, Wallet, Percent, ArrowRight, ShieldCheck, Check, Sparkles } from "lucide-react";

interface EMICalculatorProps {
  onApplyClick?: (details?: { amount: number; tenure: string }) => void;
  className?: string;
}

export default function EMICalculator({
  onApplyClick,
  className = "",
}: EMICalculatorProps) {
  const [calcMode, setCalcMode] = useState<"monthly" | "bullet">("monthly");

  // Monthly EMI Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(30000);
  const [tenureMonths, setTenureMonths] = useState<number>(6);
  const [interestRate, setInterestRate] = useState<number>(18); // Annual %

  // Bullet Loan State
  const [bulletAmount, setBulletAmount] = useState<number>(30000);
  const [bulletDays, setBulletDays] = useState<7 | 14 | 30 | 40 | 50>(30);

  // Generate unique IDs for accessibility
  const amountSliderId = useId();
  const tenureSliderId = useId();
  const rateSliderId = useId();
  const bulletSliderId = useId();

  // Monthly EMI Math: EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]
  const monthlyRate = interestRate / 12 / 100;
  const emi =
    monthlyRate === 0
      ? Math.round(loanAmount / tenureMonths)
      : Math.round(
          (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
            (Math.pow(1 + monthlyRate, tenureMonths) - 1)
        );
  const totalPayment = emi * tenureMonths;
  const totalInterest = Math.max(0, totalPayment - loanAmount);
  const principalPercent = Math.round((loanAmount / totalPayment) * 100) || 80;
  const interestPercent = 100 - principalPercent;

  const handleApplyMonthly = () => {
    if (onApplyClick) {
      onApplyClick({ amount: loanAmount, tenure: `${tenureMonths} months` });
    } else {
      window.location.href = `https://apply.credit91.com?amount=${loanAmount}&months=${tenureMonths}`;
    }
  };

  const handleApplyBullet = () => {
    if (onApplyClick) {
      onApplyClick({ amount: bulletAmount, tenure: `${bulletDays} days` });
    } else {
      window.location.href = `https://apply.credit91.com?amount=${bulletAmount}&tenure=${bulletDays}`;
    }
  };

  return (
    <section id="calculator" className={`py-14 sm:py-20 hm-bg-paper-soft border-y hm-border-rule hm-text-ink ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full hm-bg-blue-soft border hm-border-blue hm-text-blue text-xs font-bold shadow-xs">
            <Calculator className="w-3.5 h-3.5 hm-text-blue" />
            <span>Interactive Financial Tool</span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black hm-text-ink tracking-tight">
            Personal Loan &amp; EMI Calculator
          </h2>

          <p className="text-xs sm:text-sm hm-text-ink-soft max-w-lg mx-auto leading-relaxed">
            Plan your borrowing with complete transparency. Calculate monthly EMIs or explore single bullet repayment aligned with your salary schedule.
          </p>

          {/* Calculator Mode Tabs */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex p-1 rounded-2xl hm-bg-card border hm-border-rule shadow-xs">
              <button
                type="button"
                onClick={() => setCalcMode("monthly")}
                className={`min-h-[42px] px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
                  calcMode === "monthly"
                    ? "hm-bg-blue hm-text-paper shadow-sm"
                    : "hm-text-ink-soft hm-hover-ink hm-hover-paper"
                }`}
              >
                Monthly EMI Calculator
              </button>
              <button
                type="button"
                onClick={() => setCalcMode("bullet")}
                className={`min-h-[42px] px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
                  calcMode === "bullet"
                    ? "hm-bg-blue hm-text-paper shadow-sm"
                    : "hm-text-ink-soft hm-hover-ink hm-hover-paper"
                }`}
              >
                Salary Aligned (7–50 Days)
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Monthly EMI Calculator Card */}
        {calcMode === "monthly" && (
          <div className="hm-bg-card rounded-3xl border hm-border-rule shadow-xl p-5 sm:p-8 space-y-7 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Sliders */}
              <div className="md:col-span-7 space-y-6">
                
                {/* 1. Loan Amount */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold hm-text-ink-soft">
                    <label htmlFor={amountSliderId} className="flex items-center gap-1.5 cursor-pointer">
                      <Wallet className="w-4 h-4 hm-text-blue" />
                      <span>Loan Amount</span>
                    </label>
                    <span className="text-base sm:text-lg font-black hm-text-blue">
                      ₹{loanAmount.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <input
                    id={amountSliderId}
                    type="range"
                    min={10000}
                    max={100000}
                    step={5000}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    aria-label="Select loan amount"
                    className="w-full h-3 hm-bg-paper-deep rounded-lg appearance-none cursor-pointer hm-accent-blue focus:outline-none focus-visible:ring-2 hm-focus"
                  />
                  <div className="flex justify-between items-center text-[11px] font-semibold hm-text-muted">
                    <span>Min ₹10,000</span>
                    <span>Max ₹1,00,000</span>
                  </div>
                </div>

                {/* 2. Tenure in Months */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold hm-text-ink-soft">
                    <label htmlFor={tenureSliderId} className="flex items-center gap-1.5 cursor-pointer">
                      <Calendar className="w-4 h-4 hm-text-blue" />
                      <span>Tenure (Months)</span>
                    </label>
                    <span className="text-base sm:text-lg font-black hm-text-blue">
                      {tenureMonths} Months
                    </span>
                  </div>
                  <input
                    id={tenureSliderId}
                    type="range"
                    min={1}
                    max={12}
                    step={1}
                    value={tenureMonths}
                    onChange={(e) => setTenureMonths(Number(e.target.value))}
                    aria-label="Select tenure in months"
                    className="w-full h-3 hm-bg-paper-deep rounded-lg appearance-none cursor-pointer hm-accent-blue focus:outline-none focus-visible:ring-2 hm-focus"
                  />
                  <div className="flex justify-between items-center text-[11px] font-semibold hm-text-muted">
                    <span>1 Month</span>
                    <span>6 Months</span>
                    <span>12 Months</span>
                  </div>
                </div>

                {/* 3. Interest Rate (% per annum) */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold hm-text-ink-soft">
                    <label htmlFor={rateSliderId} className="flex items-center gap-1.5 cursor-pointer">
                      <Percent className="w-4 h-4 hm-text-blue" />
                      <span>Interest Rate (p.a.)</span>
                    </label>
                    <span className="text-base sm:text-lg font-black hm-text-blue">
                      {interestRate}%
                    </span>
                  </div>
                  <input
                    id={rateSliderId}
                    type="range"
                    min={12}
                    max={36}
                    step={1}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    aria-label="Select annual interest rate percentage"
                    className="w-full h-3 hm-bg-paper-deep rounded-lg appearance-none cursor-pointer hm-accent-blue focus:outline-none focus-visible:ring-2 hm-focus"
                  />
                  <div className="flex justify-between items-center text-[11px] font-semibold hm-text-muted">
                    <span>12% p.a.</span>
                    <span>24% p.a.</span>
                    <span>36% p.a.</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Calculation Result Box */}
              <div className="md:col-span-5 hm-bg-blue-soft rounded-2xl border hm-border-blue p-5 sm:p-6 space-y-5">
                <div>
                  <span className="text-[11px] font-bold hm-text-blue block">
                    Estimated Monthly EMI
                  </span>
                  <div className="text-3xl sm:text-4xl font-black hm-text-ink mt-1">
                    ₹{emi.toLocaleString("en-IN")}
                    <span className="text-xs font-bold hm-text-muted ml-1">/ month</span>
                  </div>
                </div>

                {/* Visual Ratio Bar */}
                <div className="space-y-1.5">
                  <div className="h-3 w-full hm-bg-paper-deep rounded-full overflow-hidden flex">
                    <div
                      style={{ width: `${principalPercent}%` }}
                      className="hm-bg-blue h-full transition-[flex-basis] duration-300"
                      title={`Principal: ${principalPercent}%`}
                    />
                    <div
                      style={{ width: `${interestPercent}%` }}
                      className="hm-bg-coral h-full transition-[flex-basis] duration-300"
                      title={`Interest: ${interestPercent}%`}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-bold hm-text-muted">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full hm-bg-blue inline-block" />
                      Principal: {principalPercent}%
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full hm-bg-coral inline-block" />
                      Interest: {interestPercent}%
                    </span>
                  </div>
                </div>

                {/* Breakdown List */}
                <div className="space-y-2 text-xs border-t hm-border-blue pt-3">
                  <div className="flex justify-between hm-text-ink-soft font-medium">
                    <span>Principal Amount</span>
                    <strong className="hm-text-ink font-bold">₹{loanAmount.toLocaleString("en-IN")}</strong>
                  </div>
                  <div className="flex justify-between hm-text-ink-soft font-medium">
                    <span>Total Interest</span>
                    <strong className="hm-text-coral font-bold">₹{totalInterest.toLocaleString("en-IN")}</strong>
                  </div>
                  <div className="flex justify-between hm-text-ink font-bold pt-1 border-t hm-border-blue text-sm">
                    <span>Total Repayment</span>
                    <strong className="hm-text-blue font-black">₹{totalPayment.toLocaleString("en-IN")}</strong>
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  type="button"
                  onClick={handleApplyMonthly}
                  className="w-full min-h-[46px] py-3 px-4 rounded-xl hm-bg-blue hm-hover-ink-bg hm-text-paper font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-colors"
                >
                  <span>Apply for ₹{loanAmount.toLocaleString("en-IN")}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Pricing Disclosure Notice */}
            <div className="p-3.5 rounded-xl hm-bg-paper-soft border hm-border-rule text-[11px] hm-text-ink-soft flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 hm-text-blue flex-shrink-0 mt-0.5" />
              <p>
                This calculation is illustrative. Exact EMI, APR, processing fees, and terms are provided transparently in your Key Fact Statement (KFS) by partner NBFC Credit 91 prior to loan acceptance.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Salary Aligned Bullet Repayment (7–50 Days) */}
        {calcMode === "bullet" && (
          <div className="hm-bg-card rounded-3xl border hm-border-rule shadow-xl p-5 sm:p-8 space-y-7 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column */}
              <div className="md:col-span-7 space-y-6">
                
                {/* Loan Amount */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold hm-text-ink-soft">
                    <label htmlFor={bulletSliderId} className="flex items-center gap-1.5 cursor-pointer">
                      <Wallet className="w-4 h-4 hm-text-blue" />
                      <span>Loan Amount</span>
                    </label>
                    <span className="text-base sm:text-lg font-black hm-text-blue">
                      ₹{bulletAmount.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <input
                    id={bulletSliderId}
                    type="range"
                    min={10000}
                    max={60000}
                    step={1000}
                    value={bulletAmount}
                    onChange={(e) => setBulletAmount(Number(e.target.value))}
                    aria-label="Select bullet loan amount"
                    className="w-full h-3 hm-bg-paper-deep rounded-lg appearance-none cursor-pointer hm-accent-blue focus:outline-none focus-visible:ring-2 hm-focus"
                  />
                  <div className="flex justify-between items-center text-[11px] font-semibold hm-text-muted">
                    <span>Min ₹10,000</span>
                    <span>Max ₹60,000</span>
                  </div>
                </div>

                {/* Days Selection Buttons */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold hm-text-ink-soft">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 hm-text-blue" />
                      <span>Repayment Period (Aligned with Next Salary)</span>
                    </span>
                    <span className="text-xs font-bold hm-text-blue">{bulletDays} Days</span>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {([7, 14, 30, 40, 50] as const).map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setBulletDays(d)}
                        className={`min-h-[44px] py-2 rounded-xl text-xs font-bold flex flex-col items-center justify-center transition-colors ${
                          bulletDays === d
                            ? "hm-bg-blue hm-text-paper shadow-md ring-2 hm-focus ring-offset-1"
                            : "hm-bg-paper-deep hm-text-ink-soft hm-hover-paper border hm-border-rule"
                        }`}
                      >
                        <span className="text-sm font-black">{d}</span>
                        <span className="text-[9px] opacity-80">Days</span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Bullet Summary Box */}
              <div className="md:col-span-5 hm-bg-blue-soft rounded-2xl border hm-border-blue p-5 sm:p-6 space-y-4">
                <span className="text-[11px] font-bold hm-text-blue block">
                  Single Bullet Settlement
                </span>

                <div className="space-y-3 text-xs pt-1">
                  <div className="flex justify-between hm-text-ink-soft font-medium">
                    <span>Borrowed Principal</span>
                    <strong className="hm-text-ink font-bold">₹{bulletAmount.toLocaleString("en-IN")}</strong>
                  </div>
                  <div className="flex justify-between hm-text-ink-soft font-medium">
                    <span>Tenure Selected</span>
                    <strong className="hm-text-ink font-bold">{bulletDays} Days</strong>
                  </div>
                  <div className="flex justify-between hm-text-ink-soft font-medium">
                    <span>Repayment Structure</span>
                    <strong className="hm-text-blue font-bold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 hm-text-blue" />
                      Single Settlement
                    </strong>
                  </div>
                  <div className="flex justify-between hm-text-ink-soft font-medium">
                    <span>Disbursal Channel</span>
                    <strong className="hm-text-mint font-bold">Direct to Bank Account</strong>
                  </div>
                </div>

                <div className="pt-2 border-t hm-border-blue">
                  <button
                    type="button"
                    onClick={handleApplyBullet}
                    className="w-full min-h-[46px] py-3 px-4 rounded-xl hm-bg-blue hm-hover-ink-bg hm-text-paper font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-colors"
                  >
                    <span>Apply for ₹{bulletAmount.toLocaleString("en-IN")} ({bulletDays} Days)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Pricing Disclosure Notice */}
            <div className="p-3.5 rounded-xl hm-bg-paper-soft border hm-border-rule text-[11px] hm-text-ink-soft flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 hm-text-blue flex-shrink-0 mt-0.5" />
              <p>
                Salaried applicants only (minimum net monthly salary ₹30,000). Official LSP compliant architecture partnered with RBI-regulated NBFC Credit 91.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
