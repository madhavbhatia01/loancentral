import React from "react";
import Link from "next/link";
import LoanCentralLogo from "./LoanCentralLogo";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050C1A] text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" aria-label="LoanCentral Home">
              <LoanCentralLogo lightMode={true} size="md" />
            </Link>
            
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Consent-first digital personal loan platform connecting borrowers with RBI-regulated NBFC partners.
            </p>

            <div className="text-[11px] text-slate-500 font-medium pt-1">
              &copy; {new Date().getFullYear()} LoanCentral Technologies. All rights reserved.
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-[#00C9A7] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#00C9A7] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00C9A7] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-[#00C9A7] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#00C9A7] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-[#00C9A7] transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Geographies / Cities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Geographies</h4>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <Link href="/personal-loan-in-delhi" className="hover:text-[#00C9A7] transition-colors">
                Delhi
              </Link>
              <Link href="/personal-loan-in-noida" className="hover:text-[#00C9A7] transition-colors">
                Noida
              </Link>
              <Link href="/personal-loan-in-bangalore" className="hover:text-[#00C9A7] transition-colors">
                Bangalore
              </Link>
              <Link href="/personal-loan-in-mumbai" className="hover:text-[#00C9A7] transition-colors">
                Mumbai
              </Link>
              <Link href="/personal-loan-in-pune" className="hover:text-[#00C9A7] transition-colors">
                Pune
              </Link>
              <Link href="/personal-loan-in-navi-mumbai" className="hover:text-[#00C9A7] transition-colors">
                Navi Mumbai
              </Link>
              <Link href="/personal-loan-in-jaipur" className="hover:text-[#00C9A7] transition-colors">
                Jaipur
              </Link>
            </div>
          </div>

        </div>

        {/* Regulatory Disclosure Bottom Bar (Strictly NO contact phone/email/office address!) */}
        <div className="mt-10 pt-6 border-t border-slate-800 space-y-2 text-[11px] text-slate-500">
          <div className="flex items-center gap-1.5 text-slate-300 font-bold">
            <ShieldCheck className="w-4 h-4 text-[#00C9A7]" />
            <span>Lending Service Provider Disclosure</span>
          </div>

          <p className="leading-relaxed">
            LoanCentral operates as a Lending Service Provider (LSP) in partnership with RBI-regulated NBFCs. Loan approval, amount, tenure, rate, fees, and disbursal are subject to eligibility, partner lender credit policy, completed documentation, and explicit customer consent.
          </p>
        </div>

      </div>
    </footer>
  );
}
