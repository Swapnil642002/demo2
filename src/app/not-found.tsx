import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-20 text-center max-w-xl">
      <p className="eyebrow justify-center">404</p>
      <h1 className="mt-3 font-serif text-4xl text-forest-950">That page isn&apos;t on the noticeboard.</h1>
      <p className="mt-3 text-ink-700">The link may be old or mistyped. Try the homepage, courses, or contact.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-xl bg-forest-900 px-5 py-3 text-sm font-semibold text-white hover:bg-forest-800">Back home</Link>
        <Link href="/contact" className="rounded-xl border hairline bg-white px-5 py-3 text-sm font-semibold text-forest-900">Contact the office</Link>
      </div>
    </Container>
  );
}
