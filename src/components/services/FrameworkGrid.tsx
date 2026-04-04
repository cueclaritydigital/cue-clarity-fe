"use client";

import type { FrameworkSection } from "@/lib/data/services";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";

const PILLAR_COLORS = [
  { accent: "#29326e", bg: "rgba(41,50,110,0.08)" },
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
      className={`relative py-24 px-4 sm:px-6 overflow-hidden ${
        isDark ? "bg-blue-950" : "bg-white"
      }`}
    >
      {/* Ambient glows for dark variant */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/25 blur-[130px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-yellow-400/[0.06] blur-[100px] rounded-full" />
        </div>
      )}

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <FadeInView className={`mb-12 lg:mb-16 ${isDark ? "" : "text-center"}`}>
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
              className={`text-lg mt-4 max-w-2xl leading-relaxed ${isDark ? "text-white/60 " : "text-gray-500 mx-auto"}`}
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
                className={`group rounded-3xl p-6 lg:p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 ${
                  isDark
                    ? "bg-white/[0.05] border border-white/[0.08]"
                    : "bg-white shadow-sm text-center"
                }`}
                style={
                  isDark ? {} : { borderLeft: `3px solid ${color.accent}` }
                }
              >
                {/* Number badge */}
                {pillar.number && (
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                      isDark ? "" : "mx-auto"
                    }`}
                    style={{
                      backgroundColor: isDark
                        ? "rgba(255,193,20,0.15)"
                        : color.bg,
                      color: isDark ? "#ffc114" : color.accent,
                    }}
                  >
                    {pillar.number}
                  </div>
                )}

                <h3
                  className={`font-oswald font-bold text-xl uppercase tracking-tight leading-tight ${isDark ? "text-white" : "text-blue-950"}`}
                >
                  {pillar.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-white/60" : "text-gray-500"}`}
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
