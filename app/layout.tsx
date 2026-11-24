import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import "./hum-theme.css";
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
  title: "LoanCentral | Personal Loans for Salaried Professionals",
  description: "Apply online for salaried personal loans (₹10,000–₹60,000 for 30, 40, or 50 days) with single bullet repayment, consent-first checks, and zero hidden costs.",
  keywords: ["personal loans for salaried", "salaried loans India", "LoanCentral", "salary cycle loans", "quick personal loan", "LSP digital lending"],
  authors: [{ name: "LoanCentral Technologies" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${outfit.variable} overflow-x-clip`}>
      <body className="hum-site antialiased hm-bg-paper hm-text-ink min-h-screen flex flex-col overflow-x-clip w-full">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
