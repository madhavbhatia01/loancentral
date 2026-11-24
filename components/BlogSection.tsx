"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Clock, ShieldCheck, TrendingUp, Calendar } from "lucide-react";

export default function BlogSection() {
  const articles = [
    {
      id: "salaried-loans-salary-cycle",
      category: "Borrowing Guide",
      readingTime: "4 min read",
      title: "Understanding 30, 40, and 50-Day Loans: How Bullet Repayment Works",
      summary: "Explore how single-repayment salaried credit differs from multi-year EMIs and keeps your finances aligned with salary schedule.",
      image: "/images/hum-documents-verified.png",
      badge: "Loan Approved Screen",
      icon: Calendar,
      date: "Nov 2026",
    },
    {
      id: "salary-gap-financial-planning",
      category: "Salary Planning",
      readingTime: "5 min read",
      title: "Family Budgeting & Mid-Month Cash Flow Gaps Without Multi-Year Debt",
      summary: "Actionable budgeting strategies for salaried families facing unexpected medical or emergency expenses before month-end.",
      image: "/images/hum-money-received.png",
      badge: "Family Sanctioned",
      icon: TrendingUp,
      date: "Nov 2026",
    },
    {
      id: "rbi-digital-lending-consent",
      category: "Borrower Rights",
      readingTime: "3 min read",
      title: "Consent-First Borrowing: What RBI Digital Lending Norms Mean for You",
      summary: "Understand why explicit OTP consent, upfront fee disclosure, and regulated NBFC origination protect you from predatory apps.",
      image: "/images/hum-loan-approved.png",
      badge: "e-KYC Verified",
      icon: ShieldCheck,
      date: "Nov 2026",
    },
  ];

  return (
    <section id="blog" className="py-14 sm:py-20 hm-bg-paper-soft border-b hm-border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full hm-bg-blue-soft border hm-border-blue hm-text-blue text-xs font-bold ">
              Financial Guides &amp; Insights
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black hm-text-ink">
              Informed borrowing, simplified.
            </h2>
          </div>
          <p className="text-xs sm:text-sm hm-text-muted max-w-md">
            Clear, honest guides on salaried personal credit, salary cycles, and your rights under RBI lending regulations.
          </p>
        </div>

        {/* Blog Cards Grid: Strictly 1 card per row on mobile (<768px), 3 cols on desktop (>=1024px) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((post) => {
            const Icon = post.icon;
            return (
              <article
                key={post.id}
                className="group relative flex flex-col hm-bg-card rounded-2xl border hm-border-rule shadow-xs hm-hover-border-blue hover:shadow-lg transition-colors duration-300 overflow-hidden"
              >
                {/* 16:9 Image Area with Person happily showing phone with loan approval */}
                <div className="relative aspect-[16/9] w-full hm-bg-paper-deep overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full hm-bg-overlay backdrop-blur-md hm-text-paper text-[11px] font-bold border hm-border-paper">
                      {post.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-md hm-bg-mint hm-text-paper text-[10px] font-black shadow-xs">
                      {post.badge}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Metadata row: Category & reading time */}
                    <div className="flex items-center gap-3 text-xs hm-text-muted font-medium">
                      <span className="font-bold hm-text-blue">
                        {post.category}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold hm-text-ink hm-group-text-blue transition-colors line-clamp-2 sm:line-clamp-3 leading-snug">
                      <a href="https://apply.credit91.com" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {post.title}
                      </a>
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm hm-text-ink-soft leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  {/* Read Article Action */}
                  <div className="pt-3 border-t hm-border-rule flex items-center justify-between text-xs font-bold hm-text-blue">
                    <span>Read Guide</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
