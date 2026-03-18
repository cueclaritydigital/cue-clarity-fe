import FadeInView from "@/components/animate/FadeInView";
import { slideInRight } from "@/lib/animations/variants";

const STATS = [
  { value: "5,000+", label: "Careers Transformed" },
  { value: "200+", label: "Institution Partners" },
  { value: "15+", label: "Years Combined Experience" },
  { value: "4.9/5", label: "Satisfaction Rating" },
];

export default function HeroAbout() {
  return (
    <section className="relative min-h-[80vh] flex items-center section-padding px-4 sm:px-6 overflow-hidden bg-[var(--primary-white)]">
      {/* Ambient blob */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[var(--blob-glow)] opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />

      <div className="section-container w-full grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
        {/* Text column */}
        <FadeInView>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-16 h-[2px] bg-[var(--primary-yellow)]" />
            <span
              className="type-label"
              style={{
                color: "var(--primary-yellow)",
                fontSize: "var(--text-base)",
              }}
            >
              The Story of Clarity
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
            Where Insight
            <br />
            <span style={{ color: "var(--primary-yellow)" }}>
              Meets Action.
            </span>
          </h1>

          <p
            className="type-lead mt-8 max-w-lg"
            style={{
              color: "var(--muted-text)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            Our journey started with a simple frustration: too many talented
            people making career decisions without clarity. We combine
            psychometric science, industry expertise, and genuine empathy to
            give every individual a clear, actionable career roadmap.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
            {STATS.map((s) => (
              <div key={s.label}>
                <p
                  className="font-extrabold"
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    color: "var(--primary-blue)",
                  }}
                >
                  {s.value}
                </p>
                <p
                  className="text-xs font-medium mt-1"
                  style={{ color: "var(--muted-text)" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </FadeInView>

        {/* Image column */}
        <FadeInView variants={slideInRight} className="relative">
          <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
            <img
              src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773857945/Gemini_Generated_Image_fdp1q8fdp1q8fdp1_fded7r.webp"
              alt="CueClarity team in a career counselling workshop with students"
              width={640}
              height={640}
              loading="eager"
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
            />
          </div>
          {/* Decorative accent */}
          <div
            className="absolute -bottom-8 -left-8 w-44 h-44 rounded-3xl -rotate-6 -z-10 opacity-20"
            style={{ backgroundColor: "var(--primary-yellow)" }}
          />
        </FadeInView>
      </div>
    </section>
  );
}
