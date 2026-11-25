import React from "react";
import Link from "next/link";
import LoanCentralLogo from "./LoanCentralLogo";
import { ShieldCheck, Scale } from "lucide-react";

export default function Footer() {
  const loanByCity = [
    { label: "Delhi", href: "/personal-loan-in-delhi" },
    { label: "Mumbai", href: "/personal-loan-in-mumbai" },
    { label: "Bangalore", href: "/personal-loan-in-bangalore" },
    { label: "Hyderabad", href: "/personal-loan-in-hyderabad" },
    { label: "Chennai", href: "/personal-loan-in-chennai" },
    { label: "Kolkata", href: "/personal-loan-in-kolkata" },
    { label: "Ahmedabad", href: "/personal-loan-in-ahmedabad" },
    { label: "Pune", href: "/personal-loan-in-pune" },
    { label: "Loans by Cities", href: "/loans-by-cities" },
  ];

  const loanBySalary = [
    { label: "Loan on ₹25K Salary", href: "/personal-loan-for-25k-salary" },
    { label: "Loan on ₹50K Salary", href: "/personal-loan-for-50k-salary" },
    { label: "Eligibility information", href: "/#eligibility" },
  ];

  const loanTypes = [
    { label: "Personal loan", href: "/personal-loan" },
    { label: "Medical emergency loan", href: "/medical-emergency-loan" },
    { label: "Wedding loan", href: "/wedding-loan" },
    { label: "Home repair loan", href: "/home-repair-loan" },
    { label: "Education loan", href: "/education-loan" },
    { label: "Travel loan", href: "/travel-loan" },
  ];

  const companyLinks = [
    { label: "About LoanCentral", href: "/about" },
    { label: "Careers & Team", href: "/careers" },
    { label: "Contact Support", href: "/contact" },
    { label: "Privacy Policy (DPDP)", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "LSP Regulatory Disclaimer", href: "/disclaimer" },
    { label: "HTML Sitemap", href: "/sitemap" },
  ];

  return (
    <footer
      className="bg-slate-50 text-slate-600 border-t border-slate-200 text-xs pb-32 sm:pb-24"
      style={{ backgroundColor: "#f8fafc", color: "#475569" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 space-y-12">
        
        {/* Top Brand Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-3">
            <Link href="/" aria-label="LoanCentral - Home" className="inline-block py-1">
              <LoanCentralLogo lightMode={false} size="lg" />
            </Link>
            <p className="text-slate-600 text-xs sm:text-[13px] max-w-lg leading-relaxed">
              India's transparent digital credit discovery platform for salaried professionals. Access personal, medical, wedding, home repair, education, and travel loans via RBI-regulated lending partners.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-2.5">
              <Scale className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <div className="text-[11px] leading-tight">
                <span className="text-slate-900 font-bold block">RBI Regulated NBFCs</span>
                <span className="text-slate-500">Official LSP compliant architecture</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <div className="text-[11px] leading-tight">
                <span className="text-slate-900 font-bold block">Consent-First Access</span>
                <span className="text-slate-500">No bureau pull without explicit OTP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Structured 4-Column Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          
          {/* Column 1: LOAN BY CITY */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
              LOAN BY CITY
            </h4>
            <ul className="space-y-2.5">
              {loanByCity.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors py-0.5 inline-block text-xs sm:text-[13px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: LOAN BY SALARY */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
              LOAN BY SALARY
            </h4>
            <ul className="space-y-2.5">
              {loanBySalary.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors py-0.5 inline-block text-xs sm:text-[13px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: LOAN TYPES */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
              LOAN TYPES
            </h4>
            <ul className="space-y-2.5">
              {loanTypes.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors py-0.5 inline-block text-xs sm:text-[13px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: COMPANY & LEGAL */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
              COMPANY &amp; LEGAL
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((cl, idx) => (
                <li key={idx}>
                  <Link
                    href={cl.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors py-0.5 inline-block text-xs sm:text-[13px]"
                  >
                    {cl.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Regulatory Disclosure Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 space-y-3 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-2 text-slate-700">
            <div className="flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Lending Service Provider (LSP) Transparency Disclosure</span>
            </div>
            <div className="text-slate-600 font-mono text-[10px]">
              RBI-Regulated NBFC Lending Partners
            </div>
          </div>

          <p className="leading-relaxed">
            LoanCentral Technologies operates strictly as a digital Lending Service Provider (LSP) under the regulatory framework of the Reserve Bank of India (RBI) Digital Lending Guidelines. LoanCentral is not a bank or Non-Banking Financial Company (NBFC) and does not directly lend funds. All credit limits, repayment tenures, annual percentage rates (APR), and final approvals are governed exclusively by partner regulated NBFCs based on underwriting criteria, completed DigiLocker e-KYC, and explicit borrower consent. Zero advance fees are ever collected.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-slate-200 text-slate-500 text-[10px]">
            <div>&copy; {new Date().getFullYear()} LoanCentral Technologies Pvt. Ltd. All rights reserved.</div>
            <div>Principal Grievance Redressal Officer: gro@loancentral.in · Support Hours: Mon–Sat 09:00–19:00 IST</div>
          </div>
        </div>

      </div>
    </footer>
  );
}
