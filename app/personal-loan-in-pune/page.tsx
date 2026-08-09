"use client";

import React, { useState } from "react";
import CityLoanPage from "@/components/CityLoanPage";
import ApplyNowModal from "@/components/ApplyNowModal";

export default function PuneLoanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CityLoanPage
        cityName="Pune"
        stateName="Maharashtra"
        avgApprovalTime="14 Minutes"
        highlights={[
          "Tailored loan solutions for Pune's IT engineers, automotive professionals, and educational faculty.",
          "Simple 4-step mobile application process from eligibility check to agreement sign-off.",
          "Transparent repayment terms with reducing-balance EMI calculators.",
          "No hidden charges or mandatory insurance cross-selling."
        ]}
        popularSectors={[
          "IT & Technology Parks (Hinjawadi, Kharadi, Baner)",
          "Automotive & Heavy Manufacturing (Chakan, Pimpri-Chinchwad)",
          "Educational & Academic Institutions",
          "Biotech & Research Units"
        ]}
        onApplyClick={() => setIsModalOpen(true)}
      />
      <ApplyNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
