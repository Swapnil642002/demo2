import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { FACILITIES } from "@/lib/content";

export function HomeLegacy() {
  return (
    <section aria-labelledby="legacy-h" className="bg-ivory-50">
      <Container className="py-14 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading eyebrow="Our roots" title="Three generations of seva" id="legacy-h" lead="The college did not appear overnight — it grew out of two older sister institutions." />
          <Link href="/about" className="mt-5 inline-flex items-center rounded-full bg-maroon-700 px-5 py-3 text-sm font-semibold text-white hover:bg-maroon-600">Read our story</Link>
        </div>
        <ol className="relative grid gap-0 border-l-2 border-dashed border-saffron-400 pl-6">
          {[
            ["2007", "Pt. Harihar Shashtri Sanskrit Mahavidyalaya", "Classical learning takes root."],
            ["2009", "Shri Shaktimayi Ayurvedic Pharmacy", "Ayurvedic practice begins serving patients."],
            ["2015", "Pharmacy & Nursing College", "Founded by Vaidya Satnarayan Pandey at Kharihani."],
          ].map(([y, t, d]) => (
            <li key={y} className="relative pb-6 last:pb-0">
              <span aria-hidden className="absolute -left-[33px] top-1 grid place-items-center w-4 h-4 rounded-full bg-maroon-700 ring-4 ring-saffron-200" />
              <p className="font-serif text-2xl text-maroon-800">{y}</p>
              <h3 className="font-semibold text-ink-900">{t}</h3>
              <p className="text-sm text-ink-600">{d}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function HomeFacilities() {
  return (
    <section aria-labelledby="fac-h" className="bg-white border-y hairline">
      <Container className="py-14">
        <SectionHeading eyebrow="Campus" title="Learn by touching, not just reading" lead="Six hands-on spaces — every one listed by the institution itself." id="fac-h" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((f, i) => (
            <li key={f.title} className={i === 0 ? "card-surface p-6 ring-2 ring-maroon-700/70" : "card-surface p-6"}>
              <span className="grid place-items-center w-10 h-10 rounded-full bg-maroon-50 text-maroon-700" aria-hidden>
                <CheckCircle2 size={20} />
              </span>
              <h3 className="mt-3 font-serif text-lg text-maroon-950">{f.title}</h3>
              <p className="mt-1.5 text-[15px] leading-6 text-ink-700">{f.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6"><Link href="/campus" className="font-semibold text-maroon-700 underline">Tour the campus →</Link></p>
      </Container>
    </section>
  );
}
