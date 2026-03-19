import Image from "next/image";
import Link from "next/link";
import FadeInView from "@/components/animate/FadeInView";
import { slideInRight } from "@/lib/animations/variants";
import { getWhatsAppURL } from "@/lib/whatsapp";
import { METRICS } from "@/lib/data/success-stories";

export default function HeroSuccessStories() {
  return (
    <section className="relative section-padding px-4 sm:px-6 bg-[var(--primary-white)] overflow-hidden">
      {/* Ambient blob */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[var(--blob-glow)] opacity-[0.07] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--primary-yellow)] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* ── Text column ── */}
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
              Verified Transformations
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
            Real Results
            <br />
            <span style={{ color: "var(--primary-yellow)" }}>Real People.</span>
          </h1>

          <p
            className="type-lead mt-8 max-w-lg"
            style={{
              color: "var(--muted-text)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            Every story here started with confusion and ended with clarity. Read
            how CueClarity has guided students, parents, and professionals to
            careers they love — backed by science, delivered with empathy.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-3.5 mt-10">
            <a
              href={getWhatsAppURL("general", "success-stories-hero")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm px-7 py-3.5 w-full sm:w-auto"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Start Your Journey
            </a>
            <Link
              href="/services"
              className="btn-outline text-sm px-7 py-3.5 w-full sm:w-auto text-center"
            >
              Explore Services →
            </Link>
          </div>

          {/* Quick-stat pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-12">
            {METRICS.map((m) => (
              <div
                key={m.label}
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
                  {m.value}
                </span>
                <span
                  className="text-[11px] font-medium mt-1 leading-snug"
                  style={{ color: "var(--muted-text)" }}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </FadeInView>

        {/* ── Image column ── */}
        <FadeInView variants={slideInRight} className="relative">
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl -rotate-1 hover:rotate-0 transition-transform duration-700">
            <Image
              src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773931237/Gemini_Generated_Image_943jxg943jxg943j_sbdoen.webp"
              alt="CueClarity students and professionals celebrating career success after mentorship sessions"
              fill
              priority
              className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-black)]/50 to-transparent" />

            {/* Floating trust badge */}
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
                Realistic Guidance.
                <br />
                <span style={{ color: "var(--primary-yellow)" }}>
                  Realistic Outcomes.
                </span>
              </p>
              <p
                className="mt-2"
                style={{
                  color: "rgba(253,251,237,0.6)",
                  fontSize: "var(--text-xs)",
                }}
              >
                Every session is personalised — no templates, no guesswork.
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
