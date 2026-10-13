import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui";
import { PageHero, CtaBand } from "@/components/sections";
import { FACILITIES } from "@/lib/content";

export const metadata: Metadata = { title: "Campus & facilities", description: "Labs, library, hospital-linked learning and student support." };

export default function CampusPage() {
  return (
    <>
      <PageHero eyebrow="Campus" title="Campus & facilities" lead="What the institution lists publicly — laboratories, library, hospital-associated learning and student support." />
      <Container className="py-12">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((f) => (
            <li key={f.title} className="card-surface p-6">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-forest-900/5 text-forest-800" aria-hidden><CheckCircle2 size={20} /></span>
              <h2 className="mt-3 font-serif text-lg text-forest-950">{f.title}</h2>
              <p className="mt-1.5 text-[15px] text-ink-700">{f.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-ink-700">Visits are welcome on working days with a prior appointment — <Link href="/contact" className="font-semibold underline">arrange a visit</Link> or <Link href="/gallery" className="font-semibold underline">browse the gallery</Link>.</p>
      </Container>
      <CtaBand />
    </>
  );
}
