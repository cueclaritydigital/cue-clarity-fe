"use client";

import type { FrameworkSection } from "@/lib/data/services";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";

const PILLAR_COLORS = [
  { accent: "var(--primary-blue)", bg: "rgba(41,50,110,0.08)" },
  { accent: "#D97706", bg: "rgba(217,119,6,0.08)" },
  { accent: "#059669", bg: "rgba(5,150,105,0.08)" },
  { accent: "#6D28D9", bg: "rgba(109,40,217,0.08)" },
];

export default function FrameworkGrid({
  section,
}: {
  section: FrameworkSection;
}) {
  const variant = section.variant ?? "timeline";
  const isDark = variant === "timeline";

  return (
    <section
      className="relative section-padding px-4 sm:px-6 overflow-hidden"
      style={{
        backgroundColor: isDark
          ? "var(--primary-blue)"
          : "var(--primary-white)",
      }}
    >
      {/* Ambient glows for dark variant */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[var(--accent-blue)] opacity-25 blur-[130px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[var(--primary-yellow)] opacity-[0.06] blur-[100px] rounded-full" />
        </div>
      )}

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <FadeInView className={`mb-12 lg:mb-16 ${isDark ? "" : "text-center"}`}>
          {section.eyebrow && (
            <span
              className="type-eyebrow mb-3 block"
              style={{
                color: isDark ? "var(--primary-yellow)" : "var(--accent-blue)",
                fontSize: "var(--text-base)",
              }}
            >
              {section.eyebrow}
            </span>
          )}
          <h2
            style={{
              fontFamily: "var(--font-oswald)",
              fontWeight: 800,
              fontSize: "clamp(2.25rem, 6vw, 3.5rem)",
              lineHeight: 1,
              letterSpacing: "var(--tracking-tight)",
              color: isDark ? "var(--primary-white)" : "var(--primary-black)",
              textTransform: "uppercase",
            }}
            dangerouslySetInnerHTML={{
              __html: section.headline.replace(
                /<em>(.*?)<\/em>/g,
                '<span style="color:var(--primary-yellow)">$1</span>',
              ),
            }}
          />
          {section.description && (
            <p
              className={`type-lead mt-4 max-w-2xl ${isDark ? "" : "mx-auto"}`}
              style={{
                color: isDark ? "rgba(255,255,255,0.6)" : "var(--muted-text)",
              }}
            >
              {section.description}
            </p>
          )}
        </FadeInView>

        {/* Pillars / Cards */}
        <StaggerInView
          className={`grid gap-4 lg:gap-5 ${
            section.pillars.length === 4
              ? "md:grid-cols-2 lg:grid-cols-4"
              : "md:grid-cols-3"
          }`}
        >
          {section.pillars.map((pillar, i) => {
            const color = PILLAR_COLORS[i % PILLAR_COLORS.length];
            return (
              <FadeInView
                key={i}
                variants={fadeUp}
                className={`group rounded-[var(--radius-xl)] p-6 lg:p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 ${
                  isDark ? "" : "text-center"
                }`}
                style={{
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.05)"
                    : "var(--surface-card)",
                  border: isDark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : undefined,
                  boxShadow: isDark ? undefined : "var(--shadow-sm)",
                  borderLeft: isDark ? undefined : `3px solid ${color.accent}`,
                }}
              >
                {/* Number badge */}
                {pillar.number && (
                  <div
                    className={`w-10 h-10 rounded-[var(--radius-md)] flex items-center justify-center font-bold text-sm ${
                      isDark ? "" : "mx-auto"
                    }`}
                    style={{
                      backgroundColor: isDark
                        ? "rgba(255,193,20,0.15)"
                        : color.bg,
                      color: isDark ? "var(--primary-yellow)" : color.accent,
                    }}
                  >
                    {pillar.number}
                  </div>
                )}

                <h3
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontWeight: 700,
                    fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                    letterSpacing: "var(--tracking-tight)",
                    textTransform: "uppercase",
                    lineHeight: 1.1,
                    color: isDark
                      ? "var(--primary-white)"
                      : "var(--primary-black)",
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    lineHeight: "var(--leading-relaxed)",
                    color: isDark
                      ? "rgba(255,255,255,0.6)"
                      : "var(--muted-text)",
                  }}
                >
                  {pillar.description}
                </p>
              </FadeInView>
            );
          })}
        </StaggerInView>
      </div>
    </section>
  );
}
