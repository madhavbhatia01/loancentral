"use client";

import React, { useState } from "react";
import CityLoanPage from "@/components/CityLoanPage";
import ApplyNowModal from "@/components/ApplyNowModal";

export default function AhmedabadLoanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CityLoanPage
        cityName="Ahmedabad"
        stateName="Gujarat"
        avgApprovalTime="12 Minutes"
        highlights={[
          "personal loans from ₹10,000 to ₹60,000 for salaried professionals in Ahmedabad and GIFT City.",
          "Single bullet repayment on your salary date (30, 40, or 50 days).",
          "Consent-first verification: no bureau pull without OTP.",
          "Direct bank transfer in under 15 minutes upon approval."
        ]}
        popularSectors={[
          "Financial Services & FinTech (GIFT City)",
          "Pharmaceuticals & Healthcare (Changodar, Sanand)",
          "Textiles, Chemical & Industrial Corridors",
          "IT & Business Consulting (SG Highway, Prahlad Nagar)"
        ]}
        onApplyClick={() => setIsModalOpen(true)}
      />
      <ApplyNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
