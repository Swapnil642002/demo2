import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui";
import { PageHero, CtaBand } from "@/components/sections";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "About the institution", description: "History, founder, mission and facts of Shri Shaktimayi College, Azamgarh." };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="About the institution" lead="Established 2015 at Kharihani, Azamgarh — nursing and Ayurvedic pharmacy diplomas beside a working hospital." />
      <Container className="py-12 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 prose-institution grid gap-4">
          <SectionHeading eyebrow="Profile" title="History & purpose" />
          <p>Shri Shaktimayi Ayurvedic Pharmacy and Nursing College, Kharagpur (Kharihani), Azamgarh was established in 2015 by {SITE.founder}, according to the institution&apos;s official site.</p>
          <p>Its stated mission is to prepare students with the knowledge, skills and compassion needed for nursing and pharmacy — combining classroom teaching, laboratory practice and hospital-associated clinical exposure.</p>
          <p>Two older sister concerns are also recorded on the official site: Shri Shaktimayi Ayurvedic Pharmacy (2009) and Pt. Harihar Shashtri Sanskrit Mahavidyalaya (2007).</p>
          <h2 className="font-serif text-2xl text-forest-950 mt-4">What this site claims — and what it doesn&apos;t</h2>
          <p>No rankings, awards, placement percentages or accreditations are claimed here, because the public reference site does not verify them. Approvals, affiliations, seat matrix and current fees must be confirmed with the college office before admission — the admissions and contact pages make that explicit.</p>
        </div>
        <aside className="card-surface p-6 h-fit">
          <h2 className="font-serif text-xl text-forest-950">Verified facts</h2>
          <dl className="mt-4 grid gap-3 text-sm">
            {[["Established", "2015"], ["Founder", SITE.founder], ["Location", `${SITE.line1}, ${SITE.line2}`], ["Phone", SITE.phoneDisplay], ["Email", SITE.email], ["Programmes", "GNM · D.Pharma (Ayurveda)"]].map(([k, v]) => (
              <div key={k} className="border-b hairline pb-3 last:border-0">
                <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-600">{k}</dt>
                <dd className="mt-0.5 font-medium text-ink-900">{v}</dd>
              </div>
            ))}
          </dl>
          <Link href="/contact" className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-forest-900 px-4 py-3 text-sm font-semibold text-white hover:bg-forest-800">Confirm details with office</Link>
        </aside>
      </Container>
      <CtaBand />
    </>
  );
}
