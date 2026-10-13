import { z } from "zod";

const COURSE_VALUES = ["gnm", "dpharma-ayurveda", "undecided"] as const;

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(80, "Name is too long."),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number."),
  email: z
    .string()
    .trim()
    .max(120, "Email is too long.")
    .refine((v) => v === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), {
      message: "Enter a valid email address.",
    })
    .optional()
    .default(""),
  course: z.string().refine(
    (v): v is (typeof COURSE_VALUES)[number] =>
      (COURSE_VALUES as readonly string[]).includes(v),
    { message: "Please choose a course of interest." }
  ),
  message: z.string().trim().max(1000, "Message must be under 1000 characters.").optional().default(""),
  consent: z.boolean().refine((v) => v === true, {
    message: "Please accept the consent to submit.",
  }),
  website: z.string().optional().default(""),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const COURSE_LABELS: Record<string, string> = {
  gnm: "GNM",
  "dpharma-ayurveda": "D.Pharma (Ayurveda)",
  undecided: "Not sure yet",
};

/** Form field values (schema input) — use as the useForm generic; submit transforms to EnquiryInput. */
export type EnquiryFormValues = z.input<typeof enquirySchema>;

