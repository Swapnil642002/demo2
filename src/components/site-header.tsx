"use client";

import Link from "next/link";
import { MapPin, Menu, X, Leaf, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { SITE, NAV } from "@/lib/site";
import { Container } from "@/components/ui";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b-2 border-maroon-800/15">
      <Container className="flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3 min-w-0" aria-label="Shri Shaktimayi — home">
          <span className="grid place-items-center w-12 h-12 rounded-full bg-maroon-800 text-saffron-200 ring-2 ring-saffron-300 ring-offset-2 ring-offset-white shrink-0" aria-hidden>
            <Leaf size={22} />
          </span>
          <span className="min-w-0">
            <span className="block font-serif font-bold text-maroon-900 leading-tight truncate text-[18px]">
              श्री शक्तिमयी
            </span>
            <span className="block text-[10.5px] font-semibold uppercase tracking-[0.12em] text-forest-800 truncate">
              Ayurvedic Pharmacy & Nursing College
            </span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="px-3 py-2 rounded-full text-[14px] font-semibold text-ink-700 hover:text-maroon-800 hover:bg-maroon-50"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center rounded-full bg-maroon-700 px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-maroon-600"
          >
            Apply / Enquire
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border-2 border-maroon-800/20 bg-white text-maroon-900"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>
      <div id="mobile-nav" hidden={!open} className="lg:hidden border-t border-maroon-800/15 bg-saffron-100/50">
        <Container className="py-3">
          <nav aria-label="Mobile">
            <ul className="grid gap-1 sm:grid-cols-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2.5 rounded-xl font-semibold text-ink-800 hover:bg-white"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid gap-2 border-t hairline pt-3">
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 font-semibold text-forest-900">
                <Phone size={16} /> {SITE.phoneDisplay}
              </a>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 text-ink-700">
                <Mail size={16} /> {SITE.email}
              </a>
              <p className="inline-flex items-start gap-2 text-sm text-ink-600">
                <MapPin size={16} className="mt-0.5 shrink-0" /> {SITE.line1}, {SITE.line2}
              </p>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
