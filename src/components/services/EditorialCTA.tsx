"use client";

import {
  FiCheckCircle,
  FiArrowRight,
  FiBriefcase,
  FiGlobe,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppURL } from "@/lib/whatsapp";
import type { CTASection } from "@/lib/data/services";

const ICON_MAP: Record<string, React.ElementType> = {
  FiBriefcase,
  FiGlobe,
};

export default function EditorialCTA({ section }: { section: CTASection }) {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 overflow-hidden">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2155] via-blue-950 to-[#1a2155]" />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] bg-blue-600/15 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-15%] right-[5%] w-[500px] h-[500px] bg-yellow-400/[0.06] blur-[160px] rounded-full" />
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(253,251,237,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10 text-center flex flex-col items-center">
        {section.eyebrow && (
          <span className="inline-block text-yellow-400 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-6 opacity-80">
            {section.eyebrow}
          </span>
        )}

        <h2
          className="heading-font text-white mb-6 text-[clamp(2.5rem,7vw,4.5rem)]"
          dangerouslySetInnerHTML={{
            __html: section.headline.replace(
              /<em>(.*?)<\/em>/g,
              '<span style="color:#ffc114">$1</span>',
            ),
          }}
        />

        {/* Decorative line */}
        <div className="w-16 h-[3px] rounded-full bg-yellow-400 opacity-60 mb-8" />

        {section.description && (
          <p className="text-lg text-white/70 max-w-xl mb-12 leading-relaxed">
            {section.description}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col items-stretch gap-3 w-full sm:max-w-md">
          {/* Row 1: WhatsApp CTA */}
          {/* 1 quick link → WhatsApp + pill side by side */}
          {/* 2 quick links → WhatsApp alone, then pills row below */}
          <div className="flex flex-col gap-3">
            <a
              href={getWhatsAppURL("general", "service-cta")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-base font-semibold px-10 h-11 rounded-full bg-[var(--primary-yellow)] text-white  transition-colors duration-300 group w-full"
            >
              <FaWhatsapp size={20} />
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
                    className="w-full flex items-center justify-center gap-1.5 h-11 text-xs font-semibold text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-5 rounded-full transition-all duration-200 hover:bg-white/10 bg-white/5 backdrop-blur-sm"
                  >
                    {Icon && <Icon size={13} />}
                    {link.label}
                    <FiArrowRight size={13} className="ml-1" />
                  </a>
                );
              })}
          </div>
          {/* Row 2: pills side-by-side full width when 2+ quick links */}
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
                    className="flex-1 inline-flex items-center justify-center gap-1.5 h-11 text-xs font-semibold text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-5 rounded-full transition-all duration-200 hover:bg-white/10 bg-white/5 backdrop-blur-sm"
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

        {/* Trust micro-copy */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10 text-[13px] font-medium text-white/50">
          {["No hidden costs", "100% Confidential", "Zero obligations"].map(
            (text) => (
              <div key={text} className="flex items-center gap-2">
                <FiCheckCircle
                  size={14}
                  className="text-yellow-400 opacity-70"
                />
                {text}
              </div>
            ),
          )}
        </div>

        {/* Quote */}
        {section.quote && (
          <>
            <div className="w-full max-w-xs mx-auto mt-12">
              <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            </div>
            <p className="mt-6 max-w-lg text-sm leading-relaxed italic text-white/50">
              &ldquo;{section.quote}&rdquo;
            </p>
          </>
        )}
      </div>
    </section>
  );
}
