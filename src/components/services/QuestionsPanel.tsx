"use client";

import { FiHelpCircle } from "react-icons/fi";
import type { QuestionsSection } from "@/lib/data/services";
import ReactIcon from "@/components/common/ReactIcon";
import FadeInView from "@/components/animate/FadeInView";
import { fadeUp } from "@/lib/animations/variants";

const ACCENT_COLORS = [
  { accent: "#29326e", ring: "rgba(41,50,110,0.20)" },
  { accent: "#ea580c", ring: "rgba(234,88,12,0.20)" },
  { accent: "#16a34a", ring: "rgba(22,163,74,0.20)" },
  { accent: "#9333ea", ring: "rgba(147,51,234,0.20)" },
];

export default function QuestionsPanel({
  section,
}: {
  section: QuestionsSection;
}) {
  return (
    <section className="section-padding px-4 sm:px-6 bg-[var(--primary-white)] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* Header */}
        {(section.eyebrow || section.headline) && (
          <FadeInView className="mb-12 lg:mb-16">
            {section.eyebrow && (
              <span
                className="type-eyebrow mb-3 block"
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--accent-blue)",
                }}
              >
                {section.eyebrow}
              </span>
            )}
            {section.headline && (
              <h2
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 800,
                  fontSize: "clamp(2.25rem, 6vw, 3.5rem)",
                  lineHeight: 1,
                  letterSpacing: "var(--tracking-tight)",
                  color: "var(--primary-black)",
                  textTransform: "uppercase",
                }}
                dangerouslySetInnerHTML={{
                  __html: section.headline.replace(
                    /<em>(.*?)<\/em>/g,
                    '<span style="color:var(--primary-yellow)">$1</span>',
                  ),
                }}
              />
            )}
            {section.description && (
              <p className="type-lead mt-4 text-[var(--muted-text)] max-w-2xl">
                {section.description}
              </p>
            )}
          </FadeInView>
        )}

        {/* Desktop: 2-column (timeline + decorative right) / Mobile: single column */}
        <div className="lg:grid lg:grid-cols-[1fr_auto] lg:gap-12 xl:gap-16">
          {/* Timeline column */}
          <div className="relative space-y-10 sm:space-y-12 lg:max-w-2xl">
            {/* Connecting line */}
            <div
              className="absolute left-6 top-8 bottom-8 w-[2px] -z-10"
              style={{ background: "var(--primary-black)", opacity: 0.12 }}
            />

            {section.questions.map((q, i) => {
              const color = ACCENT_COLORS[i % ACCENT_COLORS.length];
              return (
                <FadeInView
                  key={i}
                  variants={fadeUp}
                  className="flex gap-5 sm:gap-6 group"
                >
                  {/* Timeline node */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--primary-white)] flex items-center justify-center z-10"
                    style={{
                      border: "4px solid var(--primary-white)",
                      boxShadow: `0 0 0 2px ${color.ring}, 0 8px 20px rgba(0,0,0,0.06)`,
                      color: color.accent,
                    }}
                  >
                    {q.icon ? (
                      <ReactIcon name={q.icon} size={20} />
                    ) : (
                      <FiHelpCircle size={20} />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 rounded-xl p-5 sm:p-6 bg-[var(--primary-white)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg"
                    style={{
                      border: "1px solid rgba(0,0,0,0.06)",
                      borderLeftWidth: "4px",
                      borderLeftColor: color.accent,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
                    }}
                  >
                    <p
                      className="text-base sm:text-lg font-medium leading-snug text-[var(--primary-black)]"
                      style={{
                        fontFamily: "var(--font-oswald)",
                        textTransform: "uppercase",
                        letterSpacing: "var(--tracking-tight)",
                      }}
                    >
                      {q.text}
                    </p>
                  </div>
                </FadeInView>
              );
            })}
          </div>

          {/* Right column — desktop only: reassurance content */}
          <div className="hidden lg:flex lg:flex-col  relative w-[320px] xl:w-[400px] pl-8 xl:pl-12 border-l-2 border-[var(--primary-blue)]/10">
            {/* Eyebrow */}
            <span
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--accent-blue)" }}
            >
              How We Help
            </span>

            {/* Heading */}
            <h3
              className="mb-4"
              style={{
                fontFamily: "var(--font-oswald)",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                lineHeight: 1.15,
                letterSpacing: "var(--tracking-tight)",
                color: "var(--primary-black)",
                textTransform: "uppercase",
              }}
            >
              We Turn These{" "}
              <span style={{ color: "var(--primary-yellow)" }}>Doubts</span>{" "}
              Into A Clear Roadmap
            </h3>

            {/* Description */}
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--muted-text)" }}
            >
              Through psychometric assessments, one-on-one counselling, and
              real-world career mapping, we replace confusion with clarity — so
              every decision is backed by data, not fear.
            </p>

            {/* Decorative divider */}
            <div
              className="w-12 h-[3px] rounded-full mb-6"
              style={{ background: "var(--primary-yellow)" }}
            />

            {/* Quote */}
            <blockquote className="relative pl-0">
              <p
                className="text-lg italic leading-relaxed"
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 400,
                  color: "var(--primary-black)",
                  opacity: 0.7,
                }}
              >
                &ldquo;The only way to do great work is to love what you do. If
                you haven&rsquo;t found it yet, keep looking.&rdquo;
              </p>
              <footer
                className="mt-3 text-sm font-medium"
                style={{ color: "var(--accent-blue)" }}
              >
                — Steve Jobs
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
