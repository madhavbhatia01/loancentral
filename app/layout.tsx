import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LoanCentral | Instant Personal Loans for Bharat",
  description: "Apply online for instant personal loans with clear costs, consent-first checks, EMI estimates, and a transparent mobile-first journey.",
  keywords: ["instant personal loans", "personal loan online India", "LoanCentral", "EMI calculator", "quick personal loan", "LSP digital lending"],
  authors: [{ name: "LoanCentral Technologies" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col selection:bg-[#00C9A7]/20 selection:text-[#00C9A7]">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
