"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiClock, FiMonitor, FiTarget } from "react-icons/fi";
import StaggerInView from "@/components/animate/StaggerInView";
import FadeInView from "@/components/animate/FadeInView";
import { fadeUp } from "@/lib/animations/variants";
import type { Program, ProgramBadge } from "@/lib/data/programs";

/* ── Badge Colors ─────────────────────────────────────────────────── */
const BADGE_STYLES: Record<ProgramBadge, { bg: string; text: string }> = {
  "Most Popular": {
    bg: "bg-[var(--primary-yellow)]",
    text: "text-[var(--primary-black)]",
  },
  Upcoming: { bg: "bg-[var(--accent-blue)]", text: "text-white" },
  "On Sale": { bg: "bg-emerald-500", text: "text-white" },
  New: { bg: "bg-violet-600", text: "text-white" },
  "Limited Seats": { bg: "bg-red-600", text: "text-white" },
};

/* ── Pricing Block ────────────────────────────────────────────────── */
function PriceTag({
  price,
  originalPrice,
  accent,
  variant = "light",
}: {
  price: number;
  originalPrice: number;
  accent: string;
  variant?: "light" | "dark";
}) {
  const savings = originalPrice - price;
  return (
    <div className="flex items-end gap-3 flex-wrap">
      <span
        className="text-3xl font-extrabold font-oswald tracking-tight leading-none"
        style={{ color: variant === "dark" ? "var(--primary-yellow)" : accent }}
      >
        ₹{price.toLocaleString("en-IN")}
      </span>
      <span
        className={`text-base line-through ${variant === "dark" ? "text-white/40" : "text-[var(--primary-black)]/35"}`}
      >
        ₹{originalPrice.toLocaleString("en-IN")}
      </span>
      {savings > 0 && (
        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600">
          Save ₹{savings.toLocaleString("en-IN")}
        </span>
      )}
    </div>
  );
}

/* ── Adaptive Grid ────────────────────────────────────────────────── */
function gridCols(count: number) {
  if (count === 1) return "max-w-2xl mx-auto grid-cols-1";
  if (count === 2) return "max-w-5xl mx-auto grid-cols-1 md:grid-cols-2";
  return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
}

