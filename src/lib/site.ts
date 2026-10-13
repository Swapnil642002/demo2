export const SITE = {
  name: "Shri Shaktimayi Ayurvedic Pharmacy & Nursing College",
  shortName: "Shri Shaktimayi",
  tagline: "Shaping Pharmacists, Advancing Healthcare",
  established: 2015,
  founder: "Vaidya Satnarayan Pandey",
  line1: "Shri Shaktimayi Hospital, Kharihani",
  line2: "Kharagpur, Azamgarh, Uttar Pradesh",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Shri+Shaktimayi+Hospital+Kharihani+Azamgarh+Uttar+Pradesh",
  phoneDisplay: "+91 87262 74444",
  phoneHref: "tel:+918726274444",
  email: "info@shrishaktimayi.com",
  base: "https://shrishaktimayi-demo.vercel.app",
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Admissions", href: "/admissions" },
  { label: "Campus", href: "/campus" },
  { label: "Faculty", href: "/faculty" },
  { label: "Gallery", href: "/gallery" },
  { label: "Notices", href: "/notices" },
  { label: "Contact", href: "/contact" },
] as const;
