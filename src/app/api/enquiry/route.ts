import { NextResponse } from "next/server";
import { enquirySchema, COURSE_LABELS } from "@/lib/enquiry";

const hits = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_HITS = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now > rec.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  rec.count += 1;
  return rec.count > MAX_HITS;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many attempts. Please wait a minute and try again." }, { status: 429 });
  }
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return NextResponse.json({ error: first?.message ?? "Please check the form and try again." }, { status: 422 });
  }
  if (parsed.data.website) {
    return NextResponse.json({ error: "Spam detected." }, { status: 400 });
  }
  const delivery = process.env.ENQUIRY_DELIVERY;
  const course = COURSE_LABELS[parsed.data.course] ?? parsed.data.course;

  if (!delivery) {
    console.info("[enquiry/demo]", { ...parsed.data, website: undefined });
    return NextResponse.json(
      {
        ok: true,
        demo: true,
        message: `Thank you, ${parsed.data.name.split(" ")[0]}. Your interest in ${course} was recorded in demo mode — the college inbox is not connected yet. Please call +91 87262 74444 for an immediate response.`,
      },
      { status: 200 }
    );
  }
  // Reserved: when ENQUIRY_DELIVERY (e.g. resend key / mailbox webhook) is configured,
  // forward the validated payload here and return delivery confirmation.
  console.info("[enquiry/pending-delivery]", { course });
  return NextResponse.json(
    { ok: true, demo: true, message: "Enquiry validated. Email delivery is being configured — please call the office meanwhile." },
    { status: 200 }
  );
}
