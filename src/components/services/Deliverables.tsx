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
    <section className="section-padding px-4 sm:px-6 bg-[var(--primary-white)]">
      <div className="max-w-[1240px] mx-auto">
        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          {section.eyebrow && (
            <span
              className="type-eyebrow text-[var(--accent-blue)] mb-3 block"
              style={{ fontSize: "var(--text-base)" }}
            >
              {section.eyebrow}
            </span>
          )}

          <h2
            style={{
              fontFamily: "var(--font-oswald)",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              textTransform: "uppercase",
              letterSpacing: "var(--tracking-tight)",
              color: "var(--primary-black)",
            }}
            dangerouslySetInnerHTML={{
              __html: section.headline.replace(
                /<em>(.*?)<\/em>/g,
                '<span style="color:var(--primary-yellow)">$1</span>',
              ),
            }}
          />

          <p className="mt-6 text-lg text-[var(--muted-text)] leading-relaxed">
            These aren’t just outputs. These are the tools, clarity, and
            direction you’ll carry forward long after the session ends.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="lg:grid lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          {/* LEFT — STICKY */}
          <div className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <p className="text-xs uppercase tracking-widest text-[var(--accent-blue)]">
                Your Outcome
              </p>

              <h3
                className="text-3xl leading-tight"
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 800,
                  letterSpacing: "var(--tracking-tight)",
                }}
              >
                You don’t leave with advice.
                <br />
                <span className="text-[var(--primary-yellow)]">
                  You leave with clarity.
                </span>
              </h3>

              <p className="text-[var(--muted-text)] leading-relaxed">
                Everything you receive is designed to help you make confident,
                informed decisions — not guesses.
              </p>

              <div className="w-16 h-[3px] bg-[var(--primary-yellow)]" />

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
                  <p className="text-xs uppercase tracking-widest text-[var(--accent-blue)] mb-3">
                    Deliverable {String(i + 1).padStart(2, "0")}
                  </p>

                  {/* Title */}
                  <h3
                    className="text-2xl lg:text-3xl mb-4 transition-all duration-300 group-hover:translate-x-1"
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontWeight: 700,
                      letterSpacing: "var(--tracking-tight)",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-[var(--muted-text)] leading-relaxed max-w-xl">
                    {item.description}
                  </p>

                  {/* Line */}
                  <motion.div
                    className="mt-6 h-[2px] bg-[var(--primary-yellow)]"
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
