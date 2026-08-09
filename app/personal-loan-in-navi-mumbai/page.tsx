"use client";

import React, { useState } from "react";
import CityLoanPage from "@/components/CityLoanPage";
import ApplyNowModal from "@/components/ApplyNowModal";

export default function NaviMumbaiLoanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CityLoanPage
        cityName="Navi Mumbai"
        stateName="Maharashtra"
        avgApprovalTime="15 Minutes"
        highlights={[
          "Instant digital personal loans for residents and workforce across Vashi, Belapur, Airoli, and Thane.",
          "Consent-first verification — no credit checks without your explicit approval.",
          "Complete clarity on APR, monthly EMI, and total loan cost before acceptance.",
          "Quick online document upload for PAN, Aadhaar e-KYC, and bank statements."
        ]}
        popularSectors={[
          "IT & Knowledge Parks (Mindspace Airoli, Mahape)",
          "Logistics & Port Authorities (JNPT Corridor)",
          "Chemicals & Industrial Units (TTC Industrial Area)",
          "Retail & Hospitality Services"
        ]}
        onApplyClick={() => setIsModalOpen(true)}
      />
      <ApplyNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
