# Deployment & Handover — Shri Shaktimayi Demo

## Environments
- Staging/demo: deploy `main` to Vercel (or any Next.js host). No env vars required — the enquiry form runs in labelled demo mode.
- Production: connect the client's domain only after written approval + a rollback plan (previous host stays live until cutover is verified).

## Env vars
- `ENQUIRY_DELIVERY` (optional): when empty, `/api/enquiry` validates + logs in demo mode. When set, forward validated payloads to the college inbox (Resend/mailbox webhook). See `.env.example`. Never commit real keys.

## Build & run
- `npm install` → `npm run build` → `npm start`. Node 20+.
- Checks: `npx tsc --noEmit`, `npm run lint`.

## Rollback
- Vercel: redeploy the previous production deployment (one click). Keep the old site's hosting active for 7 days post-cutover.

## Ownership & costs
- Domain + hosting accounts stay in the client's name. Recurring costs: domain (~₹1,000/yr), Vercel hobby/pro per plan, email service only if enabled.
