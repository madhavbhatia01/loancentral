import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, Banknote, Sparkles, Building2, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "HTML Sitemap | Complete Directory & Navigation | LoanCentral",
  description:
    "Explore the complete website directory of LoanCentral. Access all loan types, city pages, women's loan guides, salary tier calculators, and compliance documentation.",
  alternates: {
    canonical: "https://loancentral.in/sitemap/",
  },
};

export default function HtmlSitemapPage() {
  const womenCityPages = [
    { name: "Personal Loan for Women in Delhi NCR", href: "/personal-loan-for-women/delhi/", landmark: "India Gate" },
    { name: "Personal Loan for Women in Mumbai", href: "/personal-loan-for-women/mumbai/", landmark: "Gateway of India" },
    { name: "Personal Loan for Women in Bangalore", href: "/personal-loan-for-women/bangalore/", landmark: "Vidhana Soudha" },
    { name: "Personal Loan for Women in Hyderabad", href: "/personal-loan-for-women/hyderabad/", landmark: "Charminar & HITEC City" },
    { name: "Personal Loan for Women in Pune", href: "/personal-loan-for-women/pune/", landmark: "Shaniwar Wada" },
  ];

  const loanTypes = [
    { label: "Personal Loan Hub", href: "/personal-loan/" },
    { label: "Medical Emergency Loan", href: "/medical-emergency-loan/" },
    { label: "Wedding Loan", href: "/wedding-loan/" },
    { label: "Home Repair Loan", href: "/home-repair-loan/" },
    { label: "Education Loan", href: "/education-loan/" },
    { label: "Travel Loan", href: "/travel-loan/" },
  ];

  const cityLoanPages = [
    { label: "Personal Loan in Delhi", href: "/personal-loan-in-delhi/" },
    { label: "Personal Loan in Mumbai", href: "/personal-loan-in-mumbai/" },
    { label: "Personal Loan in Bangalore", href: "/personal-loan-in-bangalore/" },
    { label: "Personal Loan in Hyderabad", href: "/personal-loan-in-hyderabad/" },
    { label: "Personal Loan in Chennai", href: "/personal-loan-in-chennai/" },
    { label: "Personal Loan in Kolkata", href: "/personal-loan-in-kolkata/" },
    { label: "Personal Loan in Ahmedabad", href: "/personal-loan-in-ahmedabad/" },
    { label: "Personal Loan in Pune", href: "/personal-loan-in-pune/" },
    { label: "Personal Loan in Gurgaon", href: "/personal-loan-in-gurgaon/" },
    { label: "Personal Loan in Noida", href: "/personal-loan-in-noida/" },
    { label: "Personal Loan in Navi Mumbai", href: "/personal-loan-in-navi-mumbai/" },
    { label: "Personal Loan in Jaipur", href: "/personal-loan-in-jaipur/" },
  ];

  const salaryTiers = [
    { label: "Personal Loan for ₹25,000 Salary", href: "/personal-loan-for-25k-salary/" },
    { label: "Personal Loan for ₹30,000 Salary", href: "/personal-loan-for-30k-salary/" },
    { label: "Personal Loan for ₹35,000 Salary", href: "/personal-loan-for-35k-salary/" },
    { label: "Personal Loan for ₹40,000 Salary", href: "/personal-loan-for-40k-salary/" },
    { label: "Personal Loan for ₹50,000 Salary", href: "/personal-loan-for-50k-salary/" },
  ];

  const legalPages = [
    { label: "About LoanCentral Technologies", href: "/about/" },
    { label: "Careers & Team", href: "/careers/" },
    { label: "Contact Customer Support & Grievance Redressal", href: "/contact/" },
    { label: "Privacy Policy (DPDP Compliance)", href: "/privacy/" },
    { label: "Terms & Conditions", href: "/terms/" },
    { label: "LSP Regulatory Disclosure & RBI Compliance", href: "/disclaimer/" },
  ];

  return (
    <div className="w-full bg-slate-50 py-12 sm:py-16 text-slate-900" style={{ backgroundColor: "#f8fafc" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-3 pb-8 border-b border-slate-200">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Complete Website Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            LoanCentral HTML Sitemap
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Navigate all LoanCentral loan categories, city pages, women's loan hubs, salary tiers, and regulatory disclosures.
          </p>
        </div>

        {/* Section 1: Loan Types */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">1. Loan Types</h2>
              <p className="text-xs text-slate-500">Purpose-specific unsecured loans for salaried professionals</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {loanTypes.map((lt, idx) => (
              <Link
                key={idx}
                href={lt.href}
                className="p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-300 transition-colors text-xs font-bold text-slate-800 hover:text-blue-700 flex items-center justify-between"
              >
                <span>{lt.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            ))}
          </div>
        </div>

        {/* Section 2: 3-Tier Women Loan Hierarchy */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-600">
              <Banknote className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                2. Personal Loan for Women Directory
              </h2>
              <p className="text-xs text-slate-500">
                Dedicated hub and metropolitan city guides for salaried women
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Link
              href="/personal-loan-for-women/"
              className="inline-flex items-center gap-2 text-sm font-bold text-pink-600 hover:underline"
            >
              <span>Personal Loan for Women Hub (/personal-loan-for-women/)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {womenCityPages.map((city, idx) => (
                <Link
                  key={idx}
                  href={city.href}
                  className="p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-300 transition-colors flex items-center justify-between text-xs"
                >
                  <div className="space-y-0.5">
                    <span className="font-bold text-slate-900 block">{city.name}</span>
                    <span className="text-[11px] text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-red-500" />
                      <span>{city.landmark}</span>
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Loan by City */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">3. Loan by City</h2>
              <p className="text-xs text-slate-500">Salaried personal loans across major Indian cities</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {cityLoanPages.map((cp, idx) => (
              <Link
                key={idx}
                href={cp.href}
                className="p-3.5 rounded-xl bg-slate-50 hover:bg-indigo-50/50 border border-slate-200 hover:border-indigo-300 transition-colors text-xs font-bold text-slate-800 hover:text-indigo-700 flex items-center justify-between"
              >
                <span>{cp.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            ))}
          </div>
        </div>

        {/* Section 4: Salary Tier Pages */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                4. Loan by Salary
              </h2>
              <p className="text-xs text-slate-500">
                Tailored loan limits based on net monthly bank credit
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {salaryTiers.map((tier, idx) => (
              <Link
                key={idx}
                href={tier.href}
                className="p-3.5 rounded-xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-300 transition-colors text-xs font-bold text-slate-800 hover:text-emerald-700 flex items-center justify-between"
              >
                <span>{tier.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            ))}
          </div>
        </div>

        {/* Section 5: Company, Legal & Compliance */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                5. Company, Trust &amp; Compliance
              </h2>
              <p className="text-xs text-slate-500">
                Official regulatory disclosures, privacy terms, and grievance redressal
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {legalPages.map((page, idx) => (
              <Link
                key={idx}
                href={page.href}
                className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between"
              >
                <span>{page.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            ))}
          </div>
        </div>

        {/* Section 6: XML Sitemap Link */}
        <div className="text-center pt-4">
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:underline"
          >
            <span>View Raw XML Sitemap (/sitemap.xml)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
