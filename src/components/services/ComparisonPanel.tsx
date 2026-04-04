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
    <section className="relative py-24 px-4 sm:px-6 bg-blue-950 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-800/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        {(section.headline || section.eyebrow) && (
          <FadeInView className="mb-12 lg:mb-16 max-w-3xl">
            {section.eyebrow && (
              <span className="text-yellow-400 text-base font-bold tracking-widest uppercase mb-3 block">
                {section.eyebrow}
              </span>
            )}
            {section.headline && (
              <h2
                className="heading-font text-4xl sm:text-5xl lg:text-6xl text-white"
                dangerouslySetInnerHTML={{
                  __html: section.headline.replace(
                    /<em>(.*?)<\/em>/g,
                    '<span style="color:#ffc114">$1</span>',
                  ),
                }}
              />
            )}
            {section.description && (
              <p className="text-lg mt-4 text-white/60 leading-relaxed">
                {section.description}
              </p>
            )}
          </FadeInView>
        )}

        {/* Comparison panels */}
        <div className="grid gap-4 lg:gap-5 md:grid-cols-2">
          {/* Left — negative */}
          <FadeInView className="bg-white/[0.08] border border-white/20 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
            <div className="mb-5 flex items-center gap-2">
              {section.left.emoji && (
                <span className="text-xl">{section.left.emoji}</span>
              )}
              <h3 className="font-oswald font-bold text-xl uppercase tracking-tight text-white">
                {section.left.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {section.left.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed text-white/75"
                >
                  <FiX size={14} className="mt-0.5 text-red-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeInView>

          {/* Right — positive */}
          <FadeInView
            className="rounded-3xl p-6 md:p-8 backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(255,193,20,0.12)",
              border: "1px solid rgba(255,193,20,0.25)",
            }}
          >
            <div className="mb-5 flex items-center gap-2">
              {section.right.emoji && (
                <span className="text-xl">{section.right.emoji}</span>
              )}
              <h3 className="font-oswald font-bold text-xl uppercase tracking-tight text-white">
                {section.right.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {section.right.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed text-white/90"
                >
                  <FiCheck
                    size={14}
                    className="mt-0.5 text-yellow-400 shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </FadeInView>
        </div>

        {/* Footnote */}
        {section.footnote && (
          <p className="mt-8 text-center text-sm leading-relaxed text-white/50">
            {section.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
