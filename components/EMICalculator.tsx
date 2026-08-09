"use client";

import React, { useState } from "react";
import { ShieldCheck, IndianRupee, HelpCircle, ArrowRight, Table } from "lucide-react";

interface EMICalculatorProps {
  onApplyClick: () => void;
}

export default function EMICalculator({ onApplyClick }: EMICalculatorProps) {
  const [loanAmount, setLoanAmount] = useState<number>(75000);
  const [tenureMonths, setTenureMonths] = useState<number>(12);
  const [annualInterest, setAnnualInterest] = useState<number>(18);
  const [showSchedule, setShowSchedule] = useState<boolean>(false);

  // EMI Calculation formula
  const monthlyRate = annualInterest / 12 / 100;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1)
  );

  const totalPayable = emi * tenureMonths;
  const totalInterest = totalPayable - loanAmount;

  // Generate monthly amortization schedule
  const generateSchedule = () => {
    let balance = loanAmount;
    const schedule = [];
    for (let month = 1; month <= tenureMonths; month++) {
      const interestForMonth = Math.round(balance * monthlyRate);
      const principalForMonth = emi - interestForMonth;
      balance = Math.max(0, balance - principalForMonth);

      schedule.push({
        month,
        emi,
        principal: principalForMonth,
        interest: interestForMonth,
        remainingBalance: balance,
      });
    }
    return schedule;
  };

  return (
    <section id="calculator" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text & Trust Cue */}
          <div className="lg:col-span-5 space-y-6">
            <span className="px-3.5 py-1 rounded-full bg-teal-100/80 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
              EMI preview &amp; Calculator
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] leading-tight">
              Make repayment math feel simple <br />
              <span className="text-[#00C9A7]">before users apply.</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              A modern lending platform should never hide behind vague promises or surprise charges. Our loan calculator uses standard reducing-balance calculations to show your exact monthly commitment upfront.
            </p>

            {/* Trust Cue Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-[#00C9A7] flex-shrink-0 mt-0.5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-xs">
                <strong className="text-slate-900 font-bold block text-sm">Transparent Cost Commitment</strong>
                <p className="text-slate-500 leading-relaxed">
                  Final loan offer, interest rate (APR), processing fees, and repayment schedules are shown in detail before you accept.
                </p>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={onApplyClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B192C] hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Apply with transparent rates</span>
                <ArrowRight className="w-4 h-4 text-[#00C9A7]" />
              </button>
            </div>
          </div>

          {/* Right Interactive Calculator Box */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            
            {/* Range Field 1: Loan Amount */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-slate-600">Required Loan Amount</span>
                <span className="text-lg font-bold text-[#0B192C] bg-slate-100 px-3 py-1 rounded-lg">
                  ₹ {loanAmount.toLocaleString("en-IN")}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="300000"
                step="5000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00C9A7]"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>₹ 10,000</span>
                <span>₹ 150,000</span>
                <span>₹ 300,000</span>
              </div>
            </div>

            {/* Range Field 2: Tenure */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-slate-600">Repayment Tenure</span>
                <span className="text-lg font-bold text-[#0B192C] bg-slate-100 px-3 py-1 rounded-lg">
                  {tenureMonths} Months
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="36"
                step="1"
                value={tenureMonths}
                onChange={(e) => setTenureMonths(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00B4D8]"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>3 Mo</span>
                <span>12 Mo</span>
                <span>24 Mo</span>
                <span>36 Mo</span>
              </div>
            </div>

            {/* Range Field 3: Interest Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-slate-600">Expected Annual Interest (APR)</span>
                <span className="text-lg font-bold text-[#0B192C] bg-slate-100 px-3 py-1 rounded-lg">
                  {annualInterest}% p.a.
                </span>
              </div>
              <input
                type="range"
                min="12"
                max="36"
                step="0.5"
                value={annualInterest}
                onChange={(e) => setAnnualInterest(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00C9A7]"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>12%</span>
                <span>24%</span>
                <span>36%</span>
              </div>
            </div>

            {/* Calculation Results Card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-slate-900 text-white">
              <div>
                <span className="text-[11px] text-slate-400 font-medium block">Monthly EMI</span>
                <strong className="text-2xl font-extrabold text-[#00C9A7]">
                  ₹ {emi.toLocaleString("en-IN")}
                </strong>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 font-medium block">Total Interest</span>
                <strong className="text-lg font-bold text-slate-200">
                  ₹ {totalInterest.toLocaleString("en-IN")}
                </strong>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 font-medium block">Total Amount Payable</span>
                <strong className="text-lg font-bold text-slate-200">
                  ₹ {totalPayable.toLocaleString("en-IN")}
                </strong>
              </div>
            </div>

            {/* Schedule Toggle Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowSchedule(!showSchedule)}
                className="w-full py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors"
              >
                <Table className="w-4 h-4 text-[#00C9A7]" />
                <span>{showSchedule ? "Hide Repayment Schedule" : "View Full Repayment Schedule Table"}</span>
              </button>
            </div>

            {/* Amortization Table */}
            {showSchedule && (
              <div className="overflow-x-auto max-h-60 rounded-xl border border-slate-200 animate-fadeIn">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-700 font-bold sticky top-0">
                    <tr>
                      <th className="p-2.5">Month</th>
                      <th className="p-2.5">EMI (₹)</th>
                      <th className="p-2.5">Principal (₹)</th>
                      <th className="p-2.5">Interest (₹)</th>
                      <th className="p-2.5">Balance (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {generateSchedule().map((row) => (
                      <tr key={row.month} className="hover:bg-slate-50">
                        <td className="p-2.5 font-semibold text-slate-900">{row.month}</td>
                        <td className="p-2.5 text-slate-700">{row.emi.toLocaleString("en-IN")}</td>
                        <td className="p-2.5 text-emerald-700 font-medium">{row.principal.toLocaleString("en-IN")}</td>
                        <td className="p-2.5 text-slate-500">{row.interest.toLocaleString("en-IN")}</td>
                        <td className="p-2.5 text-slate-900 font-semibold">{row.remainingBalance.toLocaleString("en-IN")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
