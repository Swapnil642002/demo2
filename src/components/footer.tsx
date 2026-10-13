import Link from "next/link";
import { Phone, Mail, MapPin, Leaf } from "lucide-react";
import { SITE, NAV } from "@/lib/site";
import { Container } from "@/components/ui";

export function SiteFooter() {
  return (
    <footer className="pattern-green text-saffron-100 mt-0">
      <Container className="py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-12 h-12 rounded-full bg-saffron-300 text-maroon-900 shrink-0" aria-hidden>
              <Leaf size={22} />
            </span>
            <div>
              <p className="font-serif font-bold text-xl leading-tight text-white">श्री शक्तिमयी</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-saffron-300">Pharmacy & Nursing · Azamgarh</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-saffron-100/85 max-w-md">
            Since 2015, two hands-on diplomas — General Nursing & Midwifery and D.Pharma
            (Ayurveda) — taught beside Shri Shaktimayi Hospital at Kharihani.
          </p>
          <div className="mt-5 grid gap-2 text-sm">
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 font-semibold text-white hover:text-saffron-200">
              <Phone size={15} aria-hidden /> {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 hover:text-white">
              <Mail size={15} aria-hidden /> {SITE.email}
            </a>
            <p className="inline-flex items-start gap-2 text-saffron-100/85">
              <MapPin size={15} className="mt-0.5 shrink-0" aria-hidden /> {SITE.line1}, {SITE.line2}
            </p>
          </div>
        </div>
        <nav aria-label="Footer">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-saffron-300">Explore</p>
          <ul className="mt-4 grid grid-cols-2 md:grid-cols-1 gap-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-saffron-100/85 hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-saffron-300">Admissions</p>
          <ul className="mt-4 grid gap-2 text-sm">
            <li><Link href="/courses/gnm" className="text-saffron-100/85 hover:text-white">GNM — Nursing & Midwifery</Link></li>
            <li><Link href="/courses/dpharma-ayurveda" className="text-saffron-100/85 hover:text-white">D.Pharma (Ayurveda)</Link></li>
            <li><Link href="/admissions" className="text-saffron-100/85 hover:text-white">Fees & documents</Link></li>
            <li><Link href="/notices" className="text-saffron-100/85 hover:text-white">Notices</Link></li>
            <li><Link href="/privacy" className="text-saffron-100/85 hover:text-white">Privacy</Link></li>
          </ul>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center rounded-full bg-saffron-300 px-5 py-2.5 text-sm font-bold text-maroon-950 hover:bg-saffron-200"
          >
            Get directions →
          </a>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[13px] text-saffron-100/60">
          <p>© {new Date().getFullYear()} {SITE.name}, Azamgarh.</p>
          <p>Demo rebuild for tender evaluation — verify content before publishing.</p>
        </Container>
      </div>
    </footer>
  );
}
