import Link from "next/link";
import { ArrowRight, Phone, MapPin, Leaf } from "lucide-react";
import { Container } from "@/components/ui";
import { SITE } from "@/lib/site";

export function HomeHero() {
  return (
    <section aria-labelledby="hero-h" className="pattern-band text-white overflow-hidden">
      <Container className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <div>
          <p className="inline-flex flex-wrap items-center gap-2 rounded-full border border-saffron-300/40 bg-white/5 px-4 py-1.5 text-[12px] font-semibold tracking-wide text-saffron-200">
            <Leaf size={14} aria-hidden /> सेवा · शिक्षा · संस्कार — Kharihani, Azamgarh
          </p>
          <h1 id="hero-h" className="mt-5 font-serif text-[2.6rem] sm:text-6xl leading-[1.05]">
            Become the caregiver your village trusts.
          </h1>
          <p className="mt-5 text-lg leading-8 text-saffron-100/90 max-w-xl">
            Two hands-on diplomas — <strong className="text-white">GNM Nursing</strong> and{" "}
            <strong className="text-white">D.Pharma (Ayurveda)</strong> — taught beside a working
            hospital, in labs you touch from the first month.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/courses" className="inline-flex items-center gap-2 rounded-full bg-saffron-300 px-7 py-3.5 font-bold text-maroon-950 hover:bg-saffron-200">
              Choose your course <ArrowRight size={17} aria-hidden />
            </Link>
            <a href={SITE.phoneHref} className="btn-outline-light">
              <Phone size={16} aria-hidden /> {SITE.phoneDisplay}
            </a>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-saffron-100/75">
            <MapPin size={15} aria-hidden /> {SITE.line1}, {SITE.line2}
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-sm pb-6">
          <div className="arch overflow-hidden border-[6px] border-saffron-300/80 shadow-lift">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=900&auto=format&fit=crop"
              alt="Nursing student in uniform using a tablet beside a hospital bed in a bright ward"
              className="aspect-[3/4] w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute bottom-0 -left-1 sm:-left-6 rounded-2xl bg-white text-ink-900 px-5 py-4 shadow-lift max-w-[240px]">
            <p className="font-serif text-3xl text-maroon-800">2015</p>
            <p className="text-[13px] leading-5 text-ink-700">serving Azamgarh beside Shri Shaktimayi Hospital</p>
          </div>
          <div className="absolute top-2 -right-1 sm:-right-4 rounded-full bg-forest-900 text-saffron-200 px-4 py-2 text-[12px] font-bold shadow-lift">
            प्रवेश 2026–27 खुला
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10 bg-black/20">
        <Container className="flex flex-wrap items-center gap-x-8 gap-y-2 py-3 text-[13px] font-medium text-saffron-100/80">
          <span>Hospital-beside-campus learning</span>
          <span>Ayurvedic + modern pharmacy labs</span>
          <span>Personal faculty guidance</span>
          <span className="ml-auto hidden md:inline">No hidden charges · confirm fees with office</span>
        </Container>
      </div>
    </section>
  );
}