/* ── Program Card ─────────────────────────────────────────────────── */
function ProgramCard({ program }: { program: Program }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative rounded-[var(--radius-xl)] border border-[var(--primary-black)]/8 bg-white flex flex-col hover:border-[var(--primary-blue)]/40 hover:-translate-y-1 hover:shadow-2xl transition-all duration-[var(--transition-base)] overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Badge */}
        {program.badge && (
          <span
            className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${BADGE_STYLES[program.badge].bg} ${BADGE_STYLES[program.badge].text} shadow-lg`}
          >
            {program.badge}
          </span>
        )}

        {/* Audience tag on image */}
        <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-sm text-[var(--primary-black)]">
          {program.audienceTag}
        </span>
      </div>

      <div className="relative z-10 flex flex-col flex-1 p-6 lg:p-8">
        {/* Title & subtitle */}
        <h3
          className="font-oswald font-bold uppercase tracking-tight text-[var(--primary-black)] leading-[1.05] mb-1.5"
          style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }}
        >
          {program.title}
        </h3>
        <p
          className="text-sm font-semibold mb-3"
          style={{ color: program.accent }}
        >
          {program.subtitle}
        </p>

        {/* Description */}
        <p className="type-body text-[var(--muted-text)] text-sm mb-5 leading-relaxed line-clamp-3">
          {program.description}
        </p>

        {/* Meta pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--primary-black)]/60 bg-[var(--primary-black)]/[0.04] px-3 py-1.5 rounded-full">
            <FiClock size={12} />
            {program.duration}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--primary-black)]/60 bg-[var(--primary-black)]/[0.04] px-3 py-1.5 rounded-full">
            <FiMonitor size={12} />
            {program.format}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--primary-black)]/60 bg-[var(--primary-black)]/[0.04] px-3 py-1.5 rounded-full">
            <FiTarget size={12} />
            {program.level}
          </span>
        </div>

        {/* Highlights */}
        <div className="mb-6 flex-1">
          <p className="type-label text-[var(--primary-black)] mb-3 text-xs">
            What you get
          </p>
          <ul className="space-y-2">
            {program.highlights.slice(0, 4).map((h) => (
              <li
                key={h}
                className="flex items-start gap-2.5 text-sm text-[var(--primary-black)]/75"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                  style={{ backgroundColor: program.accent }}
                />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--primary-black)]/8 pt-5 mt-auto">
          {/* Pricing */}
          <PriceTag
            price={program.price}
            originalPrice={program.originalPrice}
            accent={program.accent}
          />

          {/* CTA */}
          <a
            href={program.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full inline-flex items-center justify-center gap-2 text-sm font-bold rounded-full px-6 py-3 transition-all duration-200 text-white"
            style={{ backgroundColor: program.accent }}
          >
            Enroll Now
            <FiArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Featured Hero Card ───────────────────────────────────────────── */
function FeaturedCard({ program }: { program: Program }) {
  const savings = program.originalPrice - program.price;
  return (
    <FadeInView className="mb-8">
      <div
        className="group relative rounded-[var(--radius-xl)] overflow-hidden bg-[var(--primary-blue)] transition-all duration-300"
        style={{ boxShadow: "var(--shadow-xl)" }}
      >
        {/* Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[var(--accent-blue)] opacity-20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-[var(--primary-yellow)] opacity-[0.07] blur-[80px] rounded-full" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row">
          {/* Image side */}
          <div className="relative h-64 lg:h-auto lg:w-[45%] overflow-hidden">
            <Image
              src={program.image}
              alt={program.title}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[var(--primary-blue)] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-blue)] via-transparent to-transparent lg:hidden" />

            {/* Badge on image */}
            {program.badge && (
              <span
                className={`absolute top-5 left-5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${BADGE_STYLES[program.badge].bg} ${BADGE_STYLES[program.badge].text} shadow-lg`}
              >
                ★ {program.badge}
              </span>
            )}
          </div>

          {/* Content side */}
          <div className="flex-1 flex flex-col lg:flex-row gap-8 lg:gap-12 p-8 lg:p-12">
            <div className="flex-1 flex flex-col">
              <span className="type-label px-3 py-1.5 rounded-full w-fit mb-5 bg-white/10 text-white/70 text-xs">
                {program.audienceTag}
              </span>
              <h3
                className="font-oswald font-extrabold uppercase text-[var(--primary-white)] leading-[0.95] tracking-tight mb-3"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}
              >
                {program.title}
              </h3>
              <p className="text-[var(--primary-yellow)] font-semibold mb-4">
                {program.subtitle}
              </p>
              <p className="text-[var(--primary-white)]/70 mb-6 max-w-xl leading-relaxed text-sm">
                {program.description}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--primary-white)]/60 border border-[var(--primary-white)]/10 px-3 py-1.5 rounded-full">
                  <FiClock size={12} />
                  {program.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--primary-white)]/60 border border-[var(--primary-white)]/10 px-3 py-1.5 rounded-full">
                  <FiMonitor size={12} />
                  {program.format}
                </span>
              </div>

              {/* Pricing */}
              <div className="flex items-end gap-3 flex-wrap mb-6">
                <span className="text-4xl font-extrabold font-oswald tracking-tight leading-none text-[var(--primary-yellow)]">
                  ₹{program.price.toLocaleString("en-IN")}
                </span>
                <span className="text-lg line-through text-white/35">
                  ₹{program.originalPrice.toLocaleString("en-IN")}
                </span>
                {savings > 0 && (
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300">
                    Save ₹{savings.toLocaleString("en-IN")}
                  </span>
                )}
              </div>

              <a
                href={program.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4 inline-flex items-center justify-center gap-2 w-fit"
              >
                Start Your Assessment
                <FiArrowRight size={16} />
              </a>
            </div>

            {/* Outcomes */}
            <div className="lg:w-[340px] flex flex-col justify-center">
              <p className="type-label text-[var(--primary-yellow)] mb-5 text-xs">
                What You&apos;ll Walk Away With
              </p>
              <ul className="space-y-4">
                {program.outcomes.map((o, i) => (
                  <li key={o} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-[var(--primary-yellow)]/15 text-[var(--primary-yellow)] flex items-center justify-center shrink-0 text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="text-[var(--primary-white)]/80 text-sm leading-relaxed pt-0.5">
                      {o}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FadeInView>
  );
}

/* ── Main Section ─────────────────────────────────────────────────── */
export default function FeaturedPrograms({
  programs,
}: {
  programs: Program[];
}) {
  const featured = programs.find((p) => p.isFeatured);
  const rest = programs.filter((p) => !p.isFeatured);

  return (
    <section
      id="programs"
      className="section-padding px-4 sm:px-6 bg-[var(--primary-white)]"
    >
      <div className="section-container">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <FadeInView>
            <div>
              <span
                className="type-eyebrow text-[var(--accent-blue)] mb-3 block"
                style={{ fontSize: "var(--text-base)" }}
              >
                Our Programs
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[var(--primary-black)] leading-[0.95] font-oswald">
                Choose Your
                <br />
                Clarity Path
              </h2>
            </div>
          </FadeInView>
          <FadeInView>
            <p className="type-lead text-[var(--muted-text)] lg:text-right lg:max-w-sm">
              Every career stage demands a different approach. Pick the program
              that matches where you are — and where you want to be.
            </p>
          </FadeInView>
        </div>

        {/* Featured program - hero card with image */}
        {featured && <FeaturedCard program={featured} />}

        {/* Program cards grid - adaptive */}
        <StaggerInView className={`grid gap-6 ${gridCols(rest.length)}`}>
          {rest.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </StaggerInView>
      </div>
    </section>
  );
}
