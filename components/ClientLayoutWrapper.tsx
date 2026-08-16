"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleApplyRedirect = () => {
    window.location.href = "https://apply.credit91.com";
  };

  return (
    <>
      <Navbar onApplyClick={handleApplyRedirect} />
      <main className="flex-grow">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { onApplyClick: handleApplyRedirect } as any);
          }
          return child;
        })}
      </main>
      <Footer />
    </>
  );
}
