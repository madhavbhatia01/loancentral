"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ApplyNowModal from "./ApplyNowModal";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const handleOpenApplyModal = () => {
    setIsApplyModalOpen(true);
  };

  const handleCloseApplyModal = () => {
    setIsApplyModalOpen(false);
  };

  return (
    <>
      <Navbar onApplyClick={handleOpenApplyModal} />
      <main className="flex-grow">
        {/* Pass onApplyClick to children elements if needed via context or standard props */}
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { onApplyClick: handleOpenApplyModal } as any);
          }
          return child;
        })}
      </main>
      <Footer />
      <ApplyNowModal isOpen={isApplyModalOpen} onClose={handleCloseApplyModal} />
    </>
  );
}
