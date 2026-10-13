export interface Course {
  id: string;
  href: string;
  shortTitle: string;
  fullTitle: string;
  summary: string;
  duration: string;
  fees: string;
  eligibility: string;
  highlights: string[];
  years: { title: string; items: string[] }[];
  careers: string[];
}

export const COURSES: Course[] = [
  {
    id: "gnm",
    href: "/courses/gnm",
    shortTitle: "GNM",
    fullTitle: "General Nursing & Midwifery (GNM)",
    summary:
      "A 3-year + 6-month internship diploma preparing caring nursing professionals for hospitals, community health and midwifery — as listed on the institution's official site.",
    duration: "3 Years + 6 Months Internship",
    fees: "₹36,500 / Year",
    eligibility: "10+2 with Science (preferred) or Arts stream",
    highlights: [
      "Anatomy, physiology, nursing foundations and midwifery",
      "Supervised clinical postings and community-health exposure",
      "Patient safety, ethics and compassionate bedside care",
      "Guidance for hospital, community and further-study pathways",
    ],
    years: [
      {
        title: "Year 1 — Foundations",
        items: ["Anatomy & Physiology, Microbiology, Psychology", "Nursing Foundations and First Aid", "Community Health Nursing — introduction"],
      },
      {
        title: "Year 2 — Clinical nursing",
        items: ["Medical-Surgical Nursing (adult care)", "Child Health Nursing", "Mental Health Nursing — introduction"],
      },
      {
        title: "Year 3 + Internship — Midwifery",
        items: ["Midwifery and Obstetrical Nursing", "Community Health Nursing — advanced", "6-month supervised internship"],
      },
    ],
    careers: [
      "Staff nurse in hospitals and nursing homes",
      "Community health and midwifery services",
      "Further study: B.Sc Nursing / diplomas (per norms)",
    ],
  },
  {
    id: "dpharma-ayurveda",
    href: "/courses/dpharma-ayurveda",
    shortTitle: "D.Pharma (Ayurveda)",
    fullTitle: "Diploma in Pharmacy — Ayurveda",
    summary:
      "A 2-year + 3-month training diploma blending classical Ayurvedic principles with modern pharmaceutical practice — as listed on the official site.",
    duration: "2 Years + 3 Months Training",
    fees: "₹42,500 / Year",
    eligibility: "10+2 or equivalent with PCM or PCB group",
    highlights: [
      "Classical Ayurvedic pharmaceutics + modern pharmacy basics",
      "Herb identification, quality and safe dispensing",
      "Laboratory and practical pharmacy training",
      "Guidance for Ayurvedic pharmacy and retail pathways",
    ],
    years: [
      {
        title: "Year 1 — Fundamentals",
        items: ["Ayurvedic principles and pharmacy history", "Pharmaceutics & chemistry — foundations", "Pharmacognosy: medicinal plants"],
      },
      {
        title: "Year 2 + Training — Practice",
        items: ["Ayurvedic formulations and manufacturing", "Dispensing & community pharmacy practice", "3-month practical training placement"],
      },
    ],
    careers: [
      "Ayurvedic pharmacy dispensing & manufacturing support",
      "Retail / hospital Ayurvedic pharmacy roles",
      "Further study: B.Pharma (Ayurveda) / allied (per norms)",
    ],
  },
];
