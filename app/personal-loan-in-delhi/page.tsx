"use client";

import React, { useState } from "react";
import CityLoanPage from "@/components/CityLoanPage";
import ApplyNowModal from "@/components/ApplyNowModal";

export default function DelhiLoanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CityLoanPage
        cityName="Delhi NCR"
        stateName="Delhi"
        avgApprovalTime="15 Minutes"
        highlights={[
          "Customized loan amounts from ₹10,000 to ₹3,000,000 for Delhi NCR residents.",
          "Fast phone-led e-KYC verification requiring only PAN and Aadhaar.",
          "100% transparent fee disclosure before contract signing.",
          "Zero upfront subscription charges or registration fees."
        ]}
        popularSectors={[
          "Government & PSU Employees",
          "Corporate & IT Professionals",
          "Retail & E-commerce Traders",
          "Consultants & Healthcare Specialists"
        ]}
        onApplyClick={() => setIsModalOpen(true)}
      />
      <ApplyNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
