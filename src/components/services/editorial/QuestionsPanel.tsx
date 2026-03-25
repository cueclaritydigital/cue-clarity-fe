"use client";

import { FiHelpCircle } from "react-icons/fi";
import type { QuestionsSection } from "@/lib/data/services";
import ReactIcon from "@/components/common/ReactIcon";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";

const ACCENT_COLORS = [
  {
    bg: "rgba(41,50,110,0.10)",
    accent: "#29326e",
    border: "rgba(41,50,110,0.18)",
  },
  {
    bg: "rgba(234,88,12,0.10)",
    accent: "#ea580c",
    border: "rgba(234,88,12,0.18)",
  },
  {
    bg: "rgba(22,163,74,0.10)",
    accent: "#16a34a",
    border: "rgba(22,163,74,0.18)",
  },
  {
    bg: "rgba(147,51,234,0.10)",
    accent: "#9333ea",
    border: "rgba(147,51,234,0.18)",
  },
];

export default function QuestionsPanel({
  section,
}: {
  section: QuestionsSection;
}) {
  return (
    <section className="section-padding px-4 sm:px-6 bg-[var(--primary-white)] relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[130px]"
        style={{ background: "var(--primary-blue)" }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        {(section.eyebrow || section.headline) && (
          <FadeInView className="mb-12 lg:mb-16 max-w-3xl">
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

        {/* Questions grid */}
        <StaggerInView className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {section.questions.map((q, i) => {
            const color = ACCENT_COLORS[i % ACCENT_COLORS.length];
            return (
              <FadeInView
                key={i}
                variants={fadeUp}
                className="group flex items-start gap-4 rounded-[var(--radius-lg)] p-5 lg:p-6 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{
                  border: `1px solid rgba(0,0,0,0.06)`,
                  borderLeft: `3px solid ${color.accent}`,
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center"
                  style={{ background: color.bg, color: color.accent }}
                >
                  {q.icon ? (
                    <ReactIcon name={q.icon} size={18} />
                  ) : (
                    <FiHelpCircle size={18} />
                  )}
                </div>
                <p
                  className="text-base font-medium leading-snug text-[var(--primary-black)]"
                  style={{
                    fontFamily: "var(--font-oswald)",
                    textTransform: "uppercase",
                    letterSpacing: "var(--tracking-tight)",
                  }}
                >
                  {q.text}
                </p>
              </FadeInView>
            );
          })}
        </StaggerInView>
      </div>
    </section>
  );
}
