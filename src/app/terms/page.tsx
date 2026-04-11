import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Terms of Service | CueClarity",
  description:
    "Read the terms and conditions governing the use of CueClarity's website and career counselling services.",
  alternates: { canonical: "https://cueclarity.com/terms" },
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-24 sm:py-32">
          <h1
            className="text-4xl sm:text-5xl font-bold text-[var(--primary-black)] mb-4"
            style={{ fontFamily: "var(--font-oswald, Oswald, sans-serif)" }}
          >
            Terms of Service
          </h1>
          <p className="text-sm text-gray-400 mb-12">
            Last updated: 11 April 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-8 text-[var(--primary-black)]/80 leading-relaxed">
            <Section title="1. Acceptance of Terms">
              <p>
                By accessing or using the CueClarity website (
                <a
                  href="https://cueclarity.com"
                  className="text-[var(--accent-blue)] underline"
                >
                  cueclarity.com
                </a>
                ) and any services provided by CueClarity (&quot;we&quot;,
                &quot;our&quot;, or &quot;us&quot;), you agree to be bound by
                these Terms of Service. If you do not agree, please do not use
                our website or services.
              </p>
            </Section>

            <Section title="2. Description of Services">
              <p>
                CueClarity provides career counselling, psychometric
                assessments, personalised career roadmaps, mentorship
                programmes, workshops, and educational content for students,
                parents, and working professionals.
              </p>
            </Section>

            <Section title="3. Eligibility">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  You must be at least 13&nbsp;years of age to use our website.
                </li>
                <li>
                  Individuals under 18 must have parental or guardian consent
                  before purchasing or enrolling in any paid service.
                </li>
              </ul>
            </Section>

            <Section title="4. User Accounts & Bookings">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  You are responsible for providing accurate information when
                  booking consultations or filling out forms.
                </li>
                <li>
                  You agree not to impersonate another person or provide false
                  details.
                </li>
                <li>
                  Session bookings are subject to availability and confirmation
                  by our team.
                </li>
              </ul>
            </Section>

            <Section title="5. Payments & Refunds">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  All fees are listed in Indian Rupees (INR) and are inclusive
                  of applicable taxes unless stated otherwise.
                </li>
                <li>
                  Payments are processed securely through our third-party
                  payment gateway.
                </li>
                <li>
                  <strong>Refund policy:</strong> If you are not satisfied with
                  a session, you may request a refund within 7&nbsp;days of the
                  session date by emailing{" "}
                  <a
                    href="mailto:hello@cueclarity.com"
                    className="text-[var(--accent-blue)] underline"
                  >
                    hello@cueclarity.com
                  </a>
                  . Refunds are evaluated on a case-by-case basis. Digital
                  products (e-books, recorded webinars) are non-refundable once
                  delivered.
                </li>
              </ul>
            </Section>

            <Section title="6. Intellectual Property">
              <p>
                All content on this website — including text, graphics, logos,
                assessment tools, course materials, and software — is the
                property of CueClarity or its licensors and is protected by
                Indian and international copyright laws. You may not reproduce,
                distribute, or create derivative works without our prior written
                consent.
              </p>
            </Section>

            <Section title="7. Counselling Disclaimer">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Our career counselling services are advisory in nature. We
                  provide guidance based on assessments, research, and
                  professional expertise, but we do <strong>not</strong>{" "}
                  guarantee specific outcomes such as admission, placement, or
                  salary.
                </li>
                <li>
                  CueClarity is <strong>not</strong> a licensed mental-health
                  therapy provider. For clinical mental-health concerns, please
                  consult a qualified therapist or psychiatrist.
                </li>
                <li>
                  Final career decisions are solely the responsibility of the
                  client (or their guardian).
                </li>
              </ul>
            </Section>

            <Section title="8. Prohibited Conduct">
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  Use our services for any unlawful purpose or to solicit others
                  to unlawful acts.
                </li>
                <li>
                  Attempt to gain unauthorised access to our systems or data.
                </li>
                <li>
                  Reproduce, resell, or redistribute assessment content,
                  reports, or course materials.
                </li>
                <li>
                  Post or transmit harmful, offensive, or misleading content
                  through any of our platforms.
                </li>
              </ul>
            </Section>

            <Section title="9. Limitation of Liability">
              <p>
                To the fullest extent permitted by law, CueClarity shall not be
                liable for any indirect, incidental, or consequential damages
                arising from the use of our website or services. Our total
                liability for any claim shall not exceed the amount you paid for
                the specific service giving rise to the claim.
              </p>
            </Section>

            <Section title="10. Third-Party Links">
              <p>
                Our website may contain links to third-party websites or
                resources. We are not responsible for the content, privacy
                practices, or availability of those external sites.
              </p>
            </Section>

            <Section title="11. Modifications to Terms">
              <p>
                We reserve the right to update these Terms at any time. Changes
                will be posted on this page with a revised &quot;Last
                updated&quot; date. Continued use of our services after changes
                constitutes your acceptance of the revised Terms.
              </p>
            </Section>

            <Section title="12. Governing Law & Jurisdiction">
              <p>
                These Terms are governed by the laws of India. Any disputes
                shall be subject to the exclusive jurisdiction of courts in Navi
                Mumbai, Maharashtra.
              </p>
            </Section>

            <Section title="13. Contact Us">
              <p>For questions about these Terms, please reach out:</p>
              <ul className="list-none pl-0 space-y-1 mt-2">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:hello@cueclarity.com"
                    className="text-[var(--accent-blue)] underline"
                  >
                    hello@cueclarity.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong> +91 8652 222 525
                </li>
                <li>
                  <strong>Address:</strong> Navi Mumbai, Maharashtra,
                  India&nbsp;– 410209
                </li>
              </ul>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-[var(--primary-black)] mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}
