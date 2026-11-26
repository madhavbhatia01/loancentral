"use client";

import React, { useState, useMemo } from "react";
import { Calculator, IndianRupee, Percent, Calendar } from "lucide-react";
import { calculateEmi, formatIndianCurrency } from "@/src/lib/emi";

interface EmiCalculatorProps {
  onApplyClick?: () => void;
  className?: string;
}

export default function EmiCalculator({ className = "" }: EmiCalculatorProps) {
  const [amountStr, setAmountStr] = useState<string>("");
  const [rateStr, setRateStr] = useState<string>("");
  const [tenureStr, setTenureStr] = useState<string>("");
  const [tenureUnit, setTenureUnit] = useState<"months" | "years">("months");

  const parsedAmount = Number(amountStr);
  const parsedRate = Number(rateStr);
  const parsedTenure = Number(tenureStr);

  const tenureMonths =
    tenureUnit === "years" ? parsedTenure * 12 : parsedTenure;

  const result = useMemo(() => {
    if (!amountStr.trim() || !rateStr.trim() || !tenureStr.trim()) {
      return null;
    }
    return calculateEmi({
      principal: parsedAmount,
      annualRatePercent: parsedRate,
      tenureMonths,
    });
  }, [amountStr, rateStr, tenureStr, parsedAmount, parsedRate, tenureMonths]);

  const hasAnyInput =
    amountStr.trim().length > 0 ||
    rateStr.trim().length > 0 ||
    tenureStr.trim().length > 0;

  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const interestDash = result
    ? (result.interestPercent / 100) * circumference
    : 0;

  return (
    <section
      id="emi-calculator"
      aria-labelledby="emi-calc-heading"
      className={`rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 shadow-sm ${className}`.trim()}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h2
            id="emi-calc-heading"
            className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight"
          >
            EMI Loan Calculator
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Enter your own values to estimate monthly repayments.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Inputs */}
        <div className="lg:col-span-7 space-y-5">
          {/* Loan Amount */}
          <div>
            <label
              htmlFor="emi-amount"
              className="block text-sm font-bold text-slate-800 mb-1.5"
            >
              Loan Amount (INR)
            </label>
            <div className="relative">
              <IndianRupee className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="emi-amount"
                type="number"
                inputMode="numeric"
                min={1}
                value={amountStr}
                onChange={(e) => setAmountStr(e.target.value)}
                placeholder="Enter amount"
                className="w-full min-h-[46px] pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label
              htmlFor="emi-rate"
              className="block text-sm font-bold text-slate-800 mb-1.5"
            >
              Annual Interest Rate (% p.a.)
            </label>
            <div className="relative">
              <Percent className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="emi-rate"
                type="number"
                inputMode="decimal"
                min={0}
                step="0.1"
                value={rateStr}
                onChange={(e) => setRateStr(e.target.value)}
                placeholder="Enter annual interest rate"
                className="w-full min-h-[46px] pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Tenure with Months / Years Toggle */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="emi-tenure"
                className="block text-sm font-bold text-slate-800"
              >
                Loan Tenure
              </label>
              <div
                role="group"
                aria-label="Tenure unit"
                className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-0.5"
              >
                <button
                  type="button"
                  onClick={() => setTenureUnit("months")}
                  className={`min-h-[34px] px-3 py-1 rounded-md text-xs font-bold transition-colors ${
                    tenureUnit === "months"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Months
                </button>
                <button
                  type="button"
                  onClick={() => setTenureUnit("years")}
                  className={`min-h-[34px] px-3 py-1 rounded-md text-xs font-bold transition-colors ${
                    tenureUnit === "years"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Years
                </button>
              </div>
            </div>
            <div className="relative">
              <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="emi-tenure"
                type="number"
                inputMode="numeric"
                min={1}
                value={tenureStr}
                onChange={(e) => setTenureStr(e.target.value)}
                placeholder={
                  tenureUnit === "months"
                    ? "Enter tenure in months"
                    : "Enter tenure in years"
                }
                className="w-full min-h-[46px] pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Output / Empty State */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          {!result ? (
            <div className="py-8 text-center space-y-2">
              <p className="text-sm font-bold text-slate-800">
                {hasAnyInput
                  ? "Complete all three fields with valid positive numbers"
                  : "Your EMI breakdown will appear here"}
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Enter your loan amount, interest rate, and tenure to see your
                estimated monthly EMI, total interest, and total repayment.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                    Estimated Monthly EMI
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-slate-900">
                    {formatIndianCurrency(result.monthlyEmi)}
                  </span>
                </div>

                {/* Donut Breakdown Chart */}
                <svg
                  width="104"
                  height="104"
                  viewBox="0 0 104 104"
                  aria-label="Principal and interest breakdown chart"
                  className="flex-shrink-0 -rotate-90"
                >
                  <circle
                    cx="52"
                    cy="52"
                    r={radius}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="12"
                  />
                  <circle
                    cx="52"
                    cy="52"
                    r={radius}
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="12"
                    strokeDasharray={`${interestDash} ${circumference}`}
                  />
                </svg>
              </div>

              <div className="space-y-2.5 pt-3 border-t border-slate-200 text-sm">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-600">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    Principal Amount
                  </span>
                  <span className="font-bold text-slate-900">
                    {formatIndianCurrency(parsedAmount)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-600">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    Total Interest
                  </span>
                  <span className="font-bold text-slate-900">
                    {formatIndianCurrency(result.totalInterest)}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                  <span className="font-bold text-slate-800">Total Payment</span>
                  <span className="font-black text-slate-900">
                    {formatIndianCurrency(result.totalPayment)}
                  </span>
                </div>
              </div>
            </div>
          )}

          <p className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 leading-relaxed">
            This is only an estimate. Your lender&apos;s actual EMI may differ.
          </p>
        </div>
      </div>
    </section>
  );
}
