"use client";

import React, { useState } from "react";
import { Briefcase, Code, ShieldCheck, Heart, Sparkles, ArrowRight } from "lucide-react";

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const openRoles = [
    {
      id: "eng-01",
      title: "Senior Full Stack Engineer (Next.js & Node.js)",
      department: "Engineering",
      location: "Remote / Hybrid (India)",
      type: "Full-Time",
      desc: "Build high-throughput consent-first digital loan journeys, web apps, and API integrations with RBI-regulated NBFC core systems.",
    },
    {
      id: "risk-01",
      title: "Credit Risk & Operations Manager",
      department: "Risk & Compliance",
      location: "Hybrid (India)",
      type: "Full-Time",
      desc: "Architect risk scoring parameters, LSP compliance audits, and partner NBFC policy alignment for instant personal loans.",
    },
    {
      id: "pm-01",
      title: "Lead Product Manager (Borrower Journey)",
      department: "Product",
      location: "Remote / Hybrid (India)",
      type: "Full-Time",
      desc: "Own end-to-end UX clarity, mobile application conversion funnels, and transparent loan repayment calculators.",
    },
    {
      id: "ops-01",
      title: "Customer Success & Grievance Specialist",
      department: "Operations",
      location: "Remote (India)",
      type: "Full-Time",
      desc: "Guide borrowers through document verification, answer cost questions pre-acceptance, and resolve customer queries.",
    },
  ];

  return (
    <div className="py-12 md:py-20 hm-bg-paper-soft space-y-16">
      
      {/* Careers Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="px-3.5 py-1.5 rounded-full hm-bg-mint-soft border hm-border-mint hm-text-mint text-xs font-bold ">
          Careers at LoanCentral
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold hm-text-ink max-w-3xl mx-auto leading-tight">
          Build the future of <span className="hm-text-blue">transparent fintech</span> for Bharat.
        </h1>

        <p className="hm-text-ink-soft text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Join a high-performing team of engineers, operators, and risk specialists building transparent digital lending software that respects borrowers.
        </p>
      </section>

      {/* Culture Perks Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl hm-bg-card border hm-border-rule shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl hm-bg-mint-soft hm-text-blue flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold hm-text-ink">Impact First</h3>
            <p className="text-xs hm-text-ink-soft leading-relaxed">
              Work directly on products that provide fair cash-flow access to millions of borrowers across tier-1, tier-2, and tier-3 cities in India.
            </p>
          </div>

          <div className="p-6 rounded-2xl hm-bg-card border hm-border-rule shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl hm-bg-blue-soft hm-text-blue flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold hm-text-ink">Modern Tech Stack</h3>
            <p className="text-xs hm-text-ink-soft leading-relaxed">
              Build using React 19, Next.js App Router, TypeScript, Turbopack, and cloud-native microservices engineered for sub-second responses.
            </p>
          </div>

          <div className="p-6 rounded-2xl hm-bg-card border hm-border-rule shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl hm-bg-mint-soft hm-text-blue flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold hm-text-ink">Ownership &amp; Flexibility</h3>
            <p className="text-xs hm-text-ink-soft leading-relaxed">
              Competitive compensation, remote-first flexibility, health benefits, and a culture of radical transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold hm-text-ink">Open Positions</h2>
            <p className="hm-text-ink-soft text-sm">Explore opportunities to join LoanCentral.</p>
          </div>
          <span className="text-xs font-bold hm-text-mint hm-bg-mint-soft px-3 py-1.5 rounded-full border hm-border-mint w-fit">
            {openRoles.length} Active Positions
          </span>
        </div>

        <div className="space-y-4">
          {openRoles.map((role) => (
            <div
              key={role.id}
              className="p-6 rounded-2xl hm-bg-card border hm-border-rule shadow-sm hm-hover-border-blue hover:shadow-md transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md hm-bg-paper-deep hm-text-ink-soft font-semibold text-[11px]">
                    {role.department}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md hm-bg-paper-deep hm-text-ink-soft font-semibold text-[11px]">
                    {role.location}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md hm-bg-mint-soft hm-text-mint font-semibold text-[11px]">
                    {role.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold hm-text-ink">{role.title}</h3>
                <p className="text-xs hm-text-ink-soft leading-relaxed">{role.desc}</p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setSelectedRole(role.title)}
                  className="px-6 py-2.5 rounded-xl hm-primary hm-hover-primary hm-text-paper font-semibold text-xs flex items-center gap-2 transition-colors whitespace-nowrap"
                >
                  <span>Apply for Role</span>
                  <ArrowRight className="w-4 h-4 hm-text-blue" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Modal Popup for Job Seekers */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 hm-bg-overlay backdrop-blur-md">
          <div className="hm-bg-card rounded-2xl p-6 sm:p-8 max-w-md w-full border hm-border-rule shadow-2xl space-y-4">
            <h3 className="text-xl font-bold hm-text-ink">
              Apply for {selectedRole}
            </h3>
            <p className="text-xs hm-text-ink-soft leading-relaxed">
              Our career portal is currently being synchronized. Direct online job application forms will open shortly.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setSelectedRole(null)}
                className="w-full py-2.5 hm-primary hm-text-paper rounded-xl font-semibold text-xs hm-hover-primary transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
