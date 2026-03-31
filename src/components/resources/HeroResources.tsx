import Link from "next/link";
import FadeInView from "@/components/animate/FadeInView";
import { slideInRight } from "@/lib/animations/variants";
import {
  FiBookOpen,
  FiVideo,
  FiImage,
  FiArrowRight,
  FiBook,
} from "react-icons/fi";

const PILLARS = [
  {
    icon: <FiBookOpen className="w-5 h-5" />,
    label: "Articles & Insights",
    desc: "Evidence-based career writing",
    href: "/blog",
    accent: "var(--primary-blue)",
    bg: "rgba(41,50,110,0.07)",
  },
  {
    icon: <FiVideo className="w-5 h-5" />,
    label: "Video Insights",
    desc: "Career talks & counsellor sessions",
    href: "#videos",
    accent: "#059669",
    bg: "rgba(5,150,105,0.07)",
  },
  {
    icon: <FiImage className="w-5 h-5" />,
    label: "Gallery",
    desc: "Seminars, sessions & stories",
    href: "#gallery",
    accent: "#D97706",
    bg: "rgba(217,119,6,0.07)",
  },
  {
    icon: <FiBook className="w-5 h-5" />,
    label: "Free E-books",
    desc: "Downloadable career guides",
    href: "#ebooks",
    accent: "#6D28D9",
    bg: "rgba(109,40,217,0.07)",
  },
];

export default function HeroResources() {
  return (
    <section
      className="relative section-padding px-4 sm:px-6 bg-[var(--primary-white)] overflow-hidden"
      aria-labelledby="resources-hero-heading"
    >
      {/* Ambient blob – top right */}
      <div className="absolute -top-16 -right-24 w-[560px] h-[560px] bg-[var(--blob-glow)] opacity-[0.07] blur-[130px] rounded-full pointer-events-none" />
      {/* Yellow accent – bottom left */}
      <div className="absolute bottom-0 -left-12 w-[320px] h-[320px] bg-[var(--primary-yellow)] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* ── Text column ── */}
        <FadeInView>
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <span className="w-16 h-[2px] bg-[var(--primary-yellow)]" />
            <span
              className="type-eyebrow"
              style={{
                color: "var(--primary-yellow)",
                fontSize: "var(--text-base)",
              }}
            >
              The Knowledge Hub
            </span>
          </div>

          <h1
            id="resources-hero-heading"
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
            Your Career
            <br />
            <span style={{ color: "var(--primary-yellow)" }}>
              Resource Hub.
            </span>
          </h1>

          <p
            className="type-lead mt-8 max-w-lg"
            style={{
              color: "var(--muted-text)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            Free e-books, expert articles, YouTube deep-dives, and event
            galleries — everything you need to make confident career decisions,
            curated in one place.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3.5 mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 bg-[var(--primary-blue)] text-[var(--primary-white)] px-7 py-3.5 rounded-full font-bold transition-all duration-200 hover:bg-[var(--accent-blue)] hover:-translate-y-px hover:shadow-[var(--shadow-glow-blue)]"
              style={{ fontSize: "var(--text-sm)" }}
            >
              Browse All Articles <FiArrowRight size={16} />
            </Link>
            <Link
              href="#ebooks"
              className="border-2 rounded-full border-[var(--primary-blue)] text-[var(--primary-blue)] text-base lg:text-sm px-8 py-4 lg:py-3 w-full sm:w-auto text-center font-bold transition-all duration-200  hover:-translate-y-px hover:shadow-[var(--shadow-glow-blue)]"
            >
              Download Free E-books
            </Link>
          </div>
        </FadeInView>

        {/* ── Pillars grid ── */}
        <FadeInView variants={slideInRight}>
          <div className="grid grid-cols-2 gap-4">
            {PILLARS.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="group flex flex-col gap-4 p-6 bg-[var(--surface-card)] rounded-2xl border border-transparent hover:border-[rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-200"
                style={{ boxShadow: "var(--shadow-md)" }}
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: p.bg, color: p.accent }}
                >
                  {p.icon}
                </div>
                <div>
                  <p
                    className="font-bold leading-snug"
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--primary-black)",
                    }}
                  >
                    {p.label}
                  </p>
                  <p
                    className="mt-1 leading-snug"
                    style={{
                      fontSize: "var(--text-xs)",
                      color: "var(--muted-text)",
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
