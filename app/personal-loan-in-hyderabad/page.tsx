"use client";

import React, { useState } from "react";
import CityLoanPage from "@/components/CityLoanPage";
import ApplyNowModal from "@/components/ApplyNowModal";

export default function HyderabadLoanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CityLoanPage
        cityName="Hyderabad"
        stateName="Telangana"
        avgApprovalTime="10 Minutes"
        highlights={[
          "personal loans from ₹10,000 to ₹60,000 for salaried tech and corporate professionals in Hyderabad.",
          "Single bullet settlement at 30, 40, or 50 days matching your monthly salary deposit.",
          "Paperless Aadhaar e-KYC and digital bank verification.",
          "Zero hidden platform fees and consent-first credit verification."
        ]}
        popularSectors={[
          "IT & Software (HITEC City, Gachibowli, Madhapur)",
          "Pharmaceutical & Biotech Hubs",
          "Financial Services & Global Capability Centers",
          "E-Commerce & Digital Media"
        ]}
        onApplyClick={() => setIsModalOpen(true)}
      />
      <ApplyNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
