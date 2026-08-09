"use client";

import React, { useState } from "react";
import CityLoanPage from "@/components/CityLoanPage";
import ApplyNowModal from "@/components/ApplyNowModal";

export default function NoidaLoanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CityLoanPage
        cityName="Noida"
        stateName="Uttar Pradesh"
        avgApprovalTime="12 Minutes"
        highlights={[
          "Instant personal credit lines designed for IT corridor and corporate employees in Noida & Greater Noida.",
          "Consent-first credit checks with no impact on credit score during initial eligibility preview.",
          "Flexible repayment tenures from 3 to 36 months.",
          "Fully digital online document upload with end-to-end 256-bit SSL encryption."
        ]}
        popularSectors={[
          "IT & Software Parks (Sector 62, 126, 135, 142)",
          "Media & Broadcasting Hubs",
          "Electronics Manufacturing Units",
          "Real Estate & Contracting Firms"
        ]}
        onApplyClick={() => setIsModalOpen(true)}
      />
      <ApplyNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
