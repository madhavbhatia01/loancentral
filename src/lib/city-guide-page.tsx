import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, ChevronRight, ShieldAlert } from "lucide-react";
import { CITIES, getCityBySlug, City } from "@/src/data/cities";
import { getCityArticle } from "@/src/data/city-articles";
import CityGuideClient from "@/components/CityGuideClient";

export type CityPageVariant =
  | "personal"
  | "instant-personal"
  | "instant"
  | "salary"
  | "urgent"
  | "emergency"
  | "quick-personal"
  | "online-personal"
  | "paperless-personal"
  | "digital-personal";

function cityPageLabel(variant: CityPageVariant) {
  if (variant === "instant-personal") return "Instant Personal Loan";
  if (variant === "instant") return "Instant Loan";
  if (variant === "salary") return "Salary Loan";
  if (variant === "urgent") return "Urgent Loan";
  if (variant === "emergency") return "Emergency Loan";
  if (variant === "quick-personal") return "Quick Personal Loan";
  if (variant === "online-personal") return "Online Personal Loan";
  if (variant === "paperless-personal") return "Paperless Personal Loan";
  if (variant === "digital-personal") return "Digital Personal Loan";
  return "Personal Loan";
}

function cityPagePrefix(variant: CityPageVariant) {
  const prefixes: Record<CityPageVariant, string> = {
    personal: "personal-loan",
    "instant-personal": "instant-personal-loan",
    instant: "instant-loan",
    salary: "salary-loan",
    urgent: "urgent-loan",
    emergency: "emergency-loan",
    "quick-personal": "quick-personal-loan",
    "online-personal": "online-personal-loan",
    "paperless-personal": "paperless-personal-loan",
    "digital-personal": "digital-personal-loan",
  };
  return prefixes[variant];
}

function cityPagePath(slug: string, variant: CityPageVariant, salary?: number) {
  const base = `/${cityPagePrefix(variant)}-in-${slug}`;
  return salary ? `${base}-for-${salary}-salary` : base;
}

