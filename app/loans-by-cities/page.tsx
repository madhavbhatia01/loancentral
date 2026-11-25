import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Building2, ShieldCheck, Smartphone } from "lucide-react";
import LoansByCitiesClient from "@/components/LoansByCitiesClient";

export const metadata: Metadata = {
  title: "Loans by Cities | Personal Loan Guides Across India",
  description:
    "Explore city-specific personal loan guides across India. Understand eligibility, documents, and estimate monthly repayments with our EMI calculator.",
  alternates: {
    canonical: "https://loancentral.in/loans-by-cities",
    languages: {
      "en-IN": "https://loancentral.in/loans-by-cities",
    },
  },
};

export default function LoansByCitiesPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors py-1">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900">Loans by Cities</span>
        </nav>

        {/* Editorial Hero + Fresh Banner Image */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-4 sm:p-8 shadow-xs">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Personal Loans by Cities
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Compare concise local guides, eligibility basics, documents, and EMI planning across major Indian cities.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-sm text-slate-700">
              {[
                "Fast, paperless application journey",
                "City-focused guidance for salaried professionals",
                "Secure digital verification process",
                "Simple repayment planning before you apply",
                "Direct support for urgent personal needs",
                "Transparent terms shown before confirmation",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2 rounded-lg bg-slate-50 px-3 py-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 space-y-3">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="/images/cities/mumbai-hero.webp"
                alt="Indian salaried professional showing a loan approved message on a smartphone"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
            </div>
            <a
              href="https://apply.credit91.com/?utm_source=loancentral&utm_medium=website&utm_campaign=loans-by-cities&utm_content=https%3A%2F%2Floancentral.in%2Floans-by-cities"
              className="min-h-[48px] rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-sm flex items-center justify-center gap-2 transition-colors"
            >
              Apply Now <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </header>

        <section aria-label="Loan guide highlights" className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { Icon: Building2, title: "Local context", copy: "City-level borrowing needs at a glance." },
            { Icon: ShieldCheck, title: "Simple eligibility", copy: "Key KYC and salary requirements." },
            { Icon: Smartphone, title: "Quick planning", copy: "Review the guide and estimate your EMI." },
          ].map(({ Icon, title, copy }) => (
            <div key={title} className="bg-white rounded-xl border border-slate-200 p-4 flex gap-3 items-start">
              <Icon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h2 className="font-bold text-sm text-slate-900">{title}</h2>
                <p className="text-xs text-slate-600 mt-1">{copy}</p>
              </div>
            </div>
          ))}
        </section>

        <LoansByCitiesClient />
      </div>
    </main>
  );
}
