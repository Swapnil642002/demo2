import type { Metadata } from "next";
import { HomeHero } from "@/components/home-hero";
import { HomePaths } from "@/components/home-paths";
import { HomeLower } from "@/components/home-lower";

export const metadata: Metadata = {
  title: "Shri Shaktimayi Ayurvedic Pharmacy & Nursing College, Azamgarh",
  description: "GNM nursing & D.Pharma (Ayurveda) diplomas at Kharihani, Azamgarh — fees, eligibility, admissions, campus and enquiry.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomePaths />
      <HomeLower />
    </>
  );
}
