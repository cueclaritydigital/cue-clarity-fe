"use client";

import { FiX, FiCheck } from "react-icons/fi";
import type { ComparisonSection } from "@/lib/data/services";
import FadeInView from "@/components/animate/FadeInView";

export default function ComparisonPanel({
  section,
}: {
  section: ComparisonSection;
}) {
  return (
    <section className="relative section-padding px-4 sm:px-6 bg-[var(--primary-black)] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary-blue)] opacity-20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        {(section.headline || section.eyebrow) && (
          <FadeInView className="mb-12 lg:mb-16 max-w-3xl">
            {section.eyebrow && (
              <span
                className="type-eyebrow mb-3 block"
                style={{
                  color: "var(--primary-yellow)",
                  fontSize: "var(--text-base)",
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
                  color: "var(--primary-white)",
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
              <p className="type-lead mt-4 text-[var(--primary-white)]/60">
                {section.description}
              </p>
            )}
          </FadeInView>
        )}

        {/* Comparison panels */}
        <div className="grid gap-4 lg:gap-5 md:grid-cols-2">
          {/* Left — negative */}
          <FadeInView className="bg-[var(--primary-white)]/5 border border-[var(--primary-white)]/10 rounded-[var(--radius-xl)] p-6 md:p-8">
            <div className="mb-5 flex items-center gap-2">
              {section.left.emoji && (
                <span className="text-xl">{section.left.emoji}</span>
              )}
              <h3
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 700,
                  fontSize: "var(--text-xl)",
                  color: "var(--primary-white)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--tracking-tight)",
                }}
              >
                {section.left.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {section.left.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[var(--primary-white)]/60"
                >
                  <FiX size={14} className="mt-0.5 text-red-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeInView>

          {/* Right — positive */}
          <FadeInView
            className="rounded-[var(--radius-xl)] p-6 md:p-8"
            style={{
              backgroundColor: "rgba(255,193,20,0.08)",
              border: "1px solid rgba(255,193,20,0.15)",
            }}
          >
            <div className="mb-5 flex items-center gap-2">
              {section.right.emoji && (
                <span className="text-xl">{section.right.emoji}</span>
              )}
              <h3
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 700,
                  fontSize: "var(--text-xl)",
                  color: "var(--primary-white)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--tracking-tight)",
                }}
              >
                {section.right.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {section.right.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[var(--primary-white)]/80"
                >
                  <FiCheck
                    size={14}
                    className="mt-0.5 text-[var(--primary-yellow)] shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </FadeInView>
        </div>

        {/* Footnote */}
        {section.footnote && (
          <p className="mt-8 text-center text-sm leading-relaxed text-[var(--primary-white)]/50">
            {section.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
