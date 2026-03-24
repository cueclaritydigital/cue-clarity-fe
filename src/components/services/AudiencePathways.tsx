import Link from "next/link";
import FadeUp from "./FadeUp";

interface Pathway { _key: string; emoji?: string; audience: string; description?: string; bullets?: string[]; href?: string; }
interface AudiencePathwaysData {
  _type: "audiencePathways";
  eyebrow?: string;
  heading?: string;
  description?: string;
  bgColor?: "white" | "cream" | "blue" | "black";
  pathways: Pathway[];
}
const BG: Record<string, string> = {
  white: "var(--primary-white)",
  cream: "var(--secondary-white)",
  blue: "var(--primary-blue)",
  black: "var(--primary-black)",
};

export default function AudiencePathways({ data }: { data: AudiencePathwaysData }) {
  const color = data.bgColor ?? "white";
  const isDark = color === "blue" || color === "black";

  return (
    <section className="section-padding" style={{ backgroundColor: BG[color] }}>
      <div className="section-container">
        <FadeUp className="mb-12 max-w-2xl">
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

        <div className={`grid gap-5 grid-cols-1 ${
          data.pathways?.length <= 2 ? "sm:grid-cols-2" :
          data.pathways?.length === 3 ? "sm:grid-cols-3" :
          "sm:grid-cols-2 lg:grid-cols-4"
        }`}>
          {data.pathways?.map((p, i) => {
            const El = p.href ? Link : "div";
            return (
              <FadeUp key={p._key} delay={i * 0.07}>
                <El
                  href={p.href ?? "#"}
                  className={`
                    group flex flex-col gap-3 p-6 lg:p-7 rounded-2xl h-full
                    transition-all duration-200 hover:-translate-y-1
                    ${p.href ? "cursor-pointer" : ""}
                    ${isDark
                      ? "bg-white/8 border border-white/12 hover:border-white/30"
                      : "bg-white border border-[var(--secondary-white)] hover:border-[var(--primary-blue)] hover:shadow-lg"
                    }
                  `}
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  {p.emoji && <span className="text-2xl">{p.emoji}</span>}
                  <h3 className="font-jakarta font-bold text-base leading-snug"
                    style={{ color: isDark ? "var(--primary-white)" : "var(--primary-black)" }}>
                    {p.audience}
                  </h3>
                  {p.description && (
                    <p className="text-sm leading-relaxed"
                      style={{ color: isDark ? "rgba(255,255,255,0.65)" : "var(--muted-text)" }}>
                      {p.description}
                    </p>
                  )}
                  {p.bullets && p.bullets.length > 0 && (
                    <ul className="flex flex-col gap-2 mt-2">
                      {p.bullets.map((b, bi) => (
                        <li key={bi} className="text-xs flex items-start gap-2"
                          style={{ color: isDark ? "rgba(255,255,255,0.6)" : "var(--muted-text)" }}>
                          <span className="mt-0.5 shrink-0 text-[var(--primary-yellow)]">›</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {p.href && (
                    <span className="mt-auto text-xs font-bold tracking-widest uppercase text-[var(--primary-yellow)] group-hover:translate-x-1 transition-transform">
                      Explore →
                    </span>
                  )}
                </El>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
