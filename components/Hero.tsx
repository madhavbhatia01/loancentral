"use client";

import React, { useState } from "react";
import { ArrowRight, ShieldCheck, Zap, Lock, Sparkles, CheckCircle2, IndianRupee } from "lucide-react";

interface HeroProps {
  onApplyClick: () => void;
}

export default function Hero({ onApplyClick }: HeroProps) {
  const [amount, setAmount] = useState(75000);
  const [months, setMonths] = useState(12);

  // Reducing balance EMI calculation (18% p.a.)
  const rate = 18 / 12 / 100;
  const emi = Math.round((amount * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1));

  return (
    <section className="relative overflow-hidden bg-[#0A1628] text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Glow background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#00C9A7]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#00B4D8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Headlines & Value Props */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00C9A7] text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Consent-First Digital Lending Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Instant personal loans. <br />
              <span className="bg-gradient-to-r from-[#00C9A7] via-[#00B4D8] to-teal-200 bg-clip-text text-transparent">
                Zero hidden costs.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Check eligibility, compare total costs, and accept loan offers from RBI-regulated NBFC partners in a phone-first journey.
            </p>

            {/* Quick Feature Checklist */}
            <div className="grid grid-cols-2 gap-3 pt-2 max-w-lg text-xs sm:text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00C9A7]" />
                <span>No credit pull without OTP</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00C9A7]" />
                <span>Transparent APR &amp; EMI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00C9A7]" />
                <span>0 upfront application fee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00C9A7]" />
                <span>Paperless 10-minute flow</span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                onClick={onApplyClick}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00C9A7] to-[#00B4D8] hover:opacity-95 rounded-xl shadow-lg shadow-[#00C9A7]/20 transition-all hover:scale-[1.02]"
              >
                <span>Check Your Offer</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="text-xs text-slate-400 font-medium">
                Regulated NBFC Origination
              </span>
            </div>

          </div>

          {/* Right Column: Fintech Live Calculator Widget */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 p-6 sm:p-7 rounded-3xl shadow-2xl backdrop-blur-xl space-y-6 relative">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">EMI Preview</span>
                  <h3 className="text-lg font-extrabold text-white">Instant Loan Estimator</h3>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#00C9A7]/10 text-[#00C9A7] text-[11px] font-bold border border-[#00C9A7]/20">
                  18% p.a. APR
                </span>
              </div>

              {/* Slider 1: Amount */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-slate-400">Loan Amount</span>
                  <span className="text-base font-bold text-[#00C9A7] bg-slate-800 px-3 py-1 rounded-lg">
                    ₹ {amount.toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="300000"
                  step="5000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00C9A7]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                  <span>₹10,000</span>
                  <span>₹1,50,000</span>
                  <span>₹3,00,000</span>
                </div>
              </div>

              {/* Slider 2: Tenure */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-slate-400">Repayment Tenure</span>
                  <span className="text-base font-bold text-white bg-slate-800 px-3 py-1 rounded-lg">
                    {months} Months
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="24"
                  step="1"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00B4D8]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                  <span>3 Mo</span>
                  <span>12 Mo</span>
                  <span>24 Mo</span>
                </div>
              </div>

              {/* Calculation Summary Box */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Monthly EMI</span>
                  <strong className="text-2xl font-black text-[#00C9A7]">
                    ₹ {emi.toLocaleString("en-IN")}
                  </strong>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Total Payable</span>
                  <strong className="text-lg font-bold text-slate-200">
                    ₹ {(emi * months).toLocaleString("en-IN")}
                  </strong>
                </div>
              </div>

              {/* CTA Inside Widget */}
              <button
                type="button"
                onClick={onApplyClick}
                className="w-full py-3.5 rounded-xl bg-[#00C9A7] hover:bg-[#00B4D8] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                Apply for ₹{amount.toLocaleString("en-IN")}
              </button>

              <div className="text-center text-[11px] text-slate-500">
                Consent-first verification. Final loan sanction subject to NBFC policy.
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
