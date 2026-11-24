"use client";

import React, { useState, useEffect, useRef } from "react";
import { ShieldCheck, X, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";

interface ApplyNowModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultAmount?: number;
  defaultDays?: number;
}

export default function ApplyNowModal({
  isOpen,
  onClose,
  defaultAmount = 25000,
  defaultDays = 30,
}: ApplyNowModalProps) {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [salary, setSalary] = useState("");
  const [days, setDays] = useState<30 | 40 | 50>(defaultDays as 30 | 40 | 50);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (defaultDays === 30 || defaultDays === 40 || defaultDays === 50) {
      setDays(defaultDays);
    }
  }, [defaultDays]);

  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleEsc);

      return () => {
        document.body.style.overflow = original;
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim() || fullName.trim().length < 3) {
      newErrors.fullName = "Please enter your full name as per PAN";
    }

    const cleanMobile = mobileNumber.replace(/\D/g, "");
    if (!cleanMobile || cleanMobile.length !== 10) {
      newErrors.mobileNumber = "Enter a valid 10-digit Indian mobile number";
    }

    const cleanSalary = parseInt(salary.replace(/\D/g, "") || "0", 10);
    if (!cleanSalary || cleanSalary < 30000) {
      newErrors.salary = "Minimum monthly net salary must be ₹30,000 for salaried loans";
    }

    if (!consent) {
      newErrors.consent = "You must provide explicit consent for mobile OTP verification";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        window.location.href = `https://apply.credit91.com?name=${encodeURIComponent(
          fullName
        )}&phone=${mobileNumber}&tenure=${days}`;
      }, 1200);
    }, 800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 hm-bg-overlay backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg hm-bg-card rounded-t-3xl sm:rounded-3xl shadow-2xl border hm-border-rule overflow-hidden max-h-[92vh] flex flex-col pt-[max(0.5rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] animate-slideUp"
      >
        {/* Header decoration bar */}
        <div className="h-1.5 hm-no-gradient hm-no-gradient hm-no-gradient hm-no-gradient" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full hm-primary animate-pulse" />
            <span className="text-xs font-bold hm-text-muted ">
              Consent-First Application
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl p-2 hm-text-muted hm-hover-ink-soft hm-hover-paper-deep"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="px-5 sm:px-7 py-2 overflow-y-auto space-y-4">
          <div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-black hm-text-ink">
              Apply for ₹{defaultAmount.toLocaleString("en-IN")}
            </h3>
            <p className="text-xs hm-text-ink-soft mt-1 leading-relaxed">
              Exclusively for salaried professionals. Settle in a single bullet payment at {days} days.
            </p>
          </div>

          {isSuccess ? (
            <div className="p-6 rounded-2xl hm-bg-blue-soft border hm-border-blue text-center space-y-3 animate-fadeIn my-6">
              <div className="w-12 h-12 rounded-full hm-bg-blue-soft hm-text-blue flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-base font-bold hm-text-blue">
                Application Initiated!
              </h4>
              <p className="text-xs hm-text-blue leading-relaxed">
                Redirecting you to our secure, partner-regulated onboarding portal...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              
              {/* Full Name */}
              <div className="space-y-1">
                <label htmlFor="form-full-name" className="block text-xs font-bold hm-text-ink-soft">
                  Full Name (as per PAN)
                </label>
                <input
                  id="form-full-name"
                  type="text"
                  autoComplete="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full min-h-[48px] px-3.5 rounded-xl border hm-border-rule text-sm hm-text-ink focus:outline-none hm-focus-border focus:ring-1 hm-focus"
                />
                {errors.fullName && (
                  <p className="text-[11px] hm-text-coral font-medium flex items-center gap-1 mt-0.5">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Mobile Number */}
              <div className="space-y-1">
                <label htmlFor="form-mobile" className="block text-xs font-bold hm-text-ink-soft">
                  Mobile Number (linked to Aadhaar)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold hm-text-muted">
                    +91
                  </span>
                  <input
                    id="form-mobile"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    pattern="[0-9]*"
                    maxLength={10}
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
                    placeholder="98765 43210"
                    className="w-full min-h-[48px] pl-12 pr-3.5 rounded-xl border hm-border-rule text-sm font-semibold hm-text-ink focus:outline-none hm-focus-border focus:ring-1 hm-focus"
                  />
                </div>
                {errors.mobileNumber && (
                  <p className="text-[11px] hm-text-coral font-medium flex items-center gap-1 mt-0.5">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errors.mobileNumber}</span>
                  </p>
                )}
              </div>

              {/* Monthly Net Salary */}
              <div className="space-y-1">
                <label htmlFor="form-salary" className="block text-xs font-bold hm-text-ink-soft">
                  Monthly Net Take-Home Salary
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold hm-text-muted">
                    ₹
                  </span>
                  <input
                    id="form-salary"
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    value={salary}
                    onChange={(e) => {
                      const num = e.target.value.replace(/\D/g, "");
                      setSalary(num ? Number(num).toLocaleString("en-IN") : "");
                    }}
                    placeholder="e.g. 35,000"
                    className="w-full min-h-[48px] pl-8 pr-3.5 rounded-xl border hm-border-rule text-sm font-semibold hm-text-ink focus:outline-none hm-focus-border focus:ring-1 hm-focus"
                  />
                </div>
                <p className="text-[10px] hm-text-muted">
                  Must be deposited directly into bank account (min ₹20,000).
                </p>
                {errors.salary && (
                  <p className="text-[11px] hm-text-coral font-medium flex items-center gap-1 mt-0.5">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errors.salary}</span>
                  </p>
                )}
              </div>

              {/* Repayment Days Selector */}
              <div className="space-y-1.5 pt-1">
                <label className="block text-xs font-bold hm-text-ink-soft">
                  Preferred Tenure (Single Repayment)
                </label>
                <div role="radiogroup" className="grid grid-cols-3 gap-2">
                  {([30, 40, 50] as const).map((d) => (
                    <button
                      key={d}
                      type="button"
                      role="radio"
                      aria-checked={days === d}
                      onClick={() => setDays(d)}
                      className={`min-h-[44px] py-2 px-2 rounded-xl text-xs font-bold transition-colors ${
                        days === d
                          ? "hm-primary hm-text-paper ring-2 hm-focus shadow-sm"
                          : "hm-bg-paper-deep hm-text-ink-soft hm-hover-paper-deep"
                      }`}
                    >
                      {d} Days
                    </button>
                  ))}
                </div>
              </div>

              {/* Explicit RBI Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded hm-text-blue hm-focus hm-border-rule"
                  />
                  <span className="text-[11px] hm-text-ink-soft leading-tight">
                    I authorize LoanCentral to verify my mobile via OTP and fetch preliminary loan eligibility via partner RBI-regulated NBFCs.
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-[11px] hm-text-coral font-medium flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errors.consent}</span>
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[48px] py-3.5 px-4 rounded-xl hm-primary hm-hover-primary active:scale-[0.99] hm-text-paper font-black text-sm flex items-center justify-center gap-2 shadow-lg hm-shadow-primary transition-colors"
                >
                  {isSubmitting ? (
                    <span>Verifying details...</span>
                  ) : (
                    <>
                      <span>Proceed with Verified Details</span>
                      <ArrowRight className="w-4 h-4 hm-text-coral" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-center hm-text-muted">
                Paperless digital e-KYC · No bureau check without explicit OTP
              </p>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
