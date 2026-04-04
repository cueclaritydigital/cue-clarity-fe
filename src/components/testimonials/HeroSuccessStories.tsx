import Image from "next/image";
import Link from "next/link";
import FadeInView from "@/components/animate/FadeInView";
import { slideInRight } from "@/lib/animations/variants";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppURL } from "@/lib/whatsapp";
import { METRICS } from "@/lib/data/success-stories";

export default function HeroSuccessStories() {
  return (
    <section className="relative py-28 px-4 sm:px-6 bg-[var(--primary-white)] overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-80px] right-[-60px] w-[550px] h-[550px] bg-yellow-200/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-40px] left-[-40px] w-[400px] h-[400px] bg-blue-200/15 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* ── Text column ── */}
        <FadeInView>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-14 h-[2px] bg-yellow-500" />
            <span className="text-yellow-500 text-base font-bold tracking-widest uppercase">
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
            Real Results,
            <br />
            <span style={{ color: "var(--primary-yellow)" }}>Real People.</span>
          </h1>

          <p className="mt-8 max-w-lg text-lg text-gray-500 leading-relaxed">
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
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-colors duration-300 w-full sm:w-auto"
            >
              <FaWhatsapp className="w-4 h-4" aria-hidden="true" />
              Start Your Journey
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center text-sm font-semibold px-7 py-3.5 rounded-xl border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              Explore Services →
            </Link>
          </div>

          {/* Quick-stat pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-12">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="flex flex-col px-4 py-4 rounded-2xl bg-gray-50/80 border border-gray-100"
              >
                <span className="text-2xl font-extrabold tracking-tight text-blue-950 leading-none">
                  {m.value}
                </span>
                <span className="text-[11px] font-medium mt-1.5 leading-snug text-gray-500">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </FadeInView>

        {/* ── Image column ── */}
        <FadeInView variants={slideInRight} className="relative">
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] -rotate-1 hover:rotate-0 transition-transform duration-700">
            <Image
              src="https://res.cloudinary.com/dy7okgtgd/image/upload/v1775225983/Gemini_Generated_Image_943jxg943jxg943j_sbdoen_cnpkn9.webp"
              alt="CueClarity students and professionals celebrating career success after mentorship sessions"
              fill
              priority
              className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent" />

            {/* Floating trust badge */}
            <div className="absolute bottom-8 left-8 right-8 p-5 rounded-2xl backdrop-blur-md bg-blue-950/60 border border-yellow-400/20">
              <p className="text-white font-bold text-lg leading-snug tracking-tight">
                Realistic Guidance.
                <br />
                <span className="text-yellow-400">Realistic Outcomes.</span>
              </p>
              <p className="mt-2 text-xs text-white/50">
                Every session is personalised — no templates, no guesswork.
              </p>
            </div>
          </div>

          {/* Decorative accent block */}
          <div className="absolute -bottom-8 -right-8 w-44 h-44 rounded-3xl rotate-6 -z-10 bg-yellow-400/20" />
        </FadeInView>
      </div>
    </section>
  );
}
