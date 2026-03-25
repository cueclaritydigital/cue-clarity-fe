"use client";

import type { StatsSection } from "@/lib/data/services";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";

const STAT_ACCENTS = [
  { accent: "var(--primary-blue)", bg: "rgba(41,50,110,0.07)" },
  { accent: "#059669", bg: "rgba(5,150,105,0.07)" },
  { accent: "#D97706", bg: "rgba(217,119,6,0.07)" },
  { accent: "#6D28D9", bg: "rgba(109,40,217,0.07)" },
];

export default function StatsRow({ section }: { section: StatsSection }) {
  const hasHeader = section.eyebrow || section.headline;

  return (
    <section className="section-padding px-4 sm:px-6 bg-[var(--secondary-white)]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        {hasHeader && (
          <FadeInView className="mb-12 lg:mb-16 text-center">
            {section.eyebrow && (
              <span
                className="type-eyebrow text-[var(--accent-blue)] mb-3 block"
                style={{ fontSize: "var(--text-base)" }}
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
              <p className="type-lead mt-4 text-[var(--muted-text)] max-w-2xl mx-auto">
                {section.description}
              </p>
            )}
          </FadeInView>
        )}

        {/* Stats */}
        <StaggerInView
          className={`grid gap-4 lg:gap-5 ${
            section.stats.length === 2
              ? "md:grid-cols-2"
              : section.stats.length === 4
                ? "grid-cols-2 md:grid-cols-4"
                : "md:grid-cols-3"
          }`}
        >
          {section.stats.map((stat, i) => {
            const color = STAT_ACCENTS[i % STAT_ACCENTS.length];
            return (
              <FadeInView
                key={i}
                variants={fadeUp}
                className="group bg-white flex flex-col gap-3 p-5 lg:p-6 rounded-2xl lg:rounded-3xl border border-transparent hover:border-[rgba(0,0,0,0.06)] text-center"
                style={{ boxShadow: "var(--shadow-md)" }}
              >
                <p
                  className="font-extrabold leading-none"
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                    color: color.accent,
                    letterSpacing: "var(--tracking-tight)",
                  }}
                >
                  {stat.value}
                  {stat.suffix && (
                    <span style={{ opacity: 0.7 }}>{stat.suffix}</span>
                  )}
                </p>
                <p
                  className="font-bold text-[var(--primary-black)] leading-snug"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  {stat.label}
                </p>
              </FadeInView>
            );
          })}
        </StaggerInView>
      </div>
    </section>
  );
}
