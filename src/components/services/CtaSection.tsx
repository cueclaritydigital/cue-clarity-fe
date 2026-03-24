import Link from "next/link";
import FadeUp from "./FadeUp";

interface CtaSectionData {
  _type: "ctaSection";
  eyebrow?: string;
  heading: string;
  subtext?: string;
  bgColor?: "black" | "blue" | "yellow";
  primaryCtaText?: string;
  primaryCtaUrl?: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  // legacy
  buttonText?: string;
  buttonUrl?: string;
}

export default function CtaSection({ data }: { data: CtaSectionData }) {
  const color = data.bgColor ?? "black";
  const primaryText = data.primaryCtaText ?? data.buttonText;
  const primaryUrl = data.primaryCtaUrl ?? data.buttonUrl ?? "#contact";
  const isYellow = color === "yellow";
  const bgStyle = {
    black: "var(--primary-black)",
    blue: "var(--primary-blue)",
    yellow: "var(--primary-yellow)",
  }[color];

  return (
    <section className="section-padding relative overflow-hidden" style={{ backgroundColor: bgStyle }}>
      {!isYellow && (
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(var(--primary-white) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      )}
      <div aria-hidden className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.08] blur-[120px]"
        style={{ backgroundColor: "var(--primary-yellow)" }} />

      <div className="section-container relative z-10 text-center flex flex-col items-center gap-6 max-w-3xl mx-auto">
        <FadeUp>
          {data.eyebrow && (
            <p className="type-eyebrow mb-2 tracking-[0.2em]"
              style={{ color: isYellow ? "var(--primary-black)" : "rgba(255,255,255,0.5)" }}>
              {data.eyebrow}
            </p>
          )}
          <h2 className="font-oswald font-extrabold uppercase leading-tight"
            style={{ fontSize: "clamp(2rem,5vw,3.25rem)", color: isYellow ? "var(--primary-black)" : "var(--primary-white)" }}>
            {data.heading}
          </h2>
          {data.subtext && (
            <p className="mt-4 text-base leading-relaxed max-w-xl mx-auto"
              style={{ color: isYellow ? "var(--primary-black)/80" : "rgba(255,255,255,0.65)" }}>
              {data.subtext}
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {primaryText && (
              <Link href={primaryUrl} className="btn-primary">
                {primaryText}
              </Link>
            )}
            {data.secondaryCtaText && data.secondaryCtaUrl && (
              <Link href={data.secondaryCtaUrl}
                className={isYellow ? "btn-outline-dark" : "btn-outline"}>
                {data.secondaryCtaText}
              </Link>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
