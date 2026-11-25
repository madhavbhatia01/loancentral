"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Building2,
  FileText,
  Calendar,
  Banknote,
  Sparkles,
  AlertCircle,
  Scale,
  FileCheck,
  Lock,
  ChevronDown,
  Info,
  ExternalLink,
  Smartphone,
  HeartHandshake,
  GraduationCap,
  Home,
  Briefcase,
  Users,
} from "lucide-react";
import RepaymentEstimator from "./RepaymentEstimator";
import EMICalculator from "./EMICalculator";

export interface WomenLoanPageProps {
  cityName: string;
  stateName: string;
  landmark?: string;
  heroImageSrc?: string;
  highlights?: string[];
  popularSectors?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  onApplyClick?: () => void;
}

export default function WomenLoanPage({
  cityName,
  stateName,
  landmark,
  heroImageSrc = "/images/women-hero-hub.webp",
  highlights = [],
  popularSectors = [],
  faqs = [],
  onApplyClick,
}: WomenLoanPageProps) {
  const activeLandmark = landmark || cityName;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleApplyRedirect = () => {
    window.location.href = `https://apply.credit91.com?utm_source=loancentral&utm_medium=website&utm_campaign=women_${encodeURIComponent(cityName.toLowerCase().replace(/\s+/g, "_"))}`;
  };

  const defaultHighlights = [
    "Strictly salaried women professionals with minimum ₹30,000 net monthly salary",
    "Loans from ₹10,000 to ₹60,000 with 100% paperless digital verification",
    "Single bullet repayment in 7 to 50 days scheduled on your salary credit date",
    "Exclusive lending partner Credit 91 (direct bank disbursal, zero advance fees)",
    "Strict borrower consent architecture — no contact scraping, no telemarketing calls",
  ];

  const activeHighlights = highlights.length > 0 ? highlights : defaultHighlights;

  const defaultSectors = [
    "Information Technology & SaaS Corridors",
    "Banking, Financial Services & FinTech",
    "Healthcare, Biotech & Diagnostics",
    "Consulting, Corporate HR & Legal Advisory",
    "Media, Advertising, E-commerce & EdTech",
  ];

  const activeSectors = popularSectors.length > 0 ? popularSectors : defaultSectors;

  const defaultFaqs = [
    {
      question: `Who is eligible for a personal loan for women in ${cityName}?`,
      answer: `Salaried women professionals residing and working in ${cityName} with a minimum net monthly salary of ₹30,000 credited directly into an active Indian bank account by their employer are eligible. Applicants must have valid Aadhaar and PAN for paperless e-KYC verification.`,
    },
    {
      question: `What loan amounts are available and what is the repayment period?`,
      answer: `Eligible salaried women can access credit limits from ₹10,000 up to ₹60,000. Repayment is structured as a transparent single bullet settlement scheduled on your upcoming salary credit date, with flexible tenures ranging from a minimum of 7 days up to 40–50 days.`,
    },
    {
      question: `How does single bullet settlement work compared to regular multi-month EMIs?`,
      answer: `Rather than locking you into multi-month compounding commitments with ongoing monthly deductions, this salary cycle product enables you to clear the borrowed principal and transparent charges in one single bullet payment when your salary arrives. You can also explore monthly EMI options using our interactive calculator.`,
    },
    {
      question: `Are there any upfront charges or hidden registration fees?`,
      answer: `No. LoanCentral and lending partner Credit 91 charge zero advance fees, zero registration charges, and zero upfront processing deposits. All interest rates (APR) and processing fees are fully disclosed in the Key Fact Statement (KFS) before you review and sign.`,
    },
    {
      question: `Does LoanCentral ensure data privacy and confidential processing?`,
      answer: `Yes. In strict compliance with RBI Digital Lending Guidelines, we operate on a consent-first framework. We do not access phone contacts, photo galleries, or private storage. Your application is verified securely via DigiLocker.`,
    },
    {
      question: `Who disburses the funds and manages the lending contract?`,
      answer: `LoanCentral acts strictly as a digital Lending Service Provider (LSP). All underwriting checks, loan approvals, interest assessments, and direct fund transfers are executed exclusively by regulated lending partner Credit 91 (apply.credit91.com).`,
    },
  ];

  const activeFaqs = faqs.length > 0 ? faqs : defaultFaqs;

  const womenCityLinks = [
    { name: "Delhi NCR", href: "/personal-loan-for-women-in-delhi" },
    { name: "Mumbai", href: "/personal-loan-for-women-in-mumbai" },
    { name: "Bangalore", href: "/personal-loan-for-women-in-bangalore" },
    { name: "Hyderabad", href: "/personal-loan-for-women-in-hyderabad" },
    { name: "Pune", href: "/personal-loan-for-women-in-pune" },
    { name: "All India Hub", href: "/personal-loan-for-women" },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-slate-50 text-slate-900" style={{ backgroundColor: "#f8fafc" }}>
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>{cityName}, {stateName}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Salaried Women Special · Partner Credit 91</span>
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-slate-900">
                Personal Loan for Women in{" "}
                <span className="text-blue-600">
                  {cityName}.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                Transparent personal credit for salaried women professionals from ₹10,000 to ₹60,000. Single bullet repayment in 7 to 50 days aligned with your salary schedule. Zero advance fees through lending partner Credit 91.
              </p>

              {/* Hero Image Card */}
              <div className="space-y-2 pt-1">
                <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-md aspect-[16/9] bg-white group">
                  <Image
                    src={heroImageSrc}
                    alt={`Salaried woman professional in ${cityName} near ${activeLandmark} with LoanCentral verified loan status`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 650px"
                    className="object-cover object-center transform transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  {/* Status Overlay Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl px-3 py-1.5 shadow-md flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                    </span>
                    <span className="text-[11px] font-bold text-slate-800">Documents Verified</span>
                  </div>
                </div>

                {/* Sub-caption Pill */}
                <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-xs text-slate-600 text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Direct Bank Disbursal via Credit 91</span>
                  </div>
                  <div className="text-slate-400 font-medium text-[11px] hidden sm:block">
                    DigiLocker Verified · Single Bullet
                  </div>
                </div>
              </div>

              {/* 4 Feature Badges (2x2) */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                    <Banknote className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">₹10K – ₹60K</div>
                    <div className="text-xs text-slate-500 font-medium">Loan range</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">7 to 50 Days</div>
                    <div className="text-xs text-slate-500 font-medium">Flexible tenure</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Single Bullet</div>
                    <div className="text-xs text-slate-500 font-medium">One-time settlement</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Credit 91</div>
                    <div className="text-xs text-slate-500 font-medium">Direct disbursal</div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={handleApplyRedirect}
                  className="min-h-[48px] px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-black text-sm sm:text-base shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <span>Apply for Women's Loan in {cityName}</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

                <a
                  href="#calculator"
                  className="min-h-[48px] px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-sm shadow-xs transition-colors flex items-center justify-center"
                >
                  Calculate EMI / Cost
                </a>
              </div>

            </div>

            {/* Right Column: Desktop Estimator */}
            <div className="hidden lg:block lg:col-span-5 sticky top-24">
              <div className="rounded-3xl bg-white border border-slate-200 shadow-lg p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-bold text-slate-700">Quick Estimate</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    Zero Advance Fees
                  </span>
                </div>
                <RepaymentEstimator onApplyClick={onApplyClick} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Key Highlights for Working Women */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <HeartHandshake className="w-3.5 h-3.5 text-blue-600" />
              <span>Tailored for Working Women</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Why Salaried Women in {cityName} Choose LoanCentral
            </h2>
            <p className="text-sm text-slate-600">
              Designed for financial empowerment, rapid salary-cycle buffers, and 100% digital confidentiality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Career &amp; Skill Development</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fund executive certificates, cloud courses, tech workshops, or licensing fees without dipping into long-term personal savings.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Home className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Rental &amp; Relocation Buffer</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Relocating closer to major IT parks or corporate business parks in {cityName}? Bridge brokerage deposits and lease advance payments seamlessly.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Urgent Personal &amp; Medical Needs</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Handle unforeseen clinical bills, family wellness requirements, or urgent household repairs before your salary credit date arrives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Representative Loan Examples Table (Strictly ₹30,000 and ₹35,000 included) */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-700 text-xs font-bold">
              <Scale className="w-3.5 h-3.5 text-slate-600" />
              <span>Full Pricing Transparency</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Representative Single Bullet Repayment Examples
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear calculation examples for representative salary loans of ₹30,000 and ₹35,000.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-2xl border border-slate-200 shadow-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/60 text-slate-800 text-xs font-bold">
                  <th className="p-3.5 sm:p-4">Representative Loan</th>
                  <th className="p-3.5 sm:p-4">Eligible Min. Salary</th>
                  <th className="p-3.5 sm:p-4">Repayment Tenure</th>
                  <th className="p-3.5 sm:p-4">Repayment Type</th>
                  <th className="p-3.5 sm:p-4">Typical Interest / Charges</th>
                  <th className="p-3.5 sm:p-4">Disbursal Partner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">₹30,000 Loan</td>
                  <td className="p-3.5 sm:p-4">₹30,000 net monthly</td>
                  <td className="p-3.5 sm:p-4">30 to 40 Days</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-blue-600">Single Bullet</td>
                  <td className="p-3.5 sm:p-4">Disclosed upfront in KFS (18% - 36% p.a.)</td>
                  <td className="p-3.5 sm:p-4 font-medium text-emerald-600">Credit 91</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">₹35,000 Loan</td>
                  <td className="p-3.5 sm:p-4">₹35,000 net monthly</td>
                  <td className="p-3.5 sm:p-4">35 to 50 Days</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-blue-600">Single Bullet</td>
                  <td className="p-3.5 sm:p-4">Disclosed upfront in KFS (18% - 36% p.a.)</td>
                  <td className="p-3.5 sm:p-4 font-medium text-emerald-600">Credit 91</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">₹50,000 Loan</td>
                  <td className="p-3.5 sm:p-4">₹45,000+ net monthly</td>
                  <td className="p-3.5 sm:p-4">40 to 50 Days</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-blue-600">Single Bullet</td>
                  <td className="p-3.5 sm:p-4">Disclosed upfront in KFS (18% - 36% p.a.)</td>
                  <td className="p-3.5 sm:p-4 font-medium text-emerald-600">Credit 91</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Interactive EMI Calculator Component */}
      <EMICalculator onApplyClick={onApplyClick} className="bg-white" />

      {/* 5. Eligibility Criteria */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <FileCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Mandatory Criteria</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Eligibility for Salaried Women
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 text-sm block">Salaried Employment</span>
                <span className="text-xs text-slate-600">Must be currently employed with salary credited to a recognized bank account.</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 text-sm block">Minimum ₹30,000 Salary</span>
                <span className="text-xs text-slate-600">Net monthly bank credit of at least ₹30,000 is strictly required.</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 text-sm block">Digital KYC Verification</span>
                <span className="text-xs text-slate-600">Aadhaar linked with mobile number for instant paperless DigiLocker e-KYC.</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 text-sm block">Active Bank Account</span>
                <span className="text-xs text-slate-600">Indian commercial bank account with active NetBanking or debit card for e-mandate.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Popular Employment Sectors */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Top Corporate Corridors &amp; Sectors in {cityName}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Women employees across these key industries frequently access our platform:
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {activeSectors.map((sector, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold shadow-xs flex items-center gap-2"
              >
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>{sector}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs Section */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear answers regarding personal loans for salaried women in {cityName}.
            </p>
          </div>

          <div className="space-y-3">
            {activeFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Regional City Navigation Grid */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-center space-y-1">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Explore Women's Personal Loans by City
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {womenCityLinks.map((city, idx) => (
              <Link
                key={idx}
                href={city.href}
                className="px-3.5 py-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 text-xs font-semibold transition-colors shadow-2xs"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LSP Regulatory Notice */}
      <section className="py-8 bg-slate-50 text-[11px] text-slate-500 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-start gap-2.5">
            <Info className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Lending Service Provider (LSP) Disclosure:</strong> LoanCentral Technologies operates strictly as a digital Lending Service Provider (LSP) under the Reserve Bank of India Digital Lending Guidelines. LoanCentral is not a bank or Non-Banking Financial Company (NBFC) and does not directly disburse loans or extend credit. All loan underwriting, interest rate determinations (typically 18% to 36% APR), processing fees, and disbursals are executed exclusively by regulated lending partner Credit 91 (apply.credit91.com). Zero advance fees are ever requested by LoanCentral.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Mobile Sticky Apply Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-xl flex items-center justify-between gap-3">
        <div>
          <span className="text-[11px] text-slate-500 block leading-tight">₹10K – ₹60K Credit</span>
          <span className="text-xs font-bold text-slate-900 block leading-tight">Salaried Women</span>
        </div>
        <button
          type="button"
          onClick={handleApplyRedirect}
          className="min-h-[44px] px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-1.5"
        >
          <span>Apply Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}
