import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Wallet, CheckCircle2, Briefcase } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/sections";
import { COURSES } from "@/lib/courses";

export const metadata: Metadata = { title: "GNM — General Nursing & Midwifery", description: "GNM course: duration, fees, eligibility, curriculum and careers." };

export default function GnmPage() {
  const c = COURSES[0];
  return (
    <>
      <div className="bg-forest-950 text-white">
        <Container className="py-12">
          <Link href="/courses" className="inline-flex items-center gap-1.5 text-sm text-gold-200 hover:underline"><ArrowLeft size={15} /> All courses</Link>
          <p className="eyebrow !text-gold-200 mt-4">Diploma programme</p>
          <h1 className="mt-2 font-serif text-4xl">{c.fullTitle}</h1>
          <p className="mt-3 max-w-2xl text-ivory-100/85">{c.summary}</p>
          <dl className="mt-6 grid gap-3 sm:grid-cols-3 text-sm">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4"><dt className="flex items-center gap-1.5 text-gold-200 font-semibold"><Clock size={15} /> Duration</dt><dd className="mt-1">{c.duration}</dd></div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4"><dt className="flex items-center gap-1.5 text-gold-200 font-semibold"><Wallet size={15} /> Fees</dt><dd className="mt-1">{c.fees} (as published; confirm session)</dd></div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4"><dt className="flex items-center gap-1.5 text-gold-200 font-semibold"><CheckCircle2 size={15} /> Eligibility</dt><dd className="mt-1">{c.eligibility}</dd></div>
          </dl>
        </Container>
      </div>
      <Container className="py-12 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 grid gap-8">
          <section aria-labelledby="hl"><SectionHeading eyebrow="Highlights" title="What you will learn" id="hl" /><ul className="mt-4 grid gap-2">{c.highlights.map((h) => <li key={h} className="flex gap-2 text-ink-700"><CheckCircle2 size={17} className="mt-1 text-forest-700 shrink-0" aria-hidden />{h}</li>)}</ul></section>
          <section aria-labelledby="cur"><h2 id="cur" className="font-serif text-2xl text-forest-950">Year-wise outline</h2><div className="mt-4 grid gap-4">{c.years.map((y) => <div key={y.title} className="card-surface p-5"><h3 className="font-semibold text-forest-950">{y.title}</h3><ul className="mt-2 list-disc pl-5 text-ink-700 grid gap-1">{y.items.map((i) => <li key={i}>{i}</li>)}</ul></div>)}</div>
          <p className="text-sm text-ink-600">Detailed syllabus follows the affiliating body&apos;s norms — request the current handbook at the office.</p></section>
          <section aria-labelledby="car"><h2 id="car" className="font-serif text-2xl text-forest-950">Careers</h2><ul className="mt-4 grid gap-2">{c.careers.map((r) => <li key={r} className="flex gap-2 text-ink-700"><Briefcase size={17} className="mt-1 text-forest-700 shrink-0" aria-hidden />{r}</li>)}</ul></section>
        </div>
        <aside className="card-surface p-6 h-fit">
          <h2 className="font-serif text-xl text-forest-950">Next step</h2>
          <p className="mt-2 text-sm text-ink-700">Confirm seats, counselling dates and the current fee schedule.</p>
          <Link href="/contact" className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-forest-900 px-4 py-3 text-sm font-semibold text-white hover:bg-forest-800">Enquire about GNM</Link>
          <Link href="/admissions" className="mt-2 inline-flex w-full items-center justify-center rounded-xl border hairline px-4 py-3 text-sm font-semibold text-forest-900 hover:bg-forest-50">Admissions guide</Link>
        </aside>
      </Container>
      <CtaBand />
    </>
  );
}
