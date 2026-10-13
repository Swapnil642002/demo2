export const NOTICES = [
  {
    id: "admissions-2026",
    date: "2026–27 session",
    tag: "Admissions",
    title: "Admissions open — GNM & D.Pharma (Ayurveda), 2026–27",
    body: "Applications are invited for the two diploma programmes on this site. Eligibility, duration and fees are on each course page. For seats and counselling dates, send an enquiry or call the office.",
  },
  {
    id: "verify-documents",
    date: "At admission",
    tag: "Admissions",
    title: "Bring original documents for verification at admission",
    body: "Class 10 & 12 marksheets, transfer/migration certificate, ID proof, category certificate (if applicable) and passport photographs.",
  },
  {
    id: "visit-campus",
    date: "Working days",
    tag: "Campus",
    title: "Campus visits on working days with prior appointment",
    body: "Prospective students and parents may visit labs, library and clinical-learning areas. Please call before visiting so faculty can guide you.",
  },
] as const;

export const FAQS = [
  {
    q: "Which courses does the college offer?",
    a: "Two diplomas: General Nursing & Midwifery (GNM, 3 years + 6 months internship) and Diploma in Pharmacy in Ayurveda (2 years + 3 months training).",
  },
  {
    q: "What is the eligibility?",
    a: "GNM: 10+2 with Science (preferred) or Arts. D.Pharma (Ayurveda): 10+2 with PCM or PCB. Final eligibility is confirmed by the college office.",
  },
  {
    q: "What are the fees?",
    a: "As published on the official site: GNM Rs.36,500/year; D.Pharma (Ayurveda) Rs.42,500/year. Confirm the current session schedule with the office.",
  },
  {
    q: "How do I apply?",
    a: "Submit the enquiry form, call +91 87262 74444, or write to info@shrishaktimayi.com. The admissions page explains the four steps.",
  },
  {
    q: "Where is the college?",
    a: "Shri Shaktimayi Hospital, Kharihani, Kharagpur, Azamgarh, Uttar Pradesh. A map link is on the contact page.",
  },
  {
    q: "Does the enquiry form really send my message?",
    a: "This demo build validates on client and server and is labelled demo-only unless the college connects an email service. It never claims delivery it cannot prove.",
  },
] as const;

export const LEADERSHIP = [
  { name: "Dr. Chandan Kumar Ray", role: "Principal", note: "Academic leadership of nursing and pharmacy programmes." },
  { name: "Dr. Sahajanand Pandey", role: "Manager", note: "Institutional administration and student services." },
  { name: "Dr. Dewanand Pandey", role: "Director", note: "Strategic direction and institutional development." },
] as const;

export const FACILITIES = [
  { title: "Nursing & midwifery lab", body: "Mannequin-based practice for vital signs, bedside procedures and midwifery fundamentals.", icon: "stethoscope" },
  { title: "Ayurvedic pharmacy lab", body: "Practical training in formulations, dispensing procedures and quality awareness.", icon: "flask" },
  { title: "Library & study hall", body: "Prescribed texts, reference shelves and quiet study space for both programmes.", icon: "library" },
  { title: "Hospital-associated learning", body: "Hands-on exposure through the associated Shri Shaktimayi Hospital at Kharihani.", icon: "hospital" },
  { title: "Sports & wellbeing", body: "Outdoor space and sports provision supporting a balanced student life.", icon: "trophy" },
  { title: "Career guidance", body: "Counselling, resume preparation and interview guidance for hospital and pharmacy pathways.", icon: "compass" },
] as const;

export const GALLERY = [
  { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop", alt: "Nursing instructor guiding a student with a stethoscope in a clinical skills room", caption: "Clinical skills practice", category: "Nursing" },
  { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop", alt: "Healthcare professionals reviewing a patient chart in a hospital corridor", caption: "Hospital-associated learning", category: "Campus" },
  { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop", alt: "Modern hospital building exterior with clean architecture", caption: "Institutional block", category: "Campus" },
  { src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop", alt: "Pharmacy shelves stocked with labelled medicine bottles", caption: "Pharmacy practice", category: "Pharmacy" },
  { src: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1200&auto=format&fit=crop", alt: "Mortar and pestle with dried Ayurvedic herbs on a wooden table", caption: "Ayurvedic pharmaceutics", category: "Pharmacy" },
  { src: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=1200&auto=format&fit=crop", alt: "Students studying together with books in a bright library", caption: "Library and study hall", category: "Campus" },
  { src: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?q=80&w=1200&auto=format&fit=crop", alt: "Laboratory glassware and microscope prepared for practical training", caption: "Laboratory training", category: "Labs" },
  { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop", alt: "Graduation caps thrown in celebration at an academic ceremony", caption: "Academic progression", category: "Campus" },
] as const;

export const HERO_IMAGE = {
  src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop",
  alt: "Nursing student in uniform using a tablet beside a hospital bed in a bright ward",
} as const;
