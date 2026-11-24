"use client";

import React from "react";
import { ShieldCheck, Award, Target, Landmark, CheckCircle, ArrowRight } from "lucide-react";
import ExperienceMarquee from "@/components/ExperienceMarquee";

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20 hm-bg-paper-soft space-y-16">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="px-3.5 py-1.5 rounded-full hm-bg-mint-soft border hm-border-mint hm-text-mint text-xs font-bold ">
          About LoanCentral
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold hm-text-ink max-w-4xl mx-auto leading-tight">
          Reimagining personal loans for Bharat with <span className="hm-text-blue">clarity &amp; trust.</span>
        </h1>

        <p className="hm-text-ink-soft text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          LoanCentral is a technology-led Lending Service Provider (LSP) dedicated to providing borrowers across India with a consent-first, transparent, and phone-friendly loan journey.
        </p>
      </section>

      {/* Mission & Vision Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 rounded-3xl hm-bg-card border hm-border-rule shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl hm-bg-mint-soft hm-text-blue flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold hm-text-ink">Our Mission</h2>
            <p className="hm-text-ink-soft text-sm leading-relaxed">
              To eliminate financial opacity and predatory practices from instant digital lending by providing transparent EMI previews, zero hidden subscription fees, and consent-first credit bureau checks.
            </p>
          </div>

          <div className="p-8 rounded-3xl hm-bg-card border hm-border-rule shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl hm-bg-blue-soft hm-text-blue flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold hm-text-ink">Our Operating Model</h2>
            <p className="hm-text-ink-soft text-sm leading-relaxed">
              As a Lending Service Provider (LSP), LoanCentral builds the digital user interface, document onboarding, and consent infrastructure while partner RBI-regulated NBFCs execute underwriting, approval, and loan disbursal.
            </p>
          </div>

        </div>
      </section>

      {/* Core Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hm-bg-card rounded-3xl p-8 sm:p-12 hm-text-ink border hm-border-rule shadow-lg space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold hm-text-ink">Our Core Commitments</h2>
            <p className="hm-text-ink-soft text-sm">Every screen in our application is built around borrower respect and regulatory adherence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl hm-bg-blue-soft border hm-border-blue space-y-2">
              <ShieldCheck className="w-8 h-8 hm-text-blue" />
              <h3 className="text-lg font-bold hm-text-ink">Consent-First Data</h3>
              <p className="text-xs hm-text-ink-soft leading-relaxed">
                We never access credit bureau records or financial data without explicit user OTP approval.
              </p>
            </div>

            <div className="p-6 rounded-2xl hm-bg-blue-soft border hm-border-blue space-y-2">
              <Landmark className="w-8 h-8 hm-text-blue" />
              <h3 className="text-lg font-bold hm-text-ink">Regulated NBFC Partners</h3>
              <p className="text-xs hm-text-ink-soft leading-relaxed">
                Loans are originated solely by RBI-registered NBFC lenders with published registration details.
              </p>
            </div>

            <div className="p-6 rounded-2xl hm-bg-blue-soft border hm-border-blue space-y-2">
              <CheckCircle className="w-8 h-8 hm-text-blue" />
              <h3 className="text-lg font-bold hm-text-ink">Zero Hidden Charges</h3>
              <p className="text-xs hm-text-ink-soft leading-relaxed">
                Every fee, APR percentage, processing charge, and repayment date is shown prior to contract signing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Pedigree Marquee */}
      <ExperienceMarquee />

      {/* Call to action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div className="p-10 rounded-3xl hm-bg-card border hm-border-rule shadow-sm space-y-4">
          <h2 className="text-2xl font-bold hm-text-ink">Ready to experience transparent personal loans?</h2>
          <p className="hm-text-ink-soft text-sm max-w-md mx-auto">
            Check your eligibility in under 2 minutes with no bureau pull without consent.
          </p>
          <div>
            <a
              href="https://apply.credit91.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl hm-primary hm-text-paper font-bold text-sm shadow-md hm-hover-primary transition-colors"
            >
              <span>Apply now</span>
              <ArrowRight className="w-4 h-4 hm-text-blue" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
