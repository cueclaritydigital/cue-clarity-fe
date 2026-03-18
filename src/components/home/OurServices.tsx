import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { SERVICES, FEATURED_SERVICE } from "../../lib/data/ourservices";

/* ── Service data — matches Navbar order ───────────────────────────── */

export default function OurServices() {
  return (
    <section className="relative section-padding px-4 sm:px-6 bg-[var(--primary-blue)] overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[var(--accent-blue)] opacity-25 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[var(--primary-yellow)] opacity-[0.06] blur-[100px] rounded-full" />
      </div>

      <div className="section-container relative z-10">
        {/* ─── HEADER ─────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <span
              className="type-eyebrow mb-3 block"
              style={{ color: "var(--primary-yellow)" }}
            >
              Our Expertise
            </span>
            <h2
              style={{
                fontFamily: "var(--font-oswald)",
                fontWeight: 800,
                fontSize: "clamp(2.75rem, 8vw, 5rem)",
                lineHeight: 0.92,
                letterSpacing: "var(--tracking-tight)",
                color: "var(--primary-white)",
                textTransform: "uppercase",
              }}
            >
              Everything You
              <br />
              Need to Grow
            </h2>
          </div>
          <p
            className="type-lead lg:text-right lg:max-w-xs"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Seven specialist services — one destination: career clarity.
          </p>
        </div>

        {/* ─── BENTO GRID ─────────────────────────────────────────
          Layout (3-col desktop):
            Row 1: [Featured — col-span-2] [Service 1 — col-span-1]
            Row 2: [Services 2-4 — 1 col each]
            Row 3: [Services 5-6 — 1 col each] [empty or span]
          7 cards: 1 featured (2-wide) + 6 standard
        ─────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {/* ── FEATURED CARD (col-span 2) ── */}
          <div
            className="group relative bg-white rounded-2xl lg:rounded-3xl p-8 lg:p-10 md:col-span-2 lg:col-span-2 overflow-hidden flex flex-col justify-between gap-8 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            style={{ boxShadow: "var(--shadow-xl)" }}
          >
            {/* Hover yellow glow wash */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl lg:rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(255,193,20,0.13) 0%, transparent 70%)",
              }}
            />

            {/* Decorative SVG */}
            <div className="absolute bottom-4 right-4 w-28 h-28 opacity-[0.12] text-[var(--primary-blue)] pointer-events-none">
              {FEATURED_SERVICE.svg}
            </div>

            <div className="flex items-start justify-between gap-8 relative z-10">
              <div className="flex flex-col gap-5 flex-1">
                <span
                  className="type-label px-3 py-1 rounded-full w-fit"
                  style={{
                    backgroundColor: "rgba(41,50,110,0.08)",
                    color: "var(--primary-blue)",
                  }}
                >
                  {FEATURED_SERVICE.tag}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontWeight: 800,
                    fontSize: "clamp(2rem, 4.5vw, 3rem)",
                    color: "var(--primary-black)",
                    letterSpacing: "var(--tracking-tight)",
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  {FEATURED_SERVICE.title}
                </h3>
                <p
                  className="type-body"
                  style={{
                    color: "var(--muted-text)",
                    maxWidth: "52ch",
                    lineHeight: "var(--leading-relaxed)",
                  }}
                >
                  {FEATURED_SERVICE.desc}
                </p>
              </div>
              {/* Icon bubble */}
              <div
                className="hidden sm:flex shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl items-center justify-center group-hover:scale-110 group-hover:bg-[var(--primary-blue)] transition-all duration-300"
                style={{
                  backgroundColor: "rgba(41,50,110,0.07)",
                  color: "var(--primary-blue)",
                }}
              >
                <div className="group-hover:text-white transition-colors duration-300 w-8 h-8 lg:w-10 lg:h-10">
                  {FEATURED_SERVICE.svg}
                </div>
              </div>
            </div>

            <Link
              href={FEATURED_SERVICE.href}
              className="relative z-10 w-fit inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-px group/cta"
              style={{
                backgroundColor: "var(--primary-blue)",
                color: "white",
                boxShadow: "var(--shadow-glow-blue)",
              }}
            >
              Get Started
              <FiArrowRight
                size={13}
                className="group-hover/cta:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* ── 6 STANDARD CARDS ── */}
          {SERVICES.map((s, i) => {
            const isLast = i === SERVICES.length - 1;
            return (
              <Link
                key={s.title}
                href={s.href}
                className={`group relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-7 overflow-hidden flex flex-col gap-4 hover:-translate-y-1 hover:ring-2 hover:ring-[rgba(41,50,110,0.30)] hover:shadow-xl transition-all duration-300${
                  isLast ? " lg:col-span-2" : ""
                }`}
                style={{ boxShadow: "var(--shadow-lg)" }}
              >
                {/* Hover yellow corner blob */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-[45px]"
                  style={{
                    backgroundColor: "var(--primary-yellow)",
                    transform: "translate(35%, -35%)",
                  }}
                />

                {/* Decorative SVG bottom-right */}
                <div className="absolute bottom-3 right-3 w-20 h-20 opacity-[0.10] group-hover:opacity-[0.14] text-[var(--primary-blue)] pointer-events-none transition-all duration-300">
                  {s.svg}
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 bg-[rgba(41,50,110,0.07)] group-hover:bg-[rgba(41,50,110,0.14)] text-[var(--primary-blue)]">
                    <div className="w-5 h-5">{s.svg}</div>
                  </div>
                  <span className="type-label text-[var(--muted-text)] opacity-60 transition-all duration-300">
                    {s.tag}
                  </span>
                </div>

                <h3
                  className="relative z-10 text-[var(--primary-black)] transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontWeight: 700,
                    fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                    letterSpacing: "var(--tracking-tight)",
                    textTransform: "uppercase",
                    lineHeight: 1.1,
                  }}
                >
                  {s.title}
                </h3>

                <p
                  className="relative z-10 text-[var(--muted-text)] transition-colors duration-300"
                  style={{
                    fontSize: "var(--text-sm)",
                    lineHeight: "var(--leading-relaxed)",
                  }}
                >
                  {s.desc}
                </p>

                <div className="relative z-10 mt-auto flex items-center gap-1.5 font-bold text-sm group-hover:gap-2.5 transition-all duration-300 text-[var(--primary-blue)]">
                  Learn More
                  <FiArrowRight size={13} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
