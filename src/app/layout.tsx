import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/topbar";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/footer";
import { SITE } from "@/lib/site";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.base),
  title: {
    default: "Shri Shaktimayi Ayurvedic Pharmacy & Nursing College, Azamgarh",
    template: "%s | Shri Shaktimayi, Azamgarh",
  },
  description:
    "Shri Shaktimayi Ayurvedic Pharmacy & Nursing College, Kharihani, Azamgarh (est. 2015) — GNM nursing and D.Pharma (Ayurveda) diplomas with hospital-associated learning.",
  openGraph: {
    type: "website",
    siteName: SITE.shortName,
    title: "Shri Shaktimayi Ayurvedic Pharmacy & Nursing College, Azamgarh",
    description: "GNM & D.Pharma (Ayurveda) diplomas with hospital-associated learning at Kharihani, Azamgarh.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable}`}>
        <a href="#main" className="skip-link">Skip to main content</a>
        <TopBar />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
