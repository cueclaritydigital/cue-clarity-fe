import FadeUp from "./FadeUp";

interface Stat { _key: string; number: string; label: string; sublabel?: string; }
interface StatsBannerData {
  _type: "statsBanner";
  eyebrow?: string;
  description?: string;
  bgColor?: "blue" | "black" | "white";
  stats: Stat[];
}
const BG: Record<string, string> = {
  blue: "var(--primary-blue)",
  black: "var(--primary-black)",
  white: "var(--primary-white)",
};

export default function StatsBanner({ data }: { data: StatsBannerData }) {
  const color = data.bgColor ?? "blue";
  const isDark = color !== "white";
  return (
    <section className="section-padding relative overflow-hidden" style={{ backgroundColor: BG[color] }}>
      {isDark && (
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(var(--primary-white) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      )}
      <div className="section-container relative z-10 text-center">
        <FadeUp>
          {data.eyebrow && (
            <p className="type-eyebrow mb-4 tracking-[0.2em]"
              style={{ color: isDark ? "rgba(255,255,255,0.5)" : "var(--primary-yellow)" }}>
              {data.eyebrow}
            </p>
          )}
          <div className={`grid gap-10 sm:gap-16 ${
            data.stats?.length === 2 ? "grid-cols-2" :
            data.stats?.length === 4 ? "grid-cols-2 lg:grid-cols-4" :
            "grid-cols-2 sm:grid-cols-3"
          }`}>
            {data.stats?.map((s) => (
              <div key={s._key} className="flex flex-col items-center gap-2">
                <span className="font-oswald font-extrabold leading-none"
                  style={{ fontSize: "clamp(2.75rem,6vw,4.5rem)", color: isDark ? "var(--primary-yellow)" : "var(--primary-blue)" }}>
                  {s.number}
                </span>
                <span className="font-jakarta font-semibold text-base"
                  style={{ color: isDark ? "rgba(255,255,255,0.9)" : "var(--primary-black)" }}>
                  {s.label}
                </span>
                {s.sublabel && (
                  <span className="text-sm leading-snug max-w-[180px] mx-auto text-center"
                    style={{ color: isDark ? "rgba(255,255,255,0.5)" : "var(--muted-text)" }}>
                    {s.sublabel}
                  </span>
                )}
              </div>
            ))}
          </div>
          {data.description && (
            <p className="mt-10 text-sm leading-relaxed max-w-2xl mx-auto"
              style={{ color: isDark ? "rgba(255,255,255,0.6)" : "var(--muted-text)" }}>
              {data.description}
            </p>
          )}
        </FadeUp>
      </div>
    </section>
  );
}
