"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import type { DeliverableSection } from "@/lib/data/services";

export default function Deliverables({
  section,
}: {
  section: DeliverableSection;
}) {
  const ref = useRef(null);

  return (
    <section className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1240px] mx-auto">
        {/* HEADER */}
        <div className=" mb-20">
          {section.eyebrow && (
            <span className="text-blue-700 text-base font-bold tracking-widest uppercase mb-3 block">
              {section.eyebrow}
            </span>
          )}

          <h2
            className="heading-font text-4xl sm:text-5xl lg:text-7xl text-[var(--primary-blue)]"
            dangerouslySetInnerHTML={{
              __html: section.headline.replace(
                /<em>(.*?)<\/em>/g,
                '<span style="color:#ffc114">$1</span>',
              ),
            }}
          />

          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            These aren’t just outputs. These are the tools, clarity, and
            direction you’ll carry forward long after the session ends.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="lg:grid lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          {/* LEFT — STICKY */}
          <div className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <p className="text-xs uppercase tracking-widest text-blue-700">
                Your Outcome
              </p>

              <h3 className="font-oswald font-extrabold text-3xl uppercase tracking-tight text-blue-950 leading-tight">
                You don't leave with advice.
                <br />
                <span style={{ color: "#ffc114" }}>
                  You leave with clarity.
                </span>
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Everything you receive is designed to help you make confident,
                informed decisions — not guesses.
              </p>

              <div className="w-16 h-[3px] bg-yellow-400" />

              <div className="space-y-4">
                <p className="italic opacity-80">
                  “Clarity removes hesitation.”
                </p>
                <p className="italic opacity-80">
                  “Direction builds confidence.”
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — SCROLL STORY */}
          <div ref={ref} className="space-y-20">
            {section.items.map((item, i) => {
              return (
                <motion.div
                  key={i}
                  className="group will-change-transform transition-all duration-500"
                >
                  {/* Label */}
                  <p className="text-xs uppercase tracking-widest text-blue-700 mb-3">
                    Deliverable {String(i + 1).padStart(2, "00")}
                  </p>

                  {/* Title */}
                  <h3 className="font-oswald font-bold text-2xl lg:text-3xl uppercase tracking-tight text-blue-950 mb-4 transition-all duration-300 group-hover:translate-x-1">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-gray-500 leading-relaxed max-w-xl">
                    {item.description}
                  </p>

                  {/* Line */}
                  <motion.div
                    className="mt-6 h-[2px] bg-yellow-400"
                    initial={{ width: 40 }}
                    whileHover={{ width: 80 }}
                    transition={{ duration: 0.25 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
