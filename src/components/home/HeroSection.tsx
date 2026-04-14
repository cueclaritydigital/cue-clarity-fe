import React from "react";
import Link from "next/link";
import { CountUpValue } from "./CountUpValue";
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
import { Button } from "../common/Button";
import { CTA } from "@/analytics/CTA";

export default function HeroSection() {
  return (
    <div className="overflow-x-hidden bg-[var(--primary-white)]">
      {/* ── HERO SECTION ── */}
      <section className="relative hero-gradient pt-24 pb-20 lg:pt-32 lg:pb-32 px-4 sm:px-6 z-0 overflow-hidden">
        {/* Subtle radial glow */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,147,255,0.18) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 ">
          {/* LEFT: HERO TEXT */}
          <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-7 text-center lg:text-left hero-animate-scale-in">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-bold tracking-widest uppercase">
              Expert Career Counselling
            </div>

            {/* H1 */}
            <h1
              className="heading-font text-white hero-animate-headline"
              style={{ fontSize: "clamp(2.75rem, 7vw, 4.2rem)" }}
            >
              Discover your Strength <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400">
                Design Your Career.
              </span>
            </h1>

            {/* Lead paragraph */}
            <p
              className="text-lg text-white/85 max-w-lg leading-relaxed hero-animate-fade-up"
              style={{ animationDelay: "0.2s" }}
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
              <CTA
                href={getWhatsAppURL("general", "hero")}
                external
                event="whatsapp_click"
                eventData={{
                  source: "hero",
                }}
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-blue-950 px-8 py-4 lg:py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-yellow-300 transition-all duration-200 hover:-translate-y-px shadow-[0_6px_24px_rgba(255,193,20,0.4)] w-full sm:w-auto"
              >
                <FaWhatsapp size={18} />
                Chat With Us — It&apos;s Free
              </CTA>
              <CTA
                href="/services"
                event="cta_click"
                eventData={{
                  source: "hero",
                  cta_name: "Explore Services",
                }}
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 lg:py-3.5 rounded-full font-semibold text-sm border-[1.5px] border-white/60 hover:bg-white/10 hover:border-white transition-all duration-200 w-full sm:w-auto text-center"
              >
                Explore Services →
              </CTA>
            </div>

            {/* Quick-jump strip */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-3 hero-animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="text-white text-[10px] uppercase tracking-[0.15em] shrink-0">
                Quick links
              </span>
              <div className="w-px h-3 bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <CTA
                  href="https://cueclarity.edumilestones.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  external
                  event="cta_click"
                  eventData={{
                    source: "hero",
                    cta_name: "Career Assessment",
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-950 hover:text-blue-800 bg-[var(--primary-white)] px-4 py-2 rounded-full transition-all duration-200 hover:bg-amber-50"
                >
                  <FiBriefcase size={12} />
                  Career Assessment
                  <FiArrowRight size={10} className="opacity-60" />
                </CTA>
                <CTA
                  href="https://cueclarity.edumilestones.com/abroad-studies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  external
                  event="cta_click"
                  eventData={{
                    source: "hero",
                    cta_name: "Study Abroad",
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-950 hover:text-blue-800 bg-[var(--primary-white)] px-4 py-2 rounded-full transition-all duration-200 hover:bg-amber-50"
                >
                  <FiGlobe size={12} />
                  Study Abroad
                  <FiArrowRight size={10} className="opacity-60" />
                </CTA>
              </div>
            </div>
          </div>

          {/* RIGHT: HERO IMAGE CARD (desktop) */}
          <div
            className="relative overflow-hidden rounded-2xl lg:rounded-3xl w-full aspect-[4/3] lg:aspect-[3/4] lg:max-h-[580px] hero-animate-fade-up shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
            style={{ animationDelay: "0.3s" }}
          >
            <img
              src="https://res.cloudinary.com/dy7okgtgd/image/upload/v1775225984/Gemini_Generated_Image_mug0mfmug0mfmug0_ns8ety_eri1bm.webp"
              alt="A mentor guiding a student through career planning"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-blue-950/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/25 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <h3 className="font-oswald font-extrabold uppercase text-white leading-tight mb-2 text-2xl lg:text-3xl tracking-tight">
                Realistic Guidance.
                <br />
                Realistic Outcomes.
              </h3>
              <p className="text-white/75 text-sm font-medium max-w-sm leading-relaxed">
                Every session is personalised — no templates, no guesswork —
                just a clear path built around your unique strengths and goals.
              </p>
              <a
                href="/about"
                className="mt-4 inline-flex items-center gap-2 bg-yellow-400 text-blue-950 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide hover:bg-yellow-300 transition-all duration-200 hover:-translate-y-px shadow-[0_4px_14px_rgba(255,193,20,0.35)]"
              >
                Our Story
                <FiArrowRight size={12} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section
        className="relative z-20 w-full px-4 sm:px-6 pb-16 lg:pb-24"
        style={{ marginTop: "-3rem" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            <StatCard
              value="5,000+"
              label="Students Mentored"
              sublabel="Across India & Abroad"
              accent="#29326e"
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
    <div className="group bg-white flex flex-col gap-3 p-5 lg:p-6 rounded-2xl lg:rounded-3xl border border-transparent hover:border-gray-100 h-full shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
      <div
        className="w-10 h-10 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: bgAccent, color: accent }}
      >
        {icon}
      </div>
      <div>
        <p
          className="font-oswald font-extrabold leading-none tracking-tight"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", color: accent }}
        >
          <CountUpValue value={value} />
        </p>
        <p className="font-bold mt-1 text-blue-950 leading-snug text-sm">
          {label}
        </p>
        <p className="text-gray-400 text-[11px] mt-0.5 leading-snug">
          {sublabel}
        </p>
      </div>
    </div>
  );
}
