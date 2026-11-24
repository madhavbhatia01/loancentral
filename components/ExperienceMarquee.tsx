import React from "react";
import { Building2, GraduationCap, Landmark } from "lucide-react";

export default function ExperienceMarquee() {
  const experiences = [
    { name: "ICICI Bank", category: "Banking", icon: Landmark },
    { name: "Flipkart", category: "E-Commerce", icon: Building2 },
    { name: "Airtel", category: "Telecom", icon: Building2 },
    { name: "Disney Hotstar", category: "Consumer Tech", icon: Building2 },
    { name: "RBS", category: "Global Banking", icon: Landmark },
    { name: "Swiggy", category: "Hyperlocal", icon: Building2 },
    { name: "Snapdeal", category: "E-Commerce", icon: Building2 },
    { name: "IIT Delhi", category: "Technology Alum", icon: GraduationCap },
    { name: "IIM Rohtak", category: "Management Alum", icon: GraduationCap },
    { name: "NSUT Delhi", category: "Engineering Alum", icon: GraduationCap },
  ];

  return (
    <section className="py-10 sm:py-14 hm-bg-paper-deep border-y hm-border-rule hm-text-ink-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] sm:text-xs font-semibold tracking-[0.18em] hm-text-muted mb-6 sm:mb-8">
          Our Leadership &amp; Engineering Team Brings Deep Experience From:
        </p>

        {/* 2 cols on mobile with compact gap to prevent 320px overflow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-4">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl hm-bg-card border hm-border-rule hm-hover-border-blue transition-colors duration-200 group shadow-xs"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg hm-bg-blue-soft flex items-center justify-center hm-text-blue group-hover:scale-105 transition-transform flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-bold hm-text-ink hm-group-text-blue transition-colors truncate">
                    {exp.name}
                  </h3>
                  <span className="text-[10px] hm-text-muted block truncate">{exp.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
