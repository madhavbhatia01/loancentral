"use client";

import React, { useState } from "react";
import CityLoanPage from "@/components/CityLoanPage";
import ApplyNowModal from "@/components/ApplyNowModal";

export default function BangaloreLoanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CityLoanPage
        cityName="Bangalore"
        stateName="Karnataka"
        avgApprovalTime="10 Minutes"
        highlights={[
          "Ultra-fast digital loan processing for techies, startup employees, and business leaders in Bengaluru.",
          "Zero physical paperwork — complete digital KYC and bank e-mandate in minutes.",
          "Transparent reducing-balance interest rates with clear monthly EMI schedules.",
          "Direct disbursal into your primary salary account upon partner NBFC approval."
        ]}
        popularSectors={[
          "IT & Software Companies (Outer Ring Road, Electronic City, Whitefield)",
          "Tech Startups & Unicorns",
          "Biotech & R&D Hubs",
          "Financial Services & Analytics"
        ]}
        onApplyClick={() => setIsModalOpen(true)}
      />
      <ApplyNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
