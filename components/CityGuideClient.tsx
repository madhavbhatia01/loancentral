"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ChevronDown, ArrowRight, CheckCircle2 } from "lucide-react";
import type { ArticleSection } from "@/src/data/city-articles";
import type { City, FaqItem } from "@/src/data/cities";

const EmiCalculator = dynamic(() => import("@/components/CityEmiCalculator"), {
  ssr: false,
  loading: () => (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center text-sm text-slate-500">
      Loading calculator...
    </div>
  ),
});

interface CityGuideClientProps {
  sections: ArticleSection[];
  faqs: FaqItem[];
  nearbyCities: City[];
  cityName: string;
  loanLabel: string;
  salary?: number;
}

export default function CityGuideClient({
  sections,
  faqs,
  nearbyCities,
  cityName,
  loanLabel,
  salary,
}: CityGuideClientProps) {
  const [progress, setProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const visibleSections = sections.slice(0, 2);
  const mainPoints = [
    [
      `${loanLabel} in ${cityName}`,
      salary ? `For ₹${salary.toLocaleString("en-IN")} monthly salary` : "For salaried professionals",
      "Fast digital application",
    ],
    ["PAN & Aadhaar", "Income documentation", "Secure bank verification"],
  ];

  useEffect(() => {
    const onScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min(100, Math.round((window.scrollY / docHeight) * 100)));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <>
      {/* Reading Progress Bar */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-1 z-50 bg-slate-200/60"
      >
        <div
          className="h-full bg-blue-600 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-4xl space-y-7">
          {visibleSections.map((sec, sectionIndex) => (
            <section
              key={sec.id}
              id={sec.id}
              className="scroll-mt-24 space-y-4"
            >
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {sectionIndex === 0
                  ? `${loanLabel} in ${cityName}`
                  : `Documents for ${loanLabel}`}
              </h2>
              <ul className="space-y-2">
                {mainPoints[sectionIndex].map((point) => (
                  <li key={point} className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 flex items-center gap-3 text-base sm:text-lg font-black text-slate-900 whitespace-nowrap">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="truncate">{point}</span>
                  </li>
                ))}
              </ul>
              {sec.callout && (
                <blockquote className="rounded-xl border-l-4 border-blue-600 bg-blue-50/60 p-4 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  {sec.callout}
                </blockquote>
              )}
            </section>
          ))}

          <section id="emi-calculator" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {loanLabel} Calculator
            </h2>
            <EmiCalculator />
          </section>

          {/* FAQ Accordion */}
          <section
            id="faq-section"
            aria-labelledby="faq-heading"
            className="scroll-mt-24 space-y-4"
          >
            <h2
              id="faq-heading"
              className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight"
            >
              {loanLabel} FAQs for {cityName}
            </h2>
            <div className="space-y-3">
              {faqs.slice(0, 3).map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full min-h-[52px] px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:bg-slate-50 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Compact Nearby City Links */}
          <section aria-labelledby="nearby-heading" className="space-y-4">
            <h2
              id="nearby-heading"
              className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight"
            >
              Nearby City Guides
            </h2>
            <div className="flex flex-wrap gap-2">
              {nearbyCities.map((nc) => (
                <Link
                  key={nc.slug}
                  href={`/personal-loan-in-${nc.slug}`}
                  className="min-h-[44px] rounded-xl border border-slate-200 bg-white px-4 py-2.5 hover:border-blue-300 transition-colors inline-flex items-center gap-2 text-sm font-bold text-slate-900"
                >
                  <span>{nc.name}</span>
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </Link>
              ))}
            </div>
          </section>
      </div>
    </>
  );
}
