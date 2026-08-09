import React from "react";
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Title */}
        <div className="space-y-3 text-center sm:text-left">
          <span className="px-3.5 py-1 rounded-full bg-teal-100/80 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            Legal &amp; Data Protection
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C]">
            Consent-First Privacy Policy
          </h1>
          <p className="text-xs text-slate-500">
            Last Updated: August 2026 | Compliant with RBI Digital Lending Guidelines
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8 text-slate-700 text-xs sm:text-sm leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B192C] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#00C9A7]" />
              1. Introduction &amp; Scope
            </h2>
            <p>
              LoanCentral Technologies (&quot;LoanCentral&quot;, &quot;We&quot;, &quot;Us&quot;) operates strictly as a digital Lending Service Provider (LSP). This Privacy Policy explains how we collect, process, encrypt, and safeguard your personal and financial data when you use our website or mobile application flow to apply for instant personal loans offered by our RBI-regulated NBFC partners.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B192C] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#00B4D8]" />
              2. Consent-First Data Collection Standard
            </h2>
            <p>
              In accordance with the Reserve Bank of India (RBI) Regulatory Framework for Digital Lending, LoanCentral enforces a strict <strong>Consent-First Architecture</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>No credit bureau score (CIBIL/Experian) check is initiated without explicit user OTP authentication.</li>
              <li>We do not collect call logs, contact lists, or unneeded device storage permissions.</li>
              <li>Identity credentials (PAN, Aadhaar e-KYC), income proof, and bank statements are uploaded only with user authorization.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B192C] flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#00C9A7]" />
              3. Purpose of Data Usage
            </h2>
            <p>
              Data collected through the LoanCentral application flow is utilized exclusively for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Verifying borrower mobile identity and eligibility for credit evaluation.</li>
              <li>Generating transparent EMI, interest rate, and total loan payable calculations.</li>
              <li>Sharing required KYC records securely with our approved RBI-regulated NBFC partners for underwriting and loan disbursal.</li>
              <li>Preventing financial fraud, identity impersonation, and AML compliance risks.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B192C] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#00B4D8]" />
              4. Data Encryption &amp; Security Standards
            </h2>
            <p>
              All data transmitted through LoanCentral is encrypted end-to-end using TLS 1.3 and 256-bit SSL protocols. Stored records are maintained in restricted database environments hosted within Indian data sovereignty boundaries. We do not sell or monetize customer data to third-party telemarketers or external aggregators under any circumstances.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B192C] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#00C9A7]" />
              5. User Rights &amp; Data Erasure
            </h2>
            <p>
              Borrowers retain full rights under the Digital Personal Data Protection (DPDP) framework to request correction of inaccurate records or withdrawal of data consent after active loan obligation fulfillment. Consent withdrawal requests can be submitted via our customer support ticketing portal.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
