"use client";

import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface FinalCTAProps {
  onApplyClick?: () => void;
}

export default function FinalCTA({ onApplyClick }: FinalCTAProps) {
  const handleApply = () => {
    if (onApplyClick) {
      onApplyClick();
    } else {
      window.location.href = "https://apply.credit91.com";
    }
  };

  return (
    <section className="py-14 sm:py-20 hm-bg-pear-soft hm-text-ink border-t hm-border-pear relative overflow-hidden">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5 sm:space-y-6">
        
        {/* Eyebrow Pill */}
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full hm-bg-blue-soft border hm-border-blue hm-text-blue text-xs font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5 hm-text-blue" />
          <span>Salaried Professionals</span>
        </span>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black hm-text-ink leading-tight">
          Need quick funds before your next salary?
        </h2>

        {/* Supporting Text */}
        <p className="hm-text-ink-soft text-sm sm:text-base md:text-lg max-w-xl mx-auto font-normal leading-relaxed">
          Apply online with flexible tenure aligned to your paycheck. Settle in one easy repayment on your next salary schedule.
        </p>

        {/* Key Product Facts Summary */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs hm-text-ink-soft font-medium pt-1">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 hm-text-blue" />
            Salaried professionals only
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 hm-text-blue" />
            Paperless digital e-KYC
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 hm-text-blue" />
            Single bullet settlement
          </span>
        </div>

        {/* Action Button: Full-width on mobile */}
        <div className="pt-2">
          <button
            type="button"
            onClick={handleApply}
            className="w-full sm:w-auto min-h-[48px] group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl hm-primary hm-hover-primary active:scale-[0.99] hm-text-paper font-black text-sm sm:text-base shadow-xl hm-shadow-primary hover:scale-[1.02] transition-colors text-center"
          >
            <span>Check Your Offer Now</span>
            <ArrowRight className="w-4 h-4 hm-text-coral group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <p className="text-[11px] hm-text-muted font-medium">
          Application subject to verification and approval. Partnered with RBI-regulated NBFCs.
        </p>

      </div>
    </section>
  );
}
