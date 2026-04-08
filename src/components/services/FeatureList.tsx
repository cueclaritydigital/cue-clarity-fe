"use client";

import Image from "next/image";
import type { FeatureListSection } from "@/lib/data/services";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";

const FEATURE_COLORS = [
  { accent: "#29326e", bg: "rgba(41,50,110,0.08)" },
  { accent: "#D97706", bg: "rgba(217,119,6,0.08)" },
  { accent: "#059669", bg: "rgba(5,150,105,0.08)" },
  { accent: "#6D28D9", bg: "rgba(109,40,217,0.08)" },
];

export default function FeatureList({
  section,
}: {
  section: FeatureListSection;
}) {
  const cols = section.columns ?? 1;
  const hasImage = !!section.image;

  return (
    <section className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <FadeInView className="mb-12 lg:mb-16 ">
          {section.eyebrow && (
            <span className="text-[var(--primary-yellow)] text-base font-bold tracking-widest uppercase mb-3 block">
              {section.eyebrow}
            </span>
          )}
          <h2
            className="heading-font text-4xl sm:text-5xl lg:text-6xl text-[var(--primary-blue)]"
            dangerouslySetInnerHTML={{
              __html: section.headline.replace(
                /<em>(.*?)<\/em>/g,
                '<span style="color:#ffc114">$1</span>',
              ),
            }}
          />
          {section.description && (
            <p className="text-lg mt-4 text-gray-500 max-w-2xl leading-relaxed">
              {section.description}
            </p>
          )}
        </FadeInView>

        {/* Content: features + optional image */}
        <div
          className={`${
            hasImage
              ? "grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start"
              : ""
          }`}
        >
          {/* Features */}
          <StaggerInView
            className={`grid gap-4 ${
              cols === 2 ? "md:grid-cols-2" : "grid-cols-1"
            } ${hasImage ? "lg:col-span-3" : cols === 1 ? "max-w-3xl" : ""}`}
          >
            {section.features.map((feature, i) => {
              const color = FEATURE_COLORS[i % FEATURE_COLORS.length];
              return (
                <FadeInView
                  key={i}
                  variants={fadeUp}
                  className="group flex gap-5 items-start bg-white border border-gray-200 rounded-2xl p-5 lg:p-6 transition-all duration-300 hover:bg-gray-50 hover:border-blue-950/20"
                >
                  {/* Icon Container */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300 font-bold text-sm"
                    style={{ backgroundColor: color.bg, color: color.accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-1.5 mt-0.5">
                    <h3 className="font-oswald font-bold text-lg uppercase tracking-tight text-blue-950 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </FadeInView>
              );
            })}
          </StaggerInView>

          {/* Optional image */}
          {hasImage && (
            <FadeInView className="hidden lg:block lg:col-span-2 sticky top-28">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={section.image!}
                  alt={`${section.eyebrow} — ${section.headline.replace(/<[^>]*>/g, "")} | CueClarity India`}
                  width={480}
                  height={560}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 pointer-events-none" />
              </div>
            </FadeInView>
          )}
        </div>
      </div>
    </section>
  );
}
