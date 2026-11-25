"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileStickyCTA from "./MobileStickyCTA";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleApplyRedirect = () => {
    window.location.href = "https://apply.credit91.com?utm_source=loancentral&utm_medium=website&utm_campaign=loancentral_layout";
  };

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      {/* 1. Sticky Header with Accessible Mobile Drawer */}
      <Navbar onApplyClick={handleApplyRedirect} onMenuToggle={setIsMenuOpen} />

      {/* Main Content Sections */}
      <main className="flex-grow w-full overflow-x-hidden">{children}</main>

      {/* 16. Footer */}
      <Footer />

      {/* 17. Mobile Sticky Application Bar (Hidden when drawer is open) */}
      <MobileStickyCTA onApplyClick={handleApplyRedirect} isMenuOpen={isMenuOpen} />
    </div>
  );
}
