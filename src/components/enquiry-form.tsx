"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertTriangle } from "lucide-react";
import { enquirySchema, type EnquiryFormValues, type EnquiryInput } from "@/lib/enquiry";

const field = "w-full rounded-xl border hairline bg-white px-4 py-3 text-[15px]";
const errCls = "mt-1 text-sm font-medium text-red-700";

export function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<EnquiryFormValues, unknown, EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { name: "", phone: "", email: "", course: "", message: "", consent: false, website: "" },
  });

  async function onSubmit(data: EnquiryInput) {
    setStatus("sending");
    setMsg("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("err");
        setMsg(json.error ?? "Could not submit. Please call the office.");
        return;
      }
      setStatus("ok");
      setMsg(json.message ?? "Enquiry received (demo mode).");
      reset();
    } catch {
      setStatus("err");
      setMsg("Network error. Please call +91 87262 74444.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Course enquiry form" className="grid gap-4">
      <p className="rounded-xl bg-gold-50 border border-gold-200 px-4 py-3 text-sm text-ink-700">
        <strong>Demo mode:</strong> validates your details but does not email the college yet. For an immediate answer,
        call <a className="font-semibold underline" href="tel:+918726274444">+91 87262 74444</a>.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ef-name" className="block text-sm font-semibold">Full name *</label>
          <input id="ef-name" autoComplete="name" className={field} placeholder="e.g. Priya Yadav" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name && <p role="alert" className={errCls}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="ef-phone" className="block text-sm font-semibold">Mobile *</label>
          <input id="ef-phone" inputMode="numeric" autoComplete="tel" className={field} placeholder="10-digit mobile" {...register("phone")} aria-invalid={!!errors.phone} />
          {errors.phone && <p role="alert" className={errCls}>{errors.phone.message}</p>}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ef-email" className="block text-sm font-semibold">Email (optional)</label>
          <input id="ef-email" type="email" autoComplete="email" className={field} placeholder="you@example.com" {...register("email")} />
          {errors.email && <p role="alert" className={errCls}>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="ef-course" className="block text-sm font-semibold">Course *</label>
          <select id="ef-course" className={field} defaultValue="" {...register("course")} aria-invalid={!!errors.course}>
            <option value="" disabled>Select a course</option>
            <option value="gnm">GNM — Nursing & Midwifery</option>
            <option value="dpharma-ayurveda">D.Pharma (Ayurveda)</option>
            <option value="undecided">Not sure yet</option>
          </select>
          {errors.course && <p role="alert" className={errCls}>{errors.course.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="ef-msg" className="block text-sm font-semibold">Message (optional)</label>
        <textarea id="ef-msg" rows={4} className={field} placeholder="Question about eligibility, fees, seats…" {...register("message")} />
      </div>
      <div className="flex items-start gap-2">
        <input id="ef-consent" type="checkbox" className="mt-1 h-4 w-4 accent-[#12372a]" {...register("consent")} />
        <label htmlFor="ef-consent" className="text-sm text-ink-700">
          I agree the college may contact me. See <a href="/privacy" className="underline font-medium">privacy policy</a>. *
        </label>
      </div>
      {errors.consent && <p role="alert" className={errCls}>{errors.consent.message}</p>}
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" {...register("website")} />
      <div aria-live="polite">
        {status === "ok" && (
          <p className="flex items-start gap-2 rounded-xl bg-forest-50 border border-forest-200 px-4 py-3 text-sm font-medium text-forest-900">
            <CheckCircle2 size={17} className="mt-0.5 shrink-0" aria-hidden /> {msg}
          </p>
        )}
        {status === "err" && (
          <p className="flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm font-medium text-red-800">
            <AlertTriangle size={17} className="mt-0.5 shrink-0" aria-hidden /> {msg}
          </p>
        )}
      </div>
      <button type="submit" disabled={status === "sending"} className="inline-flex items-center justify-center gap-2 rounded-xl bg-forest-900 px-6 py-3.5 font-semibold text-white hover:bg-forest-800 disabled:opacity-60">
        {status === "sending" && <Loader2 size={17} className="animate-spin" aria-hidden />}
        {status === "sending" ? "Sending…" : "Submit enquiry"}
      </button>
    </form>
  );
}
