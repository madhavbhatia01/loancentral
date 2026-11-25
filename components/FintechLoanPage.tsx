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
  ChevronDown,
  Info,
  Clock,
  HeartHandshake,
  Lock,
  Scale,
  Award,
  BadgeCheck,
  Briefcase,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import StickyEMICalculator from "./StickyEMICalculator";

export interface FintechLoanPageProps {
  pageType: "general-hub" | "women-hub" | "women-city";
  title: string;
  subtitle: string;
  badgeText?: string;
  cityName?: string;
  stateName?: string;
  landmark?: string;
  heroImageSrc: string;
  heroImageAlt: string;
  minSalary?: string; // Default: "₹25,000" for general, "₹30,000" for women
  localHubs?: Array<{ name: string; type: string; description: string }>;
  localAreas?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  onApplyClick?: () => void;
}

export default function FintechLoanPage({
  pageType,
  title,
  subtitle,
  badgeText,
  cityName,
  stateName,
  landmark,
  heroImageSrc,
  heroImageAlt,
  minSalary = pageType === "general-hub" ? "₹25,000" : "₹30,000",
  localHubs = [],
  localAreas = [],
  faqs = [],
  onApplyClick,
}: FintechLoanPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleApplyRedirect = () => {
    if (onApplyClick) {
      onApplyClick();
    } else {
      window.location.href = `https://apply.credit91.com?utm_source=loancentral&utm_medium=website&utm_campaign=${encodeURIComponent(pageType)}`;
    }
  };

  const cityDirectory = [
    {
      city: "Delhi NCR",
      slug: "delhi",
      landmark: "India Gate",
      hubs: "Cyber City, Aerocity, Connaught Place",
      img: "/images/women-delhi-hero.webp",
    },
    {
      city: "Mumbai",
      slug: "mumbai",
      landmark: "Gateway of India",
      hubs: "BKC, Lower Parel, Powai, Andheri",
      img: "/images/women-mumbai-hero.webp",
    },
    {
      city: "Bangalore",
      slug: "bangalore",
      landmark: "Vidhana Soudha",
      hubs: "Whitefield, Electronic City, ORR",
      img: "/images/women-bangalore-hero.webp",
    },
    {
      city: "Hyderabad",
      slug: "hyderabad",
      landmark: "Charminar & HITEC City",
      hubs: "HITEC City, Gachibowli, Financial Dist.",
      img: "/images/women-hyderabad-hero.webp",
    },
    {
      city: "Pune",
      slug: "pune",
      landmark: "Shaniwar Wada",
      hubs: "Hinjewadi, Magarpatta, Kharadi",
      img: "/images/women-pune-hero.webp",
    },
  ];

  const defaultFaqs = [
    {
      question: "Who is eligible to apply for a personal loan?",
      answer: `Applicants must be Indian citizens aged 21 to 58 years with a regular salaried position and a minimum net monthly salary of ${minSalary} credited directly to an Indian commercial bank account. Minimum 3 months of continuous employment is required.`,
    },
    {
      question: "What documents are required for digital KYC verification?",
      answer: "You only need your PAN card, Aadhaar card (linked with mobile number for instant DigiLocker OTP authentication), and the last 3 months of bank statements showing regular salary credits. No physical paperwork or in-person verification is required.",
    },
    {
      question: "How long does the loan approval and disbursal process take?",
      answer: "The digital application typically takes under 2 minutes. Once automated DigiLocker KYC and bank statement verification are complete, approval is near-instantaneous. Funds are disbursed directly into your salary bank account within 10 to 30 minutes by our regulated lending partner Credit 91.",
    },
    {
      question: "Are there any collateral or co-signer requirements?",
      answer: "No. All personal loans on our platform are 100% unsecured. There is zero collateral, zero pledge of assets, and no requirement for a guarantor or co-signer.",
    },
    {
      question: "Are there any upfront charges or hidden registration fees?",
      answer: "Absolutely not. LoanCentral and lending partner Credit 91 charge zero upfront registration fees, zero security deposits, and zero hidden charges. All interest rates (typically 18% to 36% APR) and processing fees are fully disclosed in the Key Fact Statement (KFS) before you sign.",
    },
    {
      question: "Can I repay early without foreclosure penalty?",
      answer: "Yes, early repayment is supported in full compliance with RBI Fair Practice Code guidelines. Check your individual loan agreement and KFS for specific tenure terms.",
    },
  ];

  const activeFaqs = faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <div className="w-full overflow-x-hidden bg-slate-50 text-slate-900" style={{ backgroundColor: "#f8fafc" }}>
      
      {/* 1. Main Hero & Interactive EMI Calculator Section */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Hero Content & Visual Badges */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Trust status chips */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>{badgeText || (pageType === "general-hub" ? "Verified Salaried Loan" : "Specialized Credit Program")}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold shadow-xs">
                  <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Digital KYC · RBI-Regulated Partner</span>
                </span>
                {cityName && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium">
                    <MapPin className="w-3 h-3 text-red-500" />
                    <span>{cityName}, {stateName}</span>
                  </span>
                )}
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-slate-900">
                {title}
              </h1>

              {/* Subtitle */}
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                {subtitle}
              </p>

              {/* Direct CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={handleApplyRedirect}
                  className="min-h-[48px] px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-black text-sm sm:text-base shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

                <a
                  href="#calculator"
                  className="min-h-[48px] px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-sm shadow-xs transition-colors flex items-center justify-center"
                >
                  Calculate Monthly EMI
                </a>
              </div>

              {/* Hero Image Container (Clean, unobstructed image, outer translucent strip) */}
              <div className="space-y-2.5 pt-2">
                <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-md aspect-[3/2] bg-slate-100 group">
                  <Image
                    src={heroImageSrc}
                    alt={heroImageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                    className="object-cover object-center transform transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>

                {/* Outer Translucent Status Strip (Outside the image, no Credit 91 name) */}
                <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/70 backdrop-blur-sm border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Loan Approved &amp; Disbursed via RBI-Regulated NBFC Partner</span>
                  </div>
                  <span className="text-slate-500 font-medium text-[11px] hidden sm:inline">
                    {landmark ? `${landmark}, ${cityName}` : "Zero Advance Fees · DigiLocker Verified"}
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Interactive EMI Calculator (Sticky on Desktop, Stacked on Mobile) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
              <StickyEMICalculator onApplyClick={handleApplyRedirect} />

              {/* Quick Trust Highlights below calculator */}
              <div className="rounded-2xl bg-white border border-slate-200 p-4 space-y-2 text-xs text-slate-600 shadow-xs">
                <div className="flex items-center gap-2 text-slate-900 font-bold">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Borrower Protection Standards</span>
                </div>
                <ul className="space-y-1.5 text-[11px] list-disc list-inside text-slate-600">
                  <li>Transparent Key Fact Statement (KFS) provided before contract signing</li>
                  <li>No contact list scraping or intrusive phone permissions</li>
                  <li>Direct account transfer with zero intermediary commission</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. LEVEL 1 ONLY: Featured Showcase Card for "Personal Loan for Women" */}
      {pageType === "general-hub" && (
        <section className="py-12 bg-gradient-to-r from-blue-50 via-indigo-50 to-pink-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-white border-2 border-indigo-200/80 shadow-lg p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-bold">
                  <HeartHandshake className="w-3.5 h-3.5 text-pink-600" />
                  <span>Specialized Financial Program</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Personal Loan for Women
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Tailored specifically for salaried women professionals. Enjoy independent credit evaluation, zero collateral, no co-signer requirements, and 100% paperless digital verification. Available across top metropolitan hubs including Delhi NCR, Mumbai, Bangalore, Hyderabad, and Pune.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <span className="px-3 py-1 rounded-lg bg-slate-100">Zero Co-Signer Required</span>
                  <span className="px-3 py-1 rounded-lg bg-slate-100">Min. ₹30,000 Salary</span>
                  <span className="px-3 py-1 rounded-lg bg-slate-100">100% Confidential</span>
                </div>
              </div>

              <div className="flex-shrink-0 w-full md:w-[360px] flex flex-col gap-4">
                <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                  <Image
                    src="/images/women-hero-hub.webp"
                    alt="Confident Indian salaried woman holding smartphone showing Loan Disbursed"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover"
                  />
                </div>
                <Link
                  href="/personal-loan-for-women"
                  className="w-full min-h-[50px] px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white font-black text-sm sm:text-base shadow-lg transition-colors flex items-center justify-center gap-2.5 group"
                >
                  <span>Explore Women's Loan Hub</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. LEVEL 2 ONLY: Visual 5-City Directory Grid */}
      {pageType === "women-hub" && (
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Metropolitan Directory</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Select Your City for Tailored Women's Loan Terms
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Explore customized coverage, local corporate tech hubs, and express verification across India's top 5 metropolitan regions:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityDirectory.map((c) => (
                <Link
                  key={c.slug}
                  href={`/personal-loan-for-women/${c.slug}`}
                  className="group rounded-3xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-400 p-5 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden bg-slate-200">
                      <Image
                        src={c.img}
                        alt={`Salaried professional in ${c.city} with landmark ${c.landmark}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                        Personal Loan for Women in {c.city}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        Key Hubs: {c.hubs}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-blue-600">
                    <span>View {c.city} Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. LEVEL 3 ONLY: Local City Coverage & Tech Hubs Section */}
      {pageType === "women-city" && cityName && (
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Local Employment Coverage</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Corporate Corridors &amp; Residential Coverage in {cityName}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Working women employed across {cityName}&apos;s leading commercial districts and IT corridors enjoy streamlined verification:
              </p>
            </div>

            {/* Hub Cards */}
            {localHubs.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {localHubs.map((hub, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900">{hub.name}</span>
                      <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                        {hub.type}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{hub.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Residential Localities Pill Grid */}
            {localAreas.length > 0 && (
              <div className="pt-4 space-y-3">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
                  Major Residential Localities Served in {cityName}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {localAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Sibling City Cross-Links */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="font-bold text-slate-700">Other Cities in Women&apos;s Loan Program:</span>
              <div className="flex flex-wrap gap-2">
                {cityDirectory
                  .filter((c) => c.city.toLowerCase() !== cityName.toLowerCase())
                  .map((c) => (
                    <Link
                      key={c.slug}
                      href={`/personal-loan-for-women/${c.slug}`}
                      className="px-3 py-1 rounded-lg bg-white border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      {c.city}
                    </Link>
                  ))}
                <Link
                  href="/personal-loan-for-women"
                  className="px-3 py-1 rounded-lg bg-pink-50 border border-pink-200 text-pink-700 font-bold hover:bg-pink-100 transition-colors"
                >
                  All India Hub →
                </Link>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 5. Key Benefits: 4-Card Grid */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Core Advantages</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Designed for Speed, Privacy &amp; Total Transparency
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear advantages built to provide stress-free access to salaried personal credit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">100% Unsecured</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero collateral, zero pledge of assets, and no requirement for a guarantor or co-signer. Approved strictly on your salaried profile.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Digital KYC</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Paperless verification in minutes via DigiLocker. No physical document collection, branch visits, or tedious manual paperwork.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Transparent APR</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clear Key Fact Statement (KFS) detailing processing fees and annual percentage rates upfront. Zero hidden penalties or advance fees.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">RBI Regulated Partner</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Funded directly by partner regulated NBFCs (exclusive lending partner Credit 91) ensuring complete compliance with RBI guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Eligibility Criteria & Document Checklist Grid */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Eligibility Column */}
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Requirements</span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Eligibility Criteria</h2>
                <p className="text-xs text-slate-500">Must satisfy these basic criteria prior to application:</p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-slate-900 block">Age Limit</span>
                    <span className="text-xs text-slate-600">Between 21 and 58 years at the time of loan application.</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-slate-900 block">Minimum Net Monthly Salary</span>
                    <span className="text-xs text-slate-600">Minimum {minSalary} net monthly salary credited directly to an active bank account.</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-slate-900 block">Employment Status</span>
                    <span className="text-xs text-slate-600">Full-time salaried professional in private, MNC, or public sector firm.</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-slate-900 block">Work Experience</span>
                    <span className="text-xs text-slate-600">Minimum 3 months continuous employment in your current organization.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Checklist Column */}
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Paperless Verification</span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Document Checklist</h2>
                <p className="text-xs text-slate-500">100% digital submission via smartphone or desktop:</p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-slate-900 block">PAN Card</span>
                    <span className="text-xs text-slate-600">Valid Permanent Account Number for identity and tax verification.</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-slate-900 block">Aadhaar (Mobile Linked)</span>
                    <span className="text-xs text-slate-600">For paperless OTP authentication and address verification via DigiLocker.</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-slate-900 block">3 Months Bank Statements</span>
                    <span className="text-xs text-slate-600">PDF bank statement showing regular monthly salary credits from your employer.</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-slate-900 block">Active NetBanking / Debit Card</span>
                    <span className="text-xs text-slate-600">To setup automated e-NACH mandate for hassle-free scheduled repayment.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. How to Apply: 4-Step Numbered Process */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>4 Simple Steps</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              How to Apply in Under 2 Minutes
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Zero branch visits. From application to account credit in four digital steps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-sm shadow-xs">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">Enter Loan Details</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Select your required loan amount (₹5,000–₹60,000) and repayment tenure using the EMI calculator.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-sm shadow-xs">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">Instant Digital KYC</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Verify identity paperlessly using Aadhaar OTP via DigiLocker and upload recent salary bank statements.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-sm shadow-xs">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">Review &amp; Sign KFS</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Inspect your clear Key Fact Statement (KFS) with total transparency and sign the digital agreement.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-sm shadow-xs">
                4
              </div>
              <h3 className="text-base font-bold text-slate-900">Direct Bank Disbursal</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Approved funds are transferred directly into your salary bank account via lending partner Credit 91.
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={handleApplyRedirect}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-md transition-colors"
            >
              <span>Start Application Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. FAQs Accordion */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>Got Questions?</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear answers regarding loan eligibility, collateral, repayment, and disbursal timelines.
            </p>
          </div>

          <div className="space-y-3">
            {activeFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Regulatory Footer & LSP Disclaimer */}
      <section className="py-8 bg-slate-100 text-[11px] text-slate-500 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-start gap-2.5">
            <Info className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
            <div className="leading-relaxed space-y-1">
              <p>
                <strong>Lending Service Provider (LSP) Mandatory Regulatory Notice:</strong> LoanCentral Technologies operates strictly as a digital Lending Service Provider (LSP) pursuant to the regulatory framework issued by the Reserve Bank of India (RBI) under the Digital Lending Guidelines. LoanCentral is not a banking company or Non-Banking Financial Company (NBFC) and does not directly underwrite, approve, or disburse credit.
              </p>
              <p>
                All personal loan applications are governed exclusively by our regulated lending partner: <strong>Credit 91</strong> (apply.credit91.com), an underwriting partner with RBI-compliant digital infrastructure. Typical interest rates (APR) range between 18% and 36% per annum. Zero advance fees or registration charges are ever collected by LoanCentral.
              </p>
              <p>
                For grievance redressal or feedback regarding LSP practices, please contact our Principal Grievance Officer at <strong>gro@loancentral.in</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Mobile Sticky Apply Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-xl flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] text-slate-500 block leading-tight">Instant Salaried Credit</span>
          <span className="text-xs font-bold text-slate-900 block leading-tight">
            {cityName ? `Loans in ${cityName}` : "Personal Loans"}
          </span>
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
