import FadeInView from "@/components/animate/FadeInView";
import { slideInLeft, slideInRight } from "@/lib/animations/variants";

export default function FounderSection() {
  return (
    <section className="section-padding px-4 sm:px-6 bg-[var(--surface-card)] relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <FadeInView
            variants={slideInLeft}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="relative group">
              <div
                className="absolute inset-0 rounded-[3rem] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"
                style={{ backgroundColor: "var(--primary-blue)" }}
              />
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://cueclarity.com/wp-content/uploads/2025/05/Untitled-design-3.webp"
                  alt="Founder of CueClarity — career counselling pioneer"
                  width={480}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </FadeInView>

          {/* Content */}
          <FadeInView
            variants={slideInRight}
            className="lg:col-span-7 pt-4 lg:pt-10"
          >
            <span
              className="type-label mb-4 block"
              style={{
                color: "var(--primary-yellow)",
                fontSize: "var(--text-base)",
              }}
            >
              A Message from our Founder
            </span>

            <h2
              style={{
                fontFamily: "var(--font-oswald)",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
                color: "var(--primary-blue)",
                lineHeight: 1,
              }}
            >
              Sunil Kumar Panda
            </h2>

            <p
              className="type-label mt-2 mb-10"
              style={{
                color: "var(--muted-text)",
                letterSpacing: "var(--tracking-wider)",
              }}
            >
              Founder &amp; Chief Career Strategist, CueClarity
            </p>

            <blockquote
              className="text-xl sm:text-2xl lg:text-3xl font-medium leading-snug pl-8 lg:pl-10 mb-8"
              style={{
                color: "var(--primary-blue)",
                borderLeft: "4px solid var(--primary-yellow)",
              }}
            >
              &ldquo;Career clarity isn&rsquo;t about having all the answers —
              it&rsquo;s about asking the right questions. At CueClarity, we
              built a culture where curiosity drives every conversation.&rdquo;
            </blockquote>

            <p
              className="text-lg leading-relaxed font-light mb-10"
              style={{ color: "var(--muted-text)" }}
            >
              &ldquo;We believe that radical focus isn&rsquo;t just a strategy;
              it&rsquo;s the only way to find the signal in the growing noise of
              career choices. Our framework was designed to distil complex
              environments into actionable career cues — so every student,
              parent, and professional can move forward with confidence.&rdquo;
            </p>

            <div className="flex flex-col items-start gap-3 pt-6">
              <span
                className="text-4xl lg:text-6xl opacity-20 select-none"
                style={{
                  fontFamily: "'Mrs Saint Delafield', cursive",
                  color: "var(--primary-blue)",
                }}
              >
                Sunil Kumar Panda
              </span>
              <div
                className="w-28 h-1.5 rounded-full"
                style={{ backgroundColor: "var(--primary-yellow)" }}
              />
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
