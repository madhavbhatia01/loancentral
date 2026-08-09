"use client";

import React, { useState } from "react";
import Link from "next/link";
import LoanCentralLogo from "./LoanCentralLogo";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

interface NavbarProps {
  onApplyClick: () => void;
}

export default function Navbar({ onApplyClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-white/90 border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="hover:opacity-95 transition-opacity" aria-label="LoanCentral Home">
          <LoanCentralLogo size="md" showTagline={true} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
          <Link href="/#loans" className="hover:text-[#00C9A7] transition-colors py-1">
            Loans
          </Link>
          <Link href="/#process" className="hover:text-[#00C9A7] transition-colors py-1">
            Process
          </Link>
          <Link href="/#calculator" className="hover:text-[#00C9A7] transition-colors py-1">
            Calculator
          </Link>
          <Link href="/#trust" className="hover:text-[#00C9A7] transition-colors py-1">
            Trust
          </Link>
          <Link href="/about" className="hover:text-[#00C9A7] transition-colors py-1">
            About Us
          </Link>
          <Link href="/careers" className="hover:text-[#00C9A7] transition-colors py-1">
            Careers
          </Link>
        </nav>

        {/* Desktop Action CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={onApplyClick}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0B192C] hover:bg-[#0F2137] text-white font-semibold text-sm shadow-md shadow-slate-900/10 transition-all hover:shadow-lg hover:scale-[1.02]"
          >
            <span>Apply now</span>
            <ArrowRight className="w-4 h-4 text-[#00C9A7] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={onApplyClick}
            className="px-3.5 py-1.5 rounded-full bg-[#0B192C] text-white text-xs font-semibold flex items-center gap-1"
          >
            <span>Apply</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <Link
            href="/#loans"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-lg text-slate-800 font-medium hover:bg-slate-50"
          >
            Loans
          </Link>
          <Link
            href="/#process"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-lg text-slate-800 font-medium hover:bg-slate-50"
          >
            Process
          </Link>
          <Link
            href="/#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-lg text-slate-800 font-medium hover:bg-slate-50"
          >
            Calculator
          </Link>
          <Link
            href="/#trust"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-lg text-slate-800 font-medium hover:bg-slate-50"
          >
            Trust
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-lg text-slate-800 font-medium hover:bg-slate-50"
          >
            About Us
          </Link>
          <Link
            href="/careers"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-lg text-slate-800 font-medium hover:bg-slate-50"
          >
            Careers
          </Link>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onApplyClick();
              }}
              className="w-full py-3 rounded-xl bg-[#0B192C] text-white font-semibold text-center flex items-center justify-center gap-2 shadow-md"
            >
              <span>Apply now</span>
              <ArrowRight className="w-4 h-4 text-[#00C9A7]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
