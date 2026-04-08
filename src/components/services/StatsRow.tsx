"use client";

import type { StatsSection } from "@/lib/data/services";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";
import { CountUpValue } from "@/components/home/CountUpValue";

const STAT_ACCENTS = [
  { accent: "#29326e", bg: "rgba(41,50,110,0.07)" },
  { accent: "#059669", bg: "rgba(5,150,105,0.07)" },
  { accent: "#D97706", bg: "rgba(217,119,6,0.07)" },
  { accent: "#6D28D9", bg: "rgba(109,40,217,0.07)" },
];

export default function StatsRow({ section }: { section: StatsSection }) {
  const hasHeader = section.eyebrow || section.headline;

  return (
    <section className="py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        {hasHeader && (
          <FadeInView className="mb-12 lg:mb-16 text-center">
            {section.eyebrow && (
              <span className="text-yellow-500 text-base font-bold tracking-widest uppercase mb-3 block">
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
              <p className="text-lg mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
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
                className="group bg-white flex flex-col gap-3 p-5 lg:p-6 rounded-2xl lg:rounded-3xl border border-transparent hover:border-gray-200 text-center shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
              >
                <p
                  className="font-oswald font-extrabold leading-none text-4xl lg:text-5xl"
                  style={{ color: color.accent }}
                >
                  <CountUpValue value={stat.value + (stat.suffix ?? "")} />
                </p>
                <p className="font-bold text-blue-950 leading-snug text-sm">
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
