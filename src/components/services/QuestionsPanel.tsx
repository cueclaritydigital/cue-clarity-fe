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

        {/* 🔥 STORY LAYOUT */}
        <div className="lg:grid lg:grid-cols-[2.2fr_1fr] lg:gap-16">
          {/* LEFT — Timeline / Problems */}
          <div className="relative space-y-16 lg:space-y-20 lg:pr-6">
            {/* Vertical line */}
            <div className="absolute left-6 top-8 -bottom-[40px] w-[2px] bg-black/10" />

            {section.questions.map((q, i) => {
              const color = ACCENT_COLORS[i % ACCENT_COLORS.length];

              return (
                <FadeInView
                  key={i}
                  variants={fadeUp}
                  className="flex gap-6 group items-start"
                >
                  {/* Node */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center z-10 bg-white"
                    style={{
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

                  {/* Content */}
                  <div className="flex-1 max-w-xl">
                    <p
                      className="text-xl lg:text-2xl leading-snug font-semibold text-[var(--primary-black)]"
                      style={{
                        fontFamily: "var(--font-oswald)",
                        letterSpacing: "var(--tracking-tight)",
                      }}
                    >
                      {q.text}
                    </p>

                    {/* Accent divider */}
                    <div className="mt-4 h-[2px] w-12 bg-[var(--primary-yellow)] opacity-60 group-hover:w-20 transition-all duration-300" />
                  </div>
                </FadeInView>
              );
            })}
          </div>

          {/* RIGHT — Sticky Guidance Panel */}
          <div className="hidden lg:block">
            <div className="sticky top-24 pl-10 border-l border-black/10">
              {/* Label */}
              <p className="text-xs tracking-widest uppercase text-[var(--accent-blue)] mb-4">
                Your Turning Point
              </p>

              {/* Main Heading */}
              <h3
                className="mb-6"
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 800,
                  fontSize: "2rem",
                  lineHeight: 1.2,
                  letterSpacing: "var(--tracking-tight)",
                  color: "var(--primary-black)",
                  textTransform: "uppercase",
                }}
              >
                This isn’t confusion. <br />
                <span style={{ color: "var(--primary-yellow)" }}>
                  It’s lack of clarity.
                </span>
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed text-[var(--muted-text)] mb-8">
                You were never taught how to understand yourself — your
                strengths, your direction, your identity. That’s where we come
                in.
              </p>

              {/* Divider */}
              <div className="w-16 h-[3px] bg-[var(--primary-yellow)] mb-8" />

              {/* Quotes */}
              <div className="space-y-6">
                <p className="text-lg italic opacity-80 border-l-4 border-[var(--primary-blue)] pl-4">
                  “Your story isn’t missing — it’s just waiting to be
                  understood.”
                </p>

                <p className="text-lg italic opacity-80 border-l-4 border-[var(--primary-blue)] pl-4">
                  “You don’t need more options. You need direction.”
                </p>

                <p className="text-lg italic opacity-80 border-l-4 border-[var(--primary-blue)] pl-4">
                  “Once you understand yourself, decisions become easy.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
