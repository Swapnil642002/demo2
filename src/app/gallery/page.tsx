import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui";
import { PageHero, CtaBand } from "@/components/sections";
import { GALLERY } from "@/lib/content";

export const metadata: Metadata = { title: "Gallery", description: "Campus, nursing, pharmacy and laboratory photographs." };

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Campus gallery" lead="Representative institutional photography with descriptive captions and alt text." />
      <Container className="py-12">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY.map((g) => (
            <li key={g.src}>
              <figure className="overflow-hidden rounded-2xl border hairline bg-white shadow-card">
                <Image src={g.src} alt={g.alt} width={600} height={450} loading="lazy" sizes="(max-width: 1024px) 50vw, 25vw" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="px-3 py-2.5 text-[13px]"><span className="font-semibold">{g.caption}</span><span className="text-ink-600"> · {g.category}</span></figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
      <CtaBand />
    </>
  );
}
