import Image from "next/image";
import FadeUp from "./FadeUp";
import { PortableText } from "@portabletext/react";

interface TextWithImageData {
  _type: "textWithImage";
  eyebrow?: string;
  heading?: string;
  body?: unknown;
  image?: { asset: { url: string }; alt?: string };
  imageAlignment?: "left" | "right";
  bgColor?: "white" | "cream" | "blue";
}
const BG: Record<string, string> = {
  white: "var(--primary-white)",
  cream: "var(--secondary-white)",
  blue:  "var(--primary-blue)",
};
const ptComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted-text)" }}>{children}</p>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-oswald font-bold text-xl uppercase mb-3" style={{ color: "var(--primary-black)" }}>{children}</h3>
    ),
  },
  list: { bullet: ({ children }: { children?: React.ReactNode }) => <ul className="space-y-2 mb-4">{children}</ul> },
  listItem: { bullet: ({ children }: { children?: React.ReactNode }) => (
    <li className="flex items-start gap-2 text-sm" style={{ color: "var(--muted-text)" }}>
      <span className="text-[var(--primary-yellow)] mt-0.5 shrink-0">›</span>{children}
    </li>
  )},
};

export default function TextWithImage({ data }: { data: TextWithImageData }) {
  const color = data.bgColor ?? "white";
  const isBlue = color === "blue";
  const flip = data.imageAlignment === "left";

  return (
    <section className="section-padding overflow-hidden" style={{ backgroundColor: BG[color] }}>
      <div className="section-container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
          {/* Text */}
          <FadeUp delay={0}>
            {data.eyebrow && (
              <p className="type-eyebrow mb-3 tracking-[0.2em]"
                style={{ color: isBlue ? "var(--primary-yellow)" : "var(--primary-yellow)" }}>
                {data.eyebrow}
              </p>
            )}
            {data.heading && (
              <h2 className="font-oswald font-extrabold uppercase mb-6"
                style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: isBlue ? "var(--primary-white)" : "var(--primary-black)" }}>
                {data.heading}
              </h2>
            )}
            {data.body ? (
              <div className={isBlue ? "[&_p]:!text-white/80 [&_li]:!text-white/75" : ""}>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <PortableText value={data.body as any} components={ptComponents} />
              </div>
            ) : null}
          </FadeUp>
          {/* Image */}
          <FadeUp delay={0.12}>
            {data.image?.asset?.url ? (
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                style={{ boxShadow: "var(--shadow-xl)" }}>
                <Image src={data.image.asset.url} alt={data.image.alt ?? data.heading ?? ""} fill className="object-cover" />
              </div>
            ) : (
              <div className="aspect-[4/3] rounded-2xl bg-[rgba(0,0,0,0.05)]" />
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
