import assert from "node:assert/strict";
import { z } from "zod";

// Mirrors src/lib/enquiry.ts validation contract (plain .mjs so `npm test`
// runs with zero extra dev dependencies; keep in sync with the schema file).
const schema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/),
  email: z.string().trim().max(120).refine((v) => v === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)).optional().default(""),
  course: z.string().refine((v) => ["gnm", "dpharma-ayurveda", "undecided"].includes(v)),
  message: z.string().trim().max(1000).optional().default(""),
  consent: z.boolean().refine((v) => v === true),
  website: z.string().optional().default(""),
});

const cases = [
  ["valid payload passes", { name: "Priya Yadav", phone: "9876543210", email: "", course: "gnm", message: "Fees?", consent: true, website: "" }, true],
  ["bad phone fails", { name: "Priya Yadav", phone: "12345", course: "gnm", consent: true }, false],
  ["short name fails", { name: "T", phone: "9876543210", course: "gnm", consent: true }, false],
  ["missing consent fails", { name: "Priya Yadav", phone: "9876543210", course: "dpharma-ayurveda", consent: false }, false],
  ["unknown course fails", { name: "Priya Yadav", phone: "9876543210", course: "mbbs", consent: true }, false],
  ["bad email fails", { name: "Priya Yadav", phone: "9876543210", email: "not-an-email", course: "gnm", consent: true }, false],
];

for (const [label, input, expected] of cases) {
  const result = schema.safeParse(input);
  assert.equal(result.success, expected, String(label));
  console.log(`ok - ${label}`);
}
console.log(`enquiry schema mirror tests: ${cases.length}/${cases.length} passed`);
