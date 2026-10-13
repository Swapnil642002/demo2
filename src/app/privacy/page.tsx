import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/sections";

export const metadata: Metadata = { title: "Privacy policy", description: "How enquiries and personal data are handled on this demonstration site." };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" lead="Minimal collection, honest demo labelling, and clear retention." />
      <Container className="py-12 max-w-3xl prose-institution grid gap-4">
        <p><strong>What we collect.</strong> Only what the enquiry form asks: name, mobile number, optional email, course of interest, optional message and your consent record.</p>
        <p><strong>Why.</strong> Solely to respond to admission enquiries. No marketing lists, no sale of data, no tracking beyond standard hosting logs.</p>
        <p><strong>Demo mode.</strong> Until the college connects an email service (see ENQUIRY_DELIVERY in the docs), submissions are validated and logged to the server console only — they are not emailed anywhere. The form says so on-screen.</p>
        <p><strong>Retention.</strong> Once email delivery is enabled, enquiries are retained only as long as needed to respond and meet record-keeping duties, then deleted on request at info@shrishaktimayi.com.</p>
        <p><strong>Your rights.</strong> Ask for a copy, correction or deletion of your enquiry at any time via the contact page.</p>
        <p><strong>Security.</strong> Server-side validation, rate limiting (5/minute per IP), honeypot spam field, security headers and no secrets in client bundles.</p>
      </Container>
    </>
  );
}
