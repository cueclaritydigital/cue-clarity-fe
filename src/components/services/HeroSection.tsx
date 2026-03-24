import Image from "next/image";
import Link from "next/link";
import FadeUp from "./FadeUp";

interface Button {
  label?: string;
  actionType?: "link" | "action";
  link?: string;
  action?: string;
}

interface HeroSectionData {
  _type: "heroSection";
  eyebrow?: string;
  heading: string;
  subheading?: string;
  backgroundImage?: { asset: { url: string }; alt?: string };
  primaryButton?: Button;
  secondaryButton?: Button;
  ctaText?: string;
  ctaUrl?: string;
}

function resolveHref(btn?: Button): string | undefined {
  if (!btn?.label) return undefined;
  if (btn.actionType === "link" && btn.link) return btn.link;
  if (btn.action === "book_call") return "#contact";
  if (btn.action === "scroll_down") return "#content";
  return btn.link;
}

export default function HeroSection({ data }: { data: HeroSectionData }) {
  const bgUrl = data.backgroundImage?.asset?.url;
  const primaryHref = resolveHref(data.primaryButton) ?? data.ctaUrl;
  const primaryLabel = data.primaryButton?.label ?? data.ctaText;
  const secondaryHref = resolveHref(data.secondaryButton);
  const secondaryLabel = data.secondaryButton?.label;

  return (
    <section className="relative isolate min-h-[78vh] flex items-center overflow-hidden bg-[var(--primary-black)]">
      {bgUrl && (
        <Image
          src={bgUrl}
          alt={data.backgroundImage?.alt ?? ""}
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
      )}

      <div aria-hidden className="pointer-events-none absolute -bottom-32 right-0 h-[600px] w-[600px] rounded-full bg-[var(--primary-yellow)] opacity-[0.07] blur-[130px]" />
      <div aria-hidden className="pointer-events-none absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-[var(--primary-blue)] opacity-[0.15] blur-[100px]" />

      <div className="section-container relative z-10 w-full py-24 sm:py-32 lg:py-40">
        <FadeUp className="max-w-3xl">
          {data.eyebrow && (
            <p className="type-eyebrow text-[var(--primary-yellow)] mb-5 tracking-[0.2em]">
              {data.eyebrow}
            </p>
          )}
          <h1 className="font-oswald text-4xl font-extrabold uppercase leading-[1.04] tracking-tight text-[var(--primary-white)] sm:text-5xl lg:text-[4rem]">
            {data.heading}
          </h1>
          {data.subheading && (
            <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-2xl">
              {data.subheading}
            </p>
          )}
          {(primaryHref || secondaryHref) && (
            <div className="mt-10 flex flex-wrap gap-4">
              {primaryHref && primaryLabel && (
                <Link href={primaryHref} className="btn-primary">{primaryLabel}</Link>
              )}
              {secondaryHref && secondaryLabel && (
                <Link href={secondaryHref} className="btn-outline">{secondaryLabel}</Link>
              )}
            </div>
          )}
        </FadeUp>
      </div>
    </section>
  );
}
