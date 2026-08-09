"use client";

import React, { useState } from "react";
import { Sparkles, ShieldCheck, X, ArrowRight, Clock, AlertCircle } from "lucide-react";

interface ApplyNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyNowModal({ isOpen, onClose }: ApplyNowModalProps) {
  const [notifyState, setNotifyState] = useState<"idle" | "subscribed">("idle");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header decoration bar */}
        <div className="h-2 bg-gradient-to-r from-[#0B192C] via-[#00B4D8] to-[#00C9A7]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-4">
            <Clock className="w-3.5 h-3.5 text-[#00C9A7]" />
            <span>Onboarding NBFC Partners</span>
          </div>

          <h3 className="text-2xl font-bold text-[#0B192C] mb-3">
            Application Portal Opening Soon
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            LoanCentral is currently expanding its network of RBI-regulated Non-Banking Financial Companies (NBFCs) to offer instant personal loans with transparent terms, low interest rates, and zero hidden fees.
          </p>

          {/* Key Highlights */}
          <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#00C9A7] flex-shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700">
                <strong className="text-slate-900 block font-semibold">Consent-First Architecture</strong>
                No credit score pull without explicit user OTP consent.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700">
                <strong className="text-slate-900 block font-semibold">Upfront Cost Transparency</strong>
                Complete breakdown of EMI, processing fee, and APR before acceptance.
              </div>
            </div>
          </div>

          {/* User notification confirmation UI */}
          {notifyState === "idle" ? (
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setNotifyState("subscribed")}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#0B192C] to-[#0F2137] hover:from-[#0F2137] hover:to-[#0B192C] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 transition-all hover:scale-[1.01]"
              >
                <span>Notify Me When Portal Launches</span>
                <ArrowRight className="w-4 h-4 text-[#00C9A7]" />
              </button>

              <p className="text-[11px] text-center text-slate-400">
                LoanCentral operates strictly as a Lending Service Provider (LSP). No spam policy.
              </p>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center animate-fadeIn">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-emerald-900 mb-1">
                You&apos;re on the priority list!
              </h4>
              <p className="text-xs text-emerald-700 mb-3">
                We will notify you immediately once the application portal is live for your pincode.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-emerald-700 text-white rounded-lg text-xs font-semibold hover:bg-emerald-800 transition-colors"
              >
                Back to Site
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
