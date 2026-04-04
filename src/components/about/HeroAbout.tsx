import FadeInView from "@/components/animate/FadeInView";
import { slideInRight } from "@/lib/animations/variants";

const STATS = [
  { value: "5,000+", label: "Careers Transformed" },
  { value: "95%", label: "Satisfaction Rate" },
  { value: "500+", label: "Seminars Held" },
  { value: "200+", label: "Institution Partners" },
];

export default function HeroAbout() {
  return (
    <section className="relative min-h-[85vh] flex items-center py-28 px-4 sm:px-6 overflow-hidden bg-[var(--primary-white)]">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-80px] right-[-60px] w-[500px] h-[500px] bg-yellow-200/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-120px] left-[-80px] w-[400px] h-[400px] bg-blue-200/15 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-20 items-center z-10">
        {/* Text column */}
        <FadeInView>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-14 h-[2px] bg-yellow-500" />
            <span className="text-yellow-500 text-base font-bold tracking-widest uppercase">
              The Story of Clarity
            </span>
          </div>

          <h1 className="hero-heading">
            Where Insight
            <br />
            <span style={{ color: "var(--primary-yellow)" }}>
              Meets Action.
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-500 max-w-lg leading-relaxed">
            Our journey started with a simple frustration: too many talented
            people making career decisions without clarity. We combine
            psychometric science, industry expertise, and genuine empathy to
            give every individual a clear, actionable career roadmap.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-3xl lg:text-4xl font-extrabold tracking-tight text-blue-950">
                  {s.value}
                </p>
                <p className="text-xs font-medium mt-1.5 text-gray-400 uppercase tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </FadeInView>

        {/* Image column */}
        <FadeInView variants={slideInRight} className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] rotate-2 hover:rotate-0 transition-transform duration-700">
            <img
              src="https://res.cloudinary.com/dy7okgtgd/image/upload/v1775225982/Gemini_Generated_Image_fdp1q8fdp1q8fdp1_fded7r_mitxjm.webp"
              alt="CueClarity team in a career counselling workshop with students"
              width={640}
              height={640}
              loading="eager"
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
            />
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-3xl -rotate-6 -z-10 bg-yellow-400/15" />
        </FadeInView>
      </div>
    </section>
  );
}
