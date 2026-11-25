"use client";

import React, { useState } from "react";
import CityLoanPage from "@/components/CityLoanPage";
import ApplyNowModal from "@/components/ApplyNowModal";

export default function MumbaiPageContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const highlights = [
  "Transparent personal credit from ₹10,000 to ₹60,000 for salaried Mumbai professionals (min. ₹30,000 salary).",
  "Single bullet repayment across flexible tenures from 7 days up to 40–50 days timed to salary schedule.",
  "Paperless DigiLocker e-KYC and digital bank verification within minutes.",
  "100% upfront disclosure of APR and fees with zero advance fees.",
  "Disbursals executed directly into salary accounts by lending partner Credit 91."
];
  const popularSectors = [
  "Banking, Financial Services & Insurance (BKC, Lower Parel)",
  "Media, Advertising & Entertainment (Andheri, Goregaon)",
  "Corporate Headquarters & Conglomerates (Nariman Point)",
  "Shipping, Logistics & International Trade",
  "Pharmaceuticals & Healthcare (Thane, Worli)",
  "Tech Parks & IT Services (Powai, Airoli)"
];

  return (
    <>
      <CityLoanPage
        cityName="Mumbai"
        stateName="Maharashtra"
        landmark="Gateway of India"
        heroImageSrc="/images/mumbai-hero.webp"
        highlights={highlights}
        popularSectors={popularSectors}
        onApplyClick={() => setIsModalOpen(true)}
      />
      <ApplyNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
