import Image from "next/image";
import FadeUp from "./FadeUp";
import { PortableText } from "@portabletext/react";

interface ExpertBioData {
  _type: "expertBio";
  name: string;
  title?: string;
  image?: { asset: { url: string }; alt?: string };
  bio?: unknown;
  bgColor?: "white" | "cream";
}
const BG: Record<string, string> = {
  white: "var(--primary-white)",
  cream: "var(--secondary-white)",
};
const ptComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-base leading-relaxed mb-4 last:mb-0" style={{ color: "var(--muted-text)" }}>{children}</p>
    ),
  },
  list: { bullet: ({ children }: { children?: React.ReactNode }) => <ul className="space-y-2 mb-4">{children}</ul> },
  listItem: { bullet: ({ children }: { children?: React.ReactNode }) => (
    <li className="flex items-start gap-2 text-sm" style={{ color: "var(--muted-text)" }}>
      <span className="text-[var(--primary-yellow)] mt-0.5 shrink-0">›</span>{children}
    </li>
  )},
};

export default function ExpertBio({ data }: { data: ExpertBioData }) {
  const color = data.bgColor ?? "white";

  return (
    <section className="section-padding" style={{ backgroundColor: BG[color] }}>
      <div className="section-container max-w-4xl">
        <FadeUp>
          <div className="flex flex-col sm:flex-row gap-8 items-start p-8 rounded-2xl"
            style={{ backgroundColor: "white", boxShadow: "var(--shadow-md)", border: "1px solid var(--secondary-white)" }}>
            {/* Avatar */}
            <div className="shrink-0">
              {data.image?.asset?.url ? (
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden"
                  style={{ boxShadow: "var(--shadow-md)" }}>
                  <Image src={data.image.asset.url} alt={data.image.alt ?? data.name} fill className="object-cover" />
                </div>
              ) : (
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl flex items-center justify-center font-oswald font-black text-4xl text-white"
                  style={{ backgroundColor: "var(--primary-blue)" }}>
                  {data.name.charAt(0)}
                </div>
              )}
            </div>
            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="type-eyebrow mb-1 tracking-[0.18em]" style={{ color: "var(--primary-yellow)" }}>
                MEET YOUR EXPERT
              </p>
              <h2 className="font-oswald font-extrabold uppercase text-2xl sm:text-3xl mb-1"
                style={{ color: "var(--primary-black)" }}>
                {data.name}
              </h2>
              {data.title && (
                <p className="text-sm font-semibold mb-4" style={{ color: "var(--primary-blue)" }}>{data.title}</p>
              )}
              {data.bio ? (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                <PortableText value={data.bio as any} components={ptComponents} />
              ) : null}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
