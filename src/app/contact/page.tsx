import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/sections";
import { EnquiryForm } from "@/components/enquiry-form";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Contact & enquiry", description: "Call, email, visit or send an enquiry to Shri Shaktimayi College, Azamgarh." };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Contact & enquiry" lead="The fastest answer is a phone call. The form below is demo-mode until the college connects its inbox." />
      <Container className="py-12 grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2 grid gap-4">
          <a href={SITE.phoneHref} className="card-surface p-5 flex gap-3 hover:shadow-lift">
            <Phone size={20} className="text-forest-800 shrink-0 mt-0.5" aria-hidden />
            <span><span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-ink-600">Call (tap to dial)</span><span className="block font-serif text-xl text-forest-950">{SITE.phoneDisplay}</span></span>
          </a>
          <a href={`mailto:${SITE.email}`} className="card-surface p-5 flex gap-3 hover:shadow-lift">
            <Mail size={20} className="text-forest-800 shrink-0 mt-0.5" aria-hidden />
            <span><span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-ink-600">Email</span><span className="block font-semibold text-forest-950">{SITE.email}</span></span>
          </a>
          <div className="card-surface p-5 flex gap-3">
            <MapPin size={20} className="text-forest-800 shrink-0 mt-0.5" aria-hidden />
            <span><span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-ink-600">Visit</span><span className="block text-ink-800">{SITE.line1}, {SITE.line2}</span>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex rounded-xl bg-forest-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-forest-800">Open in Google Maps</a></span>
          </div>
          <p className="text-sm text-ink-600">Working-days visits with prior appointment. Call before travelling so faculty can receive you.</p>
        </div>
        <div className="lg:col-span-3 card-surface p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-forest-950">Send an enquiry</h2>
          <p className="mt-1 text-sm text-ink-600">Name, mobile, course and consent — nothing more.</p>
          <div className="mt-5"><EnquiryForm /></div>
        </div>
      </Container>
    </>
  );
}
