"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppURL } from "@/lib/whatsapp";
import type { HeroSection } from "@/lib/data/services";
import FadeInView from "@/components/animate/FadeInView";

export default function EditorialHero({ section }: { section: HeroSection }) {
  return (
    <section className="relative overflow-hidden hero-gradient pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-36 lg:pb-32 px-4 sm:px-6">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,147,255,0.18) 0%, transparent 70%)",
        }}
      />

      <FadeInView className="relative z-10 max-w-[1200px] mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8">
          <span className="w-16 h-[2px] bg-[var(--primary-yellow)]" />
          <span
            className="type-eyebrow"
            style={{
              color: "var(--primary-yellow)",
              fontSize: "var(--text-base)",
            }}
          >
            {section.eyebrow}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-oswald font-extrabold uppercase leading-[0.95] tracking-tight text-white"
          style={{ fontSize: "clamp(2.75rem, 8vw, 5.5rem)" }}
          dangerouslySetInnerHTML={{
            __html: section.headline.replace(
              /<em>(.*?)<\/em>/g,
              '<span style="color:var(--primary-yellow)">$1</span>',
            ),
          }}
        />

        {/* Description */}
        <p className="type-lead mt-6 max-w-2xl text-white/80">
          {section.description}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3.5">
          <a
            href={getWhatsAppURL("general", "service-hero")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm px-7 py-3.5 w-full sm:w-auto"
          >
            <FaWhatsapp className="w-4 h-4" />
            {section.primaryCTA.label}
          </a>
          <Link
            href={section.secondaryCTA.href}
            className="btn-outline text-sm px-7 py-3.5 w-full sm:w-auto text-center"
          >
            {section.secondaryCTA.label}
            <FiArrowRight size={13} className="inline ml-1.5" />
          </Link>
        </div>
      </FadeInView>
    </section>
  );
}
