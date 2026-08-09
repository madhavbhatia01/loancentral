import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface FinalCTAProps {
  onApplyClick: () => void;
}

export default function FinalCTA({ onApplyClick }: FinalCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-950 via-[#0B192C] to-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C9A7]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-teal-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#00C9A7]" />
          Launch-ready direction
        </span>

        <h2 className="text-3xl sm:text-5xl font-black text-white max-w-3xl mx-auto leading-tight">
          Instant loans can feel fast and trustworthy at the same time.
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-normal">
          Experience a phone-led loan application with zero hidden subscriptions, consent-first credit checks, and total cost transparency.
        </p>

        <div className="pt-4">
          <button
            type="button"
            onClick={onApplyClick}
            className="group inline-flex items-center gap-3 px-9 py-4 rounded-xl bg-gradient-to-r from-[#00C9A7] to-[#00B4D8] text-slate-950 font-bold text-base shadow-xl shadow-[#00C9A7]/20 hover:scale-[1.03] transition-all"
          >
            <span>Apply now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
