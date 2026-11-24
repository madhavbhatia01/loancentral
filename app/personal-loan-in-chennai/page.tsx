"use client";

import React, { useState } from "react";
import CityLoanPage from "@/components/CityLoanPage";
import ApplyNowModal from "@/components/ApplyNowModal";

export default function ChennaiLoanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CityLoanPage
        cityName="Chennai"
        stateName="Tamil Nadu"
        avgApprovalTime="12 Minutes"
        highlights={[
          "salaried personal loans from ₹10,000 to ₹60,000 across Chennai.",
          "Settle on your upcoming salary date in a single bullet repayment.",
          "Paperless e-KYC with zero branch visits.",
          "Disbursal from RBI-regulated NBFC partners directly to bank account."
        ]}
        popularSectors={[
          "IT & SaaS Companies (OMR, Guindy, Taramani)",
          "Automobile & Manufacturing Corridors (Sriperumbudur, Oragadam)",
          "Healthcare & Medical Devices",
          "Banking, Financial Services & FinTech"
        ]}
        onApplyClick={() => setIsModalOpen(true)}
      />
      <ApplyNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
