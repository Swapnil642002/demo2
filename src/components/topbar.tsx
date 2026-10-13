import { Phone, Mail, Megaphone } from "lucide-react";
import { SITE } from "@/lib/site";
import { Container } from "@/components/ui";

export function TopBar() {
  return (
    <div className="pattern-green text-saffron-100 text-[13px]">
      <Container className="flex items-center justify-between gap-4 py-2">
        <p className="truncate flex items-center gap-2">
          <Megaphone size={14} className="shrink-0 text-saffron-300" aria-hidden />
          <span><strong className="text-white">प्रवेश 2026–27</strong> · GNM & D.Pharma (Ayurveda) — call for counselling dates.</span>
        </p>
        <div className="hidden md:flex items-center gap-5 shrink-0">
          <a href={SITE.phoneHref} className="inline-flex items-center gap-1.5 hover:text-white">
            <Phone size={13} aria-hidden /> {SITE.phoneDisplay}
          </a>
          <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-1.5 hover:text-white">
            <Mail size={13} aria-hidden /> {SITE.email}
          </a>
        </div>
      </Container>
    </div>
  );
}
