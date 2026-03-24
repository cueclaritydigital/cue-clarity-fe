import FadeUp from "./FadeUp";

interface Step { _key: string; stepNumber?: number; title: string; description?: string; }
interface ProcessStepsData {
  _type: "processSteps";
  eyebrow?: string;
  heading?: string;
  description?: string;
  bgColor?: "white" | "cream" | "blue" | "black";
  layout?: "horizontal" | "vertical";
  steps: Step[];
}
const BG: Record<string, string> = {
  white: "var(--primary-white)",
  cream: "var(--secondary-white)",
  blue: "var(--primary-blue)",
  black: "var(--primary-black)",
};

export default function ProcessSteps({ data }: { data: ProcessStepsData }) {
  const color = data.bgColor ?? "cream";
  const isDark = color === "blue" || color === "black";
  const isHorizontal = (data.layout ?? "horizontal") === "horizontal";

  return (
    <section className="section-padding" style={{ backgroundColor: BG[color] }}>
      <div className="section-container">
        <FadeUp className="text-center mb-12 lg:mb-16 max-w-2xl mx-auto">
          {data.eyebrow && (
            <p className="type-eyebrow mb-3 tracking-[0.2em]"
              style={{ color: isDark ? "rgba(255,255,255,0.5)" : "var(--primary-yellow)" }}>
              {data.eyebrow}
            </p>
          )}
          {data.heading && (
            <h2 className="font-oswald font-extrabold uppercase"
              style={{ fontSize: "clamp(1.8rem,4vw,2.75rem)", color: isDark ? "var(--primary-white)" : "var(--primary-black)" }}>
              {data.heading}
            </h2>
          )}
          {data.description && (
            <p className="mt-4 text-base leading-relaxed"
              style={{ color: isDark ? "rgba(255,255,255,0.65)" : "var(--muted-text)" }}>
              {data.description}
            </p>
          )}
        </FadeUp>

        {isHorizontal ? (
          <div className={`grid gap-8 sm:gap-6 ${
            data.steps?.length <= 3 ? "sm:grid-cols-3" :
            data.steps?.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" :
            "sm:grid-cols-2 lg:grid-cols-3"
          }`}>
            {data.steps?.map((step, i) => (
              <FadeUp key={step._key} delay={i * 0.08}>
                <div className="flex flex-col items-start gap-4">
                  <div className="relative">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-oswald font-extrabold text-lg"
                      style={{ backgroundColor: "var(--primary-yellow)", color: "var(--primary-black)" }}
                    >
                      {step.stepNumber ?? i + 1}
                    </div>
                    {i < (data.steps?.length ?? 0) - 1 && (
                      <div className="hidden sm:block absolute top-6 left-12 w-full h-px"
                        style={{ backgroundColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(41,50,110,0.2)" }} />
                    )}
                  </div>
                  <h3 className="font-jakarta font-bold text-base leading-snug"
                    style={{ color: isDark ? "var(--primary-white)" : "var(--primary-black)" }}>
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="text-sm leading-relaxed"
                      style={{ color: isDark ? "rgba(255,255,255,0.65)" : "var(--muted-text)" }}>
                      {step.description}
                    </p>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto flex flex-col gap-0">
            {data.steps?.map((step, i) => (
              <FadeUp key={step._key} delay={i * 0.08}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  {i < (data.steps?.length ?? 0) - 1 && (
                    <div className="absolute left-5 top-12 bottom-0 w-px"
                      style={{ backgroundColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(41,50,110,0.2)" }} />
                  )}
                  <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-oswald font-extrabold text-base z-10"
                    style={{ backgroundColor: "var(--primary-yellow)", color: "var(--primary-black)" }}>
                    {step.stepNumber ?? i + 1}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-jakarta font-bold text-base leading-snug"
                      style={{ color: isDark ? "var(--primary-white)" : "var(--primary-black)" }}>
                      {step.title}
                    </h3>
                    {step.description && (
                      <p className="text-sm leading-relaxed"
                        style={{ color: isDark ? "rgba(255,255,255,0.65)" : "var(--muted-text)" }}>
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
