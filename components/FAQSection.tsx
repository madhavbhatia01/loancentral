"use client";

import React, { useState } from "react";
import { ChevronDown, ShieldCheck } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who is eligible for LoanCentral salaried loans?",
      a: "LoanCentral is designed exclusively for salaried professionals aged 21–55 with a minimum net monthly take-home salary of ₹30,000 deposited directly into a bank account. Self-employed applicants, cash earners, or students are currently not eligible.",
    },
    {
      q: "What loan amounts and tenures are available?",
      a: "You can apply for amounts between ₹10,000 and ₹60,000, and choose a repayment period of exactly 30, 40, or 50 days to align precisely with your upcoming salary cycle.",
    },
    {
      q: "How does single repayment work compared to regular EMIs?",
      a: "Unlike multi-month or multi-year personal loan EMIs, our single repayment credit features a single bullet settlement on your chosen maturity date (30, 40, or 50 days). You repay the principal and agreed charges once your salary is credited, avoiding long-term interest accrual.",
    },
    {
      q: "Will I see all charges before accepting the loan offer?",
      a: "Yes, completely transparent. Before you accept any offer or sign an agreement, the complete breakdown—including the exact repayment amount, processing fees, interest charges, and due date—is displayed transparently.",
    },
    {
      q: "Does checking my loan offer affect my credit score?",
      a: "No. Initial eligibility estimation and checks do not trigger a hard bureau enquiry. A bureau check is performed strictly after you provide explicit OTP consent during application submission.",
    },
    {
      q: "Is LoanCentral a bank or NBFC?",
      a: "LoanCentral operates strictly as a Lending Service Provider (LSP) in compliance with RBI Digital Lending Directions. All loan underwriting, sanction, disbursal, and collections are executed by regulated RBI-registered NBFC partners.",
    },
    {
      q: "What documents are required to complete the application?",
      a: "The journey is completely digital and paperless. You will need your PAN card, Aadhaar number (linked to your mobile for OTP verification), and 3 months of bank statements to verify your monthly salary credits.",
    },
  ];

  return (
    <section id="faq" className="py-14 sm:py-20 hm-bg-card border-b hm-border-rule">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10 sm:mb-14">
          <span className="px-3 py-1 rounded-full hm-bg-blue-soft border hm-border-blue hm-text-blue text-xs font-bold ">
            Frequently Asked Questions
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black hm-text-ink">
            Clear answers before you apply.
          </h2>

          <p className="text-xs sm:text-sm hm-text-muted max-w-md mx-auto">
            Everything you need to know about our personal loans for salaried, eligibility, and single repayment terms.
          </p>
        </div>

        {/* Accessible Accordion (Single column on all screens) */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const contentId = `faq-content-${idx}`;
            const headerId = `faq-header-${idx}`;
            return (
              <div
                key={idx}
                className="hm-bg-paper-soft rounded-2xl border hm-border-rule shadow-xs overflow-hidden transition-colors duration-200 hm-hover-border-blue"
              >
                <button
                  id={headerId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full min-h-[56px] p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 hm-focus"
                >
                  <span className="text-sm sm:text-base font-bold hm-text-ink">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 hm-text-blue transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm hm-text-ink-soft leading-relaxed border-t hm-border-rule pt-3 animate-fadeIn"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Helpdesk Cue */}
        <div className="mt-8 p-4 rounded-xl hm-bg-blue-soft border hm-border-blue flex items-center justify-center gap-2 text-xs hm-text-blue font-medium text-center">
          <ShieldCheck className="w-4 h-4 hm-text-blue flex-shrink-0" />
          <span>Need more details? Review our verified terms or start your digital application.</span>
        </div>

      </div>
    </section>
  );
}