export function buildCityMetadata(slug: string, variant: CityPageVariant = "personal", salary?: number): Metadata {
  const city = getCityBySlug(slug);
  if (!city) {
    return { title: "City Guide Not Found" };
  }

  const label = cityPageLabel(variant);
  const salaryText = salary ? ` for ₹${salary.toLocaleString("en-IN")} Salary` : "";
  const title = `${label} in ${city.name}${salaryText} | LoanCentral`;
  const description = salary
    ? `Explore personal loan options in ${city.name} for salaried professionals earning ₹${salary.toLocaleString("en-IN")} per month, with digital verification and clear next steps.`
    : `Explore ${label.toLowerCase()} options in ${city.name}, ${city.state}, with a fast digital journey, secure verification, and clear next steps.`;
  const relativeUrl = cityPagePath(city.slug, variant, salary);
  const url = `https://loancentral.in${relativeUrl}`;
  const ogImage = `https://loancentral.in/images/cities/${city.slug}-hero.webp`;

  return {
    title,
    description,
    keywords: [
      `instant personal loan in ${city.name}`,
      `instant loan in ${city.name}`,
      `personal loan in ${city.name}`,
      `salary loan in ${city.name}`,
      ...(salary ? [
        `personal loan in ${city.name} for ${salary} salary`,
        `loan on ${salary} salary in ${city.name}`,
        `${salary} salary personal loan ${city.name}`,
        `${label.toLowerCase()} in ${city.name} for ${salary} salary`,
      ] : []),
    ],
    alternates: {
      canonical: url,
      languages: {
        "en-IN": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: ogImage, width: 1280, height: 720, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function CityGuidePage({ slug, variant = "personal", salary }: { slug: string; variant?: CityPageVariant; salary?: number }) {
  const cityIndex = CITIES.findIndex((c) => c.slug === slug);
  if (cityIndex === -1) {
    notFound();
  }

  const city = CITIES[cityIndex];
  const article = getCityArticle(city, cityIndex);
  const nearbyCities: City[] = city.nearbyCities
    .map((s) => getCityBySlug(s))
    .filter((c): c is City => Boolean(c));

  const lastUpdated = new Date().toISOString().split("T")[0];
  const label = cityPageLabel(variant);
  const pageUrl = `https://loancentral.in${cityPagePath(city.slug, variant, salary)}`;
  const pageCampaign = cityPagePath(city.slug, variant, salary).replace(/^\//, "");
  const applyUrl = `https://apply.credit91.com/?utm_source=loancentral&utm_medium=website&utm_campaign=${encodeURIComponent(pageCampaign)}&utm_content=${encodeURIComponent(pageUrl)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: `${label} in ${city.name}${salary ? ` for ₹${salary.toLocaleString("en-IN")} Salary` : ""}`,
        inLanguage: "en-IN",
        about: { "@type": "Place", name: `${city.name}, ${city.state}` },
        areaServed: { "@type": "Place", name: `${city.name}, ${city.state}` },
        isPartOf: { "@type": "WebSite", url: "https://loancentral.in", name: "LoanCentral" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://loancentral.in/" },
          { "@type": "ListItem", position: 2, name: "Loans by Cities", item: "https://loancentral.in/loans-by-cities" },
          { "@type": "ListItem", position: 3, name: city.name, item: pageUrl },
        ],
      },
      {
        "@type": "Article",
        headline: `${label} in ${city.name}${salary ? ` for ₹${salary.toLocaleString("en-IN")} Salary` : ""}`,
        dateModified: lastUpdated,
        author: { "@type": "Organization", name: "LoanCentral Editorial Team" },
        publisher: { "@type": "Organization", name: "LoanCentral" },
      },
      {
        "@type": "FAQPage",
        mainEntity: article.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <main lang="en-IN" className="min-h-screen bg-slate-50 py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-slate-900 py-1">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/loans-by-cities" className="hover:text-slate-900 py-1">
            Loans by Cities
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900">{city.name}</span>
        </nav>

        <header className="space-y-5">
          <div className="space-y-2 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {label} in {city.name}{salary ? ` for ₹${salary.toLocaleString("en-IN")} Salary` : ""}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              By LoanCentral Editorial Team · Last updated {lastUpdated} ·{" "}
              <Link href="/about" className="text-blue-600 hover:underline">
                How we write this
              </Link>
            </p>
          </div>

          <div className="relative aspect-[16/9] w-full max-w-4xl rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src={`/images/cities/${city.slug}-hero.webp`}
              alt={`Salaried applicant in ${city.name}, ${city.state} holding a phone with loan approval confirmation`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          <ul className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
            {[
              "Fast digital application",
              "Simple eligibility review",
              "Secure document verification",
              "Clear offer before confirmation",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <a
            href={applyUrl}
            className="max-w-4xl min-h-[48px] rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-sm flex items-center justify-center gap-2 transition-colors"
          >
            Apply Now in {city.name} <ChevronRight className="w-4 h-4" />
          </a>

          <div className="max-w-4xl rounded-2xl border border-blue-200 bg-blue-50/70 p-5">
            <span className="text-xs font-black uppercase tracking-wider text-blue-700 block mb-1">
              Quick Answer
            </span>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
              {salary
                ? `${label} in ${city.name} for professionals earning ₹${salary.toLocaleString("en-IN")} per month offers a digital way to explore eligibility, verification, and available lender terms. Final approval and pricing depend on the applicant profile and lender assessment.`
                : `${label} in ${city.name} offers salaried professionals a digital application journey with secure verification and clear lender terms before confirmation.`}
            </p>
          </div>
        </header>

        <CityGuideClient
          sections={article.sections}
          faqs={article.faqs}
          nearbyCities={nearbyCities}
          cityName={city.name}
          loanLabel={label}
          salary={salary}
        />

        <footer className="space-y-4 pt-4 border-t border-slate-200 max-w-4xl">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 flex items-start gap-3 text-xs text-slate-700 leading-relaxed">
            <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Disclaimer:</strong> Loan approval, interest rate, and terms depend on the lender and the applicant&apos;s profile. This page is for information only; check details with the lender before applying.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
