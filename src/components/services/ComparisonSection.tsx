import FadeUp from "./FadeUp";

interface ComparisonSectionData {
  _type: "comparisonSection";
  eyebrow?: string;
  heading?: string;
  bgColor?: "white" | "cream" | "black";
  leftTitle?: string;
  leftPoints?: string[];
  rightTitle?: string;
  rightPoints?: string[];
}
const BG: Record<string, string> = {
  white: "var(--primary-white)",
  cream: "var(--secondary-white)",
  black: "var(--primary-black)",
};

export default function ComparisonSection({ data }: { data: ComparisonSectionData }) {
  const color = data.bgColor ?? "cream";
  const pageIsDark = color === "black";

  return (
    <section className="section-padding" style={{ backgroundColor: BG[color] }}>
      <div className="section-container">
        <FadeUp className="mb-12 max-w-2xl">
          {data.eyebrow && (
            <p className="type-eyebrow mb-3 tracking-[0.2em]"
              style={{ color: pageIsDark ? "rgba(255,255,255,0.5)" : "var(--primary-yellow)" }}>
              {data.eyebrow}
            </p>
          )}
          {data.heading && (
            <h2 className="font-oswald font-extrabold uppercase"
              style={{ fontSize: "clamp(1.8rem,4vw,2.75rem)", color: pageIsDark ? "var(--primary-white)" : "var(--primary-black)" }}>
              {data.heading}
            </h2>
          )}
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {/* Left — problem */}
          <FadeUp delay={0.05}>
            <div className="flex flex-col gap-0 rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-md)" }}>
              <div className="px-7 py-5 bg-[var(--primary-black)]">
                <h3 className="font-oswald font-extrabold uppercase text-lg text-white/80 tracking-wide">
                  {data.leftTitle ?? "Without CueClarity"}
                </h3>
              </div>
              <div className="flex flex-col gap-0 bg-white">
                {data.leftPoints?.map((pt, i) => (
                  <div key={i} className="flex items-start gap-4 px-7 py-4 border-b border-[var(--secondary-white)] last:border-0">
                    <span className="shrink-0 mt-0.5 text-red-500 font-bold text-sm">✗</span>
                    <span className="text-sm leading-snug" style={{ color: "var(--muted-text)" }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Right — benefit */}
          <FadeUp delay={0.12}>
            <div className="flex flex-col gap-0 rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-md)" }}>
              <div className="px-7 py-5 bg-[var(--primary-blue)]">
                <h3 className="font-oswald font-extrabold uppercase text-lg text-[var(--primary-yellow)] tracking-wide">
                  {data.rightTitle ?? "With CueClarity"}
                </h3>
              </div>
              <div className="flex flex-col gap-0 bg-white">
                {data.rightPoints?.map((pt, i) => (
                  <div key={i} className="flex items-start gap-4 px-7 py-4 border-b border-[var(--secondary-white)] last:border-0">
                    <span className="shrink-0 mt-0.5 text-emerald-500 font-bold text-sm">✓</span>
                    <span className="text-sm leading-snug font-medium" style={{ color: "var(--primary-black)" }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
