"use client";
import FadeInView from "@/components/animate/FadeInView";
import { slideInLeft, slideInRight } from "@/lib/animations/variants";
import { FiMail, FiMapPin, FiPhone, FiChevronDown } from "react-icons/fi";

const WHO_OPTIONS = [
  "Student (8-10 Std)",
  "Student (11-12 Std)",
  "Student (UG)",
  "Student (PG)",
  "Parent (8-10 Std)",
  "Parent (11-12 Std)",
  "Parent (UG)",
  "Parent (PG)",
  "Working Professional (1-10 yrs exp)",
  "Senior Working Professional (10+ yrs)",
  "Executive with Career Break",
  "Principal/Teacher",
  "Others",
];

export default function ContactSection() {
  return (
    <section className="section-padding px-4 sm:px-6 bg-[var(--primary-white)]">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ── Left — intro ── */}
          <FadeInView variants={slideInLeft}>
            {/* Eyebrow */}
            <p
              className="type-label mb-4 tracking-[0.2em] uppercase"
              style={{ color: "var(--primary-yellow)" }}
            >
              Get in touch
            </p>

            <h2
              style={{
                fontFamily: "var(--font-oswald)",
                fontWeight: 800,
                fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
                color: "var(--primary-blue)",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Start Your <br />
              Next Chapter
            </h2>

            {/* Accent bar */}
            <div
              className="mt-5 mb-7 h-1 w-16 rounded-full"
              style={{ backgroundColor: "var(--primary-yellow)" }}
            />

            <p
              className="type-lead mb-10 max-w-md"
              style={{ color: "var(--muted-text)" }}
            >
              Ready to find clarity in your next move? Our counsellors are here
              to help you navigate the noise.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform hover:scale-105"
                  style={{
                    backgroundColor: "rgba(41,50,110,0.07)",
                    color: "var(--primary-blue)",
                  }}
                >
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <p
                    className="type-label"
                    style={{ color: "var(--primary-yellow)" }}
                  >
                    Write to us
                  </p>
                  <p
                    className="font-bold text-lg"
                    style={{ color: "var(--primary-blue)" }}
                  >
                    hello@cueclarity.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform hover:scale-105"
                  style={{
                    backgroundColor: "rgba(41,50,110,0.07)",
                    color: "var(--primary-blue)",
                  }}
                >
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <p
                    className="type-label"
                    style={{ color: "var(--primary-yellow)" }}
                  >
                    Call us
                  </p>
                  <p
                    className="font-bold text-lg"
                    style={{ color: "var(--primary-blue)" }}
                  >
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform hover:scale-105"
                  style={{
                    backgroundColor: "rgba(41,50,110,0.07)",
                    color: "var(--primary-blue)",
                  }}
                >
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p
                    className="type-label"
                    style={{ color: "var(--primary-yellow)" }}
                  >
                    Visit us
                  </p>
                  <p
                    className="font-bold text-lg"
                    style={{ color: "var(--primary-blue)" }}
                  >
                    Chandigarh · Pan India (Online)
                  </p>
                </div>
              </div>
            </div>
          </FadeInView>

          {/* ── Right — form card ── */}
          <FadeInView variants={slideInRight}>
            <div
              className="p-8 sm:p-10 lg:p-12 rounded-[2.5rem]"
              style={{
                backgroundColor: "var(--surface-card)",
                border: "1px solid var(--secondary-white)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              {/* Card header */}
              <div className="mb-8">
                <h3
                  className="font-bold text-2xl mb-1"
                  style={{
                    fontFamily: "var(--font-oswald)",
                    color: "var(--primary-blue)",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  Send us a message
                </h3>
                <p className="text-sm" style={{ color: "var(--muted-text)" }}>
                  We'll get back to you within 24 hours.
                </p>
              </div>

              <form className="space-y-5" action="#" method="POST">
                {/* Row 1 — Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <FieldWrap label="Full Name" htmlFor="about-name">
                    <input
                      id="about-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Enter your name"
                      className="field-input"
                    />
                  </FieldWrap>

                  <FieldWrap label="Email" htmlFor="about-email">
                    <input
                      id="about-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="field-input"
                    />
                  </FieldWrap>
                </div>

                {/* Row 2 — Phone + Who are you */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <FieldWrap label="Phone Number" htmlFor="about-phone">
                    <input
                      id="about-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 00000 00000"
                      className="field-input"
                    />
                  </FieldWrap>

                  <FieldWrap label="I am a…" htmlFor="about-role">
                    <div className="relative">
                      <select
                        id="about-role"
                        name="role"
                        required
                        defaultValue=""
                        className="field-input appearance-none pr-10 cursor-pointer w-[90%] truncate"
                        style={{ color: "var(--primary-black)" }}
                      >
                        <option
                          value=""
                          disabled
                          style={{ color: "var(--muted-text)" }}
                        >
                          — Select —
                        </option>
                        {WHO_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {/* Custom chevron */}
                      <span
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
                        style={{ color: "var(--primary-blue)" }}
                      >
                        <FiChevronDown size={14} strokeWidth={1.8} />
                      </span>
                    </div>
                  </FieldWrap>
                </div>

                {/* Message */}
                <FieldWrap label="Your Message" htmlFor="about-message">
                  <textarea
                    id="about-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us what you're looking for…"
                    className="field-input resize-none"
                  />
                </FieldWrap>

                <button
                  type="submit"
                  className="btn-primary w-full !py-4 uppercase tracking-widest text-sm mt-1"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </FadeInView>
        </div>
      </div>

      {/* ── Scoped field styles ── */}
      <style jsx>{`
        .field-input {
          width: 100%;
          border-radius: 0.5rem;
          padding: 0.75rem 1.1rem;
          font-size: 0.875rem;
          outline: none;
          transition:
            border-color 0.2s,
            box-shadow 0.2s;
          background-color: var(--primary-white);
          border: 1.5px solid var(--secondary-white, #e8eaf0);
          color: var(--primary-black);
        }
        .field-input::placeholder {
          color: var(--muted-text);
          opacity: 0.6;
        }
        .field-input:focus {
          border-color: var(--primary-blue);
          box-shadow: 0 0 0 3px rgba(41, 50, 110, 0.08);
        }
        select.field-input {
          background-color: var(--primary-white);
        }
      `}</style>
    </section>
  );
}

/* ── tiny helper so label+input stay DRY ── */
function FieldWrap({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={htmlFor}
        className="type-label ml-1 block"
        style={{ color: "var(--muted-text)" }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
