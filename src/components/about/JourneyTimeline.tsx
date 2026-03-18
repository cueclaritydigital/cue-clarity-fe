import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";

const CHAPTERS = [
  {
    year: "2018",
    chapter: "01",
    title: "The Spark",
    desc: "Our founder watched bright students pick wrong careers — not due to lack of talent, but lack of guidance. CueClarity was born from a conviction that psychometric science and mentorship could fix that.",
    accent: "var(--primary-yellow)",
    glowRgb: "255, 193, 20",
  },
  {
    year: "2021",
    chapter: "02",
    title: "Scaling Impact",
    desc: "Partnered with 100+ schools and colleges across India. Introduced AI-assisted career matching to give every student a data-backed roadmap — not just advice, but a direction they can trust.",
    accent: "var(--primary-blue)",
    glowRgb: "41, 50, 110",
  },
  {
    year: "2024",
    chapter: "03",
    title: "5,000+ Lives Changed",
    desc: "Crossed 5,000 career transformations. Launched corporate training vertical and international education services — bringing the same clarity framework to working professionals and study-abroad aspirants.",
    accent: "var(--blob-glow)",
    glowRgb: "139, 147, 255",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="section-padding px-4 sm:px-6 bg-[var(--primary-white)]">
      <div className="section-container">
        {/* Header */}
        <FadeInView className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <span
            className="type-label mb-4"
            style={{
              color: "var(--primary-yellow)",
              fontSize: "var(--text-base)",
            }}
          >
            Our Journey
          </span>
          <h2
            style={{
              fontFamily: "var(--font-oswald)",
              fontWeight: 800,
              fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
              color: "var(--primary-blue)",
              textTransform: "uppercase",
            }}
          >
            The Evolution of Impact
          </h2>
        </FadeInView>

        {/* Timeline grid */}
        <div className="relative lg:pt-16">
          {/* Vertical line (mobile/tablet) */}
          <div
            className="absolute top-0 bottom-0 left-[7px] w-0.5 rounded-full lg:hidden"
            style={{
              background:
                "linear-gradient(to bottom, var(--primary-yellow), var(--primary-blue))",
              opacity: 0.35,
            }}
          />
          {/* Horizontal line (desktop) — sits at top-8 inside the lg:pt-16 space */}
          <div
            className="absolute left-0 right-0 h-0.5 rounded-full hidden lg:block"
            style={{
              top: "32px",
              background:
                "linear-gradient(to right, var(--primary-yellow), var(--primary-blue))",
              opacity: 0.35,
            }}
          />

          <StaggerInView className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {CHAPTERS.map((ch) => (
              <FadeInView
                key={ch.chapter}
                variants={fadeUp}
                className="relative group pl-8 lg:pl-0"
              >
                {/* Timeline dot — mobile (vertical) */}
                <div
                  className="absolute top-3 left-0 w-4 h-4 rounded-full z-10 lg:hidden"
                  style={{
                    backgroundColor: ch.accent,
                    boxShadow: `0 0 10px 3px rgba(${ch.glowRgb}, 0.6)`,
                  }}
                />
                {/* Timeline dot — desktop (horizontal), centred in column */}
                {/* top: -32px because grid starts 64px below wrapper top, line is at 32px → 32-64 = -32 */}
                <div
                  className="absolute hidden lg:block w-4 h-4 rounded-full z-10"
                  style={{
                    top: "-32px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: ch.accent,
                    boxShadow: `0 0 10px 4px rgba(${ch.glowRgb}, 0.6)`,
                  }}
                />

                {/* Card */}
                <div
                  className="relative p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-[2rem] overflow-hidden h-full transition-all duration-[400ms] hover:-translate-y-2"
                  style={{
                    backgroundColor: "var(--surface-card)",
                    border: "1px solid var(--secondary-white)",
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  {/* Hover glow — uses rgba so the gradient is valid CSS */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]"
                    style={{
                      background: `radial-gradient(circle at top right, rgba(${ch.glowRgb}, 0.18), transparent 70%)`,
                    }}
                  />

                  <span
                    className="type-label mb-4 block"
                    style={{ color: "var(--primary-yellow)" }}
                  >
                    Chapter {ch.chapter} · {ch.year}
                  </span>
                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontWeight: 800,
                      fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                      color: "var(--primary-blue)",
                      textTransform: "uppercase",
                    }}
                  >
                    {ch.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{
                      color: "var(--muted-text)",
                      fontSize: "var(--text-base)",
                    }}
                  >
                    {ch.desc}
                  </p>
                </div>
              </FadeInView>
            ))}
          </StaggerInView>
        </div>
      </div>
    </section>
  );
}
