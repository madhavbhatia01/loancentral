"use client";

import React from "react";
import Hero from "@/components/Hero";
import ExperienceMarquee from "@/components/ExperienceMarquee";
import UseCases from "@/components/UseCases";
import ProcessSection from "@/components/ProcessSection";
import EMICalculator from "@/components/EMICalculator";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  const handleApplyRedirect = () => {
    window.location.href = "https://apply.credit91.com";
  };

  return (
    <div className="space-y-0">
      <Hero onApplyClick={handleApplyRedirect} />
      <ExperienceMarquee />
      <UseCases onApplyClick={handleApplyRedirect} />
      <ProcessSection onApplyClick={handleApplyRedirect} />
      <EMICalculator onApplyClick={handleApplyRedirect} />
      <TrustSection />
      <FAQSection />
      <FinalCTA onApplyClick={handleApplyRedirect} />
    </div>
  );
}
