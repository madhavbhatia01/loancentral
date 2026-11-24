"use client";

import React, { useState } from "react";
import CityLoanPage from "@/components/CityLoanPage";
import ApplyNowModal from "@/components/ApplyNowModal";

export default function GurgaonLoanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CityLoanPage
        cityName="Gurgaon (Gurugram)"
        stateName="Haryana"
        avgApprovalTime="10 Minutes"
        highlights={[
          "personal loans from ₹10,000 to ₹60,000 for salaried corporate professionals in Cyber City and Golf Course Road.",
          "Single bullet settlement at 30, 40, or 50 days matching salary credit.",
          "Digital paperless onboarding with consent-first credit check.",
          "Instant money transfer upon e-mandate completion."
        ]}
        popularSectors={[
          "Multinational Corporations & Tech Giants (Cyber Hub, Udyog Vihar)",
          "Consulting, Audit & Advisory Firms",
          "Fintech, Startups & High-Growth Scaleups",
          "FMCG, Real Estate & Media"
        ]}
        onApplyClick={() => setIsModalOpen(true)}
      />
      <ApplyNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
