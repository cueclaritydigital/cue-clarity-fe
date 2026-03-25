"use client";

import type { FeatureListSection } from "@/lib/data/services";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";

const FEATURE_COLORS = [
  { accent: "var(--primary-blue)", bg: "rgba(41,50,110,0.08)" },
  { accent: "#D97706", bg: "rgba(217,119,6,0.08)" },
  { accent: "#059669", bg: "rgba(5,150,105,0.08)" },
  { accent: "#6D28D9", bg: "rgba(109,40,217,0.08)" },
];

export default function FeatureList({
  section,
}: {
  section: FeatureListSection;
}) {
  const cols = section.columns ?? 1;

  return (
    <section className="section-padding px-4 sm:px-6 bg-[var(--primary-white)]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <FadeInView className="mb-12 lg:mb-16 max-w-3xl">
          {section.eyebrow && (
            <span
              className="type-eyebrow text-[var(--accent-blue)] mb-3 block"
              style={{ fontSize: "var(--text-base)" }}
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
          {section.description && (
            <p className="type-lead mt-4 text-[var(--muted-text)] max-w-2xl">
              {section.description}
            </p>
          )}
        </FadeInView>

        {/* Features */}
        <StaggerInView
          className={`grid gap-4 ${cols === 2 ? "md:grid-cols-2" : "grid-cols-1 max-w-3xl"}`}
        >
          {section.features.map((feature, i) => {
            const color = FEATURE_COLORS[i % FEATURE_COLORS.length];
            return (
              <FadeInView
                key={i}
                variants={fadeUp}
                className="group flex gap-5 items-start bg-[var(--surface-card)] border border-[var(--primary-black)]/10 rounded-[var(--radius-lg)] p-5 lg:p-6 transition-all duration-[var(--transition-base)] hover:bg-[var(--secondary-white)]/50 hover:border-[var(--primary-blue)]/30"
              >
                {/* Icon Container */}
                <div
                  className="w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-[var(--transition-base)] font-bold text-sm"
                  style={{ backgroundColor: color.bg, color: color.accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5 mt-0.5">
                  <h3
                    className="text-[var(--primary-black)] uppercase tracking-tight"
                    style={{
                      fontFamily: "var(--font-oswald), system-ui, sans-serif",
                      fontSize: "var(--text-lg)",
                      fontWeight: 700,
                      lineHeight: "var(--leading-tight)",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-[14px] text-[var(--muted-text)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeInView>
            );
          })}
        </StaggerInView>
      </div>
    </section>
  );
}
