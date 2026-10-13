import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";
import { NOTICES } from "@/lib/content";

export function NoticesStrip() {
  return (
    <section aria-labelledby="notices-h" className="bg-gold-50 border-y border-gold-200/60">
      <Container className="py-5 flex flex-col md:flex-row md:items-center gap-4">
        <p className="shrink-0 inline-flex items-center rounded-full bg-forest-900 text-white text-[11px] font-bold uppercase tracking-[0.18em] px-3 py-1.5">
          Announcements
        </p>
        <ul className="grid gap-2 md:grid-cols-3 text-sm">
          {NOTICES.map((n) => (
            <li key={n.id}>
              <Link href="/notices" className="group block">
                <span className="font-semibold text-forest-950 group-hover:underline">{n.title}</span>
                <span className="block text-ink-600">{n.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function Faq({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="grid gap-3">
      {items.map((f) => (
        <details key={f.q} className="card-surface px-5 py-4 group">
          <summary className="cursor-pointer font-semibold text-forest-950 list-none flex items-center justify-between gap-3">
            {f.q}
            <ArrowRight size={16} className="shrink-0 transition-transform group-open:rotate-90" aria-hidden />
          </summary>
          <p className="mt-2 text-[15px] leading-6 text-ink-700">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand() {
  return (
    <section aria-labelledby="cta-h" className="bg-forest-950 text-white">
      <Container className="py-12 flex flex-col md:flex-row md:items-center gap-6 justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-200">Admissions 2026–27</p>
          <h2 id="cta-h" className="mt-2 font-serif text-3xl">Talk to the college before you decide.</h2>
          <p className="mt-2 text-ivory-100/80">Call the office, write an email, or send an enquiry — faculty will confirm eligibility, seats and dates.</p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <Link href="/contact" className="inline-flex items-center rounded-xl bg-ivory-100 px-5 py-3 font-semibold text-forest-950 hover:bg-white">
            Send an enquiry
          </Link>
          <Link href="/admissions" className="inline-flex items-center rounded-xl border border-white/25 px-5 py-3 font-semibold hover:bg-white/10">
            How admission works
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="bg-forest-950 text-white">
      <Container className="py-12 sm:py-16">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-200">
            <span aria-hidden className="inline-block w-8 h-[2px] rounded-full bg-gold-400" />
            {eyebrow}
          </p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl leading-tight">{title}</h1>
          {lead ? <p className="mt-3 leading-7 text-ivory-100/85">{lead}</p> : null}
        </div>
      </Container>
    </div>
  );
}
