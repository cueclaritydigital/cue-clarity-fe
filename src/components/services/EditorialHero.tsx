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
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-[#5c65a8] to-[#fdfbed] pt-10 pb-20 md:pt-14 md:pb-28 lg:pt-16 lg:pb-32 px-4 sm:px-6">
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
            <span className="w-16 h-[2px] bg-yellow-400" />
            <span className="text-yellow-400 text-base font-bold tracking-widest uppercase">
              {section.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-oswald font-extrabold uppercase leading-[0.95] tracking-tight text-white text-4xl sm:text-5xl lg:text-6xl"
            dangerouslySetInnerHTML={{
              __html: section.headline.replace(
                /<em>(.*?)<\/em>/g,
                '<span style="color:#ffc114">$1</span>',
              ),
            }}
          />

          {/* Description */}
          <p className="text-lg mt-6 max-w-2xl text-white/80 leading-relaxed">
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
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent pointer-events-none" />
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-3">
            <div
              className={`flex gap-3 h-11 ${
                (section.quickLinks?.length ?? 0) === 1
                  ? "flex-col lg:flex-row"
                  : "flex-col"
              }`}
            >
              <a
                href={getWhatsAppURL("general", "service-hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 text-sm font-semibold px-7 h-11 w-full rounded-xl bg-[var(--primary-yellow)] text-white hover:bg-[var(--accent-yellow)] transition-colors duration-300"
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
                      className="flex-1 inline-flex items-center justify-center gap-1.5 h-11 text-sm font-semibold text-[var(--primary-blue)]  px-4 rounded-full transition-all duration-200 hover:bg-white bg-[var(--primary-white)] backdrop-blur-sm"
                    >
                      {Icon && <Icon size={13} />}
                      {link.label}
                      <FiArrowRight size={13} className="ml-1" />
                    </a>
                  );
                })}
            </div>
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
                      className="flex-1 inline-flex items-center justify-center gap-1.5 h-11 text-sm font-semibold text-[var(--primary-blue)]  px-4 rounded-full transition-all duration-200 hover:bg-white bg-[var(--primary-white)] backdrop-blur-sm"
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
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent pointer-events-none" />
            </div>
            <div className="absolute -inset-4 bg-yellow-400/[0.06] blur-[60px] rounded-full -z-10" />
          </div>
        )}
      </FadeInView>
    </section>
  );
}
