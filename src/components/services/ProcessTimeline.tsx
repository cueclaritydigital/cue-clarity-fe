"use client";

import type { ProcessSection } from "@/lib/data/services";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";

const STEP_COLORS = [
  {
    accent: "var(--primary-blue)",
    bg: "rgba(41,50,110,0.08)",
    light: "rgba(41,50,110,0.04)",
  },
  {
    accent: "#D97706",
    bg: "rgba(217,119,6,0.08)",
    light: "rgba(217,119,6,0.04)",
  },
  {
    accent: "#059669",
    bg: "rgba(5,150,105,0.08)",
    light: "rgba(5,150,105,0.04)",
  },
  {
    accent: "#6D28D9",
    bg: "rgba(109,40,217,0.08)",
    light: "rgba(109,40,217,0.04)",
  },
  {
    accent: "var(--primary-blue)",
    bg: "rgba(41,50,110,0.08)",
    light: "rgba(41,50,110,0.04)",
  },
  {
    accent: "#D97706",
    bg: "rgba(217,119,6,0.08)",
    light: "rgba(217,119,6,0.04)",
  },
];

export default function ProcessTimeline({
  section,
}: {
  section: ProcessSection;
}) {
  const isDark =
    section.variant === "dark" || section.variant === "large-numbers";

  return (
    <section
      className="section-padding px-4 sm:px-6"
      style={{
        backgroundColor: isDark
          ? "var(--primary-black)"
          : "var(--primary-white)",
      }}
    >
      {/* Ambient glow for dark variant */}
      {isDark && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary-blue)] opacity-20 blur-[120px] rounded-full" />
        </div>
      )}

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <FadeInView className="mb-12 lg:mb-16 max-w-3xl">
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
              className="type-lead mt-4"
              style={{
                color: isDark ? "rgba(255,255,255,0.6)" : "var(--muted-text)",
              }}
            >
              {section.description}
            </p>
          )}
        </FadeInView>

        {/* Steps grid — matches OurCounsellingProcess style */}
        <StaggerInView
          className={`grid gap-4 lg:gap-5 ${
            section.steps.length === 4
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              : section.steps.length <= 3
                ? "grid-cols-1 md:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {section.steps.map((step, i) => {
            const color = STEP_COLORS[i % STEP_COLORS.length];
            return (
              <FadeInView
                key={i}
                variants={fadeUp}
                className="group relative bg-[var(--surface-card)] rounded-[var(--radius-xl)] p-7 flex flex-col gap-3 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                style={{
                  boxShadow: isDark ? "none" : "var(--shadow-md)",
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.05)"
                    : "var(--surface-card)",
                  border: isDark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : undefined,
                  paddingTop: "3.5rem",
                }}
              >
                {/* Watermark number */}
                <span
                  className="absolute -right-2 -top-2 font-oswald font-extrabold leading-none pointer-events-none select-none"
                  style={{
                    fontSize: "10rem",
                    color: isDark
                      ? "rgba(255,255,255,0.04)"
                      : "var(--primary-black)",
                    opacity: isDark ? 1 : 0.06,
                  }}
                >
                  {step.number}
                </span>

                {/* Step badge */}
                <div
                  className="w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 font-bold text-sm"
                  style={{ backgroundColor: color.bg, color: color.accent }}
                >
                  {step.number}
                </div>

                {/* Title */}
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
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    lineHeight: "var(--leading-relaxed)",
                    color: isDark
                      ? "rgba(255,255,255,0.6)"
                      : "var(--muted-text)",
                  }}
                >
                  {step.description}
                </p>
              </FadeInView>
            );
          })}
        </StaggerInView>

        {/* Testimonial */}
        {section.testimonial && section.testimonial.quote && (
          <FadeInView
            className="mt-12 rounded-[var(--radius-xl)] p-6 md:p-8"
            style={{
              backgroundColor: isDark
                ? "rgba(255,255,255,0.05)"
                : "var(--secondary-white)",
              borderLeft: `4px solid var(--primary-yellow)`,
            }}
          >
            <p
              className="text-base leading-relaxed italic md:text-lg"
              style={{
                color: isDark
                  ? "rgba(255,255,255,0.8)"
                  : "var(--primary-black)",
              }}
            >
              &ldquo;{section.testimonial.quote}&rdquo;
            </p>
            {section.testimonial.author && (
              <p
                className="mt-3 text-sm font-bold"
                style={{
                  color: isDark
                    ? "var(--primary-white)"
                    : "var(--primary-black)",
                }}
              >
                — {section.testimonial.author}
                {section.testimonial.role && (
                  <span
                    className="font-normal"
                    style={{
                      color: isDark
                        ? "rgba(255,255,255,0.5)"
                        : "var(--muted-text)",
                    }}
                  >
                    , {section.testimonial.role}
                  </span>
                )}
              </p>
            )}
          </FadeInView>
        )}
      </div>
    </section>
  );
}
