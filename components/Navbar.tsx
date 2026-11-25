"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import LoanCentralLogo from "./LoanCentralLogo";
import { Menu, X, ArrowRight, ShieldCheck, ChevronRight, Sparkles } from "lucide-react";

interface NavbarProps {
  onApplyClick?: () => void;
  onMenuToggle?: (isOpen: boolean) => void;
}

export default function Navbar({ onApplyClick, onMenuToggle }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const firstFocusableRef = useRef<HTMLButtonElement | null>(null);

  // Notify parent if menu is opened (to hide sticky CTA bar)
  useEffect(() => {
    if (onMenuToggle) {
      onMenuToggle(mobileMenuOpen);
    }
  }, [mobileMenuOpen, onMenuToggle]);

  // Handle body scroll lock & focus management
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        firstFocusableRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      menuButtonRef.current?.focus();
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Personal Loan", href: "/personal-loan" },
    { label: "Women's Loan", href: "/personal-loan-for-women" },
    { label: "EMI Calculator", href: "/personal-loan#calculator" },
    { label: "₹30k Salary", href: "/personal-loan-for-30k-salary" },
    { label: "₹35k Salary", href: "/personal-loan-for-35k-salary" },
    { label: "Eligibility", href: "/#eligibility" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <>
      <header
        className="sticky top-0 z-40 w-full border-b shadow-xs transition-colors bg-white !bg-white"
        style={{ backgroundColor: "#ffffff", borderColor: "#e2e8f0" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between gap-3">
          
          {/* Brand Logo - Kept on left, prominent, large, and bold */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="inline-flex items-center hover:opacity-95 transition-opacity focus-visible:outline-2 hm-focus rounded-md py-1"
              aria-label="LoanCentral - Home"
            >
              <LoanCentralLogo size="header" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-5 text-sm font-semibold hm-text-ink-soft"
            aria-label="Main Navigation"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hm-link-hover transition-colors py-2 hm-focus"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Action CTA: Royal Blue with Amber Glow */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://apply.credit91.com?utm_source=loancentral&utm_medium=website&utm_campaign=navbar_cta"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full hm-primary hm-hover-primary active:scale-[0.99] hm-text-paper font-bold text-sm shadow-md hm-shadow-primary transition-colors hover:scale-[1.02] focus-visible:outline-2 hm-focus"
            >
              <span>Apply now</span>
              <ArrowRight className="w-4 h-4 hm-text-coral group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Actions: Compact Apply button + Menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://apply.credit91.com?utm_source=loancentral&utm_medium=website&utm_campaign=navbar_cta"
              className="inline-flex items-center justify-center min-h-[38px] px-3.5 py-1.5 rounded-full hm-primary hm-text-paper text-xs font-black shadow-xs active:scale-95 transition-transform"
              aria-label="Apply for loan"
            >
              Apply now
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl hm-text-ink-soft hm-hover-ink hm-hover-paper-deep hm-active-paper transition-colors focus:outline-none focus-visible:ring-2 hm-focus"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              <Menu className="w-6 h-6 hm-text-ink-soft" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Full-Height Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-50 lg:hidden flex justify-end"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 hm-bg-overlay backdrop-blur-xs transition-opacity duration-300 animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <div
            ref={drawerRef}
            className="relative w-full max-w-[340px] sm:max-w-sm hm-bg-card h-full shadow-2xl flex flex-col z-10 overflow-y-auto pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] animate-slideInRight"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b hm-border-rule">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center"
                aria-label="LoanCentral - Home"
              >
                <LoanCentralLogo size="sm" />
              </Link>

              <button
                ref={firstFocusableRef}
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl p-2 hm-text-muted hm-hover-ink hm-hover-paper-deep focus:outline-none focus-visible:ring-2 hm-focus"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Salaried Highlight Pill inside Drawer */}
            <div className="mx-5 mt-4 p-3 rounded-xl hm-bg-blue-soft border hm-border-blue flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 hm-text-blue flex-shrink-0" />
              <div className="text-[11px] leading-tight hm-text-blue font-medium">
                <strong className="hm-text-blue">Salaried Professionals:</strong> ₹10K–₹60K for 30, 40, or 50 days.
              </div>
            </div>

            {/* Quick Salary Bracket Links inside Mobile Drawer */}
            <div className="mx-5 mt-3 p-3 rounded-xl hm-bg-paper-soft border hm-border-rule">
              <div className="text-[10px] font-bold hm-text-muted mb-2 flex items-center gap-1">
                <Sparkles className="w-3 h-3 hm-text-coral" />
                <span>Loans by Salary Bracket</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                <Link
                  href="/personal-loan-for-25k-salary"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hm-bg-card border hm-border-rule hm-text-ink-soft hm-link-hover text-center"
                >
                  ₹25k Salary
                </Link>
                <Link
                  href="/personal-loan-for-30k-salary"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hm-bg-card border hm-border-rule hm-text-ink-soft hm-link-hover text-center"
                >
                  ₹30k Salary
                </Link>
                <Link
                  href="/personal-loan-for-35k-salary"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hm-bg-card border hm-border-rule hm-text-ink-soft hm-link-hover text-center"
                >
                  ₹35k Salary
                </Link>
                <Link
                  href="/personal-loan-for-50k-salary"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hm-bg-card border hm-border-rule hm-text-ink-soft hm-link-hover text-center"
                >
                  ₹50k+ Salary
                </Link>
              </div>
            </div>

            {/* Navigation Rows */}
            <nav className="flex-1 px-4 py-4 space-y-1">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[48px] px-3.5 rounded-xl hm-text-ink-soft font-bold text-sm flex items-center justify-between hm-hover-blue-soft hm-link-hover hm-active-blue-soft transition-colors"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 hm-text-muted" />
                </Link>
              ))}

              <div className="pt-2 border-t hm-border-rule my-2" />

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[48px] px-3.5 rounded-xl hm-text-ink-soft font-semibold text-sm flex items-center justify-between hm-hover-paper-soft transition-colors"
              >
                <span>About Us</span>
                <ChevronRight className="w-4 h-4 hm-text-muted" />
              </Link>
              <Link
                href="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[48px] px-3.5 rounded-xl hm-text-ink-soft font-semibold text-sm flex items-center justify-between hm-hover-paper-soft transition-colors"
              >
                <span>Careers</span>
                <ChevronRight className="w-4 h-4 hm-text-muted" />
              </Link>
            </nav>

            {/* Bottom Actions & Separated Legal Links */}
            <div className="p-5 border-t hm-border-rule hm-bg-paper-soft space-y-4">
              <a
                href="https://apply.credit91.com?utm_source=loancentral&utm_medium=website&utm_campaign=navbar_cta"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[48px] w-full py-3.5 px-4 rounded-xl hm-primary hm-hover-primary active:scale-[0.99] hm-text-paper font-black text-sm flex items-center justify-center gap-2 shadow-md hm-shadow-primary transition-colors text-center"
              >
                <span>Apply now</span>
                <ArrowRight className="w-4 h-4 hm-text-coral" />
              </a>

              <div className="flex items-center justify-center gap-3 text-[11px] hm-text-muted pt-1">
                <Link
                  href="/privacy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hm-link-hover underline underline-offset-2"
                >
                  Privacy
                </Link>
                <span>·</span>
                <Link
                  href="/terms"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hm-link-hover underline underline-offset-2"
                >
                  Terms
                </Link>
                <span>·</span>
                <Link
                  href="/disclaimer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hm-link-hover underline underline-offset-2"
                >
                  Disclaimer
                </Link>
              </div>

              <p className="text-[10px] text-center hm-text-muted leading-snug">
                LoanCentral operates as an LSP partnering with RBI-regulated NBFCs.
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
