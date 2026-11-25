"use client";

import React, { useState, useMemo } from "react";
import { Calculator } from "lucide-react";
import { calculateEmi, formatIndianCurrency } from "@/src/lib/emi";

export default function CityEmiCalculator() {
  const [parsedAmount, setParsedAmount] = useState(30000);
  const [parsedRate, setParsedRate] = useState(24);
  const [tenureMonths, setTenureMonths] = useState(12);

  const result = useMemo(() => {
    return calculateEmi({
      principal: parsedAmount,
      annualRatePercent: parsedRate,
      tenureMonths,
    });
  }, [parsedAmount, parsedRate, tenureMonths]);

  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const interestDash = result
    ? (result.interestPercent / 100) * circumference
    : 0;

  return (
    <section
      id="emi-calculator"
      aria-labelledby="emi-calc-heading"
      className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 shadow-sm"
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
            Move the sliders to estimate monthly repayments instantly.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 space-y-5">
          <div>
            <div className="flex items-center justify-between gap-3 mb-2">
              <label htmlFor="emi-amount" className="text-sm font-bold text-slate-800">Loan Amount</label>
              <strong className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm text-blue-700">{formatIndianCurrency(parsedAmount)}</strong>
            </div>
            <input id="emi-amount" type="range" min={10000} max={1000000} step={5000} value={parsedAmount} onChange={(e) => setParsedAmount(Number(e.target.value))} className="w-full h-2 accent-blue-600 cursor-pointer" />
            <div className="flex justify-between mt-1 text-[11px] text-slate-500"><span>₹10,000</span><span>₹10,00,000</span></div>
          </div>

          <div>
            <div className="flex items-center justify-between gap-3 mb-2">
              <label htmlFor="emi-rate" className="text-sm font-bold text-slate-800">Interest Rate</label>
              <strong className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm text-blue-700">{parsedRate.toFixed(1)}% p.a.</strong>
            </div>
            <input id="emi-rate" type="range" min={6} max={36} step={0.5} value={parsedRate} onChange={(e) => setParsedRate(Number(e.target.value))} className="w-full h-2 accent-blue-600 cursor-pointer" />
            <div className="flex justify-between mt-1 text-[11px] text-slate-500"><span>6%</span><span>36%</span></div>
          </div>

          <div>
            <div className="flex items-center justify-between gap-3 mb-2">
              <label htmlFor="emi-tenure" className="text-sm font-bold text-slate-800">Loan Tenure</label>
              <strong className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm text-blue-700">{tenureMonths} months</strong>
            </div>
            <input id="emi-tenure" type="range" min={3} max={60} step={1} value={tenureMonths} onChange={(e) => setTenureMonths(Number(e.target.value))} className="w-full h-2 accent-blue-600 cursor-pointer" />
            <div className="flex justify-between mt-1 text-[11px] text-slate-500"><span>3 months</span><span>60 months</span></div>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          {result && (
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
