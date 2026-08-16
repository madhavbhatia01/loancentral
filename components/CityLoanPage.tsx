"use client";

import React from "react";
import { MapPin, ShieldCheck, CheckCircle2, ArrowRight, Building2 } from "lucide-react";
import EMICalculator from "./EMICalculator";

interface CityLoanPageProps {
  cityName: string;
  stateName: string;
  highlights: string[];
  popularSectors: string[];
  avgApprovalTime: string;
  onApplyClick?: () => void;
}

export default function CityLoanPage({
  cityName,
  stateName,
  highlights,
  popularSectors,
  avgApprovalTime,
  onApplyClick = () => {},
}: CityLoanPageProps) {
  return (
    <div className="py-12 md:py-20 bg-slate-50 space-y-16">
      
      {/* City Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-950 via-[#0B192C] to-slate-900 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-teal-300 text-xs font-bold">
            <MapPin className="w-4 h-4 text-[#00C9A7]" />
            <span>Instant Personal Loans in {cityName}, {stateName}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight max-w-3xl">
            Quick, paperless personal loans for professionals in <span className="text-[#00C9A7]">{cityName}.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Apply online in {cityName} with zero hidden subscription fees, consent-first credit bureau checks, and clear upfront EMI schedules.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="https://apply.credit91.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00C9A7] to-[#00B4D8] text-slate-950 font-bold text-sm shadow-lg transition-transform hover:scale-[1.02]"
            >
              <span>Apply in {cityName}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <span className="text-xs text-slate-400 font-medium">
              Average decision time in {cityName}: <strong className="text-teal-300">{avgApprovalTime}</strong>
            </span>
          </div>
        </div>
      </section>

      {/* City Specific Highlights & Sectors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Key Highlights */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-[#0B192C] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#00C9A7]" />
              Why Borrowers in {cityName} Choose LoanCentral
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C9A7] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Employment Sectors */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-[#0B192C] flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#00B4D8]" />
              Top Employment Sectors Served in {cityName}
            </h2>
            <p className="text-xs text-slate-500">
              LoanCentral caters to salaried and self-employed professionals across major hubs in {cityName}:
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {popularSectors.map((sector, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Calculator */}
      <EMICalculator onApplyClick={onApplyClick} />

    </div>
  );
}
