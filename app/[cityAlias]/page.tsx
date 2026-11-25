import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, getCityBySlug } from "@/src/data/cities";
import { buildCityMetadata, CityGuidePage, type CityPageVariant } from "@/src/lib/city-guide-page";

const SALARY_TIERS = [30000, 35000, 40000, 45000, 50000, 60000, 70000, 80000, 90000, 100000];
const INTENTS: Array<{ prefix: string; variant: CityPageVariant }> = [
  { prefix: "personal-loan", variant: "personal" },
  { prefix: "instant-personal-loan", variant: "instant-personal" },
  { prefix: "instant-loan", variant: "instant" },
  { prefix: "salary-loan", variant: "salary" },
  { prefix: "urgent-loan", variant: "urgent" },
  { prefix: "emergency-loan", variant: "emergency" },
  { prefix: "quick-personal-loan", variant: "quick-personal" },
  { prefix: "online-personal-loan", variant: "online-personal" },
  { prefix: "paperless-personal-loan", variant: "paperless-personal" },
  { prefix: "digital-personal-loan", variant: "digital-personal" },
];

export function generateStaticParams() {
  return CITIES.flatMap((city) => [
    { cityAlias: `instant-personal-loan-in-${city.slug}` },
    { cityAlias: `instant-loan-in-${city.slug}` },
    ...INTENTS.flatMap(({ prefix }) => SALARY_TIERS.map((salary) => ({
      cityAlias: `${prefix}-in-${city.slug}-for-${salary}-salary`,
    }))),
  ]);
}

function parseAlias(cityAlias: string): { slug: string; variant: CityPageVariant; salary?: number } | null {
  for (const { prefix, variant } of INTENTS) {
    const salaryPage = cityAlias.match(new RegExp(`^${prefix}-in-(.+)-for-(${SALARY_TIERS.join("|")})-salary$`));
    if (salaryPage) return { slug: salaryPage[1], variant, salary: Number(salaryPage[2]) };
  }
  const instantPersonal = cityAlias.match(/^instant-personal-loan-in-(.+)$/);
  if (instantPersonal) return { slug: instantPersonal[1], variant: "instant-personal" };
  const instant = cityAlias.match(/^instant-loan-in-(.+)$/);
  if (instant) return { slug: instant[1], variant: "instant" };
  return null;
}

export async function generateMetadata({ params }: { params: Promise<{ cityAlias: string }> }): Promise<Metadata> {
  const { cityAlias } = await params;
  const parsed = parseAlias(cityAlias);
  if (!parsed || !getCityBySlug(parsed.slug)) return { title: "City Guide Not Found" };
  return buildCityMetadata(parsed.slug, parsed.variant, parsed.salary);
}

export default async function CitySearchAlias({
  params,
}: {
  params: Promise<{ cityAlias: string }>;
}) {
  const { cityAlias } = await params;
  const parsed = parseAlias(cityAlias);
  if (!parsed || !getCityBySlug(parsed.slug)) notFound();
  return <CityGuidePage slug={parsed.slug} variant={parsed.variant} salary={parsed.salary} />;
}
