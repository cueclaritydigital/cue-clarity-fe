"use client";

import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import type { CardsSection } from "@/lib/data/services";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";

const ACCENT_COLORS = [
  { accent: "var(--primary-blue)", bg: "rgba(41,50,110,0.08)" },
  { accent: "#D97706", bg: "rgba(217,119,6,0.08)" },
  { accent: "#059669", bg: "rgba(5,150,105,0.08)" },
  { accent: "#6D28D9", bg: "rgba(109,40,217,0.08)" },
];

export default function IconCards({ section }: { section: CardsSection }) {
  const cols = section.columns ?? 3;

  const gridCls =
    cols === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : cols === 2
        ? "grid-cols-1 md:grid-cols-2"
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="section-padding px-4 sm:px-6 bg-[var(--primary-white)]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        {(section.eyebrow || section.headline) && (
          <FadeInView className="mb-8 lg:mb-10 max-w-3xl">
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
              <p className="type-lead mt-4 text-[var(--muted-text)] max-w-2xl">
                {section.description}
              </p>
            )}
          </FadeInView>
        )}

        {/* Cards grid */}
        <StaggerInView className={`grid gap-4 lg:gap-5 ${gridCls}`}>
          {section.cards.map((card, i) => {
            const color = ACCENT_COLORS[i % ACCENT_COLORS.length];
            return (
              <FadeInView
                key={i}
                variants={fadeUp}
                className="group bg-[var(--surface-card)] rounded-[var(--radius-xl)] p-5 lg:p-6 flex flex-col gap-3 hover:-translate-y-1 transition-all duration-300 cursor-default"
                style={{
                  boxShadow: "var(--shadow-sm)",
                  borderLeft: `3px solid ${color.accent}`,
                }}
              >
                {/* Number badge */}
                {card.number && (
                  <span
                    className="type-label px-2.5 py-1 rounded-full w-fit"
                    style={{ backgroundColor: color.bg, color: color.accent }}
                  >
                    {card.number}
                  </span>
                )}

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontWeight: 700,
                    fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                    letterSpacing: "var(--tracking-tight)",
                    textTransform: "uppercase",
                    lineHeight: 1.1,
                    color: "var(--primary-black)",
                  }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="type-body text-[var(--muted-text)] flex-1"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  {card.description}
                </p>

                {/* Tags */}
                {card.tags && card.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="type-label px-2.5 py-1 rounded-full bg-[var(--secondary-white)] text-[var(--primary-blue)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Checklist */}
                {card.checklist && card.checklist.length > 0 && (
                  <ul
                    className="flex flex-col gap-2 mt-auto pt-4"
                    style={{ borderTop: "1px solid rgba(12,21,24,0.06)" }}
                  >
                    {card.checklist.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2"
                        style={{
                          fontSize: "var(--text-sm)",
                          color: "var(--muted-text)",
                          fontWeight: 500,
                        }}
                      >
                        <FiCheck
                          size={11}
                          style={{ color: color.accent, flexShrink: 0 }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA link */}
                {card.href && (
                  <Link
                    href={card.href}
                    className="mt-auto flex items-center gap-1.5 font-bold text-sm text-[var(--primary-blue)] group-hover:gap-2.5 transition-all duration-300"
                  >
                    Learn More
                    <FiArrowRight size={13} />
                  </Link>
                )}
              </FadeInView>
            );
          })}
        </StaggerInView>

        {/* Disclaimer */}
        {section.disclaimer && (
          <p className="mt-8 rounded-[var(--radius-lg)] px-6 py-4 text-sm leading-relaxed bg-[var(--secondary-white)] text-[var(--muted-text)]">
            {section.disclaimer}
          </p>
        )}
      </div>
    </section>
  );
}
