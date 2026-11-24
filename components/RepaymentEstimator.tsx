"use client";

import React, { useState } from "react";
import { ArrowRight, ShieldCheck, Calendar, Wallet, Check, AlertCircle } from "lucide-react";

interface RepaymentEstimatorProps {
  onApplyClick?: (details?: { amount: number; days: number }) => void;
  className?: string;
  isCompact?: boolean;
}

export default function RepaymentEstimator({
  onApplyClick,
  className = "",
  isCompact = false,
}: RepaymentEstimatorProps) {
  const [amount, setAmount] = useState<number>(30000);
  const [days, setDays] = useState<7 | 14 | 30 | 40 | 50>(30);
  const [manualInput, setManualInput] = useState<string>("30,000");
  const [inputError, setInputError] = useState<string | null>(null);

  const minAmount = 10000;
  const maxAmount = 60000;
  const step = 1000;

  // Handle slider changes
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setAmount(val);
    setManualInput(val.toLocaleString("en-IN"));
    setInputError(null);
  };

  // Handle manual input text changes
  const handleManualInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/[^0-9]/g, "");
    setManualInput(rawVal ? Number(rawVal).toLocaleString("en-IN") : "");

    if (!rawVal) {
      setInputError("Enter an amount between ₹10,000 and ₹60,000");
      return;
    }

    const numericVal = parseInt(rawVal, 10);
    if (numericVal < minAmount) {
      setInputError("Minimum loan amount is ₹10,000");
    } else if (numericVal > maxAmount) {
      setInputError("Maximum loan amount is ₹60,000");
    } else {
      setInputError(null);
      setAmount(numericVal);
    }
  };

  const handleManualInputBlur = () => {
    const numericVal = parseInt(manualInput.replace(/[^0-9]/g, "") || "0", 10);
    if (isNaN(numericVal) || numericVal < minAmount) {
      setAmount(minAmount);
      setManualInput(minAmount.toLocaleString("en-IN"));
      setInputError(null);
    } else if (numericVal > maxAmount) {
      setAmount(maxAmount);
      setManualInput(maxAmount.toLocaleString("en-IN"));
      setInputError(null);
    } else {
      const rounded = Math.round(numericVal / step) * step;
      setAmount(rounded);
      setManualInput(rounded.toLocaleString("en-IN"));
      setInputError(null);
    }
  };

  const handleApply = () => {
    if (onApplyClick) {
      onApplyClick({ amount, days });
    } else {
      window.location.href = `https://apply.credit91.com?amount=${amount}&tenure=${days}`;
    }
  };

  return (
    <div
      id="calculator"
      className={`relative w-full rounded-2xl sm:rounded-3xl border hm-border-rule hm-bg-card shadow-xl transition-colors p-5 sm:p-6 md:p-7 hm-text-ink ${className}`}
      aria-labelledby="calculator-heading"
    >
      {/* 1. Calculator Title & Badge */}
      <div className="flex items-start justify-between gap-3 border-b hm-border-rule pb-4 mb-5">
        <div>
          <span className="text-[11px] font-black hm-text-blue block">
            Salary Aligned Credit
          </span>
          <h2 id="calculator-heading" className="text-lg sm:text-xl font-black hm-text-ink leading-snug">
            EMI &amp; Repayment Calculator
          </h2>
          <p className="text-xs hm-text-muted mt-0.5 leading-relaxed">
            Select your loan requirement and choose a tenure aligned with your next salary date.
          </p>
        </div>

        <span className="flex-shrink-0 px-2.5 py-1 rounded-full hm-bg-pear-soft border hm-border-pear text-[11px] font-bold hm-text-coral">
          Salaried Only
        </span>
      </div>

      <div className="space-y-5">
        {/* 3. Loan Amount Label and Formatted Value */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs font-bold hm-text-ink-soft">
            <label htmlFor="amount-slider" className="flex items-center gap-1.5 cursor-pointer">
              <Wallet className="w-4 h-4 hm-text-blue" />
              <span>Loan Amount</span>
            </label>
            <div className="flex items-center gap-1">
              <span className="hm-text-muted font-medium">₹</span>
              <span className="text-base sm:text-lg font-black hm-text-blue">
                {amount.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          {/* 4. Amount Slider */}
          <div className="relative pt-1 pb-1">
            <input
              id="amount-slider"
              type="range"
              min={minAmount}
              max={maxAmount}
              step={step}
              value={amount}
              onChange={handleSliderChange}
              aria-valuemin={minAmount}
              aria-valuemax={maxAmount}
              aria-valuenow={amount}
              aria-label="Select loan amount between ₹10,000 and ₹60,000"
              className="w-full h-3 sm:h-3.5 hm-bg-paper-deep rounded-lg appearance-none cursor-pointer hm-accent-blue focus:outline-none focus-visible:ring-2 hm-focus transition-colors touch-none"
            />
          </div>

          {/* 5. Minimum and Maximum Labels */}
          <div className="flex justify-between items-center text-[11px] font-semibold hm-text-muted">
            <span>Min ₹10,000</span>
            <span className="hm-text-muted">|</span>
            <span>Max ₹60,000</span>
          </div>

          {/* 6. Synchronized Numeric Amount Field */}
          <div className="pt-1">
            <div className="flex items-center justify-between gap-2 p-2 rounded-xl hm-bg-paper-soft border hm-border-rule hm-focus-within-border focus-within:ring-1 hm-focus transition-colors">
              <span className="text-xs font-semibold hm-text-muted pl-2">
                Custom Entry:
              </span>
              <div className="flex items-center gap-1 pr-1">
                <span className="text-xs font-bold hm-text-muted">₹</span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={manualInput}
                  onChange={handleManualInputChange}
                  onBlur={handleManualInputBlur}
                  aria-label="Enter exact loan amount"
                  className="w-24 sm:w-28 text-right bg-transparent text-sm font-black hm-text-ink focus:outline-none"
                />
              </div>
            </div>
            {inputError && (
              <p className="flex items-center gap-1 text-[11px] hm-text-coral font-medium mt-1">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{inputError}</span>
              </p>
            )}
          </div>
        </div>

        {/* 7. Repayment-period Label */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold hm-text-ink-soft">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 hm-text-blue" />
              <span>Repayment Tenure</span>
            </span>
            <span className="text-xs font-bold hm-text-blue">
              {days} Days (Single Repayment)
            </span>
          </div>

          {/* 8. Flexible Tenure Segmented Controls (Min 7 days up to 40-50 days) */}
          <div
            role="radiogroup"
            aria-label="Choose repayment period"
            className="grid grid-cols-5 gap-1.5 sm:gap-2"
          >
            {([7, 14, 30, 40, 50] as const).map((dayOption) => {
              const isSelected = days === dayOption;
              return (
                <button
                  key={dayOption}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  aria-pressed={isSelected}
                  onClick={() => setDays(dayOption)}
                  className={`min-h-[44px] py-2 px-1 rounded-xl text-xs sm:text-sm font-bold flex flex-col items-center justify-center transition-colors ${
                    isSelected
                      ? "hm-primary hm-text-paper shadow-md hm-shadow-primary ring-2 hm-focus ring-offset-1"
                      : "hm-bg-paper-deep hm-hover-paper-deep hm-text-ink-soft border hm-border-rule active:scale-95"
                  }`}
                >
                  <span className="text-xs sm:text-base leading-none font-black">
                    {dayOption}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-medium opacity-90 mt-0.5">
                    Days
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 9. Selected-product Summary (Compact, Never amortization / EMI) */}
        <div className="p-3.5 sm:p-4 rounded-xl hm-bg-paper-soft border hm-border-rule space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold hm-text-ink-soft">
            <span>Selected Amount</span>
            <span className="font-bold hm-text-ink">₹{amount.toLocaleString("en-IN")}</span>
          </div>
          <div className="flex items-center justify-between text-xs font-semibold hm-text-ink-soft">
            <span>Repayment Term</span>
            <span className="font-bold hm-text-ink">{days} Days</span>
          </div>
          <div className="flex items-center justify-between text-xs font-semibold hm-text-ink-soft">
            <span>Repayment Structure</span>
            <span className="font-bold hm-text-blue flex items-center gap-1">
              <Check className="w-3.5 h-3.5 hm-text-blue" />
              Single Bullet Settlement
            </span>
          </div>
        </div>

        {/* 10. Pricing Disclosure (Strictly compliant with spec) */}
        <div className="p-3 rounded-xl hm-bg-blue-soft border hm-border-blue text-[11px] hm-text-blue leading-relaxed font-medium flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 hm-text-blue flex-shrink-0 mt-0.5" />
          <p>
            Your final charges and total repayment will be shown before you accept an offer.
          </p>
        </div>

        {/* 11. Apply CTA (Full width, min 48px height, Royal Blue with Amber Glow) */}
        <div>
          <button
            type="button"
            onClick={handleApply}
            className="w-full min-h-[48px] py-3.5 px-5 rounded-xl hm-primary hm-hover-primary active:scale-[0.99] hm-text-paper font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hm-shadow-primary transition-colors"
          >
            <span>Apply for ₹{amount.toLocaleString("en-IN")} ({days} Days)</span>
            <ArrowRight className="w-4 h-4 hm-text-coral" />
          </button>
        </div>

        {/* 12. Approval Disclaimer */}
        <p className="text-[10px] text-center hm-text-muted font-medium leading-relaxed">
          Application subject to verification and approval. LoanCentral operates as an LSP partnering exclusively with Credit 91.
        </p>
      </div>
    </div>
  );
}
