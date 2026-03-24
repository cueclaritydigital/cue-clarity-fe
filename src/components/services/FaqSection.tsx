"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "./FadeUp";

interface Faq { _key: string; question: string; answer: string; }
interface FaqSectionData {
  _type: "faqSection";
  eyebrow?: string;
  heading?: string;
  bgColor?: "white" | "cream";
  faqs: Faq[];
}
const BG: Record<string, string> = {
  white: "var(--primary-white)",
  cream: "var(--secondary-white)",
};

export default function FaqSection({ data }: { data: FaqSectionData }) {
  const [open, setOpen] = useState<string | null>(null);
  const color = data.bgColor ?? "white";

  return (
    <section className="section-padding" style={{ backgroundColor: BG[color] }}>
      <div className="section-container max-w-3xl">
        <FadeUp className="mb-10">
          {data.eyebrow && (
            <p className="type-eyebrow mb-3 tracking-[0.2em] text-[var(--primary-yellow)]">
              {data.eyebrow}
            </p>
          )}
          {data.heading && (
            <h2 className="font-oswald font-extrabold uppercase text-[var(--primary-black)]"
              style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)" }}>
              {data.heading}
            </h2>
          )}
        </FadeUp>

        <div className="flex flex-col divide-y divide-[var(--secondary-white)]">
          {data.faqs?.map((faq, i) => (
            <FadeUp key={faq._key} delay={i * 0.05}>
              <button
                onClick={() => setOpen(open === faq._key ? null : faq._key)}
                className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                aria-expanded={open === faq._key}
              >
                <span className="font-jakarta font-semibold text-base leading-snug text-[var(--primary-black)] group-hover:text-[var(--primary-blue)] transition-colors">
                  {faq.question}
                </span>
                <span
                  className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full font-bold text-sm transition-all duration-200"
                  style={{
                    backgroundColor: open === faq._key ? "var(--primary-yellow)" : "var(--secondary-white)",
                    color: "var(--primary-black)",
                    transform: open === faq._key ? "rotate(45deg)" : "none",
                  }}
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === faq._key && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm leading-relaxed text-[var(--muted-text)]">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
