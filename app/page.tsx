"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import ExperienceMarquee from "@/components/ExperienceMarquee";
import UseCases from "@/components/UseCases";
import ProcessSection from "@/components/ProcessSection";
import EMICalculator from "@/components/EMICalculator";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import ApplyNowModal from "@/components/ApplyNowModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-0">
      <Hero onApplyClick={handleOpenModal} />
      <ExperienceMarquee />
      <UseCases onApplyClick={handleOpenModal} />
      <ProcessSection onApplyClick={handleOpenModal} />
      <EMICalculator onApplyClick={handleOpenModal} />
      <TrustSection />
      <FAQSection />
      <FinalCTA onApplyClick={handleOpenModal} />
      <ApplyNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
