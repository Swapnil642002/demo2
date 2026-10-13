# Shri Shaktimayi — Premium Institutional Website (Tender Demo)

Next.js 14 + TypeScript + Tailwind rebuild of shrishaktimayi.com for the Rs.85,000 tender demonstration.

## Quick start
```bash
npm install
npm run dev      # http://localhost:3000
npm test         # 6 validation-contract tests
npx tsc --noEmit # type check
npm run build && npm start  # production
```

## Pages (12)
Home `/` · About `/about` · Courses `/courses` · GNM `/courses/gnm` ·
D.Pharma Ayurveda `/courses/dpharma-ayurveda` · Admissions `/admissions` ·
Campus `/campus` · Faculty `/faculty` · Gallery `/gallery` · Notices `/notices` ·
Contact `/contact` · Privacy `/privacy` — plus `/api/enquiry`, sitemap, robots,
custom 404 and error pages.

## Enquiry workflow
React Hook Form + Zod on the client; Zod + honeypot + 5/min/IP rate limit on the server.
Without `ENQUIRY_DELIVERY` set (see `.env.example`), submissions return a labelled
demo-mode confirmation — delivery is never falsely claimed.

## Docs
- `docs/QA-REPORT.md` — reference audit, verified results, known defects
- `docs/CONTENT-CHECKLIST.md` — client confirmations before launch
- `docs/DEPLOYMENT.md` — staging/prod, env vars, rollback, ownership

