import React from "react";
import { Building2, GraduationCap, Landmark, ShieldAlert, Award } from "lucide-react";

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
    <section className="py-12 bg-slate-900 border-y border-slate-800 text-slate-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-8">
          Our Leadership &amp; Engineering Team Brings Deep Experience From:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-[#00C9A7]/50 hover:bg-slate-800 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-[#00C9A7] group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white group-hover:text-[#00C9A7] transition-colors">
                    {exp.name}
                  </h4>
                  <span className="text-[10px] text-slate-400">{exp.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
