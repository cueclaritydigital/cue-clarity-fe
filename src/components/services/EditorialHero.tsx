"use client";
import Image from "next/image";
import { FiArrowRight, FiBriefcase, FiGlobe } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ICON_MAP: Record<string, React.ElementType> = {
  FiBriefcase,
  FiGlobe,
};
import { getWhatsAppURL } from "@/lib/whatsapp";
import type { HeroSection } from "@/lib/data/services";
import FadeInView from "@/components/animate/FadeInView";

export default function EditorialHero({ section }: { section: HeroSection }) {
  const hasImage = !!section.image;

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

      <FadeInView
        className={`relative z-10 max-w-[1200px] mx-auto ${
          hasImage
            ? "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            : ""
        }`}
      >
        <div>
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
            style={{ fontSize: "clamp(2.75rem, 8vw, 4.2rem)" }}
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

          {/* Hero image — mobile only (above CTA buttons) */}
          {hasImage && (
            <div className="block lg:hidden mt-8 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={section.image!}
                  alt={section.eyebrow}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-blue)]/20 to-transparent pointer-events-none" />
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-3">
            {/* Row 1: WhatsApp CTA — full width on mobile, auto on desktop */}
            {/* When 1 quick link: row with WhatsApp + pill side by side */}
            {/* When 2 quick links: WhatsApp alone on row 1, pills on row 2 */}
            <div
              className={`flex gap-3 ${
                (section.quickLinks?.length ?? 0) === 1
                  ? "flex-col lg:flex-row"
                  : "flex-col"
              }`}
            >
              <a
                href={getWhatsAppURL("general", "service-hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm px-7 h-11 w-full"
              >
                <FaWhatsapp className="w-4 h-4" />
                {section.primaryCTA.label}
              </a>
              {(section.quickLinks?.length ?? 0) === 1 &&
                section.quickLinks!.map((link) => {
                  const Icon = ICON_MAP[link.icon];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="w-full flex items-center justify-center gap-1.5 h-11 text-xs font-semibold text-[var(--primary-black)]/60 hover:text-[var(--primary-blue)] border border-[var(--primary-black)]/15 hover:border-[var(--primary-blue)]/40 px-4 rounded-full transition-all duration-200 hover:bg-[var(--primary-blue)]/5 bg-white/60 backdrop-blur-sm"
                    >
                      {Icon && <Icon size={13} />}
                      {link.label}
                      <FiArrowRight size={13} className="ml-1" />
                    </a>
                  );
                })}
            </div>
            {/* Row 2: only when 2+ quick links — pills side-by-side full width */}
            {(section.quickLinks?.length ?? 0) >= 2 && (
              <div className="flex flex-row gap-3">
                {section.quickLinks!.map((link) => {
                  const Icon = ICON_MAP[link.icon];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 h-11 text-xs font-semibold text-[var(--primary-black)]/60 hover:text-[var(--primary-blue)] border border-[var(--primary-black)]/15 hover:border-[var(--primary-blue)]/40 px-4 rounded-full transition-all duration-200 hover:bg-[var(--primary-blue)]/5 bg-white/60 backdrop-blur-sm"
                    >
                      {Icon && <Icon size={13} />}
                      {link.label}
                      <FiArrowRight size={13} className="ml-1" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Hero image — desktop only (right column) */}
        {hasImage && (
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={section.image!}
                alt={section.eyebrow}
                width={600}
                height={480}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-blue)]/20 to-transparent pointer-events-none" />
            </div>
            {/* Decorative glow behind image */}
            <div className="absolute -inset-4 bg-[var(--primary-yellow)] opacity-[0.06] blur-[60px] rounded-full -z-10" />
          </div>
        )}
      </FadeInView>
    </section>
  );
}
