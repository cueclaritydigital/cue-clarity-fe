import Link from "next/link";
import FadeInView from "@/components/animate/FadeInView";
import { slideInRight } from "@/lib/animations/variants";
import { FiBookOpen, FiVideo, FiImage, FiArrowRight } from "react-icons/fi";

const PILLARS = [
  {
    icon: <FiBookOpen className="w-5 h-5" />,
    label: "Articles & Insights",
    desc: "Evidence-based career writing",
    href: "/blog",
    accent: "#29326E",
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
];

export default function HeroResources() {
  return (
    <section
      className="relative py-24 px-4 sm:px-6 bg-[var(--primary-white)] overflow-hidden"
      aria-labelledby="resources-hero-heading"
    >
      {/* Ambient glows */}
      <div className="absolute -top-16 -right-24 w-[560px] h-[560px] bg-blue-200/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -left-12 w-[320px] h-[320px] bg-yellow-200/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* ── Text column ── */}
        <FadeInView>
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <span className="w-16 h-[2px] bg-yellow-400" />
            <span className="text-yellow-500 text-base font-bold tracking-widest uppercase">
              The Knowledge Hub
            </span>
          </div>

          <h1 id="resources-hero-heading" className="hero-heading">
            Your Career
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-yellow)] to-orange-400">
              Resource Hub.
            </span>
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed mt-8 max-w-lg">
            Free e-books, expert articles, YouTube deep-dives, and event
            galleries — everything you need to make confident career decisions,
            curated in one place.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3.5 mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 bg-blue-950 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:bg-blue-900 hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(41,50,110,0.25)]"
            >
              Browse All Articles <FiArrowRight size={16} />
            </Link>
            <Link
              href="#videos"
              className="border-2 rounded-full border-blue-950 text-blue-950 text-base lg:text-sm px-8 py-4 lg:py-3 w-full sm:w-auto text-center font-bold transition-all duration-200 hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(41,50,110,0.15)]"
            >
              Watch Career Videos
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
                className="group flex flex-col gap-4 p-6 bg-white/70 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-gray-200 hover:-translate-y-1 transition-all duration-200"
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: p.bg, color: p.accent }}
                >
                  {p.icon}
                </div>
                <div>
                  <p className="font-bold text-sm text-blue-950 leading-snug">
                    {p.label}
                  </p>
                  <p className="mt-1 text-xs text-gray-400 leading-snug">
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
