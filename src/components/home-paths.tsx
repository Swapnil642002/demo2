import Link from "next/link";
import { ArrowRight, HeartPulse, FlaskConical } from "lucide-react";
import { Container } from "@/components/ui";

export function HomePaths() {
  return (
    <section aria-labelledby="paths-h" className="bg-saffron-100/40">
      <Container className="py-14">
        <p className="eyebrow">Two paths · one campus</p>
        <h2 id="paths-h" className="mt-3 font-serif text-3xl sm:text-4xl text-maroon-950 max-w-2xl">
          Which uniform will you wear?
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Link href="/courses/gnm" className="group relative overflow-hidden rounded-card bg-forest-950 text-white p-8 shadow-lift hover:-translate-y-1 transition-transform">
            <HeartPulse size={120} aria-hidden className="absolute -right-6 -bottom-6 text-white/10 group-hover:scale-110 transition-transform" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-saffron-300">Nursing · 3 yrs + 6-mo internship</p>
            <h3 className="mt-2 font-serif text-3xl">GNM — Nursing & Midwifery</h3>
            <p className="mt-2 text-white/80">Rs.36,500/yr · 10+2 Science (preferred) or Arts. Wards & midwifery postings.</p>
            <span className="mt-5 inline-flex items-center gap-1.5 font-bold text-saffron-300">Full course guide <ArrowRight size={16} aria-hidden className="group-hover:translate-x-1 transition-transform" /></span>
          </Link>
          <Link href="/courses/dpharma-ayurveda" className="group relative overflow-hidden rounded-card bg-maroon-800 text-white p-8 shadow-lift hover:-translate-y-1 transition-transform">
            <FlaskConical size={120} aria-hidden className="absolute -right-6 -bottom-6 text-white/10 group-hover:scale-110 transition-transform" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-saffron-300">Pharmacy · 2 yrs + 3-mo training</p>
            <h3 className="mt-2 font-serif text-3xl">D.Pharma — Ayurveda</h3>
            <p className="mt-2 text-white/80">Rs.42,500/yr · 10+2 with PCM/PCB. Herbs, formulations & dispensing.</p>
            <span className="mt-5 inline-flex items-center gap-1.5 font-bold text-saffron-300">Full course guide <ArrowRight size={16} aria-hidden className="group-hover:translate-x-1 transition-transform" /></span>
          </Link>
        </div>
        <p className="mt-5 text-sm text-ink-600">Fees & eligibility as published on the official site — confirm the 2026–27 schedule with the office.</p>
      </Container>
    </section>
  );
}
