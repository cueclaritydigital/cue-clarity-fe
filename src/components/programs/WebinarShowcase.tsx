"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiClock,
  FiUsers,
  FiCalendar,
  FiPlay,
} from "react-icons/fi";
import StaggerInView from "@/components/animate/StaggerInView";
import FadeInView from "@/components/animate/FadeInView";
import { fadeUp } from "@/lib/animations/variants";
import type { Webinar, WebinarStatus } from "@/lib/data/programs";

/* ── Adaptive grid: 1 = full, 2 = 2-col, 3+ = 3-col ── */
function gridCols(count: number) {
  if (count === 1) return "grid-cols-1 max-w-2xl mx-auto";
  if (count === 2) return "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto";
  return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
}

function WebinarCard({ webinar }: { webinar: Webinar }) {
  const isUpcoming = webinar.status === "upcoming";

  return (
    <motion.div
      variants={fadeUp}
      layout
      className={`group relative rounded-[var(--radius-xl)] bg-white flex flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-[var(--transition-base)] ${
        isUpcoming
          ? "border-2 border-[var(--primary-blue)]/20 ring-1 ring-[var(--primary-blue)]/5"
          : "border border-[var(--primary-black)]/[0.06]"
      }`}
      style={{ boxShadow: "var(--shadow-md)" }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={webinar.image}
          alt={webinar.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-black)]/60 via-transparent to-transparent" />

        {/* Status badge */}
        <span
          className={`absolute top-4 left-4 type-label text-[10px] px-3 py-1.5 rounded-full backdrop-blur-md ${
            isUpcoming
              ? "bg-[var(--primary-blue)]/90 text-white"
              : "bg-[var(--primary-black)]/50 text-white/80"
          }`}
        >
          {isUpcoming ? "● Upcoming" : "Past Webinar"}
        </span>

        {/* Date */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-[11px] font-semibold text-white/90 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full">
          <FiCalendar size={10} />
          {webinar.date}
        </div>

        {/* Play icon for past */}
        {!isUpcoming && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
              <FiPlay size={18} className="text-white ml-0.5" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-7 lg:p-8 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[var(--primary-blue)] bg-[var(--primary-blue)]/[0.06] px-2.5 py-1 rounded-full">
            <FiUsers size={10} />
            {webinar.audience}
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[var(--muted-text)] bg-[var(--primary-black)]/[0.04] px-2.5 py-1 rounded-full">
            <FiClock size={10} />
            {webinar.duration}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-oswald font-bold uppercase tracking-tight text-[var(--primary-black)] leading-tight mb-3"
          style={{ fontSize: "clamp(1.15rem, 2.5vw, 1.35rem)" }}
        >
          {webinar.title}
        </h3>

        {/* Description */}
        <p className="text-[var(--muted-text)] text-sm mb-5 leading-relaxed line-clamp-2">
          {webinar.description}
        </p>

        {/* Topics */}
        <div className="mb-5 flex-1">
          <ul className="space-y-1.5">
            {webinar.topics.slice(0, 3).map((t) => (
              <li
                key={t}
                className="flex items-start gap-2 text-sm text-[var(--primary-black)]/70"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-blue)] mt-1.5 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Separator + CTA */}
        <div
          className="pt-5 mt-auto"
          style={{ borderTop: "1px solid var(--secondary-white)" }}
        >
          <a
            href={webinar.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-bold transition-colors duration-200 ${
              isUpcoming
                ? "text-[var(--primary-blue)] hover:text-[var(--accent-blue)]"
                : "text-[var(--muted-text)] hover:text-[var(--primary-black)]"
            }`}
          >
            {isUpcoming ? "Register Now" : "Watch Recording"}
            <FiArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function WebinarShowcase({ webinars }: { webinars: Webinar[] }) {
  const [filter, setFilter] = useState<WebinarStatus | "all">("all");

  const filtered =
    filter === "all" ? webinars : webinars.filter((w) => w.status === filter);

  // Sort: upcoming first
  const sorted = [...filtered].sort((a, b) => {
    if (a.status === "upcoming" && b.status !== "upcoming") return -1;
    if (a.status !== "upcoming" && b.status === "upcoming") return 1;
    return 0;
  });

  const upcomingCount = webinars.filter((w) => w.status === "upcoming").length;
  const pastCount = webinars.filter((w) => w.status === "past").length;

  return (
    <section
      id="webinars"
      className="section-padding px-4 sm:px-6 bg-[var(--secondary-white)]"
    >
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-12">
          <FadeInView>
            <div>
              <span
                className="type-eyebrow text-[var(--accent-blue)] mb-3 block"
                style={{ fontSize: "var(--text-base)" }}
              >
                Free & Premium Webinars
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 800,
                  fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
                  lineHeight: 0.95,
                  letterSpacing: "var(--tracking-tight)",
                  color: "var(--primary-black)",
                  textTransform: "uppercase",
                }}
              >
                Learn Before
                <br />
                You Leap
              </h2>
            </div>
          </FadeInView>
          <FadeInView>
            <p className="type-lead text-[var(--muted-text)] lg:text-right lg:max-w-sm">
              Expert-led sessions that give you a taste of our approach — and
              the clarity to take your next step.
            </p>
          </FadeInView>
        </div>

        {/* Filter tabs */}
        <FadeInView className="mb-10">
          <div className="flex items-center gap-2">
            {(
              [
                { key: "all", label: "All", count: webinars.length },
                { key: "upcoming", label: "Upcoming", count: upcomingCount },
                { key: "past", label: "Past", count: pastCount },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                  filter === tab.key
                    ? "bg-[var(--primary-blue)] text-white shadow-[var(--shadow-glow-blue)]"
                    : "bg-white text-[var(--muted-text)] border border-[var(--primary-black)]/10 hover:border-[var(--primary-blue)]/30 hover:text-[var(--primary-black)]"
                }`}
              >
                {tab.label}
                <span
                  className={`ml-1.5 text-xs ${filter === tab.key ? "text-white/70" : "text-[var(--muted-text)]/60"}`}
                >
                  ({tab.count})
                </span>
              </button>
            ))}
          </div>
        </FadeInView>

        {/* Webinar cards — adaptive grid */}
        <AnimatePresence mode="wait">
          <StaggerInView
            key={filter}
            className={`grid gap-6 ${gridCols(sorted.length)}`}
          >
            {sorted.map((webinar) => (
              <WebinarCard key={webinar.id} webinar={webinar} />
            ))}
          </StaggerInView>
        </AnimatePresence>

        {/* Empty state */}
        {sorted.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[var(--muted-text)] text-lg">
              No {filter} webinars at the moment. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
