import React from "react";
import Link from "next/link";
import { FiAward, FiSmile, FiVideo, FiBriefcase } from "react-icons/fi";
import { getWhatsAppURL } from "@/lib/whatsapp";
import "./HeroSection.css";

// WhatsApp icon (simple inline SVG)
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <div
      className="overflow-x-hidden"
      style={{ backgroundColor: "var(--primary-white)" }}
    >
      {/* ── HERO SECTION ───────────────────────────────────────────── */}
      <section className="relative hero-gradient pt-24 pb-36 lg:pt-32 lg:pb-48 px-4 sm:px-6 flex flex-col items-center justify-center min-h-[85vh] lg:min-h-0 z-0 overflow-hidden">
        {/* Subtle radial glow */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,147,255,0.18) 0%, transparent 70%)",
          }}
        />

        {/* HERO TEXT */}
        <div className="relative z-10 w-full mx-auto flex flex-col items-center gap-6 lg:gap-7 text-center font-md">
          {/* Eyebrow label */}
          <div className="trust-pill text-lg hero-animate-scale-in">
            Expert Career Counselling
          </div>

          {/* H1 */}
          <h1
            className="text-white drop-shadow-sm text-center font-extrabold uppercase leading-[1.08] hero-animate-headline"
            style={{
              fontFamily: "var(--font-oswald)",
              fontSize: "clamp(3rem, 10vw, 6rem)",
              letterSpacing: "var(--tracking-tight)",
            }}
          >
            Clarity For Your
            <br />
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
              Career Growth Path.
            </span>
          </h1>

          {/* Lead paragraph — specific & proof-driven */}
          <p
            className="type-lead max-w-2xl mx-auto px-2 hero-animate-fade-up"
            style={{
              color: "rgba(255,255,255,0.88)",
              fontSize: "clamp(1.05rem, 2.5vw, 1.35rem)",
              animationDelay: "0.2s",
            }}
          >
            Clarity, backed by science — trusted by 5,000+ learners through
            science-backed assessments, personalised roadmaps, and real
            mentorship.
          </p>

          {/* CTA Row — WhatsApp primary */}
          <div
            className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto justify-center mt-2 px-2 sm:px-0 hero-animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            <a
              href={getWhatsAppURL("general", "hero")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base lg:text-sm px-8 py-4 lg:py-3 w-full sm:w-auto"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Chat With Us — It&apos;s Free
            </a>
            <Link
              href="/services"
              className="btn-outline text-base lg:text-sm px-8 py-4 lg:py-3 w-full sm:w-auto text-center"
            >
              Explore Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CUE CLARITY — BENTO SECTION ────────────────────────── */}
      <section
        className="relative z-20 w-full px-4 sm:px-6 pb-20 lg:pb-28"
        style={{ marginTop: "-5rem" }}
        aria-labelledby="why-heading"
      >
        <div className="max-w-[1240px] mx-auto">
          {/* Section label + heading */}
          <div className="hidden lg:flex flex-col items-center text-center gap-3 mb-10 pt-4">
            <span className="type-eyebrow text-[var(--primary-blue)]/60">
              Why choose us
            </span>
            <h2
              id="why-heading"
              className="type-section-heading text-[var(--primary-black)]"
            >
              The CueClarity Difference
            </h2>
          </div>

          {/* BENTO GRID */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">
            {/* LEFT: BIG IMAGE CARD */}
            <div
              className="relative overflow-hidden rounded-2xl lg:rounded-3xl w-full lg:w-[58%] aspect-[4/3] lg:aspect-auto lg:min-h-[520px] shrink-0"
              style={{ boxShadow: "var(--shadow-xl)" }}
            >
              <img
                src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773932310/Gemini_Generated_Image_mug0mfmug0mfmug0_ns8ety.webp"
                alt="A mentor guiding a student through career planning"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[var(--primary-black)]/40" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(12,21,24,0.85) 0%, rgba(12,21,24,0.30) 45%, transparent 70%)",
                }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3
                  className="font-extrabold uppercase text-white leading-tight mb-2"
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
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
                  just a clear path built around your unique strengths and
                  goals.
                </p>
                <a
                  href="/about"
                  className="mt-5 inline-flex items-center gap-2 bg-[var(--primary-yellow)] text-[var(--primary-black)] px-5 py-2.5 rounded-full font-bold transition-all duration-200 hover:bg-[var(--accent-yellow)] hover:-translate-y-px"
                  style={{
                    fontSize: "var(--text-xs)",
                    letterSpacing: "var(--tracking-wide)",
                    boxShadow: "var(--shadow-glow-yellow)",
                  }}
                >
                  Our Story
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* RIGHT: 2×2 STAT GRID */}
            <div className="grid grid-cols-2 gap-4 lg:gap-5 w-full lg:w-[42%]">
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

          {/* MOBILE: section heading below grid */}
          <div className="lg:hidden flex flex-col items-center text-center gap-2 mt-8">
            <span className="type-eyebrow text-[var(--primary-blue)]/50">
              Why choose us
            </span>
            <p
              className="font-medium max-w-sm"
              style={{
                fontSize: "var(--text-base)",
                color: "var(--muted-text)",
                lineHeight: "var(--leading-relaxed)",
              }}
            >
              Expert‑led, family‑friendly career guidance that unlocks real
              futures.
            </p>
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
