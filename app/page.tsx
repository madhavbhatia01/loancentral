"use client";

import React from "react";
import Hero from "@/components/Hero";
import ExperienceMarquee from "@/components/ExperienceMarquee";
import ProcessSection from "@/components/ProcessSection";
import EMICalculator from "@/components/EMICalculator";
import EligibilitySection from "@/components/EligibilitySection";
import UseCases from "@/components/UseCases";
import ReviewsSection from "@/components/ReviewsSection";
import TrustSection from "@/components/TrustSection";
import ProtectionCentre from "@/components/ProtectionCentre";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  const handleApplyRedirect = () => {
    window.location.href = "https://apply.credit91.com";
  };

  return (
    <div className="space-y-0 ">
      {/* 1. Mobile-First Hero: Eyebrow, Heading, Main Hero Banner Picture, Facts, CTA, Estimator */}
      <Hero onApplyClick={handleApplyRedirect} />

      {/* Trust & Credibility Leadership Banner */}
      <ExperienceMarquee />

      {/* 2. How It Works (4 transparent steps) */}
      <ProcessSection onApplyClick={handleApplyRedirect} />

      {/* Interactive Personal Loan & EMI Calculator */}
      <EMICalculator onApplyClick={handleApplyRedirect} />

      {/* 3. Eligibility Criteria (Salaried only, 21-55 yrs, ₹30K+ net salary, e-KYC) */}
      <EligibilitySection onApplyClick={handleApplyRedirect} />

      {/* 4. Use Cases (Urgent expenses, medical, bills, repairs) */}
      <UseCases onApplyClick={handleApplyRedirect} />

      {/* 5. Customer Reviews & Ratings (14,800+ verified salaried borrowers across India) */}
      <ReviewsSection />

      {/* 6. Trust and Transparency (Stacked comparison on mobile, clean table on desktop) */}
      <TrustSection />

      {/* 7. Protection Centre & Loan-App Safety Checker (RBI compliance, verified lenders) */}
      <ProtectionCentre />

      {/* 8. Blog Cards (1 card/row on mobile, 16:9 watermarked imagery, guides) */}
      <BlogSection />

      {/* 9. FAQ (Single-column accessible accordion with aria tags) */}
      <FAQSection />

      {/* 10. Final CTA (Full-width mobile action) */}
      <FinalCTA onApplyClick={handleApplyRedirect} />
    </div>
  );
}
