"use client";

import React, { useState, useId } from "react";
import { Calculator, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

interface StickyEMICalculatorProps {
  onApplyClick?: (details: { amount: number; tenureMonths: number; rate: number }) => void;
  className?: string;
}

export default function StickyEMICalculator({
  onApplyClick,
  className = "",
}: StickyEMICalculatorProps) {
  const [loanAmount, setLoanAmount] = useState<number>(30000);
  const [tenureMonths, setTenureMonths] = useState<number>(12);
  const [interestRate, setInterestRate] = useState<number>(18); // Annual %

  const amountId = useId();
  const tenureId = useId();
  const rateId = useId();

  // EMI Math: EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]
  const monthlyRate = interestRate / 12 / 100;
  const emi =
    monthlyRate === 0
      ? Math.round(loanAmount / tenureMonths)
      : Math.round(
          (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
            (Math.pow(1 + monthlyRate, tenureMonths) - 1)
        );

  const totalPayable = emi * tenureMonths;
  const totalInterest = Math.max(0, totalPayable - loanAmount);
  const principalPercent = Math.min(100, Math.max(0, Math.round((loanAmount / totalPayable) * 100))) || 85;
  const interestPercent = 100 - principalPercent;

  const handleApply = () => {
    if (onApplyClick) {
      onApplyClick({ amount: loanAmount, tenureMonths, rate: interestRate });
    } else {
      window.location.href = `https://apply.credit91.com?amount=${loanAmount}&tenureMonths=${tenureMonths}`;
    }
  };

  return (
    <div
      id="calculator"
      className={`bg-white rounded-3xl border border-slate-200 shadow-xl p-5 sm:p-6 space-y-6 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
            <Calculator className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 leading-tight">Loan EMI Calculator</h3>
            <span className="text-[11px] text-slate-500 font-medium">Real-Time Estimator</span>
          </div>
        </div>

        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
          <ShieldCheck className="w-3 h-3 text-emerald-600" />
          <span>Zero Advance Fees</span>
        </span>
      </div>

      {/* Slider 1: Loan Amount */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <label htmlFor={amountId} className="font-semibold text-slate-600">
            Loan Amount
          </label>
          <span className="text-sm font-black text-slate-900">
            ₹{loanAmount.toLocaleString("en-IN")}
          </span>
        </div>
        <input
          id={amountId}
          type="range"
          min={5000}
          max={60000}
          step={1000}
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div className="flex justify-between text-[10px] text-slate-400 font-medium">
          <span>₹5,000</span>
          <span>₹30,000</span>
          <span>₹60,000</span>
        </div>
      </div>

      {/* Slider 2: Tenure (Months) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <label htmlFor={tenureId} className="font-semibold text-slate-600">
            Repayment Tenure
          </label>
          <span className="text-sm font-black text-slate-900">
            {tenureMonths} Months
          </span>
        </div>
        <input
          id={tenureId}
          type="range"
          min={3}
          max={36}
          step={1}
          value={tenureMonths}
          onChange={(e) => setTenureMonths(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div className="flex justify-between text-[10px] text-slate-400 font-medium">
          <span>3 Months</span>
          <span>12 Months</span>
          <span>36 Months</span>
        </div>
      </div>

      {/* Slider 3: Interest Rate (% p.a.) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <label htmlFor={rateId} className="font-semibold text-slate-600">
            Interest Rate (% p.a.)
          </label>
          <span className="text-sm font-black text-slate-900">
            {interestRate}% p.a.
          </span>
        </div>
        <input
          id={rateId}
          type="range"
          min={1}
          max={36}
          step={0.5}
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div className="flex justify-between text-[10px] text-slate-400 font-medium">
          <span>1% p.a.</span>
          <span>18% p.a.</span>
          <span>36% p.a.</span>
        </div>
      </div>

      {/* Real-Time Output Breakdown Card */}
      <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-3">
        <div className="flex items-baseline justify-between">
          <span className="text-xs font-semibold text-slate-600">Estimated Monthly EMI:</span>
          <span className="text-xl sm:text-2xl font-black text-blue-600">
            ₹{emi.toLocaleString("en-IN")}<span className="text-xs font-semibold text-slate-500">/mo</span>
          </span>
        </div>

        <div className="pt-2 border-t border-slate-200 grid grid-cols-2 gap-2 text-xs">
          <div>
            <span className="text-[11px] text-slate-500 block">Total Interest:</span>
            <span className="font-bold text-slate-800">₹{totalInterest.toLocaleString("en-IN")}</span>
          </div>
          <div className="text-right">
            <span className="text-[11px] text-slate-500 block">Total Payable:</span>
            <span className="font-bold text-slate-900">₹{totalPayable.toLocaleString("en-IN")}</span>
          </div>
        </div>

        {/* Visual Bar Ratio */}
        <div className="space-y-1 pt-1">
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden flex">
            <div style={{ width: `${principalPercent}%` }} className="h-full bg-blue-600" />
            <div style={{ width: `${interestPercent}%` }} className="h-full bg-amber-500" />
          </div>
          <div className="flex justify-between text-[10px] text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
              Principal ({principalPercent}%)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
              Interest ({interestPercent}%)
            </span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button
        type="button"
        onClick={handleApply}
        className="w-full min-h-[46px] px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
      >
        <span>Apply Now</span>
        <ArrowRight className="w-4 h-4 text-white" />
      </button>

      <p className="text-[10px] text-center text-slate-400 leading-tight">
        *Indicative estimate. Final rates &amp; charges are governed by our RBI-regulated NBFC partner and confirmed via KFS.
      </p>
    </div>
  );
}
