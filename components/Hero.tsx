"use client";

import React from "react";
import { Sparkles, ArrowRight, ShieldCheck, Clock, Lock, Headphones, Check, BadgeCheck, MessageCircle } from "lucide-react";

interface HeroProps {
  onApplyClick: () => void;
}

export default function Hero({ onApplyClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-[#0B192C] to-[#0A192F] text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00B4D8]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-[#00C9A7]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Chip */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-teal-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-[#00C9A7]" />
              <span>New-age personal loan experience for Bharat</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Instant personal loans, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#00C9A7] via-[#00B4D8] to-teal-200 bg-clip-text text-transparent">
                without the confusion.
              </span>
            </h1>

            {/* Primary Action Button & Micro-Copy */}
            <div className="pt-2 pb-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="button"
                  onClick={onApplyClick}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-[#00C9A7] to-[#00B4D8] hover:from-[#00B4D8] hover:to-[#00C9A7] rounded-xl shadow-lg shadow-[#00C9A7]/25 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-[#00C9A7]/35 active:scale-[0.98]"
                >
                  <span>Apply now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <p className="mt-3.5 text-xs text-slate-400 font-medium">
                No bureau check without consent. No hidden subscription. No noisy detours.
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              LoanCentral gives borrowers across India a cleaner, consent-first way to check eligibility, compare costs, upload documents, and accept a loan offer with complete peace of mind.
            </p>

            {/* 4 Feature Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#00C9A7]">
                  <ShieldCheck className="w-4 h-4" />
                  <strong className="text-sm font-semibold text-white">Consent-first</strong>
                </div>
                <p className="text-xs text-slate-400">Credit and data checks</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#00B4D8]">
                  <Clock className="w-4 h-4" />
                  <strong className="text-sm font-semibold text-white">Fast flow</strong>
                </div>
                <p className="text-xs text-slate-400">Built for mobile app</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#00C9A7]">
                  <Lock className="w-4 h-4" />
                  <strong className="text-sm font-semibold text-white">Clear breakdown</strong>
                </div>
                <p className="text-xs text-slate-400">Upfront APR &amp; fees</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#00B4D8]">
                  <Headphones className="w-4 h-4" />
                  <strong className="text-sm font-semibold text-white">Human support</strong>
                </div>
                <p className="text-xs text-slate-400">Query help anytime</p>
              </div>
            </div>
          </div>

          {/* Right Product Preview Mockup */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Floating Orbit Cards */}
            <div className="absolute -top-4 -left-2 sm:left-4 z-20 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md text-xs font-semibold text-teal-300 flex items-center gap-2 shadow-xl animate-float">
              <BadgeCheck className="w-4 h-4 text-[#00C9A7]" />
              <span>Offer details visible</span>
            </div>

            <div className="absolute -bottom-4 -right-2 sm:right-4 z-20 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md text-xs font-semibold text-teal-300 flex items-center gap-2 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
              <MessageCircle className="w-4 h-4 text-[#00B4D8]" />
              <span>Support before acceptance</span>
            </div>

            {/* Mobile Phone Mockup Screen */}
            <div className="w-full max-w-[320px] bg-slate-950 p-4 rounded-[40px] border-4 border-slate-800 shadow-2xl shadow-cyan-950/40 relative">
              {/* Phone Camera Notch */}
              <div className="w-28 h-4 bg-slate-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-950" />
              </div>

              {/* Phone App Inner Screen */}
              <div className="bg-slate-900 rounded-[28px] p-4 text-white border border-slate-800 space-y-4">
                
                {/* Header inside Phone */}
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                  <span className="font-bold text-[#00C9A7]">LoanCentral</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-medium text-[10px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                </div>

                {/* Offer Amount Card */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-2xl border border-slate-700/80 space-y-2">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Eligible amount</span>
                  <div className="text-2xl font-black text-white">₹ 75,000</div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#00B4D8] to-[#00C9A7] h-full w-3/4 rounded-full" />
                  </div>
                </div>

                {/* Mini Grid Stats inside Phone */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Monthly EMI</span>
                    <strong className="text-sm font-bold text-teal-300">₹ 6,876</strong>
                  </div>
                  <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Tenure</span>
                    <strong className="text-sm font-bold text-white">12 mo</strong>
                  </div>
                </div>

                {/* Step Journey inside Phone */}
                <div className="space-y-2 text-xs pt-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-teal-500/20 text-[#00C9A7] flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </span>
                    <p className="text-slate-300">Mobile verified</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-teal-500/20 text-[#00C9A7] flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </span>
                    <p className="text-slate-300">Offer generated</p>
                  </div>
                  <div className="flex items-center gap-2 opacity-60">
                    <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px]">
                      3
                    </span>
                    <p className="text-slate-400">Review repayment</p>
                  </div>
                </div>

                {/* CTA inside Phone */}
                <button
                  type="button"
                  onClick={onApplyClick}
                  className="w-full py-2.5 rounded-xl bg-[#00C9A7] hover:bg-[#00B4D8] text-slate-950 font-bold text-xs shadow-md transition-colors"
                >
                  Review final costs
                </button>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
