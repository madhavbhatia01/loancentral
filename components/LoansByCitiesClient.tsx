"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { CITIES, CityRegion } from "@/src/data/cities";

const REGIONS: Array<"All" | CityRegion> = [
  "All",
  "North",
  "West",
  "South",
  "East",
  "Central",
];

export default function LoansByCitiesClient() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<"All" | CityRegion>("All");
  const [visibleCount, setVisibleCount] = useState(5);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CITIES.filter((c) => {
      const matchesRegion = region === "All" || c.region === region;
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.state.toLowerCase().includes(q);
      return matchesRegion && matchesQuery;
    });
  }, [query, region]);

  return (
    <div className="space-y-6">
      {/* City Reference Articles Grid */}
      <section aria-labelledby="city-guides-heading" className="space-y-4">
        <div className="space-y-1">
          <h2
            id="city-guides-heading"
            className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight"
          >
            City Reference Guides
          </h2>
          <p className="text-sm text-slate-600">
            Pick a city for eligibility, documents, and EMI guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filtered.slice(0, visibleCount).map((city) => (
            <Link
              key={city.slug}
              href={`/personal-loan-in-${city.slug}`}
              className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md hover:border-blue-300 transition-all grid grid-cols-[104px_1fr] sm:flex sm:flex-col min-h-[104px]"
            >
              <div className="relative h-full min-h-[104px] sm:h-auto sm:aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={`/images/cities/${city.slug}-card.webp`}
                  alt={`Salaried personal loan guide for ${city.name}, ${city.state}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center sm:justify-between gap-2">
                <div>
                  <div className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-slate-500 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span>
                      {city.state} · {city.region}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                    Personal Loan in {city.name}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600">
                  <span>Read city guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {visibleCount < filtered.length && (
          <div className="flex justify-center pt-1">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + 5)}
              className="min-h-[44px] px-6 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-700 transition-colors"
            >
              See 5 more cities
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-10 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm font-bold text-slate-800">
              No cities matched your search.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setRegion("All");
              }}
              className="mt-3 min-h-[44px] px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>

      {/* Search & Region Filter placed at the bottom as requested */}
      <section
        aria-label="Filter cities"
        className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs"
      >
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisibleCount(5);
            }}
            placeholder="Search city or state..."
            aria-label="Search city or state"
            className="w-full min-h-[44px] pl-10 pr-4 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div
          role="tablist"
          aria-label="Filter cities by region"
          className="flex flex-wrap gap-2"
        >
          {REGIONS.map((r) => (
            <button
              key={r}
              type="button"
              role="tab"
              aria-selected={region === r}
              onClick={() => {
                setRegion(r);
                setVisibleCount(5);
              }}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
                region === r
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
