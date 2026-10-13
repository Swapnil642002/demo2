import Link from "next/link";
import { Phone, ClipboardList, Quote } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { Faq } from "@/components/sections";
import { LEADERSHIP, FAQS } from "@/lib/content";
import { SITE } from "@/lib/site";

export function HomeLeadership() {
  return (
    <section aria-labelledby="lead-h" className="pattern-green text-white">
      <Container className="py-14">
        <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-saffron-300">
          <span aria-hidden className="inline-block w-8 h-[2px] rounded-full bg-saffron-400" /> Leadership
        </p>
        <h2 id="lead-h" className="mt-3 font-serif text-3xl sm:text-4xl max-w-2xl">Guided by three senior heads</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {LEADERSHIP.map((l) => (
            <li key={l.name} className="rounded-card bg-white/5 border border-white/15 p-6">
              <p className="grid place-items-center w-12 h-12 rounded-full bg-saffron-300 font-serif text-lg text-maroon-950" aria-hidden>
                {l.name.replace("Dr. ", "").charAt(0)}
              </p>
              <h3 className="mt-3 font-semibold">{l.name}</h3>
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-saffron-300">{l.role}</p>
              <p className="mt-1.5 text-sm text-white/75">{l.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6"><Link href="/faculty" className="font-semibold text-saffron-300 underline">Meet the leadership →</Link></p>
      </Container>
    </section>
  );
}

export function HomeAdmissions() {
  return (
    <section aria-labelledby="adm-h" className="bg-saffron-100/50">
      <Container className="py-14">
        <SectionHeading eyebrow="Admissions" title="Four steps to your seat" id="adm-h" lead="No entrance-coaching maze. Enquire, verify, enrol." />
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            ["Enquire", "Form, call or visit — course + qualification."],
            ["Counselling", "Office confirms eligibility, seats, fees."],
            ["Verification", "Original documents checked in person."],
            ["Enrolment", "Fee receipt + session start date."],
          ].map(([t, d], i) => (
            <li key={t} className="rounded-card bg-white p-5 shadow-card border border-maroon-800/10">
              <span aria-hidden className="font-serif text-4xl text-saffron-500">{i + 1}</span>
              <h3 className="mt-1 font-semibold text-maroon-950 flex items-center gap-2"><ClipboardList size={16} className="text-maroon-600" aria-hidden />{t}</h3>
              <p className="mt-1 text-sm leading-6 text-ink-700">{d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/admissions" className="btn-primary">Full admissions guide</Link>
          <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full border-2 border-maroon-700 px-6 py-3.5 font-semibold text-maroon-800 hover:bg-maroon-50"><Phone size={16} aria-hidden /> {SITE.phoneDisplay}</a>
        </div>
      </Container>
    </section>
  );
}

export function HomeFounder() {
  return (
    <section aria-labelledby="founder-h" className="pattern-band text-white">
      <Container className="py-14 grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center max-w-4xl">
        <span className="grid place-items-center w-16 h-16 rounded-full bg-saffron-300 text-maroon-900" aria-hidden>
          <Quote size={28} />
        </span>
        <div>
          <blockquote className="font-serif text-2xl sm:text-3xl leading-snug">
            “Knowledge must reach the hands that serve — that is why this college stands beside its hospital.”
          </blockquote>
          <p id="founder-h" className="mt-3 text-sm font-semibold tracking-wide text-saffron-300">— FOUNDED BY VAIDYA SATNARAYAN PANDEY · 2015</p>
        </div>
      </Container>
    </section>
  );
}

export function HomeFaq() {
  return (
    <section aria-labelledby="faq-h" className="bg-white border-t hairline">
      <Container className="py-14 grid gap-8 lg:grid-cols-3">
        <div>
          <SectionHeading eyebrow="Questions" title="Ask us anything" id="faq-h" lead="Straight answers from verified site content." />
          <Link href="/contact" className="btn-primary mt-5 !px-5 !py-3 text-sm">Ask a question</Link>
        </div>
        <div className="lg:col-span-2"><Faq items={FAQS} /></div>
      </Container>
    </section>
  );
}
