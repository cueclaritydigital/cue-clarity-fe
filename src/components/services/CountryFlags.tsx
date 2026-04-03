"use client";

import { useState, useCallback } from "react";
import type { FlagsSection } from "@/lib/data/services";
import FadeInView from "@/components/animate/FadeInView";

/* ─── Single flag item ─── */
function FlagItem({
  image,
  name,
  tag,
}: {
  image: string;
  name: string;
  tag: string;
}) {
  return (
    <div className="group/item flex-shrink-0 flex flex-col items-center gap-3 cursor-default select-none w-[140px] sm:w-[160px]">
      <div className="w-32 h-20 sm:w-[180px] sm:h-[106px] rounded-sm overflow-hidden shadow-xl transition-transform duration-300 group-hover/item:scale-105">
        <img
          src={image}
          alt={`${name} flag`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="text-center">
        <p
          className="text-white font-bold leading-tight text-sm sm:text-[15px]"
          style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.03em" }}
        >
          {name}
        </p>
        <p className="text-white/45 text-[11px] mt-0.5 tracking-wide uppercase font-medium">
          {tag}
        </p>
      </div>
    </div>
  );
}

/* ─── Marquee strip ─── */
function FlagStrip({
  countries,
  speed,
}: {
  countries: FlagsSection["countries"];
  speed?: number;
}) {
  const [paused, setPaused] = useState(false);
  const pause = useCallback(() => setPaused(true), []);
  const resume = useCallback(() => setPaused(false), []);

  /* duplicate for seamless loop */
  const items = [...countries, ...countries];
  const duration = speed ?? 40;

  return (
    <div
      className="relative flex overflow-hidden py-2"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      {/* fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 sm:w-32 bg-gradient-to-r from-[var(--primary-blue)] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 sm:w-32 bg-gradient-to-l from-[var(--primary-blue)] to-transparent" />

      <div
        className="flex gap-10 sm:gap-14 shrink-0 animate-marquee-left"
        style={{
          animationDuration: `${duration}s`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {items.map((c, i) => (
          <FlagItem key={`${c.name}-${i}`} {...c} />
        ))}
      </div>
    </div>
  );
}

/* ─── Main exported section ─── */
export default function CountryFlags({ section }: { section: FlagsSection }) {
  return (
    <section
      className="section-padding overflow-hidden"
      style={{ backgroundColor: "var(--primary-blue)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-12">
        <FadeInView>
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
              className="mb-4"
              style={{
                fontFamily: "var(--font-oswald)",
                fontWeight: 800,
                fontSize: "clamp(2.25rem, 6vw, 3.5rem)",
                lineHeight: 1,
                letterSpacing: "var(--tracking-tight)",
                color: "white",
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
            <p
              className="type-lead max-w-2xl"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {section.description}
            </p>
          )}
        </FadeInView>
      </div>

      {/* Single scrolling row */}
      <FlagStrip countries={section.countries} speed={38} />
    </section>
  );
}
