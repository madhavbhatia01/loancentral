import type { Metadata } from "next";
import { buildCityMetadata, CityGuidePage } from "@/src/lib/city-guide-page";

export const metadata: Metadata = buildCityMetadata("kanpur");

export default function Page() {
  return <CityGuidePage slug="kanpur" />;
}
