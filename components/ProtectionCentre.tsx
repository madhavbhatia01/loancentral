"use client";

import React, { useState } from "react";
import { ShieldCheck, AlertTriangle, Building2, PhoneCall, Clock, CheckCircle2, Lock, FileText, ChevronRight } from "lucide-react";

export default function ProtectionCentre() {
  const [activeTab, setActiveTab] = useState<"safety" | "lenders" | "rights">("safety");

  const partners = [
    {
      name: "NDX P2P Liquiloans Ltd.",
      type: "RBI-Regulated NBFC-P2P",
      rbiNumber: "N-14.03456",
      role: "Principal Underwriting & Disbursal Partner",
      tenures: "30, 40, 50 Days",
      nodalOfficer: "grievance-liquiloans@loancentral.in",
      coolingOff: "3 Days look-up period with zero penalty",
    },
    {
      name: "Fintree Finance Pvt. Ltd.",
      type: "RBI-Registered NBFC",
      rbiNumber: "B-05.05921",
      role: "Salaried Credit Facility Partner",
      tenures: "30, 40, 50 Days",
      nodalOfficer: "grievance-fintree@loancentral.in",
      coolingOff: "3 Days look-up period with zero penalty",
    },
  ];

  const safetyChecklist = [
    {
      title: "Zero Upfront Fees",
      desc: "LoanCentral and our NBFC partners NEVER ask for advance processing fees, GST deposits, or 'file charges' via UPI or personal accounts.",
      safe: true,
    },
    {
      title: "No Contact Book or Photo Harvesting",
      desc: "Our apps operate strictly within RBI digital lending guidelines: we NEVER request access to your contact list, phone galleries, or private media files.",
      safe: true,
    },
    {
      title: "Explicit Consent for Credit Pulls",
      desc: "Your credit bureau records (Experian / CIBIL) are only accessed after you provide OTP-based explicit consent on the application screen.",
      safe: true,
    },
    {
      title: "3-Day Look-Up / Cooling-Off Period",
      desc: "Borrowers can exit the loan within the regulatory look-up window by returning the principal and proportionate APR with zero pre-payment penalties.",
      safe: true,
    },
  ];

  return (
    <section id="protection" className="py-14 sm:py-20 hm-bg-card border-b hm-border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full hm-bg-mint-soft border hm-border-mint hm-text-mint text-xs font-bold ">
            <ShieldCheck className="w-4 h-4 hm-text-mint" />
            <span>Borrower Protection &amp; Regulatory Compliance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black hm-text-ink tracking-tight">
            Protection Centre: Safe borrowing &amp; verified lenders.
          </h2>
          <p className="text-xs sm:text-sm hm-text-ink-soft leading-relaxed">
            In accordance with the Reserve Bank of India (RBI) Digital Lending Guidelines 2022, LoanCentral maintains complete transparency in lending operations, partner affiliations, and borrower redressal.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b hm-border-rule gap-2 sm:gap-6 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => setActiveTab("safety")}
            className={`pb-3 text-xs sm:text-sm font-bold whitespace-nowrap transition-colors border-b-2 ${
              activeTab === "safety"
                ? "hm-border-blue hm-text-blue"
                : "border-transparent hm-text-muted hm-hover-ink"
            }`}
          >
            Loan-App Safety Checker
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("lenders")}
            className={`pb-3 text-xs sm:text-sm font-bold whitespace-nowrap transition-colors border-b-2 ${
              activeTab === "lenders"
                ? "hm-border-blue hm-text-blue"
                : "border-transparent hm-text-muted hm-hover-ink"
            }`}
          >
            Verified Lender Directory
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("rights")}
            className={`pb-3 text-xs sm:text-sm font-bold whitespace-nowrap transition-colors border-b-2 ${
              activeTab === "rights"
                ? "hm-border-blue hm-text-blue"
                : "border-transparent hm-text-muted hm-hover-ink"
            }`}
          >
            Borrower Rights &amp; Grievance Redressal
          </button>
        </div>

        {/* Tab Content: Safety Checker */}
        {activeTab === "safety" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {safetyChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl hm-bg-paper-soft border hm-border-rule space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 hm-text-mint flex-shrink-0" />
                    <h3 className="text-sm font-bold hm-text-ink">{item.title}</h3>
                  </div>
                  <p className="text-xs hm-text-ink-soft leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Warning callout for predatory apps */}
            <div className="p-4 sm:p-5 rounded-2xl hm-bg-pear-soft border hm-border-pear flex items-start gap-3.5">
              <AlertTriangle className="w-5 h-5 hm-text-coral flex-shrink-0 mt-0.5" />
              <div className="text-xs hm-text-coral space-y-1">
                <strong>Warning Against Illegal 7-Day Loan Apps:</strong>
                <p className="hm-text-coral leading-relaxed">
                  Never install loan APKs from unofficial links, social media groups, or WhatsApp messages. Legitimate RBI-regulated lenders operate on minimum 30-day tenures, never ask for contact access, and disburse solely into verified bank accounts with standard KFS (Key Fact Statement) documents.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Lender Directory */}
        {activeTab === "lenders" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl hm-bg-paper-soft border hm-border-rule space-y-4"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold hm-text-blue px-2 py-0.5 rounded hm-bg-blue-soft border hm-border-blue">
                        {partner.type}
                      </span>
                      <h3 className="text-base font-bold hm-text-ink mt-2">{partner.name}</h3>
                      <div className="text-xs hm-text-muted font-mono mt-0.5">RBI Reg No: {partner.rbiNumber}</div>
                    </div>
                    <Building2 className="w-6 h-6 hm-text-muted" />
                  </div>

                  <div className="space-y-2 text-xs hm-text-ink-soft border-t hm-border-rule pt-3">
                    <div className="flex justify-between">
                      <span className="hm-text-muted">Role:</span>
                      <strong className="hm-text-ink-soft">{partner.role}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="hm-text-muted">Supported Tenures:</span>
                      <strong className="hm-text-ink-soft">{partner.tenures}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="hm-text-muted">Cooling-Off Period:</span>
                      <strong className="hm-text-mint">{partner.coolingOff}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="hm-text-muted">Nodal Grievance:</span>
                      <span className="font-mono hm-text-blue">{partner.nodalOfficer}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-xs hm-text-muted hm-bg-paper-deep p-4 rounded-xl">
              <strong>LSP Role Clarification:</strong> LoanCentral acts exclusively as a technology-enabled Lending Service Provider (LSP). Loan underwriting, sanction limits, annual percentage rates (APR), and loan disbursement remain within the sole regulatory purview of our partner NBFCs.
            </div>
          </div>
        )}

        {/* Tab Content: Borrower Rights */}
        {activeTab === "rights" && (
          <div className="p-6 rounded-3xl hm-bg-paper-soft border hm-border-rule space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl hm-bg-card border hm-border-rule space-y-2">
                <div className="hm-text-blue font-bold text-xs flex items-center gap-1.5">
                  <FileText className="w-4 h-4" />
                  <span>Key Fact Statement (KFS)</span>
                </div>
                <p className="text-xs hm-text-ink-soft leading-relaxed">
                  Borrowers receive an official KFS before loan sanction detailing total interest, APR, recovery terms, and zero hidden charges.
                </p>
              </div>

              <div className="p-4 rounded-2xl hm-bg-card border hm-border-rule space-y-2">
                <div className="hm-text-blue font-bold text-xs flex items-center gap-1.5">
                  <Lock className="w-4 h-4" />
                  <span>Data Privacy &amp; Deletion</span>
                </div>
                <p className="text-xs hm-text-ink-soft leading-relaxed">
                  You retain the right to revoke consent and request data deletion after loan settlement as per Digital Personal Data Protection (DPDP) Act.
                </p>
              </div>

              <div className="p-4 rounded-2xl hm-bg-card border hm-border-rule space-y-2">
                <div className="hm-text-blue font-bold text-xs flex items-center gap-1.5">
                  <PhoneCall className="w-4 h-4" />
                  <span>Fair Recovery Code</span>
                </div>
                <p className="text-xs hm-text-ink-soft leading-relaxed">
                  Zero harassment commitment. Recovery communications adhere strictly to RBI circulars (only between 08:00 hrs and 19:00 hrs).
                </p>
              </div>
            </div>

            {/* Grievance Escalation Mechanism */}
            <div className="p-4 rounded-2xl hm-bg-card border hm-border-rule flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div className="space-y-1">
                <div className="font-bold hm-text-ink">Have a concern or need help with a loan query?</div>
                <div className="hm-text-muted">Contact our Principal Grievance Redressal Officer: <strong className="hm-text-ink-soft">Mr. Amit Deshmukh</strong> (gro@loancentral.in)</div>
              </div>
              <a
                href="mailto:gro@loancentral.in"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl hm-bg-blue-soft hm-text-blue font-bold border hm-border-blue hm-hover-blue-soft transition-colors flex-shrink-0"
              >
                <span>Email Grievance Officer</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
