import FadeUp from "./FadeUp";

interface Testimonial {
  _key: string;
  quote: string;
  name: string;
  role?: string;
}
interface TestimonialSliderData {
  _type: "testimonialSlider";
  eyebrow?: string;
  heading?: string;
  bgColor?: "white" | "cream" | "black";
  testimonials: Testimonial[];
}
const BG: Record<string, string> = {
  white: "var(--primary-white)",
  cream: "var(--secondary-white)",
  black: "var(--primary-black)",
};
const avatarColors = [
  "var(--primary-blue)",
  "var(--primary-yellow)",
  "var(--accent-blue)",
  "#9333ea",
  "#ea580c",
  "#16a34a",
];

export default function TestimonialSlider({
  data,
}: {
  data: TestimonialSliderData;
}) {
  const color = data.bgColor ?? "white";
  const isDark = color === "black";

  return (
    <section
      className="section-padding overflow-hidden"
      style={{ backgroundColor: BG[color] }}
    >
      <div className="section-container">
        <FadeUp className="mb-12">
          {data.eyebrow && (
            <p
              className="type-eyebrow mb-3 tracking-[0.2em]"
              style={{
                color: isDark
                  ? "rgba(255,255,255,0.5)"
                  : "var(--primary-yellow)",
              }}
            >
              {data.eyebrow}
            </p>
          )}
          {data.heading && (
            <h2
              className="font-oswald font-extrabold uppercase"
              style={{
                fontSize: "clamp(1.8rem,4vw,2.75rem)",
                color: isDark ? "var(--primary-white)" : "var(--primary-black)",
              }}
            >
              {data.heading}
            </h2>
          )}
        </FadeUp>

        <div
          className={`grid gap-5 ${
            data.testimonials?.length === 1
              ? "grid-cols-1 max-w-2xl"
              : data.testimonials?.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {data.testimonials?.map((t, i) => (
            <FadeUp key={t._key} delay={i * 0.07}>
              <div
                className={`relative flex flex-col justify-between gap-6 p-8 rounded-2xl h-full overflow-hidden
                  ${i === 0 && data.testimonials.length >= 3 ? "lg:row-span-1" : ""}
                `}
                style={{
                  backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "white",
                  border: isDark
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "1px solid var(--secondary-white)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  aria-hidden
                  className="absolute top-[-10px] right-3 font-oswald font-black pointer-events-none select-none leading-none"
                  style={{
                    fontSize: "100px",
                    color: isDark
                      ? "rgba(255,255,255,0.04)"
                      : "rgba(12,21,24,0.04)",
                  }}
                >
                  &ldquo;
                </div>
                <div>
                  <div className="text-[var(--primary-yellow)] text-sm tracking-widest mb-4">
                    ★★★★★
                  </div>
                  <p
                    className="text-sm leading-relaxed relative z-10"
                    style={{
                      color: isDark
                        ? "rgba(255,255,255,0.85)"
                        : "var(--primary-black)",
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div
                  className="flex items-center gap-3 border-t pt-5"
                  style={{
                    borderColor: isDark
                      ? "rgba(255,255,255,0.1)"
                      : "var(--secondary-white)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-sm shrink-0"
                    style={{
                      backgroundColor: avatarColors[i % avatarColors.length],
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold leading-tight"
                      style={{
                        color: isDark
                          ? "var(--primary-white)"
                          : "var(--primary-black)",
                      }}
                    >
                      {t.name}
                    </p>
                    {t.role && (
                      <p
                        className="text-xs mt-0.5"
                        style={{
                          color: isDark
                            ? "rgba(255,255,255,0.5)"
                            : "var(--muted-text)",
                        }}
                      >
                        {t.role}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
