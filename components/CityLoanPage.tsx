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
  BadgeCheck,
  Check,
} from "lucide-react";
import RepaymentEstimator from "./RepaymentEstimator";

export interface CityLoanPageProps {
  cityName: string;
  stateName: string;
  landmark?: string;
  heroImageSrc?: string;
  highlights: string[];
  popularSectors: string[];
  faqs?: Array<{ question: string; answer: string }>;
  avgApprovalTime?: string;
  onApplyClick?: () => void;
}

export default function CityLoanPage({
  cityName,
  stateName,
  landmark,
  heroImageSrc,
  highlights,
  popularSectors,
  faqs = [],
  avgApprovalTime,
  onApplyClick,
}: CityLoanPageProps) {
  const citySlug = cityName.toLowerCase().replace(/\s+/g, "-");
  const resolvedHeroSrc =
    heroImageSrc ||
    `/images/cities/${citySlug === "bangalore" ? "bengaluru" : citySlug}-hero.webp`;
  const activeLandmark = landmark || cityName;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleApplyRedirect = () => {
    const pagePath = window.location.pathname.replace(/^\/+|\/+$/g, "") || `personal-loan-in-${citySlug}`;
    const sourcePage = `${window.location.origin}/${pagePath}`;
    window.location.href = `https://apply.credit91.com/?utm_source=loancentral&utm_medium=website&utm_campaign=${encodeURIComponent(pagePath)}&utm_content=${encodeURIComponent(sourcePage)}`;
  };

  const defaultFaqs = [
    {
      question: `Can salaried professionals residing across ${cityName} and neighboring NCR districts apply?`,
      answer: `Yes. Salaried employees residing and working in ${cityName} and surrounding regional corporate corridors are eligible to apply, provided they hold a steady salaried position with monthly pay credited directly to a recognized Indian bank account.`,
    },
    {
      question: `What is the monthly salary requirement for applicants in ${cityName}?`,
      answer: `Applicants require a minimum net monthly salary of ₹30,000 (strictly mandatory requirement) credited via direct bank transfer from an employer. Cash salaries or earnings below ₹30,000 are not eligible.`,
    },
    {
      question: `Does LoanCentral guarantee loan approval or pre-determined disbursal?`,
      answer: `No. Approval is never guaranteed. LoanCentral operates as a digital Lending Service Provider (LSP). All credit assessments, underwriting evaluations, loan offers, annual percentage rates (APR), and disbursal decisions are made independently by lending partner Credit 91 following verification.`,
    },
    {
      question: `How does the single bullet settlement work over the 7 to 40-50 day tenure?`,
      answer: `Unlike multi-year compounding loan schedules with monthly deductions, this salaried product is structured as a single bullet settlement scheduled on or immediately following your salary credit date across flexible tenures from a minimum of 7 days up to 40–50 days. The principal plus applicable transparent charges are debited via automated e-mandate (e-NACH).`,
    },
    {
      question: `Who disburses the funds and who handles regulatory compliance?`,
      answer: `Funds are disbursed directly into your verified salary bank account by our lending partner Credit 91 (apply.credit91.com). LoanCentral strictly complies with the Reserve Bank of India Digital Lending Guidelines as an LSP.`,
    },
  ];

  const activeFaqs = faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <div className="w-full overflow-x-hidden hm-bg-paper-soft hm-text-ink ">
      
      {/* 1. Mobile-First App Hero Section */}
      <section className="relative overflow-hidden hm-no-gradient hm-no-gradient hm-no-gradient hm-no-gradient hm-text-ink pt-6 pb-12 sm:pt-10 sm:pb-18 lg:pt-14 lg:pb-20 border-b hm-border-rule">
        {/* Soft luminous ambient accents */}
        <div className="absolute top-0 right-1/4 w-72 sm:w-[500px] h-[300px] hm-primary rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 left-10 w-64 sm:w-[350px] h-[350px] hm-bg-coral rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left / Main Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              
              {/* Location Chip (Clean, No Credit 91 clutter) */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full hm-bg-blue-soft border hm-border-blue hm-text-blue text-xs font-bold shadow-xs">
                  <MapPin className="w-3.5 h-3.5 hm-text-blue" />
                  <span>{cityName}, {stateName}</span>
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-[clamp(2.0rem,7vw,3.25rem)] font-black tracking-tight leading-[1.14] hm-text-ink">
                Instant Personal Loans for Salaried in{" "}
                <span className="hm-text-blue">
                  {cityName}.
                </span>
              </h1>

              {/* Subtitle (Zero static figures, no Credit 91 clutter) */}
              <p className="hm-text-ink-soft text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl">
                Fast, paperless personal funds for urgent expenses, medical needs, and salary-cycle gaps in {cityName}. 100% digital e-KYC and zero advance fees.
              </p>

              {/* Clean, Unobstructed Hero Banner Image (No overlaid badges or text inside image) */}
              <div className="space-y-2.5 pt-1">
                <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border hm-border-rule shadow-lg aspect-[16/10] sm:aspect-[16/9] hm-bg-paper-deep group">
                  <Image
                    src={resolvedHeroSrc}
                    alt={`Salaried professional in ${cityName} near ${activeLandmark} with LoanCentral verified loan status`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 650px"
                    className="object-cover object-center transform transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Outer Translucent Verification Strip (Outside the image) */}
                <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/70 backdrop-blur-sm border border-slate-200/80 shadow-xs hm-text-ink-soft text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full hm-bg-mint animate-pulse" />
                    <span>100% Digital Verification · Direct Bank Disbursal</span>
                  </div>
                  <div className="hm-text-muted font-medium text-[11px] hidden sm:block">
                    {activeLandmark}, {cityName}
                  </div>
                </div>
              </div>

              {/* Primary App CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={handleApplyRedirect}
                  className="min-h-[48px] px-8 py-3.5 rounded-full hm-primary hm-hover-primary active:scale-[0.99] hm-text-paper font-black text-sm sm:text-base shadow-lg hm-shadow-primary transition-colors flex items-center justify-center gap-2"
                >
                  <span>Apply Online in {cityName}</span>
                  <ArrowRight className="w-4 h-4 hm-text-coral" />
                </button>

                <a
                  href="#calculator"
                  className="min-h-[48px] px-6 py-3.5 rounded-full hm-bg-card hm-hover-paper-soft border hm-border-rule hm-text-ink-soft font-bold text-sm shadow-xs transition-colors flex items-center justify-center"
                >
                  View Repayment Estimator
                </a>
              </div>

            </div>

            {/* Right Column (Desktop Sticky Estimator) */}
            <div className="hidden lg:block lg:col-span-5 sticky top-24">
              <div className="rounded-3xl hm-bg-card border hm-border-rule shadow-xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b hm-border-rule">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 hm-text-coral" />
                    <span className="text-xs font-bold hm-text-ink-soft">Instant Estimate</span>
                  </div>
                  <span className="text-[11px] font-semibold hm-text-mint hm-bg-mint-soft px-2.5 py-0.5 rounded-full">
                    Zero Advance Fees
                  </span>
                </div>
                <RepaymentEstimator onApplyClick={onApplyClick} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Scannable Marketing Overview */}
      <section className="py-6 sm:py-8 hm-bg-card border-b hm-border-rule">
        <ul className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Fast digital application from your phone",
            "Secure paperless verification journey",
            "Designed around salaried professionals",
            "Review clear terms before confirming",
            "Support for urgent personal expenses",
            "Simple repayment planning tools",
          ].map((point) => (
            <li key={point} className="rounded-xl hm-bg-paper-soft border hm-border-rule p-3 flex items-start gap-2.5 text-sm hm-text-ink-soft">
              <CheckCircle2 className="w-4 h-4 hm-text-mint shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Dedicated Information for Salaried Applicants */}
      <section className="py-10 sm:py-14 hm-bg-paper-soft border-b hm-border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold hm-text-blue block">
              Audience Eligibility
            </span>
            <h2 className="text-2xl sm:text-3xl font-black hm-text-ink tracking-tight">
              Designed Strictly for Salaried Employees in {cityName}
            </h2>
            <p className="hidden text-sm hm-text-ink-soft leading-relaxed">
              To ensure sustainable affordability and align repayments directly with payroll cycles, this personal credit facility is exclusively accessible to salaried professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            
            {/* Criteria Card */}
            <div className="p-5 sm:p-7 rounded-3xl hm-bg-card border hm-border-rule shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl hm-bg-blue-soft hm-text-blue">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold hm-text-ink">Salaried Eligibility Benchmark</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm hm-text-ink-soft">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 hm-text-mint flex-shrink-0 mt-0.5" />
                  <span><strong>Net Monthly Salary:</strong> Minimum ₹30,000 net monthly salary (strictly mandatory requirement), credited directly into an active bank account. Earnings below ₹30,000 are not eligible.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 hm-text-mint flex-shrink-0 mt-0.5" />
                  <span><strong>Age Bracket:</strong> 21 to 55 years of age at the time of application submission.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 hm-text-mint flex-shrink-0 mt-0.5" />
                  <span><strong>Employment Stability:</strong> Continuous salaried employment with valid salary credit history visible over the preceding 3 to 6 months.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 hm-text-mint flex-shrink-0 mt-0.5" />
                  <span><strong>KYC Verification:</strong> Active Aadhaar linked with mobile OTP for paperless DigiLocker e-KYC.</span>
                </li>
              </ul>
            </div>

            {/* Employment Sectors Card */}
            <div className="p-5 sm:p-7 rounded-3xl hm-bg-card border hm-border-rule shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl hm-bg-pear-soft hm-text-coral">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold hm-text-ink">Key Employment Clusters in {cityName}</h3>
              </div>
              <p className="text-xs hm-text-muted">
                LoanCentral assists salaried professionals across major employment hubs, commercial districts, and public departments in and around {cityName}:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {popularSectors.map((sector, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl hm-bg-paper-deep border hm-border-rule hm-text-ink-soft text-xs font-semibold"
                  >
                    {sector}
                  </span>
                ))}
              </div>
              <p className="text-[11px] hm-text-muted italic pt-1">
                Note: Freelancers, business proprietors, and self-employed individuals are not eligible for this salaried product.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Representative Examples for INR 30,000 and INR 35,000 */}
      <section className="hidden py-10 sm:py-14 hm-bg-card border-b hm-border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold hm-text-blue block">
              Transparent Calculations
            </span>
            <h2 className="text-2xl sm:text-3xl font-black hm-text-ink tracking-tight">
              Representative Cost Examples: ₹30,000 and ₹35,000 Borrowing
            </h2>
            <p className="text-sm hm-text-ink-soft leading-relaxed">
              We believe in upfront transparency. Below are realistic, illustrative breakdowns demonstrating how single bullet repayments work over 40 and 50-day terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            
            {/* Example 1: ₹30,000 Loan */}
            <div className="p-5 sm:p-7 rounded-3xl hm-bg-paper-soft border hm-border-rule shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b hm-border-rule">
                <div>
                  <span className="text-[11px] font-bold hm-text-blue block">Scenario 1</span>
                  <h3 className="text-lg font-black hm-text-ink">₹30,000 Borrowed Amount</h3>
                </div>
                <span className="px-3 py-1 rounded-full hm-bg-blue-soft hm-text-blue text-xs font-black">
                  40-Day Tenure
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center hm-text-ink-soft">
                  <span>Loan Principal:</span>
                  <span className="font-bold hm-text-ink">₹30,000</span>
                </div>
                <div className="flex justify-between items-center hm-text-ink-soft">
                  <span>Repayment Tenure:</span>
                  <span className="font-bold hm-text-ink">40 Days (Single Bullet)</span>
                </div>
                <div className="flex justify-between items-center hm-text-ink-soft">
                  <span>Illustrative Processing Fee (2.5% + GST):</span>
                  <span className="font-bold hm-text-ink">₹885 (incl. 18% GST)</span>
                </div>
                <div className="flex justify-between items-center hm-text-ink-soft">
                  <span>Illustrative Interest Rate (APR 24% p.a.):</span>
                  <span className="font-bold hm-text-ink">~₹789 (for 40 days)</span>
                </div>
                <div className="pt-3 border-t hm-border-rule flex justify-between items-center text-sm sm:text-base font-black hm-text-ink">
                  <span>Total Repayment Amount:</span>
                  <span className="hm-text-blue">₹30,789</span>
                </div>
              </div>

              <div className="p-3 rounded-xl hm-bg-blue-soft border hm-border-blue text-[11px] hm-text-blue leading-relaxed font-medium">
                Settled in 1 single bullet payment on your scheduled salary date. No ongoing monthly deductions.
              </div>
            </div>

            {/* Example 2: ₹35,000 Loan */}
            <div className="p-5 sm:p-7 rounded-3xl hm-bg-paper-soft border hm-border-rule shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b hm-border-rule">
                <div>
                  <span className="text-[11px] font-bold hm-text-mint block">Scenario 2</span>
                  <h3 className="text-lg font-black hm-text-ink">₹35,000 Borrowed Amount</h3>
                </div>
                <span className="px-3 py-1 rounded-full hm-bg-mint-soft hm-text-mint text-xs font-black">
                  50-Day Tenure
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center hm-text-ink-soft">
                  <span>Loan Principal:</span>
                  <span className="font-bold hm-text-ink">₹35,000</span>
                </div>
                <div className="flex justify-between items-center hm-text-ink-soft">
                  <span>Repayment Tenure:</span>
                  <span className="font-bold hm-text-ink">50 Days (Single Bullet)</span>
                </div>
                <div className="flex justify-between items-center hm-text-ink-soft">
                  <span>Illustrative Processing Fee (2.5% + GST):</span>
                  <span className="font-bold hm-text-ink">₹1,033 (incl. 18% GST)</span>
                </div>
                <div className="flex justify-between items-center hm-text-ink-soft">
                  <span>Illustrative Interest Rate (APR 24% p.a.):</span>
                  <span className="font-bold hm-text-ink">~₹1,151 (for 50 days)</span>
                </div>
                <div className="pt-3 border-t hm-border-rule flex justify-between items-center text-sm sm:text-base font-black hm-text-ink">
                  <span>Total Repayment Amount:</span>
                  <span className="hm-text-mint">₹36,151</span>
                </div>
              </div>

              <div className="p-3 rounded-xl hm-bg-mint-soft border hm-border-mint text-[11px] hm-text-mint leading-relaxed font-medium">
                Settled in 1 single bullet payment on your scheduled salary date. No compounding multi-month locks.
              </div>
            </div>

          </div>

          <p className="text-xs hm-text-muted text-center max-w-3xl mx-auto leading-relaxed">
            * Disclaimer: The calculations above are purely illustrative. Actual APR (typically ranging between 18% and 36% per annum), processing fees, and repayment terms are determined by the regulated NBFC partner based on your individual underwriting evaluation and will be detailed clearly in your Key Fact Statement (KFS).
          </p>
        </div>
      </section>

      {/* 5. Documents Typically Required */}
      <section className="hidden py-10 sm:py-14 hm-bg-paper-soft border-b hm-border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold hm-text-blue block">
              Paperless Verification
            </span>
            <h2 className="text-2xl sm:text-3xl font-black hm-text-ink tracking-tight">
              Documents Required for {cityName} Applicants
            </h2>
            <p className="text-sm hm-text-ink-soft leading-relaxed">
              Zero physical paperwork or agent visits. All verifications are executed Digital paperlessly through secure government and banking APIs.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            
            <div className="p-4 sm:p-5 rounded-2xl hm-bg-card border hm-border-rule shadow-xs space-y-2.5">
              <div className="w-9 h-9 rounded-xl hm-bg-blue-soft hm-text-blue flex items-center justify-center">
                <FileCheck className="w-4 h-4" />
              </div>
              <h3 className="font-bold hm-text-ink text-sm sm:text-base">1. PAN Card</h3>
              <p className="text-xs hm-text-ink-soft leading-relaxed">
                Mandatory for identity verification and tax record compliance as prescribed under RBI Digital Lending Guidelines.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl hm-bg-card border hm-border-rule shadow-xs space-y-2.5">
              <div className="w-9 h-9 rounded-xl hm-bg-mint-soft hm-text-mint flex items-center justify-center">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="font-bold hm-text-ink text-sm sm:text-base">2. Aadhaar Card</h3>
              <p className="text-xs hm-text-ink-soft leading-relaxed">
                OTP-linked Aadhaar enables instantaneous DigiLocker e-KYC without uploading photocopies or physical scans.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl hm-bg-card border hm-border-rule shadow-xs space-y-2.5">
              <div className="w-9 h-9 rounded-xl hm-bg-blue-soft hm-text-blue flex items-center justify-center">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="font-bold hm-text-ink text-sm sm:text-base">3. Salary Statement</h3>
              <p className="text-xs hm-text-ink-soft leading-relaxed">
                Last 3 to 6 months bank statement showing regular net salary credits from your active employer.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl hm-bg-card border hm-border-rule shadow-xs space-y-2.5">
              <div className="w-9 h-9 rounded-xl hm-bg-pear-soft hm-text-coral flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
              <h3 className="font-bold hm-text-ink text-sm sm:text-base">4. Bank e-Mandate</h3>
              <p className="text-xs hm-text-ink-soft leading-relaxed">
                Netbanking or Debit Card authentication to establish auto-debit (e-NACH) for single repayment on your salary date.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Digital Application Steps */}
      <section className="hidden py-10 sm:py-14 hm-bg-card border-b hm-border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold hm-text-blue block">
              Application Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-black hm-text-ink tracking-tight">
              4-Step Digital Journey for {cityName} Salaried Borrowers
            </h2>
            <p className="text-sm hm-text-ink-soft leading-relaxed">
              Complete the digital application conveniently from your smartphone in four simple, transparent stages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            
            <div className="p-4 sm:p-5 rounded-2xl hm-bg-paper-soft border hm-border-rule shadow-xs space-y-2.5">
              <span className="w-7 h-7 rounded-full hm-primary hm-text-paper font-black text-xs flex items-center justify-center">
                1
              </span>
              <h3 className="font-bold hm-text-ink text-sm sm:text-base">Submit Basic Info</h3>
              <p className="text-xs hm-text-ink-soft leading-relaxed">
                Enter your mobile number, verify OTP, and share basic employment information including salary and employer name.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl hm-bg-paper-soft border hm-border-rule shadow-xs space-y-2.5">
              <span className="w-7 h-7 rounded-full hm-primary hm-text-paper font-black text-xs flex items-center justify-center">
                2
              </span>
              <h3 className="font-bold hm-text-ink text-sm sm:text-base">Complete e-KYC</h3>
              <p className="text-xs hm-text-ink-soft leading-relaxed">
                Authorize instant paperless Aadhaar e-KYC via DigiLocker and provide digital salary bank statement access.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl hm-bg-paper-soft border hm-border-rule shadow-xs space-y-2.5">
              <span className="w-7 h-7 rounded-full hm-primary hm-text-paper font-black text-xs flex items-center justify-center">
                3
              </span>
              <h3 className="font-bold hm-text-ink text-sm sm:text-base">Review Offer &amp; KFS</h3>
              <p className="text-xs hm-text-ink-soft leading-relaxed">
                Partner NBFC evaluates your profile and generates a Key Fact Statement (KFS) detailing total repayment and APR.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl hm-bg-paper-soft border hm-border-rule shadow-xs space-y-2.5">
              <span className="w-7 h-7 rounded-full hm-primary hm-text-paper font-black text-xs flex items-center justify-center">
                4
              </span>
              <h3 className="font-bold hm-text-ink text-sm sm:text-base">Direct Bank Disbursal</h3>
              <p className="text-xs hm-text-ink-soft leading-relaxed">
                Sign the digital agreement and e-mandate. Approved loan capital is disbursed directly into your verified salary account.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Repayment-Period and Total-Cost Guidance */}
      <section className="hidden py-10 sm:py-14 hm-bg-paper-soft border-b hm-border-rule">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full hm-bg-mint-soft hm-text-mint text-xs font-bold ">
            <Calendar className="w-3.5 h-3.5" />
            <span>Repayment Clarity</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black hm-text-ink tracking-tight">
            Why Single Bullet Settlement Protects Your Finances
          </h2>

          <div className="hm-text-ink-soft text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Traditional personal loans bind applicants to multi-year repayment terms where interest compounds over 12 to 36 months. For small, temporary cash-flow mismatches between ₹10,000 and ₹60,000, long multi-month repayment contracts frequently result in disproportionate interest costs and prolonged financial liability.
            </p>
            <p>
              LoanCentral's partner lending products utilize a <strong>single bullet settlement structure</strong> with flexible tenures from a <strong>minimum of 7 days up to 40–50 days</strong>. You borrow the required amount to resolve your urgent expenditure, and on your scheduled salary credit date, the entire balance is cleared in one single transaction.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl hm-bg-card border hm-border-rule shadow-xs space-y-1">
                <span className="text-xs font-bold hm-text-ink block">Zero Multi-Year Lock</span>
                <p className="text-xs hm-text-muted">Your obligation concludes entirely when your next salary arrives.</p>
              </div>
              <div className="p-4 rounded-2xl hm-bg-card border hm-border-rule shadow-xs space-y-1">
                <span className="text-xs font-bold hm-text-ink block">Transparent Total Cost</span>
                <p className="text-xs hm-text-muted">Exactly what you owe is stated clearly before you sign; no hidden compounding.</p>
              </div>
              <div className="p-4 rounded-2xl hm-bg-card border hm-border-rule shadow-xs space-y-1">
                <span className="text-xs font-bold hm-text-ink block">Zero Advance Fees</span>
                <p className="text-xs hm-text-muted">No registration, processing, or subscription charges are ever collected upfront.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. How to Compare Regulated Lending Offers */}
      <section className="hidden py-10 sm:py-14 hm-bg-card border-b hm-border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold hm-text-blue block">
              Borrower Protection
            </span>
            <h2 className="text-2xl sm:text-3xl font-black hm-text-ink tracking-tight">
              How to Evaluate and Compare Digital Lending Offers in {cityName}
            </h2>
            <p className="text-sm hm-text-ink-soft leading-relaxed">
              Always protect your financial interests by insisting on standard regulatory benchmarks before entering any credit agreement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            
            <div className="p-5 rounded-2xl hm-bg-paper-soft border hm-border-rule shadow-xs space-y-2.5">
              <div className="w-8 h-8 rounded-lg hm-bg-blue-soft hm-text-blue flex items-center justify-center font-bold text-sm">
                A
              </div>
              <h3 className="font-bold hm-text-ink text-sm sm:text-base">Examine the Key Fact Statement</h3>
              <p className="text-xs hm-text-ink-soft leading-relaxed">
                Under RBI rules, every regulated lender must provide a standardized Key Fact Statement (KFS) stating the exact loan amount, tenure, APR, and all fees before contract execution.
              </p>
            </div>

            <div className="p-5 rounded-2xl hm-bg-paper-soft border hm-border-rule shadow-xs space-y-2.5">
              <div className="w-8 h-8 rounded-lg hm-bg-mint-soft hm-text-mint flex items-center justify-center font-bold text-sm">
                B
              </div>
              <h3 className="font-bold hm-text-ink text-sm sm:text-base">Compare APR, Not Flat Rates</h3>
              <p className="text-xs hm-text-ink-soft leading-relaxed">
                Flat interest rates obscure the true cost of credit. Always compare the Annual Percentage Rate (APR), which incorporates interest, processing fees, and documentation expenses.
              </p>
            </div>

            <div className="p-5 rounded-2xl hm-bg-paper-soft border hm-border-rule shadow-xs space-y-2.5">
              <div className="w-8 h-8 rounded-lg hm-bg-pear-soft hm-text-coral flex items-center justify-center font-bold text-sm">
                C
              </div>
              <h3 className="font-bold hm-text-ink text-sm sm:text-base">Verify RBI NBFC Registration</h3>
              <p className="text-xs hm-text-ink-soft leading-relaxed">
                Ensure the lending entity holds an active Certificate of Registration from the Reserve Bank of India. Avoid unverified mobile apps demanding advance deposit fees.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Responsible Borrowing Checklist */}
      <section className="hidden py-10 sm:py-14 hm-bg-paper-soft border-b hm-border-rule">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full hm-bg-pear-soft hm-text-coral text-xs font-bold ">
            <Scale className="w-3.5 h-3.5" />
            <span>Responsible Borrowing</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black hm-text-ink tracking-tight">
            Responsible Borrowing Checklist for {cityName} Professionals
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            
            <div className="p-4 rounded-2xl hm-bg-card border hm-border-rule shadow-xs flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 hm-text-mint flex-shrink-0 mt-0.5" />
              <div className="text-xs hm-text-ink-soft leading-relaxed">
                <strong>Borrow Only What You Need:</strong> Limit your borrowed sum strictly to the emergency amount required until your upcoming salary credit.
              </div>
            </div>

            <div className="p-4 rounded-2xl hm-bg-card border hm-border-rule shadow-xs flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 hm-text-mint flex-shrink-0 mt-0.5" />
              <div className="text-xs hm-text-ink-soft leading-relaxed">
                <strong>Budget for Settlement:</strong> Verify that your upcoming salary easily accommodates the single repayment amount along with routine monthly living expenses.
              </div>
            </div>

            <div className="p-4 rounded-2xl hm-bg-card border hm-border-rule shadow-xs flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 hm-text-mint flex-shrink-0 mt-0.5" />
              <div className="text-xs hm-text-ink-soft leading-relaxed">
                <strong>Avoid Multiple Simultaneous Loans:</strong> Do not borrow from multiple digital apps concurrently, as stacking credit harms your credit assessment profile.
              </div>
            </div>

            <div className="p-4 rounded-2xl hm-bg-card border hm-border-rule shadow-xs flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 hm-text-mint flex-shrink-0 mt-0.5" />
              <div className="text-xs hm-text-ink-soft leading-relaxed">
                <strong>Ensure Sufficient Bank Balance:</strong> Keep sufficient balance on your scheduled salary settlement date to prevent auto-debit bounce fees.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. Interactive Repayment Estimator Section */}
      <section id="calculator" className="py-10 sm:py-16 hm-bg-card border-b hm-border-rule scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold hm-text-blue block">
              Calculate Your Terms
            </span>
            <h2 className="text-2xl sm:text-3xl font-black hm-text-ink tracking-tight">
              Interactive Repayment Estimator
            </h2>
            <p className="text-xs sm:text-sm hm-text-muted max-w-xl mx-auto">
              Simulate your personal credit requirements from ₹10,000 to ₹60,000 across tenures from 7 days up to 40–50 days.
            </p>
          </div>

          <div className="p-5 sm:p-7 rounded-3xl hm-bg-paper-soft border hm-border-rule shadow-sm">
            <RepaymentEstimator onApplyClick={onApplyClick} />
          </div>
        </div>
      </section>

      {/* 11. Frequently Asked Questions (City Relevant) */}
      <section className="py-10 sm:py-14 hm-bg-paper-soft border-b hm-border-rule">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold hm-text-blue block">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-black hm-text-ink tracking-tight">
              Frequently Asked Questions for {cityName} Applicants
            </h2>
            <p className="text-sm hm-text-ink-soft leading-relaxed">
              Find transparent answers to common inquiries regarding our digital lending assistance in {cityName}.
            </p>
          </div>

          <div className="space-y-3">
            {activeFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border hm-border-rule hm-bg-card overflow-hidden transition-colors shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold hm-text-ink text-sm sm:text-base hm-hover-paper-soft transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 hm-text-muted transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "transform rotate-180 hm-text-blue" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm hm-text-ink-soft leading-relaxed border-t hm-border-rule">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. Final LoanCentral CTA Section */}
      <section className="py-12 sm:py-16 hm-bg-pear-soft hm-text-ink border-t hm-border-rule text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full hm-bg-blue-soft border hm-border-blue text-xs font-bold hm-text-blue shadow-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>Digital Application for {cityName} Salaried Professionals</span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black hm-text-ink tracking-tight max-w-2xl mx-auto leading-snug">
            Need Quick Funds Before Your Next Salary?
          </h2>

          <p className="hm-text-ink-soft text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Apply online for ₹10,000 to ₹60,000. Paperless digital e-KYC, single bullet repayment aligned with your salary schedule, and zero hidden charges.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleApplyRedirect}
              className="min-h-[48px] w-full sm:w-auto px-8 py-3.5 rounded-full hm-primary hm-hover-primary active:scale-[0.99] hm-text-paper font-black text-sm sm:text-base shadow-xl hm-shadow-primary transition-colors flex items-center justify-center gap-2"
            >
              <span>Apply Online in {cityName}</span>
              <ArrowRight className="w-4 h-4 hm-text-coral" />
            </button>
          </div>

          <p className="text-[11px] hm-text-muted font-medium">
            Consent-first document submission · No telemarketing spam · Regulated NBFC partner disbursal
          </p>
        </div>
      </section>

      {/* 13. Regulatory LSP Disclosure Section (STRICT COMPLIANCE) */}
      <section
        className="py-8 bg-slate-50 text-slate-600 border-t border-slate-200 text-[11px] leading-relaxed"
        style={{ backgroundColor: "#f8fafc", color: "#475569" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-slate-800 font-bold">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Lending Service Provider (LSP) Mandatory Regulatory Notice</span>
            </div>
            <div className="text-slate-600 font-mono text-[10px]">
              Regulated Lending Partner: Credit 91 (apply.credit91.com)
            </div>
          </div>

          <p>
            LoanCentral Technologies operates strictly as a digital Lending Service Provider (LSP) pursuant to the regulatory framework issued by the Reserve Bank of India (RBI) under the Digital Lending Guidelines. LoanCentral is not a banking company or Non-Banking Financial Company (NBFC) and does not directly underwrite, approve, or disburse credit.
          </p>
          <p>
            All loan applications, credit limit assignments (₹10,000–₹60,000), single repayment tenures (minimum 7 days up to 40–50 days), annual percentage rates (APR typically 18%–36%), and approvals are governed exclusively by our lending partner Credit 91 based on underwriting verification, DigiLocker e-KYC, and explicit applicant consent. Zero advance fees or registration charges are ever collected by LoanCentral.
          </p>
          <p className="text-slate-500">
            For grievance redressal or queries regarding LSP practices, please contact our Principal Grievance Officer at <a href="mailto:gro@loancentral.in" className="text-blue-700 hover:underline">gro@loancentral.in</a>.
          </p>
        </div>
      </section>

    </div>
  );
}
