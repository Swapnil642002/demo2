import Link from "next/link";
import { ArrowRight, Clock, Wallet, CheckCircle2 } from "lucide-react";
import type { Course } from "@/lib/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="card-surface p-7 flex flex-col">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-600">Diploma programme</p>
      <h3 className="mt-2 font-serif text-2xl text-forest-950">{course.fullTitle}</h3>
      <p className="mt-3 text-[15px] leading-6 text-ink-700">{course.summary}</p>
      <dl className="mt-5 grid gap-3 text-sm">
        <div className="flex items-start gap-2">
          <Clock size={16} className="mt-0.5 text-forest-700 shrink-0" aria-hidden />
          <div><dt className="sr-only">Duration</dt><dd className="font-medium">{course.duration}</dd></div>
        </div>
        <div className="flex items-start gap-2">
          <Wallet size={16} className="mt-0.5 text-forest-700 shrink-0" aria-hidden />
          <div><dt className="sr-only">Fees</dt><dd className="font-medium">{course.fees}</dd></div>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle2 size={16} className="mt-0.5 text-forest-700 shrink-0" aria-hidden />
          <div><dt className="sr-only">Eligibility</dt><dd>{course.eligibility}</dd></div>
        </div>
      </dl>
      <div className="mt-6 flex flex-wrap gap-2 pt-2 mt-auto">
        <Link href={course.href} className="inline-flex items-center gap-1.5 rounded-xl bg-forest-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-forest-800">
          View details <ArrowRight size={15} aria-hidden />
        </Link>
        <Link href="/contact" className="inline-flex items-center rounded-xl border hairline bg-white px-4 py-2.5 text-sm font-semibold text-forest-900 hover:bg-forest-50">
          Enquire
        </Link>
      </div>
    </article>
  );
}
