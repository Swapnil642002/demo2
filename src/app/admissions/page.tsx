import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui";
import { PageHero, CtaBand } from "@/components/sections";

export const metadata: Metadata = { title: "Admissions", description: "Admission steps, eligibility, documents and fees for GNM and D.Pharma Ayurveda." };

const STEPS = [
  { t: "Enquire", d: "Submit the form, call +91 87262 74444, or email info@shrishaktimayi.com with your course and qualification." },
  { t: "Counselling", d: "The office confirms eligibility against current norms, seat availability and the session fee schedule." },
  { t: "Document verification", d: "Bring originals: Class 10 & 12 marksheets, transfer/migration certificate, ID proof, category certificate (if applicable), passport photos." },
  { t: "Admission & enrolment", d: "Pay the prescribed fee, collect the receipt and enrolment, and note the session start date." },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero eyebrow="Admissions" title="Admissions 2026–27" lead="A simple four-step journey. Every fact that needs confirming is labelled as such." />
      <Container className="py-12 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionHeading eyebrow="Process" title="How admission works" />
          <ol className="mt-6 grid gap-4">
            {STEPS.map((s, i) => (
              <li key={s.t} className="card-surface p-5 flex gap-4">
                <span className="grid place-items-center w-9 h-9 rounded-full bg-forest-900 text-white font-serif shrink-0" aria-hidden>{i + 1}</span>
                <div><h2 className="font-semibold text-forest-950">{s.t}</h2><p className="mt-1 text-ink-700">{s.d}</p></div>
              </li>
            ))}
          </ol>
          <h2 className="mt-10 font-serif text-2xl text-forest-950">Fees (as published on the official site)</h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border hairline">
            <table className="w-full text-sm bg-white">
              <thead><tr className="bg-forest-950 text-white text-left"><th className="px-4 py-3">Programme</th><th className="px-4 py-3">Duration</th><th className="px-4 py-3">Fee / year</th></tr></thead>
              <tbody>
                <tr className="border-t hairline"><td className="px-4 py-3 font-medium">GNM</td><td className="px-4 py-3">3 yrs + 6-mo internship</td><td className="px-4 py-3">₹36,500</td></tr>
                <tr className="border-t hairline"><td className="px-4 py-3 font-medium">D.Pharma (Ayurveda)</td><td className="px-4 py-3">2 yrs + 3-mo training</td><td className="px-4 py-3">₹42,500</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-ink-600">Always confirm the current session&apos;s schedule with the office before paying. No online payment is collected on this site.</p>
        </div>
        <aside className="card-surface p-6 h-fit">
          <h2 className="font-serif text-xl text-forest-950">Checklist</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-ink-700 grid gap-1.5">
            <li>Class 10 marksheet & certificate</li>
            <li>Class 12 marksheet & certificate</li>
            <li>Transfer / migration certificate</li>
            <li>Government ID proof</li>
            <li>Category certificate (if applicable)</li>
            <li>6 passport photographs</li>
          </ul>
          <Link href="/contact" className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-forest-900 px-4 py-3 text-sm font-semibold text-white hover:bg-forest-800">Start with an enquiry</Link>
        </aside>
      </Container>
      <CtaBand />
    </>
  );
}
