import Link from "next/link";
import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui";
import { GALLERY } from "@/lib/content";

export function HomeGallery() {
  return (
    <section aria-labelledby="gal-h" className="bg-ivory-50">
      <Container className="py-14">
        <SectionHeading eyebrow="Glimpses" title="Life on campus" id="gal-h" />
        <ul className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY.slice(0, 4).map((g, i) => (
            <li key={g.src} className={i === 0 ? "col-span-2 row-span-2 overflow-hidden rounded-card shadow-card bg-white" : "overflow-hidden rounded-2xl shadow-card bg-white"}>
              <Image src={g.src} alt={g.alt} width={i === 0 ? 900 : 600} height={i === 0 ? 700 : 450} loading="lazy" sizes={i === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"} className={i === 0 ? "aspect-[4/3.2] w-full object-cover" : "aspect-[4/3] w-full object-cover"} />
              <p className="px-3 py-2.5 text-[13px] font-medium text-ink-700">{g.caption}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6"><Link href="/gallery" className="font-semibold text-maroon-700 underline">Open the full gallery →</Link></p>
      </Container>
    </section>
  );
}
