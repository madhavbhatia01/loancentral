"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Megaphone, Trophy } from "lucide-react";

interface MobileStickyCTAProps {
  onApplyClick?: () => void;
  isMenuOpen?: boolean;
}

export default function MobileStickyCTA({
  onApplyClick,
  isMenuOpen = false,
}: MobileStickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || isDismissed || isMenuOpen) {
    return null;
  }

  const handleApply = () => {
    if (onApplyClick) {
      onApplyClick();
    } else {
      window.location.href = "https://apply.credit91.com";
    }
  };

  return (
    <div
      role="region"
      aria-label="Instant Loan Offer Popup"
      className="fixed bottom-0 left-0 right-0 sm:bottom-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-white border-t-2 sm:border-2 border-emerald-500 rounded-t-2xl sm:rounded-2xl shadow-2xl px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] animate-slideUp"
    >
      {/* Dismiss Button */}
      <button
        type="button"
        onClick={() => setIsDismissed(true)}
        className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
        aria-label="Close offer popup"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        
        {/* Top / Left Info Row */}
        <div className="flex items-center gap-3 flex-1 pr-6 sm:pr-0">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-emerald-200 flex-shrink-0 bg-emerald-50">
            <Image
              src="/images/women-hero-hub.webp"
              alt="Get up to ₹60,000"
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5 text-emerald-700 font-black text-sm sm:text-base leading-tight">
              <Megaphone className="w-4 h-4 text-amber-500 flex-shrink-0 animate-bounce" />
              <span>Get up to ₹60,000</span>
            </div>
            <div className="flex items-center gap-1 text-slate-600 text-xs font-semibold mt-0.5">
              <span>Apply Now · 100% Digital</span>
              <Trophy className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* Bottom / Right CTA Button */}
        <button
          type="button"
          onClick={handleApply}
          className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-xl bg-[#064E3B] hover:bg-[#065F46] active:scale-[0.99] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center whitespace-nowrap"
        >
          Get Money
        </button>

      </div>
    </div>
  );
}
