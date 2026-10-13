import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { PageHero, CtaBand } from "@/components/sections";
import { LEADERSHIP } from "@/lib/content";

export const metadata: Metadata = { title: "Faculty & leadership", description: "Principal, Manager and Director of Shri Shaktimayi College." };

export default function FacultyPage() {
  return (
    <>
      <PageHero eyebrow="People" title="Faculty & leadership" lead="Senior roles as published on the official site. Department-wise staff lists are confirmed at the office." />
      <Container className="py-12">
        <ul className="grid gap-4 md:grid-cols-3">
          {LEADERSHIP.map((l) => (
            <li key={l.name} className="card-surface p-6">
              <p className="grid place-items-center w-14 h-14 rounded-full bg-forest-900 font-serif text-xl text-gold-200" aria-hidden>{l.name.replace("Dr. ", "").charAt(0)}</p>
              <h2 className="mt-3 font-serif text-xl text-forest-950">{l.name}</h2>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-gold-600">{l.role}</p>
              <p className="mt-1.5 text-sm text-ink-700">{l.note}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 card-surface p-6">
          <SectionHeading eyebrow="Note" title="No invented profiles" />
          <p className="mt-3 text-ink-700">This demonstration lists only leadership roles verified on the public site. Full faculty rosters, qualifications and department pages will be added once the college supplies approved data — a content-verification checklist is included in the handover docs.</p>
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
