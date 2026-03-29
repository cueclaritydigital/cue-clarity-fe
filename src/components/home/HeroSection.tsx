import React from "react";
import Link from "next/link";
import {
  FiAward,
  FiSmile,
  FiVideo,
  FiBriefcase,
  FiArrowRight,
  FiGlobe,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppURL } from "@/lib/whatsapp";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div
      className="overflow-x-hidden"
      style={{ backgroundColor: "var(--primary-white)" }}
    >
      {/* ── HERO SECTION ───────────────────────────────────────────── */}
      <section className="relative hero-gradient pt-24 pb-20 lg:pt-32 lg:pb-32 px-4 sm:px-6 z-0 overflow-hidden">
        {/* Subtle radial glow */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,147,255,0.18) 0%, transparent 70%)",
          }}
        />

        {/* ── DESKTOP: side-by-side  |  MOBILE: stacked ── */}
        <div className="relative z-10 max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT: HERO TEXT */}
          <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-7 text-center lg:text-left font-md">
            {/* Eyebrow label */}
            <div className="trust-pill text-lg hero-animate-scale-in">
              Expert Career Counselling
            </div>

            {/* H1 */}
            <h1
              className="text-white drop-shadow-sm font-extrabold uppercase leading-[1.08] hero-animate-headline"
              style={{
                fontFamily: "var(--font-oswald)",
                fontSize: "clamp(2.75rem, 7vw, 3.4rem)",
                letterSpacing: "var(--tracking-tight)",
              }}
            >
              Discover your Strength <br />
              <span
                className="inline-block"
                style={{
                  background:
                    "linear-gradient(90deg, #FFD25A 0%, #FFC114 50%, #FFA040 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Design Your Career.
              </span>
            </h1>

            {/* Lead paragraph */}
            <p
              className="type-lead max-w-lg px-2 lg:px-0 hero-animate-fade-up"
              style={{
                color: "rgba(255,255,255,0.88)",
                fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
                animationDelay: "0.2s",
              }}
            >
              Make confident career decisions with science-backed assessments,
              expert mentoring, and a personalised roadmap designed just for
              you.
            </p>

            {/* CTA Row */}
            <div
              className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto justify-center lg:justify-start mt-2 px-2 sm:px-0 hero-animate-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              <a
                href={getWhatsAppURL("general", "hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base lg:text-sm px-8 py-4 lg:py-3 w-full sm:w-auto"
              >
                <FaWhatsapp size={20} />
                Chat With Us — It&apos;s Free
              </a>
              <Link
                href="/services"
                className="btn-outline text-base lg:text-sm px-8 py-4 lg:py-3 w-full sm:w-auto text-center"
              >
                Explore Services →
              </Link>
            </div>

            {/* Quick-jump strip */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-3 hero-animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="text-[var(--primary-black)]/35 text-[10px] uppercase tracking-[0.15em] shrink-0">
                Quick links
              </span>
              <div className="w-px h-3 bg-[var(--primary-black)]/15 hidden sm:block" />
              <div className="flex items-center gap-2">
                <a
                  href="https://cueclarity.edumilestones.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--primary-black)]/60 hover:text-[var(--primary-blue)] border border-[var(--primary-black)]/15 hover:border-[var(--primary-blue)]/40 px-4 py-2 rounded-full transition-all duration-200 hover:bg-[var(--primary-blue)]/5 bg-white/60 backdrop-blur-sm"
                >
                  <FiBriefcase size={12} />
                  Career Assessment
                  <FiArrowRight size={10} className="opacity-50" />
                </a>
                <a
                  href="https://cueclarity.edumilestones.com/abroad-studies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--primary-black)]/60 hover:text-[var(--primary-blue)] border border-[var(--primary-black)]/15 hover:border-[var(--primary-blue)]/40 px-4 py-2 rounded-full transition-all duration-200 hover:bg-[var(--primary-blue)]/5 bg-white/60 backdrop-blur-sm"
                >
                  <FiGlobe size={12} />
                  Study Abroad
                  <FiArrowRight size={10} className="opacity-50" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: HERO IMAGE CARD (desktop) */}
          <div
            className="relative overflow-hidden rounded-2xl lg:rounded-3xl w-full aspect-[4/3] lg:aspect-[3/4] lg:max-h-[580px] hero-animate-fade-up"
            style={{ boxShadow: "var(--shadow-xl)", animationDelay: "0.3s" }}
          >
            <img
              src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773932310/Gemini_Generated_Image_mug0mfmug0mfmug0_ns8ety.webp"
              alt="A mentor guiding a student through career planning"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[var(--primary-black)]/30" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(12,21,24,0.85) 0%, rgba(12,21,24,0.25) 45%, transparent 70%)",
              }}
            />

            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <h3
                className="font-extrabold uppercase text-white leading-tight mb-2"
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  letterSpacing: "var(--tracking-tight)",
                }}
              >
                Realistic Guidance.
                <br />
                Realistic Outcomes.
              </h3>
              <p
                className="text-white/75 font-medium max-w-sm"
                style={{
                  fontSize: "var(--text-sm)",
                  lineHeight: "var(--leading-relaxed)",
                }}
              >
                Every session is personalised — no templates, no guesswork —
                just a clear path built around your unique strengths and goals.
              </p>
              <a
                href="/about"
                className="mt-4 inline-flex items-center gap-2 bg-[var(--primary-yellow)] text-[var(--primary-black)] px-5 py-2.5 rounded-full font-bold transition-all duration-200 hover:bg-[var(--accent-yellow)] hover:-translate-y-px"
                style={{
                  fontSize: "var(--text-xs)",
                  letterSpacing: "var(--tracking-wide)",
                  boxShadow: "var(--shadow-glow-yellow)",
                }}
              >
                Our Story
                <FiArrowRight size={12} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────── */}
      <section
        className="relative z-20 w-full px-4 sm:px-6 pb-16 lg:pb-24"
        style={{ marginTop: "-3rem" }}
      >
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            <StatCard
              value="5,000+"
              label="Students Mentored"
              sublabel="Across India & Abroad"
              accent="var(--primary-blue)"
              bgAccent="rgba(41,50,110,0.07)"
              icon={<FiAward className="w-5 h-5" />}
            />
            <StatCard
              value="95%"
              label="Satisfaction Rate"
              sublabel="Rated by students & parents"
              accent="#059669"
              bgAccent="rgba(5,150,105,0.07)"
              icon={<FiSmile className="w-5 h-5" />}
            />
            <StatCard
              value="500+"
              label="Seminars Held"
              sublabel="Schools, colleges & corporates"
              accent="#D97706"
              bgAccent="rgba(217,119,6,0.07)"
              icon={<FiVideo className="w-5 h-5" />}
            />
            <StatCard
              value="200+"
              label="Partner Institutions"
              sublabel="Trusted by top schools & firms"
              accent="#6D28D9"
              bgAccent="rgba(109,40,217,0.07)"
              icon={<FiBriefcase className="w-5 h-5" />}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({
  value,
  label,
  sublabel,
  accent,
  bgAccent,
  icon,
}: {
  value: string;
  label: string;
  sublabel: string;
  accent: string;
  bgAccent: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className="group bg-white flex flex-col gap-3 p-5 lg:p-6 rounded-2xl lg:rounded-3xl border border-transparent hover:border-[rgba(0,0,0,0.06)] h-full"
      style={{ boxShadow: "var(--shadow-md)" }}
    >
      <div
        className="w-10 h-10 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: bgAccent, color: accent }}
      >
        {icon}
      </div>
      <div>
        <p
          className="font-extrabold leading-none"
          style={{
            fontFamily: "var(--font-oswald)",
            fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
            color: accent,
            letterSpacing: "var(--tracking-tight)",
          }}
        >
          {value}
        </p>
        <p
          className="font-bold mt-1 text-[var(--primary-black)] leading-snug"
          style={{ fontSize: "var(--text-sm)" }}
        >
          {label}
        </p>
        <p
          className="font-medium mt-0.5 leading-snug"
          style={{ fontSize: "var(--text-xs)", color: "var(--muted-text)" }}
        >
          {sublabel}
        </p>
      </div>
    </div>
  );
}
