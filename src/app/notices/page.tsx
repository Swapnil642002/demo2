import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero, CtaBand } from "@/components/sections";
import { NOTICES } from "@/lib/content";

export const metadata: Metadata = { title: "Notices & events", description: "Current verified notices: admissions, documents and campus visits." };

export default function NoticesPage() {
  return (
    <>
      <PageHero eyebrow="Bulletin" title="Notices & events" lead="Only current, approved notices appear here. Dated items are removed, never left to go stale." />
      <Container className="py-12 grid gap-4 max-w-3xl">
        {NOTICES.map((n) => (
          <article key={n.id} className="card-surface p-6">
            <p className="flex flex-wrap items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em]">
              <span className="rounded-full bg-forest-900 px-3 py-1 text-white">{n.tag}</span>
              <span className="text-ink-600">{n.date}</span>
            </p>
            <h2 className="mt-3 font-serif text-xl text-forest-950">{n.title}</h2>
            <p className="mt-2 text-ink-700">{n.body}</p>
          </article>
        ))}
      </Container>
      <CtaBand />
    </>
  );
}
