"use client";

import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppURL } from "@/lib/whatsapp";
import type { CTASection } from "@/lib/data/services";

export default function EditorialCTA({ section }: { section: CTASection }) {
  return (
    <section className="relative section-padding px-4 sm:px-6 bg-[var(--primary-blue)] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--blob-glow)] opacity-20 blur-[150px] rounded-full mix-blend-screen" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(var(--primary-white) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-[800px] mx-auto relative z-10 text-center flex flex-col items-center animate-fade-in-up">
        {section.eyebrow && (
          <span
            className="type-eyebrow mb-4 block"
            style={{
              color: "var(--primary-yellow)",
              fontSize: "var(--text-base)",
            }}
          >
            {section.eyebrow}
          </span>
        )}

        <h2
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-[var(--primary-white)] leading-[0.95] font-oswald mb-6"
          dangerouslySetInnerHTML={{
            __html: section.headline.replace(
              /<em>(.*?)<\/em>/g,
              '<span style="color:var(--primary-yellow)">$1</span>',
            ),
          }}
        />

        {section.description && (
          <p className="type-lead text-[var(--primary-white)]/80 max-w-2xl mb-10">
            {section.description}
          </p>
        )}

        {/* WhatsApp CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href={getWhatsAppURL("general", "service-cta")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full sm:w-auto !px-8 !py-4 !text-base group"
          >
            <FaWhatsapp size={20} />
            {section.primaryCTA.label}
          </a>
          {section.secondaryCTA && (
            <Link
              href={section.secondaryCTA.href}
              className="btn-outline text-sm px-7 py-3.5 w-full sm:w-auto text-center"
            >
              {section.secondaryCTA.label}
            </Link>
          )}
        </div>

        {/* Trust micro-copy */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-[13px] font-medium text-[var(--primary-white)]/60">
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-[var(--primary-yellow)]" />
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-[var(--primary-yellow)]" />
            100% Confidential
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-[var(--primary-yellow)]" />
            Zero obligations
          </div>
        </div>

        {/* Quote */}
        {section.quote && (
          <p className="mt-10 max-w-lg text-sm leading-relaxed italic text-[var(--primary-white)]/60">
            {section.quote}
          </p>
        )}
      </div>
    </section>
  );
}
