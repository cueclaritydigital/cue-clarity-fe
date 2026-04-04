"use client";

import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import type { CardsSection } from "@/lib/data/services";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";

const ACCENT_COLORS = [
  { accent: "#29326e", bg: "rgba(41,50,110,0.08)" },
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
    <section className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        {(section.eyebrow || section.headline) && (
          <FadeInView className="mb-8 lg:mb-10 max-w-3xl">
            {section.eyebrow && (
              <span className="text-blue-700 text-base font-bold tracking-widest uppercase mb-3 block">
                {section.eyebrow}
              </span>
            )}
            {section.headline && (
              <h2
                className="heading-font text-4xl sm:text-5xl lg:text-6xl text-[var(--primary-blue)]"
                dangerouslySetInnerHTML={{
                  __html: section.headline.replace(
                    /<em>(.*?)<\/em>/g,
                    '<span style="color:#ffc114">$1</span>',
                  ),
                }}
              />
            )}
            {section.description && (
              <p className="text-lg mt-4 text-gray-500 max-w-2xl leading-relaxed">
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
                className="group bg-white rounded-3xl p-5 lg:p-6 flex flex-col gap-3 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-sm"
                style={{ borderLeft: `3px solid ${color.accent}` }}
              >
                {/* Number badge */}
                {card.number && (
                  <span
                    className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full w-fit"
                    style={{ backgroundColor: color.bg, color: color.accent }}
                  >
                    {card.number}
                  </span>
                )}

                {/* Title */}
                <h3 className="font-oswald font-bold text-lg uppercase tracking-tight text-blue-950 leading-none">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 flex-1 leading-relaxed">
                  {card.description}
                </p>

                {/* Tags */}
                {card.tags && card.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-gray-100 text-blue-950"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Checklist */}
                {card.checklist && card.checklist.length > 0 && (
                  <ul className="flex flex-col gap-2 mt-auto pt-4 border-t border-gray-100">
                    {card.checklist.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-gray-500 font-medium"
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
                    className="mt-auto flex items-center gap-1.5 font-bold text-sm text-blue-950 group-hover:gap-2.5 transition-all duration-300"
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
          <p className="mt-8 rounded-2xl px-6 py-4 text-sm leading-relaxed bg-gray-50 text-gray-500">
            {section.disclaimer}
          </p>
        )}
      </div>
    </section>
  );
}
