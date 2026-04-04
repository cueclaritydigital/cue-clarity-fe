"use client";

import type { ProcessSection } from "@/lib/data/services";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";

const STEP_COLORS = [
  {
    accent: "#29326e",
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
    accent: "#29326e",
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
      className={`py-24 px-4 sm:px-6 relative ${isDark ? "bg-blue-950" : "bg-white"}`}
    >
      {/* Ambient glow for dark variant */}
      {isDark && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-800/20 blur-[120px] rounded-full" />
        </div>
      )}

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <FadeInView className="mb-12 lg:mb-16 max-w-3xl">
          {section.eyebrow && (
            <span
              className={`text-base font-bold tracking-widest uppercase mb-3 block ${isDark ? "text-yellow-400" : "text-blue-700"}`}
            >
              {section.eyebrow}
            </span>
          )}
          <h2
            className={`heading-font text-4xl sm:text-5xl lg:text-6xl ${isDark ? "text-white" : "text-[var(--primary-blue)]"}`}
            dangerouslySetInnerHTML={{
              __html: section.headline.replace(
                /<em>(.*?)<\/em>/g,
                '<span style="color:#ffc114">$1</span>',
              ),
            }}
          />
          {section.description && (
            <p
              className={`text-lg mt-4 leading-relaxed ${isDark ? "text-white/60" : "text-gray-500"}`}
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
                className={`group relative rounded-3xl p-7 pt-14 flex flex-col gap-3 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden ${
                  isDark
                    ? "bg-white/[0.05] border border-white/[0.08]"
                    : "bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                }`}
              >
                {/* Watermark number */}
                <span
                  className={`absolute -right-2 -top-2 font-oswald font-extrabold leading-none pointer-events-none select-none text-[10rem] ${
                    isDark ? "text-white/[0.04]" : "text-blue-950/[0.06]"
                  }`}
                >
                  {step.number}
                </span>

                {/* Step badge */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 font-bold text-sm"
                  style={{ backgroundColor: color.bg, color: color.accent }}
                >
                  {step.number}
                </div>

                {/* Title */}
                <h3
                  className={`font-oswald font-bold text-xl uppercase tracking-tight leading-tight ${isDark ? "text-white" : "text-blue-950"}`}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-white/60" : "text-gray-500"}`}
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
            className={`mt-12 rounded-3xl p-6 md:p-8 border-l-4 border-yellow-400 ${
              isDark ? "bg-white/[0.05]" : "bg-gray-50"
            }`}
          >
            <p
              className={`text-base leading-relaxed italic md:text-lg ${isDark ? "text-white/80" : "text-blue-950"}`}
            >
              &ldquo;{section.testimonial.quote}&rdquo;
            </p>
            {section.testimonial.author && (
              <p
                className={`mt-3 text-sm font-bold ${isDark ? "text-white" : "text-blue-950"}`}
              >
                — {section.testimonial.author}
                {section.testimonial.role && (
                  <span
                    className={`font-normal ${isDark ? "text-white/50" : "text-gray-500"}`}
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
