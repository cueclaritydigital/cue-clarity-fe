import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy | CueClarity",
  description:
    "Learn how CueClarity collects, uses, and protects your personal information. Read our complete privacy policy.",
  alternates: { canonical: "https://cueclarity.com/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-24 sm:py-32">
          <h1
            className="text-4xl sm:text-5xl font-bold text-[var(--primary-black)] mb-4"
            style={{ fontFamily: "var(--font-oswald, Oswald, sans-serif)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400 mb-12">
            Last updated: 11 April 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-8 text-[var(--primary-black)]/80 leading-relaxed">
            <Section title="1. Introduction">
              <p>
                CueClarity (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
                is committed to protecting the privacy of every visitor,
                student, parent, and professional who interacts with our
                website&nbsp;
                <a
                  href="https://cueclarity.com"
                  className="text-[var(--accent-blue)] underline"
                >
                  cueclarity.com
                </a>{" "}
                and our counselling services. This Privacy Policy explains what
                information we collect, how we use it, and the choices you have.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Personal information you provide:</strong> name, email
                  address, phone number, age/class, city, and any details
                  submitted via our contact forms, consultation booking forms,
                  or newsletter sign-up.
                </li>
                <li>
                  <strong>Assessment data:</strong> responses to psychometric
                  tests, career aptitude assessments, and counselling session
                  notes — collected solely for the purpose of delivering
                  personalised career guidance.
                </li>
                <li>
                  <strong>Automatically collected data:</strong> IP address,
                  browser type, device information, pages visited, and
                  referral/exit URLs through cookies and similar technologies.
                </li>
                <li>
                  <strong>Payment information:</strong> processed securely
                  through our third-party payment gateway; we do not store card
                  details on our servers.
                </li>
              </ul>
            </Section>

            <Section title="3. How We Use Your Information">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  To deliver career counselling services, personalised
                  assessments, and roadmaps.
                </li>
                <li>
                  To respond to enquiries, schedule sessions, and follow up on
                  consultations.
                </li>
                <li>
                  To send newsletters, programme updates, and educational
                  content (only with your consent).
                </li>
                <li>
                  To improve our website, services, and user experience through
                  aggregated analytics.
                </li>
                <li>To comply with legal obligations and resolve disputes.</li>
              </ul>
            </Section>

            <Section title="4. Cookies & Tracking">
              <p>
                We use essential cookies to keep the site functional and
                analytics cookies (e.g., Google Analytics) to understand traffic
                patterns. You can disable non-essential cookies through your
                browser settings at any time.
              </p>
            </Section>

            <Section title="5. Data Sharing & Third Parties">
              <p>
                We do <strong>not</strong> sell or rent your personal data. We
                may share limited information with:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  Trusted service providers (email delivery, analytics, payment
                  processing) who are contractually bound to protect your data.
                </li>
                <li>
                  Educational institutions or partner organisations — only with
                  your explicit consent.
                </li>
                <li>
                  Law enforcement or regulatory bodies when required by law.
                </li>
              </ul>
            </Section>

            <Section title="6. Data Security">
              <p>
                We implement industry-standard security measures — including
                HTTPS encryption, access controls, and regular audits — to
                safeguard your data. However, no method of electronic
                transmission is 100&nbsp;% secure, and we cannot guarantee
                absolute security.
              </p>
            </Section>

            <Section title="7. Data Retention">
              <p>
                We retain personal data only as long as necessary to provide our
                services or as required by law. Assessment data is stored for up
                to 3&nbsp;years after the last session unless you request
                earlier deletion.
              </p>
            </Section>

            <Section title="8. Your Rights">
              <ul className="list-disc pl-5 space-y-2">
                <li>Access, correct, or delete your personal data.</li>
                <li>Withdraw consent for marketing communications.</li>
                <li>Request a copy of your data in a portable format.</li>
                <li>
                  Lodge a complaint with the relevant data-protection authority.
                </li>
              </ul>
              <p className="mt-2">
                To exercise any of these rights, email us at{" "}
                <a
                  href="mailto:hello@cueclarity.com"
                  className="text-[var(--accent-blue)] underline"
                >
                  hello@cueclarity.com
                </a>
                .
              </p>
            </Section>

            <Section title="9. Children's Privacy">
              <p>
                Our counselling services may be used by minors (Class&nbsp;8+).
                We require parental or guardian consent before collecting any
                personal information from individuals under 18&nbsp;years of
                age.
              </p>
            </Section>

            <Section title="10. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with a revised &quot;Last
                updated&quot; date. Continued use of our services after changes
                constitutes acceptance.
              </p>
            </Section>

            <Section title="11. Contact Us">
              <p>
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
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
