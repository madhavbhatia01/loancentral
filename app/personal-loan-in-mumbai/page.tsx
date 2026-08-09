"use client";

import React, { useState } from "react";
import CityLoanPage from "@/components/CityLoanPage";
import ApplyNowModal from "@/components/ApplyNowModal";

export default function MumbaiLoanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CityLoanPage
        cityName="Mumbai"
        stateName="Maharashtra"
        avgApprovalTime="15 Minutes"
        highlights={[
          "Fast emergency cash-flow support for Mumbai's fast-paced corporate and financial sector workforce.",
          "Clear disclosure of processing fees, APR percentage, and penalty charges upfront.",
          "Consent-first credit bureau checks — no unwanted calls or telemarketing spam.",
          "Resumable mobile application flow accessible 24/7 on smartphone."
        ]}
        popularSectors={[
          "Banking, Financial Services & Insurance (BKC, Lower Parel)",
          "Media, Advertising & Entertainment",
          "Shipping & International Trade",
          "Healthcare & Pharmaceuticals"
        ]}
        onApplyClick={() => setIsModalOpen(true)}
      />
      <ApplyNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
