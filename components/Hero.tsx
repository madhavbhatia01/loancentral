"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Building2, Calendar, Banknote } from "lucide-react";

interface HeroProps {
  onApplyClick?: () => void;
}

export default function Hero({ onApplyClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden hm-text-ink pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20 border-b hm-border-rule">
      {/* Soft luminous ambient accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] hm-primary rounded-full blur-3xl pointer-events-none opacity-5" />
      <div className="absolute top-20 left-10 w-[350px] h-[350px] hm-bg-coral rounded-full blur-3xl pointer-events-none opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop 12-col balanced grid; Mobile single column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Description, 4 Clean Feature Cards (Zero Figures), CTA */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Main Heading */}
            <h1 className="text-[clamp(2.10rem,7.5vw,3.25rem)] font-black tracking-tight leading-[1.12] hm-text-ink">
              Personal loans,{" "}
              <span className="hm-text-blue">
                aligned with your salary cycle.
              </span>
            </h1>

            {/* Supporting Sentence (Zero figures) */}
            <p className="hm-text-ink-soft text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Fast, paperless personal funds for urgent emergency expenses, medical needs, and everyday salary-cycle gaps.
            </p>

            {/* Four Verified Product Facts (2x2 grid, Zero Figures) */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 pt-1 max-w-xl">
              <div className="p-3 sm:p-4 rounded-2xl hm-bg-card border hm-border-rule shadow-xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl hm-bg-blue-soft border hm-border-blue flex items-center justify-center hm-text-blue flex-shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13px] sm:text-sm font-bold hm-text-ink">Salaried only</div>
                  <div className="text-[11px] hm-text-muted font-medium">Direct bank salary credit</div>
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl hm-bg-card border hm-border-rule shadow-xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl hm-bg-pear-soft border hm-border-pear flex items-center justify-center hm-text-coral flex-shrink-0 mt-0.5">
                  <Banknote className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13px] sm:text-sm font-bold hm-text-ink">Urgent Emergency Funds</div>
                  <div className="text-[11px] hm-text-muted font-medium">Medical, bills, travel &amp; more</div>
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl hm-bg-card border hm-border-rule shadow-xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl hm-bg-blue-soft border hm-border-blue flex items-center justify-center hm-text-blue flex-shrink-0 mt-0.5">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13px] sm:text-sm font-bold hm-text-ink">Flexible Tenure</div>
                  <div className="text-[11px] hm-text-muted font-medium">Aligned with salary schedule</div>
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl hm-bg-card border hm-border-rule shadow-xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl hm-bg-mint-soft border hm-border-mint flex items-center justify-center hm-text-mint flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13px] sm:text-sm font-bold hm-text-ink">Single repayment</div>
                  <div className="text-[11px] hm-text-muted font-medium">No multi-month EMI trap</div>
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <div id="hero-cta-marker" className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="https://apply.credit91.com"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-3 px-8 py-3.5 text-base font-black hm-text-paper hm-primary hm-hover-primary active:scale-[0.99] rounded-xl shadow-lg hm-shadow-primary transition-colors text-center"
              >
                <span>Check Your Offer</span>
                <ArrowRight className="w-4 h-4 hm-text-coral" />
              </a>

              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs hm-text-ink-soft font-semibold">
                <ShieldCheck className="w-4 h-4 hm-text-blue flex-shrink-0" />
                <span>Application subject to verification and approval</span>
              </div>
            </div>

            {/* Regulatory footnote */}
            <div className="text-[11px] hm-text-muted flex items-center gap-2 pt-1 font-medium">
              <span className="w-2 h-2 rounded-full hm-bg-coral flex-shrink-0" />
              <span>Partnered with RBI-regulated NBFCs · Zero upfront application fees</span>
            </div>

          </div>

          {/* Right Column: Clean Hero Banner Showcase (No redundant top calculator) */}
          <div className="lg:col-span-6 w-full space-y-2.5">
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border hm-border-rule shadow-lg aspect-[16/10] sm:aspect-[16/10] hm-bg-paper-deep">
              <Image
                src="/images/hum-hero-loan-disbursed.png"
                alt="Happy salaried professional showing a phone with loan disbursed confirmation"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[46%_center]"
              />
            </div>

            {/* Clean Sub-Caption Pill */}
            <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hm-bg-card border hm-border-rule shadow-xs hm-text-ink-soft text-xs font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full hm-bg-mint animate-pulse" />
                <span>Direct bank disbursal confirmed</span>
              </div>
              <div className="hm-text-muted font-medium text-[11px] hidden sm:block">
                DigiLocker Verified · Bullet Settle
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
