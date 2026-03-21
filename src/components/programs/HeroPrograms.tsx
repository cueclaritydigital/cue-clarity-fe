import Image from "next/image";
import Link from "next/link";
import FadeInView from "@/components/animate/FadeInView";
import { slideInRight } from "@/lib/animations/variants";
import { PROGRAM_STATS } from "@/lib/data/programs";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppURL } from "@/lib/whatsapp";
import { FiArrowRight } from "react-icons/fi";

export default function HeroPrograms() {
  return (
    <section className="relative section-padding px-4 sm:px-6 bg-[var(--primary-white)] overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[var(--blob-glow)] opacity-[0.07] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--primary-yellow)] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Text column */}
        <FadeInView>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-16 h-[2px] bg-[var(--primary-yellow)]" />
            <span
              className="type-eyebrow"
              style={{
                color: "var(--primary-yellow)",
                fontSize: "var(--text-base)",
              }}
            >
              Programs & Webinars
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-oswald)",
              fontWeight: 800,
              fontSize: "clamp(2.75rem, 8vw, 5.5rem)",
              lineHeight: 0.92,
              letterSpacing: "var(--tracking-tight)",
              color: "var(--primary-blue)",
              textTransform: "uppercase",
            }}
          >
            Invest in Clarity.
            <br />
            <span style={{ color: "var(--primary-yellow)" }}>
              Unlock Your Career.
            </span>
          </h1>

          <p
            className="type-lead mt-8 max-w-lg"
            style={{
              color: "var(--muted-text)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            Science-backed career assessments, expert-led counselling programs,
            and transformative webinars — designed for students, parents, and
            professionals who refuse to leave their future to chance.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-3.5 mt-10">
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 bg-[var(--primary-blue)] text-[var(--primary-white)] px-7 py-3.5 rounded-full font-bold transition-all duration-200 hover:bg-[var(--accent-blue)] hover:-translate-y-px hover:shadow-[var(--shadow-glow-blue)]"
              style={{ fontSize: "var(--text-sm)" }}
            >
              Explore Programs <FiArrowRight size={16} />
            </a>
            <a
              href={getWhatsAppURL("general", "programs-hero")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm px-7 py-3.5 w-full sm:w-auto"
            >
              <FaWhatsapp className="w-4 h-4" />
              Free Consultation
            </a>
          </div>

          {/* Stat pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-12">
            {PROGRAM_STATS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col px-4 py-4 rounded-2xl"
                style={{ backgroundColor: "var(--secondary-white)" }}
              >
                <span
                  className="font-extrabold leading-none"
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                    color: "var(--primary-blue)",
                  }}
                >
                  {s.value}
                </span>
                <span
                  className="text-[11px] font-medium mt-1 leading-snug"
                  style={{ color: "var(--muted-text)" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </FadeInView>

        {/* Image column */}
        <FadeInView variants={slideInRight} className="relative">
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl -rotate-1 hover:rotate-0 transition-transform duration-700">
            <Image
              src="https://res.cloudinary.com/dcudnuu04/image/upload/v1774113768/Gemini_Generated_Image_x5p1efx5p1efx5p1_ecqkqq.webp"
              alt="CueClarity career assessment program session with students exploring career paths"
              fill
              priority
              className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-black)]/50 to-transparent" />

            {/* Floating badge */}
            <div
              className="absolute bottom-8 left-8 right-8 p-5 rounded-2xl backdrop-blur-md"
              style={{
                background: "rgba(12,21,24,0.55)",
                border: "1px solid rgba(255,193,20,0.2)",
              }}
            >
              <p
                className="text-[var(--primary-white)] font-bold leading-snug"
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "var(--text-lg)",
                  letterSpacing: "var(--tracking-snug)",
                  textTransform: "uppercase",
                }}
              >
                Science-Backed Clarity.
                <br />
                <span style={{ color: "var(--primary-yellow)" }}>
                  Proven Results.
                </span>
              </p>
              <p
                className="mt-2"
                style={{
                  color: "rgba(253,251,237,0.6)",
                  fontSize: "var(--text-xs)",
                }}
              >
                5,000+ careers transformed with personalised roadmaps.
              </p>
            </div>
          </div>

          {/* Decorative accent block */}
          <div
            className="absolute -bottom-8 -right-8 w-44 h-44 rounded-3xl rotate-6 -z-10 opacity-20"
            style={{ backgroundColor: "var(--primary-yellow)" }}
          />
        </FadeInView>
      </div>
    </section>
  );
}
