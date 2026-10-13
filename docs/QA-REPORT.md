# QA Report
Date: 2026-10-13 (updated post-verification). Env: Ubuntu 26.04, Node 22, Next 14.2.5.

## 1. Reference audit (shrishaktimayi.com, fetched 2026-10-13)
Verified & reused: name, est. 2015, founder Vaidya Satnarayan Pandey, Kharihani/Azamgarh address,
+91 87262 74444, info@shrishaktimayi.com, GNM (3y6m, Rs.36,500/yr, 10+2 Sci/Arts),
D.Pharma Ayurveda (2y3m, Rs.42,500/yr, 10+2 PCM/PCB), leadership names/roles,
sister concerns (pharmacy 2009, Sanskrit college 2007).
Problems found: /about and /contact return 404; /courses shows a login wall; vague
"accredited by relevant bodies" claim; unverifiable testimonials/stats -> excluded from rebuild.
Needs client confirmation: approvals, seats, current fees, dates, staff roster, real photos, socials.

## 2. Verification results (this build)
- `npx tsc --noEmit` -> EXIT 0, zero errors (fixed: leftover header.tsx duplicate,
  Zod v4 refine output/input generic split via EnquiryFormValues).
- `next build` -> BUILD_EXIT 0. 19 routes generated: /, /about, /courses, /courses/gnm,
  /courses/dpharma-ayurveda, /admissions, /campus, /faculty, /gallery, /notices,
  /contact, /privacy, /api/enquiry, /robots.txt, /sitemap.xml, /_not-found.
  First Load JS ~87-100 kB shared; contact page 134 kB (form).
- Route smoke test (production server, port 3123): all 12 pages + sitemap + robots -> 200;
  /nonexistent -> 404 with custom not-found page.
- Enquiry API: valid payload -> 200 demo-mode confirmation; invalid (short name/bad phone)
  -> 422/400 with first-error message; honeypot-filled -> 400 spam. Rate limit 5/min/IP coded
  (not load-tested).
- `npm run lint`: terminal capture in this environment was unreliable; code was manually
  cleaned (unused imports removed, duplicate ids fixed, aria-labelledby targets verified).
  Re-run `npm run lint` before handover.
- NOT measured: Lighthouse LCP/INP/CLS, keyboard-only walkthrough, screen-reader pass,
  dependency audit (`npm audit`). No performance claims are made. Vitest suite scaffolded
  (`npm test`) — run before handover.

## 3. Known limitations / defects
- Enquiry is demo-mode until ENQUIRY_DELIVERY is configured (clearly labelled on-screen).
- Gallery/hero use representative Unsplash images, not real campus photos.
- Only 3 leadership profiles (verified); full roster pending client data.
- Notices are the 3 current items from the audit; dated items must be pruned by process.
- `npm audit` reports 2 vulnerabilities (1 high, 1 critical) in scaffold-pinned next@14.2.5
  transitive deps; upstream fix is next@14.2.35 — upgrade + re-verify before production handover.
- Lighthouse LCP/INP/CLS not yet measured — no performance claims made.

