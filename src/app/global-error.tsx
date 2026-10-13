"use client";

import Link from "next/link";
import { Container } from "@/components/ui";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  void reset;
  return (
    <Container className="py-20 text-center max-w-xl">
      <h1 className="font-serif text-4xl text-forest-950">Something went wrong.</h1>
      <p className="mt-3 text-ink-700">Please try again, or call +91 87262 74444 for immediate help.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button onClick={() => reset()} className="rounded-xl bg-forest-900 px-5 py-3 text-sm font-semibold text-white">Try again</button>
        <Link href="/" className="rounded-xl border hairline px-5 py-3 text-sm font-semibold">Back home</Link>
      </div>
    </Container>
  );
}

