"use client";

import React, { useState } from "react";
import CityLoanPage from "@/components/CityLoanPage";
import ApplyNowModal from "@/components/ApplyNowModal";

export default function JaipurLoanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CityLoanPage
        cityName="Jaipur"
        stateName="Rajasthan"
        avgApprovalTime="18 Minutes"
        highlights={[
          "Instant personal credit lines for salaried employees, business owners, and artisans in Jaipur.",
          "Simple digital onboarding requiring minimal documentation.",
          "Transparent fee structure with zero hidden subscription charges.",
          "Flexible EMI options tailored to your monthly cash flow."
        ]}
        popularSectors={[
          "Jewelry & Gemstone Exporting",
          "Handicrafts, Textiles & Retail Trading",
          "Tourism & Hospitality Management",
          "IT & BPO Services (Mahindra World City)"
        ]}
        onApplyClick={() => setIsModalOpen(true)}
      />
      <ApplyNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
