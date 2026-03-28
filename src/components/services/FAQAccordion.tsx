"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppURL } from "@/lib/whatsapp";
import type { FAQSection } from "@/lib/data/services";

export default function FAQAccordion({ section }: { section: FAQSection }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding px-4 sm:px-6 bg-[var(--primary-white)]">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit animate-fade-in-up">
          {section.eyebrow && (
            <span
              className="type-eyebrow text-[var(--accent-blue)] mb-3 block"
              style={{ fontSize: "var(--text-base)" }}
            >
              {section.eyebrow}
            </span>
          )}
          <h2
            className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--primary-black)] leading-[1] font-oswald mb-6"
            dangerouslySetInnerHTML={{
              __html: section.headline.replace(
                /<em>(.*?)<\/em>/g,
                '<span style="color:var(--primary-yellow)">$1</span>',
              ),
            }}
          />
          <p className="type-body text-[var(--muted-text)] mb-8">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our
            team and we&apos;ll be happy to help.
          </p>
          <a
            href={getWhatsAppURL("general", "faq")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm"
          >
            <FaWhatsapp className="w-4 h-4" />
            Ask Us on WhatsApp
          </a>
        </div>

        {/* RIGHT COLUMN */}
        <div
          className="w-full lg:w-2/3 flex flex-col gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          {section.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border rounded-[var(--radius-lg)] transition-all duration-[var(--transition-base)] overflow-hidden ${
                  isOpen
                    ? "border-[var(--primary-blue)] bg-[var(--secondary-white)]/40 shadow-sm"
                    : "border-[var(--primary-black)]/10 bg-white hover:border-[var(--primary-black)]/30"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left focus:outline-none"
                >
                  <h3
                    className={`text-lg lg:text-xl uppercase font-bold transition-colors duration-[var(--transition-base)] ${
                      isOpen
                        ? "text-[var(--primary-blue)]"
                        : "text-[var(--primary-black)]"
                    }`}
                    style={{
                      fontFamily: "var(--font-oswald), system-ui, sans-serif",
                      letterSpacing: "var(--tracking-tight)",
                    }}
                  >
                    {item.question}
                  </h3>
                  <div
                    className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-[var(--transition-base)] ${
                      isOpen
                        ? "bg-[var(--primary-blue)] text-white"
                        : "bg-[var(--primary-black)]/5 text-[var(--primary-black)]"
                    }`}
                  >
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-[var(--transition-slow)] ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="type-body text-[var(--muted-text)] px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
