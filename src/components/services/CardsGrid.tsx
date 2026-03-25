import Link from "next/link";
import FadeUp from "./FadeUp";
import ReactIcon from "@/components/common/ReactIcon";

interface Card {
  _key: string;
  iconName?: string;
  title: string;
  description?: string;
  href?: string;
}
interface CardsGridData {
  _type: "cardsGrid";
  eyebrow?: string;
  heading?: string;
  description?: string;
  disclaimer?: string;
  bgColor?: "white" | "cream" | "blue" | "black";
  variant?: "default" | "problem" | "benefit" | "feature";
  layout?: "2col" | "3col" | "4col";
  cards: Card[];
}

const BG: Record<string, string> = {
  white: "var(--primary-white)",
  cream: "var(--secondary-white)",
  blue: "var(--primary-blue)",
  black: "var(--primary-black)",
};
const GRID: Record<string, string> = {
  "2col": "grid-cols-1 sm:grid-cols-2",
  "3col": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  "4col": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export default function CardsGrid({ data }: { data: CardsGridData }) {
  const variant = data.variant ?? "default";
  const layout = data.layout ?? "3col";
  const color = data.bgColor ?? "white";
  const isDark = color === "blue" || color === "black";
  const isProblem = variant === "problem";
  const isBenefit = variant === "benefit";

  return (
    <section
      className="section-padding relative"
      style={{ backgroundColor: BG[color] }}
    >
      <div className="section-container">
        <FadeUp>
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
              className="font-oswald font-extrabold uppercase leading-tight mb-4"
              style={{
                fontSize: "clamp(1.8rem,4vw,2.75rem)",
                color: isDark ? "var(--primary-white)" : "var(--primary-black)",
              }}
            >
              {data.heading}
            </h2>
          )}
          {data.description && (
            <p
              className="mb-10 max-w-2xl text-base leading-relaxed"
              style={{
                color: isDark ? "rgba(255,255,255,0.7)" : "var(--muted-text)",
              }}
            >
              {data.description}
            </p>
          )}
        </FadeUp>

        <div className={`grid gap-5 md:gap-6 ${GRID[layout]}`}>
          {data.cards?.map((card, i) => {
            const CardEl = card.href ? Link : "div";
            return (
              <FadeUp key={card._key} delay={i * 0.06}>
                <CardEl
                  href={card.href ?? "#"}
                  className={`
                    group relative flex flex-col gap-4 p-6 lg:p-7 rounded-2xl h-full
                    transition-all duration-200
                    ${card.href ? "cursor-pointer" : ""}
                    ${
                      isDark
                        ? "bg-white/8 border border-white/10 hover:border-white/25 hover:-translate-y-1"
                        : isProblem
                          ? "bg-white border border-[var(--primary-black)]/8 hover:border-[var(--primary-black)]/25 hover:-translate-y-1 hover:shadow-lg"
                          : isBenefit
                            ? "bg-[var(--primary-blue)] text-white hover:-translate-y-1 hover:shadow-xl"
                            : "bg-white border border-[var(--secondary-white)] hover:border-[var(--primary-blue)] hover:-translate-y-1 hover:shadow-lg"
                    }
                  `}
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  {isProblem && (
                    <span className="text-[var(--primary-yellow)]">
                      {card.iconName ? (
                        <ReactIcon name={card.iconName} size={26} />
                      ) : (
                        <span className="text-2xl">⚠️</span>
                      )}
                    </span>
                  )}
                  {isBenefit && (
                    <span className="text-xl font-bold text-[var(--primary-yellow)]">
                      {card.iconName ? (
                        <ReactIcon name={card.iconName} size={22} />
                      ) : (
                        "✓"
                      )}
                    </span>
                  )}
                  {!isProblem && !isBenefit && card.iconName && (
                    <span className="text-[var(--primary-blue)]">
                      <ReactIcon name={card.iconName} size={26} />
                    </span>
                  )}
                  {variant === "feature" && (
                    <span
                      className="font-oswald font-extrabold text-3xl"
                      style={{ color: "var(--primary-yellow)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  )}
                  <h3
                    className="font-jakarta font-bold text-base leading-snug"
                    style={{
                      color:
                        isDark || isBenefit
                          ? "var(--primary-white)"
                          : "var(--primary-black)",
                    }}
                  >
                    {card.title}
                  </h3>
                  {card.description && (
                    <p
                      className="text-sm leading-relaxed flex-1"
                      style={{
                        color:
                          isDark || isBenefit
                            ? "rgba(255,255,255,0.7)"
                            : "var(--muted-text)",
                      }}
                    >
                      {card.description}
                    </p>
                  )}
                  {card.href && (
                    <span className="mt-auto text-xs font-bold tracking-widest uppercase text-[var(--primary-yellow)] transition-all group-hover:translate-x-1">
                      Learn more →
                    </span>
                  )}
                </CardEl>
              </FadeUp>
            );
          })}
        </div>

        {data.disclaimer && (
          <FadeUp className="mt-8">
            <div
              className="flex items-start gap-3 rounded-xl px-5 py-4 text-sm leading-relaxed"
              style={{
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(0,0,0,0.04)",
                border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"}`,
                color: isDark ? "rgba(255,255,255,0.7)" : "var(--muted-text)",
              }}
            >
              <span className="shrink-0 text-base">⚠</span>
              <p>{data.disclaimer}</p>
            </div>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
