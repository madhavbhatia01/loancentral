"use client";

import React, { useState } from "react";
import CityLoanPage from "@/components/CityLoanPage";
import ApplyNowModal from "@/components/ApplyNowModal";

export default function KolkataLoanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CityLoanPage
        cityName="Kolkata"
        stateName="West Bengal"
        avgApprovalTime="15 Minutes"
        highlights={[
          "personal loans from ₹10,000 to ₹60,000 for salaried employees across Kolkata.",
          "Single bullet settlement at 30, 40, or 50 days.",
          "Paperless e-KYC with zero hidden charges.",
          "Direct transfer to salary bank account."
        ]}
        popularSectors={[
          "IT & ITES (Sector V, Salt Lake, Rajarhat New Town)",
          "Banking, Insurance & Public Sector Undertakings",
          "Logistics, FMCG & Manufacturing",
          "Healthcare & Academic Institutions"
        ]}
        onApplyClick={() => setIsModalOpen(true)}
      />
      <ApplyNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
